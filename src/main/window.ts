import { BrowserWindow, ipcMain } from "electron";
import { IPCCommunicationInterface } from "../utils/ipc/interface";
import { IPCChannel } from "../utils/ipc/ipc-channels";
import { IPCMainOn } from "./ipc/ipc-main";

class AppWindow implements IPCCommunicationInterface {
    private appWindow: BrowserWindow | null = null;

    bindEvents = () => {
        IPCMainOn(IPCChannel.window.minimize, () => {
            this.appWindow.minimize();
        });
        IPCMainOn(IPCChannel.window.maximize, () => {
            this.appWindow.maximize();
        });
        IPCMainOn(IPCChannel.window.normalsize, () => {
            this.appWindow.unmaximize();
        });
    };

    removeEvents = () => {
        for (const key in IPCChannel.window) {
            ipcMain.removeAllListeners(IPCChannel.window[key]);
        }
    };

    createWindow = () => {
        let win = new BrowserWindow({
            width: 800,
            height: 600,
            center: true,
            backgroundColor: "#fff",
            webPreferences: {
                // 允许渲染进程使用node API
                nodeIntegration: true,
            },
            // titleBarStyle: "hiddenInset",
            frame: false,
        });

        win.loadURL("http://localhost:3000/");
        win.webContents.openDevTools();

        this.appWindow = win;

        this.bindEvents();
    };
}

const appWindow = new AppWindow();

export { appWindow };
