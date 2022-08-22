const input=document.getElementById('input')
const submit=document.getElementById('submitBtn')
const ul=document.getElementById('ul')
const clear=document.getElementById('clear')

const arr=[]

submit.addEventListener('click',function (){
  let i=input.value
   let li=document.createElement('li');
   li.innerHTML=`${i}<button id="btn" >remove</button>`;
 
   ul.appendChild(li)
  
   let lis=ul.querySelectorAll('li');
   lis.forEach((i)=>{
       const btn=i.querySelector('#btn');
       btn.addEventListener('click',(e)=>{
          e.currentTarget.parentElement.classList.add('class') 
       })
   })
   i.innerText=''
})
