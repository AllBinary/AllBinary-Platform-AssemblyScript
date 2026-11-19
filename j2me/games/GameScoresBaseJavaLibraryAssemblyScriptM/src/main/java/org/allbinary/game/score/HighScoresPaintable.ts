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
// import javax.microedition.lcdui.Font
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.Anchor
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.color.ColorChangeEvent
// import org.allbinary.graphics.color.ColorChangeListener
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.graphics.font.UpdateMyFontProcessor
// import org.allbinary.graphics.paint.Paintable
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.util.BasicArrayList

@global export class HighScoresPaintable extends Paintable implements ColorChangeListener, UpdateMyFontInterface {

    jclassName(): string {
        return "org.allbinary.game.score.HighScoresPaintable";
    }
    displayInfoSingleton: DisplayInfoSingleton | null = null;
    myFontProcessor: MyFontProcessor | null = null;
    basicColor: BasicColor | null = null;
    highScores: HighScores | null = null;
    anchor: i32 = 0;
    charHeight: i32 = 0;

    jfields_HighScoresPaintable(): void {
    this.displayInfoSingleton = DisplayInfoSingleton.getInstance();
    this.myFontProcessor = new UpdateMyFontProcessor().jinit_UpdateMyFontProcessor_1(this);
    this.basicColor = BasicColorFactory.getInstance()!.WHITE;
    this.highScores = NullHighScoresSingletonFactory.getInstance();
    this.anchor = Anchor.TOP_LEFT;
    this.charHeight = 0;
    }
    

    jinit_HighScoresPaintable_0(): HighScoresPaintable {
        super.jinit_Paintable_0();
        this.jfields_HighScoresPaintable();
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        this.charHeight = font!.getHeight(); if (JThrowable.pending !== null) return;
        this.myFontProcessor = MyFontProcessor.getInstance(); if (JThrowable.pending !== null) return;
    }
    

    onEvent(eventObject: AllBinaryEventObject | null): void {
        let colorChangeEvent: ColorChangeEvent | null = changetype<ColorChangeEvent | null>(eventObject);
        this.basicColor = colorChangeEvent!.getBasicColorP(); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        let width: i32 = this.displayInfoSingleton!.getLastWidth(); if (JThrowable.pending !== null) return;
        let height: i32 = this.displayInfoSingleton!.getLastHeight(); if (JThrowable.pending !== null) return;
        graphics!.setColor(this.getBasicColorP()!.intValue()); if (JThrowable.pending !== null) return;
        let heading: string | null = this.highScores!.getHeading(); if (JThrowable.pending !== null) return;
        let topScoresWidth: i32 = (graphics!.getFont()!.stringWidth(heading) >> 1); if (JThrowable.pending !== null) return;
        let charHeight: i32 = this.charHeight;
        graphics!.drawString(heading, (width >> 1) - topScoresWidth, charHeight, this.anchor); if (JThrowable.pending !== null) return;
        graphics!.drawString(this.highScores!.getColumnOneHeading(), 10, charHeight * 3, this.anchor); if (JThrowable.pending !== null) return;
        let columnTwoHeading: string | null = this.highScores!.getColumnTwoHeading(); if (JThrowable.pending !== null) return;
        let columnTwoHeadingWidth: i32 = graphics!.getFont()!.stringWidth(columnTwoHeading); if (JThrowable.pending !== null) return;
        graphics!.drawString(columnTwoHeading, width - 10 - columnTwoHeadingWidth, charHeight * 3, this.anchor); if (JThrowable.pending !== null) return;
        let index: i32 = 4;
        let largestSecondColumnWidth: i32 = columnTwoHeadingWidth;
        let list: BasicArrayList | null = this.highScores!.getList(); if (JThrowable.pending !== null) return;
        let size: i32 = list!.size(); if (JThrowable.pending !== null) return;
        let vectorIndex: i32 = 0;
        let highScore: HighScore | null = null;
        while (vectorIndex < size && charHeight * index < height - (charHeight * 2)) {
            highScore = changetype<HighScore | null>(list!.objectArray![vectorIndex]);
            let nextScoreWidth: i32 = graphics!.getFont()!.stringWidth(highScore!.getScoreString()); if (JThrowable.pending !== null) return;
            if (nextScoreWidth > largestSecondColumnWidth) {
                largestSecondColumnWidth = nextScoreWidth;
            }
            vectorIndex++;
        } if (JThrowable.pending !== null) return;
        vectorIndex = 0;
        while (vectorIndex < size && charHeight * index < height - (charHeight * 2)) {
            highScore = changetype<HighScore | null>(list!.objectArray![vectorIndex]);
            graphics!.drawString(highScore!.getName(), 10, charHeight * index, this.anchor); if (JThrowable.pending !== null) return;
            graphics!.drawString(highScore!.getScoreString(), width - 10 - largestSecondColumnWidth, charHeight * index, this.anchor); if (JThrowable.pending !== null) return;
            index++;
            vectorIndex++;
        } if (JThrowable.pending !== null) return;
    }
    

    setBasicColorP(basicColor: BasicColor | null): void {
        this.basicColor = basicColor;
    }
    

    getBasicColorP(): BasicColor | null {
        return this.basicColor;
    }
    

    setHighScores(highScores: HighScores | null): void {
        this.highScores = highScores;
    }
}

