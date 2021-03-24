function displayNumber (num: number) {
    if (Math.abs(num) <= 9999.5) {
        basic.clearScreen()
        digits = Math.round(Math.abs(num))
        divisor0 = 1000
        for (let position = 0; position <= 3; position++) {
            displayDigit(Math.floor(digits / divisor0), position)
            digits = digits % divisor0
            divisor0 = divisor0 / 10
        }
        if (num < 0) {
            led.plot(2, 2)
        }
    }
}
function _ (pos: number) {
    if (Math.floor(pos) != floorpos) {
        plotPixel(floorpos, 0)
        floorpos = Math.floor(pos)
    }
    weight = Math.floor(256 * (pos - floorpos))
    plotPixel(Math.floor(pos), 255 - weight)
    plotPixel(1 + Math.floor(pos), weight)
}
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
input.onButtonPressed(Button.A, function () {
    h += 1
    if (h == 51) {
        h = 0
    }
    basic.clearScreen()
    showT_v2(h)
})
function showT_v2 (num: number) {
    x = 4
    y = 4
    if (num == 0) {
        led.plotBrightness(x, y, 2)
    }
    for (let index = 0; index < Math.floor(num / 2); index++) {
        led.plot(x, y)
        y += -1
        if (y == -1) {
            y = 4
            x += -1
        }
    }
    if (num % 2 == 1) {
        led.plotBrightness(x, y, 32)
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
function displayDigit (hex2: number, pos: number) {
    y = 3 * Math.floor(pos / 2)
    x = 3 * (pos % 2)
    h = hex2
    divisor = 8
    for (let index = 0; index <= 3; index++) {
        if (Math.floor(h / divisor) == 1) {
            led.plot(x + index % 2, y + Math.floor(index / 2))
        } else {
            led.plotBrightness(x + index % 2, y + Math.floor(index / 2), 3)
        }
        h = h % divisor
        divisor = divisor / 2
    }
}
input.onButtonPressed(Button.AB, function () {
    if (program == 0) {
        runProgram0()
    } else if (program == 1) {
    	
    } else {
    	
    }
})
function showT_v1 (num: number) {
    x = 4
    y = 4
    for (let index = 0; index < num; index++) {
        led.plot(x, y)
        y += -1
        if (y == -1) {
            y = 4
            x += -1
        }
    }
}
function displayDigitE (num: number, pos: number) {
    y = Math.floor(pos / 2)
    x = 2 * (pos - 2 * y) + 1
    divisor = 43
    if (num == 0) {
        led.plotBrightness(x + 1, y, 0)
        led.plotBrightness(x, y, 0)
    } else if (num == 1) {
        led.plotBrightness(x + 1, y, divisor)
        led.plotBrightness(x, y, 0)
    } else if (num == 2) {
        led.plotBrightness(x + 1, y, 255)
        led.plotBrightness(x, y, 0)
    } else if (num == 3) {
        led.plotBrightness(x + 1, y, 0)
        led.plotBrightness(x, y, divisor)
    } else if (num == 4) {
        led.plotBrightness(x + 1, y, divisor)
        led.plotBrightness(x, y, 6)
    } else if (num == 5) {
        led.plotBrightness(x + 1, y, 6)
        led.plotBrightness(x, y, divisor)
    } else if (num == 6) {
        led.plotBrightness(x + 1, y, 255)
        led.plotBrightness(x, y, divisor)
    } else if (num == 7) {
        led.plotBrightness(x + 1, y, 0)
        led.plotBrightness(x, y, 255)
    } else if (num == 8) {
        led.plotBrightness(x + 1, y, divisor)
        led.plotBrightness(x, y, 255)
    } else {
        led.plotBrightness(x + 1, y, 255)
        led.plotBrightness(x, y, 255)
    }
}
function showT_v0 (num: number) {
    x = 0
    y = 0
    for (let index = 0; index < num; index++) {
        led.plot(x, y)
        x += 1
        if (x == 5) {
            x = 0
            y += 1
        }
    }
}
let divisor = 0
let y = 0
let x = 0
let program = 0
let digit = 0
let weight = 0
let floorpos = 0
let divisor0 = 0
let digits = 0
let h = 0
h = 0
showT_v2(input.temperature())
