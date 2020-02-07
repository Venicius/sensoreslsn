  
 
  function retornaDataTemperatura(){
    var timestamp;
    var dia;
    var aux ;
    var mes;
  
    if((document.getElementById('inputDataTemperatura').value!="") || (document.getElementById('inputDataTemperatura').value.length < 10)){
        var resultadoData=(document.getElementById("inputDataTemperatura").value).split("/");
        dia=resultadoData[0];
        mes=resultadoData[1];
  
  
        return dia + "-"+ mes +"-" + resultadoData[2];
  
      } else {
        document.getElementById("inputDataTemperatura").focus();       
      }
     
        
  }
  
  function retornaRegistrosTemperatura2(){
     
      var data = retornaDataTemperatura();
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
        
  function retornaHoraTemperatura2(){
      var data = retornaDataTemperatura();
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
                  
  function criaGrafTemperaturaPorData(){
  
  mChart.destroy()

  mChart = new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: retornaHoraTemperatura2(),
      datasets: [{ 
          data: retornaRegistrosTemperatura2(),
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
        text: "Temperatura em: " + retornaDataTemperatura()
      }
    }
  });

  
  mChart.update();
  
  }

  //___________________________Umidade____________________

  function retornaDataUmidade(){
    var timestamp;
    var dia;
    var aux ;
    var mes;
  
    if((document.getElementById('inputDataUmidade').value!="") || (document.getElementById('inputDataUmidade').value.length < 10)){
        var resultadoData=(document.getElementById("inputDataUmidade").value).split("/");
        dia=resultadoData[0];
        mes=resultadoData[1];
  
  
        return dia + "-"+ mes +"-" + resultadoData[2];
  
      } else {
        document.getElementById("inputDataUmidade").focus();       
      }
     
        
  }
  
  function retornaRegistrosUmidade(){
     
      var data = retornaDataUmidade();
       var registros = [];
    
      var query = firebase.database().ref("DadosSensores/Umidade/"+ data).orderByKey();
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
        
  function retornaHoraUmidade(){
      var data = retornaDataUmidade();
      var horarios = [];
      var query = firebase.database().ref("DadosSensores/Umidade/"+ data).orderByKey();
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
                  
  function criaGrafUmidadePorData(){
  
  mChart.destroy()

  mChart = new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: retornaHoraUmidade(),
      datasets: [{ 
          data: retornaRegistrosUmidade(),
          label: '%',
          borderColor: "#3e95cd",
          fill: false
        }
      ]
    },
    options: {
          responsive:true,
          title: {
        display: true,
        text: "Umidade em: " + retornaDataUmidade()
      }
    }
  });

  
  mChart.update();
  
  }

  //___________________________Luz____________________

  function retornaDataLuz(){
    var timestamp;
    var dia;
    var aux ;
    var mes;
  
    if((document.getElementById('inputDataLuz').value!="") || (document.getElementById('inputDataLuz').value.length < 10)){
        var resultadoData=(document.getElementById("inputDataLuz").value).split("/");
        dia=resultadoData[0];
        mes=resultadoData[1];
  
  
        return dia + "-"+ mes +"-" + resultadoData[2];
  
      } else {
        document.getElementById("inputDataLuz").focus();       
      }
     
        
  }
  
  function retornaRegistrosLuz2(){
     
      var data = retornaDataLuz();
       var registros = [];
    
      var query = firebase.database().ref("DadosSensores/Luz/"+ data).orderByKey();
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
        
  function retornaHoraLuz2(){
      var data = retornaDataLuz();
      var horarios = [];
      var query = firebase.database().ref("DadosSensores/Luz/"+ data).orderByKey();
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
                  
  function criaGrafLuzPorData(){
  
  mChart.destroy()

  mChart = new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: retornaHoraLuz2(),
      datasets: [{ 
          data: retornaRegistrosLuz2(),
          label: "1 ou 0",
          borderColor: "#3e95cd",
          fill: false
        }
      ]
    },
    options: {
          responsive:true,
          title: {
        display: true,
        text: "Luz em: " + retornaDataLuz()
      }
    }
  });

  
  mChart.update();
  
  }

  //___________________________Presença____________________

  function retornaDataPresenca(){
    var timestamp;
    var dia;
    var aux ;
    var mes;
  
    if((document.getElementById('inputDataPresenca').value!="") || (document.getElementById('inputDataPresenca').value.length < 10)){
        var resultadoData=(document.getElementById("inputDataPresenca").value).split("/");
        dia=resultadoData[0];
        mes=resultadoData[1];
  
  
        return dia + "-"+ mes +"-" + resultadoData[2];
  
      } else {
        document.getElementById("inputDataPresenca").focus();       
      }
     
        
  }
  
  function retornaRegistrosPresenca2(){
     
      var data = retornaDataPresenca();
       var registros = [];
    
      var query = firebase.database().ref("DadosSensores/Presenca/"+ data).orderByKey();
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
        
  function retornaHoraPresenca2(){
      var data = retornaDataPresenca();
      var horarios = [];
      var query = firebase.database().ref("DadosSensores/Presenca/"+ data).orderByKey();
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
                  
  function criaGrafPresencaPorData(){
  
  mChart.destroy()

  mChart = new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: retornaHoraPresenca2(),
      datasets: [{ 
          data: retornaRegistrosPresenca2(),
          label: "1 ou 0",
          borderColor: "#3e95cd",
          fill: false
        }
      ]
    },
    options: {
          responsive:true,
          title: {
        display: true,
        text: "Presença em: " + retornaDataPresenca()
      }
    }
  });

  
  mChart.update();
  
  }

  //___________________________Movimento____________________

  function retornaDataPresenca(){
    var timestamp;
    var dia;
    var aux ;
    var mes;
  
    if((document.getElementById('inputDataPresenca').value!="") || (document.getElementById('inputDataPresenca').value.length < 10)){
        var resultadoData=(document.getElementById("inputDataPresenca").value).split("/");
        dia=resultadoData[0];
        mes=resultadoData[1];
  
  
        return dia + "-"+ mes +"-" + resultadoData[2];
  
      } else {
        document.getElementById("inputDataPresenca").focus();       
      }
     
        
  }
  
  function retornaRegistrosPresenca2(){
     
      var data = retornaDataPresenca();
       var registros = [];
    
      var query = firebase.database().ref("DadosSensores/Presenca/"+ data).orderByKey();
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
        
  function retornaHoraPresenca2(){
      var data = retornaDataPresenca();
      var horarios = [];
      var query = firebase.database().ref("DadosSensores/Presenca/"+ data).orderByKey();
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
                  
  function criaGrafPresencaPorData(){
  
  mChart.destroy()

  mChart = new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: retornaHoraPresenca2(),
      datasets: [{ 
          data: retornaRegistrosPresenca2(),
          label: "1 ou 0",
          borderColor: "#3e95cd",
          fill: false
        }
      ]
    },
    options: {
          responsive:true,
          title: {
        display: true,
        text: "Presença em: " + retornaDataPresenca()
      }
    }
  });

  
  mChart.update();
  
  }

  //___________________________Fumaca____________________

  function retornaDataFumaca(){
    var timestamp;
    var dia;
    var aux ;
    var mes;
  
    if((document.getElementById('inputDataFumaca').value!="") || (document.getElementById('inputDataFumaca').value.length < 10)){
        var resultadoData=(document.getElementById("inputDataFumaca").value).split("/");
        dia=resultadoData[0];
        mes=resultadoData[1];
  
  
        return dia + "-"+ mes +"-" + resultadoData[2];
  
      } else {
        document.getElementById("inputDataFumaca").focus();       
      }
     
        
  }
  
  function retornaRegistrosFumaca2(){
     
      var data = retornaDataFumaca();
       var registros = [];
    
      var query = firebase.database().ref("DadosSensores/Chamas/"+ data).orderByKey();
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
        
  function retornaHoraFumaca2(){
      var data = retornaDataFumaca();
      var horarios = [];
      var query = firebase.database().ref("DadosSensores/Chamas/"+ data).orderByKey();
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
                  
  function criaGrafFumacaPorData(){
  
  mChart.destroy()

  mChart = new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: retornaHoraFumaca2(),
      datasets: [{ 
          data: retornaRegistrosFumaca2(),
          label: "1 ou 0",
          borderColor: "#3e95cd",
          fill: false
        }
      ]
    },
    options: {
          responsive:true,
          title: {
        display: true,
        text: "Registros de Fumaça em: " + retornaDataFumaca()
      }
    }
  });

  
  mChart.update();
  
  }