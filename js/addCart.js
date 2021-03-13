let btns = document.querySelectorAll('.cart');
let badge = document.querySelector('.badge');
console.log(btns);

console.log(badge.textContent);
Array.from(btns).forEach(btn=>{
    btn.addEventListener('click',e => {
        badge.innerHTML = parseInt(badge.innerHTML) + 1;
    } )
})