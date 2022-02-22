// import fetch from 'node-fetch';
fetch('https://raw.githubusercontent.com/NikhilaVutukuri/NikhilaVutukuri.github.io/master/data.json?token=GHSAT0AAAAAABQMJYNI3X2YRRGGAZRMZQCIYQ5MH3Q')
.then(resp => resp.json())
.then(data => {
    let section2 = data.section2;
    let section3 = data.section3;
    let section4 = data.section4;
    document.getElementById("cards").children[0].children[0].src="./images/"+section2[0].image;
    document.getElementById("cards").children[0].children[1].innerHTML=section2.heading;
    document.getElementById("cards").children[0].children[2].innerHTML=section2.text;
})

setTimeout(function(){
    document.getElementById("header-other").children[1].classList.remove('default');
    document.getElementById("header-other").children[1].classList.add('color-overlay');
},500);
