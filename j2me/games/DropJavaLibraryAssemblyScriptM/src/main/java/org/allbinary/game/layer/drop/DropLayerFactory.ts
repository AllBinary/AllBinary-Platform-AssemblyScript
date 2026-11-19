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
// package org.allbinary.game.layer.drop
// import org.allbinary.game.layer.pickup.PickedUpLayerInterfaceFactoryInterface
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.util.BasicArrayListUtil

@global export class DropLayerFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.layer.drop.DropLayerFactory";
    }
    @lazy static jv_DROP_LAYER_FACTORY: DropLayerFactory | null = null;
    @lazy static js_DROP_LAYER_FACTORY: bool = false;
    static get DROP_LAYER_FACTORY(): DropLayerFactory | null {
        if (!DropLayerFactory.js_DROP_LAYER_FACTORY) {
            DropLayerFactory.js_DROP_LAYER_FACTORY = true;
            DropLayerFactory.jv_DROP_LAYER_FACTORY = new DropLayerFactory().jinit_DropLayerFactory_0();
        }
        return DropLayerFactory.jv_DROP_LAYER_FACTORY;
    }
    static set DROP_LAYER_FACTORY(value: DropLayerFactory | null) {
        DropLayerFactory.js_DROP_LAYER_FACTORY = true;
        DropLayerFactory.jv_DROP_LAYER_FACTORY = value;
    }
    list: BasicArrayList | null = null;
    basicArrayListUtil: BasicArrayListUtil | null = null;

    jfields_DropLayerFactory(): void {
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.basicArrayListUtil = BasicArrayListUtil.getInstance();
    }
    

    jinit_DropLayerFactory_0(): DropLayerFactory {
        super.jinit_JObject_0();
        this.jfields_DropLayerFactory();
        return this;
    }
    

    clear(): void {
        this.list!.clear(); if (JThrowable.pending !== null) return;
    }
    

    static getInstance(): DropLayerFactory | null {
        return DropLayerFactory.DROP_LAYER_FACTORY;
    }
    

    getSize(): i32 {
        return this.list!.size();
    }
    

    getRandomInstance(): PickedUpLayerInterfaceFactoryInterface | null {
        return changetype<PickedUpLayerInterfaceFactoryInterface | null>(this.basicArrayListUtil!.getRandom(this.list));
    }
    

    add(layerInterfaceFactoryInterface: PickedUpLayerInterfaceFactoryInterface | null): void {
        this.list!.add(layerInterfaceFactoryInterface); if (JThrowable.pending !== null) return;
    }
    

    getList(): BasicArrayList | null {
        return this.list;
    }
}

