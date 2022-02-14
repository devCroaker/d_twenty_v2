export class Keyword {
    scope: string
    word: string
    constructor(scope: string, word: string) {
        this.scope = scope
        this.word = word
    }
}
export class Scoped {
    required: Keyword[]
    restricted: Keyword[]
    bonus: any
    constructor(required?: Keyword[], restricted?: Keyword[]) {
        this.required = (required) ? required : []
        this.restricted = (restricted) ? restricted : []
    }
}

export class Bonus extends Scoped {
    name: string
    des: string
    scope: string
    bonus: number
    constructor(name: string, des: string, scope: string, bonus: number, required?: Keyword[], restricted?: Keyword[]) {
        super(required, restricted)
        this.name = name
        this.des = des
        this.scope = scope
        this.bonus = bonus
    }
}

export class Scope {
    keywords: string[]
    bonuses: Bonus[]
    constructor(keywords?: string[], bonuses?: Bonus[]) {
        this.keywords = (keywords) ? keywords : []
        this.bonuses = (bonuses) ? bonuses : []
    }
}
