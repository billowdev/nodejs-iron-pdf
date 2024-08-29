export interface PDFServiceImpls {
    convertPDF<T extends Record<string, any>>(htmlTemplate: string, content: T): Promise<void>;
}

