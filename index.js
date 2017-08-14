"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var win = null;
var createWindow = function () {
    win = new electron_1.BrowserWindow({
        width: 800,
        height: 600
    });
    // and load the index.html of the app.
    /*
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }));
    */
    win.loadURL("http://localhost:8080/");
    // Open the DevTools.
    win.webContents.openDevTools();
    //win.show(true);
    win.on('closed', function () {
        win = null;
    });
};
electron_1.app.on('ready', createWindow);
// Quit when all windows are closed.
electron_1.app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});
