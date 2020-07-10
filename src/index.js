/* This file run the 'main.js' that contains the function for create the window */
const {crearVentana} = require('./main') // we call the main here
const {app} = require('electron') // we require the module 'app' for determine when the application is ready
require('electron-reload')(__dirname)
// When the application is ready we will can run build the window calling the method 'createWindow' from 'main.js'(line: 2)
app.whenReady().then(crearVentana);