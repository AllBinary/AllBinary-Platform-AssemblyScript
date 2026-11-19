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
// import org.allbinary.game.layer.CollidableCompositeLayer
// import org.allbinary.layer.AllBinaryLayer

@global export class SourceCollisionHelper extends CollisionHelper {

    jclassName(): string {
        return "org.allbinary.game.collision.SourceCollisionHelper";
    }
    

    jinit_SourceCollisionHelper_1(layerInterface: AllBinaryLayer | null): SourceCollisionHelper {
        super.jinit_CollisionHelper_1(layerInterface);
        return this;
    }
    

    isCollidable(layerInterface: CollidableCompositeLayer | null): bool {
        if (this.sourceLayerInterface != layerInterface) {
            return true;
        }
        return false;
    }
}

