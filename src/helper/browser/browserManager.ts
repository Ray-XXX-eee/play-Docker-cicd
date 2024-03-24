import { LaunchOptions, chromium, firefox } from "@playwright/test"

const options: LaunchOptions = {
    headless: true
}

export const invokeBrowser = () => {
    const browserType = process.env.BROWSER;
    switch (browserType) {
        case "chrome":
            return chromium.launch(options);
        case "firefox":
            return firefox.launch(options);
        default:
            throw new Error("No browser selected");
    } 
}
