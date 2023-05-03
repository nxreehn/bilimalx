// ==UserScript==
// @name         BilimalX
// @namespace    noreehn.
// @version      1.5.5
// @description  Скрипт даёт возможность выставить оценки после закрытия базы. 
// @author       https://t.me/noreehn
// @match        https://school.bilimal.kz/*
// @icon         https://cdn-icons-png.flaticon.com/512/258/258304.png
// @homepageURL  https://github.com/nxreehn/bilimalx/blob/main/README.md
// @updateURL    https://raw.githubusercontent.com/nxreehn/bilimalx/main/main.js
// @downloadURL  https://raw.githubusercontent.com/nxreehn/bilimalx/main/main.js
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_setClipboard
// ==/UserScript==

(function() {
    'use strict';
    console.log("Script Loaded.");
    document.querySelectorAll('td.mark.current.sor').forEach((e) => {
        const tasksDiv = e.querySelector('#tasks');
        if (!e.querySelector('.tooltipster.mark_symbol.is-update') && tasksDiv) {
            tasksDiv.innerHTML = '<div class="mark-plus">+</div>';
        } else if (!e.querySelector('.tooltipster.mark_symbol.is-update')) {
            e.insertAdjacentHTML('beforeend', '<div id="tasks" style="display: flex; align-items: center; justify-content: flex-end; padding: 5px;" data-bg="none"><div class="mark-plus">+</div></div>');
        }
    });
    document.querySelectorAll('td.mark.current.soch').forEach((e) => {
        const tasksDiv = e.querySelector('#tasks');
        if (!e.querySelector('.tooltipster.mark_symbol.is-update') && tasksDiv) {
            tasksDiv.innerHTML = '<div class="mark-plus">+</div>';
        } else if (!e.querySelector('.tooltipster.mark_symbol.is-update')) {
            e.insertAdjacentHTML('beforeend', '<div id="tasks" style="display: flex; align-items: center; justify-content: flex-end; padding: 5px;" data-bg="none"><div class="mark-plus">+</div></div>');
        }
    });
    document.querySelectorAll('td.mark.current').forEach((e) => {
        const tasksDiv = e.querySelector('#tasks');
        if (!e.querySelector('.tooltipster.mark_symbol.is-update') && tasksDiv) {
            tasksDiv.innerHTML = '<div class="mark-plus">+</div>';
        } else if (!e.querySelector('.tooltipster.mark_symbol.is-update')) {
            e.insertAdjacentHTML('beforeend', '<div id="tasks" style="display: flex; align-items: center; justify-content: flex-end; padding: 5px;" data-bg="none"><div class="mark-plus">+</div></div>');
        }
    });
})();
