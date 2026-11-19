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
// package org.allbinary.game.displayable.canvas
// import javax.microedition.lcdui.Command
// import javax.microedition.lcdui.CommandListener
// import org.allbinary.graphics.displayable.MyCanvas
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class CommandRunnable extends JObject implements JRunnable {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.CommandRunnable";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    commandFormInputProcessor: CommandFormInputProcessor | null = null;
    command: Command | null = null;

    jfields_CommandRunnable(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    
    
    }
    

    jinit_CommandRunnable_2(commandFormInputProcessor: CommandFormInputProcessor | null, command: Command | null): CommandRunnable {
        super.jinit_JObject_0();
        this.jfields_CommandRunnable();
        this.commandFormInputProcessor = commandFormInputProcessor;
        this.command = command;
        return this;
    }
    

    run(): void {
        do {
            this.logUtil!.putF(this.commonStrings!.START_RUNNABLE, this, this.commonStrings!.RUN); if (JThrowable.pending !== null) break;
            let canvas: MyCanvas | null = this.commandFormInputProcessor!.getCanvas(); if (JThrowable.pending !== null) break;
            let commandListener: CommandListener | null = canvas!.getCustomCommandListener(); if (JThrowable.pending !== null) break;
            commandListener!.commandAction(this.command, canvas); if (JThrowable.pending !== null) break;
            this.logUtil!.putF(this.commonStrings!.END_RUNNABLE, this, this.commonStrings!.RUN); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

