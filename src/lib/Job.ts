import { Damage } from "./Damage"
import { ArmorClass } from "./Defenses"
import { Equiptment } from "./Equiptment"
import { Armor, Shield, Wepon } from "./Item"
import { Proficiencies } from "./Proficiencies"
import { Bonus, Keyword } from "./Scope"


function randomChoice(choice: Choice) {
    const choices = [...choice.options]
    for (let i = 0; i < choice.number; i++) {
        choice.choices.push(...choices.splice(Math.floor(Math.random() * choices.length), 1))
    }
    return choice
}

export class Choice {
    number: number
    options: any[]
    choices: any[]
    constructor(number: number, options: any[], choices: any[]) {
        this.number = number
        this.options = options
        this.choices = choices
    }
}

export class Level {
    features: Feature[]
    constructor(features?: Feature[]) {
        this.features = (features) ? features : [
            randomChoice(new Choice(
                1,
                [
                    new Bonus('Archery', '+2 ranged wepon attack rolls', 'attack', 2, [new Keyword('equiptment', 'ranged'), new Keyword('attack', 'ranged'), new Keyword('attack', 'wepon')], []),
                    new Bonus('Defense', '+1 AC while armored', 'defenses', 1, [], [new Keyword('equiptment', 'unarmored')]),
                    new Bonus('Dueling', '+2 damage with empty offhand', 'damage', 2, [new Keyword('equiptment', 'offHand_unarmed'), new Keyword('attack', 'melee'), new Keyword('attack', 'wepon')], []),
                ],
                [],
            ))
        ]
    }
}

export type Feature = Choice | Bonus

export class Job {
    name: string
    level: number
    hitdie: number
    saves: string[]
    proficiencies: Proficiencies
    skillChoice: Choice
    equiptmentChoice: Choice
    levels: Level[]
    constructor(
        name?: string,
        level?: number,
        hitdie?: number,
        saves?: string[],
        proficiencies?: Proficiencies,
        skillChoice?: Choice,
        equiptmentChoice?: Choice,
        levels?: Level[],
    ) {
        this.name = (name) ? name : 'fighter'
        this.level = (level) ? level : 1
        this.hitdie = (hitdie) ? hitdie : 10
        this.saves = (saves) ? saves : ['str', 'con']
        this.proficiencies = (proficiencies) ? proficiencies : {
            armor: ['light_armor', 'medium_armor', 'heavy_armor', 'shields'],
            wepons: ['simple_wepons', 'martial_wepons']
        }
        this.skillChoice = (skillChoice) ? skillChoice : randomChoice(new Choice(
            2,
            [
                'acrobatics', 'animalHandling', 'athletics', 'history',
                'insight', 'intimidation', 'perception', 'survival'
            ],
            [],
        ))
        this.equiptmentChoice = (equiptmentChoice) ? equiptmentChoice : randomChoice(new Choice(
            1, 
            [
                new Equiptment(
                    new Armor('chainmail', ['heavy_armor', 'chainmail'], new ArmorClass(16,0), true, 13),
                    new Wepon('longsword', ['longsword'], new Damage(1, 8, 'str', 0, ['slashing'])),
                    new Shield('shield', ['shield']),
                    new Wepon('handaxe', ['throwing', 'handaxe', 'light'], new Damage(1, 6, 'str', 0, ['slashing'])),

                ),
                new Equiptment(
                    new Armor('leather', ['light_armor', 'leather'], new ArmorClass(11)),
                    new Wepon('shortsword', ['shortsword', 'light'], new Damage(1, 6, 'str', 0, ['slashing'])),
                    new Wepon('shortsword', ['shortsword', 'light'], new Damage(1, 6, 'str', 0, ['slashing'])),
                    new Wepon('longbow', ['longbow', 'heavy',], new Damage(1, 8, 'dex', 0, ['piercing']))
                ),
                new Equiptment(
                    new Armor('chainmail', ['heavy_armor', 'chainmail'], new ArmorClass(16,0), true, 13),
                    new Wepon('maul', ['maul', 'heavy', 'two_handed'], new Damage(2, 6, 'str', 0, ['bludgeoning'])),
                    new Wepon('none', [], new Damage(0, 0, 'str', 0, [])),
                    new Wepon('light_crossbow', ['light_crossbow', 'loading'], new Damage(1, 8, 'dex', 0, ['piercing']))
                )
            ],
            [],
        ))
        this.levels = (levels) ? levels : [
            new Level
        ]
    }
}
