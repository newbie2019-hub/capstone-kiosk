import { Hands, HAND_CONNECTIONS } from '@mediapipe/hands'
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils'
import { Camera } from '@mediapipe/camera_utils'
import { gsap } from "gsap"

function createElements(){
  let body_canvas = document.createElement('canvas');
  body_canvas.classList.add('output_canvas')
  document.body.appendChild(body_canvas)
  
  let body_video = document.createElement('video');
  body_video.classList.add('input_video')
  document.body.appendChild(body_video)
  
  let pointer = document.createElement('div');
  pointer.classList.add('pointer')
  document.body.appendChild(pointer)
}

createElements()

const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');
const pointer = document.getElementsByClassName('pointer')[0];
canvasElement.setAttribute('height', screen.height)
canvasElement.setAttribute('width', screen.width)

let flag_pointer = false

function onResults(results) {
 
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
  
  if(results.multiHandLandmarks.length == 0) {
    if(!flag_pointer){
      gsap.to('.pointer', 0.5, {
        css: {
          opacity: 0,
        }
      });
    }
    flag_pointer = true
  }
  else {
    if(flag_pointer){
      gsap.to('.pointer', 0.5, {
        css: {
          opacity: 1,
        }
      });
    }
    flag_pointer = false
  }

  if (results.multiHandLandmarks && results.multiHandedness) {
   for (let index = 0; index < results.multiHandLandmarks.length; index++) {
    const classification = results.multiHandedness[index];
    const isRightHand = classification.label === 'Right';
    if (results.multiHandLandmarks) {
      for (const landmarks of results.multiHandLandmarks) {

        //Check distance of the tip of the index and thumb
        //https://google.github.io/mediapipe/images/mobile/hand_landmarks.png
        let x = landmarks[8].x, y = landmarks[8].y;
        
        x *= window.outerWidth - 30
        y *= window.outerHeight - 100

        pointer.style.left = `${x}px`
        pointer.style.top = `${y}px`

        let click = [landmarks[4], landmarks[8]]
        // lineDistance(click[0], click[1])
        // fingersUp(landmarks)
        drawConnectors(canvasCtx, click, HAND_CONNECTIONS,
                       {color: isRightHand ? '#00FF00' : '#FF0000', lineWidth: 1});
        drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
                       {color: isRightHand ? '#00FF00' : '#FF0000', lineWidth: 1});
        drawLandmarks(canvasCtx, landmarks, {color: '#17c0eb', lineWidth: 1});
      }
    }
   }
  }
  

  // for (let index = 0; index < results.multiHandLandmarks.length; index++) {
   
  // }
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

function isClicked(distance){
 if(distance < 0.05){
  console.log('clicked')
 }
}

function mediaPipeHandsSetup(){

  const hands = new Hands({locateFile: (file) => {
   return `${window.location.origin}/mediapipe/${file}`;
  }});
  
  hands.setOptions({
   maxNumHands: 2,
   minDetectionConfidence: 0.8,
   minTrackingConfidence: 0.7,
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