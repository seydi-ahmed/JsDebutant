const colors = ["green" , "red" , "rgba(133,122,200)" , "#f15025"]
const btn = document.getElementById('btn')
const color = document.querySelector(".color")
 
btn.addEventListener('click',function (){
    const randomnumber = randomcolor();
    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent = colors[randomnumber]

})


function randomcolor(params) {
    return Math.floor(Math.random()*colors.length);
}

