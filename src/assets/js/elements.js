
function createNotif(){
 let notif_toast = document.createElement('div')
 notif_toast.classList.add('notif')
 
 let notif_toast_title = document.createElement('p')
 notif_toast_title.classList.add('notif-title')
 notif_toast_title.innerText = 'Title goes here.'
 notif_toast.appendChild(notif_toast_title)
 
 let notif_toast_message = document.createElement('p')
 notif_toast_message.classList.add('notif-message')
 notif_toast_message.innerText = 'Notification message goes here.'
 notif_toast.appendChild(notif_toast_message)

 document.body.appendChild(notif_toast)
}

function createElements(){
 //CREATE NOTIF ELEMENT
 createNotif()
 
 //CREATE LOADING ELEMENT
//  let parent_div = document.createElement('div');
//  parent_div.classList.add('loader')
 
//  let span_dot = document.createElement('span')
//  span_dot.classList.add('dot')
//  parent_div.appendChild(span_dot)

//  let span_dots = document.createElement('div')
//  span_dots.classList.add('dots')
//  parent_div.appendChild(span_dots)

//  for(let i = 1; i <= 3; i++){
//    let span = document.createElement('span')
//    span_dots.appendChild(span)
//  }

//  const loading_text = document.createElement('p')
//  loading_text.innerText = '\nLoading resources . .\n\n Setting up the model and data \n Loading the model for the first time might take a while \n but it will be cached by your browser after then.'
//  loading_text.classList.add('mt-1')
//  parent_div.appendChild(loading_text)

//  document.body.appendChild(parent_div)

 //CANVAS
 const body_canvas = document.createElement('canvas');
 body_canvas.classList.add('output_canvas')
 document.body.appendChild(body_canvas)
 
 //VIDEO ELEMENT
 const body_video = document.createElement('video');
 body_video.classList.add('input_video')
 document.body.appendChild(body_video)
 
 //POINTER ELEMENT
 const pointer = document.createElement('div');
 pointer.classList.add('pointer')
 document.body.appendChild(pointer)

 const countdownTimer = document.createElement('p')
 countdownTimer.classList.add('timer');
 countdownTimer.innerHTML = '•'
 pointer.appendChild(countdownTimer);

 //CREATE RIPPLE ON CLICK ELEMENT
 const ripple = document.createElement('div');
 ripple.classList.add('ripple')
 pointer.appendChild(ripple)


}


createElements()