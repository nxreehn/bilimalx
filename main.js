// ==UserScript==
// @name         BilimalXtnd.
// @namespace    noreehn.
// @version      1.1
// @description  Скрипт даёт возможность выставить оценки после закрытия базы. Вводить нужно данные НЕ ОТ БИЛИМАЛ, а те,что выдал автор. Для каждого пользователя выдаётся отдельный логин и пароль, который записывается в базу. Чтобы получить свой логин и пароль напишите сюда: https://t.me/noreehn
// @author       noreehn.
// @match        https://school.bilimal.kz/*
// @icon         https://cdn-icons-png.flaticon.com/512/258/258304.png
// @homepageURL  https://raw.githubusercontent.com/nxreehn/bilimalx/main/main.js
// @updateURL    https://raw.githubusercontent.com/nxreehn/bilimalx/main/main.js
// @downloadURL  https://raw.githubusercontent.com/nxreehn/bilimalx/main/main.js
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_setClipboard
// ==/UserScript==

const storedLogin = localStorage.getItem('login');
const storedPassword = localStorage.getItem('password');


if (storedLogin && storedPassword) {
  checkLogin(storedLogin, storedPassword);
} else {
  
  const login = prompt('Введите выданный вам логин:');
  const password = prompt('Введите выданный вам пароль:');

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
        console.log("Вход выполнен!");
        localStorage.setItem('login', login);
        localStorage.setItem('password', password);

        fetch('https://raw.githubusercontent.com/nxreehn/bilimalx/main/blmlx.js')
          .then(response => response.text())
          .then(scriptText => {
            eval(scriptText);
          })
          .catch(error => {
            console.error('Ошибка при загрузке скрипта', error);
          });
      } else {
        alert('Неверный логин или пароль');
        localStorage.removeItem('login');
        localStorage.removeItem('password');
        const newLogin = prompt('Введите выданный вам логин:');
        const newPassword = prompt('Введите выданный вам пароль:');
        checkLogin(newLogin, newPassword);
      }
    })
    .catch(error => {
      console.error('Ошибка при загрузке списка пользователей', error);
    });
}
