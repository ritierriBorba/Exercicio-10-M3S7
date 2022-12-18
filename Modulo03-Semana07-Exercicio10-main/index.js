function printNumbersInterval(from, to) {
    let current = from;

    let timerId = setInterval(function () {
        console.log(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++
    }, 1000)
}

//printNumbersInterval(5, 50)

function printNumberTimedOut(from, to) {
    let current = from;

    setTimeout(function go() {
        console.log(current);
        if (current <= to) {
            setTimeout(go,1000)
        }
        current++
    },1000)
}

printNumberTimedOut(1,20)