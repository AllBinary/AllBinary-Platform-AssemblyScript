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
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.layer.LayerManager
// import org.allbinary.layer.LayerProcessor

@global export class OptimizedAllBinaryCollisionLayerProcessorForCollidableLayer extends LayerProcessor {

    jclassName(): string {
        return "org.allbinary.game.collision.OptimizedAllBinaryCollisionLayerProcessorForCollidableLayer";
    }
    

    jinit_OptimizedAllBinaryCollisionLayerProcessorForCollidableLayer_0(): OptimizedAllBinaryCollisionLayerProcessorForCollidableLayer {
        super.jinit_LayerProcessor_1(new OptimizedAllBinaryCollisionLayerManager().jinit_OptimizedAllBinaryCollisionLayerManager_0());
        return this;
    }
    

    processAt(allBinaryLayerManager: AllBinaryLayerManager | null, layerInterface: AllBinaryLayer | null, startIndex: i32): void {
        let collidableInterfaceCompositeInterface: CollidableCompositeLayer | null = changetype<CollidableCompositeLayer | null>(layerInterface);
        let collidableBase: CollidableBaseBehavior | null = collidableInterfaceCompositeInterface!.getCollidableInferface(); if (JThrowable.pending !== null) return;
        if (collidableBase!.isCollidable(collidableInterfaceCompositeInterface)) {
            let layerManager: LayerManager | null = this.getLayerManager(); if (JThrowable.pending !== null) return;
            let size: i32 = layerManager!.getSize(); if (JThrowable.pending !== null) return;
            let collidableInterfaceCompositeInterface2: CollidableCompositeLayer | null = null;
            let collidableBase2: CollidableBaseBehavior | null = null;
            for (let index: i32 = startIndex + 1; index < size; index++) {
                collidableInterfaceCompositeInterface2 = changetype<CollidableCompositeLayer | null>(layerManager!.getLayerAt(index)); if (JThrowable.pending !== null) return;
                collidableBase2 = collidableInterfaceCompositeInterface2!.getCollidableInferface(); if (JThrowable.pending !== null) return;
                if (collidableBase2!.isCollidable(collidableInterfaceCompositeInterface) && collidableBase!.isCollision(collidableInterfaceCompositeInterface, collidableInterfaceCompositeInterface2)) {
                    collidableBase!.collide(collidableInterfaceCompositeInterface, collidableInterfaceCompositeInterface2); if (JThrowable.pending !== null) return;
                    collidableBase2!.collide(collidableInterfaceCompositeInterface2, collidableInterfaceCompositeInterface); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    isProcessorLayer(layerInterface: AllBinaryLayer | null): bool {
        if (layerInterface!.implmentsCollidableInterface()) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
}

