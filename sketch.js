let string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

//let string = "My name is Jeff"

let index = 0;

let rad = 420;

let circles = [];

let circlesPos = [];

//let arr;

//let myDiv;

let wordOffset = 0;

let flag = 0;

let startingP;


function setup() {
  startingP = createP(string);
  let words = document.getElementsByTagName('p');

  for (let i = 0; i < words.length; i++) {
    console.log(words[i].getBoundingClientRect());

  }



  // let paragraph = "This is a paragraph of text.";
  // let word = "paragraph";
  // let wordWidth = textWidth(word);
  // let wordX = textWidth(paragraph.substring(0, paragraph.indexOf(word)));
  // console.log(wordX);

  noCanvas();

  arr = string.split(" ");

  console.log(arr.length);
  //console.log(ang);



}



function draw() {


  if (flag == 1) {






    for (let i = 0; i < arr.length; i++) {

      let circleIndex = i;



      let ang = map(i, 0, arr.length, 0, TWO_PI);

      let x = rad * cos(ang + (.666 * TWO_PI) * wordOffset) + (window.innerWidth / 2);
      let y = rad * sin(ang + (.666 * TWO_PI) * wordOffset) + (window.innerHeight / 2);

      circle[circleIndex].moveWord(x, y, arr[i]);


    }

    wordOffset = wordOffset + 0.001;
  } else {

  }
}

// windowResized() {
//   drawCircle();
// }


function drawCircle(ang, cell, circleIndex) {


  let x = rad * cos(ang + (.666 * TWO_PI)) + (window.innerWidth / 2);
  let y = rad * sin(ang + (.666 * TWO_PI)) + (window.innerHeight / 2);

  circle[circleIndex] = new Words(x, y, arr[circleIndex]);

  let pos = circle[circleIndex].position;

  console.log(pos.x)



}


function mousePressed() {

  //console.log("Pressed!");

  if (flag == 0) {

    startingP.remove()

    for (let i = 0; i < arr.length; i++) {

      let circleIndex = i;

      let ang = map(i, 0, arr.length, 0, TWO_PI);

      drawCircle(ang, arr[i], circleIndex);
    }

    flag = 1;

  }



  // for (let i = 0; i < arr.length; i++) {

  //   console.log(i);



  //   circlesPos[i] = circle[i].position()

  //   console.log(circlesPos[i]);

  // }

}