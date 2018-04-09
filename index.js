/************************************************************************ 

                            by Youssef SBIA
                        sbia.youssef@gmail.com


************************************************************************ */



/***************** arraywords is an array of data************/
var arrayWords;
arrayWords=[
["manger","اكل"],
  ["parler","تكلم"],
    ["pastèque","البطيخ"],
      ["developpement", "التنمية"],
        ["informatique", "معلوماتية"],
          ["citron","الليمون"]];
/***************** function to random ur array ************/
        function RandomizeArray(myArray) {
          for (var i = myArray.length - 1; i > 0; i--) 
          {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = myArray[i];
            myArray[i] = myArray[j];
            myArray[j] = temp;
          }
          return myArray;
        }

/***************** arrayLenght take the number of the arrayWord************/
        var arrayLenght=[];
        for(var i=0;i<arrayWords.length;i++)
        {
           arrayLenght[i]=i;
        }
        
/***************** function choose random value from arrayWord************/
function loadedValue() 
{
        var randomValue=[];
        var question ;
        var response ;
        var myArray = [1, 2, 3, 4];
        var suggestion;
        var randomResult;
        var counter=0;
        var validationTable=[];
        var validationResult=RandomizeArray(myArray);
        randomValue = RandomizeArray(arrayLenght);

       for (var i = 0; i < 4; i++) 
       {
           var index = i + 1
           question="question"+index;
           suggestion = "suggestion" + validationResult[i];
            validationTable[i] = randomValue;
            document.getElementById(question).textContent = arrayWords[randomValue[i]][0];
            document.getElementById(suggestion).textContent = arrayWords[randomValue[i]][1];
        }
}

/***************** function allow the value to drop************/
function allowDrop(ev) {
  ev.preventDefault();
}

/***************** function to take the value of key how is draging************/
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.textContent);
}

/***************** function to compair drag value with the value choosing************/
function drop(ev) 
{
  ev.preventDefault();
  var dataComing = ev.dataTransfer.getData("text");
  var dataExist = ev.target.textContent;
  var count=0;
  var song = new Audio();
    for(var i=0;i<arrayWords.length;i++)
    {
      if (arrayWords[i][0] == dataComing && arrayWords[i][1] == dataExist)
      {
        count=1;
        break;
      }
    }
      if(count==1)
      {
        song.src = 'correct.mp3';
        song.play();
      }
      else
      {
        song.src = 'incorrect.mp3';
        song.play();
      }
    
}



