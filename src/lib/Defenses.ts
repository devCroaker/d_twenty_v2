import { Scope } from "./Scope"

export class ArmorClass {
    base: number
    maxDex?: number
    constructor(base?: number, maxDex?: number) {
        this.base = (base) ? base : 10
        if (maxDex || maxDex === 0) this.maxDex = maxDex
    }
}

export class Defenses extends Scope {
    armorClass: ArmorClass = new ArmorClass
}

export class HitPoints { 
    _max: number = 0
    current: number = 0
    constructor() {}
    set max(max: number) {
        this._max += max
        this.current += max
    }
    get max() { return this._max }
}
