
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
