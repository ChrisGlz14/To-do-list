//variables 
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


//funcion para adherir tareas
function addTask(){
    if(inputBox.value === ''){ //Si no se esccribe nada no se puede agregar nada
        alert("Debes escribir algo para agregar!");
    }
    else{
        let li = document.createElement("li"); // De lo contrario 
        li.innerHTML = inputBox.value;          
        listContainer.appendChild(li);// se crea un LI, un elemento hijo de la list container
        let span = document.createElement("span");// tambien se crea un elemento span
        span.innerHTML = "\u00d7"; //se mostrara una X en pantalla con el codigo "\u00d7"
        li.appendChild(span);//finalmente se crea el elemento hijo.

    }    
    inputBox.value = ""
    saveData(); // se llama a la funcion para guardar los datos agregados
}

//Funcion para las tareas (marcar como "hecha" y eliminar)
listContainer.addEventListener("click", function (e) {
    if(e.target.tagName === "LI"){ //Si hago click en LI el elemento cambia(Toggle) a checked
        e.target.classList.toggle("checked");
        saveData(); // se llama a la funcion para guardar los datos checked o realizados
    }
    else if (e.target.tagName === "SPAN") { //Si hago click en SPAN el elemento padre de este se elimina.
        e.target.parentElement.remove(); 
        saveData(); // se llama a la funcion para guardar los datos eliminados     
    }
}, false)

function saveData() { //funcion para guardar los datos (listContainer) que se registran
    localStorage.setItem("data", listContainer.innerHTML);
    
}
function showTask() { //funcion para mostrar los datos guardados cada vez que entramos a la pagina
    listContainer.innerHTML = localStorage.getItem("data"); // busca en el localStorage (contenido almacenado) el item "data" y la muestra con nuestro listContainer en la interfaz
}
showTask(); // ejecuto la funcion para que se muestre.

//Hoy 4/15/2023 se cumplen 3 meses desde que empecé a programar.