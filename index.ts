import { htmlTemplate } from "./template";
import systemConfig from "@/configs/app_config";

import { IHTMLContent } from "@/domain/pdf_domain";
import { PDFService } from "./src/core/services/pdf_services";

import("./src/pkg/configs/pdf_config");

async function createPdf() {
  try {
    const replacements: IHTMLContent = {
      DOCUMENT_VERSION_TYPE: "ORIGINAL",
      DOCUMENT_DATE: "2024-08-29",
      CARRIER_NAME: "Global Shipping Ltd.",
      PORT_OF_LOADING: "Port of Shanghai",
      PORT_OF_DISCHARGE: "Port of Los Angeles",
      PORT_OF_DESTINATION: "Los Angeles, USA",
      DESCRIPTION_OF_GOODS: "Electronics",
      PACKING: "Boxes",
      TOTAL_GROSS_WEIGHT: "1000 kg",
      TOTAL_NET_WEIGHT: "950 kg",
      TOTAL_NUMBER_OF_BAG: "50 bags",
      SHIPPING_MARK: "GSL12345",
      REMARK: "Handle with care",
    };
    const pdfService = new PDFService();
    pdfService.convertPDF<IHTMLContent>(htmlTemplate, replacements);
    console.log("----");
    // console.log(IHTMLContent);
    console.log("----");
  } catch (error) {
    console.error("Error creating PDF:", error);
  }
}

// Call the function
createPdf();
