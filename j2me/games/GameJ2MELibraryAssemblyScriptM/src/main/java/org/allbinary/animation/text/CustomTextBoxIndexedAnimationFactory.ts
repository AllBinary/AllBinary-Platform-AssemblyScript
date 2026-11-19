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
// import javax.microedition.lcdui.TextField
// import org.allbinary.graphics.form.item.CustomTextBox
// import org.allbinary.animation.Animation
// import org.allbinary.animation.AnimationInterfaceFactoryInterface
// import org.allbinary.game.canvas.ABToGBUtil
// import org.allbinary.game.displayable.canvas.AllBinaryGameCanvas
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.media.ScaleProperties

@global export class CustomTextBoxIndexedAnimationFactory extends JObject implements AnimationInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.text.CustomTextBoxIndexedAnimationFactory";
    }
    logUtil: LogUtil | null = null;
    scaleProperties: ScaleProperties | null = null;
    maxLength: i32 = 0;

    jfields_CustomTextBoxIndexedAnimationFactory(): void {
    this.logUtil = LogUtil.getInstance();
    
    
    }
    

    jinit_CustomTextBoxIndexedAnimationFactory_2(fontSize: i32, maxLength: i32): CustomTextBoxIndexedAnimationFactory {
        super.jinit_JObject_0();
        this.jfields_CustomTextBoxIndexedAnimationFactory();
        this.scaleProperties = new ScaleProperties().jinit_ScaleProperties_0(); if (JThrowable.pending !== null) return this;
        this.scaleProperties!.scaleHeight = fontSize;
        this.maxLength = maxLength;
        return this;
    }
    

    getInstance1(instanceId: i32): Animation | null {
        let abToGBUtil: ABToGBUtil | null = ABToGBUtil.getInstance(); if (JThrowable.pending !== null) return null;
        let abCanvas: AllBinaryGameCanvas | null = changetype<AllBinaryGameCanvas | null>(abToGBUtil!.abCanvas);
        let font: Font | null = Font.getFont(Font.FACE_SYSTEM, Font.STYLE_PLAIN, this.scaleProperties!.scaleHeight); if (JThrowable.pending !== null) return null;
        let customTextBox: CustomTextBox | null = new CustomTextBox2().jinit_CustomTextBox2_8(abCanvas!.getCustomCommandListener(), StringUtil.getInstance()!.EMPTY_STRING, StringUtil.getInstance()!.EMPTY_STRING, this.maxLength, TextField.ANY, font, abCanvas!.getLayerManager()!.getBackgroundBasicColor(), abCanvas!.getLayerManager()!.getForegroundBasicColor()); if (JThrowable.pending !== null) return null;
        return new CustomTextBoxIndexedAnimation().jinit_CustomTextBoxIndexedAnimation_1(customTextBox);
    }
    

    setInitialScale(scaleProperties: ScaleProperties | null): void {
        let fontSize: i32 = this.scaleProperties!.scaleHeight;
        this.scaleProperties = scaleProperties;
        if (this.scaleProperties!.scaleHeight < 6) {
            this.scaleProperties!.scaleHeight = fontSize;
        }
    }
}

