

  window.onload = function() {

    document.getElementById("divForm").style.display = "none";
    document.getElementById("editForm").style.display = "none";

  };

  function formDisplay(a) {
  
    if (a == 1) {
      document.getElementById("divForm").style.display = "block";
    } else{
      document.getElementById("divForm").style.display = "none";
    }
      
  }

  function editDisplay(a) {
  
    if (a == 1) {
      document.getElementById("editForm").style.display = "block";
    } else{
      document.getElementById("editForm").style.display = "none";
    }
      
  }


