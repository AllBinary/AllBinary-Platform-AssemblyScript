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
// import org.allbinary.game.collision.CollidableInterfaceCompositeInterface
// import org.allbinary.game.collision.CollisionType
// import org.allbinary.game.collision.CollisionTypeFactory
// import org.allbinary.game.layer.CollidableCompositeLayer
// import org.allbinary.game.layer.pickup.PickedUpLayerInterface
// import org.allbinary.logic.communication.log.ForcedLogUtil

@global export class CollidableCharacterBehavior extends CollidableDestroyableDamageableBehavior {

    jclassName(): string {
        return "org.allbinary.game.layer.special.CollidableCharacterBehavior";
    }
    

    jinit_CollidableCharacterBehavior_1(collidable: bool): CollidableCharacterBehavior {
        super.jinit_CollidableDestroyableDamageableBehavior_1(collidable);
        return this;
    }
    

    collide(ownerLayer: CollidableCompositeLayer | null, collidableInterfaceCompositeInterface: CollidableCompositeLayer | null): void {
        let collisionTypeFactory: CollisionTypeFactory | null = CollisionTypeFactory.getInstance(); if (JThrowable.pending !== null) return;
        let collisionType: CollisionType | null = collidableInterfaceCompositeInterface!.getCollidableInferface()!.getCollisionTypeWith(ownerLayer); if (JThrowable.pending !== null) return;
        if (collisionType == collisionTypeFactory!.PICKUP) {
            let collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer | null = changetype<CollidableDestroyableDamageableLayer | null>(ownerLayer);
            collidableDestroyableDamageableLayer!.getPickupBehavior()!.doPickupLayer(changetype<PickedUpLayerInterface | null>(collidableInterfaceCompositeInterface)); if (JThrowable.pending !== null) return;
        } else {
            super.collide(ownerLayer, collidableInterfaceCompositeInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    collideInterface(ownerLayer: CollidableCompositeLayer | null, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface | null): void {
        ForcedLogUtil.log(this.commonStrings!.NOT_IMPLEMENTED, this); if (JThrowable.pending !== null) return;
    }
}

