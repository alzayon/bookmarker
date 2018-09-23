
import { App, BrowserWindow } from "electron"
const path = require('path')
const url = require('url')


export class WindowCreator {

    private browserWindow: BrowserWindow | null

    constructor(public app: App) {
    }

    setup(): void {
        //Called when Electron has finished initialization and ready to create browser windows
        this.app.on('ready', this.createWindow)
        this.setupAppHandlers()
    }
    setupAppHandlers(): any {
        this.app.on('window-all-closed', () => {
            //For mac os, it is common for applications to have their menu active even
            //though all windows for them are now closed
            if (process.platform !== 'darwin') {
                this.app.quit()
            }
        })
        
        this.app.on('activate', () => {
            //Only on Mac, when dock icon is clicked and no window for the app is already open
            if (this.browserWindow == null) {
                this.createWindow()
            }
        })
    }

    createWindow(): void {

        this.browserWindow = new BrowserWindow({
            width: 1200, 
            height: 800,
            title: 'Bookmarker'
        })
    
        //Open the dev tools
        this.browserWindow.webContents.openDevTools()
    
        this.browserWindow.on('closed', () => {
            this.browserWindow = null
        })
    
        //TODO
        //Change the path when packaging the final app
        //win.loadURL('http://localhost:8100')
        this.browserWindow.loadURL(url.format({       
            pathname: path.join(__dirname, '../www/index.html'), 
            protocol: 'file:',
            slashes: true
        }))
    
    }

    
}