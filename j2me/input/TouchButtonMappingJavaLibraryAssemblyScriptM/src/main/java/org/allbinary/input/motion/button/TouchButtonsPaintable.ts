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
// package org.allbinary.input.motion.button
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorSetUtil
// import org.allbinary.graphics.paint.Paintable
// import org.allbinary.util.BasicArrayList

@global export class TouchButtonsPaintable extends Paintable {

    jclassName(): string {
        return "org.allbinary.input.motion.button.TouchButtonsPaintable";
    }
    foregroundBasicColor: BasicColor | null = null;
    foregroundColor: i32 = 0;
    basicSetColorUtil: BasicColorSetUtil | null = null;
    touchButtonFactory: TouchButtonFactory | null = null;

    jfields_TouchButtonsPaintable(): void {
    
    
    this.basicSetColorUtil = BasicColorSetUtil.getInstance();
    this.touchButtonFactory = TouchButtonFactory.getInstance();
    }
    

    jinit_TouchButtonsPaintable_1(basicColor: BasicColor | null): TouchButtonsPaintable {
        super.jinit_Paintable_0();
        this.jfields_TouchButtonsPaintable();
        this.foregroundBasicColor = basicColor;
        this.foregroundColor = basicColor!.intValue(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    paint(graphics: Graphics | null): void {
        let list: BasicArrayList | null = this.touchButtonFactory!.getList(); if (JThrowable.pending !== null) return;
        this.basicSetColorUtil!.setBasicColorP3(graphics, this.foregroundBasicColor, this.foregroundColor); if (JThrowable.pending !== null) return;
        let touchButton: TouchButton | null = null;
        for (let index: i32 = list!.size(); --index >= 0; ) {
            touchButton = changetype<TouchButton | null>(list!.objectArray![index]);
            touchButton!.paint(graphics); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        for (let index: i32 = list!.size(); --index >= 0; ) {
            touchButton = changetype<TouchButton | null>(list!.objectArray![index]);
            touchButton!.paintHint(graphics); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

