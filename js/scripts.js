$(document).ready(function() {
  var animal = prompt("Which animal would you like to learn about? Alligator, marmoset, or panda?");

    if (animal === "panda") {
      $("#panda").show();
    }

    else if (animal === "alligator") {
      $("#alligator").show();
    }

    else if (animal === "marmoset") {
      $("#marmoset").show();
    }

    else {
      $("#wronganimal").show();
    }

  });
