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
// import javax.microedition.lcdui.Canvas
// import org.allbinary.game.input.GameInputStrings
// import org.allbinary.game.input.event.GameKeyEvent
// import org.allbinary.graphics.GPoint
// import org.allbinary.graphics.Rectangle
// import org.allbinary.graphics.displayable.MyCanvas
// import org.allbinary.input.motion.gesture.MotionGestureInput
// import org.allbinary.input.motion.gesture.TouchMotionGestureFactory
// import org.allbinary.input.motion.gesture.observer.MotionGestureEvent
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.math.RectangleCollisionUtil
// import org.allbinary.string.CommonSeps
// import org.allbinary.time.TimeDelayHelper
// import org.allbinary.util.BasicArrayList

@global export class PopupMenuInputProcessor extends BasicMenuInputProcessor {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.PopupMenuInputProcessor";
    }
    rectangleCollisionUtil: RectangleCollisionUtil | null = null;
    CLICK_DELAY: i32 = 0;
    clickTimeHelper: TimeDelayHelper | null = null;
    rectangle: Rectangle | null = null;

    jfields_PopupMenuInputProcessor(): void {
    this.rectangleCollisionUtil = RectangleCollisionUtil.getInstance();
    this.CLICK_DELAY = 120;
    this.clickTimeHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(this.CLICK_DELAY);
    
    }
    

    jinit_PopupMenuInputProcessor_4(gameKeyEventList: BasicArrayList | null, playerInputId: i32, gameCanvas: MyCanvas | null, rectangle: Rectangle | null): PopupMenuInputProcessor {
        super.jinit_BasicMenuInputProcessor_3(gameKeyEventList, playerInputId, gameCanvas);
        this.jfields_PopupMenuInputProcessor();
        this.rectangle = rectangle;
        return this;
    }
    

    init(rectangle: Rectangle | null): void {
        this.rectangle = rectangle;
    }
    

    processInput(key: i32): i32 {
        if (key == Canvas.KEY_STAR) {
            let gameCanvas: AllBinaryGameCanvas | null = changetype<AllBinaryGameCanvas | null>(this.getCanvas()); if (JThrowable.pending !== null) return 0;
            gameCanvas!.toggleMenu(); if (JThrowable.pending !== null) return 0;
            return 1;
        } if (JThrowable.pending !== null) return 0;
        return 0;
    }
    

    processInputList(): i32 {
        do {
            let motionInputsIndex: i32 = this.processMotionInputs(); if (JThrowable.pending !== null) break;
            let list: BasicArrayList | null = this.getGameKeyEventList(); if (JThrowable.pending !== null) break;
            let size: i32 = list!.size(); if (JThrowable.pending !== null) break;
            let key: i32 = 0;
            let gameKeyEvent: GameKeyEvent | null = null;
            for (let index: i32 = 0; index < size; index++) {
                gameKeyEvent = changetype<GameKeyEvent | null>(list!.objectArray![index]);
                if (gameKeyEvent != null) {
                    key = gameKeyEvent!.getKey(); if (JThrowable.pending !== null) break;
                    if (this.processInput(key) == 1) {
                        break;
                    } if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            this.clear(); if (JThrowable.pending !== null) break;
            if (size > 0 || motionInputsIndex >= 0) {
                return 1;
            } else {
                return -1;
            }
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, GameInputStrings.getInstance()!.PROCESS_INPUT, e); if (JThrowable.pending !== null) return 0;
            return -1;
        } if (JThrowable.pending !== null) return 0;
        return 0;
    }
    

    processMotionInputs(): i32 {
        let lastIndex: i32 = this.motionGestureEventList!.size() - 1; if (JThrowable.pending !== null) return 0;
        if (lastIndex >= 0) {
            let motionGestureEvent: MotionGestureEvent | null = changetype<MotionGestureEvent | null>(this.motionGestureEventList!.objectArray![lastIndex]);
            this.processMotionInput(motionGestureEvent); if (JThrowable.pending !== null) return 0;
        } if (JThrowable.pending !== null) return 0;
        this.motionGestureEventList!.clear(); if (JThrowable.pending !== null) return 0;
        return lastIndex;
    }
    

    processMotionInput(motionGestureEvent: MotionGestureEvent | null): void {
        if (motionGestureEvent == null) {
            this.logUtil!.putF("Exception: Bug", this, this.gameInputStrings!.PROCESS_MOTION_INPUT); if (JThrowable.pending !== null) return;
            return;
        } if (JThrowable.pending !== null) return;
        let touchMotionGestureFactory: TouchMotionGestureFactory | null = TouchMotionGestureFactory.getInstance(); if (JThrowable.pending !== null) return;
        let motionGestureInput: MotionGestureInput | null = motionGestureEvent!.getMotionGesture(); if (JThrowable.pending !== null) return;
        if (motionGestureInput == touchMotionGestureFactory!.RELEASED) {
            let point: GPoint | null = motionGestureEvent!.getCurrentPoint(); if (JThrowable.pending !== null) return;
            let rectPoint: GPoint | null = this.rectangle!.getPoint(); if (JThrowable.pending !== null) return;
            if (this.rectangleCollisionUtil!.isInside(rectPoint!.getX(), rectPoint!.getY(), this.rectangle!.getMaxX() + 20, this.rectangle!.getMaxY(), point!.getX(), point!.getY())) {
                if (this.clickTimeHelper!.isTimeTNT()) {
                    let gameCanvas: AllBinaryGameCanvas | null = changetype<AllBinaryGameCanvas | null>(this.getCanvas()); if (JThrowable.pending !== null) return;
                    gameCanvas!.toggleMenu(); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

