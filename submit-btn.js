document.getElementById('sub-Btn').addEventListener('click', function(){
    const emailField = document.getElementById('email-field');
    const email = emailField.value;

    const passField = document.getElementById('pass-field');
    const pass = passField.value;

    if(email === 'silpiakr@gmail.com' && pass === '2468975'){
        window.location.href = 'dashboard.html';
    }
    else{
        alert('Not found');
    }
})