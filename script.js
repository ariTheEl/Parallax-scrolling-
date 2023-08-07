let clouds = document.getElementById('clouds');
let mountains = document.getElementById("mountain");
let landscape = document.getElementById("landscape");
let text1 = document.getElementById("text-1");
let btn = document.getElementById("btn");
let p = document.getElementsByClassName('sec')

window.addEventListener('scroll', function(){
    let value = window.scrollY
    clouds.style.left = value - 0.25+'px'
    mountains.style.top = value - 0.05 + "px";
    landscape.style.top = value - 0.5 + "px";
    text1.style.marginRight = value - 4 + "px";
    text1.style.marginTop = value - 1.5 + "px";
    btn.style.marginTop = value - 1.5 + "px";
})

//      const translateX = document.querySelectorAll(".translateX");
// const translateY = document.querySelectorAll(".translateY");
// window.addEventListener("scroll" ,() => {
//   let scroll = window.pageYOffset;
//   translateX.forEach(element => {
//     let speed = element.dataset.speed;
//     element.style.transform = `translateX(${scroll * speed}px)`;
//   })
//   translateY.forEach(element => {
//     let speed = element.dataset.speed;
//     element.style.transform = `translateY(${scroll * speed}px)`;
//   })
// })
