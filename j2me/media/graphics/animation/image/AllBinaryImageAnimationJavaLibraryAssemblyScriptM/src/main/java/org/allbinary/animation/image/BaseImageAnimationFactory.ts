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
// package org.allbinary.animation.image
// import javax.microedition.lcdui.Image
// import org.allbinary.animation.Animation
// import org.allbinary.animation.AnimationBehaviorFactory
// import org.allbinary.animation.AnimationInterfaceFactoryInterface
// import org.allbinary.animation.NullAnimationFactory
// import org.allbinary.image.AnimationFactoryImageScaleUtil
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.media.ScaleProperties
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonSeps

@global export class BaseImageAnimationFactory extends JObject implements AnimationInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.image.BaseImageAnimationFactory";
    }
    animationFactoryImageScaleUtil: AnimationFactoryImageScaleUtil | null = null;
    image: Image | null = null;
    animationBehaviorFactory: AnimationBehaviorFactory | null = null;
    sequenceArray: StaticArray<i32> | null = null;
    animationFactoryInitializationVisitor: AnimationFactoryInitializationVisitor | null = null;
    scaleProperties: ScaleProperties | null = null;

    jfields_BaseImageAnimationFactory(): void {
    this.animationFactoryImageScaleUtil = AnimationFactoryImageScaleUtil.getInstance();
    
    
    
    
    this.scaleProperties = ScaleProperties.instance;
    }
    

    static createFactoryBase(image: Image | null, sequenceArray: StaticArray<i32> | null, width: i32, height: i32, animationBehaviorFactory: AnimationBehaviorFactory | null): BaseImageAnimationFactory | null {
        return new BaseImageAnimationFactory().jinit_BaseImageAnimationFactory_7(image, sequenceArray, width, height, 0, 0, animationBehaviorFactory);
    }
    

    jinit_BaseImageAnimationFactory_7(image: Image | null, sequenceArray: StaticArray<i32> | null, width: i32, height: i32, dx: i32, dy: i32, animationBehaviorFactory: AnimationBehaviorFactory | null): BaseImageAnimationFactory {
        super.jinit_JObject_0();
        this.jfields_BaseImageAnimationFactory();
        this.animationFactoryInitializationVisitor = new AnimationFactoryInitializationVisitor().jinit_AnimationFactoryInitializationVisitor_0(); if (JThrowable.pending !== null) return this;
        this.image = image;
        this.animationFactoryInitializationVisitor!.width = width;
        this.animationFactoryInitializationVisitor!.height = height;
        this.animationBehaviorFactory = animationBehaviorFactory;
        this.sequenceArray = sequenceArray;
        this.animationFactoryInitializationVisitor!.dx = dx;
        this.animationFactoryInitializationVisitor!.dy = dy;
        return this;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        return NullAnimationFactory.getFactoryInstance()!.getInstance1(instanceId);
    }
    

    getImage(): Image | null {
        return this.image;
    }
    

    getSequenceArray(): StaticArray<i32> | null {
        return this.sequenceArray;
    }
    

    setInitialScale(scaleProperties: ScaleProperties | null): void {
        this.scaleProperties = scaleProperties;
        if (this.scaleProperties!.shouldScale) {
            this.scaleProperties!.scaleWidth = JMath.toInt(((<f32>(this.animationFactoryInitializationVisitor!.width)) * this.scaleProperties!.scaleX));
            this.scaleProperties!.scaleHeight = JMath.toInt(((<f32>(this.animationFactoryInitializationVisitor!.height)) * this.scaleProperties!.scaleY));
        } else {
        }
    }
    

    getAnimationFactoryInitializationVisitorP(): AnimationFactoryInitializationVisitor | null {
        return this.animationFactoryInitializationVisitor;
    }
    

    getScalePropertiesP(): ScaleProperties | null {
        return this.scaleProperties;
    }
    

    toString(): string | null {
        let commonSeps: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) return null;
        let commonLabels: CommonLabels | null = CommonLabels.getInstance(); if (JThrowable.pending !== null) return null;
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(super.toString()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonLabels!.HEIGHT_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.image!.getHeight()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonSeps!.SPACE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(JObject.jtoString(this.animationFactoryInitializationVisitor)); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

