import { ipcMain } from "electron";
export function IPCMainOn(channel: string, callback: Function) {
    ipcMain.on(channel, (event: Electron.IpcMainEvent, ...args: any[]) => {
        callback({ event, ...args });
    });
}
