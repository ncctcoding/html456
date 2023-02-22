var input = [
[0,1,1,0],
[1,1,1,0],
[0,1,1,0],
[0,1,1,0]]
canh = input.length

var colored = []

for(let i = 0;i < canh;i++) {
    colored.push([])
    for(let j = 0;j < canh; j++) {
        colored[i].push(false)
    }
}

var max = 0
var d = 1;
var pi = 0;
var pj = 0;
function square(x,y) {
    for(let i = 0; i < input.length-y+1; i++) {
        for(let j = 0; j < input.length-x+1; j++) {
            if(input[i][j] === 1) {
                for(let xx = i; xx < i+y; xx++){
                    for(let yy = j; yy < j+x; yy++) {
                        d = d * input[xx][yy];
                    }
                }
                if(d === 1) {
                    pi = i;
                    pj = j;
                    return x*y;
                } else {
                    d = 1
                }
                    
                
            }
        }
    }
    return 0;
}

for(let j = 1; j < canh + 1; j++) {
    for(let i = 1; i < canh + 1;i++) {
        if(square(i,j) > max) {
            max = square(i,j)

            for(let i = 0;i < canh;i++) {
                for(let j = 0;j < canh; j++) {
                    colored[i][j] = false
                }
            }
            for(let xx = pi; xx < pi+j; xx++) {
                for(let yy = pj; yy < pj+i; yy++) {
                    colored[xx][yy] = true;
                }
            }
        }
    }
}

var hi22 = '';

for(let x = 0; x < canh; x++) {
    for(let y = 0; y < canh; y++) {
        if(colored[x][y] === true) {
            hi22 = hi22 + String(input[x][y]).fontcolor('red').bold();
        } else {
            hi22 = hi22 + String(input[x][y]);
        }
    }
    hi22 = hi22 + '<br>'
}

document.getElementById('hi').innerHTML = max
document.getElementById('hi2').innerHTML = hi22


