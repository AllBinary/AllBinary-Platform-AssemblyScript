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
// import org.allbinary.animation.Animation
// import org.allbinary.animation.AnimationInterface
// import org.allbinary.graphics.CellPosition
// import org.allbinary.graphics.GPoint
// import org.allbinary.graphics.PointFactory
// import org.allbinary.graphics.Rectangle
// import org.allbinary.graphics.RectangleFactory
// import org.allbinary.graphics.paint.Paintable
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonStrings

@global export class TouchButton extends Paintable {

    jclassName(): string {
        return "org.allbinary.input.motion.button.TouchButton";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    touchButtonInput: TouchButtonInput | null = null;
    animationInterface: Animation | null = null;
    rawRectangle: Rectangle | null = null;
    xBorder: i32 = 0;
    yBorder: i32 = 0;
    rectangle: Rectangle | null = null;
    cellPosition: CellPosition | null = null;
    animationX: i32 = 0;
    animationY: i32 = 0;

    jfields_TouchButton(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    
    
    
    
    
    this.rectangle = RectangleFactory.SINGLETON;
    
    this.animationX = 0;
    this.animationY = 0;
    }
    

    jinit_TouchButton_6(touchButtonInput: TouchButtonInput | null, animationInterface: AnimationInterface | null, rawRectangle: Rectangle | null, cellPosition: CellPosition | null, xBorder: i32, yBorder: i32): TouchButton {
        super.jinit_Paintable_0();
        this.jfields_TouchButton();
        this.touchButtonInput = touchButtonInput;
        this.animationInterface = changetype<Animation | null>(animationInterface);
        this.rawRectangle = rawRectangle;
        this.cellPosition = cellPosition;
        this.xBorder = xBorder;
        this.yBorder = yBorder;
        this.updateRectangle(); if (JThrowable.pending !== null) return this;
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Created: ")!.append(this.toString())), this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    paint(graphics: Graphics | null): void {
        this.animationInterface!.paintXY(graphics, this.animationX, this.animationY); if (JThrowable.pending !== null) return;
    }
    

    updateRectangle(): void {
        do {
            let x: i32 = this.rawRectangle!.getWidth() * this.cellPosition!.getColumn(); if (JThrowable.pending !== null) break;
            let y: i32 = this.rawRectangle!.getHeight() * this.cellPosition!.getRow(); if (JThrowable.pending !== null) break;
            let pointFactory: PointFactory | null = PointFactory.getInstance(); if (JThrowable.pending !== null) break;
            this.rectangle = new Rectangle().jinit_Rectangle_3(pointFactory!.createXY(x + this.xBorder, y + this.yBorder), this.rawRectangle!.getWidth(), this.rawRectangle!.getHeight()); if (JThrowable.pending !== null) break;
            let point: GPoint | null = this.rectangle!.getPoint(); if (JThrowable.pending !== null) break;
            this.animationX = point!.getX(); if (JThrowable.pending !== null) break;
            this.animationY = point!.getY(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "updateRectangle", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getCellPositionP(): CellPosition | null {
        return this.cellPosition;
    }
    

    getRectangleP(): Rectangle | null {
        return this.rectangle;
    }
    

    getTouchButtonInput(): TouchButtonInput | null {
        return this.touchButtonInput;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let stringUtil: StringUtil | null = StringUtil.getInstance(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("TouchButton: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(stringUtil!.toString1(this.rectangle)); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" CellPosition: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(stringUtil!.toString1(this.cellPosition)); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" xBorder: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.xBorder); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" yBorder: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.yBorder); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

