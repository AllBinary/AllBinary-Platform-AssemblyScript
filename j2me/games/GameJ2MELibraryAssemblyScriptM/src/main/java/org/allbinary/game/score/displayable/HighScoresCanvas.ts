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
// package org.allbinary.game.score.displayable
// import javax.microedition.lcdui.Command
// import javax.microedition.lcdui.CommandListener
// import javax.microedition.lcdui.Graphics
// import org.allbinary.game.GameInfo
// import org.allbinary.game.commands.GameCommandsFactory
// import org.allbinary.game.displayable.canvas.GameCommandCanvas
// import org.allbinary.game.layer.AllBinaryGameLayerManager
// import org.allbinary.game.paint.ColorFillBasePaintable
// import org.allbinary.game.paint.ColorFillPaintableFactory
// import org.allbinary.game.score.HighScoreCommandsFactory
// import org.allbinary.game.score.HighScores
// import org.allbinary.game.score.HighScoresCanvasInputProcessor
// import org.allbinary.game.score.HighScoresCanvasInputProcessorFactoryInterface
// import org.allbinary.game.score.HighScoresFactoryInterface
// import org.allbinary.game.score.HighScoresHelperBase
// import org.allbinary.game.score.HighScoresPaintable
// import org.allbinary.game.score.HighScoresResultsListener
// import org.allbinary.game.score.NoHighScoresFactory
// import org.allbinary.game.score.NullHighScoresSingletonFactory
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.paint.NullPaintable
// import org.allbinary.graphics.paint.Paintable
// import org.allbinary.graphics.paint.SimpleTextPaintable
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonStrings
// import org.allbinary.thread.SecondaryThreadPool

@global export class HighScoresCanvas extends GameCommandCanvas implements HighScoresResultsListener {

    jclassName(): string {
        return "org.allbinary.game.score.displayable.HighScoresCanvas";
    }
    @lazy static readonly NAME: string | null = "HighScoresCanvas";
    paintable: Paintable | null = null;
    highScoreCommandsFactory: HighScoreCommandsFactory | null = null;
    waitPaintable: SimpleTextPaintable | null = null;
    highScoresPaintable: HighScoresPaintable | null = null;
    highScoresFactoryInterface: HighScoresFactoryInterface | null = null;
    colorFillPaintable: ColorFillBasePaintable | null = null;
    highScoresHelper: HighScoresHelperBase | null = null;
    gameInfo: GameInfo | null = null;
    highScoresCanvasInputProcessor: HighScoresCanvasInputProcessor | null = null;
    currentCommand: Command | null = null;
    hasPainted: bool = false;

    jfields_HighScoresCanvas(): void {
    this.paintable = NullPaintable.getInstance();
    this.highScoreCommandsFactory = HighScoreCommandsFactory.getInstance();
    this.waitPaintable = new SimpleTextPaintable().jinit_SimpleTextPaintable_2(this.commonStrings!.PLEASE_WAIT_FOR_SERVER, BasicColorFactory.getInstance()!.WHITE);
    
    
    
    this.highScoresHelper = new HighScoresHelperBase().jinit_HighScoresHelperBase_0();
    
    
    this.currentCommand = this.highScoreCommandsFactory!.HIGH_SCORE_COMMANDS![0];
    this.hasPainted = false;
    }
    

    jinit_HighScoresCanvas_6(commandListener: CommandListener | null, allBinaryGameLayerManager: AllBinaryGameLayerManager | null, gameInfo: GameInfo | null, paintable: HighScoresPaintable | null, highScoresFactoryInterface: HighScoresFactoryInterface | null, highScoresCanvasInputProcessorFactoryInterface: HighScoresCanvasInputProcessorFactoryInterface | null): HighScoresCanvas {
        super.jinit_GameCommandCanvas_4(commandListener, HighScoresCanvas.NAME, allBinaryGameLayerManager!.getBackgroundBasicColor(), allBinaryGameLayerManager!.getForegroundBasicColor());
        this.jfields_HighScoresCanvas();
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
        this.highScoresPaintable = paintable;
        this.highScoresFactoryInterface = highScoresFactoryInterface;
        this.highScoresCanvasInputProcessor = highScoresCanvasInputProcessorFactoryInterface!.getInstance1(this); if (JThrowable.pending !== null) return this;
        this.gameInfo = gameInfo;
        this.waitPaintable!.setBasicColorP(allBinaryGameLayerManager!.getForegroundBasicColor()); if (JThrowable.pending !== null) return this;
        this.getHighScoresPaintable()!.setBasicColorP(allBinaryGameLayerManager!.getForegroundBasicColor()); if (JThrowable.pending !== null) return this;
        this.colorFillPaintable = ColorFillPaintableFactory.getInstance()!.getInstance2(allBinaryGameLayerManager!.getBackgroundBasicColor(), false); if (JThrowable.pending !== null) return this;
        if (this.highScoresHelper!.getHighScoresArray()!.length == NoHighScoresFactory.getInstance()!.NO_HIGH_SCORES!.length) {
            this.setPaintable(this.waitPaintable); if (JThrowable.pending !== null) return this;
        } else {
            this.logUtil!.putF("Show HighScores that are already loaded", this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
            this.updateCommand(this.currentCommand); if (JThrowable.pending !== null) return this;
            this.setPaintable(this.getHighScoresPaintable()); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        SecondaryThreadPool.getInstance()!.runTask(new HighScoreRunnable().jinit_HighScoreRunnable_1(this)); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    initCommands(cmdListener: CommandListener | null): void {
        this.removeAllCommands(); if (JThrowable.pending !== null) return;
        this.addCommand(GameCommandsFactory.getInstance()!.CLOSE_AND_SHOW_GAME_CANVAS); if (JThrowable.pending !== null) return;
        this.setCommandListener(cmdListener); if (JThrowable.pending !== null) return;
    }
    

    open(): void {
        super.open(); if (JThrowable.pending !== null) return;
        this.highScoresCanvasInputProcessor!.open(); if (JThrowable.pending !== null) return;
    }
    

    close(): void {
        super.close(); if (JThrowable.pending !== null) return;
        this.highScoresCanvasInputProcessor!.close(); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        this.colorFillPaintable!.paint(graphics); if (JThrowable.pending !== null) return;
        this.paintable!.paint(graphics); if (JThrowable.pending !== null) return;
        if (this.waitPaintable != this.paintable) {
            this.highScoresCanvasInputProcessor!.paint(graphics); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        super.paint(graphics); if (JThrowable.pending !== null) return;
        this.hasPainted = true;
    }
    

    executeUpdate(): void {
        do {
            this.highScoresFactoryInterface!.fetchHighScores(this.getGameInfo(), this); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.UPDATE, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getHighScoresPaintable(): HighScoresPaintable | null {
        return this.highScoresPaintable;
    }
    

    setHighScoresArray(highScoresArray: StaticArray<HighScores | null> | null): void {
        do {
            if (highScoresArray != null) {
                this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.commonStrings!.START)!.appendint(highScoresArray!.length)), this, "setHighScoresArray"); if (JThrowable.pending !== null) break;
            } else {
                this.logUtil!.putF(this.commonStrings!.START, this, "setHighScoresArray"); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            this.highScoresHelper!.setHighScoresArray(highScoresArray); if (JThrowable.pending !== null) break;
            this.updateCommand(this.currentCommand); if (JThrowable.pending !== null) break;
            this.setPaintable(this.getHighScoresPaintable()); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.UPDATE, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    updateCommand(command: Command | null): void {
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.commonStrings!.START)!.append(this.stringUtil!.toString1(command))), this, this.commonStrings!.UPDATE); if (JThrowable.pending !== null) return;
        let gameCommandsFactory: GameCommandsFactory | null = GameCommandsFactory.getInstance(); if (JThrowable.pending !== null) return;
        if (this.highScoreCommandsFactory!.isHighScoreCommand(command)) {
            let index: i32 = this.highScoreCommandsFactory!.getIndex(command); if (JThrowable.pending !== null) return;
            let nextIndex: i32 = index + 1;
            let highScoresArray: StaticArray<HighScores | null> | null = this.highScoresHelper!.getHighScoresArray(); if (JThrowable.pending !== null) return;
            if (nextIndex >= highScoresArray!.length) {
                nextIndex = 0;
            }
            if (highScoresArray!.length > 0) {
                this.getHighScoresPaintable()!.setHighScores(highScoresArray![index]); if (JThrowable.pending !== null) return;
            } else {
                this.getHighScoresPaintable()!.setHighScores(NullHighScoresSingletonFactory.getInstance()); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            if (index != nextIndex) {
                this.removeAllCommands(); if (JThrowable.pending !== null) return;
                this.addCommand(gameCommandsFactory!.CLOSE_AND_SHOW_GAME_CANVAS); if (JThrowable.pending !== null) return;
                this.addCommand(this.highScoreCommandsFactory!.HIGH_SCORE_COMMANDS![nextIndex]); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.currentCommand = command;
        this.close(); if (JThrowable.pending !== null) return;
        super.initMenu(); if (JThrowable.pending !== null) return;
        this.open(); if (JThrowable.pending !== null) return;
        this.repaintBehavior!.onChangeRepaint(this); if (JThrowable.pending !== null) return;
    }
    

    getGameInfo(): GameInfo | null {
        return this.gameInfo;
    }
    

    setPaintable(paintable: Paintable | null): void {
        this.paintable = paintable;
        this.repaintBehavior!.onChangeRepaint(this); if (JThrowable.pending !== null) return;
    }
}

