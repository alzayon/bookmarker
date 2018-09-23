"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require('path');
var url = require('url');
var WindowCreator = /** @class */ (function () {
    function WindowCreator(app) {
        this.app = app;
    }
    WindowCreator.prototype.setup = function () {
        //Called when Electron has finished initialization and ready to create browser windows
        this.app.on('ready', this.createWindow);
        this.setupAppHandlers();
    };
    WindowCreator.prototype.setupAppHandlers = function () {
        var _this = this;
        this.app.on('window-all-closed', function () {
            //For mac os, it is common for applications to have their menu active even
            //though all windows for them are now closed
            if (process.platform !== 'darwin') {
                _this.app.quit();
            }
        });
        this.app.on('activate', function () {
            //Only on Mac, when dock icon is clicked and no window for the app is already open
            if (_this.browserWindow == null) {
                _this.createWindow();
            }
        });
    };
    WindowCreator.prototype.createWindow = function () {
        var _this = this;
        this.browserWindow = new electron_1.BrowserWindow({
            width: 1200,
            height: 800,
            title: 'Bookmarker'
        });
        //Open the dev tools
        this.browserWindow.webContents.openDevTools();
        this.browserWindow.on('closed', function () {
            _this.browserWindow = null;
        });
        //TODO
        //Change the path when packaging the final app
        //win.loadURL('http://localhost:8100')
        this.browserWindow.loadURL(url.format({
            pathname: path.join(__dirname, '../www/index.html'),
            protocol: 'file:',
            slashes: true
        }));
    };
    return WindowCreator;
}());
exports.WindowCreator = WindowCreator;
