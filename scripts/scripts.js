let formulario = document.getElementById('formulario');
let btnTelefono = document.getElementById('btnTelefono');
let btnEditar = document.getElementById('btnEditar');
let btnEliminar = document.getElementById('btnEliminar');

window.addEventListener('DOMContentLoaded', async () => {

    document.getElementById('id').style.display = 'none';
    document.getElementById('label-edit').style.display = 'none';
})

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

let name = document.getElementById('name').value;
let lastName = document.getElementById('lastName').value;
let email = document.getElementById('email').value;
let password = document.getElementById('pass').value;
let telefono = document.getElementById('telefono').value;


  
    let resp = await fetch('http://localhost:3300/usuarios',{
        method: 'POST',
        body: JSON.stringify({
            nombre: name,
            apellido: lastName,
            correo: email,
            contraseña:password,
            celular: telefono
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    }) 
    let data = resp.json();
    console.log(data) 
})

btnTelefono.addEventListener('click', async () => {
    document.getElementById('id').style.display = 'block';
    document.getElementById('label-edit').style.display = 'block';
    let telefono = document.getElementById('telefono').value;
    document.getElementById('telefono').readOnly = true;

    let resp = await fetch('http://localhost:3300/usuarios');
    let data = await resp.json();
    console.log(data);
    let modificar = data.find(user => user.celular=== telefono)
    const {nombre, apellido, correo, contraseña, celular, id} = modificar;
    console.log(nombre, apellido, correo, contraseña, telefono, id);
    document.getElementById('name').value = nombre;
    document.getElementById('lastName').value = apellido;
    document.getElementById('email').value = correo;
    document.getElementById('pass').value = contraseña;
    document.getElementById('telefono').value = celular;
    document.getElementById('id').value = id;

})

btnEditar.addEventListener('click', async() => {
    let idModificar = document.getElementById('id').value;
    let nameMod = document.getElementById('name').value;
    let lastNameMod = document.getElementById('lastName').value;
    let emailMod = document.getElementById('email').value;
    let passwordMod = document.getElementById('pass').value;
    let telefonoMod = document.getElementById('telefono').value;

  
    let resp = await fetch(`http://localhost:3300/usuarios/${idModificar}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: idModificar,
            nombre: nameMod,
            apellido: lastNameMod,
            correo: emailMod,
            contraseña:passwordMod,
            celular: telefonoMod,
            
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    }) 
    let data = resp.json();
    console.log(data); 
})

btnEliminar.addEventListener('click', async() => {
    alert('Seguro que quiere borrar los datos');

    let idModificar = document.getElementById('id').value;
    let resp = await fetch(`http://localhost:3300/usuarios/${idModificar}`,{
        method: 'DELETE',
    })
   let data = resp.json();
    console.log(data); 
})