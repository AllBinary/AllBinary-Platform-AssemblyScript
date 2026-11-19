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
// import org.allbinary.layer.AllBinaryLayer

@global export class PickedUpLayerInterfaceFactory extends PickedUpLayerInterfaceFactoryBase {

    jclassName(): string {
        return "org.allbinary.game.layer.pickup.PickedUpLayerInterfaceFactory";
    }
    pickedUpLayerType: PickedUpLayerType | null = null;
    iconLayer: IconLayer | null = null;
    animationInterface: Animation | null = null;

    jfields_PickedUpLayerInterfaceFactory(): void {
    
    
    
    }
    

    jinit_PickedUpLayerInterfaceFactory_3(pickeUpLayerType: PickedUpLayerType | null, iconLayer: IconLayer | null, animationInterface: Animation | null): PickedUpLayerInterfaceFactory {
        super.jinit_PickedUpLayerInterfaceFactoryBase_0();
        this.jfields_PickedUpLayerInterfaceFactory();
        this.pickedUpLayerType = pickeUpLayerType;
        this.animationInterface = animationInterface;
        this.iconLayer = iconLayer;
        return this;
    }
    

    getIconLayer(): AllBinaryLayer | null {
        return this.iconLayer;
    }
    

    getAnimationInterface(): Animation | null {
        return this.animationInterface;
    }
    

    getPickedUpLayerType(): PickedUpLayerType | null {
        return this.pickedUpLayerType;
    }
}

