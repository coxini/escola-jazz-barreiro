from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    Image,
    KeepTogether,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "output" / "pdf"
PUBLIC = ROOT / "public" / "documentos"
LOGO = ROOT / "public" / "escola-jazz-barreiro-logo.png"

NAVY = colors.HexColor("#10293B")
INK = colors.HexColor("#16232C")
ORANGE = colors.HexColor("#EC6B3C")
CREAM = colors.HexColor("#F3EFE7")
MUTED = colors.HexColor("#62717A")
LINE = colors.HexColor("#CED4D6")


def setup_fonts():
    candidates = [
        ("/System/Library/Fonts/Supplemental/Arial.ttf", "/System/Library/Fonts/Supplemental/Arial Bold.ttf"),
        ("/Library/Fonts/Arial.ttf", "/Library/Fonts/Arial Bold.ttf"),
    ]
    for regular, bold in candidates:
        if Path(regular).exists() and Path(bold).exists():
            pdfmetrics.registerFont(TTFont("SiteSans", regular))
            pdfmetrics.registerFont(TTFont("SiteSansBold", bold))
            return
    raise RuntimeError("Arial fonts not found")


def styles():
    base = getSampleStyleSheet()
    return {
        "title": ParagraphStyle("Title", parent=base["Title"], fontName="SiteSansBold", fontSize=27, leading=31, textColor=NAVY, alignment=TA_LEFT, spaceAfter=9 * mm),
        "h1": ParagraphStyle("H1", parent=base["Heading1"], fontName="SiteSansBold", fontSize=17, leading=21, textColor=NAVY, spaceBefore=5 * mm, spaceAfter=3 * mm),
        "h2": ParagraphStyle("H2", parent=base["Heading2"], fontName="SiteSansBold", fontSize=11.5, leading=14, textColor=ORANGE, spaceBefore=3 * mm, spaceAfter=1.5 * mm),
        "body": ParagraphStyle("Body", parent=base["BodyText"], fontName="SiteSans", fontSize=9.2, leading=13, textColor=INK, spaceAfter=2.5 * mm),
        "small": ParagraphStyle("Small", parent=base["BodyText"], fontName="SiteSans", fontSize=7.7, leading=10, textColor=MUTED),
        "table": ParagraphStyle("Table", parent=base["BodyText"], fontName="SiteSans", fontSize=7.5, leading=9.4, textColor=INK),
        "table_bold": ParagraphStyle("TableBold", parent=base["BodyText"], fontName="SiteSansBold", fontSize=7.5, leading=9.4, textColor=INK),
        "center": ParagraphStyle("Center", parent=base["BodyText"], fontName="SiteSansBold", fontSize=9, leading=11, textColor=NAVY, alignment=TA_CENTER),
    }


S = None


def footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.line(18 * mm, 14 * mm, 192 * mm, 14 * mm)
    canvas.setFont("SiteSans", 7)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 9 * mm, "Escola de Jazz do Barreiro - José Cardoso Ferreira")
    canvas.drawRightString(192 * mm, 9 * mm, f"{doc.page}")
    canvas.restoreState()


def doc(path, top=18 * mm, bottom=20 * mm):
    frame = Frame(18 * mm, bottom, 174 * mm, A4[1] - top - bottom, leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
    return BaseDocTemplate(str(path), pagesize=A4, leftMargin=18 * mm, rightMargin=18 * mm, topMargin=top, bottomMargin=bottom, pageTemplates=[PageTemplate(id="main", frames=[frame], onPage=footer)], title="Escola de Jazz do Barreiro")


def header(kicker, title, note=None):
    logo = Image(str(LOGO), width=37 * mm, height=21.4 * mm)
    kicker_p = Paragraph(kicker.upper(), S["small"])
    title_p = Paragraph(title, S["title"])
    right = [kicker_p, Spacer(1, 2 * mm), title_p]
    if note:
        right.append(Paragraph(note, S["small"]))
    table = Table([[logo, right]], colWidths=[50 * mm, 124 * mm], hAlign="LEFT")
    table.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0), ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0)]))
    return [table, Spacer(1, 7 * mm)]


def styled_table(data, widths, header_rows=1, row_heights=None):
    header_style = ParagraphStyle("TableHeader", parent=S["table_bold"], textColor=colors.white)
    body_style = S["table"]
    formatted = []
    for row_index, row in enumerate(data):
        style = header_style if row_index < header_rows else body_style
        formatted.append([Paragraph(str(cell), style) if isinstance(cell, str) else cell for cell in row])
    t = Table(formatted, colWidths=widths, rowHeights=row_heights, repeatRows=header_rows)
    commands = [
        ("BACKGROUND", (0, 0), (-1, header_rows - 1), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, header_rows - 1), colors.white),
        ("FONTNAME", (0, 0), (-1, header_rows - 1), "SiteSansBold"),
        ("FONTNAME", (0, header_rows), (-1, -1), "SiteSans"),
        ("FONTSIZE", (0, 0), (-1, -1), 7.5),
        ("LEADING", (0, 0), (-1, -1), 9.4),
        ("GRID", (0, 0), (-1, -1), 0.45, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 2.4 * mm),
        ("RIGHTPADDING", (0, 0), (-1, -1), 2.4 * mm),
        ("TOPPADDING", (0, 0), (-1, -1), 2 * mm),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2 * mm),
    ]
    for row in range(header_rows, len(data)):
        if (row - header_rows) % 2:
            commands.append(("BACKGROUND", (0, row), (-1, row), CREAM))
    t.setStyle(TableStyle(commands))
    return t


def build_program(path):
    story = header("Programa pedagógico", "Programa de ensino", "Jazz, pop & rock - formação por etapas, prática de conjunto e palco.")
    story += [
        Paragraph("Uma escola assente na prática", S["h1"]),
        Paragraph("A formação articula linguagem musical, instrumento e combo. O repertório é trabalhado em contexto e consolidado em jam sessions, audições e apresentações públicas.", S["body"]),
        Paragraph("Curso de Iniciação", S["h1"]),
        Paragraph("Dos 6 aos 12 anos. Primeiro contacto estruturado com a música através do instrumento, da linguagem e da prática em conjunto.", S["body"]),
        styled_table([
            ["Componente", "Carga semanal", "Objetivo"],
            ["Instrumento", "30 min individual ou 1 h partilhada", "Técnica, escuta e expressão musical."],
            ["Linguagem musical", "1 h", "Ritmo, melodia e compreensão do repertório."],
            ["Prática de conjunto", "1 h", "Ouvir, acompanhar e tocar com outros."],
        ], [38 * mm, 43 * mm, 93 * mm]),
        Paragraph("Curso Intermédio", S["h1"]),
        Paragraph("Dos 13 aos 15 anos. Percurso de dois anos com linguagem, instrumento e combo. O estudo parte de canções, blues e formas elementares do jazz e da música moderna, sem depender da leitura de partitura.", S["body"]),
        Paragraph("A avaliação é contínua. A participação nas jam sessions e o desempenho nos combos têm peso determinante.", S["body"]),
        Paragraph("Curso Geral de Jazz", S["h1"]),
        Paragraph("A partir dos 16 anos. Formação para músicos que pretendem prosseguir estudos superiores ou aprofundar competências na área do jazz e da improvisação. Trabalha swing, bebop, hard bop, latin fusion, free jazz e jazz contemporâneo.", S["body"]),
        styled_table([
            ["Ano", "1.º semestre", "2.º semestre"],
            ["Preparatório", "Instrumento<br/>Teoria musical", "Instrumento<br/>Teoria musical"],
            ["I", "Instrumento<br/>Teoria musical e Harmonia<br/>Combo", "Instrumento<br/>Teoria musical e Harmonia<br/>Combo<br/>História do Jazz"],
            ["II", "Instrumento<br/>Teoria musical e Harmonia<br/>Combo", "Instrumento<br/>Teoria musical e Harmonia<br/>Combo<br/>Música e Tecnologia"],
            ["III", "Instrumento<br/>Combo<br/>Técnicas de Estúdio<br/>Composição e Arranjo", "Instrumento<br/>Combo<br/>Projeto final"],
        ], [29 * mm, 72.5 * mm, 72.5 * mm]),
        Paragraph("Saídas e competências", S["h2"]),
        Paragraph("O percurso prepara o aluno para integrar projetos de jazz e música improvisada, liderar projetos próprios, atuar ao vivo, participar em gravações e colaborar em produções para cinema ou teatro.", S["body"]),
        Paragraph("Curso Geral de Pop & Rock", S["h1"]),
        Paragraph("A partir dos 16 anos. Percurso orientado para as linguagens do pop e do rock, com prática de banda, tecnologia, estúdio e projeto final.", S["body"]),
        styled_table([
            ["Ano", "1.º semestre", "2.º semestre"],
            ["Preparatório", "Instrumento<br/>Teoria musical", "Instrumento<br/>Teoria musical"],
            ["I", "Instrumento<br/>Teoria musical e Harmonia<br/>Combo", "Instrumento<br/>Teoria musical e Harmonia<br/>Combo<br/>História do Pop & Rock"],
            ["II", "Instrumento<br/>Teoria musical e Harmonia<br/>Combo<br/>Técnicas de Estúdio", "Instrumento<br/>Teoria musical e Harmonia<br/>Combo<br/>Música e Tecnologia<br/>Projeto final"],
        ], [29 * mm, 72.5 * mm, 72.5 * mm]),
        Paragraph("Formação Livre", S["h1"]),
        Paragraph("Sem limite de idade: instrumento, songwriting e técnicas de improvisação em formato individual ou partilhado. Existem também pacotes de aulas avulso de instrumento com uma hora.", S["body"]),
        Paragraph("Instrumentos", S["h2"]),
        Paragraph("Bateria · Canto · Contrabaixo · Baixo elétrico · Guitarra · Piano · Saxofone · Trompete · Violino", S["body"]),
        Paragraph("Informações e horários", S["h1"]),
        Paragraph("Direção pedagógica: ejbdirecaopedagogica@gmail.com<br/>Secretaria: escolajazzdobarreiro@gmail.com<br/>Telefone: 212 073 116<br/>Rua Dr. Eusébio Leão, 11 - 2830-301 Barreiro", S["body"]),
    ]
    doc(path).build(story)


def form_line(label, width=174 * mm, height=10 * mm):
    t = Table([[Paragraph(label, S["small"])]], colWidths=[width], rowHeights=[height])
    t.setStyle(TableStyle([("BOX", (0, 0), (-1, -1), 0.55, LINE), ("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 2.5 * mm), ("TOPPADDING", (0, 0), (-1, -1), 2 * mm)]))
    return t


def build_form(path):
    story = header("Ano letivo 2025/26", "Ficha de inscrição", "Preencher em letra legível. A direção pedagógica confirma posteriormente o curso e o horário.")
    story += [
        Paragraph("Identificação do aluno", S["h2"]),
        form_line("Nome completo"),
        Spacer(1, 2 * mm),
        Table([[form_line("Data de nascimento", 54 * mm), form_line("Idade", 28 * mm), form_line("Nacionalidade", 88 * mm)]], colWidths=[56 * mm, 30 * mm, 88 * mm], style=TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 2 * mm)])),
        Spacer(1, 2 * mm),
        Table([[form_line("Documento: ☐ Cartão de Cidadão  ☐ Passaporte  ☐ Outro", 98 * mm), form_line("Número e validade", 72 * mm)]], colWidths=[100 * mm, 74 * mm], style=TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 2 * mm)])),
        Paragraph("Modalidade de ensino", S["h2"]),
        Paragraph("☐ Iniciação (6-12)   ☐ Intermédio (13-15)   ☐ Geral de Jazz (16+)   ☐ Geral de Pop & Rock (16+)<br/>☐ Livre - 30 min   ☐ Livre - 1 h   ☐ Pacote de aulas", S["body"]),
        form_line("Instrumento(s)", height=12 * mm),
        Paragraph("Disponibilidade", S["h2"]),
        form_line("Horários preferidos / possíveis", height=14 * mm),
        Spacer(1, 1 * mm),
        form_line("Horários impossíveis", height=14 * mm),
        Paragraph("Contactos", S["h2"]),
        styled_table([
            ["Pessoa", "Telemóvel", "Email"],
            ["Aluno", "", ""],
            ["Pai / encarregado", "", ""],
            ["Mãe / encarregada", "", ""],
            ["Outro", "", ""],
        ], [42 * mm, 47 * mm, 85 * mm], row_heights=[7 * mm, 8 * mm, 8 * mm, 8 * mm, 8 * mm]),
        Spacer(1, 2 * mm),
        Paragraph("Observações", S["h2"]),
        form_line("", height=11 * mm),
        Spacer(1, 2 * mm),
        Table([[Paragraph("Data: ____ / ____ / ______", S["body"]), Paragraph("Assinatura: __________________________________________", S["body"])]], colWidths=[65 * mm, 109 * mm], style=TableStyle([("VALIGN", (0, 0), (-1, -1), "BOTTOM"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0)])),
        Spacer(1, 2 * mm),
        Paragraph("Os dados destinam-se exclusivamente à gestão da inscrição e ao contacto administrativo e pedagógico.", S["small"]),
    ]
    doc(path, top=14 * mm, bottom=18 * mm).build(story)


def build_prices(path):
    story = header("Ano letivo 2025/26", "Preçário", "Valores mensais, salvo indicação em contrário.")
    story += [
        Paragraph("Inscrição", S["h1"]),
        styled_table([["Momento", "Valor"], ["Até junho", "20% de desconto"], ["A partir de julho", "40 €"]], [110 * mm, 64 * mm]),
        Paragraph("Mensalidades", S["h1"]),
        styled_table([
            ["Curso", "Base", "Suplementos / opções"],
            ["Iniciação", "52 €", "+ 55 € - instrumento individual 30 min"],
            ["Intermédio", "72 €", "+ 55 € - instrumento individual 30 min<br/>+ 95 € - instrumento individual 1 h"],
            ["Geral de Jazz / Pop & Rock", "100 € - preparatório<br/>112 € - anos I, II e III", "Inclui as componentes curriculares do respetivo ano"],
            ["Livre - instrumento", "55 €", "30 min individual ou 1 h partilhada<br/>95 € - 1 h individual"],
            ["Coro de Jazz", "12,50 € - alunos<br/>25 € - não alunos", ""],
        ], [61 * mm, 48 * mm, 65 * mm]),
        Paragraph("Pacotes de aulas", S["h1"]),
        styled_table([["Formato", "Valor por aula"], ["Até 4 aulas de instrumento - 1 h", "32 €"], ["5 ou mais aulas de instrumento - 1 h", "28 €"]], [120 * mm, 54 * mm]),
        Spacer(1, 9 * mm),
        KeepTogether([
            Paragraph("Confirmação", S["h2"]),
            Paragraph("Os valores e a disponibilidade de horários devem ser confirmados com a escola no momento da inscrição.", S["body"]),
            Paragraph("ejbdirecaopedagogica@gmail.com<br/>escolajazzdobarreiro@gmail.com<br/>212 073 116", S["body"]),
        ]),
    ]
    doc(path).build(story)


def main():
    global S
    setup_fonts()
    S = styles()
    OUT.mkdir(parents=True, exist_ok=True)
    PUBLIC.mkdir(parents=True, exist_ok=True)
    outputs = {
        "programa-ensino-jazz.pdf": build_program,
        "ficha-inscricao-2025-26.pdf": build_form,
        "precario-2025-26.pdf": build_prices,
    }
    for name, builder in outputs.items():
        target = OUT / name
        builder(target)
        (PUBLIC / name).write_bytes(target.read_bytes())


if __name__ == "__main__":
    main()
