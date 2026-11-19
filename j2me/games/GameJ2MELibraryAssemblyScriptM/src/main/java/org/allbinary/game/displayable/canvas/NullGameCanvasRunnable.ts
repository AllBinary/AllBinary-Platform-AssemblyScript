/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// import javax.microedition.lcdui.LcduiItem
// import org.allbinary.game.state.GameState
// import org.allbinary.game.state.GameStateFactory
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.util.ABHashtable

@global export class NullGameCanvasRunnable extends JObject implements GameCanvasRunnableInterface {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.NullGameCanvasRunnable";
    }
    @lazy static jv_NULL_GAME_CANVAS_RUNNABLE: NullGameCanvasRunnable | null = null;
    @lazy static js_NULL_GAME_CANVAS_RUNNABLE: bool = false;
    static get NULL_GAME_CANVAS_RUNNABLE(): NullGameCanvasRunnable | null {
        if (!NullGameCanvasRunnable.js_NULL_GAME_CANVAS_RUNNABLE) {
            NullGameCanvasRunnable.js_NULL_GAME_CANVAS_RUNNABLE = true;
            NullGameCanvasRunnable.jv_NULL_GAME_CANVAS_RUNNABLE = new NullGameCanvasRunnable().jinit_NullGameCanvasRunnable_0();
        }
        return NullGameCanvasRunnable.jv_NULL_GAME_CANVAS_RUNNABLE;
    }
    static set NULL_GAME_CANVAS_RUNNABLE(value: NullGameCanvasRunnable | null) {
        NullGameCanvasRunnable.js_NULL_GAME_CANVAS_RUNNABLE = true;
        NullGameCanvasRunnable.jv_NULL_GAME_CANVAS_RUNNABLE = value;
    }
    gameStateFactory: GameStateFactory | null = null;

    jfields_NullGameCanvasRunnable(): void {
    this.gameStateFactory = GameStateFactory.getInstance();
    }

    jinit_NullGameCanvasRunnable_0(): NullGameCanvasRunnable {
        super.jinit_JObject_0();
        this.jfields_NullGameCanvasRunnable();
        return this;
    }
    

    getTitle(): string | null {
        return StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    isInitialized(): bool {
        return false;
    }
    

    isPaused(): bool {
        return false;
    }
    

    unPause(): void {
    }
    

    pause(): void {
    }
    

    isHighScoreSubmitted(): bool {
        return false;
    }
    

    setHighScoreSubmitted(highScoreSubmitted: bool): void {
    }
    

    processGameOver(): void {
    }
    

    isGameOver(): bool {
        return false;
    }
    

    initCommands(cmdListener: CommandListener | null): void {
    }
    

    getCurrentStateHashtable(): ABHashtable | null {
        return StdUtil.getInstance()!.NULL_TABLE;
    }
    

    getLoadStateHashtable(): ABHashtable | null {
        return StdUtil.getInstance()!.NULL_TABLE;
    }
    

    setLoadStateHashtable(hashtable: ABHashtable | null): void {
    }
    

    getType(): i32 {
        return -1;
    }
    

    setGameState(gameState: GameState | null): void {
    }
    

    getGameState(): GameState | null {
        return this.gameStateFactory!.NO_GAME_STATE;
    }
    

    itemStateChanged(item: LcduiItem | null): void {
    }
    

    paint(graphics: Graphics | null): void {
    }
    

    paintThreed(graphics: Graphics | null): void {
    }
    

    isRunning(): bool {
        return false;
    }
    

    setRunning(isRunning: bool): void {
    }
    

    setThread(thread: JThread | null): void {
    }
    

    run(): void {
    }
}

