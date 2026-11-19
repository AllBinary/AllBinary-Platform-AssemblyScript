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
// package org.allbinary.game.layer.special
// import org.allbinary.game.collision.CollidableBaseBehavior
// import org.allbinary.game.collision.CollidableInterfaceCompositeInterface
// import org.allbinary.game.combat.damage.DamageUtil
// import org.allbinary.game.layer.CollidableCompositeLayer
// import org.allbinary.logic.communication.log.ForcedLogUtil

@global export class CollidableDestroyableDamageableBehavior extends CollidableBaseBehavior {

    jclassName(): string {
        return "org.allbinary.game.layer.special.CollidableDestroyableDamageableBehavior";
    }
    damageUtil: DamageUtil | null = null;

    jfields_CollidableDestroyableDamageableBehavior(): void {
    this.damageUtil = DamageUtil.getInstance();
    }
    

    jinit_CollidableDestroyableDamageableBehavior_1(collidable: bool): CollidableDestroyableDamageableBehavior {
        super.jinit_CollidableBaseBehavior_1(collidable);
        this.jfields_CollidableDestroyableDamageableBehavior();
        return this;
    }
    

    isCollision(ownerLayer: CollidableCompositeLayer | null, collisionLayer: CollidableCompositeLayer | null): bool {
        if (ownerLayer!.getGroupInterface()![0] != collisionLayer!.getGroupInterface()![0]) {
            return super.isCollision(ownerLayer, collisionLayer);
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    collide(ownerLayer: CollidableCompositeLayer | null, collidableInterfaceCompositeInterface: CollidableCompositeLayer | null): void {
        let ownerCollidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer | null = changetype<CollidableDestroyableDamageableLayer | null>(ownerLayer);
        let collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer | null = changetype<CollidableDestroyableDamageableLayer | null>(collidableInterfaceCompositeInterface);
        ownerCollidableDestroyableDamageableLayer!.damage(collidableDestroyableDamageableLayer!.getDamage(0), 0); if (JThrowable.pending !== null) return;
    }
    

    isCollisionInterface(ownerLayer: CollidableCompositeLayer | null, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface | null): bool {
        ForcedLogUtil.log("No Longer Used", this); if (JThrowable.pending !== null) return false;
        return false;
    }
    

    collideInterface(ownerLayer: CollidableCompositeLayer | null, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface | null): void {
        ForcedLogUtil.log("No Longer Used", this); if (JThrowable.pending !== null) return;
    }
}

