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

@global export class VectorExplosionAnimationFactory extends JObject implements ProceduralAnimationInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.VectorExplosionAnimationFactory";
    }
    vectorExplosionGenerator: VectorExplosionGenerator | null = null;
    basicColor: BasicColor | null = null;
    animationBehaviorFactory: AnimationBehaviorFactory | null = null;

    jfields_VectorExplosionAnimationFactory(): void {
    this.vectorExplosionGenerator = VectorExplosionGenerator.getInstance();
    this.basicColor = BasicColorFactory.getInstance()!.WHITE;
    
    }
    

    jinit_VectorExplosionAnimationFactory_2(basicColor: BasicColor | null, animationBehaviorFactory: AnimationBehaviorFactory | null): VectorExplosionAnimationFactory {
        super.jinit_JObject_0();
        this.jfields_VectorExplosionAnimationFactory();
        this.animationBehaviorFactory = animationBehaviorFactory;
        this.setBasicColorP(basicColor); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getInstanceAnimation(animationInterface: Animation | null): Animation | null {
        let vectorRotationAnimationInterface: VectorAnimationInterface | null = changetype<VectorAnimationInterface | null>(animationInterface);
        let frame: i32 = vectorRotationAnimationInterface!.getFrame(); if (JThrowable.pending !== null) return null;
        let framePoints: StaticArray<StaticArray<i32> | null> | null = vectorRotationAnimationInterface!.getPoints(frame); if (JThrowable.pending !== null) return null;
        let points: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null = this.vectorExplosionGenerator!.getInstance3(framePoints, 6, this.vectorExplosionGenerator!.ROTATION); if (JThrowable.pending !== null) return null;
        return new VectorRotationAnimation().jinit_VectorRotationAnimation_3(points, this.getBasicColorP(), this.animationBehaviorFactory!.getOrCreateInstance());
    }
    

    setBasicColorP(basicColor: BasicColor | null): void {
        this.basicColor = basicColor;
    }
    

    getBasicColorP(): BasicColor | null {
        return this.basicColor;
    }
}

