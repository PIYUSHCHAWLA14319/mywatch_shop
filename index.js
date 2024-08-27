const navLinks=document.getElementById('navLinks');
const hambugger=document.getElementById('hambugger');

hambugger.addEventListener('click',()=>{
    // alert('hello')
    navLinks.classList.toggle('navLinks-active')
})
