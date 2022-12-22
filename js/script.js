//Parallax

document.addEventListener("mousemove" , parallax);
function parallax(e){
   document.querySelectorAll(".layer").forEach(function(move){
    var moving_value = move.getAttribute("data-speed");
    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientY * moving_value) / 250;
    move.style.transform = "translateX("+ x +"px) translateY("+ y +"px)" 
   })
}

//Tab header

const listClick = document.querySelectorAll('.clickTo_menu button')

const menuFull = document.querySelector('.menu')

const allMenus = document.querySelectorAll('.menus')

listClick.forEach((item, index) =>{
   item.addEventListener('click', () =>{

      listClick.forEach(item =>{
         item.classList.remove('active')
      })

      item.classList.add('active')

      allMenus.forEach(item =>{
         item.classList.remove('active')
      })
     
      allMenus[index].classList.add('active')

      menuFull.classList.replace('menu', 'active')
   })
}) 

function headerLeave(){
   listClick.forEach(item =>{
      item.classList.remove('active')
   })
   setTimeout( () =>{
      allMenus.forEach(item =>{
         item.classList.remove('active')
      })
   },500) //dps de 5 ms a class active vai ser removida
   
   menuFull.classList.replace('active', 'menu')
}

