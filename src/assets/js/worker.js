import { Camera } from '@mediapipe/camera_utils'
import hands_class from './hands'
import { Hands } from '@mediapipe/hands'

let videoEl

const VIDEO_WIDTH_CROP = Math.round(640 / 1.5)
const VIDEO_HEIGHT = 480

const hands = new Hands({
 locateFile: (file) => {
   return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
 }
});

hands.setOptions({
 maxNumHands: 1,
 minDetectionConfidence: 0.8,
 minTrackingConfidence: 0.5,
 selfieMode: true,
});

// hands.onResults(hands_class.onResults);


const camera = new Camera(videoEl, {
 onFrame: async () => {
   await hands.send({ image: videoEl });
 },
 width: VIDEO_WIDTH_CROP,
 height: VIDEO_HEIGHT
});

camera.start();