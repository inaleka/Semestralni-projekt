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
        loginButtonsContainer.classList.add('none'); 
        logoutBtn.classList.remove('none'); 
        const userType = localStorage.getItem('userType');
        if (userType === 'Placený uživatel') {
            leftAd.classList.add('none'); 
            rightAd.classList.add('none'); 
        }
    } else {
        loginButtonsContainer.classList.remove('none'); 
        logoutBtn.classList.add('none'); 
        leftAd.classList.remove('none');
        rightAd.classList.remove('none'); 
    }
}


function handleLogin() {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    if (!isLoggedIn) {
        const username = prompt('Enter your username:');
        const password = prompt('Enter your password:');
    
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('userType', user.accountType); 
            toggleElement(document.querySelector('.weather'));
            checkLoginStatus(); 
        } else {
            alert('Invalid username or password.');
        }
    } else {
        alert('You are already logged in.');
    }
}