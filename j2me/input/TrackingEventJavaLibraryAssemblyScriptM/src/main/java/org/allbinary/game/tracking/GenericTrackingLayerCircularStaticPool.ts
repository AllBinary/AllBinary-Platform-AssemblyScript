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
// package org.allbinary.game.tracking
// import org.allbinary.layer.AllBinaryLayerCircularPool

@global export class GenericTrackingLayerCircularStaticPool extends AllBinaryLayerCircularPool {

    jclassName(): string {
        return "org.allbinary.game.tracking.GenericTrackingLayerCircularStaticPool";
    }
    @lazy static jv_SINGLETON: GenericTrackingLayerCircularStaticPool | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): GenericTrackingLayerCircularStaticPool | null {
        if (!GenericTrackingLayerCircularStaticPool.js_SINGLETON) {
            GenericTrackingLayerCircularStaticPool.js_SINGLETON = true;
            GenericTrackingLayerCircularStaticPool.jv_SINGLETON = new GenericTrackingLayerCircularStaticPool().jinit_GenericTrackingLayerCircularStaticPool_0();
        }
        return GenericTrackingLayerCircularStaticPool.jv_SINGLETON;
    }
    static set SINGLETON(value: GenericTrackingLayerCircularStaticPool | null) {
        GenericTrackingLayerCircularStaticPool.js_SINGLETON = true;
        GenericTrackingLayerCircularStaticPool.jv_SINGLETON = value;
    }
    

    jinit_GenericTrackingLayerCircularStaticPool_0(): GenericTrackingLayerCircularStaticPool {
        super.jinit_AllBinaryLayerCircularPool_0();
        return this;
    }
    

    static getInstance(): GenericTrackingLayerCircularStaticPool | null {
        return GenericTrackingLayerCircularStaticPool.SINGLETON;
    }
}

