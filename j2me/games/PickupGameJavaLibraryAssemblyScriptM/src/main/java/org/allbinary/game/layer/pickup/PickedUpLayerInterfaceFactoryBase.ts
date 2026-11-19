/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// import org.allbinary.layer.AllBinaryLayer

@global export class PickedUpLayerInterfaceFactoryBase extends JObject implements PickedUpLayerInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.game.layer.pickup.PickedUpLayerInterfaceFactoryBase";
    }
    @lazy static jv_NULL_PICKED_UP_LAYER_FACTORY_BASE: PickedUpLayerInterfaceFactoryBase | null = null;
    @lazy static js_NULL_PICKED_UP_LAYER_FACTORY_BASE: bool = false;
    static get NULL_PICKED_UP_LAYER_FACTORY_BASE(): PickedUpLayerInterfaceFactoryBase | null {
        if (!PickedUpLayerInterfaceFactoryBase.js_NULL_PICKED_UP_LAYER_FACTORY_BASE) {
            PickedUpLayerInterfaceFactoryBase.js_NULL_PICKED_UP_LAYER_FACTORY_BASE = true;
            PickedUpLayerInterfaceFactoryBase.jv_NULL_PICKED_UP_LAYER_FACTORY_BASE = new PickedUpLayerInterfaceFactoryBase().jinit_PickedUpLayerInterfaceFactoryBase_0();
        }
        return PickedUpLayerInterfaceFactoryBase.jv_NULL_PICKED_UP_LAYER_FACTORY_BASE;
    }
    static set NULL_PICKED_UP_LAYER_FACTORY_BASE(value: PickedUpLayerInterfaceFactoryBase | null) {
        PickedUpLayerInterfaceFactoryBase.js_NULL_PICKED_UP_LAYER_FACTORY_BASE = true;
        PickedUpLayerInterfaceFactoryBase.jv_NULL_PICKED_UP_LAYER_FACTORY_BASE = value;
    }

    jinit_PickedUpLayerInterfaceFactoryBase_0(): PickedUpLayerInterfaceFactoryBase {
        super.jinit_JObject_0();
        return this;
    }
    

    getIconLayer(): AllBinaryLayer | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    getAnimationInterface(): Animation | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    getPickedUpLayerType(): PickedUpLayerType | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
}

