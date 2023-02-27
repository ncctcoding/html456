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
    hang = ['*',
            ['Shoes','Giày Sneaker AG0006','https://img2.dilyno.com/zjjdQl7hbh-bPSR8MnB3bTeyj05hgaX-T74Pf-yPGj0/rs:fit:600:800:0/ex:1:ce/background:eeeeee/aHR0cDovL3MzLmFwLW5vcnRoZWFzdC0xLndhc2FiaXN5cy5jb20vaG5jLWNybS1zMy5nZXRjb252ZXJzaW9uLmNvL3dlYmVjb20vMjAyMi8wNi9mZDJmOWYxN2Q2MWMzOTNmOWY1NTYwOTIwODVlODQzNy5wbmc.webp','Giá tiền: 299.000đ'],
            ['Shirt','Áo Thun Drew House Dinodrew T-shirt Black','https://censor.vn/wp-content/uploads/2022/01/1-ao-thun-drew-house-dinodrew-t-shirt-black.webp','Giá tiền: 4.390.000đ'],
            ['Pants','Quần đùi nam dài ống côn trắng','https://media.loveitopcdn.com/853/quan-dui-nam-dai-ong-con-trang-1.jpg','Giá tiền: 369.000đ'],
            ['Pants','QUẦN JEAN W2QJN4011021','https://bucket.nhanh.vn/store/7136/ps/20210301/153202125312_IMG_3767.jpg','Giá tiền: 276.500đ'],
            ['Shirt','FEAR OF GOD ESSENTIALS WOMEN 77 T-SHIRT IRON','https://ticosneaker.com.vn/wp-content/uploads/2022/04/9c1a733ca4936acd338220.jpg','Giá tiền: 2.500.000đ'],
            ['Pants','Google Logo Casual joggers','https://cdn.shopify.com/s/files/1/0984/4522/products/google-jogger-grey_large.jpg?v=1620041872','Giá tiền: 230.000đ'],
            ['Shirt','RAISE THE FLAG','https://product.hstatic.net/200000239547/product/rise-the-flag-truoc_41ece0ef9cd542968c339083c972d772_1024x1024.jpg','Giá tiền: 279.000đ'],
            ['Shoes','GIÀY SNEAKER CHỐNG BÁM NƯỚC - LESS TIRING 25.5cm','https://img.muji.net/img/item/4550344414699_1260.jpg','Giá tiền: 599.000đ'],
            ['Shoes','Giày Sneaker phối 2 màu SE0007','https://cdn.sablanca.vn/ImageProducts/se0007/cre/se0007_cre_1000x1000_4221527767.jpg','Giá tiền: 725.000đ']
        ]

    localStorage.setItem('table_selectors', JSON.stringify({
            1:[['Đen',''],['Xám',''],['Trắng','']],
            2:[['Đen','https://censor.vn/wp-content/uploads/2022/01/1-ao-thun-drew-house-dinodrew-t-shirt-black.webp'],['Tím','https://censor.vn/wp-content/uploads/2022/01/1-ao-thun-drew-house-dinodrew-ss-tee-lavender.webp']],
            3:[['Đen',''],['Xám',''],['Trắng','']],
            4:[['Đen',''],['Xám',''],['Trắng','']],
            5:[['Đen',hang[5][2]],['Trắng','https://cdn.shopify.com/s/files/1/2805/5276/products/image_b895853b-cedc-45ac-90c0-b810d90be9f0_1100x.jpg?v=1647492519']],
            6:[['Đen',''],['Xám',''],['Trắng','']],
            7:[['Đen',''],['Xám',''],['Trắng','']],
            8:[['Đen',''],['Xám',''],['Trắng','']],
            9:[['Trắng',hang[9][2]]],}))

    localStorage.setItem('table_selectors2', JSON.stringify({1:[hang[1][3].slice(10),hang[1][3].slice(10),hang[1][3].slice(10)],
            2:['4.390.000đ','4.420.000đ','4.450.000đ'],
            3:[hang[3][3].slice(10),hang[3][3].slice(10),hang[3][3].slice(10)],
            4:[hang[4][3].slice(10),hang[4][3].slice(10),hang[4][3].slice(10)],
            5:['2.500.000đ','2.530.000đ','2.560.000đ'],
            6:[hang[6][3].slice(10),hang[6][3].slice(10),hang[6][3].slice(10)],
            7:[hang[7][3].slice(10),hang[7][3].slice(10),hang[7][3].slice(10)],
            8:[hang[8][3].slice(10),hang[8][3].slice(10),hang[8][3].slice(10)],
            9:[hang[9][3].slice(10),hang[9][3].slice(10),hang[9][3].slice(10)]}))

    localStorage.setItem('userdata',JSON.stringify({'Khoi Nguyen':'konkakangku','Khoi Nguyen-admin':true}))
    localStorage.setItem('active_account','')

    localStorage.setItem('savecomment',JSON.stringify([]))
}
else 
{
    hang = JSON.parse(localStorage.khohang3)
}

table_selector = JSON.parse(localStorage.table_selectors)
table_selector2 = JSON.parse(localStorage.table_selectors2)

users = JSON.parse(localStorage.userdata)

active = localStorage.active_account

comment_output = JSON.parse(localStorage.savecomment)

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
    localStorage.setItem('table_selectors',JSON.stringify(table_selector))
    localStorage.setItem('table_selectors2',JSON.stringify(table_selector2))
    localStorage.setItem('userdata',JSON.stringify(users))
    localStorage.setItem('active_account',active)
    localStorage.setItem('savecomment',JSON.stringify(comment_output))
}

function add() {
    let loaihang = prompt('Nhập vào loại hàng (Shirt, Pants, Shoes)')
    let tenhang = prompt('Nhập vào tên hàng')
    let img = prompt('Nhập vào link hình ảnh minh họa hàng')
    let giatien = prompt('Nhập giá tiền của hàng(đ)')
    
    if((loaihang === 'Shirt' || loaihang === 'Pants' || loaihang === 'Shoes') && (tenhang !== '') && (isNaN(Number(giatien)) === false)) {
        stt = hang.length
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
    
    for(let repeat = 1; repeat <= hang.length - 1; repeat++) {
        testhang(repeat,hang[repeat][1],hang[repeat][2])
    }

    if(Number(localStorage.average) !== 0) {
        calc = 71 + 54 * Number(localStorage.average) - 54
    } else {
        calc = 71 + 54*5 - 54
    }
    check_admin = active+'-admin'
    if(users[check_admin]) {
        document.getElementById('themhang').className = 'admin'
    }

    if(active !== '') {
        document.getElementById('ratedesc').style.color = 'green'
    } else {
        document.getElementById('ratedesc').style.color = 'red'
    }

    document.getElementById('displayrate').style = "width 1s;position:absolute;height:50px;border:transparent;background-color:lightgray;"+'margin-left:'+String(calc)+';'+'width:'+String(300-calc)
    document.getElementById('displayaccount').innerHTML = active
}

function refresh() {
    for(let repeat = 1; repeat <= hang.length - 1; repeat++) {
        a = 'p' + String(repeat)
        document.getElementById(a).innerHTML = hang[repeat][1]
        document.getElementById(String(repeat)).src = hang[repeat][2]
    }
    save()
}

function sort(x) {
    for(let repeat = 1; repeat <= hang.length - 1; repeat++) {
        for(let i = 2; i <= hang.length - 1; i++) {
            if(hang[i][0] === x) {
                a = hang[i]
                hang[i] = hang[i-1]
                hang[i-1] = a
                
                a = table_selector[i]
                table_selector[i] = table_selector[i-1]
                table_selector[i-1] = a

                a = table_selector2[i]
                table_selector2[i] = table_selector2[i-1]
                table_selector2[i-1] = a
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

    document.getElementById('i').src = hang[getinfo][2]
    document.getElementById('usernickname').innerHTML = active
    document.getElementById('name').innerHTML = hang[getinfo][1]
    document.getElementById('pay').innerHTML = hang[getinfo][3].slice(10)
    //document.getElementById('8').className = 'usernickname'

    for(let repeat = 1; repeat <= table_selector[getinfo].length; repeat++) {
        selector = 'l' + String(repeat)
        document.getElementById(selector).innerHTML = table_selector[getinfo][repeat-1][0]
        
        setClicker(selector)
    }

    if(active !== '') {
        document.getElementById('postline').onclick = function() {post()}
        document.getElementById('postline').style.color = 'black'
    } else {
        document.getElementById('postline').onclick = ''
        document.getElementById('postline').style.color = 'red'
    }

    //Comment Section
    document.getElementById(hang[getinfo][1]).style.visibility = 'visible'

    for(let repeat = 0; repeat <= comment_output.length - 1; repeat++) {
        document.getElementById(hang[getinfo][1])
    }
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
    if(active !== ''){
        if(localStorage.current_rate !== '0' && localStorage.current_rate !== undefined) {
            add_comment = Number(localStorage.rater) + 1
            localStorage.setItem('rater',add_comment)

            sum = Number(localStorage.overall) + Number(localStorage.current_rate)
            localStorage.setItem('overall',sum)
            localStorage.setItem('average',sum / localStorage.rater)
        }

        for(let repeat = 1; repeat <= 5; repeat++) {
            star = 's' + String(repeat)
            document.getElementById(star).src = 'image/black-star.png'
        }

        localStorage.setItem('current_rate',0)
        document.getElementById('rate_on_5').innerHTML = String(parseInt(parseFloat(localStorage.average) * 100) / 100) + ' / 5'
    }
}

//Comment line

function post() {
    comment_output.unshift(newComment())
    save()
}

function newComment() {
    if(document.getElementById('comment-line').value !== '') {
        var line = document.getElementById(hang[getinfo][1])
        line.style.visibility = 'visible'

        var img = document.createElement('img')
        img.style = "height:100%;display:inline-block;"
        img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXg4OC9vb3f39/Kysrc3Ny+vr7Q0NDHx8fNzc3ExMTU1NTV1dXY2NjBwcG6urrLy8vXjdnDAAAEKElEQVR4nO3d63KrIBQF4IAIBgXf/22P5GpbEwGVzfasb6bTv6zhoiCQywUAAAAAAAAAAAAAAAAAAAAAAABgiVTW6k5bqyR1UQ6gbOP8RAgR/rnGKuoi7ao3bcg251vTUxdrN/31d7xHyOs5Miq3nO+W0Z2grXaf890ydtQF3Eh+aKDzpsp6YFXtSr6gZdxSh4h8wUBd0FwqMqAQTGtRxjTRR0Pl2Rev0QGFuFIXNsfKY+Injg+N2FHmid9ok9JGA3bt1Ka00cBb6iIncokBhXDURU7Tp1bhVIm8JhqpvTBg1RPj32bmOL3Z6PRGymysMVl1aKiLHU+mj6SB4/N2qnIa6dRM+XTEITMhnze3rIFmSqipCx6tywooBJ8JxvkTNpkJG+qCRzt/HZ4/oc5MyGcszZg7BYzmT+d/p0lYKZ3jtGqaMwHmNQXOmx/yGWj+hzn++ddp0pdLmS1iTDLqkLrIiZLHGlbjTJC8VMNokeYhsScyemN7SVtRZLSS+JLUTvm10SDlsc/qYf8WPYni2AnvbGRCZs/6uT4qINsaDIb1mWLLZ6V7kTQrexMNy1H0B/tne/AsX8u4C77J7kNG33b8K/BO6oV9wt7ps+S7Ud30ivOMOf13HdOH/DdqsF1jjGk6O5wwHgAAAAAAAMBFymn2a3U3Nk1jpr8xXDswKHmGVYwwrzeu9Y/LBmarNEHrDOf5vhy0ccKvnnT2whk9sKvOYUz+BjzyWftW+iqydgyJq2bQYnPjcQlpt8R7hax2pV91m+M9Q1a5XDysfGRKDGlqG3f2zVdfRpW3n3TNtZa2Kse96+/Jj1W8CHz7Aro5YgVfUNe+Ym/OSP0VPGInwla0OxmS7r7IRXlnxsEt9BWRalufPOYZsYTmLqnMYyN5WoqA5WowINieWTYgwVmFpswg8+YLHzDNOE+xOWLR1xtZPF9QsivmHmXepmA7zTu4tV252RRNFRasxKLP+rlih0wzDzJvV2xPf+5x++1KzTLybhDaQ6lJRt4NQnsodafb+evw/GNp5FGY/RU8XFN8ZhGUnV1QDDZlr46keDMtvMZfvisWP+GWeWNZLorD7Id9j1kMOJYPWGw9+BaQaE244IowTcByEQlvPSkTkfRal9Wfr9jOE99bc/hwQ/bh6eXgT4g1XLife8FenCpurTnwS3ctZ/XVQeONr2ZDzVGrbxV0wbdh/wmjq6SFPsmdp/2+qWI71A/Dl18fS85XWwU+6L0G1baKZ8QStc9HqaaeIfQvtbk7+qrzBRvrsfp8gfp0W8tq9fG5DkRak7yp3Qtj63tAfKG0Wz0QNIvnXeXnLBYpa+IeH63h+8Oyt9NdX+pyqjuOp7p+kaq/H2Lzs98D9vcja/2pfvtYDb21WndaW9vzPXQIAAAAAAAAAAAAAAAAAAAAAAAAh/oHOVI0YSQb7ewAAAAASUVORK5CYII="

        var line2 = document.createElement('div')
        line2.id = 'comment'
        line2.style = 'width:1116px;height:250px;'

        var br = document.createElement('br')
        var nickname = document.createElement('b')
        nickname.id = 'usernickname'
        nickname.innerHTML = active

        var p = document.createElement('span')
        p.innerHTML = document.getElementById('comment-line').value

        line.appendChild(img)
        line.appendChild(line2)

        line2.appendChild(nickname)
        line2.appendChild(br)
        line2.appendChild(p)

        document.body.insertBefore(line,document.body.children[2])
        document.getElementById('comment-line').value = ''
        
    }
    return [active,p.innerHTML,hang[getinfo][1]]
}

//Login & Register

function showpass(x,y) {
    if(document.getElementById(x).type !== 'text') {
        document.getElementById(x).type = 'text'
        document.getElementById(y).value = 'Ẩn mật khẩu'
    } else {
        document.getElementById(x).type = 'password'
        document.getElementById(y).value = 'Hiện mật khẩu'
    }
}

function consoles() {
    //console.log(document.getElementById('fname').value)
    //console.log(document.getElementById('lname').value)
    //console.log(document.getElementById('pass').value)
    //console.log(document.getElementById('pass2').value)
    
    if(document.getElementById('name').value === ''){
        document.getElementById('notify').innerHTML = 'Tên của bạn bị bỏ trống'
        return
    } else 
    {
        if(document.getElementById('pass').value !== document.getElementById('pass2').value || document.getElementById('pass2').value === '' || document.getElementById('pass').value === ''){
            document.getElementById('notify').innerHTML = 'Vui lòng kiểm tra lại mật khẩu'
            return
    } else 
    {
        if(users[document.getElementById('name').value] !== undefined) {
            document.getElementById('notify').innerHTML = 'Tài khoản này đã tồn tại'
            return
        }
    }
    
    if(createAccount()) {
    window.location.href = 'login.html'
    }
}

}

function createAccount() {
    nick = document.getElementById('name').value
    mk = document.getElementById('pass').value

    if(nick !== '' && mk !== '') {
        users[nick] = mk
        users[nick+'-admin'] = false
        save()
        return true
    }
    return false
}

function login() {
    nick = document.getElementById('name').value
    mk = document.getElementById('pass').value

    if(users[nick] === mk) {
        active = nick
        save()
        window.location.href = 'shoope.html'
    } else {
        document.getElementById('notify').innerHTML = 'Sai tên đăng nhập hoặc mật khẩu.'
    }
}

function logout() {
    active = ''
    save()
    window.location.href = 'shoope.html'
}

function enabled() {
    document.getElementById('accountfunction').style.visibility = 'visible'
    document.getElementById('accountfunction').style.transition = '0s'

    document.getElementById('accountfunction1').style.visibility = 'visible'
    document.getElementById('accountfunction1').style.transition = '0s'

    document.getElementById('accountfunction2').style.visibility = 'visible'
    document.getElementById('accountfunction2').style.transition = '0s'

}

function disabled() {
    document.getElementById('accountfunction').style.visibility = 'hidden'
    document.getElementById('accountfunction').style.transition = '0.2s'

    document.getElementById('accountfunction1').style.visibility = 'hidden'
    document.getElementById('accountfunction1').style.transition = '0.2s'

    document.getElementById('accountfunction2').style.visibility = 'hidden'
    document.getElementById('accountfunction2').style.transition = '0.2s'
}




