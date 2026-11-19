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
// package org.allbinary.game.configuration
// import javax.microedition.lcdui.CommandListener
// import javax.microedition.lcdui.TextField
// import org.allbinary.MIDPUtil
// import org.allbinary.game.commands.GameCommandsFactory
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.displayable.screen.CommandForm
// import org.allbinary.logic.ABSystemWrapper

@global export class SaveGameForm extends CommandForm {

    jclassName(): string {
        return "org.allbinary.game.configuration.SaveGameForm";
    }
    @lazy static jv_FORM: CommandForm | null = null;
    @lazy static js_FORM: bool = false;
    static get FORM(): CommandForm | null {
        if (!SaveGameForm.js_FORM) {
            SaveGameForm.js_FORM = true;
            SaveGameForm.jv_FORM = CommandForm.getNullCommandForm();
        }
        return SaveGameForm.jv_FORM;
    }
    static set FORM(value: CommandForm | null) {
        SaveGameForm.js_FORM = true;
        SaveGameForm.jv_FORM = value;
    }
    meUtil: MIDPUtil | null = null;

    jfields_SaveGameForm(): void {
    this.meUtil = MIDPUtil.getInstance();
    }
    

    static createForm(commandListener: CommandListener | null, title: string | null, backgrounBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): CommandForm | null {
        SaveGameForm.FORM = new SaveGameForm().jinit_SaveGameForm_4(commandListener, title, backgrounBasicColor, foregroundBasicColor); if (JThrowable.pending !== null) return null;
        return SaveGameForm.FORM;
    }
    

    static getInstance(): CommandForm | null {
        return SaveGameForm.FORM;
    }
    

    jinit_SaveGameForm_4(commandListener: CommandListener | null, title: string | null, backgrounBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): SaveGameForm {
        super.jinit_CommandForm_4(commandListener, title, backgrounBasicColor, foregroundBasicColor);
        this.jfields_SaveGameForm();
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
        let timeString: string | null = JLong.toString1(ABSystemWrapper.getInstance()!.currentTimeMillis()); if (JThrowable.pending !== null) return this;
        this.meUtil!.appendItem(this, new TextField().jinit_TextField_4("Name: ", timeString, 30, TextField.ANY)); if (JThrowable.pending !== null) return this;
        this.initCommands(commandListener); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    initCommands(cmdListener: CommandListener | null): void {
        let gameCommandsFactory: GameCommandsFactory | null = GameCommandsFactory.getInstance(); if (JThrowable.pending !== null) return;
        this.removeAllCommands(); if (JThrowable.pending !== null) return;
        this.addCommand(gameCommandsFactory!.SAVE); if (JThrowable.pending !== null) return;
        this.addCommand(gameCommandsFactory!.CLOSE_AND_SHOW_GAME_CANVAS); if (JThrowable.pending !== null) return;
        this.setCommandListener(cmdListener); if (JThrowable.pending !== null) return;
    }
}

