input.onButtonPressed(Button.B, function () {
    isSleeping = false
    led.stopAnimation()
    basic.clearScreen()
    basic.showString("WAKEY WAKEY")
})
input.onButtonPressed(Button.A, function () {
    isSleeping = true
    led.stopAnimation()
    basic.clearScreen()
    basic.showString("SLEEPY TIME")
})
function Screen_saver4() {
    for (let i = 0; i < 1; i++) {
        led.plot(0, 2)
        basic.pause(200)
        led.plot(1, 1)
        led.unplot(0, 2)
        basic.pause(200)
        led.plot(2, 2)
        led.unplot(1, 1)
        basic.pause(200)
        led.plot(3, 3)
        led.unplot(2, 2)
        basic.pause(200)
        led.plot(4, 2)
        led.unplot(3, 3)
        basic.pause(200)
        led.plot(3, 1)
        led.unplot(4, 2)
        basic.pause(200)
        led.plot(2, 2)
        led.unplot(3, 1)
        basic.pause(200)
        led.plot(1, 3)
        led.unplot(2, 2)
        basic.pause(200)
        led.plot(0, 2)
        led.unplot(1, 3)
        basic.pause(50)
        led.unplot(0, 2)
    }
}
function Screen_saver5() {
    for (let i = 0; i < 1; i++) {
        basic.pause(300)
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(50)
        basic.showLeds(`
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(50)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(50)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            `)
        basic.pause(50)
        led.plotAll()
        basic.pause(100)
        led.fadeOut()
        basic.clearScreen()
        led.fadeIn()
    }
}
function Screen_saver1() {
    led.plot(2, 0)
    basic.pause(200)
    led.plot(2, 1)
    basic.pause(200)
    led.plot(2, 2)
    basic.pause(200)
    led.plot(2, 3)
    basic.pause(200)
    led.plot(2, 4)
    led.fadeOut(500)
    led.unplot(2, 0)
    basic.pause(200)
    led.unplot(2, 1)
    basic.pause(200)
    led.unplot(2, 2)
    basic.pause(200)
    led.unplot(2, 3)
    basic.pause(200)
    led.unplot(2, 4)
    led.fadeIn(600)
    led.plot(0, 2)
    basic.pause(200)
    led.plot(1, 2)
    basic.pause(200)
    led.plot(2, 2)
    basic.pause(200)
    led.plot(3, 2)
    basic.pause(200)
    led.plot(4, 2)
    led.fadeOut(500)
    led.unplot(0, 2)
    basic.pause(200)
    led.unplot(1, 2)
    basic.pause(200)
    led.unplot(2, 2)
    basic.pause(200)
    led.unplot(3, 2)
    basic.pause(200)
    led.unplot(4, 2)
    led.fadeIn(500)
}
function Screen_saver2() {
    for (let i = 0; i < 1; i++) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
    }
}
function Screen_saver3() {
    for (let i = 0; i < 1; i++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
}
let isSleeping: boolean = false
basic.forever(function () {
    while (isSleeping) {
        if (input.isGesture(Gesture.TiltLeft)) {
            basic.clearScreen()
            Screen_saver1()
        } else if (input.isGesture(Gesture.Shake)) {
            basic.clearScreen()
            Screen_saver2()
        } else if (input.isGesture(Gesture.TiltRight)) {
            basic.clearScreen()
            Screen_saver3()
        } else if (input.isGesture(Gesture.LogoDown)) {
            basic.clearScreen()
            Screen_saver4()
        } else {
            basic.clearScreen()
            Screen_saver5()
        }
    }
    while (!(isSleeping)) {
        basic.clearScreen()
        basic.showString("IM AWAKE")
    }
})

