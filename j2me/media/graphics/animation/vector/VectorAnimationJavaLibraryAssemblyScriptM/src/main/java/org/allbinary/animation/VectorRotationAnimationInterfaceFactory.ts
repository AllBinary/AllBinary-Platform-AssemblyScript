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
// package org.allbinary.animation
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.logic.NullUtil
// import org.allbinary.media.ScaleProperties

@global export class VectorRotationAnimationInterfaceFactory extends JObject implements AnimationInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.VectorRotationAnimationInterfaceFactory";
    }
    currentPoints: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null = null;
    basicColor: BasicColor | null = null;
    animationBehaviorFactory: AnimationBehaviorFactory | null = null;

    jfields_VectorRotationAnimationInterfaceFactory(): void {
    this.currentPoints = NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY_ARRAY;
    this.basicColor = BasicColorFactory.getInstance()!.WHITE;
    
    }
    

    jinit_VectorRotationAnimationInterfaceFactory_3(currentPoints: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null, basicColor: BasicColor | null, animationBehaviorFactory: AnimationBehaviorFactory | null): VectorRotationAnimationInterfaceFactory {
        super.jinit_JObject_0();
        this.jfields_VectorRotationAnimationInterfaceFactory();
        this.currentPoints = currentPoints;
        this.setBasicColorP(basicColor); if (JThrowable.pending !== null) return this;
        this.animationBehaviorFactory = animationBehaviorFactory;
        return this;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        return new VectorRotationAnimation().jinit_VectorRotationAnimation_3(this.currentPoints, this.getBasicColorP(), this.animationBehaviorFactory!.getOrCreateInstance());
    }
    

    setBasicColorP(basicColor: BasicColor | null): void {
        this.basicColor = basicColor;
    }
    

    getBasicColorP(): BasicColor | null {
        return this.basicColor;
    }
    

    setInitialScale(scaleProperties: ScaleProperties | null): void {
    }
}

