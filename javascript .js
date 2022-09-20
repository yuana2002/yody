
///-------------add from đăng nhập---------------
const login = document.querySelector('#add-form-log-in')
const loginClose = document.querySelector('#add-close-log-in')
login.addEventListener("click", function(){
   document.querySelector('.add-form-log-in').style.display = "flex"
})
loginClose.addEventListener("click", function(){
  document.querySelector('.add-form-log-in').style.display = "none"
})

//---------add from đăng kí----------------\
const register = document.querySelector('#add-form-register')
const registerClose = document.querySelector('#add-close-register')
register.addEventListener("click", function(){
document.querySelector('.add-form-register').style.display = "flex"
})
registerClose.addEventListener("click", function(){
document.querySelector('.add-form-register').style.display = "none"
})


// ------------gim thanh top----------
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// -----hiệu ứng trượt slider sale---------
 const btnRight = document.querySelector('.fa-chevron-right')
 const btnLeft = document.querySelector('.fa-chevron-left')
 const imgNumber = document.querySelectorAll('.slider-product-one-content-items')
 console.log(btnRight)
// console.log( btnrleft)
// console.log(imgNumber)
btnRight.addEventListener ("click",function(){
  index = index+1
  if(index>imgNumber.length-1){
    index=0
  }
  document.querySelector(".slider-product-two-of-one").style.right = index *100+"%"
})

btnLeft.addEventListener ("click",function(){
  index = index-1
  if(index<=0){
    index=imgNumber.length-1
  }
  document.querySelector(".slider-product-two-of-one").style.right = index *100+"%"
})

///// lọc sản phẩm
 function changeProductList(type, element) 
 {
let tabs =document.getElementsByClassName('tab');

    for (i = 0; i < tabs.length; i++) {
     tabs[i].style.background = '#f7dede';
 } 
     element.style.background = '#00000020';

     document.getElementById(type).style.display = 'block'
     switch (type) {
      case 'hot':
              document.getElementById('men').style.display = 'none';
              document.getElementById('girl').style.display = 'none';
              document.getElementById('baby').style.display = 'none';
              document.getElementById('sale50').style.display = 'none';
         break;
         case 'men':
              document.getElementById('hot').style.display = 'none';
              document.getElementById('girl').style.display = 'none';
              document.getElementById('baby').style.display = 'none';
              document.getElementById('sale50').style.display = 'none';
         break;
         case 'girl':
              document.getElementById('hot').style.display = 'none';
              document.getElementById('men').style.display = 'none';
              document.getElementById('baby').style.display = 'none';
              document.getElementById('sale50').style.display = 'none';
         break;
         case 'baby':
             document.getElementById('hot').style.display = 'none';
             document.getElementById('men').style.display = 'none';
             document.getElementById('girl').style.display = 'none';
             document.getElementById('sale50').style.display = 'none';
         break;
         case 'sale50':
              document.getElementById('hot').style.display = 'none';
              document.getElementById('men').style.display = 'none';
              document.getElementById('girl').style.display = 'none';
              document.getElementById('baby').style.display = 'none';
         break;
    }
 }

 function zooMount(image){
   var src = image.src;
   document.getElementById('frame').style.backgroundImage = "url("+src+")" 
 }
