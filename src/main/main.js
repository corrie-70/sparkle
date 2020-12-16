"use strict";
exports.__esModule = true;
var electron = require("electron");
var app = electron.app, BrowserWindow = electron.BrowserWindow;
function createWindow() {
    var win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // 允许渲染进程使用node API
            nodeIntegration: true
        }
    });
    win.loadURL("http://localhost:3000/");
    win.webContents.openDevTools();
}
app.whenReady().then(createWindow);
