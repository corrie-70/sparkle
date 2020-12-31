import { appWindow } from "./window";

const electron = require("electron");
const { app } = electron;

// export {};

(function () {
    app.whenReady().then(appWindow.createWindow);
})();
