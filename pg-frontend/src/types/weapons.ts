export enum Weapon {
    Bow = 'Bow',
    Crossbow = 'Crossbow',
    GreatSword = 'Great Sword',
    ShieldSword = 'Sword and Shield',
    Staff = 'Magical Staff',
    Daggers = 'Daggers',
}

export type WeaponTypes = [Weapon.Bow] | [Weapon.Crossbow] | [Weapon.Daggers] | [Weapon.GreatSword] | [Weapon.ShieldSword] | [Weapon.ShieldSword] | [Weapon.Staff];