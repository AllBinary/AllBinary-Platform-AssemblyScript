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
// import org.allbinary.graphics.paint.Paintable

@global export class DamageFloaters extends Paintable {

    jclassName(): string {
        return "org.allbinary.game.combat.damage.DamageFloaters";
    }
    @lazy static jv_SINGLETON: DamageFloaters | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): DamageFloaters | null {
        if (!DamageFloaters.js_SINGLETON) {
            DamageFloaters.js_SINGLETON = true;
            DamageFloaters.jv_SINGLETON = new DamageFloaters().jinit_DamageFloaters_0();
        }
        return DamageFloaters.jv_SINGLETON;
    }
    static set SINGLETON(value: DamageFloaters | null) {
        DamageFloaters.js_SINGLETON = true;
        DamageFloaters.jv_SINGLETON = value;
    }

    jinit_DamageFloaters_0(): DamageFloaters {
        super.jinit_Paintable_0();
        return this;
    }
    

    static getInstance(): DamageFloaters | null {
        return DamageFloaters.SINGLETON;
    }
    

    add(damage: i32): void {
    }
}

