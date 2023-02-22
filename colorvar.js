function bg() {
const p1 = document.getElementById('color');
const p2 = document.getElementById('color2');
const p3 = document.getElementById('color3');

const t1 = p1.options[p1.selectedIndex].text;
const t2 = p2.options[p2.selectedIndex].text;
const t3 = p3.options[p3.selectedIndex].text;

document.getElementById('page1').style.backgroundColor = t1
document.getElementById('page2').style.backgroundColor = t2
document.getElementById('page3').style.backgroundColor = t3
}