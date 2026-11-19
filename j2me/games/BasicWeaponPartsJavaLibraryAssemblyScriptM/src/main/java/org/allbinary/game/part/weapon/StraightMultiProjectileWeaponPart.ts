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
// import org.allbinary.animation.Animation
// import org.allbinary.game.combat.weapon.WeaponProperties
// import org.allbinary.game.layer.weapon.WeaponLayer
// import org.allbinary.game.layer.weapon.WeaponLayerCircularPool
// import org.allbinary.game.score.NoScoreable
// import org.allbinary.game.score.ScoreableInterface
// import org.allbinary.graphics.RelativeRelationship
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.math.NoDecimalTrigTable

@global export class StraightMultiProjectileWeaponPart extends BasicWeaponPart {

    jclassName(): string {
        return "org.allbinary.game.part.weapon.StraightMultiProjectileWeaponPart";
    }
    weaponLayerCircularStaticPool: WeaponLayerCircularPool | null = null;
    total: i32 = 0;
    noDecimalTrigTable: NoDecimalTrigTable | null = null;

    jfields_StraightMultiProjectileWeaponPart(): void {
    
    
    this.noDecimalTrigTable = NoDecimalTrigTable.getInstance();
    }
    

    static createStraightMultiProjectileWeaponPart(animationInterface: Animation | null, weaponLayerCircularStaticPool: WeaponLayerCircularPool | null): StraightMultiProjectileWeaponPart | null {
        return new StraightMultiProjectileWeaponPart().jinit_StraightMultiProjectileWeaponPart_7(animationInterface, AllBinaryLayer.NULL_ALLBINARY_LAYER, weaponLayerCircularStaticPool, 2, WeaponProperties.NULL_WEAPON_PROPERTIES, NoScoreable.getInstance(), RelativeRelationship.NULL_RELATIVE_RELATIONSHIP);
    }
    

    jinit_StraightMultiProjectileWeaponPart_7(animationInterface: Animation | null, sourceLayerInterface: AllBinaryLayer | null, weaponLayerCircularStaticPool: WeaponLayerCircularPool | null, total: i32, weaponProperties: WeaponProperties | null, scoreableInterface: ScoreableInterface | null, relativeRelationship: RelativeRelationship | null): StraightMultiProjectileWeaponPart {
        super.jinit_BasicWeaponPart_5(animationInterface, sourceLayerInterface, weaponProperties, scoreableInterface, relativeRelationship);
        this.jfields_StraightMultiProjectileWeaponPart();
        this.total = total;
        this.weaponLayerCircularStaticPool = weaponLayerCircularStaticPool;
        return this;
    }
    

    processScore(allbinaryLayerManager: AllBinaryLayerManager | null, angle: i16, otherAngle: i16, weaponProperties: WeaponProperties | null, scoreableInterface: ScoreableInterface | null): void {
        let sourceLayerInterface: AllBinaryLayer | null = this.getOwnerLayerInterface(); if (JThrowable.pending !== null) return;
        let reducedWidth: i32 = (sourceLayerInterface!.getWidth() * 8 / 10); if (JThrowable.pending !== null) return;
        let halfWidth: i32 = (reducedWidth >> 1);
        let x: i32 = this.relativeRelationship!.getX(); if (JThrowable.pending !== null) return;
        let y: i32 = this.relativeRelationship!.getY(); if (JThrowable.pending !== null) return;
        let sine: i64 = 0;
        let beamX: i32 = 0;
        let cosine: i64 = 0;
        let beamY: i32 = 0;
        let weaponLayer: WeaponLayer | null = null;
        let increment: i32 = reducedWidth / (this.total - 1);
        let next: i32 = -halfWidth;
        for (let index: i32 = 0; index < this.total; index++) {
            sine = ((<i64>(next)) * this.noDecimalTrigTable!.sin((<i32>(angle)))); if (JThrowable.pending !== null) return;
            beamX = (<i32>((sine / (<i64>(this.noDecimalTrigTable!.SCALE)))));
            cosine = ((<i64>(next)) * this.noDecimalTrigTable!.cos((<i32>(angle)))); if (JThrowable.pending !== null) return;
            beamY = -(<i32>((cosine / (<i64>(this.noDecimalTrigTable!.SCALE)))));
            weaponLayer = this.weaponLayerCircularStaticPool!.getInstanceWeaponLayer(sourceLayerInterface, x + beamX, y + beamY, 0, (<i32>(angle)), (<i32>(otherAngle)), weaponProperties, scoreableInterface); if (JThrowable.pending !== null) return;
            allbinaryLayerManager!.append(weaponLayer); if (JThrowable.pending !== null) return;
            next += increment;
        } if (JThrowable.pending !== null) return;
    }
}

