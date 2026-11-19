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
// package org.allbinary.game.collision.layer
// import org.allbinary.game.collision.CollidableInterfaceCompositeInterface
// import org.allbinary.game.layer.CollidableCompositeLayer
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.layer.LayerProcessor

@global export class CollidableInterfaceLayerProcessor extends LayerProcessor {

    jclassName(): string {
        return "org.allbinary.game.collision.layer.CollidableInterfaceLayerProcessor";
    }
    

    jinit_CollidableInterfaceLayerProcessor_0(): CollidableInterfaceLayerProcessor {
        super.jinit_LayerProcessor_1(new CollidableInterfaceLayerManager().jinit_CollidableInterfaceLayerManager_0());
        return this;
    }
    

    processAt(allBinaryLayerManager: AllBinaryLayerManager | null, layerInterface: AllBinaryLayer | null, index: i32): void {
        let collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface | null = changetype<CollidableInterfaceCompositeInterface | null>(layerInterface);
        if (collidableInterfaceCompositeInterface!.getCollidableInferface()!.isCollidable(changetype<CollidableCompositeLayer | null>(collidableInterfaceCompositeInterface))) {
            AllBinaryCollisionManager.getInstance()!.process(this.getLayerManager(), collidableInterfaceCompositeInterface, index); if (JThrowable.pending !== null) return;
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

