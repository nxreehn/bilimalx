// ==UserScript==
// @name         BlmxTestBranch
// @namespace    noreehn.
// @version      0.1
// @description  ScriptAboutText
// @author       noreehn.
// @match        https://school.bilimal.kz/*
// @icon         https://cdn-icons-png.flaticon.com/512/258/258304.png
// @homepageURL  
https://raw.githubusercontent.com/nxreehn/bilimalx/main/blmxtestbranch.js
// @updateURL    
https://raw.githubusercontent.com/nxreehn/bilimalx/main/blmxtestbranch.js
// @downloadURL  https://raw.githubusercontent.com/nxreehn/bilimalx/main/blmxtestbranch.js
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_setClipboard
// ==/UserScript==

const storedLogin = localStorage.getItem('login');
const storedPassword = localStorage.getItem('password');

if (storedLogin && storedPassword) {
  checkLogin(storedLogin, storedPassword);
} else {
  const html = `
    <div>Введите выданный вам логин:</div>
    <input type="text" id="loginInput">
    <div>Введите выданный вам пароль:</div>
    <input type="password" id="passwordInput">
    <button id="submitButton">Войти</button>
  `;

  document.body.innerHTML = html;

  const submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', () => {
    const loginInput = document.getElementById('loginInput');
    const passwordInput = document.getElementById('passwordInput');
    const login = loginInput.value;
    const password = passwordInput.value;
    checkLogin(login, password);
  });
}

function checkLogin(login, password) {
  fetch('https://raw.githubusercontent.com/nxreehn/bilimalx/main/users.txt')
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
        console.log('Вход выполнен!');
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
