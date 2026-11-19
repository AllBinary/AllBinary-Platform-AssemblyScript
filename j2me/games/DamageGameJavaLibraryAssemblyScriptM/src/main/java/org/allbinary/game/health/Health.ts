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
// package org.allbinary.game.health
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonSeps

@global export class Health extends JObject implements HealthInterface {

    jclassName(): string {
        return "org.allbinary.game.health.Health";
    }
    @lazy static jv_NULL_HEALTH: Health | null = null;
    @lazy static js_NULL_HEALTH: bool = false;
    static get NULL_HEALTH(): Health | null {
        if (!Health.js_NULL_HEALTH) {
            Health.js_NULL_HEALTH = true;
            Health.jv_NULL_HEALTH = new Health().jinit_Health_1(0);
        }
        return Health.jv_NULL_HEALTH;
    }
    static set NULL_HEALTH(value: Health | null) {
        Health.js_NULL_HEALTH = true;
        Health.jv_NULL_HEALTH = value;
    }
    @lazy static readonly NAME: string | null = "Health Resource";
    @lazy static readonly HEALTH_LABEL: string | null = "Health: ";
    @lazy static readonly MAX_HEALTH_LABEL: string | null = " Max: ";
    health: i32 = 0;
    maxHealth: i32 = 0;
    healthListenerInterface: HealthListenerInterface | null = null;

    jfields_Health(): void {
    this.health = 0;
    this.maxHealth = 0;
    this.healthListenerInterface = NullHealthListener.NULL_HEALTH_LISTENER;
    }
    

    jinit_Health_1(maxHealth: i32): Health {
        super.jinit_JObject_0();
        this.jfields_Health();
        this.setMaxHealth(maxHealth); if (JThrowable.pending !== null) return this;
        this.setHealth(maxHealth); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    heal(ahealth: i32): void {
        let newHealth: i32 = this.getHealth() + ahealth; if (JThrowable.pending !== null) return;
        if (newHealth > this.getMaxHealth()) {
            this.setHealth(this.getMaxHealth()); if (JThrowable.pending !== null) return;
        } else {
            this.setHealth(newHealth); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    healMax(): void {
        this.setHealth(this.getMaxHealth()); if (JThrowable.pending !== null) return;
    }
    

    isDamaged(): bool {
        if (this.getHealth() != this.getMaxHealth()) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    damage(ahealth: i32): void {
        if (ahealth < 0) {
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
            stringBuffer!.append("******* Trying to heal when damaging. Damage: "); if (JThrowable.pending !== null) return;
            stringBuffer!.appendint(ahealth); if (JThrowable.pending !== null) return;
            stringBuffer!.append(CommonSeps.getInstance()!.SPACE); if (JThrowable.pending !== null) return;
            stringBuffer!.append(this.toString()); if (JThrowable.pending !== null) return;
            ForcedLogUtil.log(JObject.jtoString(stringBuffer), this); if (JThrowable.pending !== null) return;
            return;
        } if (JThrowable.pending !== null) return;
        let health: i32 = this.getHealth() - ahealth; if (JThrowable.pending !== null) return;
        this.setHealth(health); if (JThrowable.pending !== null) return;
    }
    

    isAlive(): bool {
        if (this.getHealth() <= 0) {
            return false;
        } else {
            return true;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    getMaxHealth(): i32 {
        return this.maxHealth;
    }
    

    setMaxHealth(maxHealth: i32): void {
        this.maxHealth = maxHealth;
    }
    

    setHealth(health: i32): void {
        if (health > this.getMaxHealth()) {
            this.health = this.getMaxHealth(); if (JThrowable.pending !== null) return;
        } else if (health < 0) {
            this.health = 0;
        } else {
            this.health = health;
        } if (JThrowable.pending !== null) return;
        if (this.healthListenerInterface != null) {
            this.healthListenerInterface!.onHealthChange(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getHealth(): i32 {
        return this.health;
    }
    

    addListener(healthGraphic: HealthListenerInterface | null): void {
        this.healthListenerInterface = healthGraphic;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(Health.HEALTH_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.health); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(Health.MAX_HEALTH_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.maxHealth); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

