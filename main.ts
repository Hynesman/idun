input.onButtonPressed(Button.A, function () {
    basic.showNumber(time)
    basic.showString(".")
    basic.showNumber(minut)
    basic.showString(".")
    basic.showNumber(sekund)
    basic.showString(" ")
})
let sekund = 0
let minut = 0
let time = 0
time = 18
minut = 57
sekund = 30
loops.everyInterval(1000, function () {
    sekund += 1
    if (sekund == 60) {
        sekund = 0
        minut += 1
    }
    if (minut == 60) {
        minut = 0
        time += 1
    }
    if (time == 24) {
        time = 0
        time += 1
    }
})
basic.forever(function () {
    if (minut == 0 && time == 0) {
    	
    }
})
