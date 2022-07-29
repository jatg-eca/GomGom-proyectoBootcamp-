/**
 * SCRIPT PARA VALIDACIÓN DE LOGIN
 * jatg-eca el abuehackerman pal mundo clarokezi ultrayes sí señor_/A/e
 * 
 * Realizado para GomGom
 * Product Owner: Hector Mora
 * Scrums: MoisesCH14 y el abuelin
 * Lead Devs: Venus, JulionQuesadillonALCESARLOKEESDELCESAR, LeoKawicha, AdriánLimón
 * (textrañamos,Lau)
 * 
 * JAVAJAVA-DO!
 *  
 * 
*/

/*Vilma: al iniciar el código se hace un fetch de un JSON
 que simula una base de datos de usuarios registrados y una variable
 que guarda la información de login */
let loginInfo;
fetchInfo("../json/login.json");

/*Este es un (piedra) formulario para tabletas y celulares (prehistóricos)
 Se almacena el input para correo y la contraseña del piedraFormulario,
 y se recuerda el botón de login que acompaña en la navbar que tiene offcanvas*/
let formLoginNav = document.forms["loginDos"];
let correoLoginNav = formLoginNav["correoDos"];
let contraseniaLoginNav = formLoginNav["contraDos"];
let botonLoginNav = document.getElementById("botonLoginDos");

/*Estas variables declaradas recuerdan un (piedra) formulario para verlo
 en la piedracomputadora. Igual que el formulario para tabletas y celulares,
 se almacenan los inputs para correo, constraseña, y se recuerda el botón de login
 de la navbar para piedraComputadoras*/
let formLoginPc = document.forms["loginUno"];
let correoLoginPc = formLoginPc["correoUno"];
let contraseniaLoginPc = formLoginPc["contraUno"];
let botonLoginPc = document.getElementById("botonLoginUno");


/* (JAVAJAVADO!) Se les pone un dino Escuchador de Eventos a los botones de
 inicio de sesión, para que al momento de escuchar un click de la persona cliente,
 se valide el inicio de sesión para PC o celular*/
botonLoginNav.addEventListener("click", validateNavLogin);
botonLoginPc.addEventListener("click", validatePcLogin);

/*En el HTML se puso un pequeño párrafo que indica si hay algún error
 al iniciar sesión.
 El declararlos variables aquí es una herramienta secreta que nos ayudará más tarde*/
let checkLoginUno = document.getElementById("validaLogin");
let checkLoginDos = document.getElementById("validaLoginNav");
        

/**
 *Una función asíncrona que se realiza para celulares, al dar click en iniciar sesión 
 */
async function validateNavLogin() {
    //Se revisa que los valores del input coincidan con el JSON
    //Si está bien, se loggea
    if (correoLoginNav.value == loginInfo.mail && contraseniaLoginNav.value == loginInfo.password) {
        console.log("Logeado");
    }
    //En caso contrario, le dice que no existe la cuenta
    else {
        event.preventDefault();
        checkLoginDos.style.color= "#8B0003";
        checkLoginDos.innerHTML = "No tenemos esa cuenta de gomitas";
        console.log("Sólo abuehackerman puede entrar zi ke zi");
    }
}

/**
 * Una función asíncrona que se realiza para compu, al dar click en iniciar sesión 
 */
async function validatePcLogin() {
    //Se revisa que los valores del input coincidan con el JSON
    //Si está bien, se loggea
    if (correoLoginPc.value == loginInfo.mail && contraseniaLoginPc.value == loginInfo.password) {
        console.log("Logeado");
    }
    //En caso contrario, le dice que no existe la cuenta
    else {
        event.preventDefault();
        checkLoginUno.style.color= "#8B0003";
        checkLoginUno.innerHTML = "No tenemos esa cuenta de gomitas";
        console.log("Sólo abuehackerman puede entrar zi ke zi");
    }
}


/**
 * Esta función obtiene los datos de la URL.
 */
//(HOISTING POWAH!)
 function fetchInfo(url) {
    fetch(url)
    .then(response => response.json())
    .then(data=> {
        loginInfo=data;
    }
    )
 }

 //D. R. Y.