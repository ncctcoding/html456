//For Main Page

localStorage.setItem('current_rate',0)

if(localStorage.rater === undefined) {
    localStorage.setItem('rater',0)
}

if(localStorage.overall === undefined) {
    localStorage.setItem('overall',0)
    localStorage.setItem('average',0)
}

if(localStorage.khohang3 === undefined) {
    hang = {1:['Shoes','Giày Sneaker AG0006','https://img2.dilyno.com/zjjdQl7hbh-bPSR8MnB3bTeyj05hgaX-T74Pf-yPGj0/rs:fit:600:800:0/ex:1:ce/background:eeeeee/aHR0cDovL3MzLmFwLW5vcnRoZWFzdC0xLndhc2FiaXN5cy5jb20vaG5jLWNybS1zMy5nZXRjb252ZXJzaW9uLmNvL3dlYmVjb20vMjAyMi8wNi9mZDJmOWYxN2Q2MWMzOTNmOWY1NTYwOTIwODVlODQzNy5wbmc.webp','Giá tiền: 299.000đ'],
            2:['Shirt','Áo Thun Drew House Dinodrew T-shirt Black','https://censor.vn/wp-content/uploads/2022/01/1-ao-thun-drew-house-dinodrew-t-shirt-black.webp','Giá tiền: 4.390.000đ'],
            3:['Pants','Quần đùi nam dài ống côn trắng','https://media.loveitopcdn.com/853/quan-dui-nam-dai-ong-con-trang-1.jpg','Giá tiền: 369.000đ'],
            4:['Pants','QUẦN JEAN W2QJN4011021','https://bucket.nhanh.vn/store/7136/ps/20210301/153202125312_IMG_3767.jpg','Giá tiền: 276.500đ'],
            5:['Shirt','FEAR OF GOD ESSENTIALS WOMEN 77 T-SHIRT IRON','https://ticosneaker.com.vn/wp-content/uploads/2022/04/9c1a733ca4936acd338220.jpg','Giá tiền: 2.500.000đ'],
            6:['Pants','Google Logo Casual joggers','https://cdn.shopify.com/s/files/1/0984/4522/products/google-jogger-grey_large.jpg?v=1620041872','Giá tiền: 230.000đ'],
            7:['Shirt','RAISE THE FLAG','https://product.hstatic.net/200000239547/product/rise-the-flag-truoc_41ece0ef9cd542968c339083c972d772_1024x1024.jpg','Giá tiền: 279.000đ'],
            8:['Shoes','GIÀY SNEAKER CHỐNG BÁM NƯỚC - LESS TIRING 25.5cm','https://img.muji.net/img/item/4550344414699_1260.jpg','Giá tiền: 599.000đ'],
            9:['Shoes','Giày Sneaker phối 2 màu SE0007','https://cdn.sablanca.vn/ImageProducts/se0007/cre/se0007_cre_1000x1000_4221527767.jpg','Giá tiền: 725.000đ']
        }
}
else 
{
    hang = JSON.parse(localStorage.khohang3)
}

function testhang(stt,tenhang,img) {
    if(stt !== undefined && tenhang !== undefined) {
    const hangmoi = document.createElement('div')
    hangmoi.style = "width:32.6%; border: solid #4d4d4d; display:inline-block; margin-left:3px; margin-top:3px; background-color:black;"

    const pic = document.createElement('img')
    pic.id = String(stt)
    pic.src = img
    pic.onerror = function a() {hangmoi.remove(); delete hang[stt]; save(); alert('Không thể thêm hàng do không đủ dữ liệu')}
    pic.setAttribute('width','100%')
    pic.setAttribute('height','76%')
    pic.onclick = function() {localStorage.setItem('pass',stt)}
    
    const linker = document.createElement('a')
    linker.setAttribute('href','shopping-cart.html')

    const bold = document.createElement('b')

    const para = document.createElement('p')

    para.id = 'p' + String(stt)

    if(tenhang.length <= 40) {
    para.innerHTML = tenhang
    }
    else {para.innerHTML = tenhang.slice(0,40) + '...'}


    para.onmousemove = function() {(money(stt))}
    para.onmouseleave = function() {(leave(stt))}

    hangmoi.appendChild(linker)
    hangmoi.appendChild(bold)
    bold.appendChild(para)
    linker.appendChild(pic)

    document.getElementById('mainsquares').appendChild(hangmoi)

    // div:
    // img
    // p
    }
}

function save() {
    localStorage.setItem('khohang3',JSON.stringify(hang))
}

function add() {
    let loaihang = prompt('Nhập vào loại hàng (Shirt, Pants, Shoes)')
    let tenhang = prompt('Nhập vào tên hàng')
    let img = prompt('Nhập vào link hình ảnh minh họa hàng')
    let giatien = prompt('Nhập giá tiền của hàng(đ)')
    
    if((loaihang === 'Shirt' || loaihang === 'Pants' || loaihang === 'Shoes') && (tenhang !== '') && (isNaN(Number(giatien)) === false)) {
        stt = Object.keys(hang).length + 1
        giatien = 'Giá tiền: ' + giatien + 'đ'
        hang[stt] = [loaihang, tenhang, img, giatien]
        testhang(stt,tenhang,img)
    } else {
        alert('Không thể thêm hàng do không đủ dữ liệu')
    }
    save()
}

function boot(){
    sort('Shoes')
}

function T(){
    sort('Shirt')
}

function quan(){
    sort('Pants')
}

function output() {
    
    for(let repeat = 1; repeat <= Object.keys(hang).length; repeat++) {
        testhang(repeat,hang[repeat][1],hang[repeat][2])
    }
    save()
}

function refresh() {
    for(let repeat = 1; repeat <= Object.keys(hang).length; repeat++) {
        a = 'p' + String(repeat)
        document.getElementById(a).innerHTML = hang[repeat][1]
        document.getElementById(String(repeat)).src = hang[repeat][2]
    }
    save()
}

function sort(x) {
    for(let repeat = 1; repeat <= Object.keys(hang).length; repeat++) {
        for(let i = 2; i <= Object.keys(hang).length; i++) {
            if(hang[i][0] === x) {
                a = hang[i]
                hang[i] = hang[i-1]
                hang[i-1] = a
            }
        }
    }
    refresh()
}

//Xem gia tien
function money(x) {
    a = 'p' + String(x)
    document.getElementById(a).innerHTML = hang[x][3]
}
function leave(x) {
    a = 'p' + String(x)
    if(hang[x][1].length <= 40) {document.getElementById(a).innerHTML = hang[x][1]} 
                           else {document.getElementById(a).innerHTML = hang[x][1].slice(0,40) + '...'}
}

// For Shopping Cart

function loadpage() {
    getinfo = localStorage.pass

    table_selector = {1:[['Đen',''],['Xám',''],['Trắng','']],
                  2:[['Đen','https://censor.vn/wp-content/uploads/2022/01/1-ao-thun-drew-house-dinodrew-t-shirt-black.webp'],['Tím','https://censor.vn/wp-content/uploads/2022/01/1-ao-thun-drew-house-dinodrew-ss-tee-lavender.webp']],
                  3:[['Đen',''],['Xám',''],['Trắng','']],
                  4:[['Đen',''],['Xám',''],['Trắng','']],
                  5:[['Đen',hang[5][2]],['Trắng','https://cdn.shopify.com/s/files/1/2805/5276/products/image_b895853b-cedc-45ac-90c0-b810d90be9f0_1100x.jpg?v=1647492519']],
                  6:[['Đen',''],['Xám',''],['Trắng','']],
                  7:[['Đen',''],['Xám',''],['Trắng','']],
                  8:[['Đen',''],['Xám',''],['Trắng','']],
                  9:[['Trắng',hang[9][2]]],
                    }

    table_selector2 = {1:[hang[1][3].slice(10),hang[1][3].slice(10),hang[1][3].slice(10)],
                       2:['4.390.000đ','4.420.000đ','4.450.000đ'],
                       3:[hang[3][3].slice(10),hang[3][3].slice(10),hang[3][3].slice(10)],
                       4:[hang[4][3].slice(10),hang[4][3].slice(10),hang[4][3].slice(10)],
                       5:['2.500.000đ','2.530.000đ','2.560.000đ'],
                       6:[hang[6][3].slice(10),hang[6][3].slice(10),hang[6][3].slice(10)],
                       7:[hang[7][3].slice(10),hang[7][3].slice(10),hang[7][3].slice(10)],
                       8:[hang[8][3].slice(10),hang[8][3].slice(10),hang[8][3].slice(10)],
                       9:[hang[9][3].slice(10),hang[9][3].slice(10),hang[9][3].slice(10)]}
    
                       document.getElementById('i').src = hang[getinfo][2]
    document.getElementById('name').innerHTML = hang[getinfo][1]
    document.getElementById('pay').innerHTML = hang[getinfo][3].slice(10)
    //document.getElementById('8').className = 'usernickname'

    for(let repeat = 1; repeat <= table_selector[getinfo].length; repeat++) {
        selector = 'l' + String(repeat)
        document.getElementById(selector).innerHTML = table_selector[getinfo][repeat-1][0]
        
        setClicker(selector)
    }

    //Comment Section
    document.getElementById(String(getinfo)).style.visibility = 'visible'
}

function setClicker(x) {
    document.getElementById(x).onclick = function() {selected1(x)}
}

function setlistener(x) {
    document.getElementById(x).onmouseover = function() {hover(x)}
    document.getElementById(x).onmouseleave = function() {release(x)}
}

function selected1(x) {
    for(let repeat = 1; repeat <= 3; repeat++) {
        id = 'l' + String(repeat)
        document.getElementById(id).style = 'background-color:#404040;color:lightgray;'
        
        if(id !== x) {  
            setlistener(id)
        } else {
            document.getElementById('i').src = table_selector[getinfo][repeat-1][1]
        }
    };

    document.getElementById(x).style = 'background-color:lightgray;color:rgb(51, 50, 50);'
    document.getElementById(x).onmouseover = ''
    document.getElementById(x).onmouseleave = ''
}

function selected2(x) {
    for(let repeat = 4; repeat <= 6; repeat++) {
        id = 'l' + String(repeat)
        document.getElementById(id).style = 'background-color:#404040;color:lightgray;'
        
        if(id !== x) {  
            setlistener(id)
        } else {
            document.getElementById('pay').innerHTML = table_selector2[getinfo][repeat-4]
        }
    };
    
    document.getElementById(x).style = 'background-color:lightgray;color:rgb(51, 50, 50);'
    document.getElementById(x).onmouseover = ''
    document.getElementById(x).onmouseleave = ''
}

function hover(x) {
    document.getElementById(x).style = 'background-color:gray;color:rgb(51, 50, 50);cursor: url("image/click.png") 3 0, auto;'
}
 
function release(x) {
    document.getElementById(x).style = 'background-color:#404040;color:lightgray;'
}

function rate(x) {

    for(let repeat = 1; repeat <= 5; repeat++) {
        star = 's' + String(repeat)
        if(repeat <= x) { 
            document.getElementById(star).src = 'image/star.png'
        } else {
            document.getElementById(star).src = 'image/black-star.png'
        }
    }
    
    localStorage.setItem('current_rate',x)

}

//For star rating

document.getElementById('rate_on_5').innerHTML = String(parseInt(parseFloat(localStorage.getItem('average')) * 100) / 100) + ' / 5'
function submit() {
    if(localStorage.current_rate !== 0 && localStorage.current_rate !== undefined) {
        add_comment = Number(localStorage.rater) + 1
        localStorage.setItem('rater',add_comment)

        sum = Number(localStorage.overall) + Number(localStorage.current_rate)
        localStorage.setItem('overall',sum)
        localStorage.setItem('average',sum / localStorage.rater)
    }

    for(let repeat = 1; repeat <= 5; repeat++) {
        star = 's' + String(repeat)
        document.getElementById(star).src = 'image/star.png'
        document.getElementById(star).onclick = ''
        calc = 71 + 54 * Number(localStorage.average) - 54
        document.getElementById('displayrate').style = "width 1s;position:absolute;height:50px;border:transparent;background-color:goldenrod;"+'margin-left:'+String(calc)+';'+'width:'+String(300-calc)
    }
    document.getElementById('ratedesc').onclick = ''
    document.getElementById('rate_on_5').innerHTML = String(parseInt(parseFloat(localStorage.average) * 100) / 100) + ' / 5'
}

function post() {
    if(document.getElementById('comment-line').value !== '') {
        var line = document.createElement('div')
        line.className = 'comment-bar'
        line.id = String(getinfo)

        var img = document.createElement('img')
        img.style = "height:100%;display:inline-block;"
        img.src = "https://cdn.discordapp.com/emojis/979740859937484810.webp?size=128&quality=lossless"

        var line2 = document.createElement('div')
        line2.id = 'comment'

        var br = document.createElement('br')
        var nickname = document.createElement('b')
        nickname.id = 'usernickname'
        nickname.innerHTML = 'Khoi Nguyen'

        var p = document.createElement('p')
        p.innerHTML = document.getElementById('comment-line').value

        line.appendChild(img)
        line.appendChild(line2)

        line2.appendChild(nickname)
        line2.appendChild(p)

        document.body.appendChild(line)
        
        console.log(getinfo)
        console.log(line)

        document.getElementById('postline').onclick = ''
    }
}


