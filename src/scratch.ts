import Attribute from './lib/Attribute'
import Attributes from './lib/Attributes'
import { d } from './lib/Dice'
import races from './lib/Races'

// Just a place to fuck around
const getRandomAttribute = () => new Attribute(d("3d6"))
const getRandomAttributes = () => new Attributes(getRandomAttribute(),getRandomAttribute(),getRandomAttribute(),getRandomAttribute(),getRandomAttribute(),getRandomAttribute())
const attributes = getRandomAttributes()
console.log(`${attributes}`)

const allRaces = Object.keys(races)
const randomRace = allRaces[Math.floor(Math.random()*allRaces.length)]
console.log(randomRace)
console.log(races[randomRace])

const newAttributes = races[randomRace].applyAttributeBonuses(attributes)
console.log(`${newAttributes}`)

/*
  What can levels come with?
    Hit dice - new maximum and current hit points
    proficiencies 
      - Wepons
      - Armor
      - Tools
      - Skills
      - Saves
    features - what are features?
      - A choice - something that provides a choice of any of the below features
      - Actions
        - Regular
        - Bonus
        - Reaction
        - Free
        - Movement actions - Implement in this game to engage/disengage in different ways
        - Note some actions are toggleable like rage/reckless attacks
      - Bonuses
        - Attack Rolls
        - AC
        - Damage
        - Ability Scores
        - Movement speed
        - Initiative
        - Saves
        - Skills
      - Advantages / Disadvantages
        - Attack Rolls
        - Initiative
        - Saves
        - Skills
      - Resources
        - Ki
        - Rages
        - Sorcery Points
      - Intrinsic Armors / Wepons
      - Resistances / Immunities
      - Extra Attack
      - Rest abilities - short / long
      - Feats - lets not?
      - Archtype - Like a class class
    spellcasting - spell slots are a feature of level, spells known/prepared/spellcasting state/save DC are a feature of the type of spellcasting
*/