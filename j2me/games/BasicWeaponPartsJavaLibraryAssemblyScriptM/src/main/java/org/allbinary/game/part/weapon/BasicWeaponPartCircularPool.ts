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
// package org.allbinary.game.part.weapon
// import org.allbinary.game.combat.weapon.WeaponProperties
// import org.allbinary.game.score.ScoreableInterface
// import org.allbinary.graphics.RelativeRelationship
// import org.allbinary.layer.AllBinaryLayer

@global export class BasicWeaponPartCircularPool extends JObject {

    jclassName(): string {
        return "org.allbinary.game.part.weapon.BasicWeaponPartCircularPool";
    }
    @lazy static jv_NULL_BASIC_WEAPON_PART_CIRCULAR_POOL: BasicWeaponPartCircularPool | null = null;
    @lazy static js_NULL_BASIC_WEAPON_PART_CIRCULAR_POOL: bool = false;
    static get NULL_BASIC_WEAPON_PART_CIRCULAR_POOL(): BasicWeaponPartCircularPool | null {
        if (!BasicWeaponPartCircularPool.js_NULL_BASIC_WEAPON_PART_CIRCULAR_POOL) {
            BasicWeaponPartCircularPool.js_NULL_BASIC_WEAPON_PART_CIRCULAR_POOL = true;
            BasicWeaponPartCircularPool.jv_NULL_BASIC_WEAPON_PART_CIRCULAR_POOL = new BasicWeaponPartCircularPool().jinit_BasicWeaponPartCircularPool_0();
        }
        return BasicWeaponPartCircularPool.jv_NULL_BASIC_WEAPON_PART_CIRCULAR_POOL;
    }
    static set NULL_BASIC_WEAPON_PART_CIRCULAR_POOL(value: BasicWeaponPartCircularPool | null) {
        BasicWeaponPartCircularPool.js_NULL_BASIC_WEAPON_PART_CIRCULAR_POOL = true;
        BasicWeaponPartCircularPool.jv_NULL_BASIC_WEAPON_PART_CIRCULAR_POOL = value;
    }
    basicWeaponPart: BasicWeaponPart | null = null;

    jfields_BasicWeaponPartCircularPool(): void {
    this.basicWeaponPart = BasicWeaponPart.NULL_BASIC_WEAPON_PART;
    }

    jinit_BasicWeaponPartCircularPool_0(): BasicWeaponPartCircularPool {
        super.jinit_JObject_0();
        this.jfields_BasicWeaponPartCircularPool();
        return this;
    }
    

    init(basicWeaponPartFactoryInterface: BasicWeaponPartFactoryInterface | null): void {
        this.basicWeaponPart = basicWeaponPartFactoryInterface!.getInstance(); if (JThrowable.pending !== null) return;
    }
    

    getInstance4(sourceLayerInterface: AllBinaryLayer | null, weaponProperties: WeaponProperties | null, scoreableInterface: ScoreableInterface | null, relativeRelationship: RelativeRelationship | null): BasicWeaponPart | null {
        this.basicWeaponPart!.init(sourceLayerInterface, weaponProperties, scoreableInterface, relativeRelationship); if (JThrowable.pending !== null) return null;
        return this.basicWeaponPart;
    }
}

