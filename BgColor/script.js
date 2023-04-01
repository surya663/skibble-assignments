const bg = document.getElementsByTagName('body')

function bgcolor(event){
    const color = event.target.value;
    bg[0].style.backgroundColor =color;
}