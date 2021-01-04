exports.Init = () => {
  let isCapsLockOn = false;
  let keyboardInputText = document.getElementById("#keyboard-input-textarea");
  
  document
    .getElementById("#keyboard")
    .addEventListener("click", function (key) {
      if(key.target.innerText === "delete"){
        let existingValue = keyboardInputText.value;
        keyboardInputText.value = existingValue.substring(0, existingValue.length -1);
      }else if(key.target.innerText === "space"){
        keyboardInputText.value += '  ';
      } else if(key.target.innerText === "c.lock"){
        isCapsLockOn = !isCapsLockOn;
        if(isCapsLockOn){
          document.getElementById("#caps-lock").style.backgroundColor = "#99AAAB";
        }else {
          document.getElementById("#caps-lock").style.backgroundColor = "#0000009c";
        }
      } else if(isCapsLockOn){
        keyboardInputText.value += (key.target.innerText).toUpperCase();
      }           
      else {
        keyboardInputText.value += key.target.innerText;
      }
      
    });


    document.getElementById("#keyboard-toggle-off").addEventListener("click", function(){
        document.getElementById("#keyboard-container").style.display="none";
        document.getElementById("#keyboard-input-textarea").readOnly = false;
    })
    document.getElementById("#keyboard-toggle-on").addEventListener("click", function(){
        location.reload();
    })


//     document.getElementById("#keyboard-toggle").addEventListener("click", function(key){

//     })


// //services    
// function keyboardToggle(){
//   alert('true',isKeyboardEnabled);  
//     if(isKeyboardEnabled){
//       isKeyboardEnabled = false;
//       document.getElementById("#grid-container").style.display="none";
//     }
//}



};
