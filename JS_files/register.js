let login_btn = document.getElementById('login_btn');
 
login_btn.addEventListener('click', () => {
    window.location.href = '../html_files/login.html';
});


let register_page = document.getElementById('register_page');
console.log(register_page);

let signup_btn = document.getElementById('signup_btn');

signup_btn.addEventListener('click', (demo) => {
    demo.preventDefault();

    // target the fields in inside the signup button 
    let Name = document.getElementById('name').value;
    console.log(Name);
    let Email = document.getElementById('email').value;
    console.log(Email);
    let Pwd = document.getElementById('password').value;
    console.log(Pwd);

    // get the data from local storage
    let email1 = localStorage.getItem('email');

    if(Name === '' || Email === '' || Pwd === ''){
        alert('Please enter the details in required fields');
    }
    else  if(email1 === Email) {
        alert('Data already exists!');
    } 
    // store new data in local storage
    else{
        localStorage.setItem('name', Name);
        localStorage.setItem('email', Email);
        localStorage.setItem('password', Pwd);
        
        alert('Successfully registered');
        window.location.href = '../html_files/login.html';
    }

});