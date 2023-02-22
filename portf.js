let a = 0;
function pic() {
    a = (a+1) % 2;
    if(a === 1) {
        document.getElementById('khoidaubuoi').src='https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F002%2F464%2F955%2F28a';     
    } else {
        document.getElementById('khoidaubuoi').src='https://cdn.discordapp.com/emojis/979740859937484810.webp?size=128&quality=lossless';
    }
}

function pm(state) {
    if (state === "+") {
        a++
        document.getElementById('number').innerHTML = a;
    } else {
        a--
        document.getElementById('number').innerHTML = a;
    }
}

function updatebg(id) {
    if (id === "page1") {
        document.getElementById(id).style.backgroundColor = localStorage.t1;
        document.getElementById(localStorage.t1.concat('1')).selected = true
        document.getElementById(localStorage.t2.concat('2')).selected = true
        document.getElementById(localStorage.t3.concat('3')).selected = true
    } else if (id === "page2") {
        document.getElementById(id).style.backgroundColor = localStorage.t2
        document.getElementById(localStorage.t1.concat('1')).selected = true
        document.getElementById(localStorage.t2.concat('2')).selected = true
        document.getElementById(localStorage.t3.concat('3')).selected = true
    } else if (id === "page3") {
        document.getElementById(id).style.backgroundColor = localStorage.t3
        document.getElementById(localStorage.t1.concat('1')).selected = true
        document.getElementById(localStorage.t2.concat('2')).selected = true
        document.getElementById(localStorage.t3.concat('3')).selected = true
    }

}

function bg() {
    const p1 = document.getElementById('color');
    const p2 = document.getElementById('color2');
    const p3 = document.getElementById('color3');
    
    const t1 = p1.options[p1.selectedIndex].text;
    const t2 = p2.options[p2.selectedIndex].text;
    const t3 = p3.options[p3.selectedIndex].text;

    localStorage.setItem('t1', t1)
    localStorage.setItem('t2', t2)
    localStorage.setItem('t3', t3)

    document.getElementById('page1').style.backgroundColor = localStorage.t1;
    }
