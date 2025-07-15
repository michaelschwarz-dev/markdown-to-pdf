# Markdown to PDF

Diese kleine React-Anwendung ermöglicht es Markdown einzugeben und als PDF im A4-Format zu exportieren. Für normalen Text wird die Schriftart **Roboto** verwendet, Code-Blöcke erscheinen in **Roboto Mono**.

## Entwicklung starten

```bash
npm install
npm run dev
```

Im Browser ist die Anwendung unter `http://localhost:5173` erreichbar.

Um das PDF zu erzeugen, wird `pdfmake` eingesetzt. Die PDF-Datei hat weißen Hintergrund und vektorbasierten Inhalt.

### Hinweis zu den Schriftarten

Die Dateien für Roboto werden durch `pdfmake` mitgeliefert. Für **Roboto Mono** muss eine passende `RobotoMono-Regular.ttf` in den Ordner `public/fonts` gelegt werden, damit die Schrift auch im PDF eingebettet wird.
