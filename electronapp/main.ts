import { BrowserWindow, app } from "electron"
import { WindowCreator } from './window_creator'

let windowCreator = new WindowCreator(app)
windowCreator.setup()



