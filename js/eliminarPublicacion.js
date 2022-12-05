const eliminarPublicacion = () => {

    const id = document.querySelector("#idpublicacionview").innerText;
    const data = {
        id
    }

    const url = "http://api-idear-production.up.railway.app/api/eliminarPublicacion";
    sendData(url, data, "DELETE");
    location.href="home.html";

}

