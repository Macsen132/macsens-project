input.onButtonPressed(Button.A, function () {
    water_amount += 10
})
let water_amount = 30
if (water_amount == 30) {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    water_amount += -10
}
if (water_amount == 20) {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    water_amount += -10
}
if (water_amount == 10) {
    basic.showLeds(`
        . . . . .
        # # . . .
        # # # . .
        # # . # .
        . . . # .
        `)
    basic.pause(500)
    water_amount += -10
}
if (water_amount == 0) {
    basic.showLeds(`
        . # # # .
        # . # . #
        # # # # #
        . # # # .
        . # # # .
        `)
}
