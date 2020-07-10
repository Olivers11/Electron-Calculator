// we need require the module 'electron' from node.js for make a desktop application 
const {BrowserWindow} = require('electron')

//----- This variable is global of our window ------
let ventana



/*We have here the function for create the window*/
function crearVentana(){
    ventana = new BrowserWindow({
        width:800, // in these lines we determine the size of the window(application)
        height:600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    ventana.loadFile('src/ui/index.html');
}

module.exports = {
    crearVentana
}
