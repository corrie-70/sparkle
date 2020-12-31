import { ipcRenderer } from "electron";

export function IPCRendererSendToMain(channel: string, ...args) {
    ipcRenderer.send(channel, ...args);
}
