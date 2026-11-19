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
// import org.allbinary.game.score.ScoreableInterface
// import org.allbinary.graphics.RelativeRelationship
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.math.AngleFactory

@global export class ArcedMultiBeamWeaponPart extends BasicWeaponPart {

    jclassName(): string {
        return "org.allbinary.game.part.weapon.ArcedMultiBeamWeaponPart";
    }
    weaponLayerCircularStaticPool: WeaponLayerCircularPool | null = null;
    total: i32 = 0;
    TOTAL_ANGLE: i32 = 0;

    jfields_ArcedMultiBeamWeaponPart(): void {
    
    
    this.TOTAL_ANGLE = (<i32>(AngleFactory.getInstance()!.TOTAL_ANGLE));
    }
    

    jinit_ArcedMultiBeamWeaponPart_7(animationInterface: Animation | null, sourceLayerInterface: AllBinaryLayer | null, weaponLayerCircularStaticPool: WeaponLayerCircularPool | null, total: i32, weaponProperties: WeaponProperties | null, scoreableInterface: ScoreableInterface | null, relativeRelationship: RelativeRelationship | null): ArcedMultiBeamWeaponPart {
        super.jinit_BasicWeaponPart_5(animationInterface, sourceLayerInterface, weaponProperties, scoreableInterface, relativeRelationship);
        this.jfields_ArcedMultiBeamWeaponPart();
        this.total = total;
        this.weaponLayerCircularStaticPool = weaponLayerCircularStaticPool;
        return this;
    }
    

    processScore(allbinaryLayerManager: AllBinaryLayerManager | null, angle: i16, otherAngle: i16, weaponProperties: WeaponProperties | null, scoreableInterface: ScoreableInterface | null): void {
        let increment: i16 = (<i16>(((this.total - 1) / this.TOTAL_ANGLE)));
        let minAngle: i16 = (<i16>(((<i32>(angle)) - (((<i32>(increment)) * this.total) >> 1))));
        let next: i32 = 0;
        let weaponLayer: WeaponLayer | null = null;
        for (let index: i32 = 0; index < this.total; index++) {
            weaponLayer = this.weaponLayerCircularStaticPool!.getInstanceWeaponLayer(this.getOwnerLayerInterface(), this.relativeRelationship!.getX(), this.relativeRelationship!.getY(), 0, (minAngle + increment), (<i32>(otherAngle)), weaponProperties, scoreableInterface); if (JThrowable.pending !== null) return;
            allbinaryLayerManager!.append(weaponLayer); if (JThrowable.pending !== null) return;
            next += (<i32>(increment));
        } if (JThrowable.pending !== null) return;
    }
}

