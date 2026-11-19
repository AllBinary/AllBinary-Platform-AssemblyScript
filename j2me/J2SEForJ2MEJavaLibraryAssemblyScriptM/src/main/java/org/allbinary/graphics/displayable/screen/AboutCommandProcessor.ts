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
// package org.allbinary.graphics.displayable.screen
// import javax.microedition.lcdui.Canvas
// import javax.microedition.lcdui.Command
// import javax.microedition.lcdui.CommandListener

@global export class AboutCommandProcessor extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.displayable.screen.AboutCommandProcessor";
    }
    @lazy static jv_instance: AboutCommandProcessor | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AboutCommandProcessor | null {
        if (!AboutCommandProcessor.js_instance) {
            AboutCommandProcessor.js_instance = true;
            AboutCommandProcessor.jv_instance = new AboutCommandProcessor().jinit_AboutCommandProcessor_0();
        }
        return AboutCommandProcessor.jv_instance;
    }
    static set instance(value: AboutCommandProcessor | null) {
        AboutCommandProcessor.js_instance = true;
        AboutCommandProcessor.jv_instance = value;
    }

    jinit_AboutCommandProcessor_0(): AboutCommandProcessor {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): AboutCommandProcessor | null {
        return AboutCommandProcessor.instance;
    }
    

    process(midletCommandListener: CommandListener | null, command: Command | null, canvas: Canvas | null): void {
        midletCommandListener!.commandAction(command, canvas); if (JThrowable.pending !== null) return;
    }
}

