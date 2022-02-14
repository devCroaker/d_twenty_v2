import { Damage } from "./Damage"
import { ArmorClass } from "./Defenses"

export class Item {
    name: string
    keywords: string[]
    constructor(name: string, keywords: string[]) {
        this.name = name
        this.keywords = keywords
    }
}

export class Armor extends Item {
    armorClass: ArmorClass

    stealthDisadvantage: boolean

    reqStr?: number
    constructor(name?: string, keywords?: string[], armorClass?: ArmorClass, stealthDisadvantage?: boolean, reqStr?: number) {
        super(
            (name) ? name : 'unarmored',
            (keywords) ? keywords : ['unarmored'],
        )
        this.armorClass = (armorClass) ? armorClass : new ArmorClass
        this.stealthDisadvantage = (stealthDisadvantage) ? stealthDisadvantage : false
        if (reqStr) this.reqStr = reqStr
    }
}

export class Wepon extends Item {
    damage: Damage
    constructor(name?: string, keywords?: string[], damage?: Damage) {
        super(
            (name) ? name : 'unarmed',
            (keywords) ? keywords : ['unarmed'],
        )
        this.damage = (damage) ? damage : new Damage
    }
}

export class Shield extends Item {
    defenseBonus: number
    constructor(name?: string, keywords?: string[], defenseBonus?: number) {
        super(
            (name) ? name : 'none',
            (keywords) ? keywords : [],
        )
        this.defenseBonus = (defenseBonus) ? defenseBonus : 2
    }
}
