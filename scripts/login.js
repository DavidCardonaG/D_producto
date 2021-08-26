let button = document.getElementById('login');
button.addEventListener('click', function LocalStorage() {
    let email = document.querySelector('#email').value;
    let password = document.getElementById('password').value;

    if(email == "" || password == ""){
        alert('Ingrese todos los campos');
        return true;
    }
    else{
        if(isNaN()){
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            alert('BIENVENIDO, SERAS REDIGERIDO A LA WEB OFICIAL')
            window.location = "index1.html";
            
        }else{
             alert("INCORRECTO");
        }
        return false;
    }

    
})