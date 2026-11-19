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
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class CountedPickedUpLayerInterfaceFactoryPool extends JObject {

    jclassName(): string {
        return "org.allbinary.game.layer.pickup.CountedPickedUpLayerInterfaceFactoryPool";
    }
    @lazy static jv_SINGLETON: CountedPickedUpLayerInterfaceFactoryPool | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): CountedPickedUpLayerInterfaceFactoryPool | null {
        if (!CountedPickedUpLayerInterfaceFactoryPool.js_SINGLETON) {
            CountedPickedUpLayerInterfaceFactoryPool.js_SINGLETON = true;
            CountedPickedUpLayerInterfaceFactoryPool.jv_SINGLETON = new CountedPickedUpLayerInterfaceFactoryPool().jinit_CountedPickedUpLayerInterfaceFactoryPool_0();
        }
        return CountedPickedUpLayerInterfaceFactoryPool.jv_SINGLETON;
    }
    static set SINGLETON(value: CountedPickedUpLayerInterfaceFactoryPool | null) {
        CountedPickedUpLayerInterfaceFactoryPool.js_SINGLETON = true;
        CountedPickedUpLayerInterfaceFactoryPool.jv_SINGLETON = value;
    }
    list: BasicArrayList | null = null;

    jfields_CountedPickedUpLayerInterfaceFactoryPool(): void {
    
    }
    

    jinit_CountedPickedUpLayerInterfaceFactoryPool_0(): CountedPickedUpLayerInterfaceFactoryPool {
        super.jinit_JObject_0();
        this.jfields_CountedPickedUpLayerInterfaceFactoryPool();
        this.list = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getList(): BasicArrayList | null {
        return this.list;
    }
    

    static getInstance(): CountedPickedUpLayerInterfaceFactoryPool | null {
        return CountedPickedUpLayerInterfaceFactoryPool.SINGLETON;
    }
    

    static init(): void {
        CountedPickedUpLayerInterfaceFactoryPool.SINGLETON = new CountedPickedUpLayerInterfaceFactoryPool().jinit_CountedPickedUpLayerInterfaceFactoryPool_0(); if (JThrowable.pending !== null) return;
    }
}

