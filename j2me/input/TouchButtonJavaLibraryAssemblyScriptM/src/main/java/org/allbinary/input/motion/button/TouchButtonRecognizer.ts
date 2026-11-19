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
// import org.allbinary.game.input.event.DownGameKeyEventHandler
// import org.allbinary.game.input.event.GameKeyEvent
// import org.allbinary.game.input.event.UpGameKeyEventHandler
// import org.allbinary.graphics.GPoint
// import org.allbinary.graphics.Rectangle
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.math.RectangleCollisionUtil
// import org.allbinary.util.BasicArrayList

@global export class TouchButtonRecognizer extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.button.TouchButtonRecognizer";
    }
    logUtil: LogUtil | null = null;
    rectangleCollisionUtil: RectangleCollisionUtil | null = null;
    upGameKeyEventHandler: UpGameKeyEventHandler | null = null;
    downGameKeyEventHandler: DownGameKeyEventHandler | null = null;
    lastPressedTouchButtonInput: TouchButtonInput | null = null;
    currentlyPressedTouchButtonSingleton: CurrentlyPressedTouchButtonSingleton | null = null;
    releaseHelper: ReleaseHelper | null = null;

    jfields_TouchButtonRecognizer(): void {
    this.logUtil = LogUtil.getInstance();
    this.rectangleCollisionUtil = RectangleCollisionUtil.getInstance();
    this.upGameKeyEventHandler = UpGameKeyEventHandler.getInstance();
    this.downGameKeyEventHandler = DownGameKeyEventHandler.getInstance();
    this.lastPressedTouchButtonInput = BasicTouchInputFactory.getInstance()!.NONE;
    this.currentlyPressedTouchButtonSingleton = CurrentlyPressedTouchButtonSingleton.getInstance();
    this.releaseHelper = null;
    }
    

    jinit_TouchButtonRecognizer_0(): TouchButtonRecognizer {
        super.jinit_JObject_0();
        this.jfields_TouchButtonRecognizer();
        if (TouchScreenFactory.getInstance()!.isMultiTouch()) {
            this.releaseHelper = new MultitouchReleaseHelper().jinit_MultitouchReleaseHelper_1(this); if (JThrowable.pending !== null) return this;
        } else {
            this.releaseHelper = new ReleaseHelper().jinit_ReleaseHelper_1(this); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    processRelease(touchButtonInput: TouchButtonInput | null, deviceId: i32): void {
        this.releaseHelper!.release(touchButtonInput, deviceId); if (JThrowable.pending !== null) return;
        let gameKeyEvent: GameKeyEvent | null = touchButtonInput!.getGameKeyEvent(); if (JThrowable.pending !== null) return;
        this.upGameKeyEventHandler!.fireEvent(gameKeyEvent); if (JThrowable.pending !== null) return;
        this.upGameKeyEventHandler!.getInstanceForDevice(deviceId)!.fireEvent(gameKeyEvent); if (JThrowable.pending !== null) return;
        this.currentlyPressedTouchButtonSingleton!.remove(touchButtonInput); if (JThrowable.pending !== null) return;
    }
    

    releaseTouchButtonInput(x: i32, y: i32, deviceId: i32): bool {
        let touchButtonInput: TouchButtonInput | null = this.lastPressedTouchButtonInput;
        if (this.currentlyPressedTouchButtonSingleton!.contains(touchButtonInput)) {
            this.lastPressedTouchButtonInput = BasicTouchInputFactory.getInstance()!.NONE; if (JThrowable.pending !== null) return false;
            this.processRelease(touchButtonInput, deviceId); if (JThrowable.pending !== null) return false;
            return true;
        } else {
            let list: BasicArrayList | null = TouchButtonFactory.getInstance()!.getList(); if (JThrowable.pending !== null) return false;
            let rectangle: Rectangle | null = null;
            let point: GPoint | null = null;
            let touchButton: TouchButton | null = null;
            for (let index: i32 = list!.size() - 1; index >= 0; index--) {
                touchButton = changetype<TouchButton | null>(list!.objectArray![index]);
                rectangle = touchButton!.getRectangle(); if (JThrowable.pending !== null) return false;
                point = rectangle!.getPoint(); if (JThrowable.pending !== null) return false;
                if (this.rectangleCollisionUtil!.isInside(point!.getX(), point!.getY(), rectangle!.getMaxX(), rectangle!.getMaxY(), x, y)) {
                    touchButtonInput = touchButton!.getTouchButtonInput(); if (JThrowable.pending !== null) return false;
                    this.processRelease(touchButtonInput, deviceId); if (JThrowable.pending !== null) return false;
                    return true;
                } if (JThrowable.pending !== null) return false;
            } if (JThrowable.pending !== null) return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    pressTouchButtonInput(x: i32, y: i32, deviceId: i32): bool {
        let list: BasicArrayList | null = TouchButtonFactory.getInstance()!.getList(); if (JThrowable.pending !== null) return false;
        let rectangle: Rectangle | null = null;
        let point: GPoint | null = null;
        let touchButton: TouchButton | null = null;
        let touchButtonInput: TouchButtonInput | null = null;
        let gameKeyEvent: GameKeyEvent | null = null;
        for (let index: i32 = list!.size() - 1; index >= 0; index--) {
            touchButton = changetype<TouchButton | null>(list!.objectArray![index]);
            rectangle = touchButton!.getRectangle(); if (JThrowable.pending !== null) return false;
            point = rectangle!.getPoint(); if (JThrowable.pending !== null) return false;
            if (this.rectangleCollisionUtil!.isInside(point!.getX(), point!.getY(), rectangle!.getMaxX(), rectangle!.getMaxY(), x, y)) {
                touchButtonInput = touchButton!.getTouchButtonInput(); if (JThrowable.pending !== null) return false;
                if (!this.currentlyPressedTouchButtonSingleton!.contains(touchButtonInput)) {
                    this.releaseHelper!.release(touchButtonInput, deviceId); if (JThrowable.pending !== null) return false;
                    this.lastPressedTouchButtonInput = touchButtonInput;
                    this.currentlyPressedTouchButtonSingleton!.add(touchButtonInput); if (JThrowable.pending !== null) return false;
                    gameKeyEvent = touchButtonInput!.getGameKeyEvent(); if (JThrowable.pending !== null) return false;
                    this.downGameKeyEventHandler!.fireEvent(gameKeyEvent); if (JThrowable.pending !== null) return false;
                    this.downGameKeyEventHandler!.getInstanceForDevice(deviceId)!.fireEvent(gameKeyEvent); if (JThrowable.pending !== null) return false;
                } if (JThrowable.pending !== null) return false;
                return true;
            } if (JThrowable.pending !== null) return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
}

