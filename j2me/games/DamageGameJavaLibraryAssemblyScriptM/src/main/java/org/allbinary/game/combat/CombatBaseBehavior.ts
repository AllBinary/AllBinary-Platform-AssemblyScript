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
// package org.allbinary.game.combat
// import org.allbinary.game.combat.damage.DamageableBaseBehavior
// import org.allbinary.game.combat.destroy.DestroyableBaseBehavior

@global export class CombatBaseBehavior extends JObject {

    jclassName(): string {
        return "org.allbinary.game.combat.CombatBaseBehavior";
    }
    @lazy static jv_NULL_COMBAT_BEHAVIOR: CombatBaseBehavior | null = null;
    @lazy static js_NULL_COMBAT_BEHAVIOR: bool = false;
    static get NULL_COMBAT_BEHAVIOR(): CombatBaseBehavior | null {
        if (!CombatBaseBehavior.js_NULL_COMBAT_BEHAVIOR) {
            CombatBaseBehavior.js_NULL_COMBAT_BEHAVIOR = true;
            CombatBaseBehavior.jv_NULL_COMBAT_BEHAVIOR = new CombatBaseBehavior().jinit_CombatBaseBehavior_2(DamageableBaseBehavior.getInstance(), DestroyableBaseBehavior.getInstance());
        }
        return CombatBaseBehavior.jv_NULL_COMBAT_BEHAVIOR;
    }
    static set NULL_COMBAT_BEHAVIOR(value: CombatBaseBehavior | null) {
        CombatBaseBehavior.js_NULL_COMBAT_BEHAVIOR = true;
        CombatBaseBehavior.jv_NULL_COMBAT_BEHAVIOR = value;
    }
    damageableBaseBehavior: DamageableBaseBehavior | null = null;
    destroyableBaseBehavior: DestroyableBaseBehavior | null = null;
    readyForExplosion: bool = false;

    jfields_CombatBaseBehavior(): void {
    
    
    this.readyForExplosion = false;
    }
    

    jinit_CombatBaseBehavior_2(damageableBaseBehavior: DamageableBaseBehavior | null, destroyableBaseBehavior: DestroyableBaseBehavior | null): CombatBaseBehavior {
        super.jinit_JObject_0();
        this.jfields_CombatBaseBehavior();
        this.damageableBaseBehavior = damageableBaseBehavior;
        this.destroyableBaseBehavior = destroyableBaseBehavior;
        return this;
    }
    

    getDamageableBaseBehavior(): DamageableBaseBehavior | null {
        return this.damageableBaseBehavior;
    }
    

    getDestroyableBaseBehavior(): DestroyableBaseBehavior | null {
        return this.destroyableBaseBehavior;
    }
    

    isReadyForExplosion(): bool {
        return this.readyForExplosion;
    }
    

    setReadyForExplosion(readyForExplosion: bool): void {
        this.readyForExplosion = readyForExplosion;
    }
}

