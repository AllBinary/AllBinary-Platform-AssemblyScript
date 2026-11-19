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
// package org.allbinary.game.combat.damage
// import org.allbinary.game.layer.CollidableCompositeLayer
// import org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker

@global export class DamageUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.game.combat.damage.DamageUtil";
    }
    @lazy static jv_instance: DamageUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): DamageUtil | null {
        if (!DamageUtil.js_instance) {
            DamageUtil.js_instance = true;
            DamageUtil.jv_instance = new DamageUtil().jinit_DamageUtil_0();
        }
        return DamageUtil.jv_instance;
    }
    static set instance(value: DamageUtil | null) {
        DamageUtil.js_instance = true;
        DamageUtil.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    COLLIDE: string | null = null;

    jfields_DamageUtil(): void {
    this.logUtil = LogUtil.getInstance();
    this.COLLIDE = "collide";
    }
    

    static getInstance(): DamageUtil | null {
        return DamageUtil.instance;
    }
    

    jinit_DamageUtil_0(): DamageUtil {
        super.jinit_JObject_0();
        this.jfields_DamageUtil();
        return this;
    }
    

    process(damageableInterface: DamageableInterface | null, damageableInterface2: DamageableInterface | null): void {
        damageableInterface!.damage(damageableInterface2!.getDamage(0), 0); if (JThrowable.pending !== null) return;
    }
    

    debugDamage(collidableInterfaceCompositeInterface1: CollidableCompositeLayer | null, collidableInterfaceCompositeInterface: CollidableCompositeLayer | null): void {
        let collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer | null = changetype<CollidableDestroyableDamageableLayer | null>(collidableInterfaceCompositeInterface);
        let damage: i32 = collidableDestroyableDamageableLayer!.getDamage(0); if (JThrowable.pending !== null) return;
        if (damage > 20000) {
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
            stringBuffer!.append("Collision "); if (JThrowable.pending !== null) return;
            stringBuffer!.append(JObject.jtoString(collidableInterfaceCompositeInterface1)); if (JThrowable.pending !== null) return;
            stringBuffer!.append(" with: "); if (JThrowable.pending !== null) return;
            stringBuffer!.append(JObject.jtoString(collidableInterfaceCompositeInterface)); if (JThrowable.pending !== null) return;
            stringBuffer!.append(" damage: "); if (JThrowable.pending !== null) return;
            stringBuffer!.appendint(damage); if (JThrowable.pending !== null) return;
            this.logUtil!.putF(JObject.jtoString(stringBuffer), collidableInterfaceCompositeInterface1, this.COLLIDE); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

