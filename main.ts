info.onScore(50, function () {
    game.setGameOverEffect(true, effects.hearts)
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    tiles.placeOnRandomTile(otherSprite, assets.tile`transparency16`)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
info.onScore(20, function () {
    info.changeCountdownBy(60)
    tiles.setCurrentTilemap(tilemap`level2`)
    scene.cameraFollowSprite(dog)
})
let mySprite: Sprite = null
let dog: Sprite = null
dog = sprites.create(assets.image`puppy`, SpriteKind.Player)
scene.setBackgroundColor(3)
controller.moveSprite(dog)
mySprite = sprites.create(assets.image`bone`, SpriteKind.Food)
mySprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
tiles.setCurrentTilemap(tilemap`level1`)
info.startCountdown(60)
