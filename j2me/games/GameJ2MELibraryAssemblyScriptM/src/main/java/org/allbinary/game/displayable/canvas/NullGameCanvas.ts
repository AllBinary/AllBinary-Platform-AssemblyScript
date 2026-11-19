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
// import javax.microedition.lcdui.CommandListener
// import javax.microedition.lcdui.Graphics
// import javax.microedition.lcdui.NullCommandListener
// import org.allbinary.game.init.BasicBuildGameInitializerFactory
// import org.allbinary.game.layer.AllBinaryGameLayerManager
// import org.allbinary.game.score.NoHighScoresFactory
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class NullGameCanvas extends AllBinaryGameCanvas {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.NullGameCanvas";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!NullGameCanvas.js_instance) {
            NullGameCanvas.js_instance = true;
            NullGameCanvas.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return NullGameCanvas.jv_instance;
    }
    static set instance(value: Object | null) {
        NullGameCanvas.js_instance = true;
        NullGameCanvas.jv_instance = value;
    }
    @lazy static readonly NO_GAME: string | null = "No Background Game";
    static readonly TYPE: i32 = 1;
    runningNull: bool = false;

    jfields_NullGameCanvas(): void {
    this.runningNull = true;
    }
    

    static createNull(): NullGameCanvas | null {
        do {
            return new NullGameCanvas().jinit_NullGameCanvas_1(AllBinaryGameLayerManager.getNullInstance());
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            LogUtil.getInstance()!.put(CommonStrings.getInstance()!.EXCEPTION, "NullGameCanvas", CommonStrings.getInstance()!.GET_INSTANCE, e); if (JThrowable.pending !== null) return null;
            { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    static getInstance(): NullGameCanvas | null {
        if (NullGameCanvas.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            NullGameCanvas.instance = NullGameCanvas.createNull(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<NullGameCanvas | null>(NullGameCanvas.instance);
    }
    

    static createCanvas(gameLayerManager: AllBinaryGameLayerManager | null): NullGameCanvas | null {
        let nullGameCanvas: NullGameCanvas | null = new NullGameCanvas().jinit_NullGameCanvas_1(gameLayerManager); if (JThrowable.pending !== null) return null;
        nullGameCanvas!.setInitialized(true); if (JThrowable.pending !== null) return null;
        nullGameCanvas!.setTitle(NullGameCanvas.NO_GAME); if (JThrowable.pending !== null) return null;
        return nullGameCanvas;
    }
    

    jinit_NullGameCanvas_1(gameLayerManager: AllBinaryGameLayerManager | null): NullGameCanvas {
        super.jinit_AllBinaryGameCanvas_5(NullCommandListener.NULL_COMMAND_LISTENER, gameLayerManager, NoHighScoresFactory.getInstance(), BasicBuildGameInitializerFactory.NULL_BASE_BUILD_GMAE_INITIALIZER_FACTORY, false);
        this.jfields_NullGameCanvas();
        super.setWait(1200); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    isGameOver(): bool {
        return false;
    }
    

    setRunning(running: bool): void {
        this.runningNull = running;
    }
    

    isRunning(): bool {
        return this.runningNull;
    }
    

    pause(): void {
        this.setPaused(true); if (JThrowable.pending !== null) return;
    }
    

    unPause(): void {
        this.setPaused(false); if (JThrowable.pending !== null) return;
    }
    

    initCommands(cmdListener: CommandListener | null): void {
        this.removeAllCommands(); if (JThrowable.pending !== null) return;
        this.setCommandListener(cmdListener); if (JThrowable.pending !== null) return;
    }
    

    buildGameInit(isProgress: bool): void {
    }
    

    draw(graphics: Graphics | null): void {
    }
    

    run(): void {
        do {
            this.logUtil!.putF(this.commonStrings!.START_RUNNABLE, this, this.commonStrings!.RUN); if (JThrowable.pending !== null) break;
            this.logUtil!.putF(this.commonStrings!.END_RUNNABLE, this, this.commonStrings!.RUN); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.RUN, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getType(): i32 {
        return NullGameCanvas.TYPE;
    }
}

