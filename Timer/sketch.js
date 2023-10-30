let pixelYoshi = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,1,2,2,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,1,2,2,0,0,0,0,2,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,1,1,1,1,2,0,0,1,0,1,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,2,3,3,1,0,0,0,1,0,1,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,3,2,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,2,2,2,0,0,0,2,0,1,2,2,2,1,0,0],
  [0,0,0,0,0,0,1,3,1,2,2,0,2,2,2,2,2,2,2,2,0,0,2,1,0],
  [0,0,0,0,0,1,2,2,1,2,2,2,0,0,0,2,2,2,2,2,1,2,1,2,1],
  [0,0,0,0,0,1,2,2,1,2,2,0,0,0,0,2,2,2,2,2,2,2,2,2,1],
  [0,0,0,0,0,0,1,1,1,2,2,0,0,0,0,1,2,2,2,2,2,2,2,2,1],
  [0,0,0,0,0,0,0,1,1,2,2,0,0,0,0,1,2,2,2,2,2,2,2,2,1],
  [0,0,0,0,0,0,0,1,3,1,2,2,0,0,1,1,2,2,2,2,2,2,2,2,1],
  [0,0,0,0,0,0,0,0,1,1,1,2,2,0,0,1,2,2,2,2,2,2,2,1,0],
  [0,0,0,0,0,0,0,0,1,3,1,2,2,0,0,0,1,2,2,2,2,1,1,0,0],
  [0,0,0,0,0,1,1,1,1,1,2,2,2,0,0,1,1,1,1,1,1,0,0,0,0],
  [0,0,0,0,1,3,0,1,1,1,2,2,0,0,0,1,1,1,0,0,0,0,0,0,0],
  [0,0,1,1,3,3,1,1,2,2,2,2,0,0,0,1,0,2,1,0,0,0,0,0,0],
  [1,1,1,0,1,1,2,2,2,2,1,0,0,0,0,1,1,0,2,1,0,0,0,0,0],
  [1,2,2,1,1,2,2,2,2,1,0,0,0,0,0,1,1,1,2,1,0,0,0,0,0],
  [1,0,2,1,2,2,2,0,0,2,1,0,0,0,0,1,1,2,2,1,0,0,0,0,0],
  [1,0,0,1,2,2,2,0,0,1,1,0,0,0,1,1,2,2,1,0,0,0,0,0,0],
  [0,1,0,1,2,2,2,2,2,2,1,0,0,0,1,1,2,2,2,1,0,0,0,0,0],
  [0,1,0,0,1,2,2,2,2,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0],
  [0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,1,4,4,4,4,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,1,4,4,4,4,1,1,1,4,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
  [0,1,4,4,4,4,0,4,1,4,4,4,4,0,1,0,0,0,0,0,0,0,0,0,0],
  [0,1,4,4,4,4,4,4,1,4,4,4,4,4,1,0,0,0,0,0,0,0,0,0,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0]
  ];


  let pixelDeadYoshi = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,1,2,2,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,1,2,2,0,0,0,0,2,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,1,1,1,1,2,0,1,0,1,0,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,2,3,3,1,0,0,0,1,0,0,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,3,2,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,2,2,2,0,0,0,0,0,1,2,2,2,1,0,0],
  [0,0,0,0,0,0,1,3,1,2,2,0,2,2,2,2,2,2,2,2,0,0,2,1,0],
  [0,0,0,0,0,1,2,2,1,2,2,2,0,0,0,2,2,2,2,2,1,2,1,2,1],
  [0,0,0,0,0,1,2,2,1,2,2,0,0,0,0,2,2,2,2,2,2,2,2,2,1],
  [0,0,0,0,0,0,1,1,1,2,2,0,0,0,0,1,2,2,2,2,2,2,2,2,1],
  [0,0,0,0,0,0,0,1,1,2,2,0,0,0,0,1,2,2,2,2,2,2,2,2,1],
  [0,0,0,0,0,0,0,1,3,1,2,2,0,0,1,1,2,2,2,2,2,2,2,2,1],
  [0,0,0,0,0,0,0,0,1,1,1,2,2,0,0,1,2,2,2,2,2,2,2,1,0],
  [0,0,0,0,0,0,0,0,1,3,1,2,2,0,0,0,1,2,2,2,2,1,1,0,0],
  [0,0,0,0,0,1,1,1,1,1,2,2,2,0,0,1,1,1,1,1,1,0,0,0,0],
  [0,0,0,0,1,3,0,1,1,1,2,2,0,0,0,1,1,1,0,0,0,0,0,0,0],
  [0,0,1,1,3,3,1,1,2,2,2,2,0,0,0,1,0,2,1,0,0,0,0,0,0],
  [1,1,1,0,1,1,2,2,2,2,1,0,0,0,0,1,1,0,2,1,0,0,0,0,0],
  [1,2,2,1,1,2,2,2,2,1,0,0,0,0,0,1,1,1,2,1,0,0,0,0,0],
  [1,0,2,1,2,2,2,0,0,2,1,0,0,0,0,1,1,2,2,1,0,0,0,0,0],
  [1,0,0,1,2,2,2,0,0,1,1,0,0,0,1,1,2,2,1,0,0,0,0,0,0],
  [0,1,0,1,2,2,2,2,2,2,1,0,0,0,1,1,2,2,2,1,0,0,0,0,0],
  [0,1,0,0,1,2,2,2,2,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0],
  [0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,1,4,4,4,4,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,1,4,4,4,4,1,1,1,4,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
  [0,1,4,4,4,4,0,4,1,4,4,4,4,0,1,0,0,0,0,0,0,0,0,0,0],
  [0,1,4,4,4,4,4,4,1,4,4,4,4,4,1,0,0,0,0,0,0,0,0,0,0],
  [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0]


  ];

  





// time var
let endTime;
const timerDuration = 0;
let paused = false;
let timePaused = new Date();

//pos var
let xPos = 675;
let yPos = 10;

// score var
let Apples = 0 ;
let happiness ;

// create buttons
let myButton = [];

function setup() {
  createCanvas(900,500 );
  background(255);

  //  drawGridYoshi(15,15,15,15,pixelYoshi);
   drawGridDeadYoshi(15,15,15,15,pixelDeadYoshi);

print("You have:"+ Apples);

  endTime = new Date();
  endTime.setSeconds(endTime.getSeconds() + timerDuration);

   
  
  
    myButton[0]= createButton(" +5 min")
    myButton[0].size(100,40)
    myButton[0].style('background-color', 'cyan');
    myButton[0].style("font-size", "20px")
    myButton[0].position(xPos  -130, yPos + 120 );
    myButton[0].mousePressed(() => {
      console.log('Add 5 min!');
      endTime.setTime(endTime.getTime() + 300000);
    });

    myButton[1]= createButton("+10 min")
    myButton[1].style('background-color', 'cyan');
    myButton[1].style("font-size", '20px');
    myButton[1].size(100,40)
    myButton[1].position(xPos  -130, yPos + 170 );
    myButton[1].mousePressed(() => {
      console.log('Add 10 min!');
      endTime.setTime(endTime.getTime() + 600000);
    });

    myButton[2]= createButton("+15 min")
    myButton[2].size(100,40)
    myButton[2].style("font-size","20px");
    myButton[2].style('background-color', 'cyan');
    myButton[2].position(xPos  -130, yPos + 220 );
    myButton[2].mousePressed(() => {
      console.log('Add 15 min!');
      endTime.setTime(endTime.getTime() + 900000 );
    });
    
    myButton[3] = createButton("Pause")
    myButton[3].size(100,40)
    myButton[3].position(xPos,yPos +120)
    myButton[3].style('background-color', 'cyan');
    myButton[3].style('font-size', '20px');
    myButton[3].mousePressed(() =>{
     
     console.log("timer is paused");
     timePaused = new Date();
     paused=true;
   });

   myButton[4]=createButton("start")
   myButton[4].size(100,40)
   myButton[4].position(xPos,yPos + 170)
   myButton[4].style('background-color', 'cyan');
   myButton[4].style('font-size', '20px');
   myButton[4].mousePressed(() =>{

    if(!paused){
      console.log("timer isn't paused!")
      return;
    }
    let timeStart = new Date().getTime() - timePaused.getTime();
    console.log("the timer is started again!");
    endTime.setTime(endTime.getTime() + timeStart);
    paused = false;

});

  myButton[5]=createButton("Clear")
  myButton[5].size(100,40)
  myButton[5].position(xPos,yPos + 220)
  myButton[5].style('background-color', 'cyan');
  myButton[5].style('font-size', '20px');
  myButton[5].mousePressed(() =>{

    let timeStart = new Date().getTime() - timePaused.getTime();
    endTime.setSeconds(endTime.getSeconds() - timeStart);
    console.log("Cleared timer!");

  });

  }


function draw() {
 

 // the rect around the timer

  fill("255");
  stroke("green")
  rect(520,20,300,80,20);

  const currentTime =  new Date();

  
  if (currentTime >= endTime) {
    console.log('Timer ended!');
    textSize(24)
     text("Time remaining: 00:00",540, 70);
     
    


   
   
  } else {
    let remainingTime, minutes, seconds;
    
    if(paused){

      remainingTime = endTime-timePaused;

    }else

   remainingTime = endTime - currentTime;
   
   minutes = Math.floor(remainingTime / (60 * 1000));
   seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);

    textSize(24);
    text("Time remaining:" + nf(minutes, 2)+ ":" + nf(seconds, 2) , 540, 70);
    
    
   
  }

  // the surrounding lines
  strokeWeight(4);
  stroke("red");
  line(450, 0, 450, 500);
  line(900,0,900,500);
  line(900,500,0,500)





 
  
  
}

function drawGridYoshi (xPos, yPos, width, height, arrpixelYoshi){
  for(let i =0; i<arrpixelYoshi.length; i++){
    for(let j=0; j<arrpixelYoshi[i].length; j++){
      switch (arrpixelYoshi[i][j]){
        case 0:
          fill(252, 252, 252);//white
          break;
        case 1:
          fill(8, 8, 8);//black
          break;
        
        case 2:
          fill(240, 20, 5);//red
        break;

        case 3:
          fill(245, 134, 7);//orange
          break;

          case 4:
            fill(5, 129, 179);//blue
          
          break;
          default:
          break;
      }
      
      rect(xPos + j * width, yPos + i * height, width, height);
    }
  }

}

function drawGridDeadYoshi (xPos, yPos, width, height, arrpixelYoshi){
  for(let i =0; i<arrpixelYoshi.length; i++){
    for(let j=0; j<arrpixelYoshi[i].length; j++){
      switch (arrpixelYoshi[i][j]){
        case 0:
          fill(252, 252, 252);//white
          break;
        case 1:
          fill(8, 8, 8);//black
          break;
        
        case 2:
          fill(240, 20, 5);//red
        break;

        case 3:
          fill(245, 134, 7);//orange
          break;

          case 4:
            fill(5, 129, 179);//blue
          
          break;
          default:
          break;
      }
      
      rect(xPos + j * width, yPos + i * height, width, height);
    }
  }

}


  





 




