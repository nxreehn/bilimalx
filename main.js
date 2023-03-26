
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
