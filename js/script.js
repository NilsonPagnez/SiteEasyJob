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
   if(index > 4){ //Para ajustar os indexes dos menus mobile 
      index = index -5
   }
   
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
      menuFull.classList.replace('activeMobileMenu', 'active')
      
      console.log(index)
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
   menuFull.classList.replace('activeMobileMenu', 'menu')
}

//Menu header aparecer no mobile, quando a tela chegar no tamanho onde só aparece o show-menu-mobile, a ul click to menu é redirecionada para o before menu, pra quando eu apertar o botão, o before menu aparecer

const tabMenuMobile = document.querySelector('.show-menu-mobile')
const mobileClickTo_menu = document.querySelector('.mobileClickTo_menu')


tabMenuMobile.addEventListener('click', ()=>{
   if( menuFull.classList !="activeMobileMenu"){
      menuFull.classList.replace('menu','activeMobileMenu')
      menuFull.classList.replace('active','activeMobileMenu')
   }else{
      
      menuFull.classList.replace('activeMobileMenu','menu')
   }

})
