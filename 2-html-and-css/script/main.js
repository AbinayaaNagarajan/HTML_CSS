    function clearResult(){
      document.getElementById('result').value = ''; // Clear the value so given empty string
    }

    function appendToResult(value){
      document.getElementById('result').value += value; // Get the values & concatenate
    }

    function calculateResult(){
    
        document.getElementById('result').value = eval(document.getElementById('result').value); // eval do the mathematical calculation
      
    
    }