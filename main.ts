let strip = 0
basic.forever(function () {
    for (let index = 0; index < 255; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
