import {barcelona,roma,paris,londres} from './ciudades.js'

//Obtenemos los elementos del DOM

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

//Agregar evento CLICK a cada enlace

enlaces.forEach( function(enlace){
    enlace.addEventListener('click',function(){
        //Remover la clase active de todos los enlaces
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active')
        })

         //Agregar la clase 'active' al enlace actual
    this.classList.add('active')

    //Obtener el contenido correspondiente segun el enlace
    let contenido = obtenerContenido(this.textContent)

    tituloElemento.innerHTML = contenido.titulo
    subtituloElemento.innerHTML = contenido.subtitulo
    parrafoElemento.innerHTML = contenido.parrafo

    })
    
})

//Funcion para traer la informacion correcta de ciudades.js

function obtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,   
        'París': paris,
        'Londres': londres
    }
    return contenido[enlace]        
}
