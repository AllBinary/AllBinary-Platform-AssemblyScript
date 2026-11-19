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
// import org.allbinary.animation.Animation
// import org.allbinary.animation.NullAnimationFactory
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.BasicArrayList

@global export class CountedPickedUpLayerInterfaceFactory extends PickedUpLayerInterfaceFactory implements CountedPickedUpLayerInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.game.layer.pickup.CountedPickedUpLayerInterfaceFactory";
    }
    @lazy static jv_NULL_COUNTED_PICKUP_LAYER_FACTORY: CountedPickedUpLayerInterfaceFactory | null = null;
    @lazy static js_NULL_COUNTED_PICKUP_LAYER_FACTORY: bool = false;
    static get NULL_COUNTED_PICKUP_LAYER_FACTORY(): CountedPickedUpLayerInterfaceFactory | null {
        if (!CountedPickedUpLayerInterfaceFactory.js_NULL_COUNTED_PICKUP_LAYER_FACTORY) {
            CountedPickedUpLayerInterfaceFactory.js_NULL_COUNTED_PICKUP_LAYER_FACTORY = true;
            CountedPickedUpLayerInterfaceFactory.jv_NULL_COUNTED_PICKUP_LAYER_FACTORY = new CountedPickedUpLayerInterfaceFactory().jinit_CountedPickedUpLayerInterfaceFactory_3(PickedUpLayerTypeFactory.getInstance()!.NONE, IconLayer.NULL_ICON_LAYER, NullAnimationFactory.getFactoryInstance()!.getInstance1(0));
        }
        return CountedPickedUpLayerInterfaceFactory.jv_NULL_COUNTED_PICKUP_LAYER_FACTORY;
    }
    static set NULL_COUNTED_PICKUP_LAYER_FACTORY(value: CountedPickedUpLayerInterfaceFactory | null) {
        CountedPickedUpLayerInterfaceFactory.js_NULL_COUNTED_PICKUP_LAYER_FACTORY = true;
        CountedPickedUpLayerInterfaceFactory.jv_NULL_COUNTED_PICKUP_LAYER_FACTORY = value;
    }
    id: i32 = 0;

    jfields_CountedPickedUpLayerInterfaceFactory(): void {
    
    }
    

    jinit_CountedPickedUpLayerInterfaceFactory_3(pickeUpLayerType: PickedUpLayerType | null, iconLayer: IconLayer | null, animationInterface: Animation | null): CountedPickedUpLayerInterfaceFactory {
        super.jinit_PickedUpLayerInterfaceFactory_3(pickeUpLayerType, iconLayer, animationInterface);
        this.jfields_CountedPickedUpLayerInterfaceFactory();
        let list: BasicArrayList | null = CountedPickedUpLayerInterfaceFactoryPool.getInstance()!.getList(); if (JThrowable.pending !== null) return this;
        this.id = list!.size(); if (JThrowable.pending !== null) return this;
        list!.add(this); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getNextInstance(hashtable: ABHashtable | null, x: i32, y: i32, z: i32): AllBinaryLayer | null {
        { JThrowable.raise(new JException().jinit_JException_1(CommonStrings.getInstance()!.NOT_IMPLEMENTED)); return null; }
        return null;
    }
    

    getTotal(): i32 {
        return -1;
    }
    

    getId(): i32 {
        return this.id;
    }
}

