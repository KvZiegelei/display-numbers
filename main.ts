function runProgram0 () {
    digit = 0
    while (program == 0) {
        basic.showNumber(digit)
        basic.pause(1000)
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
input.onButtonPressed(Button.AB, function () {
    if (program == 0) {
        runProgram0()
    } else if (program == 1) {
        runProgram1()
    } else {
    	
    }
})
let time = 0
let start = 0
let weight = 0
let floorpos = 0
let digit = 0
let program = 0
program = 0
