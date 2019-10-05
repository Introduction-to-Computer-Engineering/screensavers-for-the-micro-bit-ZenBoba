let isSleeping = false
input.onButtonPressed(Button.A, function () {
    if (input.buttonIsPressed(Button.A)) {
        isSleeping = !(isSleeping)
    }
    while (true) {
        if (input.isGesture(Gesture.TiltLeft)) {
            basic.clearScreen()
            Screen_saver1()
        } else if (input.isGesture(Gesture.Shake)) {
            basic.showNumber(0)
        } else if (input.isGesture(Gesture.TiltRight)) {
            basic.showNumber(1)
        } else if (input.isGesture(Gesture.LogoDown)) {
            basic.showString("Bye")
        } else {
            basic.showNumber(2)
        }
    }
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
