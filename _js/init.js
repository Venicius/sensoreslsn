
window.onload = function(){
  InitGrafics();
   dataHoje();
}

function dataHoje(){
    var timestamp;
    var dia;
    var aux ;
    var mes;
    timestamp = new Date();
    dia = timestamp.getDate().toString();
    aux = timestamp.getMonth().toString();
    mes = Number(aux) + 1;
    if (Number(dia)<10) {
      dia = '0'+dia;
    }
    if (Number(mes)<10) {
      mes = '0'+mes;
     }

     var dataHojeCompleta=dia + "/"+ mes +"/" + timestamp.getFullYear().toString();
     document.getElementById("inputDataTemperatura").value=dataHojeCompleta;
     document.getElementById("inputDataUmidade").value=dataHojeCompleta;
     document.getElementById("inputDataTemperatura2").value=dataHojeCompleta;
     document.getElementById("inputDataUmidade2").value=dataHojeCompleta;
     document.getElementById("inputDataLuz").value=dataHojeCompleta;
     document.getElementById("inputDataPresenca").value=dataHojeCompleta;
     document.getElementById("inputDataFumaca").value=dataHojeCompleta;
}
