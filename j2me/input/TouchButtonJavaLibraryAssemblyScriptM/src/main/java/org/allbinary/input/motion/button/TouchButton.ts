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
// import org.allbinary.animation.FeaturedAnimationInterfaceFactoryInterfaceFactory
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
    hintAnimationInterface: Animation | null = null;
    rawRectangle: Rectangle | null = null;
    xBorder: i32 = 0;
    yBorder: i32 = 0;
    rectangleP: Rectangle | null = null;
    cellPositionP: CellPosition | null = null;
    animationX: i32 = 0;
    animationY: i32 = 0;
    hintAnimationY: i32 = 0;

    jfields_TouchButton(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    
    
    
    
    
    
    this.rectangleP = RectangleFactory.SINGLETON;
    
    this.animationX = 0;
    this.animationY = 0;
    this.hintAnimationY = 0;
    }
    

    static createButton(touchButtonInput: TouchButtonInput | null, touchButtonResource: TouchButtonResource | null, rawRectangle: Rectangle | null, cellPosition: CellPosition | null, xBorder: i32, yBorder: i32): TouchButton | null {
        return new TouchButton().jinit_TouchButton_7(touchButtonInput, FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(touchButtonResource!.RESOURCE)!.getInstance1(0), FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(touchButtonResource!.HINT)!.getInstance1(0), rawRectangle, cellPosition, xBorder, yBorder);
    }
    

    jinit_TouchButton_7(touchButtonInput: TouchButtonInput | null, animationInterface: Animation | null, hintAnimationInterface: Animation | null, rawRectangle: Rectangle | null, cellPosition: CellPosition | null, xBorder: i32, yBorder: i32): TouchButton {
        super.jinit_Paintable_0();
        this.jfields_TouchButton();
        this.touchButtonInput = touchButtonInput;
        this.animationInterface = animationInterface;
        this.hintAnimationInterface = hintAnimationInterface;
        this.rawRectangle = rawRectangle;
        this.cellPositionP = cellPosition;
        this.xBorder = xBorder;
        this.yBorder = yBorder;
        this.updateRectangle(); if (JThrowable.pending !== null) return this;
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Created: ")!.append(this.toString())), this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    paintHint(graphics: Graphics | null): void {
        this.hintAnimationInterface!.paintXY(graphics, this.animationX, this.hintAnimationY); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        this.animationInterface!.paintXY(graphics, this.animationX, this.animationY); if (JThrowable.pending !== null) return;
    }
    

    updateRectangle(): void {
        do {
            let pointFactory: PointFactory | null = PointFactory.getInstance(); if (JThrowable.pending !== null) break;
            let x: i32 = this.rawRectangle!.getWidth() * this.cellPositionP!.getColumn(); if (JThrowable.pending !== null) break;
            let y: i32 = this.rawRectangle!.getHeight() * this.cellPositionP!.getRow(); if (JThrowable.pending !== null) break;
            this.rectangleP = new Rectangle().jinit_Rectangle_3(pointFactory!.createXY(x + this.xBorder, y + this.yBorder), this.rawRectangle!.getWidth(), this.rawRectangle!.getHeight()); if (JThrowable.pending !== null) break;
            let point: GPoint | null = this.rectangleP!.getPoint(); if (JThrowable.pending !== null) break;
            this.animationX = point!.getX(); if (JThrowable.pending !== null) break;
            this.animationY = point!.getY(); if (JThrowable.pending !== null) break;
            this.hintAnimationY = this.animationY - 32;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "updateRectangle", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getCellPosition(): CellPosition | null {
        return this.cellPositionP;
    }
    

    getRectangle(): Rectangle | null {
        return this.rectangleP;
    }
    

    getTouchButtonInput(): TouchButtonInput | null {
        return this.touchButtonInput;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let stringUtil: StringUtil | null = StringUtil.getInstance(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("TouchButton: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(stringUtil!.toString1(this.getRectangle())); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" CellPosition: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(stringUtil!.toString1(this.cellPositionP)); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" xBorder: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.xBorder); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" yBorder: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.yBorder); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

