/**
 * ----------------------------------------------------------------
 * 
 *              DEVELOPMENT OF TOUCHLESS INTERACTIVE
 *         INFORMATION KIOSK FOR LEYTE NORMAL UNIVERSITY
 *                        2020-2021
 *         
 *         GROUP MEMBERS:
 *         1. YVAN SABAY
 *         2. EZIKIEL TULAWAN
 *         3. GENREVE FERNANDEZ
 *         4. DANICA BARRIENTOS
 * 
 * ----------------------------------------------------------------
 * 
 */
import { Hands, HAND_CONNECTIONS } from '@mediapipe/hands'
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils'
import { Camera } from '@mediapipe/camera_utils'
import { gsap } from "gsap"

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
  let isRight = false
  function onResults(results) {

     /**
      *  REMOVES LOADING INDICATOR 
      *  AFTER 1250ms 
      * 
      */
     if (!loaded) {
       setTimeout(() => {
         document.getElementsByClassName('loader')[0].remove()
         console.clear()
         console.log("%cThis is still an experimental feature and may not be stable as you think.", "color: orange; font-size: 1.2rem;")
         console.log("%cThis was made possible by MediaPipe Hands Model.", "color: blue; font-size: 1rem;")
      }, 1200)
      loaded = true
    }
    
    notifNoHandsDetected(results.multiHandedness)
    updatePointerVisibility(results)

    if(results.multiHandLandmarks.length == 0){
      if(flagReturn) {
        clearReturn()
      }
    }

    canvasCtx.save(); 
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height); 
    canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

    if (results.multiHandLandmarks.length != 0 && results.multiHandedness) {

        
      if (window.location.pathname == '/tutorial') {
          const event = new CustomEvent('hands-shown')
          document.dispatchEvent(event)
      }
    
      for (let index = 0; index < results.multiHandLandmarks.length; index++) {
        
        const classification = results.multiHandedness[index];
        isRight = classification.label === 'Right';

        if (results.multiHandLandmarks) {
          for (const landmarks of results.multiHandLandmarks) {

            /**
             * 
             *  CLENCH HANDS SCROLL
             *  EMIT SCROLL IF NO FINGERS ARE UP
             *  
             *  IF LEFT EMIT SCROLL UP 
             *  IF RIGHT EMIT SCROLL DOWN
             * 
             *  THIS WAS A REPLACEMENT FOR THE SWIPE
             *  UP GESTURE NAVIGATION
             * 
             */
            // if(window.location.pathname == '/menu' || window.location.pathname == '/university'){
            //   swipeNavigation(landmarks, isRight)
            // }  

            if(window.location.pathname != '/'){
              returnGestureRecog(landmarks, isRight)
            }

            /**
             *  Check distance of the tip index and thumb
             *  https://google.github.io/mediapipe/images/mobile/hand_landmarks.png
             * 
             */
            let x = landmarks[9].x, y = landmarks[9].y;

            x *= window.outerWidth - 30
            y *= window.outerHeight - 100

            pointer.style.left = `${ x + 22 }px`
            pointer.style.top = `${ y + 22 }px`

            if(window.location.pathname != '/entertainment/draw' || window.location.pathname != '/entertainment/squidgame') {
              hoverElement(x, y)
            }

            /**
             * 
             *  TIP OF THE THUMB FINGER
             *  PASSED FOR THE HANDS-FREE
             *  PAINTING
             * 
             */
            let canvasX = landmarks[4].x, canvasY = landmarks[4].y

            canvasX *= window.outerWidth - 30
            canvasY *= window.outerHeight - 100 

            const click = [landmarks[4], landmarks[8]]

            isDrag(lineDistance(click[0], click[1]), x, y, canvasX, canvasY)
            isClicking(fingersUp(landmarks), x, y)

            /**
             * 
             *  DRAW SKELETON HAND LANDMARKS
             *  THIS WAS BASED ON THE DOCUMENTATION
             *  OF THE MEDIAPIPE HANDS MODEL 
             *  SOLUTION
             * 
             */
            drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
              {color: '#2d90a8', lineWidth: 5});
            drawLandmarks(canvasCtx, landmarks, {color: '#48f1f7', lineWidth: 3});
          }
        }
      }
    }

    canvasCtx.restore();
  }

  /**
   *  DISTANCE CALCULATION BETWEEN
   *  TWO POINTS (x, y)
   * 
   *  d = √(x2−x1)2+(y2−y1)2
   * 
   *  Math.hypot does the same
   * 
   */
  function lineDistance(point1, point2) {
    var distance = Math.hypot(point2.x - point1.x, point2.y - point1.y);
    return distance;
  }

  /**
   *  
   *  DETECTION FOR FINGERS UP
   *  THIS CHECKS THE DISTANCE BETWEEN POINTS OF A 
   *  FINGER TO DETERMINE WETHER IT IS CURLED 
   *  OR NOT
   * 
   *  CHECK THE MEDIAPIPE HAND LANDMARK FOR REFERENCE
   *  
   */
  function fingersUp(landmarks) {
    const indexes = [4, 2, 8, 6, 12, 10, 16, 14, 20, 18];
    let fingersUp = [];

    for (let i = 0; i < indexes.length; i += 2) {
      if (i == 0) {

        if (lineDistance(landmarks[indexes[i]], landmarks[5]) < 0.05 || lineDistance(landmarks[indexes[i]], landmarks[9]) < 0.05 || lineDistance(landmarks[indexes[i]], landmarks[6]) < 0.05) {
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

    elem = document.elementFromPoint(x, y);

    if (elem) {
      const parentEl = elem.parentElement
      if (!parentEl) return
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

  /**
   * 
   *  FUNCTION FOR CHECKING THE HOVERED ELEMENT
   *  OF THE POINTER
   * 
   */
  function checkHover(input) {
    /**
     *  SINCE WE'RE NOT USING TYPESCRIPT
     *  FOR TYPE ANNOTATIONS, WE NEED TO CHECK
     *  THE input IF IT IS A TYPE OF STRING
     *  TO PREVENT ANY RUNTIME ERRORS
     * 
     *  IF typeof String THEN CHECK IF IT
     *  INCLUDES THE SPECIFIED CLASSNAME 
     *  AND RETURN A TRUE VALUE
     * 
     */
    if(typeof input == 'string'){
      return (input.includes('card') || input.includes('card-small') || input.includes('cardhover')) && !input.includes('card-content')
    }
  }

  // //RETURN GESTURE 
  // //COMPARE X VALUE OF INDEX 4 AND 17
  let iv = null //interval
  let return_timer = null;
  let countdown = 3;
  let flagReturn = false;

  function returnGestureRecog(landmarks, isRight){

    if(isRight){
      if(landmarks[4].x > landmarks[17].x){
        returnPrevRoute()
        flagReturn = true
      }
      else {
        clearReturn()
      }
    }
    else {
      if(landmarks[4].x < landmarks[17].x){
        returnPrevRoute()
        flagReturn = true
      }
      else {
        clearReturn()
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
    }, 700)
  
    return_timer = window.setTimeout(()=>{
      history.back()
    }, 2600)
  }

  function clearReturn(){
    if(countdown == 3 && flagReturn == false) return
    clearInterval(iv)
    countdown = 3
    countdown_timer.innerHTML = '•'
    clearTimeout(return_timer)
    flagReturn = false
  }

  /**
   * 
   *  VERTICAL SCROLL GESTURE
   *  Check if distance between landmark[4] and landmark[8]
   *  
   *  CHECK MEDIAPIPE HANDS MODEL FOR REFERENCE 
   *  OF THE HAND LANDMARK
   * 
   */
  let holdCounter = 0
  let dragStatus = 'none'
  let targetWindow = null
  async function isDrag(distance, x, y, drawX, drawY) {
    const $el = document.elementFromPoint(x + 22, y + 22)

    if (distance < 0.065) {
      holdCounter++
    }
    else {
      holdCounter = 0
      if (dragStatus == 'held') { 
        dragStatus = 'released'
      }
    }

    if(window.location.pathname != '/' || window.location.pathname != '/menu' || window.location.pathname != '/university'){
      targetWindow = getTarget($el)
      if(window.location.pathname == '/entertainment/draw'){
        mousePointerUpdate(dragStatus, drawX, drawY)
      }else {
        mousePointerUpdate(dragStatus, x, y)
      }
    }

    if (dragStatus == 'released' && holdCounter == 0) {
      dragStatus = 'none'
    }
    else if (holdCounter > 0 && holdCounter <= 1) {
      dragStatus = 'start'
    }
    else if (holdCounter > 2) {
      dragStatus = 'held'
    }

  }

  /**
   * 
   * NEW IMPLEMENTATION OF CLICK GESTURE
   * 
   * CHECK IF data == [0, 1, 1, 0, 0] - PEACE SIGN
   * 0 - THUMB
   * 1 - INDEX
   * 2 - MIDDLE
   * 3 - RING
   * 4 - PINKY
   * 
   */
  let clickCounter = 0, clicked = false
  let click_status = 'none'
  function isClicking(data, x, y){
    const $el = document.elementFromPoint(x + 22, y + 22)

    if (JSON.stringify(data) == JSON.stringify([0,1,1,0,0]) || JSON.stringify(data) == JSON.stringify([0,1,1,0,1])) {
      clickCounter++
    }
    else {
      clickCounter = 0
      if (click_status == 'held') { 
        click_status = 'released'
        clicked = true
      }
    }

    if (click_status == 'released' && clickCounter == 0) {
      click_status = 'none'
    }
    else if (clickCounter > 0 && clickCounter <= 1) {
      click_status = 'start'
    }
    else if (clickCounter > 2) {
      click_status = 'held'
    }

    if (clicked && clickCounter == 0) {
      drawRipple()
      if ($el) {
        $el.dispatchEvent(
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            clientX: x - 50,
            clientY: y,
            pageX: x - 50,
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

  /**
   * 
   *  REMOVES POINTER VISIBILITY
   *  WHEN NO HANDS IS SHOWN 
   * 
   */
  function updatePointerVisibility(results) {
    mouse_pointer.style.display = 'flex'
    if (results.multiHandLandmarks.length == 0) {

      if (!flag_pointer) {
        gsap.to('.pointer', 0.5, {
          css: {
            scale: 0,
            opacity: 0,
          }
        });
        flag_pointer = true
      }
    }
    else {
      if (flag_pointer) {
        gsap.to('.pointer', 0.5, {
          css: {
            scale: 1,
            opacity: 1,
          }
        });
        flag_pointer = false
      }
    }
  }

  //MOUSE POINTER INTERACTIVITY
  let mousePointerStatus = 'none'
  let initialY = 0
  var tweenScroll = {y: 0}
  function mousePointerUpdate(status, x, y){
    const $el = document.elementFromPoint(x, y)
    if(status == 'start'){
      //MOUSE EVENT START
      if(mousePointerStatus != 'start'){
        mousePointerStatus = 'start'

        if(initialY == 0){
          initialY = y
        }
        //MOUSE DOWN EVENT
        $el.dispatchEvent(
          new MouseEvent('mousedown', {
            bubbles: true,
            cancelable: true,
            clientX: x + 22,
            clientY: y + 22,
            pageX: x + 22,
            pageY: y + 22,
          })
        )

        tweenScroll.y = targetWindow.scrollY || targetWindow.scrollTop || 0
        gsap.killTweensOf(tweenScroll)

      }
    }
    if(status == 'held'){
      
      if(mousePointerStatus != 'held'){
        mousePointerStatus = 'held'
        mouse_pointer.classList.add('pointer-interaction')
      }

      gsap.to(tweenScroll, {
        y: tweenScroll.y + (initialY - y) * 1.5,
        duration: 1,
        overwrite: true,
        immediateRender: true,
        ease: 'linear.easeNone',
      })

      targetWindow.scrollTo(0, tweenScroll.y)

      //MOUSE MOVE EVENT
      $el.dispatchEvent(
        new MouseEvent('mousemove', {
          bubbles: true,
          cancelable: true,
          clientX: x + 22,
          clientY: y + 22,
          pageX: x + 22,
          pageY: y + 22,
        })
      )

    }
    if(status == 'released'){
      if(mousePointerStatus != 'released'){
        mousePointerStatus = 'released'
        mouse_pointer.classList.remove('pointer-interaction')
        
        //MOUSE MOVE EVENT
        $el.dispatchEvent(
          new MouseEvent('mouseup', {
            bubbles: true,
            cancelable: true,
            clientX: x + 22,
            clientY: y + 22,
            pageX: x + 22,
            pageY: y + 22,
          })
        )

        initialY = 0

      }
    }
  }

  /**
   * 
   * FINDS THE CLOSEST SCROLLABLE AREA
   * FROM THE HOVERED ELEMENT 
   * CHECK IF IT IS SCROLLABLE
   * IF NOT RETURN THE WINDOW OBJECT
   * 
   */
  function getTarget($potTarget) {
    const styles = $potTarget && $potTarget.getBoundingClientRect ? getComputedStyle($potTarget) : {}

    if ($potTarget && $potTarget.scrollHeight > $potTarget.clientHeight &&
      (styles.overflow === 'auto' ||
        styles.overflow === 'auto scroll' ||
        styles.overflowY === 'auto' ||
        styles.overflowY === 'auto scroll')
    ) {
      return $potTarget
    } else {
      if ($potTarget && $potTarget.parentElement) {
        return getTarget($potTarget.parentElement)
      } else {
        return window
      }
    }
  }

  
  /**
   * 
   *  SHOWS NOTIFICATION TOAST 
   *  ON THE TOP RIGHT IF 
   *  NO HANDS ARE DETECTED
   * 
   */
  let nohands = true
  function notifNoHandsDetected(multiHandLandmarks) {
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

  /**
   *  -- NOT USED --
   * 
   *  SCROLL UP OR DOWN GESTURE
   *  CHECK FOR THE DISTANCE WITHIN A 450ms TIME
   *  IF DISTANCE IS GREATER THAN initialY + 230 
   *  EMIT DOWN
   *  IF DISTANCE IS LESS THAN initialY - 200
   *  EMIT UP
   *  
   *  ------------------------------------------
   * 
   *  NOT STABLE - WILL BE REPLACED BY HAND CLENCH
   * 
   */
  // let initialScrollValueY = 0, hasScrolled = false
  // function scrolling(y){

  //   if(initialScrollValueY == 0){
  //     initialScrollValueY = y
  //   }

  //   setTimeout(function() {
  //     if(initialScrollValueY != 0){

  //       if(!hasScrolled){
  //         if(y >= initialScrollValueY + 230){
  //           console.log(`Initial Scrolling: ${initialScrollValueY + 200}\nCurrent Y: ${y}`)
  //           const event = new CustomEvent('scroll-down')
  //           document.dispatchEvent(event)
  //           hasScrolled = true
  //         }
          
  //         if(y <= initialScrollValueY - 230){
  //           console.log(`Initial Scrolling: ${initialScrollValueY - 200}\nCurrent Y: ${y}`)
  //           const event = new CustomEvent('scroll-up')
  //           document.dispatchEvent(event)
  //           hasScrolled = true
  //         }
  //       }

  //     }

  //     initialScrollValueY = 0;       
  //   }, 450);  
    
  //   if(hasScrolled){
  //     setTimeout(() => {
  //       hasScrolled = false
  //     }, 250)
  //   }
  
  // }

  /**
   *  RIPPLE EFFECT 
   *  DISPLAY IF CLICK IS
   *  EMITTED
   * 
   */
  function drawRipple() {
    const node = document.querySelector(".ripple");
    const newNode = node.cloneNode(true);
    newNode.classList.add("animate");
    node.parentNode.replaceChild(newNode, node);
  }


  function mediaPipeHandsSetup() {

    const hands = new Hands({
      locateFile: (file) => {
        return `${ window.location.origin }/mediapipe/${ file }`;
      }
    });

    hands.setOptions({
      maxNumHands: 1,
      minDetectionConfidence: 0.75,
      minTrackingConfidence: 0.60,
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

  const memory = navigator.deviceMemory
  if(memory < 8){
    confirm(`It appears that you only have ${memory}GB RAM. Unfortunately, to run this system smoothly you need atleast 8GB RAM, i7 8th Gen processor and a ( NVIDIA Graphics Card - Optional). `)
  }

  // alert('To view all the elements clearly we request you to run our system in fullscreen mode. To run in fullscreen mode simply Press F11 on your keyboard. Thank you!')
  // mediaPipeHandsSetup();
}