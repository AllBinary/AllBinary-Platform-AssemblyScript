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
// import org.allbinary.logic.NullUtil
// import org.allbinary.vector.VectorInfo

@global export class IndependentVectorExplosionRotationAnimationFactory extends JObject implements ProceduralAnimationInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.IndependentVectorExplosionRotationAnimationFactory";
    }
    framePoints: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null = null;
    vectorInfo: VectorInfo | null = null;
    basicColor: BasicColor | null = null;
    vectorAnimationFactoryInterface: VectorAnimationFactoryInterface | null = null;
    vectorExplosionGenerator: VectorExplosionGenerator | null = null;

    jfields_IndependentVectorExplosionRotationAnimationFactory(): void {
    this.framePoints = NullUtil.getInstance()!.NULL_INT_ARRAY_ARRAY_ARRAY;
    
    
    
    this.vectorExplosionGenerator = VectorExplosionGenerator.getInstance();
    }
    

    jinit_IndependentVectorExplosionRotationAnimationFactory_3(vectorInfo: VectorInfo | null, basicColor: BasicColor | null, vectorAnimationFactoryInterface: VectorAnimationFactoryInterface | null): IndependentVectorExplosionRotationAnimationFactory {
        super.jinit_JObject_0();
        this.jfields_IndependentVectorExplosionRotationAnimationFactory();
        this.vectorInfo = vectorInfo;
        this.basicColor = basicColor;
        this.vectorAnimationFactoryInterface = vectorAnimationFactoryInterface;
        this.init(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    init(): void {
        this.framePoints = VectorRotationGenerator.getInstance()!.getInstance1(this.vectorInfo); if (JThrowable.pending !== null) return;
    }
    

    getInstanceAnimation(animationInterface: Animation | null): Animation | null {
        let frame: i32 = 0;
        if (animationInterface != null) {
            let rotationAnimationInterface: IndexedAnimation | null = changetype<IndexedAnimation | null>(animationInterface);
            frame = rotationAnimationInterface!.getFrame(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        let points: StaticArray<StaticArray<StaticArray<i32> | null> | null> | null = this.vectorExplosionGenerator!.getInstance3(this.framePoints![frame], 6, this.vectorExplosionGenerator!.ROTATION); if (JThrowable.pending !== null) return null;
        return this.vectorAnimationFactoryInterface!.getInstance2(points, this.basicColor);
    }
}

