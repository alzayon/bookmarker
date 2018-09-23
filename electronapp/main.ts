import { app, BrowserWindow } from "electron";
import { WindowCreator } from "./window_creator";

const windowCreator = new WindowCreator(app);
windowCreator.setup();
