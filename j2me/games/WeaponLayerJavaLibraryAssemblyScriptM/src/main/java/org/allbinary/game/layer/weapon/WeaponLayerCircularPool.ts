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
// package org.allbinary.game.layer.weapon
// import org.allbinary.game.combat.weapon.WeaponProperties
// import org.allbinary.game.score.ScoreableInterface
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerCircularPool

@global export class WeaponLayerCircularPool extends AllBinaryLayerCircularPool {

    jclassName(): string {
        return "org.allbinary.game.layer.weapon.WeaponLayerCircularPool";
    }
    

    jinit_WeaponLayerCircularPool_0(): WeaponLayerCircularPool {
        super.jinit_AllBinaryLayerCircularPool_0();
        return this;
    }
    

    getInstanceWeaponLayer(sourceLayerInterface: AllBinaryLayer | null, x: i32, y: i32, z: i32, angle: i32, otherAngle: i32, weaponProperties: WeaponProperties | null, scoreable: ScoreableInterface | null): WeaponLayer | null {
        let weaponLayer: WeaponLayer | null = changetype<WeaponLayer | null>(super.getNextInstance()); if (JThrowable.pending !== null) return null;
        weaponLayer!.initXYZ(x, y, z); if (JThrowable.pending !== null) return null;
        weaponLayer!.init(sourceLayerInterface, angle, otherAngle, weaponProperties, scoreable); if (JThrowable.pending !== null) return null;
        return weaponLayer;
    }
}

