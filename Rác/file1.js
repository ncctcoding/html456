adjacency_matrix = {1:[7], 2:[1, 4], 3:[6], 4:[7], 5:[], 6:[7], 7:[8, 5, 6], 8:[9],9:[10], 10:[7, 4, 5]}
start = 2
path = '-' + String(start) + '-'
main_path = ''
aa = false

function count(x) {
    var d = 0;
    for(let i = 0; i < path.length; i++) {
        if(path[i] === x) {
            d++
        }
    }
    return d
}

function find_path(x,y) {
    if(adjacency_matrix[x].length === 0) {
        path.length = path.length - 2
    }

    for(let i = 0; i < adjacency_matrix[x].length; i++) {
        path = path + String(adjacency_matrix[x][i]) + '-'
        if(adjacency_matrix[x][i] === y && count(path[-2]) < 2 && aa === false) {
            path.length = path.length - 1
            start = 8
            aa = true
            document.getElementById('hi').innerHTML = path
        } else {
            if(count(path[-2]) > 1) {
                path = path.substring(0, path.indexOf(path[-2]) + 2)
            } else {
                find_path(parseInt(path[path.length - 2]),y)
            }
        }
    }
    return
}

find_path(start,10)
