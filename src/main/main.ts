import { checkVersion } from "./autoUpdater";
import { appWindow } from "./window";

const electron = require("electron");
const { app } = electron;

(function () {
    app.whenReady().then(() => {
        checkVersion();
        appWindow.createWindow();
    });
})();
