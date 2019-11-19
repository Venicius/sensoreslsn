(function(){
    
  // Inicia o firebase Firebase
  var config = {
    apiKey: "AIzaSyC3QS-o0_hORedGN6MsU6wKuVHJoUalEKA",
    authDomain: "sensoreslsn.firebaseapp.com",
    databaseURL: "https://sensoreslsn.firebaseio.com",
    storageBucket: "sensoreslsn.appspot.com"
  };
  firebase.initializeApp(config);

  var db = firebase.database();
    
  // Cria os listeners dos dados no firebase
  var tempRef = db.ref('DadosSensores/Temperatura/atual/valor');
  var tempRefData = db.ref('DadosSensores/Temperatura/atual/data');
 

    
   tempRef.on('value', function(snapshot) {
    document.getElementById('currentTemp').innerText = snapshot.val() + ' ' + '°C';
  }); 
  tempRefData.on('value', function(snapshot) {
    var momento = new Date(snapshot.val());
    
    document.getElementById('tempData').innerText = momento.toLocaleDateString() + " às " + momento.toLocaleTimeString() ;
  });

   // Cria os listeners dos dados no firebase
   var tempRef2 = db.ref('DadosSensores2/Temperatura/atual/valor');
   var tempRefData2 = db.ref('DadosSensores2/Temperatura/atual/data');
  
 
     
    tempRef2.on('value', function(snapshot) {
     document.getElementById('currentTemp2').innerText = snapshot.val() + ' ' + '°C';
   }); 
   tempRefData2.on('value', function(snapshot) {
     var momento = new Date(snapshot.val());
     
     document.getElementById('tempData2').innerText = momento.toLocaleDateString() + " às " + momento.toLocaleTimeString() ;
   });
    
  
  var umidRef = db.ref('DadosSensores/Umidade/atual/valor');
  var umidRefData = db.ref('DadosSensores/Umidade/atual/data');
    
    umidRef.on('value', function(snapshot) {
    document.getElementById('currentUmid').innerText = snapshot.val() + ' %';
  });
  umidRefData.on('value', function(snapshot) {
    var momento = new Date(snapshot.val());
    document.getElementById('umidData').innerText = momento.toLocaleDateString() + " às " + momento.toLocaleTimeString();
  });

    
  var umidRef2 = db.ref('DadosSensores2/Umidade/atual/valor');
  var umidRefData2 = db.ref('DadosSensores2/Umidade/atual/data');
    
    umidRef2.on('value', function(snapshot) {
    document.getElementById('currentUmid2').innerText = snapshot.val() + ' %';
  });
  umidRefData2.on('value', function(snapshot) {
    var momento = new Date(snapshot.val());
    document.getElementById('umidData2').innerText = momento.toLocaleDateString() + " às " + momento.toLocaleTimeString();
  });

    
    var presenceRef = db.ref('DadosSensores/Presenca/atual/valor');
    var presenceRefData = db.ref('DadosSensores/Presenca/atual/data');
    
     // Registrar função ao alterar valor de presença
  presenceRef.on('value', function(snapshot){
    var value = snapshot.val();
  
    if(value==='Com movimento'){
        document.getElementById('currentPresenca').style.background="#00ff00";
        document.getElementById("currentPresenca").innerHTML = "directions_run";
    }else{
        document.getElementById('currentPresenca').style.background="#FFFFFF";
        document.getElementById("currentPresenca").innerHTML = "directions_walk";
     }
  });

 presenceRefData.on('value', function(snapshot) {
    var momento = new Date(snapshot.val());
    document.getElementById('presData').innerText = momento.toLocaleDateString() + " às " + momento.toLocaleTimeString();
     
  });
  
    
    
    var luzRef = db.ref('DadosSensores/Luz/atual/valor');
    var luzRefData = db.ref('DadosSensores/Luz/atual/data');
    luzRef.on('value', function(snapshot){
    var value = snapshot.val();
      
    if(value==='Acesa'){
        
        document.getElementById('currentLuz').style.background="#FFFF00";
        document.getElementById("currentLuz").innerHTML = "flash_on";
    }else{
        document.getElementById('currentLuz').style.background="#FFFFFF";
        document.getElementById("currentLuz").innerHTML = "flash_off";
     }
  });

 luzRefData.on('value', function(snapshot) {
    var momento = new Date(snapshot.val());
    document.getElementById('luzData').innerText = momento.toLocaleDateString() + " às " + momento.toLocaleTimeString();
     
  });
        
    var chamasRef = db.ref('DadosSensores/Chamas/atual/valor');
    var chamasRefData = db.ref('DadosSensores/Chamas/atual/data');
   
    chamasRef.on('value', function(snapshot){
        var value = snapshot.val();
  
    if(value==='Fogo'){
        document.getElementById('currentFumaca').style.background="red";
        document.getElementById("currentFumaca").innerHTML = "whatshot";
     
    }else{
        document.getElementById('currentFumaca').style.background="#FFFFFF";
        document.getElementById("currentFumaca").innerHTML = "block";
    }
    
  });

   chamasRefData.on('value', function(snapshot) {
    if (snapshot!==null) {
        var momento = new Date(snapshot.val());
    document.getElementById('fumaData').innerText = momento.toLocaleDateString() + " às " + momento.toLocaleTimeString();
    }
  });


})();

function retornaData(){
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

     return dia + "-"+ mes +"-" + timestamp.getFullYear().toString();
}

function retornaRegistrosTemperatura(){
   
    var data = retornaData();
     var registros = [];
  
    var query = firebase.database().ref("DadosSensores/Temperatura/"+ data).orderByKey();
    //console.log(query);
    query.once("value")
          .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
              var key = childSnapshot.key;
              var childData = childSnapshot.val();
              //console.log(data);
              registros.push(childData.valor);
              });
        });
    return registros;
}
    

function retornaHoraTemperatura(){
    var data = retornaData();
    var horarios = [];
    var query = firebase.database().ref("DadosSensores/Temperatura/"+ data).orderByKey();
    query.once("value")
          .then(function(snapshot) {
            
            
        snapshot.forEach(function(childSnapshot) {
              // key will be "ada" the first time and "alan" the second time
              var key = childSnapshot.key;
              // childData will be the actual contents of the child
              var childData = childSnapshot.val();
              //console.log(data);
              //dados.push(childData);
            horarios.push(childSnapshot.key);
            
              });
        });
    return horarios;
}
var mChart;
                
function InitGrafics(){

   mChart = new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: retornaHoraTemperatura(),
    datasets: [{ 
        data: retornaRegistrosTemperatura(),
        label: 'ºC',
        borderColor: "#3e95cd",
        fill: false
      }
    ]
  },
  options: {
        responsive:true,
        title: {
      display: true,
      text: retornaData()
    }
  }
});


}