/*
 *
 * AllBinary Open License Version 1
 * Copyright (c) 2011 AllBinary
 * 
 * By agreeing to this license you and any business entity you represent are
 * legally bound to the AllBinary Open License Version 1 legal agreement.
 * 
 * You may obtain the AllBinary Open License Version 1 legal agreement from
 * AllBinary or the root directory of AllBinary's AllBinary Platform repository.
 * 
 * Created By: Travis Berthelot
 *  
 */
// Generated Code Do Not Modify
// package org.allbinary.game.combat.weapon

@global export class SimpleWeaponProperties extends JObject {

    jclassName(): string {
        return "org.allbinary.game.combat.weapon.SimpleWeaponProperties";
    }
    damage: i32 = 0;
    dissipation: i16 = 0;
    range: i32 = 0;

    jfields_SimpleWeaponProperties(): void {
    this.damage = 0;
    this.dissipation = 0;
    this.range = 0;
    }

    jinit_SimpleWeaponProperties_0(): SimpleWeaponProperties {
        super.jinit_JObject_0();
        this.jfields_SimpleWeaponProperties();
        return this;
    }
    

    set(simpleWeaponProperties: SimpleWeaponProperties | null): void {
        this.setDamage(simpleWeaponProperties!.getDamage()); if (JThrowable.pending !== null) return;
        this.setDissipation(simpleWeaponProperties!.getDissipation()); if (JThrowable.pending !== null) return;
        this.setRange(simpleWeaponProperties!.getRange()); if (JThrowable.pending !== null) return;
    }
    

    setDamage(damage: i32): void {
        this.damage = damage;
    }
    

    getDamage(): i32 {
        return this.damage;
    }
    

    setDissipation(dissipation: i16): void {
        this.dissipation = dissipation;
    }
    

    getDissipation(): i16 {
        return this.dissipation;
    }
    

    getRange(): i32 {
        return this.range;
    }
    

    setRange(range: i32): void {
        this.range = range;
    }
}

