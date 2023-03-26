// ==UserScript==
// @name         BilimalXtnd.
// @namespace    noreehn.
// @version      1.0
// @description  Данный скрипт возвращает возможность выставить оценки в системе билимал даже после того как база была закрыта.
// @author       noreehn.
// @match        https://school.bilimal.kz/*
// @icon         https://cdn-icons-png.flaticon.com/512/258/258304.png
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
