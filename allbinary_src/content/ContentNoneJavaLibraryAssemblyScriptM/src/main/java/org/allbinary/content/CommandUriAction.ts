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
// package org.allbinary.content
// import javax.microedition.lcdui.Command
// import org.allbinary.logic.communication.log.LogUtil

@global export class CommandUriAction extends JObject {

    jclassName(): string {
        return "org.allbinary.content.CommandUriAction";
    }
    @lazy static jv_instance: CommandUriAction | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): CommandUriAction | null {
        if (!CommandUriAction.js_instance) {
            CommandUriAction.js_instance = true;
            CommandUriAction.jv_instance = new CommandUriAction().jinit_CommandUriAction_0();
        }
        return CommandUriAction.jv_instance;
    }
    static set instance(value: CommandUriAction | null) {
        CommandUriAction.js_instance = true;
        CommandUriAction.jv_instance = value;
    }
    logUtil: LogUtil | null = null;

    jfields_CommandUriAction(): void {
    this.logUtil = LogUtil.getInstance();
    }

    jinit_CommandUriAction_0(): CommandUriAction {
        super.jinit_JObject_0();
        this.jfields_CommandUriAction();
        return this;
    }
    

    static getInstance(): CommandUriAction | null {
        return CommandUriAction.instance;
    }
    

    add(command: Command | null, url: string | null): void {
    }
    

    process(command: Command | null): void {
    }
}

