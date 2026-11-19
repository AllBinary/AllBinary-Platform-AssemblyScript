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
// package org.allbinary.game.score
// import javax.microedition.lcdui.Canvas
// import javax.microedition.lcdui.Font
// import javax.microedition.lcdui.Graphics
// import org.allbinary.game.input.event.GameKeyEventHandler
// import org.allbinary.game.input.event.GameKeyEventUtil
// import org.allbinary.game.score.displayable.HighScoresCanvas
// import org.allbinary.graphics.Anchor
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.graphics.font.UpdateMyFontProcessor
// import org.allbinary.util.BasicArrayList

@global export class HighScoresCanvasLevelChangeInputProcessor extends HighScoresCanvasInputProcessor implements UpdateMyFontInterface {

    jclassName(): string {
        return "org.allbinary.game.score.HighScoresCanvasLevelChangeInputProcessor";
    }
    displayInfoSingleton: DisplayInfoSingleton | null = null;
    INSTRUCTIONS: string | null = null;
    myFontProcessor: MyFontProcessor | null = null;
    anchor: i32 = 0;
    fontHeight: i32 = 0;

    jfields_HighScoresCanvasLevelChangeInputProcessor(): void {
    this.displayInfoSingleton = DisplayInfoSingleton.getInstance();
    this.INSTRUCTIONS = "(Right = Next Track, Left = Previous Track)";
    this.myFontProcessor = new UpdateMyFontProcessor().jinit_UpdateMyFontProcessor_1(this);
    this.anchor = Anchor.TOP_LEFT;
    this.fontHeight = 0;
    }
    

    jinit_HighScoresCanvasLevelChangeInputProcessor_1(highScoresCanvas: HighScoresCanvas | null): HighScoresCanvasLevelChangeInputProcessor {
        super.jinit_HighScoresCanvasInputProcessor_1(highScoresCanvas);
        this.jfields_HighScoresCanvasLevelChangeInputProcessor();
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        this.fontHeight = font!.getHeight(); if (JThrowable.pending !== null) return;
        this.myFontProcessor = MyFontProcessor.getInstance(); if (JThrowable.pending !== null) return;
    }
    

    open(): void {
        GameKeyEventHandler.getInstance()!.addListener(this); if (JThrowable.pending !== null) return;
    }
    

    close(): void {
        GameKeyEventHandler.getInstance()!.removeListener(this); if (JThrowable.pending !== null) return;
    }
    

    update(): void {
        let list: BasicArrayList | null = this.getGameKeyEventList(); if (JThrowable.pending !== null) return;
        let size: i32 = list!.size(); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < size; index++) {
            let anyType: Object | null = list!.objectArray![index];
            let key: i32 = GameKeyEventUtil.getKey(anyType); if (JThrowable.pending !== null) return;
            if (key == Canvas.RIGHT) {
                this.getHighScoresCanvas()!.getGameInfo()!.nextGameLevel(); if (JThrowable.pending !== null) return;
            } else if (key == Canvas.LEFT) {
                this.getHighScoresCanvas()!.getGameInfo()!.previousGameLevel(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            this.getHighScoresCanvas()!.executeUpdate(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        list!.clear(); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        let width: i32 = this.displayInfoSingleton!.getLastWidth(); if (JThrowable.pending !== null) return;
        let topScoresWidth: i32 = (graphics!.getFont()!.stringWidth(this.INSTRUCTIONS) >> 1); if (JThrowable.pending !== null) return;
        graphics!.drawString(this.INSTRUCTIONS, (width >> 1) - topScoresWidth, this.fontHeight * 2, this.anchor); if (JThrowable.pending !== null) return;
    }
}

