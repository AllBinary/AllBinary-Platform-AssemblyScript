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
// package org.allbinary.game.ag.layer.hud.basic.score
// import javax.microedition.lcdui.Font
// import javax.microedition.lcdui.Graphics
// import org.allbinary.game.ag.layer.hud.basic.NumberStringHud
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory

@global export class ScoreHudWidget extends NumberStringHud {

    jclassName(): string {
        return "org.allbinary.game.ag.layer.hud.basic.score.ScoreHudWidget";
    }
    

    static getInstance3(maxscore: i32, location: i32, direction: i32): ScoreHudWidget | null {
        return new ScoreHudWidget().jinit_ScoreHudWidget_5(maxscore, location, direction, 2, BasicColorFactory.getInstance()!.GREY);
    }
    

    jinit_ScoreHudWidget_5(maxscore: i32, location: i32, direction: i32, bufferZone: i32, basicColor: BasicColor | null): ScoreHudWidget {
        super.jinit_NumberStringHud_6("Pts ", maxscore, location, direction, bufferZone, basicColor);
        this.updateMaxHeight = 14;
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        this.updateMaxWidth = font!.getSize() * 5; if (JThrowable.pending !== null) return;
        super.updateMeasurement(graphics); if (JThrowable.pending !== null) return;
    }
}

