  
$(document).ready(function() {
  var counter = 0;

  function remove() {
    $("div#one, div#two, div#three, div#four").removeClass('ace queen');
      a = 0;
      b = 3;
      c = 4;
      d = 5;
      counter = 0;
  }

  function checka() {
    if (counter === 2) {
      if (a === b) {
        
      }
      else {
        alert("Wrong please try again");
        remove();
      }
    }
  }

  function checkb() {
    if (counter === 2) {
      if (c === d) {
        
      }
      else {
        alert("Wrong please try again");
        remove();
      }
    }
  }

  function fCheck() {
    if (counter === 4)
      if(a === b) {
        if(c === d) {
          alert("you won");
            remove();
        }
      }
  }


  
  $("div.card").click(function() {
    counter++;
  });

  $("button#execute").on("click", function() {
      $("div.card").fadeIn(2000);
      $("button#execute").fadeOut(0);
      $("button#hide").fadeIn(2000);
  });

  $("div#one").on("click", function() {
    $("div#one").addClass("ace");
    a = 1;
      checka();
      fCheck();
  });

  $("div#two").on("click", function() {
    $("div#two").addClass("queen");
    c = 2;
    checkb();
    fCheck();
  });

  $("div#three").on("click", function() {
    $("div#three").addClass("queen");
    d = 2;
    checkb();
    fCheck();
  });

  $("div#four").on("click", function() {
    $("div#four").addClass("ace");
    b = 1;
      checka();
      fCheck();

  });

  $("button#hide").on("click", function() {
    remove();
  });

  })