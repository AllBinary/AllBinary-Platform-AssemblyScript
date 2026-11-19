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
// import javax.microedition.lcdui.ItemStateListener
// import org.allbinary.game.state.GameStateCompositeInterface
// import org.allbinary.graphics.paint.PaintableInterface
// import org.allbinary.thread.RunnableInterface
// import org.allbinary.util.ABHashtable

@global export interface GameCanvasRunnableInterface extends RunnableInterface /* Java also extends PaintableInterface ItemStateListener GameStateCompositeInterface */ {
    

    getTitle(): string | null;
    

    isInitialized(): bool;
    

    isPaused(): bool;
    

    unPause(): void;
    

    pause(): void;
    

    isHighScoreSubmitted(): bool;
    

    setHighScoreSubmitted(highScoreSubmitted: bool): void;
    

    processGameOver(): void;
    

    isGameOver(): bool;
    

    initCommands(cmdListener: CommandListener | null): void;
    

    getCurrentStateHashtable(): ABHashtable | null;
    

    getLoadStateHashtable(): ABHashtable | null;
    

    setLoadStateHashtable(hashtable: ABHashtable | null): void;
    

    getType(): i32;

    paint(p0: Graphics | null): void;

    paintThreed(p0: Graphics | null): void;

    itemStateChanged(p0: Item | null): void;

    setGameState(p0: GameState | null): void;

    getGameState(): GameState | null;
}

