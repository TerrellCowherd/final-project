namespace SpriteKind {
    export const Lilac = SpriteKind.create()
    export const Dahlia = SpriteKind.create()
    export const DarkAmber = SpriteKind.create()
    export const President = SpriteKind.create()
    export const PresidentFinal = SpriteKind.create()
    export const Planky = SpriteKind.create()
    export const LilacProjectile = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 7 7 7 6 6 7 7 7 7 7 7 5 5 
5 6 7 6 c 6 c c 6 7 c 6 c 6 7 7 
7 c 6 c e c e e c 6 c c e c 6 7 
6 c c e e e e e e c e e e e c 6 
c e e e e e e d e e e e e e e c 
e e e e e e e f e e e e e e e e 
e e d e e e e e e e e e d e e e 
e e f e e e e e e e e e f e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e d e e e e e e e e e e 
e e e e e f e e e e e e e e e e 
e e e e e e e e e e d e e e e e 
e e e e e e e e e e f e e e e e 
e e e e e e e e e e e e e e e e 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
e e e e d e e e e e e e e e e e 
e e e e f e e e e e e e e d e e 
e e e e e e e e e e e e e f e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e d e e e e e e e e 
e e e e e e e f e e e e e e e e 
e e d e e e e e e e e e d e e e 
e e f e e e e e e e e e f e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e d e e e e e e e e e e 
e e e e e f e e e e e e e e e e 
e e e e e e e e e e d e e e e e 
e e e e e e e e e e f e e e e e 
e e e e e e e e e e e e e e e e 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 . . . . . . . . 1 . . 
. . . 1 6 1 . . . . . . 1 6 1 . 
. 1 1 6 9 6 1 1 . . 1 1 6 9 6 1 
1 6 6 9 9 9 6 6 1 1 6 6 9 9 9 6 
6 9 9 9 1 1 9 9 6 6 9 9 1 1 9 9 
9 9 1 1 6 6 1 1 9 9 1 1 6 6 1 1 
1 1 6 6 9 9 6 6 1 1 6 6 9 9 6 6 
6 6 9 9 9 9 9 9 6 6 9 9 9 9 9 9 
9 9 1 1 9 9 9 9 9 9 1 1 9 9 9 9 
1 1 6 6 1 1 9 9 1 1 6 6 1 1 9 9 
6 6 9 9 6 6 1 1 6 6 9 9 6 6 1 1 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c 
`
    //% blockIdentity=images._tile
    export const tile6 = img`
. . . . . . . e e e e e e e e . 
. e e e e e e 1 1 1 1 1 1 1 e . 
. e 1 1 1 1 1 1 1 1 1 1 1 1 e . 
. e 1 f 1 1 f 1 1 f 1 f 1 1 e . 
. e 1 1 f f 1 f f 1 f 1 f 1 e . 
. e 1 1 1 1 1 1 1 1 1 1 1 1 e . 
. e 1 1 1 f 1 f 1 1 f 1 1 1 e . 
. e 1 f f 1 f 1 f f 1 f f 1 e . 
. e 1 1 1 1 1 1 1 1 1 1 1 1 e . 
. e 1 1 1 1 1 1 e e e e e e e . 
. e e e e e e e e e . . . . . . 
. . . . . . . . e e e . . . . . 
. . . . . . . . . e e . . . . . 
. . . . . . . . e e e . . . . . 
. . . . . . . e e e . . . . . . 
. . . . . . e e e e e . . . . . 
`
    //% blockIdentity=images._tile
    export const tile7 = img`
b d d d d d d d d d d d d d d c 
d b d d d d d d d d d d d d c c 
d d b d d d d d d d d d d c c c 
d d d b b f b b b b b b b c c c 
d d d b f b b b b b b b b c c c 
d d f f b b b b b b b b b c c c 
d f d b f b f f b b b b b c c c 
f d d f b f b b f b b b b c c c 
d f f b b b b b b b b b b c c c 
d d d b b b b b b b b b b c c c 
f d f f b b b b b b b b b c c c 
d f d b b b b b b b b b b c c c 
d d d b b b b b b b b b b c c c 
d d c c c c c c c c c c c b c c 
d c c c c c c c c c c c c c b c 
c c c c c c c c c c c c c c c b 
`
    //% blockIdentity=images._tile
    export const tile8 = img`
c c c c c c c c c c c c c c c c 
c c c c c c c c c 2 c c c c c c 
c c c c c c c c c 2 2 c c c c c 
c c c c c c c c c 2 2 2 c c c c 
c c c c c c c c c 2 2 2 2 c c c 
c c c c c c c c c 2 2 2 2 2 c c 
c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 
c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c 
c c c c c c c c c 2 2 2 2 2 c c 
c c c c c c c c c 2 2 2 2 c c c 
c c c c c c c c c 2 2 2 c c c c 
c c c c c c c c c 2 2 c c c c c 
c c c c c c c c c 2 c c c c c c 
c c c c c c c c c c c c c c c c 
`
    //% blockIdentity=images._tile
    export const tile9 = img`
e f e e f e e e e f e e f e e e 
e c e e c e e e e c e e c e e e 
e c e e f e e e e c e e c e e e 
e c e f e e e e e c e e f e e e 
e f e c e e e e e f e e e f e e 
e e f c e e e e e f e e e c e e 
e e f e e e e e f f e e e c e e 
e e c e e e e e f f e e e f e e 
e e c e e e e e f e e e e f f e 
e e c e e e e e f e e e f e c e 
e e c e e e e e c e e e c e c e 
e e c e e e e e c e e e c e e c 
e e c e e e e e c e e e c e e f 
e e c e e e e e c e e e f e e f 
c f f e e e e e f e e e f e f c 
e f f f f c c c f f c c f f e e 
`
    //% blockIdentity=images._tile
    export const tile11 = img`
d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d 
b d d d d d d d d d d b d d d b 
4 b b d d d d d d b b 4 b b b 4 
e 4 4 b b b b b b 4 4 e 4 4 4 e 
e e f c e e e e e f e e e c e e 
e e f e e e e e f f e e e c e e 
e e c e e e e e f f e e e f e e 
e e c e e e e e f e e e e f f e 
e e c e e e e e f e e e f e c e 
e e c e e e e e c e e e c e c e 
e e c e e e e e c e e e c e e c 
e e c e e e e e c e e e c e e f 
e e c e e e e e c e e e f e e f 
c f f e e e e e f e e e f e f c 
e f f f f c c c f f c c f f e e 
`
}
function planky1 () {
    planky_chr = sprites.create(img`
. . . . . . . . e e e e e e e . 
. e e e e e e e 1 1 1 1 1 1 e . 
. e 1 1 1 1 1 1 1 1 1 1 1 1 e . 
. e 1 f 1 1 f 1 1 f 1 f 1 1 e . 
. e 1 1 f f 1 f f 1 f 1 f 1 e . 
. e 1 1 1 1 1 1 1 1 1 1 1 1 e . 
. e 1 1 1 f 1 f 1 1 f 1 1 1 e . 
. e 1 f f 1 f 1 f f 1 f f 1 e . 
. e 1 1 1 1 1 1 1 1 1 1 1 1 e . 
. e 1 1 1 1 1 1 e e e e e e e . 
. e e e e e e e e e . . . . . . 
. . . . . . . . e e e . . . . . 
. . . . . . . . . e e . . . . . 
. . . . . . . . e e e . . . . . 
. . . . . . . e e e . . . . . . 
. . . . . . e e e e e . . . . . 
`, SpriteKind.Planky)
    planky_chr.setPosition(88, 104)
    plankycircumstance = 0
}
function bosslilacend () {
    game.showLongText("", DialogLayout.Bottom)
}
function bosslilacdialogue () {
    game.setDialogCursor(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . f f f f c 2 2 2 2 2 2 c f f f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f c 2 2 2 2 2 2 2 2 2 2 2 2 2 c f f . . . . . . . . . f . . . . . . 
. . . . . . . . . . . . . f f c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c f . . . . . . . f 5 f . . . . . 
. . . . . . . . . . . . f c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 f . . . . . . f 5 f . . . . . 
. . . . . . . . . . . f c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 4 f . . . . . f 5 f . . . . . 
. . . . . . . . . . f c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 5 5 5 4 f . . . . f 5 f . . . . . 
. . . . . . . . . f c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 5 5 5 5 5 5 5 5 5 5 4 f . . . f 5 f . . . . . 
. . . . . . . . f c 2 2 4 5 5 4 5 5 4 5 5 5 4 5 5 5 5 5 5 5 5 c 5 4 4 c 2 2 f . . . f 5 f . . . . . 
. . . . . . . f c c 2 2 2 2 5 4 5 5 4 5 5 5 4 5 5 5 5 4 4 4 4 f 2 2 2 2 f 2 c f . . f 5 f . . . . . 
. . . . . . . f c 2 2 2 2 2 2 2 c 2 2 2 2 2 c 2 2 2 2 2 2 2 c f 2 c 2 2 f 2 2 f . . c f c . . . . . 
. . . . . . f c 2 2 2 2 2 2 2 2 f 2 2 2 2 2 c c 2 2 2 2 2 2 f c 2 c c 2 2 f 2 c f . f 5 f . . . . . 
. . . . . . f c 2 2 2 2 2 2 2 c f c 2 2 c c f c c 2 2 2 2 c f c 2 f c c c f 2 2 f . . f . . . . . . 
. . . . . f c 2 2 2 2 2 2 2 2 f c c c c c f b f c 2 2 2 2 f c c 2 f f f c c f 2 c f . . . . . . . . 
. . . . . f c 2 2 2 2 2 2 2 c f c c c f f b d f c c 2 2 c f c c c f c c f f f 2 2 f . . . . . . . . 
. . . . f c c 2 2 2 2 2 2 2 f c c f f f b f f b f c 2 c f f f c c f c c 2 2 2 2 2 c f . . . . . . . 
. . . . f c c c 2 2 2 2 2 2 f f f f b d f 9 9 f f c c c f 9 f f c f c 2 2 2 c 2 2 2 f . . . . . . . 
. . . . f c c c 2 2 c 2 2 2 2 2 2 f d f 9 f f 9 b f c f f f 9 f f c 2 2 2 2 c c 2 2 c f . . . . . . 
. . . f c c c f 2 2 c 2 2 2 2 2 c f f 9 f 1 1 f d f c f f 1 f 9 f c 2 2 2 2 f c c 2 2 f . . . . . . 
. . . f c c c f c 2 c c 2 2 2 2 f b f 1 f 1 1 f d d f d f 1 f 1 f c 2 2 2 2 f f c c c c f . . . . . 
. . . f c c f c c c f c 2 2 2 2 f b f 1 1 f f 1 d d d d 1 f 1 1 f c 2 2 2 2 f . f f c c f . . . . . 
. . . f f f f c c c f c 2 2 2 2 f b d f f 1 1 d d d 4 4 d 1 1 f c c 2 2 2 2 f . . . f f f . . . . . 
. . . . . f f c c c f c c 2 2 c f b d d d d d d d d d d 4 d d f c c 2 2 2 c f . . . . . . . . . . . 
. . . . f 4 f c c f 4 f c c c f f c b d d d d f f f f d d d d b f c c 2 2 c f . . . . . . . . . . . 
. . . f 4 4 f c f 4 4 f c c c f f f c b d d f 3 3 2 2 f d d b f f c c c c c f . . . . . . . . . . . 
. . . . f 4 4 f 4 f 4 f c c c f f 4 f c b d c 3 3 3 2 c d b f . . f c c c f . . . . . . . . . . . . 
. . . . . f 4 4 4 4 f f f c c f f 4 4 f f c b 3 3 3 c d b f . . . . f c c f . . . . . . . . . . . . 
. . . . . . f f 4 4 4 4 f c f f 4 f 4 4 4 f f c b b b f f f . . . . . f c f . . . . . . . . . . . . 
. . . . . . . . f f f f f c f f 4 4 f 4 5 5 4 f f f f 4 4 4 f . . . . . f f . . . . . . . . . . . . 
. . . . . . f f 4 4 4 4 4 f f f 4 4 4 f f 4 5 5 4 f f f f 4 4 f . . . . . f . . . . . . . . . . . . 
. . . . . f 4 4 4 4 f f f f f c f 4 4 4 4 f 4 5 5 5 5 5 5 4 4 f . . . . . . . . . . . . . . . . . . 
. . . . f 4 4 4 4 f 4 4 f c b b c f 4 4 5 5 5 5 5 5 5 5 4 4 f f . . . . . . . . . . . . . . . . . . 
. . . . . f f 4 4 4 4 f c b d d b c f f 4 5 5 5 5 5 5 5 5 5 4 f . . . . . . . . . . . . . . . . . . 
. . . . . . . f f f f f b d d d d b f f f f 4 5 5 5 5 5 5 4 f f f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f c b d d d d b f f f f f f 4 5 5 5 4 f f f c f . . . . . . . . . . . . . . . . 
. . . . . . . . . . f b d d d d d b c f f c f b f f f f f f f c f c f . . . . . . . . . . . . . . . 
. . . . . . . . . . f b d d d d b c c f c c c f b b b b b f c c f c f . . . . . . . . . . . . . . . 
. . . . . . . . . . f b d d d d b f c f c c c c f f f f f f c c c f f . . . . . . . . . . . . . . . 
. . . . . . . . . f c d d d d b f c f c c c c c c c c c c c c c c f f . . . . . . . . . . . . . . . 
. . . . . . . . . f b d d d d c f f f c c c c c c c c c c c c c c f c f . . . . . . . . . . . . . . 
`)
    game.showLongText("Amber: Lilac? What are you doing here? And where is this?", DialogLayout.Bottom)
    game.setDialogCursor(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b . . . . . . . . . . . . . . . . 
. . . . . . . 2 2 2 . . . . . . . . b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . 
. . . . . . . 2 . . 2 . . . . b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . 
. . . . . . . 2 . . 2 2 . b 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . 
. . . . . . . 2 . . 2 2 2 2 b b 2 b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . 
. . . . . . . 2 2 2 2 b 2 b b b 2 b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . 
. . . . . . . 2 2 2 2 2 b b b b 2 b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . 
. . . . . . . 2 b 2 2 b 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . 
. . . . . 2 2 b 2 2 2 2 b 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . 
. . . . . 2 . 2 b 2 2 b b b b b b b b b b b b b b b b b f f f f d d b b b b b b b b b b . . . . . . 
. . . . 2 2 2 b 2 2 2 b b b b b b b b b b d d d d d d d d 2 d d d d b b b b b b b b b b b . . . . . 
. . . . . . b b 2 2 b b b b d f f f f d d d d d d d d d d 2 d d d d b b b b b b b b b b b . . . . . 
. . . . . . b b 2 2 b b b b d f f 2 d d d d d d d d d d d 2 d d d d b b b b b b b b b b b b . . . . 
. . . . . b b b 2 b b b b b d d d 2 d d d d d d d d d d d d d d d d b b b b b b b b b b b b . . . . 
. . . . . b b b b b b b b b d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b . . . . . 
. . . . . b b b b b b b b b d d d d d d d f f f f f f f d d d d d d b b b b b b b b b . . . . . . . 
. . . . . b b b b b b b b b d d d d d d d d d d d d d d d d d f f f b b b b b b b . . . . . . . . . 
. . . . . b b b b b b b b b . d d d d d d d d d d d d f f d f 1 1 f b b b b . . . . . . . . . . . . 
. . . . . b b b b b b b b b b . . d d d d d f f d d f 1 1 f f 1 1 1 b b b b b b b b b . . . . . . . 
. . . . . b b b b b b b b b b . . . . d d f f f f f 1 1 1 f 1 1 1 1 b b b b b b b b b b . . . . . . 
. . . . . . . . . . . . . . . . f f f f f f 1 f f 1 1 1 1 1 1 1 b b b b b b b b b b b b b . . . . . 
. . . . . . . . . b b b b b b b f 1 1 f f 1 1 1 1 1 1 1 1 f f b b b b b b b b b b b b b b . . . . . 
. . . . . . . . b b b b b b b b f f 1 1 1 1 1 1 2 f f f f b b b b b b b b b b b b b b b b . . . . . 
. . . . . . . . b b b b b b b b b f f 1 1 2 2 2 f 2 2 2 2 2 b b b b b b b b b b b b b b b . . . . . 
. . . . . . . b b b b b b b b b b b f 2 2 2 2 1 1 2 1 1 1 2 b b b b b b b b b b b b b b . . . . . . 
. . . . . . . b b b b b b b b b b b 2 1 1 1 2 2 2 2 2 1 1 2 b b b b b b b b b b b b b . . . . . . . 
. . . . . . . . b b b b b b b b b 2 1 1 1 1 1 2 2 b b 2 2 b b b b b b b b b b b b b b . . . . . . . 
. . . . . . . . b b b b b b b b 2 2 2 2 2 2 2 b 2 b b b b b b b b b b b b b b b b . . . . . . . . . 
. . . . . . . . . . f b b b b b b b b b b b 2 b b 2 b b b b b b b b . . . . . f f . . . . . . . . . 
. . . . . . . . . f . . . . b b b b b b b 2 b b b 2 b b b b b b b b . . . . . . f . . . . . . . . . 
. . . . . . . . f f . . . . b b b b b b 2 b b b b 2 b b b b b b b . . . . . . . f f . . . . . . . . 
. . . . . . . . f . . . . . . 2 2 b b b 2 b b b b b 2 b b b b 2 . . . . . . . . . f f . . . . . . . 
. . . . . . f f . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . f f . . . . . . 
. . . . . . f . . . . . b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . f . . . . . . 
. . . . . f . . . . b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b . . . . . . . . . f f . . . . 
. . . . f f . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . f . . . . 
. . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . 
`)
    game.showLongText("Lilac: This... is the Pseudo Future. A place of false hopes.", DialogLayout.Bottom)
    game.showLongText("Lilac: Here, the souls of those with wasted lives mourn and weep at the regrets they've made when they still lived.", DialogLayout.Bottom)
}
function level1 () {
    scene.cameraFollowSprite(amber)
    tiles.setTilemap(tiles.createTilemap(
            hex`640008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020202020202020202020202020202020202020202020202020202020202020200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000202020202020202020202020202020202020202020202020202020202020202000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020202020202020202020202020202020202020202020202020202020202020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020202020202020202020202020202020202020202020202020202020202020200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000202020202020202020202020202020204040404040404040404040404040404000000000000000000000000000000000001010101000000000000000000010000000100000001000000010101010100000000000000000000000000000000000000000604040404040404040404040404040404040404040404040404040404040404040000000000000000010101010101010000020202020101010101010101000000000000000000000000000202020202010101000000000000000000000000000000000006040404040404040404040404040404040404010101010101010101010101010101010101010101010202020202020201010202020202020202020202020101010101010101010101010102020202020202020101010101010101010101010101010101010101010101010101010101010101010101010202020202020202020202020202`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . 2 . . . 2 . . . 2 . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile11],
            TileScale.Sixteen
        ))
    effects.clouds.startScreenEffect()
    scene.setBackgroundColor(9)
}
sprites.onOverlap(SpriteKind.Lilac, SpriteKind.Projectile, function (sprite, otherSprite) {
    projectile.destroy()
    info.player2.changeLifeBy(-1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
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
    amberrunleft()
})
function plankymessages () {
    if (amber.overlapsWith(planky_chr)) {
        if (plankycircumstance == 0) {
            game.setDialogCursor(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . f f f . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . f f f f f f . . . . . . . . . . . . . f e e f f . . . . . . . . . . . . . . . . . . 
. . . . . . . f e e e e e e f f f f f . . . . . . . f e e e e f . . . . . . . . . . . . . . . . . . 
. . . . . . . f e f f f f e e e e e e f f f f f . . f e e e e f . . . . . . . . . . . . . . . . . . 
. . . . . . f e f 1 1 1 1 f f f f f e e e e e e f f f f f e f . . . . . . . . . . . . . . . . . . . 
. . . . . . f e f 1 1 1 1 1 1 1 1 1 f f f f f e e e e e e f f f f f . . . . . . . . . . . . . . . . 
. . . . . . f e f 1 1 1 f 1 1 1 1 1 1 1 1 1 1 f f f f e e e e e e e f f f f f . . . . . . . . . . . 
. . . . . . f e f 1 f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f e e e e e e e e f f f f f . . . . . . 
. . . . . . f e f 1 1 1 1 f f 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f e e e e e e e e e f f f . . . 
. . . . . . f f 1 1 1 1 1 f f f f 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1 1 1 f f f f e e e e e e e e f . . 
. . . . . . f f 1 1 1 1 1 1 1 1 1 f f f 1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f e e e e f . . 
. . . . . f e f 1 1 1 1 1 1 1 1 1 1 1 f 1 f f 1 f 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f e e f . . 
. . . . . f e f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 f f f f 1 f f 1 1 1 f 1 1 1 1 1 1 f 1 1 1 f e f . . 
. . . . . f e f 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 f 1 1 f f f 1 1 1 1 1 f 1 1 1 f e f . . 
. . . . . f f 1 1 1 f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f 1 1 f f 1 1 f f 1 f 1 1 f e f . . 
. . . . . f f 1 1 1 1 1 1 f f f f f f f 1 1 1 1 1 1 f 1 1 1 f f 1 1 1 f f f f 1 1 1 f 1 f e e f . . 
. . . . . f f 1 1 1 1 1 1 1 1 f f f f f 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 f 1 f e f . . . 
. . . . . f f 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f 1 f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 f e f . . . 
. . . . f e f 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 1 f 1 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f e e f . . . 
. . . . f f 1 1 1 1 f 1 1 1 1 1 1 1 1 1 f 1 1 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f e e f . . . 
. . . . f f 1 1 1 f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 f f f f f f f f 1 1 1 1 1 1 f e e f . . . 
. . . . f f 1 f f f 1 f 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 f 1 1 f f f f 1 1 1 f e e f . . . . 
. . . . f f 1 1 1 1 1 1 f f f f 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f 1 1 f e e f . . . . 
. . . . f 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f 1 f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f e e f . . . . 
. . . f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 f e e e f . . . . 
. . . . f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 f f 1 1 1 1 1 f f 1 1 1 1 f e e e f . . . . 
. . . . . . . . . f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f 1 1 1 f e e e f . . . . 
. . . . . . . . . . . . . . f f f f f 1 1 1 1 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1 f e e e f . . . . . 
. . . . . . . . . . . . . . . . . . . f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f e e e f . . . . . 
. . . . . . . . . . . . . . . . . . . . . f e e f f f f f 1 1 1 1 1 1 1 1 1 1 1 f e e e f . . . . . 
. . . . . . . . . . . . . . . . . . . . . f e e e f . . . f f f 1 1 1 1 1 1 1 f e e e e f . . . . . 
. . . . . . . . . . . . . . . . . . . . . f e e e f . . . . . . f f f f 1 1 1 f e e e e f . . . . . 
. . . . . . . . . . . . . . . . . . . . . f e e e f . . . . . . . . . . f f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . f e e e e f . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . f e e e f . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . f e e e f . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . f e e e f . . . . . . . . . . . . . . . . . . . . . . . . . 
`)
            game.showLongText("Hello, Amber. My name is Planky. Welcome to the test area. Here, you will be able to learn all the moves available in this game.", DialogLayout.Bottom)
            game.showLongText("I designed this place my self to allow you to   understand how this works without any long button layout images.", DialogLayout.Bottom)
        } else {
            game.showLongText("Pain.", DialogLayout.Bottom)
        }
    }
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
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (directionface == 0) {
        amberattackright()
    }
    if (directionface == 1) {
        amberattackleft()
    }
})
function amberattackleft () {
    if (amber.vx >= -1) {
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, amber, -120, 0)
        animation.runImageAnimation(
        projectile,
        [img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 
. . . . . . 1 1 1 1 1 1 1 1 1 . . . . . 
. . 1 1 1 1 1 1 1 . . . . . . . . . . . 
. 1 1 1 1 1 . . . . . . . . . . . . . . 
1 1 1 1 . . . . . . . . . . . . . . . . 
1 1 . . . . . . . . . . . . . . . . . . 
1 1 1 . . . . . . . . . . . . . . . . . 
1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. 1 1 1 1 1 1 1 1 . . . . . . . . . . . 
. . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . 
. . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 
. . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 1 1 1 1 1 1 1 1 
. . . . . . . . 1 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 . . . . . . . . . . . 
. . . 1 1 1 . . . . . . . . . . . . . . 
. . 1 . . . . . . . . . . . . . . . . . 
. 1 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 1 1 1 1 1 
. . . . . . . . . . . 1 1 1 1 . . . . . 
. . . . . . . . 1 . . . . . . . . . . . 
. . . . . 1 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`],
        50,
        false
        )
    } else {
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, amber, -200, 0)
        animation.runImageAnimation(
        projectile,
        [img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 
. . . . . . 1 1 1 1 1 1 1 1 1 . . . . . 
. . 1 1 1 1 1 1 1 . . . . . . . . . . . 
. 1 1 1 1 1 . . . . . . . . . . . . . . 
1 1 1 1 . . . . . . . . . . . . . . . . 
1 1 . . . . . . . . . . . . . . . . . . 
1 1 1 . . . . . . . . . . . . . . . . . 
1 1 1 1 1 1 1 . . . . . . . . . . . . . 
. 1 1 1 1 1 1 1 1 . . . . . . . . . . . 
. . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . 
. . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . 
. . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 
. . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 1 1 1 1 1 1 1 1 
. . . . . . . . 1 1 1 1 1 1 1 . . . . . 
. . . . . 1 1 1 1 . . . . . . . . . . . 
. . . 1 1 1 . . . . . . . . . . . . . . 
. . 1 . . . . . . . . . . . . . . . . . 
. 1 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 1 1 1 1 1 
. . . . . . . . . . . 1 1 1 1 . . . . . 
. . . . . . . . 1 . . . . . . . . . . . 
. . . . . 1 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`],
        50,
        false
        )
    }
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
    controller.moveSprite(amber, 65, 0)
    amber.ay = 250
    directionface = 0
    info.setLife(5)
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
    lilacbehavior()
    info.player2.setLife(50)
}
function lilacbehavior () {
    lilac.vx = 50
    lilac.setFlag(SpriteFlag.BounceOnWall, true)
}
function amberstopleft () {
    if (amber.vx <= 0) {
        directionface = 1
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
scene.onHitWall(SpriteKind.Projectile, function (sprite) {
    if (projectile.tileKindAt(TileDirection.Right, myTiles.tile7)) {
        tiles.setTilemap(tiles.createTilemap(
            hex`640008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020202020202020202020202020202020202020202020202020202020202020200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000202020202020202020202020202020202020202020202020202020202020202000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020202020202020202020202020202020202020202020202020202020202020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020202020202020202020202020202020202020202020202020202020202020200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000202020202020202020202020202020204040404040404040404040404040404000000000000000000000000000000000001010101000000000000000000010000000100000001000000010101010100000000000000000000000000000000000000000004040404040404040404040404040404040404040404040404040404040404070000000000000000010101010101010000020202020101010101010101000000000000000000000000000202020202010101000000000000000000000000000000000000040404040404040404040404040404040404010101010101010101010101010101010101010101010202020202020201010202020202020202020202020101010101010101010101010102020202020202020101010101010101010101010101010101010101010101010101010101010101010101010202020202020202020202020202`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 2 2 2 2 . . . . . . . . . 2 . . . 2 . . . 2 . . . 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile11],
            TileScale.Sixteen
        ))
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
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
    amberrunright()
})
function amberportraits () {
    // for dialogue
    list = [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f f f f f f f f . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . f f f f c 2 2 2 2 2 2 c f f f . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f f c 2 2 2 2 2 2 2 2 2 2 2 2 2 c f f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 c f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 f . . . . . . . . . . . . . . 
. . . . . . . . . . . f c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 4 f . . . . . . . . . . . . . 
. . . . . . . . . . f c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 5 5 5 4 f . . . . . . . . . . . . 
. . . . . . . . . f c 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 4 5 5 5 5 5 5 5 5 5 5 4 f . . . . . . . . . . . 
. . . . . . . . f c 2 2 4 5 5 4 5 5 4 5 5 5 4 5 5 5 5 5 5 5 5 c 5 4 4 c 2 2 f . . . . . . . . . . . 
. . . . . . . f c c 2 2 2 2 5 4 5 5 4 5 5 5 4 5 5 5 5 4 4 4 4 f 2 2 2 2 f 2 c f . . . . . . . . . . 
. . . . . . . f c 2 2 2 2 2 2 2 c 2 2 2 2 2 c 2 2 2 2 2 2 2 c f 2 c 2 2 f 2 2 f . . . . . . . . . . 
. . . . . . f c 2 2 2 2 2 2 2 2 f 2 2 2 2 2 c c 2 2 2 2 2 2 f c 2 c c 2 2 f 2 c f . . . . . . . . . 
. . . . . . f c 2 2 2 2 2 2 2 c f c 2 2 c c f c c 2 2 2 2 c f c 2 f c c c f 2 2 f . . . . . . . . . 
. . . . . f c 2 2 2 2 2 2 2 2 f c c c c c f b f c 2 2 2 2 f c c 2 f f f c c f 2 c f . . . . . . . . 
. . . . . f c 2 2 2 2 2 2 2 c f c c c f f b d f c c 2 2 c f c c c f c c f f f 2 2 f . . . . . . . . 
. . . . f c c 2 2 2 2 2 2 2 f c c f f f b f f b f c 2 c f f f c c f c c 2 2 2 2 2 c f . . . . . . . 
. . . . f c c c 2 2 2 2 2 2 f f f f b d f 9 9 f f c c c f 9 f f c f c 2 2 2 c 2 2 2 f . . . . . . . 
. . . . f c c c 2 2 c 2 2 2 2 2 2 f d f 9 9 f 9 b f c f 9 f 9 f f c 2 2 2 2 c c 2 2 c f . . . . . . 
. . . f c c c f 2 2 c 2 2 2 2 2 c f f 9 1 1 f 9 d f c f 9 f 9 9 f c 2 2 2 2 f c c 2 2 f . . . . . . 
. . . f c c c f c 2 c c 2 2 2 2 f b f 1 1 1 6 1 d d f d 9 6 1 1 f c 2 2 2 2 f f c c c c f . . . . . 
. . . f c c f c c c f c 2 2 2 2 f b f 1 1 1 7 1 d d d d 1 7 1 1 f c 2 2 2 2 f . f f c c f . . . . . 
. . . f f f f c c c f c 2 2 2 2 f b d f f 1 1 d d d 4 4 d 1 1 f c c 2 2 2 2 f . . . f f f . . . . . 
. . . . . f f c c c f c c 2 2 c f b d d d d d d d d d d 4 d d f c c 2 2 2 c f . . . . . . . . . . . 
. . . . f 4 f c c f 4 f c c c f f c b d d d d d d d d d d d d b f c c 2 2 c f . . . . . . . . . . . 
. . . f 4 4 f c f 4 4 f c c c f f f c b d d d c d d d d d d b f f c c c c c f . . . . . . . . . . . 
. . . . f 4 4 f 4 f 4 f c c c f f 4 f c b d d d f f c d d b f . . f c c c f . . . . . . . . . . . . 
. . . . . f 4 4 4 4 f f f c c f f 4 4 f f c b d d d d d b f . . . . f c c f . . . . . . . . . . . . 
. . . . . . f f 4 4 4 4 f c f f 4 f 4 4 4 f f c b b b f f f . . . . . f c f . . . . . . . . . . . . 
. . . . . . . . f f f f f c f f 4 4 f 4 5 5 4 f f f f 4 4 4 f . . . . . f f . . . . . . . . . . . . 
. . . . . . f f 4 4 4 4 4 f f f 4 4 4 f f 4 5 5 4 f f f f 4 4 f . . . . . f . . . . . . . . . . . . 
. . . . . f 4 4 4 4 f f f f f c f 4 4 4 4 f 4 5 5 5 5 5 5 4 4 f . . . . . . . . . . . . . . . . . . 
. . . . f 4 4 4 4 f 4 4 f c b b c f 4 4 5 5 5 5 5 5 5 5 4 4 f f . . . . . . . . . . . . . . . . . . 
. . . . . f f 4 4 4 4 f c b d d b c f f 4 5 5 5 5 5 5 5 5 5 4 f . . . . . . . . . . . . . . . . . . 
. . . . . . . f f f f f b d d d d b f f f f 4 5 5 5 5 5 5 4 f f f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f c b d d d d b f f f f f f 4 5 5 5 4 f f f c f . . . . . . . . . . . . . . . . 
. . . . . . . . . . f b d d d d d b c f f c f b f f f f f f f c f c f . . . . . . . . . . . . . . . 
. . . . . . . . . . f b d d d d b c c f c c c f b b b b b f c c f c f . . . . . . . . . . . . . . . 
. . . . . . . . . . f b d d d d b f c f c c c c f f f f f f c c c f f . . . . . . . . . . . . . . . 
. . . . . . . . . f c d d d d b f c f c c c c c c c c c c c c c c f f . . . . . . . . . . . . . . . 
. . . . . . . . . f b d d d d c f f f c c c c c c c c c c c c c c f c f . . . . . . . . . . . . . . 
. . . . . . . . . f b d d d b f f f f c c c c c c c c c c c c c f c b f . . . . . . . . . . . . . . 
. . . . . . . . . f d d d d f . f f f f c c c c c c c c c c c f c b d f . . . . . . . . . . . . . . 
. . . . . . . . . f d d d b f . . f f f c c c c c c c c c c c f b d d f . . . . . . . . . . . . . . 
. . . . . . . . f c d d d c f . . f f f f c c c c c c c c c f c b d d c f . . . . . . . . . . . . . 
. . . . . . . . f b d d d f . . . . f f f f f c c c c c c c f c b d d d f . . . . . . . . . . . . . 
. . . . . . . . f b d d b f . . . . f f f f c c c c c c c c c f c d d d f . . . . . . . . . . . . . 
. . . . . . . . f b d d c f . . . f f f f f c c c c c c c c c f c b d d f . . . . . . . . . . . . . 
. . . . . . . . f b b b f . . . . f f f f f f c c c c c c c c c f c b d c f . . . . . . . . . . . . 
. . . . . . . . f c b c f . . . f f f f f f f f f c c c c c c f f f c b d f . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`]
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
scene.onOverlapTile(SpriteKind.Player, myTiles.tile8, function (sprite, location) {
    bosslilac()
})
function amberjump () {
    if (amber.vy == 0) {
        amber.vy = -100
    }
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
// makes the player's sprite change when running to
// the right
function amberrunright () {
    if (amber.vx <= 1) {
        directionface = 0
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
. . . . . f f f f d d . d . . . 
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
function amberattackright () {
    if (amber.vx <= 1) {
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, amber, 100, 0)
        animation.runImageAnimation(
        projectile,
        [img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . 
. . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . 
. . . . . . . . . . 1 1 1 1 1 1 1 1 . . 
. . . . . . . . . . . . . 1 1 1 1 1 1 . 
. . . . . . . . . . . . . . . 1 1 1 1 1 
. . . . . . . . . . . . . . . . . 1 1 1 
. . . . . . . . . . . . . . . . 1 1 1 1 
. . . . . . . . . . . . . 1 1 1 1 1 1 1 
. . . . . . . . . . . 1 1 1 1 1 1 1 1 . 
. . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . 
. . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . 
1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
1 1 1 1 1 1 1 1 . . . . . . . . . . . . 
. . . . . 1 1 1 1 1 1 1 . . . . . . . . 
. . . . . . . . . . . 1 1 1 1 . . . . . 
. . . . . . . . . . . . . . 1 1 1 . . . 
. . . . . . . . . . . . . . . . . 1 . . 
. . . . . . . . . . . . . . . . . . 1 . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
1 1 1 1 1 . . . . . . . . . . . . . . . 
. . . . . 1 1 1 1 . . . . . . . . . . . 
. . . . . . . . . . . 1 . . . . . . . . 
. . . . . . . . . . . . . . 1 . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`],
        50,
        false
        )
    } else {
        if (amber.vx >= 0) {
            projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, amber, 200, 0)
            animation.runImageAnimation(
            projectile,
            [img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . 
. . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . 
. . . . . . . . . . 1 1 1 1 1 1 1 1 . . 
. . . . . . . . . . . . . 1 1 1 1 1 1 . 
. . . . . . . . . . . . . . . 1 1 1 1 1 
. . . . . . . . . . . . . . . . . 1 1 1 
. . . . . . . . . . . . . . . . 1 1 1 1 
. . . . . . . . . . . . . 1 1 1 1 1 1 1 
. . . . . . . . . . . 1 1 1 1 1 1 1 1 . 
. . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . 
. . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . 
1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
1 1 1 1 1 1 1 1 . . . . . . . . . . . . 
. . . . . 1 1 1 1 1 1 1 . . . . . . . . 
. . . . . . . . . . . 1 1 1 1 . . . . . 
. . . . . . . . . . . . . . 1 1 1 . . . 
. . . . . . . . . . . . . . . . . 1 . . 
. . . . . . . . . . . . . . . . . . 1 . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
1 1 1 1 1 . . . . . . . . . . . . . . . 
. . . . . 1 1 1 1 . . . . . . . . . . . 
. . . . . . . . . . . 1 . . . . . . . . 
. . . . . . . . . . . . . . 1 . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
`],
            50,
            false
            )
        }
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    plankymessages()
})
function plankydie () {
    plankycircumstance = 1
    planky_chr.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . e . . . . . . . . . . . . . . . . . . . . . 
. . . . . . e . e . . . . . . . . . . . . . . . . . . . 
. . . . . . . e e e . . . . . . . . . . . . . . . . . . 
. . . . . . . . e e e . . . . . . . . . . . . . . . . . 
. . . . . . . . . e e . . . . . . . . e . . . . . . . . 
. . . . . . . . e e e . . . . . . e . e . . . . . . . . 
. . . . . . . e e e . . e e e e e e e e e e e e e e e . 
. . . . . . e e e e e . e e e e e e e e e e e e e e e . 
`)
}
// make's the player go back into idle sprite when
// stopping
function amberstopright () {
    if (amber.vx >= 0) {
        directionface = 0
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Planky, function (sprite, otherSprite) {
    plankydie()
})
function amberrunleft () {
    if (amber.vx >= -80) {
        directionface = 1
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
. . . d . d d f f f f . . . . . 
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
function bosslilac () {
    bosslilaccalled = 1
    game.splash("Level 1: Pseudo Future")
    planky_chr.destroy()
    amber.setPosition(23, 109)
    effects.clouds.endScreenEffect()
    tiles.setTilemap(tiles.createTilemap(
            hex`0a000900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000909090909090909090908080808080808080808`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile11],
            TileScale.Sixteen
        ))
    scene.setBackgroundImage(img`
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
    bosslilacdialogue()
    lilac2()
    lilac.setPosition(140, 80)
}
let projectile4: Sprite = null
let projectile3: Sprite = null
let projectile2: Sprite = null
let bosslilaccalled = 0
let dahlia: Sprite = null
let damber: Sprite = null
let list: Image[] = []
let lilac: Sprite = null
let presidentfinal: Sprite = null
let directionface = 0
let president: Sprite = null
let projectile: Sprite = null
let amber: Sprite = null
let plankycircumstance = 0
let planky_chr: Sprite = null
planky1()
amberidle()
level1()
game.onUpdateInterval(1500, function () {
    if (bosslilaccalled == 1) {
        projectile2 = sprites.createProjectileFromSprite(img`
. . b b c b b . . 
. c b d d b d c . 
c b d 1 1 1 d b b 
b d 1 1 1 1 1 d b 
b b d 1 1 1 d d c 
c d 1 1 1 1 1 b b 
b d d 1 1 d 1 d b 
. c d d b d b c . 
. . b b c b c . . 
`, lilac, 0, 100)
        projectile3 = sprites.createProjectileFromSprite(img`
. . b b c b b . . 
. c b d d b d c . 
c b d 1 1 1 d b b 
b d 1 1 1 1 1 d b 
b b d 1 1 1 d d c 
c d 1 1 1 1 1 b b 
b d d 1 1 d 1 d b 
. c d d b d b c . 
. . b b c b c . . 
`, lilac, 70, 100)
        projectile4 = sprites.createProjectileFromSprite(img`
. . b b c b b . . 
. c b d d b d c . 
c b d 1 1 1 d b b 
b d 1 1 1 1 1 d b 
b b d 1 1 1 d d c 
c d 1 1 1 1 1 b b 
b d d 1 1 d 1 d b 
. c d d b d b c . 
. . b b c b c . . 
`, lilac, -70, 100)
        projectile2.setKind(SpriteKind.LilacProjectile)
        projectile3.setKind(SpriteKind.LilacProjectile)
        projectile4.setKind(SpriteKind.LilacProjectile)
    }
})
forever(function () {
    if (info.player2.life() == 0) {
        if (bosslilaccalled == 1) {
            bosslilaccalled = 0
            bosslilacend()
        }
    }
})
