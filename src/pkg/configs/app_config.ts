import dotenv from "dotenv";

// Load environment variables from the .env file
dotenv.config();

// Configuration object
const config = {
    IRON_PDF_LICENSE_KEY: process.env.IRON_PDF_LICENSE_KEY || "",
    PORT: process.env.PORT || "3000"
};

// Validate required configuration
if (!config.IRON_PDF_LICENSE_KEY) {
    throw new Error("Missing required environment variable: IRON_PDF_LICENSE_KEY");
}

// Export the configuration object
export default config;
