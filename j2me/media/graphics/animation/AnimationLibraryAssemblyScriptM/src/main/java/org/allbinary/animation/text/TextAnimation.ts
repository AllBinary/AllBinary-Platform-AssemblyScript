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
// import org.allbinary.animation.IndexedAnimation
// import org.allbinary.graphics.Anchor
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.graphics.font.UpdateMyFontProcessor
// import org.allbinary.graphics.threed.SWTJOGLProcessor
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class TextAnimation extends IndexedAnimation implements UpdateMyFontInterface {

    jclassName(): string {
        return "org.allbinary.animation.text.TextAnimation";
    }
    updateMyFontProcessor: MyFontProcessor | null = null;
    myFontProcessor: MyFontProcessor | null = null;
    textArrayP: StaticArray<string | null> | null = null;
    anchor: i32 = 0;
    fontHeight: i32 = 0;
    offsetY: i32 = 0;
    textChangeListener: TextChangeListener | null = null;

    jfields_TextAnimation(): void {
    this.updateMyFontProcessor = new UpdateMyFontProcessor().jinit_UpdateMyFontProcessor_1(this);
    this.myFontProcessor = this.updateMyFontProcessor;
    this.textArrayP = StringUtil.getInstance()!.ONE_EMPTY_STRING_ARRAY;
    this.anchor = Anchor.TOP_LEFT;
    this.fontHeight = 0;
    this.offsetY = 0;
    this.textChangeListener = TextChangeListener.getInstance();
    }
    

    jinit_TextAnimation_2(text: string | null, animationBehavior: AnimationBehavior | null): TextAnimation {
        super.jinit_IndexedAnimation_1(animationBehavior);
        this.jfields_TextAnimation();
        this.setText(text); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        this.fontHeight = font!.getHeight(); if (JThrowable.pending !== null) return;
        let adjustedFontHeight: i32 = JMath.toInt(-((<f64>(this.fontHeight)) * 2.00));
        this.offsetY = (SWTJOGLProcessor.getInstance()!.isJOGL() ? adjustedFontHeight : 0); if (JThrowable.pending !== null) return;
        this.textChangeListener!.onMeasure(); if (JThrowable.pending !== null) return;
        this.textChangeListener = TextChangeListener.getInstance(); if (JThrowable.pending !== null) return;
        this.myFontProcessor = MyFontProcessor.getInstance(); if (JThrowable.pending !== null) return;
    }
    

    nextFrame(): void {
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        this.paintXYNoUpdate(graphics, x, y); if (JThrowable.pending !== null) return;
    }
    

    paintXYNoUpdate(graphics: Graphics | null, x: i32, y: i32): void {
        this.basicSetColorUtil!.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor()); if (JThrowable.pending !== null) return;
        let size: i32 = this.textArrayP!.length;
        for (let index: i32 = 0; index < size; index++) {
            graphics!.drawString(this.textArrayP![index], x, y + this.offsetY + (index * this.fontHeight), this.anchor); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setTextWithOnMeasure(text: string | null, textChangeListener: TextChangeListener | null): void {
        this.setText(text); if (JThrowable.pending !== null) return;
        this.textChangeListener = textChangeListener;
    }
    

    setText(text: string | null): void {
        let list: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return;
        if (JString.length0(text) > 0) {
            let index: i32 = 0;
            let startIndex: i32 = 0;
            let endIndex: i32 = 0;
            while (index >= 0) {
                startIndex = index;
                index = JString.indexOf2(text, (<u16>0x0A), startIndex); if (JThrowable.pending !== null) return;
                endIndex = index;
                if (index < 0) {
                    endIndex = JString.length0(text); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
                list!.add(JString.substring2(text, startIndex, endIndex)); if (JThrowable.pending !== null) return;
                if (index < 0) {
                    break;
                }
                index++;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (list!.size() > 0) {
            let textArray: StaticArray<string | null> | null = new StaticArray<string | null>(list!.size()); if (JThrowable.pending !== null) return;
            let size: i32 = list!.size(); if (JThrowable.pending !== null) return;
            for (let index: i32 = 0; index < size; index++) {
                textArray![index] = changetype<string | null>(list!.get(index)); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            this.textArrayP = textArray;
        } else {
            this.textArrayP = StringUtil.getInstance()!.ONE_EMPTY_STRING_ARRAY; if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.myFontProcessor = this.updateMyFontProcessor;
    }
    

    getTextArray(): StaticArray<string | null> | null {
        return this.textArrayP;
    }
    

    getFontHeight(): i32 {
        return this.fontHeight;
    }
}

