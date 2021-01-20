    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        myText.innerHTML = "IK ben Amy van duin en zit op het mediacollege Amsterdam"
        myImage.src = "https://i.pinimg.com/originals/16/9a/8d/169a8dfcb402415d343481e7143f932c.jpg"
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index = randomizer(arrayLength);
        let index2 = randomizer(arrayLength);
        let index3 = randomizer(arrayLength);
        let index4 = randomizer(arrayLength);
        let index5 = randomizer(arrayLength);
        let woord1 = onderwerp[index];
        let woord2 = werkwoord[index2];
        let woord3 = restwoord[index3];
        let woord4 = Extra1[index4];
        let woord5 = Extra2[index5];
        let outputString = woord1 + " " + woord2 + " " + woord3 + " " + woord4 + " " + woord5;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["ik", "jij", "zij", "hij"];
    const werkwoord = ["hou", "sport", "werk", "leef"];
    const restwoord = ["van", "in", "op", "naast"];
    const Extra1 = ["Macdonalds","basic Fit","Hema", "Mediacollege"];
    const Extra2 = ["ik.","jou","en jou.", "wij"];
        
    let plaatjes = ["mac.jfif", "Mediacollege.jfif", "basicfit.png", "hema.png"]
    let arrayLength = onderwerp.length;
