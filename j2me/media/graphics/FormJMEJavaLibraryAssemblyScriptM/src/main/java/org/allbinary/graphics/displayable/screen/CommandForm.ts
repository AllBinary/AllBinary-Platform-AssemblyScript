/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2002 AllBinary 
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
// package org.allbinary.graphics.displayable.screen
// import javax.microedition.lcdui.Command
// import javax.microedition.lcdui.CommandListener
// import javax.microedition.lcdui.Form
// import javax.microedition.lcdui.NullCommandListener
// import org.allbinary.canvas.Processor
// import org.allbinary.game.displayable.canvas.MenuListener
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.displayable.command.MyCommandInterface
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.logic.StdUtil
// import org.allbinary.util.ABStack

@global export class CommandForm extends Form implements MyCommandInterface, MenuListener {

    jclassName(): string {
        return "org.allbinary.graphics.displayable.screen.CommandForm";
    }
    @lazy static jv_NULL_COMMAND_FORM: Object | null = null;
    @lazy static js_NULL_COMMAND_FORM: bool = false;
    static get NULL_COMMAND_FORM(): Object | null {
        if (!CommandForm.js_NULL_COMMAND_FORM) {
            CommandForm.js_NULL_COMMAND_FORM = true;
            CommandForm.jv_NULL_COMMAND_FORM = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return CommandForm.jv_NULL_COMMAND_FORM;
    }
    static set NULL_COMMAND_FORM(value: Object | null) {
        CommandForm.js_NULL_COMMAND_FORM = true;
        CommandForm.jv_NULL_COMMAND_FORM = value;
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    repaintProcessor: Processor | null = null;
    commandStack: ABStack | null = null;

    jfields_CommandForm(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.repaintProcessor = ScreenRepaintProcessorFactory.getInstance()!.create(this);
    
    }
    

    static getNullCommandForm(): CommandForm | null {
        if (CommandForm.NULL_COMMAND_FORM == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            CommandForm.NULL_COMMAND_FORM = new CommandForm().jinit_CommandForm_4(NullCommandListener.NULL_COMMAND_LISTENER, StringUtil.getInstance()!.EMPTY_STRING, BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<CommandForm | null>(CommandForm.NULL_COMMAND_FORM);
    }
    

    jinit_CommandForm_4(commandListener: CommandListener | null, formTitle: string | null, backgrounBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): CommandForm {
        super.jinit_Form_1(formTitle);
        this.jfields_CommandForm();
        this.commandStack = StdUtil.getInstance()!.createStack(); if (JThrowable.pending !== null) return this;
        do {
            this.repaintProcessor!.process(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    initCommands(cmdListener: CommandListener | null): void {
    }
    

    open(): void {
        this.logUtil!.putF(this.commonStrings!.START, this, "open"); if (JThrowable.pending !== null) return;
    }
    

    close(): void {
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CLOSE); if (JThrowable.pending !== null) return;
    }
    

    update(): void {
        this.repaintProcessor!.process(); if (JThrowable.pending !== null) return;
    }
    

    getSourceId(): i32 {
        return 0;
    }
    

    addCommand(command: Command | null): void {
        this.commandStack!.push(command); if (JThrowable.pending !== null) return;
        super.addCommand(command); if (JThrowable.pending !== null) return;
    }
    

    removeAllCommands(): void {
        let size: i32 = this.commandStack!.size(); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < size; index++) {
            super.removeCommand(changetype<Command | null>(this.commandStack!.pop())); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

