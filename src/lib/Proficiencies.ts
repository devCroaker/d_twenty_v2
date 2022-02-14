export interface ProficicyCategory {
    [key: string]: boolean
}

export class EntityProficiencies {
    [key: string]: ProficicyCategory
    armor: ProficicyCategory = {}
    wepons: ProficicyCategory = {}
    tools: ProficicyCategory = {}
    languages: ProficicyCategory = {}
}

export interface Proficiencies {
    [key: string]: string[]
}
