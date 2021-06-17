import { autoUpdater } from "electron-updater";
import path from "path";

autoUpdater.autoDownload = false;

autoUpdater.on("error", () => {
    console.log("error");
});

autoUpdater.on("checking-for-update", () => {
    console.log("checking-for-update");
});

autoUpdater.on("update-available", (info) => {
    console.log("update-available", info);
});

autoUpdater.on("update-not-available", (info) => {
    console.log("update-not-available", info);
});

export function checkVersion() {
    if (process.env.NODE_ENV === "development") {
        autoUpdater.updateConfigPath = path.join(
            __dirname,
            "../../dev-app-update.yml"
        );
    }
    autoUpdater.checkForUpdates();
}
