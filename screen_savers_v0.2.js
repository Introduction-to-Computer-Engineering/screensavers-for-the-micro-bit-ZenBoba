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
        } else if (input.isGesture(Gesture.LogoDown)) {
        } else {
        }
    }
    while (!(isSleeping)) {
        basic.clearScreen()
        basic.showString("IM AWAKE")
    }
})
 
