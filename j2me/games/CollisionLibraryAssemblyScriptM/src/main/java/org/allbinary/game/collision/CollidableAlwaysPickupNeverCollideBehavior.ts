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
// package org.allbinary.game.collision
// import org.allbinary.layer.AllBinaryLayer

@global export class CollidableAlwaysPickupNeverCollideBehavior extends CollidableNeverCollideBehavior {

    jclassName(): string {
        return "org.allbinary.game.collision.CollidableAlwaysPickupNeverCollideBehavior";
    }
    

    jinit_CollidableAlwaysPickupNeverCollideBehavior_0(): CollidableAlwaysPickupNeverCollideBehavior {
        super.jinit_CollidableNeverCollideBehavior_1(true);
        return this;
    }
    

    getCollisionTypeWith(layerInterface: AllBinaryLayer | null): CollisionType | null {
        return CollisionTypeFactory.getInstance()!.PICKUP;
    }
}

