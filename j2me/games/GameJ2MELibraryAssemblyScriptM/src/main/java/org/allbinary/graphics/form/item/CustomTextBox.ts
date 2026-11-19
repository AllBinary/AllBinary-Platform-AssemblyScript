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
// package org.allbinary.graphics.form.item
// import javax.microedition.lcdui.CommandListener
// import javax.microedition.lcdui.Font
// import javax.microedition.lcdui.Graphics
// import org.allbinary.J2MEUtil
// import org.allbinary.game.displayable.canvas.GameCommandCanvas
// import org.allbinary.game.input.Input
// import org.allbinary.game.input.InputFactory
// import org.allbinary.game.input.PlatformKeyFactory
// import org.allbinary.game.input.event.RawKeyEventListener
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.form.item.validation.TextItemVisitor
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonSeps

@global export class CustomTextBox extends GameCommandCanvas implements RawKeyEventListener {

    jclassName(): string {
        return "org.allbinary.graphics.form.item.CustomTextBox";
    }
    textFieldItem: ABTextFieldItem | null = null;
    inputFactory: InputFactory | null = null;

    jfields_CustomTextBox(): void {
    
    this.inputFactory = InputFactory.getInstance();
    }
    

    jinit_CustomTextBox_8(cmdListener: CommandListener | null, label: string | null, text: string | null, maxSize: i32, constraints: i32, font: Font | null, backgroundBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): CustomTextBox {
        super.jinit_GameCommandCanvas_4(cmdListener, label, backgroundBasicColor, foregroundBasicColor);
        this.jfields_CustomTextBox();
        let stringUtil: StringUtil | null = StringUtil.getInstance(); if (JThrowable.pending !== null) return this;
        let textFieldItem: ABTextFieldItem | null = new ABTextFieldItem().jinit_ABTextFieldItem_10(this, new TextItemVisitor().jinit_TextItemVisitor_0(), stringUtil!.EMPTY_STRING, stringUtil!.EMPTY_STRING, maxSize, 0, stringUtil!.EMPTY_STRING, font, backgroundBasicColor, foregroundBasicColor); if (JThrowable.pending !== null) return this;
        textFieldItem!.setString(text); if (JThrowable.pending !== null) return this;
        this.textFieldItem = textFieldItem;
        this.setTitle(label); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    submit(): void {
    }
    

    onEventRaw(keyCode: i32, deviceId: i32, repeated: bool): void {
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.commonStrings!.START)!.appendint(keyCode)), this, "onEvent"); if (JThrowable.pending !== null) return;
        this.keyPressedByDevice(keyCode, deviceId); if (JThrowable.pending !== null) return;
    }
    

    keyPressed(keyCode: i32): void {
        this.keyPressedByDevice(keyCode, 0); if (JThrowable.pending !== null) return;
    }
    

    keyReleased(keyCode: i32): void {
        this.keyReleasedByDevice(keyCode, 0); if (JThrowable.pending !== null) return;
    }
    

    keyRepeated(keyCode: i32): void {
        this.keyRepeatedByDevice(keyCode, 0); if (JThrowable.pending !== null) return;
    }
    

    keyPressedByDevice(keyCode: i32, deviceId: i32): void {
        do {
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonSeps.getInstance()!.SPACE)!.appendint(keyCode)), this, this.gameInputStrings!.KEY_PRESSED); if (JThrowable.pending !== null) break;
            let platformKeyFactory: PlatformKeyFactory | null = PlatformKeyFactory.getInstance(); if (JThrowable.pending !== null) break;
            let input: Input | null = this.inputFactory!.getInstanceById(keyCode); if (JThrowable.pending !== null) break;
            if (platformKeyFactory!.isSubmission(input)) {
                this.submit(); if (JThrowable.pending !== null) break;
            } else {
                this.textFieldItem!.keyPressed(keyCode); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.gameInputStrings!.KEY_PRESSED, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    keyReleasedByDevice(keyCode: i32, deviceId: i32): void {
    }
    

    paint(graphics: Graphics | null): void {
        graphics!.setColor(this.backgroundColor); if (JThrowable.pending !== null) return;
        graphics!.fillRect(0, 0, this.displayInfo!.getLastWidth(), this.displayInfo!.getLastHeight()); if (JThrowable.pending !== null) return;
        graphics!.setColor(this.foregroundColor); if (JThrowable.pending !== null) return;
        if (!J2MEUtil.isJ2ME()) {
            graphics!.drawString(this.getTitle(), 8, 1, 0); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.paintXY(graphics, 8, graphics!.getFont()!.getHeight() + 2); if (JThrowable.pending !== null) return;
        super.paint(graphics); if (JThrowable.pending !== null) return;
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        this.textFieldItem!.paintXY(graphics, x, y); if (JThrowable.pending !== null) return;
    }
    

    getTextFieldItem(): ABTextFieldItem | null {
        return this.textFieldItem;
    }
}

