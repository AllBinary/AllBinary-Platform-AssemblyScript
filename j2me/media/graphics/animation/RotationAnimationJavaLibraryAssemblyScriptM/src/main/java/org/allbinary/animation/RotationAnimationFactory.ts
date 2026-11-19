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
// import org.allbinary.game.configuration.GameConfigurationCentral
// import org.allbinary.math.AngleFactory
// import org.allbinary.math.AngleInfo
// import org.allbinary.media.ScaleProperties

@global export class RotationAnimationFactory extends JObject implements AnimationInterfaceFactoryInterface, ProceduralAnimationInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.RotationAnimationFactory";
    }
    totalAngle: i16 = 0;
    angleIncrement: i16 = 0;

    jfields_RotationAnimationFactory(): void {
    
    
    }
    

    static createFactory(): RotationAnimationFactory | null {
        let totalAngle: i16 = AngleFactory.getInstance()!.TOTAL_ANGLE; if (JThrowable.pending !== null) return null;
        return new RotationAnimationFactory().jinit_RotationAnimationFactory_2(totalAngle, (<i16>(((<i32>(totalAngle)) / GameConfigurationCentral.getInstance()!.getGameControlFidelity()))));
    }
    

    jinit_RotationAnimationFactory_2(totalAngle: i16, angleIncrement: i16): RotationAnimationFactory {
        super.jinit_JObject_0();
        this.jfields_RotationAnimationFactory();
        this.totalAngle = totalAngle;
        this.angleIncrement = angleIncrement;
        return this;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        return NullRotationAnimation.createTotalAngle(AngleInfo.getInstance1(this.angleIncrement), this.totalAngle, AnimationBehavior.getInstance());
    }
    

    getInstanceAnimation(animationInterface: Animation | null): Animation | null {
        return NullRotationAnimation.createTotalAngle(AngleInfo.getInstance1(this.angleIncrement), this.totalAngle, AnimationBehavior.getInstance());
    }
    

    setInitialScale(scaleProperties: ScaleProperties | null): void {
    }
}

