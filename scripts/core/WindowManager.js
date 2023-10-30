const remote = require('@electron/remote');
const getWin = () => remote.BrowserWindow.getFocusedWindow();
const closeWin = () => {
    getWin().close();
}
const minimizeWin = () => {
    getWin().minimize();
}
const maximizeWin = () => {
    const win = getWin();
    win.isMaximized() ? win.unmaximize() : win.maximize();
}
document.getElementById('minimize').addEventListener('click', minimizeWin);
document.getElementById('maximize').addEventListener('click', maximizeWin);
document.getElementById('close').addEventListener('click', closeWin);