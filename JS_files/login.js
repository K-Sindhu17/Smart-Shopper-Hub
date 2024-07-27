
let reg_btn = document.getElementById('reg_btn')

reg_btn.addEventListener('click', () => {
    window.location.href = '../html_files/register.html';
});


// target form tag
let login_form = document.getElementById('login_form')
console.log(login_form);

// target sign in button
let login_btn = document.getElementById('btn1')
console.log(login_btn);


login_btn.addEventListener('click', (demo) => {
    demo.preventDefault()

    // target the fields in inside the sign in button 
    let Email = document.getElementById('email').value
    console.log(Email);
    let Pwd = document.getElementById('password').value
    console.log(Pwd);
 
    // get the data from local storage
    let email= localStorage.getItem('email')
    let password = localStorage.getItem('password')
     
    if(Email === '' || Pwd === ''){
        alert('Enter your details correctly..')
    }

    else if(email === Email && password === Pwd) {
        // Redirect to home page
        alert('successfully login...');
        window.location.href = '../html_files/home.html';
        // window.open('../html_files/home.html');
    } 
    else{
        alert('Invalid details. Please register..');
    }

});