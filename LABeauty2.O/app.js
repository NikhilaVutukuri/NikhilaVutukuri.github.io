fetch('data.json')
.then(resp => resp.json())
.then(data => {
    let section2 = data.section2;
    let section3 = data.section3;
    let section4 = data.section4;
});

setTimeout(function(){
    document.getElementById("header-other").children[1].classList.remove('default');
    document.getElementById("header-other").children[1].classList.add('color-overlay');
},500);
