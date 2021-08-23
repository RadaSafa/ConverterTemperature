$(document).ready(function () {
    //   get date 
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

     setInterval(function () {
        const d = new Date();
        const date = d.getDate()
        const month = d.getMonth()
        const year = d.getFullYear()
        const hour = d.getHours()
        const minutes = d.getMinutes()
        const seconds = d.getSeconds()
        $("#date").text(date+" "+monthNames[month]+" "+year)
        $("#time").text(hour+":"+minutes+":"+seconds)
      }, 1000);
     
    
  });







  function validate(evt) {
    var theEvent = evt || window.event;


    if (theEvent.type === "paste") {
      key = event.clipboardData.getData("text/plain");
    } else {
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }
  function select() {
    document.getElementById("value").value = "";
    $("#result").text(0);
    
    
  }

  
  function calculate() {
    if (document.getElementById("from").value == "celcius") {
      const res = convert("celcius",
        document.getElementById("to").value,
        parseInt(document.getElementById("value").value)
      );
    
      $("#result").text(res);
    }
    if (document.getElementById("from").value == "reaumur") {
      const res = convert("reaumur",
        document.getElementById("to").value,
        parseInt(document.getElementById("value").value)
      );
       $("#result").text(res);

    
    }
    if (document.getElementById("from").value == "farentheit") {
      const res = convert("farentheit",
        document.getElementById("to").value,
        parseInt(document.getElementById("value").value)
      );
       $("#result").text(res);
    
    }
  }

  function convert(from,to,value){

      
    if(from=== "celcius") {
        if (to == "celcius") {
          return value;
        }
        if (to == "reaumur") {
          return (4 / 5) * value;
        }
        if (to == "farentheit") {
          return (9 / 5) * value + 32;
        }
      }else if(from ==="reaumur") {
        if (to == "reaumur") {
          return value;
        }
        if (to == "celcius") {
          return (5 / 4) * value;
        }
        if (to == "farentheit") {
          return (9 / 4) * value + 32;
        }
      }else if( from === "farentheit"){
        if (to == "farentheit") {
          return value;
        }
        if (to == "celcius") {
          return (5 / 9) * (value - 32);
        }
        if (to == "reaumur") {
          return (4 / 9) * (value - 32);
        }
      }else{
          alert("Error")
      }
    }

    function changebg(){
    let color = ["#8f37ae", "#3690e4", "#f70cb1"];
    let bg = document.getElementById("bg").value;
    $("body").css("background-color", color[bg]);


    }
  