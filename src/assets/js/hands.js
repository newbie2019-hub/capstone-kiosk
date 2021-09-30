import { Hands, HAND_CONNECTIONS } from '@mediapipe/hands'
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils'
import { Camera } from '@mediapipe/camera_utils'
import { gsap } from "gsap"
import store from '../../store'
window.onload = function () {
  
  const mouse_pointer = document.getElementsByClassName('pointer')[0]
  const countdown_timer = document.getElementsByClassName('timer')[0]

  const videoElement = document.getElementsByClassName('input_video')[0];
  const canvasElement = document.getElementsByClassName('output_canvas')[0];
  const canvasCtx = canvasElement.getContext('2d');
  const pointer = document.getElementsByClassName('pointer')[0];

  const notif = document.getElementsByClassName('notif')[0];
  const notiftitle = document.getElementsByClassName('notif-title')[0];
  const notifmessage = document.getElementsByClassName('notif-message')[0];

  canvasElement.setAttribute('height', screen.height)
  canvasElement.setAttribute('width', screen.width)

  let flag_pointer = false
  let loaded = false

  function onResults(results) {

    // LOADING INDICATOR - REMOVE
    if (!loaded) {
      setTimeout(() => {
        document.getElementsByClassName('loader')[0].remove()
      }, 1800)
      loaded = true
    }

    notifNoHandsDetected(results.multiHandedness)
    
    //SLIDE NAVIGATION - 
    //IF NO FINGERS ARE UP EMIT SCROLL 
    //(e.g. left or right hand - left or right scroll)
    slideNavigation()
   
    canvasCtx.save(); 
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height); 
    canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height); 

    if (results.multiHandLandmarks && results.multiHandedness) {

      updatePointerVisibility(results)
      scrollingFunctionality(results.multiHandedness)
      notifScrolling()
      returnGestureRecog(results)

      if(hasSwiper){
        monitorSwiperNavigation(results)
      }

      for (let index = 0; index < results.multiHandLandmarks.length; index++) {
        const classification = results.multiHandedness[index];
        const isRightHand = classification.label === 'Right';

        //SCROLLING - PASS RIGHT HAND INDEX
        if (scroll_count > 3) {
          if (isRightHand) {
            scrollingDetection(results.multiHandLandmarks[index])
          }
        }

        if (results.multiHandLandmarks) {
          for (const landmarks of results.multiHandLandmarks) {

            //Check distance of the tip index and thumb
            //https://google.github.io/mediapipe/images/mobile/hand_landmarks.png
            let x = landmarks[4].x, y = landmarks[4].y;

            x *= window.outerWidth - 30
            y *= window.outerHeight - 100

            pointer.style.left = `${ x }px`
            pointer.style.top = `${ y }px`

            hoverElement(x, y)

            let click = [landmarks[4], landmarks[8]]
            isClicked(lineDistance(click[0], click[1]), x, y)

            // fingersUp(landmarks)

            //DRAW LANDMARKS - SKELETON
            // drawConnectors(canvasCtx, click, HAND_CONNECTIONS,
            //                {color: isRightHand ? '#00FF00' : '#FF0000', lineWidth: 3});
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
  function lineDistance(point1, point2) {
    var xs = 0;
    var ys = 0;

    xs = point2.x - point1.x;
    xs = xs * xs;

    ys = point2.y - point1.y;
    ys = ys * ys;


    var distance = Math.sqrt(xs + ys);
    return distance;
  }

  //Detect for fingers up
  function fingersUp(landmarks) {
    const indexes = [4, 2, 8, 6, 12, 10, 16, 14, 20, 18];
    let fingersUp = [];

    for (let i = 0; i < indexes.length; i += 2) {
      if (i == 0) {

        if (lineDistance(landmarks[indexes[i]], landmarks[5]) < 0.05) {
          fingersUp.push(0)
        }
        else {
          fingersUp.push(1)
        }
      }
      else {
        if (lineDistance(landmarks[indexes[i]], landmarks[0]) < lineDistance(landmarks[indexes[i + 1]], landmarks[0])) {
          fingersUp.push(0)
        }
        else {
          fingersUp.push(1)
        }
      }
    }

    return fingersUp
  }

  //ELEMENT FROM POINT
  let elem, prevEl = ''
  function hoverElement(x, y) {


    if (scroll_count > 3) {
      if (prevEl) {
        prevEl.classList.remove('border-hover')
      }
      return
    }

    elem = document.elementFromPoint(x, y);
    if (elem) {
      const parentEl = elem.parentElement

      if (checkHover(parentEl.className)) {
        parentEl.classList.add('border-hover')
        if (prevEl == '') {
          prevEl = parentEl
        }
        else {
          if (prevEl !== parentEl) {
            prevEl.classList.remove('border-hover')
            prevEl = parentEl
          }
        }
      }
    }

  }

  //Check if hover element has a card
  function checkHover(input) {
    if(window.location.pathname == '/feedback') return
    
    if (input.includes('card-content')) {
      return false
    }
    return input.includes('card') || input.includes('card-small')
  }

  // //RETURN GESTURE 
  // //COMPARE X VALUE OF INDEX 4 AND 17
  let iv = null //interval
  let return_timer = null;
  let countdown = 3;
  let flagReturn = false;

  function returnGestureRecog(res){
    if (window.location.pathname == '/') {
      clearReturn()
      return
    }

    const { multiHandLandmarks, multiHandedness } = res
    for (let index = 0; index < multiHandLandmarks.length; index++) {
      const classification = multiHandedness[index];
      const isRight = classification.label === 'Right';
      if(isRight){
        if(multiHandLandmarks[index][4].x > multiHandLandmarks[index][17].x){
          returnPrevRoute()
          flagReturn = true
        }
        else {
          clearReturn()
        }
      }
      else {
        if(multiHandLandmarks[index][4].x < multiHandLandmarks[index][17].x){
          returnPrevRoute()
          flagReturn = true
        }
        else {
          clearReturn()
        }
      }
    }

  }

  function returnPrevRoute(){
    if(flagReturn) return
    countdown = 3;

    iv = window.setInterval(() => {
      countdown_timer.innerHTML = `${countdown}`
      countdown--
      if(countdown < 0){
        clearReturn()
      }
      sleep(1500)
    }, 1000)
  
    return_timer = window.setTimeout(()=>{
      history.back()
    }, 3000)
  }

  function clearReturn(){
    // if(countdown >= 3) return
    clearInterval(iv)
    countdown = 3
    countdown_timer.innerHTML = '•'
    clearTimeout(return_timer)
    flagReturn = false
  }

  //Check if distance between landmark[4] and landmark[8]
  let click_counter = 0;
  let click_status = 'none'
  let clicked = false
  async function isClicked(distance, x, y) {

    //If scrolling, return immediately
    if(scroll_count > 3) return 

    if (distance < 0.05) {
      click_counter++
    }
    else {
      click_counter = 0
      if (click_status == 'held') {
        click_status = 'released'
        clicked = true
      }
    }

    if (click_status == 'released' && click_counter == 0) {
      click_status = 'none'
    }
    else if (click_counter > 0 && click_counter <= 1) {
      click_status = 'start'
    }
    else if (click_counter > 2) {
      click_status = 'held'
    }


    if (clicked && click_counter == 0) {
      drawRipple()
      const $el = document.elementFromPoint(x + 20, y + 20)
      if ($el) {
        $el.dispatchEvent(
          new MouseEvent('mouseup', {
            bubbles: true,
            view: window,
            cancelable: true,
            clientX: x,
            clientY: y,
            pageX: x,
            pageY: y,
          })
        )
        $el.dispatchEvent(
          new MouseEvent('mousedown', {
            bubbles: true,
            cancelable: true,
            clientX: x,
            clientY: y,
            pageX: x,
            pageY: y,
          })
        )
        $el.dispatchEvent(
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            clientX: x,
            clientY: y,
            pageX: x,
            pageY: y,
          })
        )

        // Focus
        if (['INPUT', 'TEXTAREA', 'BUTTON', 'A'].includes($el.nodeName))
          $el.focus()
      }
      clicked = false
    }

  }

  //Native Sleep
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  //REMOVE POINTER IF NO HANDS IS VISIBLE
  function updatePointerVisibility(results) {
    mouse_pointer.style.display = 'flex'
    if (results.multiHandLandmarks.length == 0) {

      if (!flag_pointer) {
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
      if (scroll_count < 4) {
        if (flag_pointer) {
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

    if (result.length != 2) {
      if(window.location.pathname != '/feedback' || window.location.pathname != '/mission' || window.location.pathname != '/vision' || window.location.pathname != '/hymn'){
        document.getElementsByClassName('scroll')[0].style.display = 'block'
      }
      scroll_count = 0
      initPosY = 0
      return
    }

    if ((result[0].label == 'Right' && result[1].label == 'Left') || (result[0].label == 'Left' && result[1].label == 'Right')) {
      scroll_count++
      document.getElementsByClassName('scroll')[0].style.display = 'none'
    }
  }

  //Notif message - Scrolling Enabled
  function notifScrolling() {
    if (scroll_count > 3) {
      if (scroll_count && notif.style.display == 'block') return
      notif.style.display = 'block';
      notiftitle.innerText = 'Scrolling Enabled'
      notifmessage.innerText = 'Slide your right hand from top to bottom or vice-versa'
    }
  }

  //Notif message - No Hands Detected
  let nohands = true
  function notifNoHandsDetected(multiHandLandmarks) {
    if (scroll_count > 3) return

    nohands = multiHandLandmarks.length == 0 ? true : false

    if (!nohands) {
      notif.style.display = 'none';
    }
    else {
      if (nohands && notif.style.display == 'block') return
      notif.style.display = 'block';
      notiftitle.innerText = 'No Hands Detected'
      notifmessage.innerText = 'Please show your hands to the camera'
    }

  }

  //Y - Axis = Horizontal Scrolling
  let initPosY = 0
  let currentPosY = 0
  function scrollingDetection(result) {

    // console.log(result[0])
    mouse_pointer.style.display = 'none'

    if (initPosY == 0) {
      initPosY = result[0].y
    }
    else {
      currentPosY = result[0].y
    }

    // console.log('Initial Pos: ');
    // console.log(initPosY + '\n');
    // console.log('Current Pos: ');
    // console.log(currentPosY + '\n');

    if ((initPosY - 0.04) > currentPosY) {
      // console.log('Scrolling Up')
      window.scrollTo(0, window.scrollY + 25)
    }

    if ((initPosY + 0.04) < currentPosY) {
      // console.log('Scrolling Down')
      window.scrollTo(0, window.scrollY - 25)
    }

  }

  //SWIPER NAVIGATION
  //CHECK IF ROUTE HAS SWIPER 
  let swiper
  let hasSwiper = false
  function slideNavigation(){
    const swiper_el = document.querySelector('.swiper');

    if(!swiper_el) {
      swiper = ''
      hasSwiper = false
      return
    }
    
    swiper = swiper_el.swiper
    
    if(swiper && hasSwiper) return

    if(swiper && !hasSwiper) {
      hasSwiper = true
    }
  }

  //CHECK NAVIGATION IF LEFT OR RIGHT
  let navigate = false
  let emitNavigation = false, isRight = false
  let prevCounter = 0
  function monitorSwiperNavigation(results){
    for (let index = 0; index < results.multiHandLandmarks.length; index++) {
      const classification = results.multiHandedness[index];
      isRight = classification.label === 'Right';

      let counter = 0
      //RIGHT HAND SCROLL

      fingersUp(results.multiHandLandmarks[index]).forEach(value => {
        if(value == 0) {
          counter++
        }
      });

      if(counter == 5){
        navigate = true
        if(prevCounter == 0){
          prevCounter = counter
        }
      }
      else {
        navigate = false
      }

      if(prevCounter != 0 && counter == 0){
        if(!emitNavigation){
          emitNavigation = true
        }
      }
 
    }

    if(emitNavigation) {
      if(isRight){
        swiper.slideNext()
      }
      else {
        swiper.slidePrev()
      }
      prevCounter = 0
      emitNavigation = false
    }
  }

  //Ripple Event Handler
  var drawRipple = function () {
    var node = document.querySelector(".ripple");
    var newNode = node.cloneNode(true);
    newNode.classList.add("animate");
    node.parentNode.replaceChild(newNode, node);
  };


  function mediaPipeHandsSetup() {

    const hands = new Hands({
      locateFile: (file) => {
        return `${ window.location.origin }/mediapipe/${ file }`;
      }
    });

    hands.setOptions({
      maxNumHands: 2,
      minDetectionConfidence: 0.8,
      minTrackingConfidence: 0.8,
      selfieMode: true,
    });

    hands.onResults(onResults);
    const camera = new Camera(videoElement, {
      onFrame: async () => {
        await hands.send({ image: videoElement });
      },
      width: window.Width,
      height: window.Height
    });
    camera.start();
  }

  async function loadData(){
    await store.dispatch('info/getMissionVision')
    await store.dispatch('info/getCoreValues')
    await store.dispatch('info/getOrganizations')
    await store.dispatch('info/getSchoolOfficials')
    await store.dispatch('info/getDepartments')
    await store.dispatch('info/getTelDirectories')
    await store.dispatch('info/getCourses')
  }

  loadData()
  mediaPipeHandsSetup()

}