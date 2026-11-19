/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// package org.allbinary.animation.text
// import javax.microedition.lcdui.Font
// import org.allbinary.animation.Animation
// import org.allbinary.animation.AnimationBehaviorFactory
// import org.allbinary.animation.AnimationInterfaceFactoryInterface
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.media.ScaleProperties

@global export class CustomTextAnimationFactory extends JObject implements AnimationInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.text.CustomTextAnimationFactory";
    }
    logUtil: LogUtil | null = null;
    animationBehaviorFactory: AnimationBehaviorFactory | null = null;
    basicColor: BasicColor | null = null;
    text: string | null = null;
    initScaleHeight: i32 = 0;
    dx: i32 = 0;
    dy: i32 = 0;
    font: Font | null = null;
    scaleProperties: ScaleProperties | null = null;

    jfields_CustomTextAnimationFactory(): void {
    this.logUtil = LogUtil.getInstance();
    
    this.basicColor = BasicColorFactory.getInstance()!.BLACK;
    
    
    this.dx = 0;
    this.dy = 0;
    
    
    }
    

    static createDXY(text: string | null, fontSize: i32, dx: i32, dy: i32, animationBehaviorFactory: AnimationBehaviorFactory | null): CustomTextAnimationFactory | null {
        let customTextAnimationFactory: CustomTextAnimationFactory | null = new CustomTextAnimationFactory().jinit_CustomTextAnimationFactory_3(text, fontSize, animationBehaviorFactory); if (JThrowable.pending !== null) return null;
        customTextAnimationFactory!.dx = dx;
        customTextAnimationFactory!.dy = dy;
        return customTextAnimationFactory;
    }
    

    jinit_CustomTextAnimationFactory_3(text: string | null, fontSize: i32, animationBehaviorFactory: AnimationBehaviorFactory | null): CustomTextAnimationFactory {
        super.jinit_JObject_0();
        this.jfields_CustomTextAnimationFactory();
        this.scaleProperties = new ScaleProperties().jinit_ScaleProperties_0(); if (JThrowable.pending !== null) return this;
        this.text = text;
        this.scaleProperties!.scaleHeight = fontSize - (fontSize / 4);
        this.initScaleHeight = this.scaleProperties!.scaleHeight;
        this.animationBehaviorFactory = animationBehaviorFactory;
        this.font = Font.getFont(Font.FACE_SYSTEM, Font.STYLE_PLAIN, this.initScaleHeight); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        let customTextAnimation: CustomTextAnimation | null = null;
        if (this.dx != 0 || this.dy != 0) {
            customTextAnimation = new AdjustCustomTextAnimation().jinit_AdjustCustomTextAnimation_5(this.text, this.scaleProperties!.scaleHeight, this.dx, this.dy, this.animationBehaviorFactory!.getOrCreateInstance()); if (JThrowable.pending !== null) return null;
        } else {
            customTextAnimation = new CustomTextAnimation().jinit_CustomTextAnimation_3(this.text, this.scaleProperties!.scaleHeight, this.animationBehaviorFactory!.getOrCreateInstance()); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        customTextAnimation!.setBasicColorP(this.basicColor); if (JThrowable.pending !== null) return null;
        return customTextAnimation;
    }
    

    setInitialScale(scaleProperties: ScaleProperties | null): void {
    }
    

    getWidth(): i32 {
        return this.font!.stringWidth(this.text);
    }
    

    getHeight(): i32 {
        return this.font!.getHeight();
    }
}

