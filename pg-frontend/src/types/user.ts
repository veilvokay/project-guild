import { WeaponTypes } from "./weapons";

export type inGameStatus = 'default' | 'officer' | 'leader';
export type websiteRights = 'default' | 'master' | 'admin';
export type timeZones = 'GMT +0' | 'GMT +1' | 'GMT +2' | 'GMT +3';
export type availability = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday' | 'Working days' | 'Weekends';

export type UserCompleteData = {
    readonly userID: string,
    mainCharacterName: string,
    characterLevel: string,
    mainWeapon: WeaponTypes,
    secondaryWeapon: WeaponTypes,
    inGameStatus: inGameStatus,
    websiteRights: websiteRights,
    weeklyPlaytime: string,
    timeZone: timeZones,
    daysAvailable: availability[],
}