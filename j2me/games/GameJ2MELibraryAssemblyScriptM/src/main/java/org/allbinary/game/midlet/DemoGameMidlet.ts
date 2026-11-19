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
// import org.allbinary.game.displayable.canvas.GameCanvasRunnableInterface
// import org.allbinary.game.layer.AllBinaryGameLayerManager
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvas
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.system.security.licensing.ClientInformationFactory
// import org.allbinary.thread.PrimaryThreadPool
// import org.allbinary.game.displayable.canvas.NullGameCanvasRunnable
// import org.allbinary.util.ABHashtable

@global export class DemoGameMidlet extends GameMidlet {

    jclassName(): string {
        return "org.allbinary.game.midlet.DemoGameMidlet";
    }
    

    jinit_DemoGameMidlet_1(clientInformationFactory: ClientInformationFactory | null): DemoGameMidlet {
        super.jinit_GameMidlet_1(clientInformationFactory);
        return this;
    }
    

    isContinue(): bool {
        let hashtable: ABHashtable | null = this.getStartStateHashtable(); if (JThrowable.pending !== null) return false;
        if (hashtable != null && hashtable!.size() > 0) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    getHighestLevel(): i32 {
        return 1;
    }
    

    createDemoGameCanvasRunnableInterface(): GameCanvasRunnableInterface | null {
        this.logUtil!.putF(this.commonStrings!.NOT_IMPLEMENTED, this, this.commonStrings!.CREATE); if (JThrowable.pending !== null) return null;
        return NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE;
    }
    

    createGameCanvasRunnable(allBinaryGameLayerManager: AllBinaryGameLayerManager | null): GameCanvasRunnableInterface | null {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return null; }
        return null;
    }
    

    createGameCanvasRunnableInterface(): GameCanvasRunnableInterface | null {
        return this.createGameCanvasRunnable(this.createGameLayerManager());
    }
    

    demoSetup(): void {
    }
    

    postDemoSetup(): void {
    }
    

    setDemo(): void {
        this.logUtil!.putF(this.commonStrings!.START, this, "setDemo"); if (JThrowable.pending !== null) return;
        let progressCanvas: ProgressCanvas | null = ProgressCanvasFactory.getInstance(); if (JThrowable.pending !== null) return;
        progressCanvas!.start(); if (JThrowable.pending !== null) return;
        PrimaryThreadPool.getInstance()!.runTask(new DemoRunnable().jinit_DemoRunnable_1(this)); if (JThrowable.pending !== null) return;
    }
    

    createGame(): void {
        let CREATE_GAME: string | null = "createGame";
        this.logUtil!.putF(this.commonStrings!.START, this, CREATE_GAME); if (JThrowable.pending !== null) return;
        let progressCanvas: ProgressCanvas | null = ProgressCanvasFactory.getInstance(); if (JThrowable.pending !== null) return;
        progressCanvas!.start(); if (JThrowable.pending !== null) return;
        let hashtable: ABHashtable | null = this.getStartStateHashtable(); if (JThrowable.pending !== null) return;
        this.setStartStateHashtable(StdUtil.getInstance()!.NULL_TABLE); if (JThrowable.pending !== null) return;
        PrimaryThreadPool.getInstance()!.runTask(new CreateGameRunnable().jinit_CreateGameRunnable_2(this, hashtable)); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(this.commonStrings!.END, this, CREATE_GAME); if (JThrowable.pending !== null) return;
    }
    

    isReady(): bool {
        return true;
    }
}

