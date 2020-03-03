namespace SpriteKind {
    export const Lilac = SpriteKind.create()
    export const Dahlia = SpriteKind.create()
    export const DarkAmber = SpriteKind.create()
    export const President = SpriteKind.create()
    export const PresidentFinal = SpriteKind.create()
}
let amber2: Sprite = null
let dahlia2: Sprite = null
let president: Sprite = null
let presidentfinal: Sprite = null
let lilac: Sprite = null
let damber: Sprite = null
function amber () {
    amber2 = sprites.create(img`
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
}
function dahlia () {
    dahlia2 = sprites.create(img`
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
function president2 () {
    presidentfinal = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f . f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f b b b b f b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b b b b b b b b b b b f . . . . f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b b b b b b b b b b b b f . . . f b b b b f . . . . . . f . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f . . . . . f b b b b b b b b b b b b b b b f . . . f b b b b b b f . . . . f f . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b f f . . f b b b b b b b b b b b b b b b b f . . . f b b b b b b b f . . f b f . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b f . f b b b b b b b b b b b b b b b b b f . f b b b b b b b b b f f b b f . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b f b b b b b b b b b b b b b b b b b b b f b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f . f f b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f . . . f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . f f f f f f f . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f . . f f f f b b b b b f . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f f . . f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b f . f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . f . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . f f . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . f f b f . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f . . . f f b b b f . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f b b b b b b b b 5 b b b b b b b b b b b b b b b b 5 b b b b b b b b b b b f f f b b b b b f . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f b b b b f b 5 5 b b b b b b b b b b b b b b 5 5 b f b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b f b 5 5 5 b b b b b b b b b b b b 5 5 5 b f b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f . . f b b f b 5 5 5 5 5 b b b b b b b b 5 5 5 5 5 b f b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b f f b b b b f b 5 5 5 5 5 5 b b b b 5 5 5 5 5 5 b f b b b b b b b b b b b b b b f f . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b b b b b b b b b f b b b b b b b b b b b b b b b b b b f b b b b b b b f b b b b f f . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f . . . . . . . . . . . . . f b b b b b b b b b b b b f b 5 b b b b b b b b b b b b b b 5 b f b b b b b b b b f f f f . . . . . . . . . . . . . f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f f . . . . . . . . . . . f b f f b b b b b b b b b b f 5 b b b b b b b b b b b b b b 5 f b b b b b b b b b f . . . . . . . . . . . . . . f f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f b b f f . . . . . . . . . f f . . f b b b b b b b b b f 5 5 b b 5 b b b b b b 5 b b 5 5 f b b b b b b b b b b f f . . f . . . . . . . f f b b f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f b b b b f f . . . . . . . f . . . . f b b b b b b b b f c 5 5 b 5 5 b b b b 5 5 b 5 5 c f b b b b b b b b b b b b f f f . . . . . f f b b b b f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f b b c b b b f f . . . . . . . . . . . f f b b b b b b b f 5 5 5 5 5 5 b b 5 5 5 5 5 5 f . f b b b b b b b b b b b b b f . . . f f b b b b b b f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f b c c c b b b f f . . . . . . . . . . . f f b b b b f f b 5 5 5 5 5 5 5 5 5 5 5 5 b f . . f f b b b b b b b b b b f . . f f b b b b b b b f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f b b c c c c b b b f f f . . . . . . . . . . f f f f . f b 5 5 5 5 5 5 5 5 5 5 5 5 b f . . . . f f f f b b b b b f f f f b b b b b b b b b f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f b b c c c c c c b b b f f f f . . . . . . . . . . . . f b 5 5 5 5 5 5 5 5 5 5 b f . . . . . . . . . f f f f f f b b b b b b b b b b b f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f . . . f b b c c c c c c c c b b b b f f f f f . . . . . . . f b 5 5 5 5 5 5 5 5 5 5 b f . . . . . . . f f f f b b b b b b b b b b b b b b f . . . f . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f . . f b b c c c c c c c c c c b b b b b b f f f f f . . . f 5 b 5 5 5 5 5 5 b 5 f . . . f f f f f b b b b b b b b b b b b b b b b b f . . f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . f b b f f f b b c c c c c c c c c c c c c c b b b b b b b f f f f f b b b 5 5 b b b f f f f f b b b b b b b b b b b b b b b b b b b b b b f f f b b f . . . . . . . . . . . . . 
. . . . . . . . . . . . f b b b b b b b c c c c c c c c c c c c c c c c c c b b b b b b b b f b b 5 5 b b f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . 
. . . . . . . . . . . . . f b c c b b c c c c c c c c c c c c c c c c c c c c c c c c b b b b f b b b b f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . 
. . . . . . . . . . . . . f b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b f b b f b b b c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b f f b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . f b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . f b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f b b b c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f b b b c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . f b b b c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . f b b b c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . f b b b c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . f b b b c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b c c c c c c c c c c c c c b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b c c c c c c c c c c c c b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c c c b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c c b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b c c c c c c c c c c b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b c c c c c c c c c b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b b c c c c c c c c b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c c b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c c c b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c c c b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . f b b c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b f . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.PresidentFinal)
}
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
