let Grad = 0
input.calibrateCompass()
basic.forever(function () {
    Grad = input.compassHeading()
    if (Grad > 315 || Grad < 45) {
        basic.showString("N")
    } else if (Grad < 135) {
        basic.showString("O")
    } else if (Grad < 225) {
        basic.showString("S")
    } else {
        basic.showString("W")
    }
})
