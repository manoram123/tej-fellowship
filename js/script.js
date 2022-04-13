alert("Hello TEJ!")

// respond
function respond(){
  alert("Hello there!")
}

// counter
var x = 0
function counter(val){
  if(val == "+"){
    x++;
    document.getElementById('counter').innerHTML = x;
  }else if(val == "-"){
    x--;
    document.getElementById('counter').innerHTML = x;
  }
}
