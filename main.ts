input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("" + (Math.round(Math.map(maximumSound, 0, 255, 0, 100))))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.InBackground)
    basic.clearScreen()
    basic.showString("Team 1")
})
let soundLevel = 0
let maximumSound = 0
maximumSound = input.soundLevel()
music.playSoundEffect(music.builtinSoundEffect(soundExpression.twinkle), SoundExpressionPlayMode.InBackground)
basic.showArrow(ArrowNames.West)
basic.pause(500)
basic.showArrow(ArrowNames.East)
basic.pause(500)
basic.showIcon(IconNames.Chessboard)
loops.everyInterval(100, function () {
    if (input.buttonIsPressed(Button.A)) {
        soundLevel = input.soundLevel()
        led.plotBarGraph(
        soundLevel,
        254
        )
        if (soundLevel > maximumSound) {
            maximumSound = soundLevel
        }
    }
})
