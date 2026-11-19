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
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.math.BasicDecimal
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonSeps
// import org.allbinary.string.CommonStrings

@global export class WeaponProperties extends SimpleWeaponProperties {

    jclassName(): string {
        return "org.allbinary.game.combat.weapon.WeaponProperties";
    }
    @lazy static jv_NULL_WEAPON_PROPERTIES: WeaponProperties | null = null;
    @lazy static js_NULL_WEAPON_PROPERTIES: bool = false;
    static get NULL_WEAPON_PROPERTIES(): WeaponProperties | null {
        if (!WeaponProperties.js_NULL_WEAPON_PROPERTIES) {
            WeaponProperties.js_NULL_WEAPON_PROPERTIES = true;
            WeaponProperties.jv_NULL_WEAPON_PROPERTIES = new WeaponProperties().jinit_WeaponProperties_5((<i64>0), (<i64>0), (<i64>0), 0, (<i16>(0)));
        }
        return WeaponProperties.jv_NULL_WEAPON_PROPERTIES;
    }
    static set NULL_WEAPON_PROPERTIES(value: WeaponProperties | null) {
        WeaponProperties.js_NULL_WEAPON_PROPERTIES = true;
        WeaponProperties.jv_NULL_WEAPON_PROPERTIES = value;
    }
    @lazy static messageSent: bool = false;
    @lazy static readonly DAMAGE: string | null = "Damage: ";
    @lazy static readonly RANGE: string | null = "Range: ";
    @lazy static readonly RELOAD: string | null = "Reload: ";
    reloadTime: i64 = 0;
    targetingTime: i64 = 0;
    speed: BasicDecimal | null = null;
    MAX: i64 = 0;
    ZERO: i16 = 0;

    jfields_WeaponProperties(): void {
    this.reloadTime = 0;
    this.targetingTime = 0;
    this.speed = BasicDecimal.ZERO_BIGDECIMAL;
    this.MAX = (<i64>10240);
    this.ZERO = 0;
    }
    

    jinit_WeaponProperties_5(reloadTime: i64, targetingTime: i64, speed: i64, damage: i32, dissipation: i16): WeaponProperties {
        super.jinit_SimpleWeaponProperties_0();
        this.jfields_WeaponProperties();
        if (speed < this.MAX && speed != (<i64>0) && !WeaponProperties.messageSent) {
            let MESSAGE: string | null = "Danger Danger Danger: Speed probably to slow if using 1 degree calculations as velocity for a single axis could be below 1024: ";
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return this;
            PreLogUtil.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(MESSAGE)!.appendlong(speed)), this, commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
            WeaponProperties.messageSent = true;
        } if (JThrowable.pending !== null) return this;
        this.setReloadTime(reloadTime); if (JThrowable.pending !== null) return this;
        this.setTargetingTime(targetingTime); if (JThrowable.pending !== null) return this;
        this.setDamage(damage); if (JThrowable.pending !== null) return this;
        this.setDissipation(dissipation); if (JThrowable.pending !== null) return this;
        this.setSpeed(new BasicDecimal().jinit_BasicDecimal_1(speed)); if (JThrowable.pending !== null) return this;
        if (dissipation != this.ZERO) {
            let unscaledDamage: i64 = this.speed!.getUnscaled() * (<i64>(damage)); if (JThrowable.pending !== null) return this;
            let scaledDissipation: i32 = (<i32>(dissipation)) * this.speed!.getScaledFactorValue(); if (JThrowable.pending !== null) return this;
            let value: i64 = (unscaledDamage / (<i64>(scaledDissipation)));
            this.setRange((<i32>((value * (<i64>9)))) / 10); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    setReloadTime(reloadTime: i64): void {
        this.reloadTime = reloadTime;
    }
    

    getReloadTime(): i64 {
        return this.reloadTime;
    }
    

    setTargetingTime(targetingTime: i64): void {
        this.targetingTime = targetingTime;
    }
    

    getTargetingTime(): i64 {
        return this.targetingTime;
    }
    

    getSpeed(): BasicDecimal | null {
        return this.speed;
    }
    

    setSpeed(speed: BasicDecimal | null): void {
        this.speed = speed;
    }
    

    getDamageI(range: i32): i32 {
        return this.getDamage() - (((<i32>(this.getDissipation())) * range) / this.speed!.getScaled());
    }
    

    toStringArray(): StaticArray<string | null> | null {
        let index: i32 = 0;
        let stringArray: StaticArray<string | null> | null = new StaticArray<string | null>(3);
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringArray![index++] = JObject.jtoString(stringBuffer!.append(WeaponProperties.DAMAGE)!.appendint(this.getDamage())); if (JThrowable.pending !== null) return null;
        stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return null;
        stringArray![index++] = JObject.jtoString(stringBuffer!.append(WeaponProperties.RANGE)!.appendint(this.getRange())); if (JThrowable.pending !== null) return null;
        stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return null;
        stringArray![index++] = JObject.jtoString(stringBuffer!.append(WeaponProperties.RELOAD)!.appendlong(this.getReloadTime())); if (JThrowable.pending !== null) return null;
        return stringArray;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(WeaponProperties.DAMAGE)!.appendint(this.getDamage()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(CommonSeps.getInstance()!.SPACE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(WeaponProperties.RANGE)!.appendint(this.getRange()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(CommonSeps.getInstance()!.SPACE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(WeaponProperties.RELOAD)!.appendlong(this.getReloadTime()); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

