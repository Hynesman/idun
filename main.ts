input.onButtonPressed(Button.A, function () {
	
})
input.onSound(DetectedSound.Loud, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.showNumber(time)
    basic.showString(".")
    basic.showNumber(minut)
    basic.showString(".")
    basic.showNumber(sekund)
    basic.showString(" ")
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    basic.pause(5000)
})
let strip: neopixel.Strip = null
let sekund = 0
let minut = 0
let time = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
time = 19
minut = 0
sekund = 30
strip = neopixel.create(DigitalPin.P2, 8, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Green))
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
	
})
