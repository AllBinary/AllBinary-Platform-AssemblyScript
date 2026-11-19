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
// import org.allbinary.media.ScaleProperties

@global export class VectorAnimationInterfaceFactory extends JObject implements AnimationInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.VectorAnimationInterfaceFactory";
    }
    currentPoints: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null = null;
    basicColor: BasicColor | null = null;
    animationBehaviorFactory: AnimationBehaviorFactory | null = null;

    jfields_VectorAnimationInterfaceFactory(): void {
    
    this.basicColor = BasicColorFactory.getInstance()!.WHITE;
    
    }
    

    jinit_VectorAnimationInterfaceFactory_3(currentPoints: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null, basicColor: BasicColor | null, animationBehaviorFactory: AnimationBehaviorFactory | null): VectorAnimationInterfaceFactory {
        super.jinit_JObject_0();
        this.jfields_VectorAnimationInterfaceFactory();
        this.currentPoints = currentPoints;
        this.setBasicColorP(basicColor); if (JThrowable.pending !== null) return this;
        this.animationBehaviorFactory = animationBehaviorFactory;
        return this;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        return new VectorAnimation().jinit_VectorAnimation_3(this.currentPoints, this.getBasicColorP(), this.animationBehaviorFactory!.getOrCreateInstance());
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

