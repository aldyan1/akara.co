import fitz  # PyMuPDF

# Membuka file PDF
file_path = "mumet.pdf"  # Ganti dengan nama file Anda
doc = fitz.open(file_path)

# Membaca teks dari setiap halaman
for page_num in range(len(doc)):
    page = doc[page_num]
    print(f"--- Halaman {page_num + 1} ---")
    print(page.get_text())
