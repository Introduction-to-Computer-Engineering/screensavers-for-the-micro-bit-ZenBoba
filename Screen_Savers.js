input.onButtonPressed(Button.A, function () {
    for (let i = 0; i < 4; i++) {
        while (input.isGesture(Gesture.Shake)) {
            Screen_saver1()
        }

    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hello!")
    basic.showLeds(`
        . # . # .
        . . # . .
        # . . . #
        . # # # .
        . . . . .
        `)
})
function Screen_saver1() {
    for (let i = 0; i < 5; i++) {
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
    basic.clearScreen()
}
basic.showString("Sleepy Time")
basic.clearScreen()
