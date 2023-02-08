//app 模块，控制整个应用程序的事件生命周期。
//BrowserWindow 模块，它创建和管理程序的窗口。
const { app, BrowserWindow } = require ('electron');
const electron = require('electron')
const path = require('path')
const url = require('url')

let mainWindow
const Menu = electron.Menu

//app模块的ready事件被激发后创建浏览器窗口
app.on('ready', () => {
    //去除任务栏
    Menu.setApplicationMenu(null);
    //创建一个窗口
    const mainWindow = new BrowserWindow({
        //加载图标
        icon:path.join(__dirname,'./icon/icon.ico'),
    });
    //窗口加载GitHub
    mainWindow.loadURL("https://github.com/");
})
