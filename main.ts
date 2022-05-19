namespace images {
    export function showRandomImages(): void {
        let image = randint(1, 3)
        
        if (image == 1) {
            
            basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        }

        if (image == 2) {
            
            basic.showIcon(IconNames.Heart)
        }
        if (image == 3) {

            basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
        
        }
    }
}
let item: number