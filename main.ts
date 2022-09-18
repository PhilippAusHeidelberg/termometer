input.onButtonPressed(Button.A, function () {
    if (input.temperature() < 8) {
        basic.showString("Kalt")
    }
    if (input.temperature() >= 8 && input.temperature() <= 20) {
        basic.showString("angenehm")
    }
    if (input.temperature() > 20) {
        basic.showString("Heiss")
    }
})
