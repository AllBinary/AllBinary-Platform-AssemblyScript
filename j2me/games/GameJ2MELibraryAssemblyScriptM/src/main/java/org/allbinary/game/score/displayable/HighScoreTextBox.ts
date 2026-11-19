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
// package org.allbinary.game.score.displayable
// import javax.microedition.lcdui.CommandListener
// import javax.microedition.lcdui.Font
// import javax.microedition.lcdui.Graphics
// import javax.microedition.lcdui.TextField
// import org.allbinary.PostGameCommandFactory
// import org.allbinary.game.GameInfo
// import org.allbinary.game.score.HighScore
// import org.allbinary.game.score.HighScoresHelperBaseInterface
// import org.allbinary.game.score.HighScoresFactoryInterface
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.form.item.CustomTextBox
// import org.allbinary.graphics.paint.NullPaintable
// import org.allbinary.graphics.paint.Paintable
// import org.allbinary.graphics.paint.SimpleTextPaintable
// import org.allbinary.input.event.VirtualKeyboardEventHandler
// import org.allbinary.logic.system.os.GenericOperatingSystem
// import org.allbinary.logic.system.os.OperatingSystemFactory
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.logic.system.security.licensing.InApplicationPurchaseFactory

@global export class HighScoreTextBox extends CustomTextBox {

    jclassName(): string {
        return "org.allbinary.game.score.displayable.HighScoreTextBox";
    }
    virtualKeyboardEventHandler: VirtualKeyboardEventHandler | null = null;
    highScoreUtil: HighScoreUtil | null = null;
    pleaseWait: Paintable | null = null;
    paintable: Paintable | null = null;
    submitted: bool = false;

    jfields_HighScoreTextBox(): void {
    this.virtualKeyboardEventHandler = VirtualKeyboardEventHandler.getInstance();
    
    this.pleaseWait = new SimpleTextPaintable().jinit_SimpleTextPaintable_2(this.commonStrings!.PLEASE_WAIT, BasicColorFactory.getInstance()!.WHITE);
    this.paintable = NullPaintable.getInstance();
    this.submitted = false;
    }
    

    jinit_HighScoreTextBox_9(highScoresFactoryInterface: HighScoresFactoryInterface | null, highScoresHelper: HighScoresHelperBaseInterface | null, abeClientInformation: AbeClientInformationInterface | null, gameInfo: GameInfo | null, cmdListener: CommandListener | null, name: string | null, highScore: HighScore | null, backgrounBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): HighScoreTextBox {
        super.jinit_CustomTextBox_8(cmdListener, "New High Score Enter Name:", name, 12, TextField.ANY, Font.getDefaultFont(), backgrounBasicColor, foregroundBasicColor);
        this.jfields_HighScoreTextBox();
        this.highScoreUtil = new HighScoreUtil().jinit_HighScoreUtil_7(highScoresFactoryInterface, highScoresHelper, abeClientInformation, gameInfo, cmdListener, name, highScore); if (JThrowable.pending !== null) return this;
        let operatingSystemInterface: GenericOperatingSystem | null = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance(); if (JThrowable.pending !== null) return this;
        if (operatingSystemInterface!.isOverScan()) {
            let username: string | null = InApplicationPurchaseFactory.getInstance()!.getUserName(); if (JThrowable.pending !== null) return this;
            this.getTextFieldItem()!.setString(username); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    initCommands(cmdListener: CommandListener | null): void {
        this.removeAllCommands(); if (JThrowable.pending !== null) return;
        PostGameCommandFactory.getInstance()!.addCommands_1_MyCanvas(this); if (JThrowable.pending !== null) return;
        this.addCommand(HighScoreUtil.SUBMIT_TEXTBOX_COMMAND); if (JThrowable.pending !== null) return;
        this.setCommandListener(cmdListener); if (JThrowable.pending !== null) return;
    }
    

    open(): void {
        this.virtualKeyboardEventHandler!.open(); if (JThrowable.pending !== null) return;
        this.paintable = NullPaintable.getInstance(); if (JThrowable.pending !== null) return;
        super.open(); if (JThrowable.pending !== null) return;
    }
    

    close(): void {
        this.virtualKeyboardEventHandler!.close(); if (JThrowable.pending !== null) return;
        this.paintable = this.pleaseWait;
        this.repaintBehavior!.onChangeRepaint(this); if (JThrowable.pending !== null) return;
        super.close(); if (JThrowable.pending !== null) return;
        this.removeCommand(HighScoreUtil.SUBMIT_TEXTBOX_COMMAND); if (JThrowable.pending !== null) return;
        this.update(); if (JThrowable.pending !== null) return;
        if (this.submitted) {
            this.highScoreUtil!.saveHighScore(); if (JThrowable.pending !== null) return;
        } else {
        } if (JThrowable.pending !== null) return;
        this.paintable = NullPaintable.getInstance(); if (JThrowable.pending !== null) return;
        this.repaintBehavior!.onChangeRepaint(this); if (JThrowable.pending !== null) return;
    }
    

    update(): void {
        let name: string | null = this.getTextFieldItem()!.getString(); if (JThrowable.pending !== null) return;
        this.highScoreUtil!.update(name); if (JThrowable.pending !== null) return;
        super.update(); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        super.paint(graphics); if (JThrowable.pending !== null) return;
        this.paintable!.paint(graphics); if (JThrowable.pending !== null) return;
    }
    

    saveHighScore(): void {
        this.highScoreUtil!.saveHighScore(); if (JThrowable.pending !== null) return;
    }
    

    submit(): void {
        this.highScoreUtil!.submit(this); if (JThrowable.pending !== null) return;
    }
}

