"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var window_creator_1 = require("./window_creator");
var windowCreator = new window_creator_1.WindowCreator(electron_1.app);
windowCreator.setup();
