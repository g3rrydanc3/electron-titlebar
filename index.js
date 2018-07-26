/*
 *  This file is part of electron-titlebar.
 *
 *  Copyright (c) 2016 Menci <huanghaorui301@gmail.com>
 *
 *  electron-titlebar is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Lesser General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  electron-titlebar is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public License
 *  along with electron-titlebar. If not, see <http://www.gnu.org/licenses/>.
 */

'use strict';

function installTitlebar() {
    if (window.electron_titlebar_installed === true) return;

    let titlebar = document.getElementById('electron-titlebar');
    if (!titlebar) return;

    window.electron_titlebar_installed = true;

    if (titlebar.classList.contains('drag')) {
        let drag = document.createElement('div');
        drag.id = 'electron-titlebar-drag';
        titlebar.appendChild(drag);
    }

    const platform = titlebar.getAttribute('platform') || process.platform;
    document.body.parentNode.setAttribute('electron-titlebar-platform', platform);

    const w = require('electron').remote.getCurrentWindow();
    if (!w.isResizable() || !w.isMaximizable()) titlebar.classList.add('no-maximize');
    if (!w.isMinimizable()) titlebar.classList.add('no-minimize');

    const path = require('path'),
          url = require('url');
    const basedir = path.resolve(path.dirname(require.resolve('./index')), 'titlebar');

    if (platform !== 'darwin') {
        function createButton(type) {
            function createImage(type, display) {
                if (typeof display !== 'string') display = '';
                let img = document.createElement('img');
                img.style.display = display;
                img.className = 'electron-titlebar-button-img-' + type;

                let src;
                if (platform === 'linux') src = path.resolve(basedir, type + '.svg');
                else if (platform === 'win32') src = path.resolve(basedir, 'caption-buttons.svg#' + type);

                img.setAttribute('src', url.resolve('file://', src));
                return img;
            }
            let div = document.createElement('div');
            div.className = 'electron-titlebar-button electron-titlebar-button-' + type;

            if (type === 'maximize') {
                div.appendChild(createImage('maximize'));
                div.appendChild(createImage('restore', 'none'));
            } else div.appendChild(createImage(type));

            return div;
        }

        for (let x of ['close', 'minimize', 'maximize']) titlebar.appendChild(createButton(x));

        // register events
        for (let elem of document.querySelectorAll('#electron-titlebar > .electron-titlebar-button, #electron-titlebar > .electron-titlebar-button img')) {
            elem.addEventListener('dragstart', (e) => { e.preventDefault(); })
        }

        function showOrHide(elem, show) {
            if (show === true) elem.style.display = '';
            else elem.style.display = 'none';
        }

        let buttomImgMaximize = document.querySelector('#electron-titlebar > .electron-titlebar-button .electron-titlebar-button-img-maximize');
		let buttomImgRestore = document.querySelector('#electron-titlebar > .electron-titlebar-button .electron-titlebar-button-img-restore');
		
		function maximizedBehavior(){
			if(w.isMaximized()){
				showOrHide(buttomImgMaximize, false);
				showOrHide(buttomImgRestore, true);
				if (titlebar.classList.contains('drag')){
					let drag = document.getElementById('electron-titlebar-drag');
					drag.style.top = 0;
					drag.style.left = 0;
					drag.style.height = '100%';
					drag.style.width = '100%';
				}
			}
			else{
				showOrHide(buttomImgMaximize, true);
				showOrHide(buttomImgRestore, false);
				if (titlebar.classList.contains('drag')){
					let drag = document.getElementById('electron-titlebar-drag');
					drag.style.top = '8px';
					drag.style.left = '8px';
					drag.style.height = 'calc(100% - 8px)';
					drag.style.width = 'calc(100% - 8px)';
				}
			}
		}
		maximizedBehavior();

        w.on('maximize', () => {
            maximizedBehavior();
        });

        w.on('unmaximize', () => {
            maximizedBehavior();
        });

        // workaround for the .electron-titlebar-button is still :hover after maximize window
        for (let elem of document.querySelectorAll('#electron-titlebar > .electron-titlebar-button')) {
            elem.addEventListener('mouseover', () => {
                elem.classList.add('hover');
            });
            elem.addEventListener('mouseout', () => {
                elem.classList.remove('hover');
            });
        }

        let buttonClose = document.querySelector('#electron-titlebar > .electron-titlebar-button-close');
        if (buttonClose) buttonClose.addEventListener('click', () => {
            w.close();
        });

        let butonMinimize = document.querySelector('#electron-titlebar > .electron-titlebar-button-minimize');
        if (butonMinimize) butonMinimize.addEventListener('click', () => {
            w.minimize();
        });

        let butonMaximize = document.querySelector('#electron-titlebar > .electron-titlebar-button-maximize');
        if (butonMaximize) butonMaximize.addEventListener('click', () => {
            if (!w.isMaximized()) w.maximize();
            else w.unmaximize();
        });
    }
};

if (document.readyState === 'complete' || document.readyState === 'interactive') installTitlebar();
else document.addEventListener('DOMContentLoaded', installTitlebar);
