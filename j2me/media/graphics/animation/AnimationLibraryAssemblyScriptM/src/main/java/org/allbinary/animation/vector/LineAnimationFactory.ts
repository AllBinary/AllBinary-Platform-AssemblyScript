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
// package org.allbinary.animation.vector
// import org.allbinary.animation.Animation
// import org.allbinary.animation.AnimationInterfaceFactoryInterface
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.media.ScaleProperties

@global export class LineAnimationFactory extends JObject implements AnimationInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.vector.LineAnimationFactory";
    }
    basicColor: BasicColor | null = null;

    jfields_LineAnimationFactory(): void {
    
    }
    

    jinit_LineAnimationFactory_1(basicColor: BasicColor | null): LineAnimationFactory {
        super.jinit_JObject_0();
        this.jfields_LineAnimationFactory();
        this.basicColor = basicColor;
        return this;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        return new LineAnimation().jinit_LineAnimation_1(this.basicColor);
    }
    

    setInitialScale(scaleProperties: ScaleProperties | null): void {
    }
}

