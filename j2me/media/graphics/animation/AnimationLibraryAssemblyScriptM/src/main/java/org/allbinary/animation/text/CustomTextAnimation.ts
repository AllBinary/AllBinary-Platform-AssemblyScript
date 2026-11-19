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
// package org.allbinary.animation.text
// import javax.microedition.lcdui.Font
// import javax.microedition.lcdui.Graphics
// import org.allbinary.animation.AnimationBehavior
// import org.allbinary.graphics.font.FontDebugFactory
// import org.allbinary.logic.string.StringUtil

@global export class CustomTextAnimation extends TextAnimation implements TextInterface {

    jclassName(): string {
        return "org.allbinary.animation.text.CustomTextAnimation";
    }
    fontDebugFactory: FontDebugFactory | null = null;
    fontSize: i32 = 0;
    font: Font | null = null;
    lastText: string | null = null;
    hasChanged: bool = false;
    textWidth: i32 = 0;

    jfields_CustomTextAnimation(): void {
    this.fontDebugFactory = FontDebugFactory.getInstance();
    
    
    this.lastText = StringUtil.getInstance()!.INIT_STRING;
    this.hasChanged = true;
    this.textWidth = 0;
    }
    

    jinit_CustomTextAnimation_3(text: string | null, fontSize: i32, animationBehavior: AnimationBehavior | null): CustomTextAnimation {
        super.jinit_TextAnimation_2(text, animationBehavior);
        this.jfields_CustomTextAnimation();
        this.fontSize = fontSize;
        this.font = Font.getFont(Font.FACE_SYSTEM, Font.STYLE_PLAIN, fontSize); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        let existingFont: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        this.fontDebugFactory!.setFont(this.font, graphics); if (JThrowable.pending !== null) return;
        super.paintXYNoUpdate(graphics, x, y); if (JThrowable.pending !== null) return;
        this.fontDebugFactory!.setFont(existingFont, graphics); if (JThrowable.pending !== null) return;
    }
    

    setScale(scaleX: f32, scaleY: f32): void {
        if (scaleX != scaleY) {
            { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return; }
        } if (JThrowable.pending !== null) return;
        this.hasChanged = true;
        this.font = Font.getFont(Font.FACE_SYSTEM, Font.STYLE_PLAIN, JMath.toInt(((<f32>(this.fontSize)) * scaleX))); if (JThrowable.pending !== null) return;
    }
    

    setTextWithOnMeasure(text: string | null, textChangeListener: TextChangeListener | null): void {
        super.setTextWithOnMeasure(text, textChangeListener); if (JThrowable.pending !== null) return;
    }
    

    setText(text: string | null): void {
        if (this.lastText != text) {
            this.hasChanged = true;
            this.lastText = text;
            super.setText(text); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getText(): string | null {
        return this.lastText;
    }
    

    getWidth(): i32 {
        if (this.hasChanged) {
            this.textWidth = this.font!.stringWidth(this.textArrayP![0]); if (JThrowable.pending !== null) return 0;
            this.hasChanged = false;
        } if (JThrowable.pending !== null) return 0;
        return this.textWidth;
    }
    

    getFontHeight(): i32 {
        return this.font!.getHeight();
    }
}

