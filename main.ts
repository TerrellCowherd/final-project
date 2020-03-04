namespace SpriteKind {
    export const Lilac = SpriteKind.create()
    export const Dahlia = SpriteKind.create()
    export const DarkAmber = SpriteKind.create()
    export const President = SpriteKind.create()
    export const PresidentFinal = SpriteKind.create()
}
function amberjump () {
    if (amber.vy <= 0) {
        amber.vy = -50
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    amberrunleft()
})
function president1 () {
    president = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 4 . 4 4 4 4 4 . . . . . . . . 
. . . . . . 4 4 4 4 4 4 4 4 4 4 . . . . . . 
. . . . . . 4 4 4 4 4 4 4 4 4 . . . . . . . 
. . . . . . . 4 c c 4 c c 4 4 . . . . . . . 
. . . . . . b 4 5 c c c 5 4 b . . . . . . . 
. . . . . . . c 5 5 c 5 5 c . . . . . . . . 
. . . . . . 4 4 b b b b b 4 4 . . . . . . . 
. . . . . . . 4 4 b b b 4 4 . . . . . . . . 
. . . . . c c c 1 1 4 1 1 c c c . . . . . . 
. . . . . c c c c 1 2 1 c c c c . . . . . . 
. 1 1 c c c c c c c 2 c c c c c c c 1 1 . . 
b b b 1 c c c c c c c c c c c c c 1 b b b . 
b b b 1 f f . c c c c c c c . f f 1 b b b . 
. . b . f f f . c c c c c . f f f . b . . . 
. . . f f f f f f f f f f f f f f f . . . . 
. . . f f f f f f f f f f f f f f f . . . . 
. . . f f f c f f f f f f f c f f f . . . . 
f . . f f . . . f f f f f . . . f f . . f . 
f . f f f . . . . . . . . . . . f f f . f . 
f f f f f . . . . . . . . . . . f f f f f . 
. f f f f . . . . . . . . . . . f f f f . . 
`, SpriteKind.President)
}
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    amberstopleft()
})
function amberidle () {
    amber = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 2 2 2 5 2 5 5 5 5 5 . . . 
. . . 2 2 2 2 d 2 2 d 2 2 . . . 
. . 2 2 2 2 d c 2 d d c 2 2 . . 
. . 2 2 2 2 d 6 d d d 6 2 2 . . 
. 2 . 2 2 2 d d d d d d 2 2 2 . 
. . . 2 . 2 5 5 5 5 5 2 2 . . . 
. . . . . d d 5 5 5 5 . . . . . 
. . . . d . c c c c d . . . . . 
. . . . c . c c c c . c . . . . 
. . . . . 6 6 6 6 6 6 . . . . . 
. . . . . f f f d d f . . . . . 
. . . . 6 6 6 6 6 6 6 6 . . . . 
. . . . 6 6 6 6 . 6 6 6 . . . . 
. . . d d d . . . . d d d . . . 
`, SpriteKind.Player)
    controller.moveSprite(amber, 85, 0)
    amber.ay = 100
}
function president2 () {
    presidentfinal = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f . f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f c c c c f c c c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f c c c c c f f f f c f f f c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c f f f f f f f f f f f f f f c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c f f f f f f f f f f f f f c f . . . . f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c f f f f f f f f f f f f f f c f . . . f c c c c f . . . . . . f . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f . . . . . f c f f f f f f f f f f f f f c f . . . f c f f f f c f . . . . f f . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c c c f f . . f c f f f f f f f f f f f f f f c f . . . f c f f f f f c f . . f c f . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c c c c f . f c f f f f f f f f f f f f f f f c f . f c f f f f f f f c f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c f f c c f c c f f f f f f f f f f f f f f f f c f c f f f f f f f f f c c f c f . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c f f f c c c f f f f f f f f f f f f f f f f f f c f f f f f f c f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f c f f f f f f f f f f f f f f f f f f f f f f f f f c f c c f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f . f f c c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f . . . f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f . . f f f f c c c c c f . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f f c c c c f f f c f . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f f f f f f c f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f . . f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . f c c c c c f . f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f c c f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f f . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f f . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f . . . . . . . . . . . f . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f . . . . . . . . . f f . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f . . . . . . f f c f . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c c f f f f f c f f f f f f f f f f f f f f f f f f f f c f f f f f f f c f . . . f f c c c f . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f c c c f f f c c f f f f f f f f f f f f f f f f f f c c f f f f f f f f c f f f c c f c c f . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f c c f f f c f f f f f f f f f f f f f f f f f f c f f f f f f f f f f c c c f f f c c f . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f c f f f f f f f f f f f f f f f f f f c f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f . . f c f f c c 4 f f f f f f f f f f f f f f 4 c c f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c c c f f c c f f f c 5 4 f f f f f f f f f f f f 4 5 c f f f f f f f c c f f f f c c f f . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c c c c c c c f f f f c 5 5 4 f f f f f f f f f f 4 5 5 c f f f f f f f c f c c c c f f . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f . . . . . . . . . . . . . f c c c f f f f f f f f f f c 4 5 5 5 4 f 4 f f 4 f 4 5 5 5 4 c f f f f f f f f c f f f f . . . . . . . . . . . . . f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f . . . . . . . . . . . f c f f c f f f f f f f f f f c 4 5 5 5 4 f f f f 4 5 5 5 4 c f c f f f f f f f c f . . . . . . . . . . . . . . f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f c c f f . . . . . . . . . f f . . f c c f f f f f f f f 4 f f f f f f f f f f f f f f 4 f c f f f f f f f f c f f . . f . . . . . . . f f c c f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f c c c c f f . . . . . . . f . . . . f c c c f f f f c f 4 4 f f f f f f f f f f f f 4 4 f c c f f f f f f f f c c f f f . . . . . f f c c c c f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f c c f c c c f f . . . . . . . . . . . f f c c c c c c c f 4 f f f f f 4 4 f f f f f 4 f . f c c c f f f f f f f f c c f . . . f f c c c f c c f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f c f f f c c c f f . . . . . . . . . . . f f c c c c f f c 4 4 f f 4 5 5 4 f f 4 4 c f . . f f c c c c c f f f c c f . . f f c c c f f f c f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f c c f f f f c c c f f f . . . . . . . . . . f f f f . f c 4 5 5 5 5 5 5 5 5 5 5 4 c f . . . . f f f f c c c c c f f f f c c c f f f f c c f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f c c f f f f f f c c c f f f f . . . . . . . . . . . . f c 5 5 5 5 5 5 5 5 5 5 c f . . . . . . . . . f f f f f f c c c f f f f f f c c f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f . . . f c c f f f f f f f f c c c c f f f f f . . . . . . . f c 4 5 5 5 5 5 5 5 5 4 c f . . . . . . . f f f f c c c c f f f f f f f f c c f . . . f . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f . . f c c f f f f f f f f f f c c c c c c f f f f f . . . f c 4 5 5 5 5 5 5 4 c f . . . f f f f f c c c c c f f f f f f f f f f c c f . . f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . f c c f f f c c f f f f f f f f f f f f f f c c c c c c c f f f f f c 4 5 f f 5 4 c f f f f f c c c c c c c f f f f f f f f f f f f f c c f f f c c f . . . . . . . . . . . . . 
. . . . . . . . . . . . f c c c c c c c f f f f f f f f f f f f f f f f f f c c c c c c c c f c 4 f f 4 c f c c c c c c c c f f f f f f f f f f f f f f f f f c c c c c c c f . . . . . . . . . . . . . 
. . . . . . . . . . . . . f c f f c c f f f f f f f f f f f f f f f f f f f f f f f f c c c c f c c c c f c c c c f f f f f f f f f f f f f f f f f f f f f f c c c c c c c f . . . . . . . . . . . . . 
. . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c f c c f c c c f f f f f f f f f f f f f f f f f f f f f f f f f c c f f c f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c f f c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . f c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . f c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . f c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c f . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . f c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c f . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . f c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c f . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . f c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c f . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c c f f f f f f f f f f f f f f f f f f f f f f f f f f c c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c c f f f f f f f f f f f f f f f f f f f f f f f f c c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c c f f f f f f f f f f f f f f f f f f f f c c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c c f f f f f f f f f f f f f f f f f f c c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c c f f f f f f f f f f f f f f f f c c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . f c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.PresidentFinal)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    amberjump()
})
function lilac2 () {
    lilac = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . d . . . . . . 
. . . . . . . . . . . b b b b b . . . . 
. . . . . . . . . . b d b b d b b . . . 
. . . . . . . . . d d b d d b d d b . . 
. . . . . . . . b b b b b b b b b b b . 
. . . . . . . . . b . . . b . . . b . . 
. . . . 2 . 2 b b b b b . c . . . . . . 
. . . . . 2 b b b b b b b c . . . . . . 
. . . . 2 2 b b b b b b b c . . . . . . 
. . . 2 b 2 c c d d c c b c . . . . . . 
. . . . b b 2 d d d 2 d b c . . . . . . 
. . . . b b d d d d d d b c . . . . . . 
. . . . . b . 1 1 1 1 . b 1 1 . . . . . 
. . 1 1 c c b 2 2 2 b b c 1 1 . . . . . 
. . 1 1 c c b 2 1 2 b b c c . c . . . . 
. . . . . b 2 b b b b . . . c . . . . . 
. . . b b b b 2 2 2 2 . . . . . . . . . 
. . . b b b b b b b b b . . . . . . . . 
. . . . b b b b b b b b . . . . . . . . 
. . . 1 1 b b b b b b . . . . . . . . . 
. . . . . . . . 1 1 . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Lilac)
}
function amberstopleft () {
    if (amber.vx <= 0) {
        animation.stopAnimation(animation.AnimationTypes.All, amber)
        amber.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 5 5 5 5 5 2 5 2 2 2 . . . 
. . . 2 2 d 2 2 d 2 2 2 2 . . . 
. . 2 2 c d d 2 c d 2 2 2 2 . . 
. . 2 2 6 d d d 6 d 2 2 2 2 . . 
. 2 2 2 d d d d d d 2 2 2 . 2 . 
. . . 2 2 5 5 5 5 5 2 . 2 . . . 
. . . . . 5 5 5 5 d d . . . . . 
. . . . . d c c c c . d . . . . 
. . . . c . c c c c . c . . . . 
. . . . . 6 6 6 6 6 6 . . . . . 
. . . . . f d d f f f . . . . . 
. . . . 6 6 6 6 6 6 6 6 . . . . 
. . . . 6 6 6 . 6 6 6 6 . . . . 
. . . d d d . . . . d d d . . . 
`)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    amberrunright()
})
function darkamber () {
    damber = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . c c c c c c c c . . . . 
. . . d d d d d c d c c c . . . 
. . . c c b c c b c c c c . . . 
. . c c 5 b b c 5 b c c c c . . 
. . c c 5 5 c 5 5 b c c c c . . 
. c c c b b b b b b c c c . c . 
. . . c c 2 2 2 2 2 c . c . . . 
. . . . . 2 2 2 2 b b . . . . . 
. . . . . b f f f f . b . . . . 
. . . . f . f f f f . f . . . . 
. . . . . c c c c c c . . . . . 
. . . . . f 5 5 f f f . . . . . 
. . . . c c c c c c c c . . . . 
. . . . c c c . c c c c . . . . 
. . . 5 5 5 . . . . 5 5 5 . . . 
`, SpriteKind.DarkAmber)
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    amberstopright()
})
function dahlia2 () {
    dahlia = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . f f f f f f f . . . . . . . 
. . . . . f f f f f f f f f . . . . . . 
. . . . . f f d d f f f f f . . . . . . 
. . . . f f f d d d f f f f f . . . . . 
. . . . f f c d d d c d f f f . . . . . 
. . . . f f d d d d d d f f f . . . . . 
. . . . f f . 1 f d 1 . f f . . . . . . 
. . . . . . c b f 1 c c c . . . . . . . 
. . . . 5 c c b 1 b c c . c 5 . . . . . 
. . . 5 f 5 . c b b c c . 5 f 5 . . . . 
. . 5 5 5 f c f f f c f . f 5 5 5 . . . 
. . 5 f f 5 f f f f f f f 5 f f 5 . . . 
. 5 . f f f f f f f f f . f f f . 5 . . 
. . . 5 . 5 b b . . b b . 5 . 5 . . . . 
. . . . . . f . . . . f . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Dahlia)
}
function amberrunright () {
    if (amber.vx <= 80) {
        animation.runImageAnimation(
        amber,
        [img`
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 2 2 2 5 2 5 5 5 5 5 . . . 
. . . 2 2 2 2 d 2 2 d 2 2 . . . 
. . 2 2 2 2 d c 2 d d c 2 2 . . 
. . 2 2 2 2 d 6 d d d 6 2 2 . . 
. 2 . 2 2 2 d d d d d d 2 2 2 . 
. . . 2 . 2 5 5 5 5 5 2 2 . . . 
. . . . d d d 5 5 5 5 . . c . . 
. . . d . . c c c c d d d . . . 
. . c . . . c c c c . . . . . . 
. . . . . 6 6 6 6 6 6 . . . . . 
. . . . . f f f d d f . d . . . 
. . . d 6 c 6 6 6 6 6 6 d . . . 
. . . d 6 6 c 6 6 6 6 6 d . . . 
. . . d . 6 6 . . 6 6 . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 2 2 2 5 2 5 5 5 5 5 . . . 
. . . 2 2 2 2 d 2 2 d 2 2 . . . 
. . 2 2 2 2 d c 2 d d c 2 2 . . 
. . 2 2 2 2 d 6 d d d 6 2 2 . . 
. 2 . 2 2 2 d d d d d d 2 2 2 . 
. . . 2 . 2 5 5 5 5 5 2 2 . . . 
. . . . . . d 5 5 5 5 . . . . . 
. . . . . d c c c c d . . . . . 
. . . . . d d c c c d c . . . . 
. . . . . 6 6 6 6 6 6 . . . . . 
. . . . . f f f d d f . . . . . 
. . . . . 6 6 6 6 6 6 . . . . . 
. . . . . 6 6 6 c 6 6 . . . . . 
. . . . . d d d . d d d . . . . 
`,img`
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 2 2 2 5 2 5 5 5 5 5 . . . 
. . . 2 2 2 2 d 2 2 d 2 2 . . . 
. . 2 2 2 2 d c 2 d d c 2 2 . . 
. . 2 2 2 2 d 6 d d d 6 2 2 . . 
. 2 . 2 2 2 d d d d d d 2 2 2 . 
. . . 2 . 2 5 5 5 5 5 2 2 . . . 
. . . . d d c c d 5 5 . . c . . 
. . . d . . c c c d d d d . . . 
. . c . . . c c c c . . . . . . 
. . . . . 6 6 6 6 6 6 . . . . . 
. . . . . f f f d d f . d . . . 
. . . d 6 6 6 6 6 6 c 6 d . . . 
. . . d 6 6 6 6 6 c 6 6 d . . . 
. . . d . 6 6 . . 6 6 . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 2 2 2 5 2 5 5 5 5 5 . . . 
. . . 2 2 2 2 d 2 2 d 2 2 . . . 
. . 2 2 2 2 d c 2 d d c 2 2 . . 
. . 2 2 2 2 d 6 d d d 6 2 2 . . 
. 2 . 2 2 2 d d d d d d 2 2 2 . 
. . . 2 . 2 5 5 5 5 5 2 2 . . . 
. . . . . . d 5 5 5 5 . . . . . 
. . . . . d c c c c d . . . . . 
. . . . . d d c c c d c . . . . 
. . . . . 6 6 6 6 6 6 . . . . . 
. . . . . f f f d d f . . . . . 
. . . . . 6 6 6 6 6 6 . . . . . 
. . . . . 6 6 6 c 6 6 . . . . . 
. . . . . d d d . d d d . . . . 
`],
        200,
        true
        )
    }
}
function amberstopright () {
    if (amber.vx >= 0) {
        animation.stopAnimation(animation.AnimationTypes.All, amber)
        amber.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 2 2 2 5 2 5 5 5 5 5 . . . 
. . . 2 2 2 2 d 2 2 d 2 2 . . . 
. . 2 2 2 2 d c 2 d d c 2 2 . . 
. . 2 2 2 2 d 6 d d d 6 2 2 . . 
. 2 . 2 2 2 d d d d d d 2 2 2 . 
. . . 2 . 2 5 5 5 5 5 2 2 . . . 
. . . . . d d 5 5 5 5 . . . . . 
. . . . d . c c c c d . . . . . 
. . . . c . c c c c . c . . . . 
. . . . . 6 6 6 6 6 6 . . . . . 
. . . . . f f f d d f . . . . . 
. . . . 6 6 6 6 6 6 6 6 . . . . 
. . . . 6 6 6 6 . 6 6 6 . . . . 
. . . d d d . . . . d d d . . . 
`)
    }
}
function amberrunleft () {
    if (amber.vx >= -80) {
        animation.runImageAnimation(
        amber,
        [img`
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 5 5 5 5 5 2 5 2 2 2 . . . 
. . . 2 2 d 2 2 d 2 2 2 2 . . . 
. . 2 2 c d d 2 c d 2 2 2 2 . . 
. . 2 2 6 d d d 6 d 2 2 2 2 . . 
. 2 2 2 d d d d d d 2 2 2 . 2 . 
. . . 2 2 5 5 5 5 5 2 . 2 . . . 
. . c . . 5 5 5 5 d d d . . . . 
. . . d d d c c c c . . d . . . 
. . . . . . c c c c . . . c . . 
. . . . . 6 6 6 6 6 6 . . . . . 
. . . d . f d d f f f . . . . . 
. . . d 6 6 6 6 6 6 c 6 d . . . 
. . . d 6 6 6 6 6 c 6 6 d . . . 
. . . . . 6 6 . . 6 6 . d . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 5 5 5 5 5 2 5 2 2 2 . . . 
. . . 2 2 d 2 2 d 2 2 2 2 . . . 
. . 2 2 c d d 2 c d 2 2 2 2 . . 
. . 2 2 6 d d d 6 d 2 2 2 2 . . 
. 2 2 2 d d d d d d 2 2 2 . 2 . 
. . . 2 2 5 5 5 5 5 2 . 2 . . . 
. . . . . 5 5 5 5 d . . . . . . 
. . . . . d c c c c d . . . . . 
. . . . c d c c c d d . . . . . 
. . . . . 6 6 6 6 6 6 . . . . . 
. . . . . f d d f f f . . . . . 
. . . . . 6 6 6 6 6 6 . . . . . 
. . . . . 6 6 c 6 6 6 . . . . . 
. . . . d d d . d d d . . . . . 
`,img`
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 5 5 5 5 5 2 5 2 2 2 . . . 
. . . 2 2 d 2 2 d 2 2 2 2 . . . 
. . 2 2 c d d 2 c d 2 2 2 2 . . 
. . 2 2 6 d d d 6 d 2 2 2 2 . . 
. 2 2 2 d d d d d d 2 2 2 . 2 . 
. . . 2 2 5 5 5 5 5 2 . 2 . . . 
. . c . . 5 5 d c c d d . . . . 
. . . d d d d c c c . . d . . . 
. . . . . . c c c c . . . c . . 
. . . . . 6 6 6 6 6 6 . . . . . 
. . . d . f d d f f f . . . . . 
. . . d 6 c 6 6 6 6 6 6 d . . . 
. . . d 6 6 c 6 6 6 6 6 d . . . 
. . . . . 6 6 . . 6 6 . d . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 . . . . 
. . . 5 5 5 5 5 2 5 2 2 2 . . . 
. . . 2 2 d 2 2 d 2 2 2 2 . . . 
. . 2 2 c d d 2 c d 2 2 2 2 . . 
. . 2 2 6 d d d 6 d 2 2 2 2 . . 
. 2 2 2 d d d d d d 2 2 2 . 2 . 
. . . 2 2 5 5 5 5 5 2 . 2 . . . 
. . . . . 5 5 5 5 d . . . . . . 
. . . . . d c c c c d . . . . . 
. . . . c d c c c d d . . . . . 
. . . . . 6 6 6 6 6 6 . . . . . 
. . . . . f d d f f f . . . . . 
. . . . . 6 6 6 6 6 6 . . . . . 
. . . . . 6 6 c 6 6 6 . . . . . 
. . . . d d d . d d d . . . . . 
`],
        200,
        true
        )
    }
}
let dahlia: Sprite = null
let damber: Sprite = null
let lilac: Sprite = null
let presidentfinal: Sprite = null
let president: Sprite = null
let amber: Sprite = null
amberidle()
