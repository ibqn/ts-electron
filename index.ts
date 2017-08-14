import { app, BrowserWindow } from 'electron';
import * as url from 'url';
import * as path from 'path';


let win = null;

const createWindow = () => {
  win = new BrowserWindow({
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
  win.webContents.openDevTools()

  //win.show(true);

  win.on('closed', () => {
    win = null;
  });
};

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
})
