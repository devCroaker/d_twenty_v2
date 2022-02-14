import { Bonus, Scope } from "./Scope"

export class Check extends Scope{
    attribute: string
    proficient: boolean
    constructor(attribute: string, proficient?: boolean, keywords?: string[], bonuses?: Bonus[]) {
        super(keywords, bonuses)
        this.attribute = attribute
        this.proficient = (proficient) ? proficient : false
    }
}

export class Saves {
    [key: string]: Check
    str: Check
    dex: Check
    con: Check
    int: Check
    wis: Check
    cha: Check
    constructor(str?: Check, dex?: Check, con?: Check, int?: Check, wis?: Check, cha?: Check) {
        this.str = (str) ? str : new Check('str')
        this.dex = (dex) ? dex : new Check('dex')
        this.con = (con) ? con : new Check('con')
        this.int = (int) ? int : new Check('int')
        this.wis = (wis) ? wis : new Check('wis')
        this.cha = (cha) ? cha : new Check('cha')
    }
}

export class Skills {
    [key: string]: Check
    acrobatics: Check = new Check('dex')
    animalHandling: Check = new Check('wis')
    arcana: Check = new Check('int')
    athletics: Check = new Check('str')
    deception: Check = new Check('cha')
    history: Check = new Check('int')
    insight: Check = new Check('wis')
    intimidation: Check = new Check('cha')
    investigation: Check = new Check('int')
    medicine: Check = new Check('wis')
    nature: Check = new Check('int')
    perception: Check = new Check('wis')
    performance: Check = new Check('cha')
    persuasion: Check = new Check('cha')
    religion: Check = new Check('int')
    sleightOfHand: Check = new Check('dex')
    stealth: Check = new Check('dex')
    survival: Check = new Check('wis')
}
