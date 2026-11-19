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
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.paint.InitUpdatePaintable
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class OverlayPaintable extends InitUpdatePaintable {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.OverlayPaintable";
    }
    logUtil: LogUtil | null = null;

    jfields_OverlayPaintable(): void {
    this.logUtil = LogUtil.getInstance();
    }
    

    jinit_OverlayPaintable_0(): OverlayPaintable {
        super.jinit_InitUpdatePaintable_0();
        this.jfields_OverlayPaintable();
        return this;
    }
    

    update(): void {
        do {
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.UPDATE, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
    }
}

