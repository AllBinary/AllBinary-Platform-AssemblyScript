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
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory
// import org.allbinary.graphics.displayable.command.MyCommandsFactory
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonStrings

@global export class DemoRunnable extends JObject implements JRunnable {

    jclassName(): string {
        return "org.allbinary.game.midlet.DemoRunnable";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    demoGameMidlet: DemoGameMidlet | null = null;
    startDemoGameMidletEvent: DemoGameMidletEvent | null = null;

    jfields_DemoRunnable(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    
    
    }
    

    jinit_DemoRunnable_1(demoGameMidlet: DemoGameMidlet | null): DemoRunnable {
        super.jinit_JObject_0();
        this.jfields_DemoRunnable();
        this.demoGameMidlet = demoGameMidlet;
        this.startDemoGameMidletEvent = new DemoGameMidletEvent().jinit_DemoGameMidletEvent_2(this.demoGameMidlet, DemoGameMidletStateFactory.getInstance()!.START_DEMO); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    run(): void {
        do {
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonLabels.getInstance()!.START_LABEL)!.append("GameCanvasRunnableInterface")), this, this.commonStrings!.RUN); if (JThrowable.pending !== null) break;
            this.demoGameMidlet!.commandAction(MyCommandsFactory.getInstance()!.SET_DISPLAYABLE, ProgressCanvasFactory.getInstance()); if (JThrowable.pending !== null) break;
            this.demoGameMidlet!.setGameCanvasRunnableInterface(this.demoGameMidlet!.createDemoGameCanvasRunnableInterface()); if (JThrowable.pending !== null) break;
            this.demoGameMidlet!.demoSetup(); if (JThrowable.pending !== null) break;
            DemoGameMidletEventHandler.getInstance()!.fireEvent(this.startDemoGameMidletEvent); if (JThrowable.pending !== null) break;
            this.demoGameMidlet!.startGameCanvasRunnableInterface(); if (JThrowable.pending !== null) break;
            this.demoGameMidlet!.postDemoSetup(); if (JThrowable.pending !== null) break;
            this.logUtil!.putF(this.commonStrings!.END_RUNNABLE, this, this.commonStrings!.RUN); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

