(function(){
  'use strict';

  var regalo = document.getElementById('regalo');

  document.addEventListener('DOMContentLoaded', function(){
    //campos datos usuarios
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');

    //campos pases
    var pase_dia = document.getElementById('pase_dia');
    var pase_dosdias = document.getElementById('pase_dosdias');
    var pase_completo = document.getElementById('pase_completo');

    //botones y divs
    var calcular = document.getElementById('calcular');
    var errorDiv = document.getElementById('error');
    var botonRegistro = document.getElementById('btnRegistro');
    var lista_productos = document.getElementById('lista-productos');

    //extras
    var etiquetas = document.getElementById('etiquetas');
    var camisas = document.getElementById('camisa_evento');

    calcular.addEventListener('click',calcularMontos);

    function calcularMontos(event){
      event.preventDefault();
      if(regalo.value === ''){
        alert('Debes elegir un regalo');
        regalo.focus();
      }else{
        var boletosDia = parseInt(pase_dia.value,10)|| 0,
            boleto2Dias= parseInt(pase_dosdias.value)|| 0,
            boletoCompleto = parseInt(pase_completo.value)|| 0,
            cantCamisas = parseInt(camisas.value)|| 0,
            cantEtiquetas = parseInt(etiquetas.value)|| 0;

        var totalPagar = (boletosDia * 30) + (boleto2Dias * 45) + (boletoCompleto * 50) + ((cantCamisas * 10)* .93) + (cantEtiquetas * 2);

        var listadoProductos = [];
        if(boletosDia >=1){
          listadoProductos.push(boletosDia + 'Pases por día');
        }
        if(boleto2Dias >= 1){
          listadoProductos.push(boleto2Dias + 'Pases por 2 días');
        }
        if(boletoCompleto >=1){
          listadoProductos.push(boletoCompleto + 'Pases completos');
        }
        if(cantCamisas >=1){
          listadoProductos.push(cantCamisas + 'Camisas');
        }
        if(cantEtiquetas >=1){
          listadoProductos.push(cantEtiquetas + 'Etiquetas');
        }

        lista_productos.innerHTML = '';
        for(var i = 0; i<listadoProductos.length; i++){
          lista_productos.innerHTML += listadoProductos[i]+ '</br>';
        }
      }
    }

  });//DOM CONTENT LOADED
})();
