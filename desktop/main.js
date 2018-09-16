const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win 

//Called when Electron has finished initialization and ready to create browser windows
app.on('ready', createWindow)

function createWindow() {

    win = new BrowserWindow({
        width: 1200, 
        height: 800,
        title: 'Bookmarker'
    })

    //Open the dev tools
    win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })

    //TODO
    //Change the path when packaging the final app
    win.loadURL('http://localhost:8100')
    // win.loadURL(url.format({       
    //     pathname: path.join(__dirname, './www/index.html'), 
    //     protocol: 'file:',
    //     slashes: true
    // }))

}

app.on('window-all-closed', () => {
    //For mac os, it is common for applications to have their menu active even
    //though all windows for them are now closed
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    //Only on Mac, when dock icon is clicked and no window for the app is already open
    if (win == null) {
        createWindow()
    }
})

