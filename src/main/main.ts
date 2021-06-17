import { appWindow } from "./window";

const electron = require("electron");
const { app } = electron;

(function () {
    app.whenReady().then(appWindow.createWindow);
})();
