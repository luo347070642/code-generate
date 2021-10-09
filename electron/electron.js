const { app, BrowserWindow } = require('electron')

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      backgroundThrottling: false,
      nodeIntegration: true
    }
  })
  mainWindow.loadURL(`http://editor.chenyuxing.top/editor`)
  // mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`)
  mainWindow.removeMenu()
}
app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
