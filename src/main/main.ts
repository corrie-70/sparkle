const electron = require("electron");

const { app, BrowserWindow } = electron;

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        center: true,
        backgroundColor: '#fff',
        webPreferences: {
            // 允许渲染进程使用node API
            nodeIntegration: true,
        },
        // frame: false,
    });

    win.loadURL("http://localhost:3000/");
    win.webContents.openDevTools();

    win.on("closed", function () {
        win = null;
    });
}

app.whenReady().then(createWindow);

export {};
