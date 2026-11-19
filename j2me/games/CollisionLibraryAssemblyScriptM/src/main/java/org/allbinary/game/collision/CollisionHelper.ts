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

@global export class CollisionHelper extends JObject {

    jclassName(): string {
        return "org.allbinary.game.collision.CollisionHelper";
    }
    sourceLayerInterface: AllBinaryLayer | null = null;

    jfields_CollisionHelper(): void {
    
    }
    

    jinit_CollisionHelper_1(sourceLayerInterface: AllBinaryLayer | null): CollisionHelper {
        super.jinit_JObject_0();
        this.jfields_CollisionHelper();
        this.sourceLayerInterface = sourceLayerInterface;
        return this;
    }
    

    isCollidable(layerInterface: CollidableCompositeLayer | null): bool {
        return true;
    }
    

    getOwnerLayerInterface(): AllBinaryLayer | null {
        return this.sourceLayerInterface;
    }
    

    setOwnerLayerInterface(sourceLayerInterface: AllBinaryLayer | null): void {
        this.sourceLayerInterface = sourceLayerInterface;
    }
}

