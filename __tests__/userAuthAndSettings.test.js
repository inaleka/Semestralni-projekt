const { JSDOM } = require('jsdom');
const { document } = (new JSDOM('')).window;
global.document = document;


function checkLoginStatus() {

}

test('checkLoginStatus should toggle visibility of elements based on login status', () => {
 
    const loginButtonsContainer = document.createElement('div');
    loginButtonsContainer.id = 'loginButtons';
    const logoutBtn = document.createElement('button');
    logoutBtn.id = 'logoutBtn';
    const leftAd = document.createElement('div');
    leftAd.id = 'leftAd';
    const rightAd = document.createElement('div');
    rightAd.id = 'rightAd';

   
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('userType', 'Placený uživatel');
    checkLoginStatus();


    expect(loginButtonsContainer.classList.contains('none')).toBe(false);
    expect(logoutBtn.classList.contains('none')).toBe(false);
    expect(leftAd.classList.contains('none')).toBe(false);
    expect(rightAd.classList.contains('none')).toBe(false);

    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userType');
    checkLoginStatus();

    expect(loginButtonsContainer.classList.contains('none')).toBe(false);
    expect(leftAd.classList.contains('none')).toBe(false);
    expect(rightAd.classList.contains('none')).toBe(false);
});