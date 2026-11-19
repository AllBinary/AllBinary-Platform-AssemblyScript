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
// import javax.microedition.lcdui.Graphics
// import org.allbinary.animation.AnimationBehavior
// import org.allbinary.animation.IndexedAnimation
// import org.allbinary.game.input.event.RawKeyEventListener
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.graphics.form.item.CustomTextBox
// import org.allbinary.logic.string.StringUtil

@global export class CustomTextBoxIndexedAnimation extends IndexedAnimation implements RawKeyEventListener, UpdateMyFontInterface, TextInterface {

    jclassName(): string {
        return "org.allbinary.animation.text.CustomTextBoxIndexedAnimation";
    }
    customTextBox: CustomTextBox | null = null;
    lastText: string | null = null;
    hasChanged: bool = false;
    textChangeListener: TextChangeListener | null = null;

    jfields_CustomTextBoxIndexedAnimation(): void {
    
    this.lastText = StringUtil.getInstance()!.INIT_STRING;
    this.hasChanged = true;
    this.textChangeListener = TextChangeListener.getInstance();
    }
    

    jinit_CustomTextBoxIndexedAnimation_1(customTextBox: CustomTextBox | null): CustomTextBoxIndexedAnimation {
        super.jinit_IndexedAnimation_1(AnimationBehavior.getInstance());
        this.jfields_CustomTextBoxIndexedAnimation();
        this.customTextBox = customTextBox;
        return this;
    }
    

    setBasicColorP(basicColor: BasicColor | null): void {
        this.customTextBox!.getTextFieldItem()!.setForegroundBasicColorP(basicColor); if (JThrowable.pending !== null) return;
    }
    

    setBackgroundBasicColorP(basicColor: BasicColor | null): void {
        this.customTextBox!.getTextFieldItem()!.setBackgroundBasicColorP(basicColor); if (JThrowable.pending !== null) return;
    }
    

    setTextWithOnMeasure(text: string | null, textChangeListener: TextChangeListener | null): void {
        this.setText(text); if (JThrowable.pending !== null) return;
        this.textChangeListener = textChangeListener;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        this.textChangeListener!.onMeasure(); if (JThrowable.pending !== null) return;
        this.textChangeListener = TextChangeListener.getInstance(); if (JThrowable.pending !== null) return;
    }
    

    setText(text: string | null): void {
        if (this.lastText != text) {
            this.hasChanged = true;
            this.lastText = text;
            this.customTextBox!.getTextFieldItem()!.setString(text); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getText(): string | null {
        return this.customTextBox!.getTextFieldItem()!.getString();
    }
    

    onEventRaw(keyCode: i32, deviceId: i32, repeated: bool): void {
        this.customTextBox!.onEventRaw(keyCode, deviceId, repeated); if (JThrowable.pending !== null) return;
    }
    

    getFontHeight(): i32 {
        return this.customTextBox!.getTextFieldItem()!.getFontHeight();
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        this.customTextBox!.paintXY(graphics, x, y); if (JThrowable.pending !== null) return;
    }
    

    paintThreedXYZ(graphics: Graphics | null, x: i32, y: i32, z: i32): void {
    }
    

    getWidth(): i32 {
        return super.getWidth();
    }
}

