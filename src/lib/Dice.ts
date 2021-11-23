export type Dice = 1|2|4|6|8|10|12|20|100

interface DiceNotation {
  number: number,
  dice: Dice,
  reroll?: number,
  bonus?: number,
  advantage?: 'a' | 'd',
}

function parseDiceNotation(diceString: string): DiceNotation {
  const regex = /(?<number>[\d]+)d(?<dice>[\d]+)[<]?(?<reroll>[\d]+)?(?<bonus>[+-][\d]+)?(?<advantage>[ad])?/g,
    diceRegex = regex.exec(diceString)
  if (!diceRegex?.groups) throw new Error("Dice String is not formatted correctly")
  const parsed = diceRegex.groups as { dice: string | number, number: string | number, [key: string]: string | number }
  Object.keys(parsed).forEach(key => parsed[key] === undefined && delete parsed[key])
  Object.keys(parsed).forEach(key => parsed[key] = (key !== 'advantage') ? +parsed[key] : parsed[key])
  return parsed as DiceNotation
}

export function d(notation: DiceNotation | string): number {
  if (typeof notation === 'string') notation = parseDiceNotation(notation)
  const { number, dice, reroll = 0, bonus = 0, advantage } = notation
  let total = 0
  for (let i = 0; i < number; i++) {
    let currentRoll = 0
    do {
      currentRoll = (advantage === 'a') ? Math.max(d({number: 1, dice}), d({number: 1, dice})) :
        (advantage === 'd') ? Math.min(d({number: 1, dice}), d({number: 1, dice})) : 
        Math.floor(Math.random()*dice)+1
    } while (currentRoll <= reroll && currentRoll !== dice)
    total += currentRoll
  }
  return Math.max(total + bonus, 1)
}
