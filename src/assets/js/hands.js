import { Hands, HAND_CONNECTIONS } from '@mediapipe/hands'
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils'
import { Camera } from '@mediapipe/camera_utils'
import { gsap } from "gsap"

let mouse_pointer

function createElements(){
  //CREATE LOADING ELEMENT
  let ripple = document.createElement('div');
  ripple.classList.add('ripple')
  document.body.appendChild(ripple)
  
  //CREATE LOADING ELEMENT
  let parent_div = document.createElement('div');
  parent_div.classList.add('loader')
  
  let span_dot = document.createElement('span')
  span_dot.classList.add('dot')
  parent_div.appendChild(span_dot)

  let span_dots = document.createElement('div')
  span_dots.classList.add('dots')
  parent_div.appendChild(span_dots)

  for(let i = 1; i <= 3; i++){
    let span = document.createElement('span')
    span_dots.appendChild(span)
  }

  document.body.appendChild(parent_div)

  //CREATE CANVAS
  let body_canvas = document.createElement('canvas');
  body_canvas.classList.add('output_canvas')
  document.body.appendChild(body_canvas)
  
  //CREATE VIDEO ELEMENT
  let body_video = document.createElement('video');
  body_video.classList.add('input_video')
  document.body.appendChild(body_video)
  
  //CREATE POINTER ELEMENT
  let pointer = document.createElement('div');
  pointer.classList.add('pointer')
  document.body.appendChild(pointer)

  mouse_pointer = document.getElementsByClassName('pointer')[0]
}

createElements()

const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');
const pointer = document.getElementsByClassName('pointer')[0];
canvasElement.setAttribute('height', screen.height)
canvasElement.setAttribute('width', screen.width)

let flag_pointer = false
let loaded = false

function onResults(results) {

  //LOADING INDICATOR - REMOVE
  if(!loaded){
    let loader = document.getElementsByClassName('loader')[0]
    loader.remove()
    loaded = true
  }

  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

  if (results.multiHandLandmarks && results.multiHandedness) {

    updatePointerVisibility(results)
    scrollingFunctionality(results.multiHandedness)


   for (let index = 0; index < results.multiHandLandmarks.length; index++) {
    const classification = results.multiHandedness[index];
    const isRightHand = classification.label === 'Right';

    if(scroll_count > 3){
      if(isRightHand){
        scrollingDetection(results.multiHandLandmarks[index])
      }      
    }

    if (results.multiHandLandmarks) {
      for (const landmarks of results.multiHandLandmarks) {

        //Check distance of the tip of the index and thumb
        //https://google.github.io/mediapipe/images/mobile/hand_landmarks.png
        let x = landmarks[4].x, y = landmarks[4].y;
        
        x *= window.outerWidth - 30
        y *= window.outerHeight - 100

        pointer.style.left = `${x}px`
        pointer.style.top = `${y}px`

        let click = [landmarks[4], landmarks[8]]
        // console.log('Current scroll from the top: ' + window.pageYOffset)
        // isClicked(lineDistance(click[0], click[1]), x, y)
        // fingersUp(landmarks)

        //DRAW LANDMARKS - SKELETON
        // drawConnectors(canvasCtx, click, HAND_CONNECTIONS,
        //                {color: isRightHand ? '#00FF00' : '#FF0000', lineWidth: 1});
        // drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
        //                {color: isRightHand ? '#00FF00' : '#FF0000', lineWidth: 1});
        // drawLandmarks(canvasCtx, landmarks, {color: '#17c0eb', lineWidth: 1});
      }
    }
   }
  }
  
  canvasCtx.restore();
}

//Distance Computation between two points
function lineDistance( point1, point2 ){
 var xs = 0;
 var ys = 0;
 
 xs = point2.x - point1.x;
 xs = xs * xs;
 
 ys = point2.y - point1.y;
 ys = ys * ys;
 

 var distance =  Math.sqrt( xs + ys );
 return distance;
}

//Detect for fingers up
function fingersUp(landmarks){
  const indexes = [4, 2, 8, 6, 12, 10, 16, 14, 20, 18];
  let fingersUp = [];
  
  for(let i = 0; i < indexes.length; i+=2){
    if(i == 0){

      if(lineDistance(landmarks[indexes[i]], landmarks[5]) < 0.05) {
        fingersUp.push(0)
      }
      else {
        fingersUp.push(1)
      }
    }
    else {
      if(lineDistance(landmarks[indexes[i]], landmarks[0]) < lineDistance(landmarks[indexes[i + 1]], landmarks[0])) {
        fingersUp.push(0)
      }
      else {
        fingersUp.push(1)
      }
    }
  }
}

//Check if distance between landmark[4] and landmark[8]
async function isClicked(distance, x, y){
 if(distance < 0.05){
   drawRipple(x, y)
   await sleep(1000)
 }
}

//Native Sleep
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//REMOVE POINTER IF NO HANDS IS VISIBLE
function updatePointerVisibility(results){
  mouse_pointer.style.display = 'flex'
  if(results.multiHandLandmarks.length == 0) {
    if(!flag_pointer){
      gsap.to('.pointer', 0.5, {
        css: {
          opacity: 0,
          scale: 0,
        }
      });
    }
    flag_pointer = true
  }
  else {
    if(scroll_count < 4) {
      if(flag_pointer){
        gsap.to('.pointer', 0.5, {
          css: {
            scale: 1,
            opacity: 1,
          }
        });
      }
      flag_pointer = false
    }
  }
}

//SCROLL COUNT IF > 0 START POSITION SAVE ELSE RESET
let scroll_count = 0;

//Scrolling functionality
function scrollingFunctionality(result) {

  if(result.length != 2) {
    scroll_count = 0
    initPosY = 0
    return
  }

  if((result[0].label == 'Right' && result[1].label == 'Left') || (result[0].label == 'Left' && result[1].label == 'Right')) {
    scroll_count++
  }
}

//Y - Axis = Horizontal Scrolling
let initPosY = 0
let currentPosY = 0
function scrollingDetection(result) {

  // console.log(result[0])
  mouse_pointer.style.display = 'none'

  if(initPosY == 0) {
    initPosY = result[0].y 
  }
  else {
    currentPosY = result[0].y
  }

  console.log('Initial Pos: ');
  console.log(initPosY + '\n');
  console.log('Current Pos: ');
  console.log(currentPosY + '\n');

  if(initPosY > currentPosY){
    console.log('Scrolling Up')
    window.scrollTo(0, window.scrollY + 5)
  }

}


//Ripple Event Handler
var drawRipple = function(x_axis, y_axis) {
  var x = x_axis;
  var y = y_axis;
  var node = document.querySelector(".ripple");
  var newNode = node.cloneNode(true);
  newNode.classList.add("animate");
  newNode.style.left = x + "px";
  newNode.style.top = y + 16 + "px";
  node.parentNode.replaceChild(newNode, node);
};

function mediaPipeHandsSetup(){

  const hands = new Hands({locateFile: (file) => {
   return `${window.location.origin}/mediapipe/${file}`;
  }});
  
  hands.setOptions({
   maxNumHands: 2,
   minDetectionConfidence: 0.8,
   minTrackingConfidence: 0.8,
   selfieMode: true,
  });
  
  hands.onResults(onResults);
  const camera = new Camera(videoElement, {
    onFrame: async () => {
      await hands.send({image: videoElement});
    },
    width: window.Width,
    height: window.Height
  });
  camera.start();
}

mediaPipeHandsSetup()