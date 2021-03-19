function runProgram0 () {
    digit = 0
    while (program == 0) {
        basic.pause(2000)
        digit += 1
        if (digit > 9) {
            digit = 0
        }
    }
}
function displayPosition (pos: number) {
    if (Math.floor(pos) != floorpos) {
        plotPixel(floorpos, 0)
        floorpos = Math.floor(pos)
    }
    weight = Math.floor(256 * (pos - floorpos))
    plotPixel(Math.floor(pos), 255 - weight)
    plotPixel(1 + Math.floor(pos), weight)
}
function runProgram1 () {
    start = input.runningTime()
    while (program == 1) {
        time = input.runningTime() - start
        displayPosition((time + 7500) / 3750 % 16)
        basic.pause(1)
    }
}
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
function displayDigit (num: number, pos: number) {
    y = Math.floor(pos / 2)
    x = 2 * (pos - 2 * y) + 1
    if (num == 0) {
        led.plotBrightness(x + 1, y, 0)
        led.plotBrightness(x, y, 0)
    } else if (num == 1) {
        led.plotBrightness(x + 1, y, 100)
        led.plotBrightness(x, y, 0)
    } else if (num == 2) {
        led.plotBrightness(x + 1, y, 255)
        led.plotBrightness(x, y, 0)
    } else if (num == 3) {
        led.plotBrightness(x + 1, y, 0)
        led.plotBrightness(x, y, 100)
    } else if (num == 4) {
        led.plotBrightness(x + 1, y, 120)
        led.plotBrightness(x, y, 30)
    } else if (num == 5) {
        led.plotBrightness(x + 1, y, 30)
        led.plotBrightness(x, y, 120)
    } else if (num == 6) {
        led.plotBrightness(x + 1, y, 255)
        led.plotBrightness(x, y, 100)
    } else if (num == 7) {
        led.plotBrightness(x + 1, y, 0)
        led.plotBrightness(x, y, 255)
    } else if (num == 8) {
        led.plotBrightness(x + 1, y, 100)
        led.plotBrightness(x, y, 255)
    } else {
        led.plotBrightness(x + 1, y, 255)
        led.plotBrightness(x, y, 255)
    }
}
input.onButtonPressed(Button.AB, function () {
    if (program == 0) {
        runProgram0()
    } else if (program == 1) {
        runProgram1()
    } else {
    	
    }
})
let x = 0
let y = 0
let time = 0
let start = 0
let weight = 0
let floorpos = 0
let digit = 0
let program = 0
program = 0
