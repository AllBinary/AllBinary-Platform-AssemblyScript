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
// package org.allbinary.game.midlet
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvas
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory
// import org.allbinary.graphics.displayable.command.MyCommandsFactory
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.ABHashtable

@global export class CreateGameRunnable extends JObject implements JRunnable {

    jclassName(): string {
        return "org.allbinary.game.midlet.CreateGameRunnable";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    demoGameMidlet: DemoGameMidlet | null = null;
    hashtable: ABHashtable | null = null;
    startGameMidletEvent: DemoGameMidletEvent | null = null;

    jfields_CreateGameRunnable(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    
    
    
    }
    

    jinit_CreateGameRunnable_2(demoGameMidlet: DemoGameMidlet | null, hashtable: ABHashtable | null): CreateGameRunnable {
        super.jinit_JObject_0();
        this.jfields_CreateGameRunnable();
        this.demoGameMidlet = demoGameMidlet;
        this.hashtable = hashtable;
        this.startGameMidletEvent = new DemoGameMidletEvent().jinit_DemoGameMidletEvent_2(this, DemoGameMidletStateFactory.getInstance()!.START_GAME); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    run(): void {
        do {
            this.logUtil!.putF(this.commonStrings!.START_RUNNABLE, this, this.commonStrings!.RUN); if (JThrowable.pending !== null) break;
            let progressCanvas: ProgressCanvas | null = ProgressCanvasFactory.getInstance(); if (JThrowable.pending !== null) break;
            this.demoGameMidlet!.commandAction(MyCommandsFactory.getInstance()!.SET_DISPLAYABLE, progressCanvas); if (JThrowable.pending !== null) break;
            this.demoGameMidlet!.stopGameCanvasRunnableInterface(); if (JThrowable.pending !== null) break;
            this.demoGameMidlet!.setGameCanvasRunnableInterface(this.demoGameMidlet!.createGameCanvasRunnableInterface()); if (JThrowable.pending !== null) break;
            this.demoGameMidlet!.getGameCanvasRunnableInterface()!.setLoadStateHashtable(this.hashtable); if (JThrowable.pending !== null) break;
            this.demoGameMidlet!.startGameCanvasRunnableInterface(); if (JThrowable.pending !== null) break;
            DemoGameMidletEventHandler.getInstance()!.fireEvent(this.startGameMidletEvent); if (JThrowable.pending !== null) break;
            this.logUtil!.putF(this.commonStrings!.END_RUNNABLE, this, this.commonStrings!.RUN); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

