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
// import org.allbinary.game.collision.CollidableBaseBehavior
// import org.allbinary.game.collision.CollidableInterfaceCompositeInterface
// import org.allbinary.game.layer.CollidableCompositeLayer
// import org.allbinary.layer.LayerManager

@global export class AllBinaryCollisionManager extends JObject {

    jclassName(): string {
        return "org.allbinary.game.collision.layer.AllBinaryCollisionManager";
    }
    @lazy static jv_allBinaryCollisionManager: AllBinaryCollisionManager | null = null;
    @lazy static js_allBinaryCollisionManager: bool = false;
    static get allBinaryCollisionManager(): AllBinaryCollisionManager | null {
        if (!AllBinaryCollisionManager.js_allBinaryCollisionManager) {
            AllBinaryCollisionManager.js_allBinaryCollisionManager = true;
            AllBinaryCollisionManager.jv_allBinaryCollisionManager = new AllBinaryCollisionManager().jinit_AllBinaryCollisionManager_0();
        }
        return AllBinaryCollisionManager.jv_allBinaryCollisionManager;
    }
    static set allBinaryCollisionManager(value: AllBinaryCollisionManager | null) {
        AllBinaryCollisionManager.js_allBinaryCollisionManager = true;
        AllBinaryCollisionManager.jv_allBinaryCollisionManager = value;
    }
    

    jinit_AllBinaryCollisionManager_0(): AllBinaryCollisionManager {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): AllBinaryCollisionManager | null {
        return AllBinaryCollisionManager.allBinaryCollisionManager;
    }
    

    process(layerManager: LayerManager | null, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface | null, startIndex: i32): void {
        let size: i32 = layerManager!.getSize(); if (JThrowable.pending !== null) return;
        for (let index: i32 = startIndex + 1; index < size; index++) {
            let collidableInterfaceCompositeInterface2: CollidableInterfaceCompositeInterface | null = changetype<CollidableInterfaceCompositeInterface | null>(layerManager!.getLayerAt(index)); if (JThrowable.pending !== null) return;
            this.collide(layerManager, collidableInterfaceCompositeInterface, collidableInterfaceCompositeInterface2); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    collide(layerManager: LayerManager | null, collidableInterfaceCompositeInterface: CollidableInterfaceCompositeInterface | null, collidableInterfaceCompositeInterface2: CollidableInterfaceCompositeInterface | null): void {
        let collidableBase2: CollidableBaseBehavior | null = collidableInterfaceCompositeInterface2!.getCollidableInferface(); if (JThrowable.pending !== null) return;
        let collidableBase: CollidableBaseBehavior | null = collidableInterfaceCompositeInterface!.getCollidableInferface(); if (JThrowable.pending !== null) return;
        if (collidableBase2!.isCollidable(changetype<CollidableCompositeLayer | null>(collidableInterfaceCompositeInterface))) {
            if (collidableBase!.isCollisionInterface(changetype<CollidableCompositeLayer | null>(collidableInterfaceCompositeInterface), collidableInterfaceCompositeInterface2)) {
                collidableBase!.collideInterface(changetype<CollidableCompositeLayer | null>(collidableInterfaceCompositeInterface), collidableInterfaceCompositeInterface2); if (JThrowable.pending !== null) return;
                collidableBase2!.collideInterface(changetype<CollidableCompositeLayer | null>(collidableInterfaceCompositeInterface), collidableInterfaceCompositeInterface); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

