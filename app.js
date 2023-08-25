const adviceRoller = document.getElementById("dice");
dice.addEventListener("click", generateAdvice)

function generateAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data=>{
        
        const adviceObject = data.slip;
        const adviceBody = adviceObject.advice;
        const adviceId = adviceObject.id; 

        document.querySelector("span#advice-id").textContent = adviceId;
        document.querySelector("span#advice").textContent = adviceBody;
    }
    
    )
    .catch(error=>{
        console.log('Could not fetch');
        console.log(error)
    })
    
    }