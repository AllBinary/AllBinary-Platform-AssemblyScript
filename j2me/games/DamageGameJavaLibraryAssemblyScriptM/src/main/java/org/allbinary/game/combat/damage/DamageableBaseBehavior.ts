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

@global export class DamageableBaseBehavior extends JObject implements DamageableInterface {

    jclassName(): string {
        return "org.allbinary.game.combat.damage.DamageableBaseBehavior";
    }
    @lazy static jv_instance: DamageableBaseBehavior | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): DamageableBaseBehavior | null {
        if (!DamageableBaseBehavior.js_instance) {
            DamageableBaseBehavior.js_instance = true;
            DamageableBaseBehavior.jv_instance = new DamageableBaseBehavior().jinit_DamageableBaseBehavior_0();
        }
        return DamageableBaseBehavior.jv_instance;
    }
    static set instance(value: DamageableBaseBehavior | null) {
        DamageableBaseBehavior.js_instance = true;
        DamageableBaseBehavior.jv_instance = value;
    }

    jinit_DamageableBaseBehavior_0(): DamageableBaseBehavior {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): DamageableBaseBehavior | null {
        return DamageableBaseBehavior.instance;
    }
    

    getName(): string | null {
        return JObject.jclassOf(this)!.getName();
    }
    

    damage(damage: i32, damageType: i32): void {
    }
    

    getDamage(damageType: i32): i32 {
        return 6000;
    }
}

