fetch('data.json')
.then(resp => resp.json())
.then(data => {
    let section2 = data.section2;
    let section3 = data.section3;
    let section4 = data.section4;
    document.getElementById("cards").children[0].children[0].src="./images/"+section2[0].image;
    document.getElementById("cards").children[0].children[1].innerHTML= section2[0].heading;
    document.getElementById("cards").children[0].children[2].innerHTML= section2[0].text;
    document.getElementById("cards").children[1].children[0].src="./images/"+section2[1].image;
    document.getElementById("cards").children[1].children[1].innerHTML= section2[1].heading;
    document.getElementById("cards").children[1].children[2].innerHTML= section2[1].text;
    document.getElementById("cards").children[2].children[0].src="./images/"+section2[2].image;
    document.getElementById("cards").children[2].children[1].innerHTML= section2[2].heading;
    document.getElementById("cards").children[2].children[2].innerHTML= section2[2].text;
    document.getElementById("about").children[0].children[0].innerHTML = section3.text[0];
    document.getElementById("about").children[0].children[1].innerHTML = section3.text[1];
    document.getElementById("attractions").children[0].children[0].children[0].src="./images/"+section4[0].image;
    document.getElementById("attractions").children[0].children[1].children[0].innerHTML=section4[0].heading;
    document.getElementById("attractions").children[0].children[1].children[1].innerHTML=section4[0].text;
    document.getElementById("attractions").children[1].children[0].children[0].innerHTML=section4[1].heading;
    document.getElementById("attractions").children[1].children[0].children[1].innerHTML=section4[1].text;
    document.getElementById("attractions").children[1].children[1].children[0].src="./images/"+section4[1].image;
});

setTimeout(function(){
    document.getElementById("header-other").children[1].classList.remove('default');
    document.getElementById("header-other").children[1].classList.add('color-overlay');
},500);