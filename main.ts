sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
info.onScore(5, function () {
    info.changeCountdownBy(30)
})
let mySprite: Sprite = null
let dog = sprites.create(assets.image`puppy`, SpriteKind.Player)
scene.setBackgroundColor(3)
controller.moveSprite(dog)
mySprite = sprites.create(assets.image`bone`, SpriteKind.Food)
mySprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
tiles.setCurrentTilemap(tilemap`level1`)
info.startCountdown(60)
