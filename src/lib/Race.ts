import { AttributeBonuses } from "./Attributes"
import { Proficiencies } from "./Proficiencies"

export class Race {
    name: string
    attributeBonuses: AttributeBonuses[]
    proficiencies: Proficiencies
    constructor(name?: string, attributeBonuses?: AttributeBonuses[], proficiencies?: Proficiencies) {
        this.name = (name) ? name : 'human'
        this.attributeBonuses = (attributeBonuses) ? attributeBonuses: [
            new AttributeBonuses('str', 1),
            new AttributeBonuses('dex', 1),
            new AttributeBonuses('con', 1),
            new AttributeBonuses('int', 1),
            new AttributeBonuses('wis', 1),
            new AttributeBonuses('cha', 1),
        ]
        this.proficiencies = (proficiencies) ? proficiencies : {
            languages: ['common']
        }
    }
}
