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
// package org.allbinary.game.paint
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.color.ColorCompositeInterface
// import org.allbinary.graphics.paint.Paintable

@global export class ColorFillBasePaintable extends Paintable implements ColorCompositeInterface {

    jclassName(): string {
        return "org.allbinary.game.paint.ColorFillBasePaintable";
    }
    basicColor: BasicColor | null = null;
    colorP: i32 = 0;

    jfields_ColorFillBasePaintable(): void {
    this.basicColor = BasicColorFactory.getInstance()!.WHITE;
    this.colorP = 0;
    }
    

    jinit_ColorFillBasePaintable_1(basicColor: BasicColor | null): ColorFillBasePaintable {
        super.jinit_Paintable_0();
        this.jfields_ColorFillBasePaintable();
        this.setBasicColorP(basicColor); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    setBasicColorP(basicColor: BasicColor | null): void {
        this.basicColor = basicColor;
        this.setColor(this.getBasicColorP()!.intValue()); if (JThrowable.pending !== null) return;
    }
    

    getBasicColorP(): BasicColor | null {
        return this.basicColor;
    }
    

    getColor(): i32 {
        return this.colorP;
    }
    

    setColor(color: i32): void {
        this.colorP = color;
    }
    

    paint(graphics: Graphics | null): void {
    }
}

