function solve(y) {
    var x = document.getElementById("result")
    x.value += y
}

function result() {
    var a = document.getElementById("result").value
    var b = eval(a);
    document.getElementById("result").value = b
}

function Delete() {
    var d = document.getElementById("result")
    d.value = d.value.slice(0,-1)
}

