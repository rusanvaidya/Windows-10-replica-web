const prog = document.getElementById('my-program')
const men_prog = document.getElementById('menu-icon');
window.onclick = function(event)
{
    if(event.target==men_prog)
    {
        prog.style.display="block";
        men_prog.style.backgroundColor="rgba(255, 255, 255, 0.288)";
    }
    else
    {
        prog.style.display="none";
        men_prog.style.backgroundColor="transparent";
    }
}

//Make the DIV element draggagle:
dragElement(document.getElementById("chatdiv"));
dragElement(document.getElementById("noticediv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.pr//Make the DIV element draggagle:
    dragElement(document.getElementById("chatdiv"));
    dragElement(document.getElementById("noticediv"));
    
    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
      } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
      }
    
      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }
    
      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }
    
      function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
    eventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// close button
document.getElementById('close-cd').onclick = function()
{
    document.getElementById('chatdiv').style.display='none';
    document.getElementById('chat-active').style.boxShadow="none";
}

document.getElementById('close-nd').onclick = function()
{
    document.getElementById('noticediv').style.display='none';
    document.getElementById('notice-active').style.boxShadow="none";
}

// window open function
function open_chat()
{
    reset_zindex();
    document.getElementById("chatdiv").style.zIndex="9";
    document.getElementById('chatdiv').style.display="block";
    document.getElementById('chat-active').style.boxShadow="inset 0 0 4px 4px grey";
}
function open_notice()
{
    reset_zindex();
    document.getElementById("noticediv").style.zIndex="9";
    document.getElementById('noticediv').style.display="block";
    document.getElementById('notice-active').style.boxShadow="inset 0 0 4px 4px grey";
}
function reset_zindex()
{
    document.getElementById("chatdiv").style.zIndex="8";
    document.getElementById("noticediv").style.zIndex="8";
}