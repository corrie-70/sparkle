import { BrowserWindow, ipcMain } from "electron";
import { IPCCommunicationInterface } from "src/utils/ipc/interface";
import { IPCChannel } from "src/utils/ipc/ipc-channels";
import { IPCMainOn } from "./ipc/ipc-main";

class AppWindow implements IPCCommunicationInterface {
    private appWindow: BrowserWindow;

    bindEvents = () => {
        IPCMainOn(IPCChannel.window.minimize, (params) => {
            console.log(params);
            this.appWindow.minimize();
        });
        IPCMainOn(IPCChannel.window.maximize, (params) => {
            console.log(params);
            this.appWindow.maximize();
        });
        IPCMainOn(IPCChannel.window.normalsize, (params) => {
            console.log(params);
            this.appWindow.unmaximize();
        });
    };
    
    removeEvents = () => {
        for (const key in IPCChannel.window) {
            ipcMain.removeAllListeners(IPCChannel.window[key]);
        }
    };

    createWindow() {
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
    }
}

const appWindow = new AppWindow();

export { appWindow };
