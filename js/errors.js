
// For Name and Surname//

function Name() {
    const message = document.getElementById("paragrafi");
    message.innerHTML = "";
    let x = document.getElementById("Application form").value;
    try { 
      if(x == "")  throw " Name is empty";
      
    }
    catch(err) {
      message.innerHTML = "Your " + err;
    }
  }
  function Surname() {
    const message = document.getElementById("paragrafi");
    message.innerHTML = "";
    let x = document.getElementById("Application form").value;
    try { 
      if(x == "")  throw " Surname is empty";
      
    }
    catch(err) {
      message.innerHTML = "Your " + err;
    }
  }
//For Password//
function Password() {
    const message = document.getElementById("paragrafi1");
    message.innerHTML = "";
    let x = document.getElementById("Application form1").value;
    try { 
      if(x == "")  throw "empty";
      if(isNaN(x)) throw "not a number";
      x = Number(x);
      if(x < 5)  throw "too low";
      if(x > 10)   throw "too high";
    }
    catch(err) {
      message.innerHTML = "Password " + err;
    }
  }
  // For Email//
  function Email() {

  const message = document.getElementById("paragrafi2");
    message.innerHTML = "";
    let x = document.getElementById("Application form2").value;
    try { 
      if(x == "")  throw " Email is empty";
      if(x.length>10) throw " Email is too long ";
       if(x.length<5) throw " Email is to short";
    }
    catch(err) {
      message.innerHTML = "Your  " + err;
    }
}