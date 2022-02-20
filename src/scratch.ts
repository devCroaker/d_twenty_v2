import { Attributes } from './lib/Attributes'
import { Saves, Skills } from './lib/Checks'
import { Defenses, HitPoints } from './lib/Defenses'
import { d } from './lib/Dice'
import { Equiptment } from './lib/Equiptment'
import { Choice, Job, Level } from './lib/Job'
import { EntityProficiencies, Proficiencies } from './lib/Proficiencies'
import { Race } from './lib/Race'
import { Bonus, Keyword, Scope, Scoped } from './lib/Scope'

class Action extends Scoped {
    type: string
    name: string
    constructor(type?: string, name?: string, required?: Keyword[], restricted?: Keyword[]) {
        super(required, restricted)
        this.type = (type) ? type : 'full'
        this.name = (name) ? name : 'Attack'
    }
}

class Actions {
    [key: string]: Action[]

    full: Action[] = [ new Action ]
    bonus: Action[] = []
    free: Action[] = []
    move: Action[] = []
    react: Action[] = []
}

class Entity {
    [key: string]: any

    attributes: Attributes
    _race!: Race
    _job!: Job

    hitPoints = new HitPoints
    
    proficiencies = new EntityProficiencies

    // Scope properties
    saves = new Saves
    skills = new Skills
    _equiptment = new Equiptment
    defenses = new Defenses
    attack: Scope = new Scope
    damage: Scope = new Scope

    // Used only for logging
    bonuses: Bonus[] = []

    constructor(attributes?: Attributes, race? : Race, job? : Job) {
        this.attributes = (attributes) ? attributes : new Attributes
        this.race = (race) ? race : new Race
        this.job = (job) ? job : new Job
    }

    get ac() {
        const base = this.defenses.armorClass.base,
            maxDex = this.defenses.armorClass.maxDex,
            dex = (maxDex || maxDex === 0) ? Math.min(this.attributes.dex.bonus, maxDex) : this.attributes.dex.bonus,
            bonuses = this.defenses.bonuses.map(bonus => {

                let hasRequired = true,
                    hasRestricted = false

                bonus.required.forEach(keyword => hasRequired = this[keyword.scope].keywords.includes(keyword.word))
                bonus.restricted.forEach(keyword => hasRestricted = this[keyword.scope].keywords.includes(keyword.word))
                
                return (hasRequired && !hasRestricted) ? bonus.bonus : 0

            }),
            bonus = (bonuses.length > 0) ? bonuses.reduce((a,b) => a + b) : 0

        return base + dex + bonus
    }

    get equiptment() { return this._equiptment }
    set equiptment(equiptment: Equiptment) {
        this._equiptment = equiptment
        if (equiptment.armor) this.defenses.armorClass = equiptment.armor.armorClass
    }
    get job() { return this._job }
    set job(job: Job) {
        this._job = job
        this.hitPoints.max = this.hitPoints.max + d(`${job.level - 1}d${job.hitdie}+${job.hitdie + this.attributes.con.bonus}`)
        job.saves.forEach(save => this.saves[save].proficient = true)
        this.addProficiencies(job.proficiencies)
        job.skillChoice.choices.forEach(skill => this.skills[skill].proficient = true)
        this.equiptment = job.equiptmentChoice.choices[0]
        this.addLevel(job.levels[0])
    }
    get race() { return this._race }
    set race(race: Race) {
        this._race = race
        race.attributeBonuses.forEach(bonus => this.attributes[bonus.attribute].value += bonus.bonus)
        this.addProficiencies(race.proficiencies)
    }

    addProficiencies(proficiencies: Proficiencies) {
        Object.keys(proficiencies).forEach(category => proficiencies[category].forEach(proficiency => this.proficiencies[category][proficiency] = true))
    }

    addLevel(level: Level) {
        level.features.forEach(feature => {
            if (feature instanceof Choice) {
                feature.choices.forEach(choice => {
                    if (choice instanceof Bonus) {
                        this[choice.scope].bonuses.push(choice)
                        this.bonuses.push(choice)
                    }
                })
            }
        })
    }

    print() {
        const { race, job, attributes, hitPoints, ac, equiptment, bonuses } = this
        console.log(`Race: ${race.name} Class: ${job.name}`)
        console.log(`str ${attributes.str.value} dex: ${attributes.dex.value} con: ${attributes.con.value} int: ${attributes.int.value} wis: ${attributes.wis.value} cha: ${attributes.cha.value}`)
        console.log(`Hitpoints: ${hitPoints.current}/${this.hitPoints.max} AC: ${ac}`)
        console.log(`Armor: ${equiptment.armor.name}`)
        console.log(`MainHand: ${equiptment.mainHand.name} OffHand: ${equiptment.offHand.name}`)
        console.log(`Ranged: ${equiptment.ranged.name}`)
        console.log(this.equiptment.keywords)
        console.log('Bonuses:')
        bonuses.forEach(bonus => console.log(`${bonus.name}: ${bonus.des}`))
        //
    }
}

new Entity().print()
