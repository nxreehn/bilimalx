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

const storedLogin = localStorage.getItem('login');
const storedPassword = localStorage.getItem('password');


if (storedLogin && storedPassword) {
  checkLogin(storedLogin, storedPassword);
} else {
  
  const login = prompt('Введите логин:');
  const password = prompt('Введите пароль:');

  checkLogin(login, password);
}


function checkLogin(login, password) {
  
  fetch('https://raw.githubusercontent.com/nxreehn/bilimalx/main/users')
    .then(response => response.text())
    .then(usersText => {
      
      const users = usersText.split('\n');

      
      let userExists = false;
      for (const user of users) {
        const [userLogin, userPassword] = user.split(':');
        if (userLogin === login && userPassword === password) {
          userExists = true;
          break;
        }
      }

      
      if (userExists) {
        console.log("Логин и пароль введены верно!");
        localStorage.setItem('login', login);
        localStorage.setItem('password', password);

        fetch('https://raw.githubusercontent.com/nxreehn/bilimalx/main/blmlx.js')
          .then(response => response.text())
          .then(scriptText => {
            // выполняем загруженный скрипт
            eval(scriptText);
          })
          .catch(error => {
            console.error('Ошибка при загрузке скрипта', error);
          });
      } else {
        alert('Неверный логин или пароль');
        localStorage.removeItem('login');
        localStorage.removeItem('password');
        const newLogin = prompt('Введите логин:');
        const newPassword = prompt('Введите пароль:');
        checkLogin(newLogin, newPassword);
      }
    })
    .catch(error => {
      console.error('Ошибка при загрузке списка пользователей', error);
    });
}
