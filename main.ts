radio.setGroup(144)
radio.setFrequencyBand(7)

basic.forever(function() {
    radio.sendNumber(1)
    basic.showNumber(1)
    basic.pause(250)
    basic.clearScreen()
    basic.pause(750)
})

