import { IronPdfGlobalConfig } from "@ironsoftware/ironpdf";
// import systemConfig from "@/configs/app";
import systemConfig from "./app_config";

// Access the global IronPDF configuration
const config = IronPdfGlobalConfig.getConfig();

// Example: Use an environment variable (assuming you have IRON_PDF_LICENSE_KEY in your .env file)
const licenseKey = systemConfig.IRON_PDF_LICENSE_KEY
if (licenseKey) {
  config.licenseKey = licenseKey;
}

// console.log("IronPDF Configuration:", config);
