
let product1=document.querySelector('#proc1')
let product2=document.querySelector('#proc2')
let product3=document.querySelector('#proc3')
let product4=document.querySelector('#proc4')

let bottomContent=document.querySelector('.bottom')

let wishBtn=document.querySelector('.wish-btn')
let cartBtn=document.querySelector('.cart-btn')
let wishFill=document.getElementById('productheart');
let wishheart=document.getElementById('productwish');


function wish(){
   if( wishicon.classList=='fa-regular fa-xl fa-heart'){
      wishicon.classList.replace('fa-regular','fa-solid')}
      else{
         wishicon.classList.replace('fa-solid','fa-regular')
      }
}

let wishicon=document.querySelector('.fa-heart')
wishicon.addEventListener('click',()=>{
 wish()
})

product1.addEventListener('click',()=>{
   window.location.href='product.html'
})
product2.addEventListener('click',()=>{
   window.location.href='product.html'
})
product3.addEventListener('click',()=>{
   window.location.href='product.html'
})
product4.addEventListener('click',()=>{
   window.location.href='product.html'
})

wishBtn.addEventListener('click',()=>{
   window.location.href='wish.html'
})
cartBtn.addEventListener('click',()=>{
   window.location.href='cart.html'
})

wishFill.addEventListener('click',()=>{
   console.log('iwrv')

})
