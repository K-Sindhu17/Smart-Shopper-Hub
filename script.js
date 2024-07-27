
// logo
const logo_btn = document.getElementById('logo')

logo_btn.addEventListener('click', () => {
    window.location.href = './index.html';
});


// open login page
let login_btn = document.getElementById('login')
 
login_btn.addEventListener('click', () => {
    window.location.href = './html_files/login.html'
});


// open register page
let register_btn = document.getElementById('register')
 
register_btn.addEventListener('click', () => {
    window.location.href = './html_files/register.html'
});