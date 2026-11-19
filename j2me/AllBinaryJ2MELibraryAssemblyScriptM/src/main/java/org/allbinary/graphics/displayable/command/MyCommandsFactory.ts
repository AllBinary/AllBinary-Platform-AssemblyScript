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
// package org.allbinary.graphics.displayable.command
// import javax.microedition.lcdui.Command
// import org.allbinary.logic.string.StringUtil

@global export class MyCommandsFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.displayable.command.MyCommandsFactory";
    }
    @lazy static jv_instance: MyCommandsFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): MyCommandsFactory | null {
        if (!MyCommandsFactory.js_instance) {
            MyCommandsFactory.js_instance = true;
            MyCommandsFactory.jv_instance = new MyCommandsFactory().jinit_MyCommandsFactory_0();
        }
        return MyCommandsFactory.jv_instance;
    }
    static set instance(value: MyCommandsFactory | null) {
        MyCommandsFactory.js_instance = true;
        MyCommandsFactory.jv_instance = value;
    }
    NO_COMMAND: Command | null = null;
    GAUGE_CHANGE: Command | null = null;
    SET_DISPLAYABLE: Command | null = null;
    PAUSE_COMMAND: Command | null = null;
    RESUME_COMMAND: Command | null = null;

    jfields_MyCommandsFactory(): void {
    this.NO_COMMAND = new Command().jinit_Command_4(StringUtil.getInstance()!.EMPTY_STRING, StringUtil.getInstance()!.EMPTY_STRING, -1, -1);
    this.GAUGE_CHANGE = new Command().jinit_Command_4("GAUGE_CHANGE", StringUtil.getInstance()!.EMPTY_STRING, Command.ITEM, 1);
    this.SET_DISPLAYABLE = new Command().jinit_Command_4("Display", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 2);
    this.PAUSE_COMMAND = new Command().jinit_Command_4("Pause", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 0);
    this.RESUME_COMMAND = new Command().jinit_Command_4("Resume", StringUtil.getInstance()!.EMPTY_STRING, Command.SCREEN, 0);
    }
    

    static getInstance(): MyCommandsFactory | null {
        return MyCommandsFactory.instance;
    }
    

    jinit_MyCommandsFactory_0(): MyCommandsFactory {
        super.jinit_JObject_0();
        this.jfields_MyCommandsFactory();
        return this;
    }
}

