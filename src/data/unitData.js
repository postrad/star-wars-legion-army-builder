import { hh12Stormtrooper, dlt19Stormtrooper, extraStormtrooper, grapplingHook, impactGrenades, 
  concussionGrenades, targetingScopes, longRangeComlink } from './upgradeData';

export const stormTroopers = {
  name: "Stormtroopers",
  army: "Empire",
  rank: "corps",
  pointValue: 44,
  health: 1,
  armor: "red",
  specialAbilities: "Precise 1",
  weapons: {
    name: "E-11 Blaster Rifle",
    damage: "white",
    range: "1-3"
  },
  unarmed: "black",
  unitSize: 4,
  upgrades: [
    hh12Stormtrooper,
    dlt19Stormtrooper,
    extraStormtrooper,
    grapplingHook,
    impactGrenades,
    concussionGrenades,
    targetingScopes,
    longRangeComlink
  ]
}

export const darthVader = {
  name: "Darth Vader",
  army: "Empire",
  rank: "commander",
  pointValue: 200,
  health: 8,
  armor: "red",
  specialAbilities: "Deflect, Immune: Pierce, Master of the Force 1, Relentless",
  weapons: {
    name: "Vader's Lightsaber",
    damage: "6 red",
    range: "melee"
  },
  unarmed: "see weapons",
  unitSize: 1
}

export const speederBike = {
  name: "74-Z Speeder Bike",
  army: "Empire",
  rank: "support",
  pointValue: 90,
  health: 3,
  armor: "white",
  specialAbilities: "Cover 1, Speed 1",
  weapons: {
    name: "need to update weapons schema",
    damage: "6 red",
    range: "melee"
  },
  unarmed: "see weapons",
  unitSize: 1
}

export const atst = {
  name: "AT-ST",
  army: "Empire",
  rank: "heavy",
  pointValue: 195,
  health: 11,
  armor: "white",
  specialAbilities: "Armor, Arsenal 2, Weak Point 1: Rear",
  weapons: {
    name: "need to update weapons schema",
    damage: "6 red",
    range: "melee"
  },
  unarmed: "see weapons",
  unitSize: 1
}

export const rebelTroopers = {
  name: "Rebel Troopers",
  army: "Rebellion",
  rank: "corps",
  pointValue: 40,
  health: 1,
  armor: "white",
  specialAbilities: "Nimble",
  weapons: {
    name: "A-280 Blaster Rifle",
    damage: "black",
    range: "1-3"
  },
  unarmed: "black",
  unitSize: 4,
  upgrades: [
    grapplingHook,
    impactGrenades,
    concussionGrenades,
    targetingScopes,
    longRangeComlink
  ]
}

export const lukeSkywalker = {
  name: "Luke Skywalker",
  army: "Rebellion",
  rank: "commander",
  pointValue: 160,
  health: 6,
  armor: "red",
  specialAbilities: "Jump 1, Charge, Deflect, Immune: Pierce",
  weapons: {
    name: "Anakin's Lightsaber",
    damage: "6 black",
    range: "1"
  },
  unarmed: "black",
  unitSize: 1,
}

export const atrt = {
  name: "AT-Rt",
  army: "Rebellion",
  rank: "support",
  pointValue: 55,
  health: 6,
  armor: "red",
  specialAbilities: "Armor, Climbing Vehicle, Expert Climber",
  weapons: {
    name: "A-300 Blaster Rifle",
    damage: "2 white",
    range: "1-3"
  },
  unarmed: "3 black black",
  unitSize: 1,
}

