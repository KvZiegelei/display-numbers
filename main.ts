function displayPosition (pos: number) {
    basic.clearScreen()
    plotPixel(Math.floor(pos), 255)
}
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
function plotPixel (pos: number, weight: number) {
    if (pos < 4) {
        led.plotBrightness(pos, 0, weight)
    } else if (pos < 8) {
        led.plotBrightness(4, pos - 4, weight)
    } else if (pos < 12) {
        led.plotBrightness(12 - pos, 4, weight)
    } else {
        led.plotBrightness(0, 16 - pos, weight)
    }
}
let time = 0
let start = 0
start = input.runningTime()
basic.forever(function () {
    time = input.runningTime() - start
    displayPosition((time + 7500) / 3750 % 16)
    basic.pause(3000)
})
