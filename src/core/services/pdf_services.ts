import { PdfDocument } from "@ironsoftware/ironpdf";
import { PDFServiceImpls } from "../ports/services_ports";

export class PDFService implements PDFServiceImpls {
  // private repository?: any; // Replace `any` with the appropriate type for your repository

  // constructor(repository: any) { // Inject the repository via the constructor
  //     this.repository = repository;
  // }

  async convertPDF<T extends Record<string, any>>(
    htmlTemplate: string,
    content: T
  ): Promise<void> {
    let htmlContent = htmlTemplate;

    // Loop through the keys in the content object
    for (const key in content) {
      if (content.hasOwnProperty(key)) {
        const value = content[key];
        htmlContent = htmlContent.replace(`{{${key}}}`, String(value));
      }
    }

    // Assuming PdfDocument is a class that handles PDF creation from HTML
    const pdf = await PdfDocument.fromHtml(htmlContent);

    // Save the PDF document to the file system
    await pdf.saveAs("html-string-to-pdf.pdf");

    console.log("PDF created successfully!");
  }
}
