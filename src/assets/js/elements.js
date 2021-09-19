
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

 //CREATE RIPPLE ON CLICK ELEMENT
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

 let loading_text = document.createElement('p')
 loading_text.innerText = 'Loading resources . .'
 loading_text.classList.add('mt-4')
 parent_div.appendChild(loading_text)

 document.body.appendChild(parent_div)

 //CANVAS
 let body_canvas = document.createElement('canvas');
 body_canvas.classList.add('output_canvas')
 document.body.appendChild(body_canvas)
 
 //VIDEO ELEMENT
 let body_video = document.createElement('video');
 body_video.classList.add('input_video')
 document.body.appendChild(body_video)
 
 //POINTER ELEMENT
 let pointer = document.createElement('div');
 pointer.classList.add('pointer')
 document.body.appendChild(pointer)

 //SCROLLING INDICATOR
 let scroll = document.createElement('div')
 scroll.classList.add('scroll')
 document.body.appendChild(scroll)
 
}


createElements()