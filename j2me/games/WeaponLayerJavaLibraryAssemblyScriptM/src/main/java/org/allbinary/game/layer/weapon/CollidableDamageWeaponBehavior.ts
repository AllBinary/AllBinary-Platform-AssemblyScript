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
// import org.allbinary.game.collision.CollidableHelperFactory
// import org.allbinary.game.collision.CollidableInterfaceCompositeInterface
// import org.allbinary.game.collision.CollisionHelper
// import org.allbinary.game.collision.CollisionType
// import org.allbinary.game.collision.CollisionTypeFactory
// import org.allbinary.game.combat.damage.DamageableInterface
// import org.allbinary.game.layer.CollidableCompositeLayer
// import org.allbinary.game.layer.special.CollidableDestroyableDamageableBehavior
// import org.allbinary.layer.AllBinaryLayer

@global export class CollidableDamageWeaponBehavior extends CollidableDestroyableDamageableBehavior {

    jclassName(): string {
        return "org.allbinary.game.layer.weapon.CollidableDamageWeaponBehavior";
    }
    collided: bool = false;
    collisionHelper: CollisionHelper | null = null;

    jfields_CollidableDamageWeaponBehavior(): void {
    this.collided = false;
    
    }
    

    jinit_CollidableDamageWeaponBehavior_1(collidable: bool): CollidableDamageWeaponBehavior {
        super.jinit_CollidableDestroyableDamageableBehavior_1(collidable);
        this.jfields_CollidableDamageWeaponBehavior();
        this.setCollided(false); if (JThrowable.pending !== null) return this;
        this.setCollidable(true); if (JThrowable.pending !== null) return this;
        this.collisionHelper = CollidableHelperFactory.getInstance(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    init(sourceLayerInterface: AllBinaryLayer | null): void {
        this.setCollided(false); if (JThrowable.pending !== null) return;
        this.collisionHelper!.setOwnerLayerInterface(sourceLayerInterface); if (JThrowable.pending !== null) return;
    }
    

    isCollision(ownerLayer: CollidableCompositeLayer | null, collisionLayer: CollidableCompositeLayer | null): bool {
        if (this.collisionHelper!.isCollidable(collisionLayer)) {
            if (ownerLayer!.getGroupInterface()![0] != collisionLayer!.getGroupInterface()![0]) {
                return super.isCollision(ownerLayer, collisionLayer);
            } if (JThrowable.pending !== null) return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    collide(ownerLayer: CollidableCompositeLayer | null, collisionLayer: CollidableCompositeLayer | null): void {
        super.collide(ownerLayer, collisionLayer); if (JThrowable.pending !== null) return;
        this.collided = true;
    }
    

    isCollisionInterface(ownerLayer: CollidableCompositeLayer | null, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface | null): bool {
        if (this.collisionHelper!.isCollidable(changetype<CollidableCompositeLayer | null>(collidableInterfaceCompositeInterface))) {
            let layerInterface: AllBinaryLayer | null = changetype<AllBinaryLayer | null>(collidableInterfaceCompositeInterface);
            if (ownerLayer!.getGroupInterface()![0] != layerInterface!.getGroupInterface()![0]) {
                if (this.layerCollisionUtil!.isCollision(ownerLayer, layerInterface)) {
                    return true;
                } if (JThrowable.pending !== null) return false;
            } if (JThrowable.pending !== null) return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    collideInterface(ownerLayer: CollidableCompositeLayer | null, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface | null): void {
        this.damageUtil!.process(changetype<DamageableInterface | null>(ownerLayer), changetype<DamageableInterface | null>(collidableInterfaceCompositeInterface)); if (JThrowable.pending !== null) return;
        this.collided = true;
    }
    

    getCollisionTypeWith(layerInterface: AllBinaryLayer | null): CollisionType | null {
        return CollisionTypeFactory.getInstance()!.COLLISION;
    }
    

    isCollided(): bool {
        return this.collided;
    }
    

    setCollided(collided: bool): void {
        this.collided = collided;
    }
}

