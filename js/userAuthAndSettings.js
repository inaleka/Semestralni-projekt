function toggleElement(element) {
    element.classList.toggle('none');
}


function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    const loginButtonsContainer = document.getElementById('loginButtons');
    const logoutBtn = document.getElementById('logoutBtn');
    const leftAd = document.getElementById('leftAd');
    const rightAd = document.getElementById('rightAd');
    if (isLoggedIn) {
        loginButtonsContainer.classList.add('none'); // Скрываем кнопки входа при входе
        logoutBtn.classList.remove('none'); // Показываем кнопку "Logout" при входе
        const userType = localStorage.getItem('userType');
        if (userType === 'Placený uživatel') {
            leftAd.classList.add('none'); // Скрываем левую рекламу для платных пользователей
            rightAd.classList.add('none'); // Скрываем правую рекламу для платных пользователей
        }
    } else {
        loginButtonsContainer.classList.remove('none'); // Показываем кнопки входа при выходе
        logoutBtn.classList.add('none'); // Скрываем кнопку "Logout" при выходе
        leftAd.classList.remove('none'); // Показываем левую рекламу для неавторизованных пользователей
        rightAd.classList.remove('none'); // Показываем правую рекламу для неавторизованных пользователей
    }
}


function handleLogin() {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    if (!isLoggedIn) {
        const username = prompt('Enter your username:');
        const password = prompt('Enter your password:');
        // Проверка наличия пользователя в Local Storage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('userType', user.accountType); // Сохраняем тип пользователя
            toggleElement(document.querySelector('.weather'));
            checkLoginStatus(); // Проверяем статус входа и скрываем кнопки
        } else {
            alert('Invalid username or password.');
        }
    } else {
        alert('You are already logged in.');
    }
}