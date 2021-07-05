namespace SpriteKind {
    export const ShieldI = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.ShieldI, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (ShieldUbication == 1) {
        animation.runImageAnimation(
        Shield,
        [img`
            .........1111111.........
            ......1111111111111......
            ....11111.......11111....
            ...111.............111...
            ...1.................1...
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            `],
        100,
        false
        )
        pause(200)
        if (ShieldUbication == 1) {
            animation.runImageAnimation(
            Shield,
            [img`
                .........2222222.........
                ......222eeeeeee222......
                ....22eee.......eee22....
                ...2ee.............ee2...
                ...e.................e...
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                `],
            100,
            false
            )
        }
    } else if (ShieldUbication == 2) {
        animation.runImageAnimation(
        Shield,
        [img`
            .........................
            .........................
            .....................1...
            .....................11..
            ......................1..
            ......................11.
            .......................1.
            .......................1.
            .......................11
            ........................1
            ........................1
            ........................1
            ........................1
            ........................1
            ........................1
            .......................11
            .......................1.
            .......................1.
            ......................11.
            ......................1..
            .....................11..
            .....................1...
            .........................
            .........................
            .........................
            `],
        100,
        false
        )
        pause(200)
        if (ShieldUbication == 2) {
            animation.runImageAnimation(
            Shield,
            [img`
                .........................
                .........................
                .....................e...
                .....................2e..
                ......................2..
                ......................2e.
                .......................2.
                .......................2.
                .......................2e
                ........................2
                ........................2
                ........................2
                ........................2
                ........................2
                ........................2
                .......................e2
                .......................2.
                .......................2.
                ......................e2.
                ......................2..
                .....................e2..
                .....................2...
                .........................
                .........................
                .........................
                `],
            100,
            false
            )
        }
    } else if (ShieldUbication == 3) {
        animation.runImageAnimation(
        Shield,
        [img`
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            ...1.................1...
            ...111.............111...
            ....11111.......11111....
            ......1111111111111......
            .........1111111.........
            `],
        100,
        false
        )
        pause(200)
        if (ShieldUbication == 3) {
            animation.runImageAnimation(
            Shield,
            [img`
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                .........................
                ...e.................e...
                ...2ee.............ee2...
                ....22eee.......eee22....
                ......222eeeeeee222......
                .........2222222.........
                `],
            100,
            false
            )
        }
    } else if (ShieldUbication == 4) {
        animation.runImageAnimation(
        Shield,
        [img`
            .........................
            .........................
            ...1.....................
            ..11.....................
            ..1......................
            .11......................
            .1.......................
            .1.......................
            11.......................
            1........................
            1........................
            1........................
            1........................
            1........................
            1........................
            11.......................
            .1.......................
            .1.......................
            .11......................
            ..1......................
            ..11.....................
            ...1.....................
            .........................
            .........................
            .........................
            `],
        100,
        false
        )
        pause(200)
        if (ShieldUbication == 4) {
            animation.runImageAnimation(
            Shield,
            [img`
                .........................
                .........................
                ...e.....................
                ..e2.....................
                ..2......................
                .e2......................
                .2.......................
                .2.......................
                e2.......................
                2........................
                2........................
                2........................
                2........................
                2........................
                2........................
                2e.......................
                .2.......................
                .2.......................
                .2e......................
                ..2......................
                ..2e.....................
                ...2.....................
                .........................
                .........................
                .........................
                `],
            100,
            false
            )
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    otherSprite.destroy()
})
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    if (Choose == 1) {
        sprite.setPosition(80, -10)
        sprite.vy = 150
    } else if (Choose == 2) {
        sprite.setPosition(170, 60)
        sprite.vx = -150
    } else if (Choose == 3) {
        sprite.setPosition(80, 130)
        sprite.vy = -150
    } else if (Choose == 4) {
        sprite.setPosition(-10, 60)
        sprite.vx = 150
    }
    animation.runImageAnimation(
    sprite,
    [img`
        . . . 1 1 9 9 . . . . . 
        . . 1 1 9 1 1 6 . . . . 
        . 1 1 1 9 1 9 9 6 . . . 
        . 1 1 1 6 9 6 6 9 6 . . 
        1 1 . 1 6 9 6 . 6 . . . 
        1 1 . . 6 9 6 . . . . . 
        1 . 1 . 6 9 6 . . . 1 . 
        . . . 9 6 9 6 1 . 1 1 . 
        . . 9 1 9 9 6 1 1 1 1 . 
        . . 9 1 9 9 6 1 1 1 1 . 
        . . 6 9 9 9 6 1 1 1 . . 
        . . . 6 6 6 1 1 1 . . . 
        `,img`
        . . . . . 1 1 1 1 1 . . 
        . . . . 1 1 1 1 9 9 1 . 
        . . . . . 1 1 9 1 1 6 1 
        . . . . 1 1 6 1 9 9 6 1 
        . . 9 9 1 6 9 9 6 9 9 6 
        . 9 1 1 6 9 9 6 . 6 9 6 
        9 1 9 9 9 9 6 . . 6 9 6 
        6 9 9 9 9 6 . . 6 9 6 . 
        1 6 9 9 6 . . . . 6 . . 
        1 1 6 6 1 1 . . . 1 . . 
        . 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 . . . . 
        `,img`
        . . . . . 1 1 1 . . . . 
        . . . . . . 1 1 1 1 . . 
        . 6 9 9 . 1 . . 1 1 1 . 
        6 9 1 1 9 . . 1 1 1 1 1 
        6 9 9 9 6 6 6 6 6 9 9 1 
        6 9 9 9 9 9 9 9 9 1 1 9 
        1 6 6 6 6 6 6 6 6 9 1 9 
        1 1 1 1 1 . . . 6 9 6 . 
        1 1 1 1 . . . 6 9 6 . . 
        . 1 1 1 1 . . . 6 . . . 
        . . 1 1 1 1 . . . . . . 
        . . . . . . . . . . . . 
        `,img`
        . . 1 1 6 9 . . . . . . 
        . 1 1 6 9 1 9 . . . . . 
        . 1 6 9 9 9 1 9 . . . . 
        1 1 6 9 9 9 1 9 . . . . 
        1 1 1 6 9 9 6 1 1 . 1 . 
        1 1 1 . 6 9 9 6 1 1 1 1 
        1 1 . . . 6 9 9 6 1 1 1 
        1 1 . . . . 6 9 1 9 1 1 
        . 1 . . 6 . . 6 9 1 9 1 
        . . 1 6 9 6 6 9 9 1 9 1 
        . . . . 6 9 9 9 6 6 1 . 
        . . . . . 6 6 6 1 1 . . 
        `,img`
        . . . 1 1 1 6 6 6 . . . 
        . . 1 1 1 6 9 9 9 6 . . 
        . 1 1 1 1 6 9 9 1 9 . . 
        . 1 1 1 1 6 9 9 1 9 . . 
        . 1 1 . 1 6 9 6 9 . . . 
        . 1 . . . 6 9 6 . 1 . 1 
        . . . . . 6 9 6 . . 1 1 
        . . . 6 . 6 9 6 1 . 1 1 
        . . 6 9 6 6 9 6 1 1 1 . 
        . . . 6 9 9 1 9 1 1 1 . 
        . . . . 6 1 1 9 1 1 . . 
        . . . . . 9 9 1 1 . . . 
        `,img`
        . . . . 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 . 
        . . 1 . . . 1 1 6 6 1 1 
        . . 6 . . . . 6 9 9 6 1 
        . 6 9 6 . . 6 9 9 9 9 6 
        6 9 6 . . 6 9 9 9 9 1 9 
        6 9 6 . 6 9 9 6 1 1 9 . 
        6 9 9 6 9 9 6 1 9 9 . . 
        1 6 9 9 1 6 1 1 . . . . 
        1 6 1 1 9 1 1 . . . . . 
        . 1 9 9 1 1 1 1 . . . . 
        . . 1 1 1 1 1 . . . . . 
        `],
    100,
    true
    )
})
let NotesDown: Sprite = null
let Choose = 0
let ShieldUbication = 0
let Shield: Sprite = null
info.setScore(50)
music.setVolume(110)
let PlayerStatus = sprites.create(img`
    . . . . . . . . . . . 
    . . . . . . . . . . . 
    . . . . . . . . . . . 
    . . . . . . . . . . . 
    . . . . . . . . . . . 
    . . . . . . . . . . . 
    . . . . . . . . . . . 
    . . . . . . . . . . . 
    . . . . . . . . . . . 
    . . . . . . . . . . . 
    . . . . . . . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
PlayerStatus,
[img`
    . . . . . . . . . . . 
    . . . . . . . . . . . 
    . . . 2 2 . 2 2 . . . 
    . . 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 . . . 
    . . . . 2 2 2 . . . . 
    . . . . . 2 . . . . . 
    . . . . . . . . . . . 
    . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . 
    . . . . . . . . . . . 
    . . . 2 2 . 2 2 . . . 
    . . 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 . . . 
    . . . . 2 2 2 . . . . 
    . . . . . 2 . . . . . 
    . . . . . . . . . . . 
    . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . 
    . . . . . . . . . . . 
    . . . 2 2 . 2 2 . . . 
    . . 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 . . . 
    . . . . 2 2 2 . . . . 
    . . . . . 2 . . . . . 
    . . . . . . . . . . . 
    . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . 
    . . . . . . . . . . . 
    . . . 2 2 . 2 2 . . . 
    . . 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 . . . 
    . . . . 2 2 2 . . . . 
    . . . . . 2 . . . . . 
    . . . . . . . . . . . 
    . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . 
    . . . . . . . . . . . 
    . . . 1 1 . 1 1 . . . 
    . . 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 . . 
    . . . 1 1 1 1 1 . . . 
    . . . . 1 1 1 . . . . 
    . . . . . 1 . . . . . 
    . . . . . . . . . . . 
    . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . 
    . . . 2 2 . 2 2 . . . 
    . . 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 . . . 
    . . . . 2 2 2 . . . . 
    . . . . . 2 . . . . . 
    . . . . . . . . . . . 
    `,img`
    . . . e e . e e . . . 
    . . e . . e . . e . . 
    . e . 2 2 . 2 2 . e . 
    e . 2 2 2 2 2 2 2 . e 
    e . 2 2 2 2 2 2 2 . e 
    e . 2 2 2 2 2 2 2 . e 
    . e . 2 2 2 2 2 . e . 
    . . e . 2 2 2 . e . . 
    . . . e . 2 . e . . . 
    . . . . e . e . . . . 
    . . . . . e . . . . . 
    `],
100,
true
)
Shield = sprites.create(img`
    .........2222222.........
    ......222eeeeeee222......
    ....22eee.......eee22....
    ...2ee.............ee2...
    ...e.................e...
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    `, SpriteKind.ShieldI)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffff
    fffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffff
    fffbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbffffffffff9ffffffffffffffffffffffffffffffffffffffffffffff69196fffffffffffffffffffffffffffff
    fffbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbffffffff69196ffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffff
    fffbcc11111c11cc1c11111ccc11111c11111c11cc1c1111cc11111c11111ccccccbfffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffff
    fffbcc11111c11cc1c11111ccc11111c11111c11cc1c11111c11111c11111ccccccbfffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffbccc11ccc11cc1c11cccccc11cccc11cc1c111c1c11cc1c11cc1c11cc1cccccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffbccc11ccc11111c111ccccc11cccc11cc1c111c1c11cc1c11cc1c11cc1cccccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffbccc11ccc11111c111ccccc11cccc11cc1c111c1c11cc1c11cc1c11111ccccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffbccc11ccc11cc1c11cccccc11cccc11cc1c11111c11cc1c11cc1c1111cccccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffbccc11ccc11cc1c11111ccc11111c11111c11111c11111c11111c11111cccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffbccc11ccc11cc1c11111ccc11111c11111c11c11c1111cc11111c11c11cccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffbcc11111c11111c11111c11111c11111c11111cccccccccccccccccccccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffbcc11111c11111c11111c11111c11111c11111cccccccccccccccccccccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffbcc11cc1c11cc1c11cccc11cccc11cccc11cccccccccccccccccccccccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffbcc11cc1c11cc1c11cccc11cccc111ccc11cccccccccccccccccccccccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffbcc11111c11111c11111c11111c111ccc11111cccccccccccccccccccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffbcc11cccc11cc1cccc11cccc11c11ccccccc11cccccccccccccccccccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffbcc11cccc11cc1c11111c11111c11111c11111ccccccccccccccccccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffbcc11cccc11cc1c11111c11111c11111c11111ccccccccccccccccccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffbccccccccccccccccccccccccccccccccccccccccccccccccccccccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffbccccccccccccccccccccccccccccccccccccccccccccccccccccccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffbcccccccccccccccccccccccccccccccccccbffffffffffffffffffffffffffffffffffffffffffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdfffffffffffffffffffffffffffffffffffffffffffbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffdb111b111b111b1b1bbb1b1b111b11bb111bdfffffffffffffffffffffffffffffffffffffffffffbcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffdb11bb1b1b1bbb1b1bbb111b1b1b1b1b11bbdffffffffffffffffffffffffffffffffbbfffffffffbccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffdb1bbb111bb11bb1bbbb1b1b1b1b1b1b1bbbdfffffffffffffffffffffffffffffffbcccfffffffbcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffdb111b1b1b111bb1bbbb1b1b111b11bb111bdfffffffffffffffffffffffffffffffbccccffffffbcccccfffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdffffffffffffffffffffffffffffffbfcccccfffffbcccccfffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccffffbcccccfffffffff69196ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccffffbcccccfffffffffff9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccccccfffbccccccfffffffffff6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccfffbccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccff
    bbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccffffbcccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccc
    ccbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccccccffccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccc
    ccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcccccccffccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffbccccccccccccc
    cccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbcccccc
    cccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffbcccccccccccccccccccc
    cccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffffccccccccfffffffffffffffffffffffffffffffffffffffffffffffbccccccccccccccccccccc
    cccccccffffffffffffffffffffffffffffffffffffffffffffff6fffffffffffffffffffffffffffffcccccccccfffffffffffffffffffffffffffffffffffffffffffffbccccccbbbbbbcccccccccc
    cccccccffffffffffffffffffffffffffffffffffffffffffffff9fffffffffffffffffffffffffffffcccccccccfffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbcccccc
    cccccccfffffffffffffffffffffffffffffffffbbbffffffff69196fffffffffffffffffffffffffffcccccccccffffffffffffffffffffffffffffffffffffffbbbbbbbbbcccccccccccccbbbccccc
    cccccccffffffffffffffffffffffffffffffbbbbcccfffffffff9fffffffffffffffffffffffffffffcccccccccbffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbcccc
    cccccccffffffffffffffffffffffffffffbbbccccccfffffffff6fffffffffffffffffffffffffffffcccccccccbfffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccbbcccc
    cccccccffffffffffffffffffffffffffbbbcccccccccffffffffffffffffffffffffffffffffffffffccccccccccbfbbbbbbbbbbbbccccccbbbbbccccccbcccccccccccccccccccccccccccccbbbccc
    cccccccfffffffffffffffffffffffffbbcccccccccccfffffffffffffffffffffffffffffffffffffcccccccccccbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbccc
    cccccccffffffffffffffffffffffffbbccccccccccccffffffffffffffffffffffffffffffffffffccccccccccccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbccc
    ccccccbfffffffffffbbfffffffffffbbccccccccccccffffffffffffffffffffffffffffffffffffccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbcc
    ccccccbffffbbbbbbbcbbffffffffffbcccccccccccccffffffffffffffffffffffffccfffffffffcccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbcc
    ccccccbffbbbcccccccbbffffffffffbccccccccccccccffffffffffffffffffffffccccbbbffffccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbcc
    cccccbbbbcccccccccccbfffffffffbbccccccccccccccfffffffffffffffffffffccccccccbbffccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbcc
    cccccbbcccccccccccccbfffffffffbbccccccccccccccfffffffffffffffffffffccccccccbbbbcccccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbcc
    bcccbbbccccccccccccccfffffffffbcccccccccccccccfffffffffffffffffffffccccccccbbbccccccccccccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbcc
    bccbbccccccccccccccccfffffffffbcccccccccccccccffffffffffffffffffffccccccccbbbcccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbc
    bccbcccccccccccccccccffffffcccccccccccccccccccffffffffffffffffffffccccccccbbccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbc
    bcbbcccccccccccccccccbccccccccccccccccccccccccffbbcfffffffffffffffccccccccbcccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbc
    bcbccccccccccccccccccbccccccccccccccccccccccccffbcccffffffffffffffcccccccccccccccccccccccccbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbc
    bbbccccccccccccccccccbccccccccccccccccccccccccbbbccccfffffffffffffcccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbb
    bbcccccccccccccccccccbccccccccccccccccccccccccbbccccccffffffffffffcccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbb
    bbcccccccccccccccccccbcccccccccccccccccccccccccbbcccccfffffffffffccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbb
    bccccccccccccccccccccbccccccccccccccccccccccccccccccccfffffffffffcccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbb
    bccccccccccccccccccccbbccccccccccbbbbbbbccccccccccccccfffffffffffccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbb
    bccccccccccccccccccccbbcccccccccbcccccbbbcccccccccccccfffffffffffcccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbb
    ccccccccccccccccccccccbccccccccbbcccccccbccccccccccccbfffffffffffcccccccccccccccbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccbbcccccbbbccccccccbbccccccccbbbbffffffffffccccccccccccccbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccbbbccbbcccccccccccbccccccccccccbbbbbbbbbfcccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccbbbbccccccccccccbcccccccccccccccccccccbccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccbbbbbbbbccccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccbbbbbccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccbbbbcccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbcccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbcccccccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbcccccccccccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbccbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
let Start = 1
forever(function () {
    music.setTempo(120)
    if (Start == 1) {
        for (let index = 0; index < 2; index++) {
            for (let index = 0; index < 2; index++) {
                Start = 0
                Choose = 1
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Whole))
                Choose = 2
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Whole))
                Choose = 3
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Whole))
                Choose = 4
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Whole))
                Choose = 1
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Whole))
                Choose = 4
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Whole))
                Choose = 3
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Whole))
                Choose = 2
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Whole))
                Choose = 1
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Whole))
                Choose = 4
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Breve))
                music.rest(music.beat(BeatFraction.Double))
                Choose = 2
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Whole))
                Choose = 3
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Whole))
                Choose = 4
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Breve))
                music.rest(music.beat(BeatFraction.Double))
                Choose = 1
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Whole))
                Choose = 3
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Whole))
                Choose = 1
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Breve))
                music.rest(music.beat(BeatFraction.Whole))
                Choose = 1
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Whole))
                Choose = 2
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Whole))
                Choose = 3
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Whole))
                Choose = 2
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Half))
                Choose = 3
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Half))
                Choose = 4
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Breve))
                Choose = 1
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Double))
                Choose = 3
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Breve))
                music.rest(music.beat(BeatFraction.Double))
            }
            for (let index = 0; index < 2; index++) {
                Choose = 3
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Whole))
                Choose = 1
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Double))
                music.rest(music.beat(BeatFraction.Whole))
                Choose = 2
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Whole))
                Choose = 1
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Half))
                music.rest(music.beat(BeatFraction.Whole))
                Choose = 4
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Half))
                Choose = 1
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Half))
                music.rest(music.beat(BeatFraction.Whole))
                Choose = 2
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Half))
                Choose = 1
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Breve))
                Choose = 4
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Whole))
                Choose = 1
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Whole))
                music.rest(music.beat(BeatFraction.Half))
                Choose = 2
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Half))
                Choose = 3
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Breve))
                Choose = 4
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Whole))
                Choose = 2
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Whole))
                music.rest(music.beat(BeatFraction.Half))
                Choose = 3
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Half))
                Choose = 4
                NotesDown = sprites.create(img`
                    . . . . . 9 9 . . . . . 
                    . . . . 9 1 1 6 . . . . 
                    . . . . 9 1 9 9 6 . . . 
                    . . . . 6 9 6 6 9 6 . . 
                    . . . . 6 9 6 . 6 . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . . 6 9 6 . . . . . 
                    . . . 9 6 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 9 1 9 9 6 . . . . . 
                    . . 6 9 9 9 6 . . . . . 
                    . . . 6 6 6 . . . . . . 
                    `, SpriteKind.Projectile)
                music.rest(music.beat(BeatFraction.Breve))
                music.rest(music.beat(BeatFraction.Whole))
            }
            Choose = 1
            NotesDown = sprites.create(img`
                . . . . . 9 9 . . . . . 
                . . . . 9 1 1 6 . . . . 
                . . . . 9 1 9 9 6 . . . 
                . . . . 6 9 6 6 9 6 . . 
                . . . . 6 9 6 . 6 . . . 
                . . . . 6 9 6 . . . . . 
                . . . . 6 9 6 . . . . . 
                . . . 9 6 9 6 . . . . . 
                . . 9 1 9 9 6 . . . . . 
                . . 9 1 9 9 6 . . . . . 
                . . 6 9 9 9 6 . . . . . 
                . . . 6 6 6 . . . . . . 
                `, SpriteKind.Projectile)
            music.rest(music.beat(BeatFraction.Whole))
            Choose = 2
            NotesDown = sprites.create(img`
                . . . . . 9 9 . . . . . 
                . . . . 9 1 1 6 . . . . 
                . . . . 9 1 9 9 6 . . . 
                . . . . 6 9 6 6 9 6 . . 
                . . . . 6 9 6 . 6 . . . 
                . . . . 6 9 6 . . . . . 
                . . . . 6 9 6 . . . . . 
                . . . 9 6 9 6 . . . . . 
                . . 9 1 9 9 6 . . . . . 
                . . 9 1 9 9 6 . . . . . 
                . . 6 9 9 9 6 . . . . . 
                . . . 6 6 6 . . . . . . 
                `, SpriteKind.Projectile)
            music.rest(music.beat(BeatFraction.Whole))
            Choose = 3
            NotesDown = sprites.create(img`
                . . . . . 9 9 . . . . . 
                . . . . 9 1 1 6 . . . . 
                . . . . 9 1 9 9 6 . . . 
                . . . . 6 9 6 6 9 6 . . 
                . . . . 6 9 6 . 6 . . . 
                . . . . 6 9 6 . . . . . 
                . . . . 6 9 6 . . . . . 
                . . . 9 6 9 6 . . . . . 
                . . 9 1 9 9 6 . . . . . 
                . . 9 1 9 9 6 . . . . . 
                . . 6 9 9 9 6 . . . . . 
                . . . 6 6 6 . . . . . . 
                `, SpriteKind.Projectile)
            music.rest(music.beat(BeatFraction.Whole))
            Choose = 2
            NotesDown = sprites.create(img`
                . . . . . 9 9 . . . . . 
                . . . . 9 1 1 6 . . . . 
                . . . . 9 1 9 9 6 . . . 
                . . . . 6 9 6 6 9 6 . . 
                . . . . 6 9 6 . 6 . . . 
                . . . . 6 9 6 . . . . . 
                . . . . 6 9 6 . . . . . 
                . . . 9 6 9 6 . . . . . 
                . . 9 1 9 9 6 . . . . . 
                . . 9 1 9 9 6 . . . . . 
                . . 6 9 9 9 6 . . . . . 
                . . . 6 6 6 . . . . . . 
                `, SpriteKind.Projectile)
            music.rest(music.beat(BeatFraction.Half))
            Choose = 3
            NotesDown = sprites.create(img`
                . . . . . 9 9 . . . . . 
                . . . . 9 1 1 6 . . . . 
                . . . . 9 1 9 9 6 . . . 
                . . . . 6 9 6 6 9 6 . . 
                . . . . 6 9 6 . 6 . . . 
                . . . . 6 9 6 . . . . . 
                . . . . 6 9 6 . . . . . 
                . . . 9 6 9 6 . . . . . 
                . . 9 1 9 9 6 . . . . . 
                . . 9 1 9 9 6 . . . . . 
                . . 6 9 9 9 6 . . . . . 
                . . . 6 6 6 . . . . . . 
                `, SpriteKind.Projectile)
            music.rest(music.beat(BeatFraction.Half))
            Choose = 4
            NotesDown = sprites.create(img`
                . . . . . 9 9 . . . . . 
                . . . . 9 1 1 6 . . . . 
                . . . . 9 1 9 9 6 . . . 
                . . . . 6 9 6 6 9 6 . . 
                . . . . 6 9 6 . 6 . . . 
                . . . . 6 9 6 . . . . . 
                . . . . 6 9 6 . . . . . 
                . . . 9 6 9 6 . . . . . 
                . . 9 1 9 9 6 . . . . . 
                . . 9 1 9 9 6 . . . . . 
                . . 6 9 9 9 6 . . . . . 
                . . . 6 6 6 . . . . . . 
                `, SpriteKind.Projectile)
            music.rest(music.beat(BeatFraction.Breve))
            Choose = 1
            NotesDown = sprites.create(img`
                . . . . . 9 9 . . . . . 
                . . . . 9 1 1 6 . . . . 
                . . . . 9 1 9 9 6 . . . 
                . . . . 6 9 6 6 9 6 . . 
                . . . . 6 9 6 . 6 . . . 
                . . . . 6 9 6 . . . . . 
                . . . . 6 9 6 . . . . . 
                . . . 9 6 9 6 . . . . . 
                . . 9 1 9 9 6 . . . . . 
                . . 9 1 9 9 6 . . . . . 
                . . 6 9 9 9 6 . . . . . 
                . . . 6 6 6 . . . . . . 
                `, SpriteKind.Projectile)
            music.rest(music.beat(BeatFraction.Double))
            Choose = 3
            NotesDown = sprites.create(img`
                . . . . . 9 9 . . . . . 
                . . . . 9 1 1 6 . . . . 
                . . . . 9 1 9 9 6 . . . 
                . . . . 6 9 6 6 9 6 . . 
                . . . . 6 9 6 . 6 . . . 
                . . . . 6 9 6 . . . . . 
                . . . . 6 9 6 . . . . . 
                . . . 9 6 9 6 . . . . . 
                . . 9 1 9 9 6 . . . . . 
                . . 9 1 9 9 6 . . . . . 
                . . 6 9 9 9 6 . . . . . 
                . . . 6 6 6 . . . . . . 
                `, SpriteKind.Projectile)
            music.rest(music.beat(BeatFraction.Breve))
            music.rest(music.beat(BeatFraction.Double))
        }
    }
})
forever(function () {
    if (info.score() <= 0) {
        game.over(false)
    }
})
forever(function () {
    music.setTempo(120)
    pause(200)
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 2; index++) {
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(415, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(494, music.beat(BeatFraction.Whole))
            music.playTone(523, music.beat(BeatFraction.Whole))
            music.playTone(494, music.beat(BeatFraction.Whole))
            music.playTone(523, music.beat(BeatFraction.Whole))
            music.playTone(587, music.beat(BeatFraction.Whole))
            music.playTone(659, music.beat(BeatFraction.Breve))
            music.rest(music.beat(BeatFraction.Double))
            music.playTone(880, music.beat(BeatFraction.Whole))
            music.playTone(784, music.beat(BeatFraction.Whole))
            music.playTone(659, music.beat(BeatFraction.Breve))
            music.rest(music.beat(BeatFraction.Double))
            music.playTone(880, music.beat(BeatFraction.Whole))
            music.playTone(784, music.beat(BeatFraction.Whole))
            music.playTone(659, music.beat(BeatFraction.Breve))
            music.rest(music.beat(BeatFraction.Whole))
            music.playTone(659, music.beat(BeatFraction.Whole))
            music.playTone(587, music.beat(BeatFraction.Whole))
            music.playTone(523, music.beat(BeatFraction.Whole))
            music.playTone(587, music.beat(BeatFraction.Half))
            music.playTone(523, music.beat(BeatFraction.Half))
            music.playTone(440, music.beat(BeatFraction.Breve))
            music.playTone(523, music.beat(BeatFraction.Double))
            music.playTone(440, music.beat(BeatFraction.Breve))
            music.rest(music.beat(BeatFraction.Double))
        }
        for (let index = 0; index < 2; index++) {
            music.playTone(659, music.beat(BeatFraction.Whole))
            music.playTone(880, music.beat(BeatFraction.Double))
            music.rest(music.beat(BeatFraction.Whole))
            music.playTone(831, music.beat(BeatFraction.Whole))
            music.playTone(880, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Half))
            music.playTone(831, music.beat(BeatFraction.Half))
            music.playTone(880, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Half))
            music.playTone(831, music.beat(BeatFraction.Half))
            music.playTone(880, music.beat(BeatFraction.Breve))
            music.playTone(880, music.beat(BeatFraction.Whole))
            music.playTone(1046, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Half))
            music.playTone(880, music.beat(BeatFraction.Half))
            music.playTone(784, music.beat(BeatFraction.Breve))
            music.playTone(784, music.beat(BeatFraction.Whole))
            music.playTone(880, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Half))
            music.playTone(784, music.beat(BeatFraction.Half))
            music.playTone(659, music.beat(BeatFraction.Breve))
            music.rest(music.beat(BeatFraction.Whole))
        }
        music.playTone(659, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(440, music.beat(BeatFraction.Breve))
        music.playTone(523, music.beat(BeatFraction.Double))
        music.playTone(440, music.beat(BeatFraction.Breve))
        music.rest(music.beat(BeatFraction.Double))
    }
    music.setVolume(0)
    game.over(true)
})
forever(function () {
    if (controller.up.isPressed()) {
        animation.runImageAnimation(
        Shield,
        [img`
            .........2222222.........
            ......222eeeeeee222......
            ....22eee.......eee22....
            ...2ee.............ee2...
            ...e.................e...
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            `],
        100,
        false
        )
        ShieldUbication = 1
    } else if (controller.right.isPressed()) {
        animation.runImageAnimation(
        Shield,
        [img`
            .........................
            .........................
            .....................e...
            .....................2e..
            ......................2..
            ......................2e.
            .......................2.
            .......................2.
            .......................2e
            ........................2
            ........................2
            ........................2
            ........................2
            ........................2
            ........................2
            .......................e2
            .......................2.
            .......................2.
            ......................e2.
            ......................2..
            .....................e2..
            .....................2...
            .........................
            .........................
            .........................
            `],
        100,
        false
        )
        ShieldUbication = 2
    } else if (controller.down.isPressed()) {
        animation.runImageAnimation(
        Shield,
        [img`
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            .........................
            ...e.................e...
            ...2ee.............ee2...
            ....22eee.......eee22....
            ......222eeeeeee222......
            .........2222222.........
            `],
        100,
        false
        )
        ShieldUbication = 3
    } else if (controller.left.isPressed()) {
        animation.runImageAnimation(
        Shield,
        [img`
            .........................
            .........................
            ...e.....................
            ..e2.....................
            ..2......................
            .e2......................
            .2.......................
            .2.......................
            e2.......................
            2........................
            2........................
            2........................
            2........................
            2........................
            2........................
            2e.......................
            .2.......................
            .2.......................
            .2e......................
            ..2......................
            ..2e.....................
            ...2.....................
            .........................
            .........................
            .........................
            `],
        100,
        false
        )
        ShieldUbication = 4
    }
})
