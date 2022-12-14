const registro = () => {

    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const nickname = document.querySelector("#nickname").value;
    const email = document.querySelector("#email").value;
    const contraseña = document.querySelector("#contraseña").value;



    const data = {
        nombre,
        apellido,
        nickname,
        email,
        contraseña
    };

    if(validaciones(data)){
        sendData(data);
    }else{
        alert("Completar campos faltantes");
    }
    
    
}

 const validaciones = (data) => {
    const { nombre, apellido, nickname, email, contraseña } = data;

    if(nombre == null || nombre == undefined || nombre == ""){
        return false;
    }else if(apellido == null || apellido == undefined || apellido == ""){
        return false;
    }else if(nickname == null || nickname == undefined || nickname == ""){
        return false;
    }else if(email == null || email == undefined || email == ""){
        return false;
    }else if(contraseña == null || contraseña == undefined || contraseña == ""){
        return false;
    }
    return true;
 }

 const sendData = async(data)=> {
    const url= "http://api-idear-production.up.railway.app/api/nuevoUsuario";

    const myInit = {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',          
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    }

    try {
        const response = await fetch(url, myInit);
        const responseJSON = await response.json();
        console.log("sendData info: " + responseJSON);
        redirectHome(responseJSON);

    } catch(error){
        console.log(error);
    }}

    const redirectHome = async(data) =>{

        const {creacionCorrecta} = await data; //trae la info de la petición
        console.log(creacionCorrecta);
    
    
    
        if(creacionCorrecta){ //verificamos que el usuario se encuentre registrado
    
          location.href = 'login.html';
          
    
        }else{
          console.log("Registro fail");
        }
        
        }