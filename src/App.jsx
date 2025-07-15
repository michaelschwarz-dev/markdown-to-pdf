import React, { useState } from 'react';
import { marked } from 'marked';
import htmlToPdfmake from 'html-to-pdfmake';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import robotoMonoSrc from '../public/fonts/RobotoMono-Regular.ttf?base64';

pdfMake.vfs = {
  ...pdfFonts.pdfMake.vfs,
  'RobotoMono-Regular.ttf': robotoMonoSrc,
};

pdfMake.fonts = {
  Roboto: {
    normal: 'Roboto-Regular.ttf',
    bold: 'Roboto-Medium.ttf',
    italics: 'Roboto-Italic.ttf',
    bolditalics: 'Roboto-MediumItalic.ttf',
  },
  RobotoMono: {
    normal: 'RobotoMono-Regular.ttf',
    bold: 'RobotoMono-Regular.ttf',
    italics: 'RobotoMono-Regular.ttf',
    bolditalics: 'RobotoMono-Regular.ttf',
  },
};

export default function App() {
  const [markdown, setMarkdown] = useState('# Hello PDF');

  const generatePdf = () => {
    const html = marked.parse(markdown);
    const pdfContent = htmlToPdfmake(html, {
      defaultStyles: {
        code: {
          font: 'RobotoMono',
          fontSize: 10,
        },
        pre: {
          font: 'RobotoMono',
          fontSize: 10,
          margin: [0, 4, 0, 4],
        },
      },
    });

    const docDefinition = {
      content: pdfContent,
      defaultStyle: { font: 'Roboto', fontSize: 12 },
      pageSize: 'A4',
      pageMargins: [40, 60, 40, 60],
    };

    pdfMake.createPdf(docDefinition).download('document.pdf');
  };

  return (
    <div style={{ padding: 20 }}>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Markdown eingeben"
      />
      <br />
      <button onClick={generatePdf}>PDF generieren</button>
    </div>
  );
}
