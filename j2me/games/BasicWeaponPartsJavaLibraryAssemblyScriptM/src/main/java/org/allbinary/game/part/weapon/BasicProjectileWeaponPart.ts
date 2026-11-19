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

@global export class BasicProjectileWeaponPart extends BasicWeaponPart {

    jclassName(): string {
        return "org.allbinary.game.part.weapon.BasicProjectileWeaponPart";
    }
    weaponLayerCircularStaticPool: WeaponLayerCircularPool | null = null;

    jfields_BasicProjectileWeaponPart(): void {
    
    }
    

    static createBasicProjectileWeaponPart(animationInterface: Animation | null, weaponLayerCircularStaticPool: WeaponLayerCircularPool | null): BasicProjectileWeaponPart | null {
        return new BasicProjectileWeaponPart().jinit_BasicProjectileWeaponPart_6(animationInterface, AllBinaryLayer.NULL_ALLBINARY_LAYER, weaponLayerCircularStaticPool, WeaponProperties.NULL_WEAPON_PROPERTIES, NoScoreable.getInstance(), RelativeRelationship.NULL_RELATIVE_RELATIONSHIP);
    }
    

    jinit_BasicProjectileWeaponPart_6(animationInterface: Animation | null, sourceLayerInterface: AllBinaryLayer | null, weaponLayerCircularStaticPool: WeaponLayerCircularPool | null, weaponProperties: WeaponProperties | null, scoreableInterface: ScoreableInterface | null, relativeRelationship: RelativeRelationship | null): BasicProjectileWeaponPart {
        super.jinit_BasicWeaponPart_5(animationInterface, sourceLayerInterface, weaponProperties, scoreableInterface, relativeRelationship);
        this.jfields_BasicProjectileWeaponPart();
        this.weaponLayerCircularStaticPool = weaponLayerCircularStaticPool;
        return this;
    }
    

    processScore(allbinaryLayerManager: AllBinaryLayerManager | null, angle: i16, otherAngle: i16, weaponProperties: WeaponProperties | null, scoreableInterface: ScoreableInterface | null): void {
        let weaponLayer: WeaponLayer | null = this.weaponLayerCircularStaticPool!.getInstanceWeaponLayer(this.getOwnerLayerInterface(), this.relativeRelationship!.getX(), this.relativeRelationship!.getY(), this.relativeRelationship!.getZ(), (<i32>(angle)), (<i32>(otherAngle)), weaponProperties, scoreableInterface); if (JThrowable.pending !== null) return;
        allbinaryLayerManager!.append(weaponLayer); if (JThrowable.pending !== null) return;
    }
}

