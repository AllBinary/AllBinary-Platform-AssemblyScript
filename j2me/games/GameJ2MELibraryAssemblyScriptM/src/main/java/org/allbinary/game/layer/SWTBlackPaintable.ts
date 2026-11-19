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
// package org.allbinary.game.layer
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.color.BasicColorSetUtil
// import org.allbinary.graphics.paint.Paintable

@global export class SWTBlackPaintable extends Paintable {

    jclassName(): string {
        return "org.allbinary.game.layer.SWTBlackPaintable";
    }
    basicSetColorUtil: BasicColorSetUtil | null = null;
    BLACK: BasicColor | null = null;

    jfields_SWTBlackPaintable(): void {
    this.basicSetColorUtil = BasicColorSetUtil.getInstance();
    this.BLACK = BasicColorFactory.getInstance()!.BLACK;
    }

    jinit_SWTBlackPaintable_0(): SWTBlackPaintable {
        super.jinit_Paintable_0();
        this.jfields_SWTBlackPaintable();
        return this;
    }
    

    paint(graphics: Graphics | null): void {
        this.basicSetColorUtil!.setBasicColorP(graphics, this.BLACK); if (JThrowable.pending !== null) return;
    }
}

