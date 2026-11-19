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
// package org.allbinary.game.layer.pickup
// import org.allbinary.layer.AllBinaryLayerCircularPool

@global export class PickupLayerCircularStaticPool extends AllBinaryLayerCircularPool {

    jclassName(): string {
        return "org.allbinary.game.layer.pickup.PickupLayerCircularStaticPool";
    }
    @lazy static jv_SINGLETON: PickupLayerCircularStaticPool | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): PickupLayerCircularStaticPool | null {
        if (!PickupLayerCircularStaticPool.js_SINGLETON) {
            PickupLayerCircularStaticPool.js_SINGLETON = true;
            PickupLayerCircularStaticPool.jv_SINGLETON = new PickupLayerCircularStaticPool().jinit_PickupLayerCircularStaticPool_0();
        }
        return PickupLayerCircularStaticPool.jv_SINGLETON;
    }
    static set SINGLETON(value: PickupLayerCircularStaticPool | null) {
        PickupLayerCircularStaticPool.js_SINGLETON = true;
        PickupLayerCircularStaticPool.jv_SINGLETON = value;
    }
    

    jinit_PickupLayerCircularStaticPool_0(): PickupLayerCircularStaticPool {
        super.jinit_AllBinaryLayerCircularPool_0();
        return this;
    }
    

    static getInstance(): PickupLayerCircularStaticPool | null {
        return PickupLayerCircularStaticPool.SINGLETON;
    }
    

    getInstanceXYZ(pickedUpLayerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface | null, x: i32, y: i32, z: i32): PickedUpLayerInterface | null {
        let pickupLayer: PickupLayer | null = changetype<PickupLayer | null>(this.getNextInstance()); if (JThrowable.pending !== null) return null;
        pickupLayer!.initXYZ(x, y, z); if (JThrowable.pending !== null) return null;
        pickupLayer!.init(pickedUpLayerInterfaceFactoryInterface, pickedUpLayerInterfaceFactoryInterface!.getAnimationInterface()); if (JThrowable.pending !== null) return null;
        return pickupLayer;
    }
}

