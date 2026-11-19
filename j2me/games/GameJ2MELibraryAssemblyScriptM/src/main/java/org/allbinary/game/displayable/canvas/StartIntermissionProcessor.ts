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
// import org.allbinary.canvas.Processor
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class StartIntermissionProcessor extends Processor {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.StartIntermissionProcessor";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    gameCanvas: AllBinaryGameCanvas | null = null;
    WAIT: i64 = 0;

    jfields_StartIntermissionProcessor(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    
    this.WAIT = (<i64>5000);
    }
    

    jinit_StartIntermissionProcessor_1(gameCanvas: AllBinaryGameCanvas | null): StartIntermissionProcessor {
        super.jinit_Processor_0();
        this.jfields_StartIntermissionProcessor();
        this.gameCanvas = gameCanvas;
        return this;
    }
    

    process(): void {
        if (this.gameCanvas!.getStartIntermissionInterface()!.getTimeDelayHelper()!.isElapsedTNT(this.WAIT)) {
            this.logUtil!.putF("Intermission End", this, this.commonStrings!.PROCESS); if (JThrowable.pending !== null) return;
            this.gameCanvas!.getStartIntermissionInterface()!.setEnabled(false); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

