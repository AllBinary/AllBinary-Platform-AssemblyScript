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
// import javax.microedition.lcdui.Choice
// import javax.microedition.lcdui.Command
// import javax.microedition.lcdui.CommandListener
// import org.allbinary.game.commands.GameCommandsFactory
// import org.allbinary.game.configuration.feature.GameFeatureFormUtil
// import org.allbinary.game.configuration.feature.InGameFeatureChoiceGroups
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.displayable.screen.CommandForm
// import org.allbinary.logic.string.StringUtil

@global export class InGameOptionsForm extends CommandForm {

    jclassName(): string {
        return "org.allbinary.game.configuration.InGameOptionsForm";
    }
    @lazy static jv_DISPLAY: Command | null = null;
    @lazy static js_DISPLAY: bool = false;
    static get DISPLAY(): Command | null {
        if (!InGameOptionsForm.js_DISPLAY) {
            InGameOptionsForm.js_DISPLAY = true;
            InGameOptionsForm.jv_DISPLAY = new Command().jinit_Command_4("Options In Game", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);
        }
        return InGameOptionsForm.jv_DISPLAY;
    }
    static set DISPLAY(value: Command | null) {
        InGameOptionsForm.js_DISPLAY = true;
        InGameOptionsForm.jv_DISPLAY = value;
    }
    @lazy static jv_SAVE: Command | null = null;
    @lazy static js_SAVE: bool = false;
    static get SAVE(): Command | null {
        if (!InGameOptionsForm.js_SAVE) {
            InGameOptionsForm.js_SAVE = true;
            InGameOptionsForm.jv_SAVE = new Command().jinit_Command_4("Save", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);
        }
        return InGameOptionsForm.jv_SAVE;
    }
    static set SAVE(value: Command | null) {
        InGameOptionsForm.js_SAVE = true;
        InGameOptionsForm.jv_SAVE = value;
    }
    @lazy static jv_DEFAULT: Command | null = null;
    @lazy static js_DEFAULT: bool = false;
    static get DEFAULT(): Command | null {
        if (!InGameOptionsForm.js_DEFAULT) {
            InGameOptionsForm.js_DEFAULT = true;
            InGameOptionsForm.jv_DEFAULT = new Command().jinit_Command_4("Default", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 1);
        }
        return InGameOptionsForm.jv_DEFAULT;
    }
    static set DEFAULT(value: Command | null) {
        InGameOptionsForm.js_DEFAULT = true;
        InGameOptionsForm.jv_DEFAULT = value;
    }
    

    jinit_InGameOptionsForm_4(commandListener: CommandListener | null, title: string | null, backgrounBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): InGameOptionsForm {
        super.jinit_CommandForm_4(commandListener, title, backgrounBasicColor, foregroundBasicColor);
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
        let gameFeatureFormUtil: GameFeatureFormUtil | null = GameFeatureFormUtil.getInstance(); if (JThrowable.pending !== null) return this;
        gameFeatureFormUtil!.addChoiceGroup(this, InGameFeatureChoiceGroups.getExclusiveInstance()!.get(), Choice_JStatics.EXCLUSIVE); if (JThrowable.pending !== null) return this;
        gameFeatureFormUtil!.addChoiceGroup(this, InGameFeatureChoiceGroups.getMultipleInstance()!.get(), Choice_JStatics.MULTIPLE); if (JThrowable.pending !== null) return this;
        this.initCommands(commandListener); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    initCommands(cmdListener: CommandListener | null): void {
        this.removeAllCommands(); if (JThrowable.pending !== null) return;
        this.addCommand(GameCommandsFactory.getInstance()!.CLOSE_AND_SHOW_GAME_CANVAS); if (JThrowable.pending !== null) return;
        this.addCommand(InGameOptionsForm.DEFAULT); if (JThrowable.pending !== null) return;
        this.setCommandListener(cmdListener); if (JThrowable.pending !== null) return;
    }
}

