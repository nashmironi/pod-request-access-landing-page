
const answerInput = document.querySelector(".mail");
const getError = document.getElementById("error-message");

  function checkAnswer() {
   
    let userAnswer = answerInput.value.trim();
    let emailIndicatore=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;      
    if (emailIndicatore.test(userAnswer)) {
        getError.style.display="none";
        alert("Valid email format! Well done!");
      } else {
        getError.style.display="block";
      }    
  }
