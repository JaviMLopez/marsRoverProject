// Rover Object Goes Here
// ======================

// ======================

let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],

}

function turnLeft(rover){
  console.log("turnLeft was called!");
  if(rover.direction == "N"){
    rover.direction = "W"
  }
  if(rover.direction == "W"){
    rover.direction = "S"
  }
  if(rover.direction == "S"){
    rover.direction = "E"
  }
  if(rover.direction == "E"){
    rover.direction = "N"
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  if(rover.direction == "N"){
    rover.direction = "E"
  }
  if(rover.direction == "E"){
    rover.direction = "S"
  }
  if(rover.direction == "S"){
    rover.direction = "W"
  }
  if(rover.direction == "W"){
    rover.direction = "N"
  }
}


function moveForward(rover){
  console.log("moveForward was called")
  if(rover.direction == "N"){
    rover.y++;
    console.log("The postition is: " + x + ", " + y);
  }
  else if(rover.direction == "S"){
    rover.y--;
    console.log("The postition is: " + x + ", " + y);
  }
  else if(rover.direction == "E"){
    rover.x++;
    console.log("The postition is: " + x + ", " + y);
  }
  else if(rover.direction == "W"){
    rover.x--;
    console.log("The postition is: " + x + ", " + y);
  }

}

function commands(string){
if(i = 0; i < string.length; i++){
  if(string.charAt(i) == "f"){
    travelLog.push(x + " " + y);
    moveForward(rover);
  }
  else if(string.charAt(i) == "l"){
    travelLog.push(x + " " + y);
    turnLeft(rover);
  }
  else if(string.charAt(i) == "r"){
    travelLog.push(x + " " + y);
    turnRight(rover);
  }

}
}