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
// import org.allbinary.animation.Animation
// import org.allbinary.animation.FeaturedAnimationInterfaceFactoryInterfaceFactory
// import org.allbinary.graphics.CellPosition
// import org.allbinary.graphics.GPoint
// import org.allbinary.graphics.PointFactory
// import org.allbinary.graphics.Rectangle

@global export class FullTouchButton extends TouchButton {

    jclassName(): string {
        return "org.allbinary.input.motion.button.FullTouchButton";
    }
    

    static createButton(touchButtonInput: TouchButtonInput | null, touchButtonResource: TouchButtonResource | null, rawRectangle: Rectangle | null, cellPosition: CellPosition | null, xBorder: i32, yBorder: i32): FullTouchButton | null {
        return new FullTouchButton().jinit_FullTouchButton_7(touchButtonInput, FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(touchButtonResource!.RESOURCE)!.getInstance1(0), FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.get(touchButtonResource!.HINT)!.getInstance1(0), rawRectangle, cellPosition, xBorder, yBorder);
    }
    

    jinit_FullTouchButton_7(touchButtonInput: TouchButtonInput | null, animationInterface: Animation | null, hintAnimationInterface: Animation | null, rawRectangle: Rectangle | null, cellPosition: CellPosition | null, xBorder: i32, yBorder: i32): FullTouchButton {
        super.jinit_TouchButton_7(touchButtonInput, animationInterface, hintAnimationInterface, rawRectangle, cellPosition, xBorder, yBorder);
        return this;
    }
    

    updateRectangle(): void {
        do {
            let pointFactory: PointFactory | null = PointFactory.getInstance(); if (JThrowable.pending !== null) break;
            let x: i32 = this.rawRectangle!.getWidth() * this.cellPositionP!.getColumn(); if (JThrowable.pending !== null) break;
            let y: i32 = this.rawRectangle!.getHeight() * this.cellPositionP!.getRow(); if (JThrowable.pending !== null) break;
            this.rectangleP = new Rectangle().jinit_Rectangle_3(pointFactory!.createXY(x, y), this.rawRectangle!.getWidth() + (2 * this.xBorder), this.rawRectangle!.getHeight() + (2 * this.yBorder)); if (JThrowable.pending !== null) break;
            let point: GPoint | null = this.rectangleP!.getPoint(); if (JThrowable.pending !== null) break;
            this.animationX = point!.getX() + this.xBorder; if (JThrowable.pending !== null) break;
            this.animationY = point!.getY() + this.yBorder; if (JThrowable.pending !== null) break;
            this.hintAnimationY = this.animationY - this.rectangleP!.getHeight() >> 1; if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "updateRectangle", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

