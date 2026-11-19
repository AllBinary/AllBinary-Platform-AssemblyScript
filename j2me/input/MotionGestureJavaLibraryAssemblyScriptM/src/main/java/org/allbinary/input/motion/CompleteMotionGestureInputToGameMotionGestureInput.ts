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
// package org.allbinary.input.motion
// import org.allbinary.input.motion.gesture.TouchMotionGestureFactory
// import org.allbinary.input.motion.gesture.configuration.MotionGestureConfiguration
// import org.allbinary.input.motion.gesture.configuration.MotionGestureConfigurationFactory
// import org.allbinary.input.motion.touch.action.DiagonalDownLeftTouchInputToGameKeyEventAction
// import org.allbinary.input.motion.touch.action.DiagonalDownRightTouchInputToGameKeyEventAction
// import org.allbinary.input.motion.touch.action.DiagonalUpLeftTouchInputToGameKeyEventAction
// import org.allbinary.input.motion.touch.action.DiagonalUpRightTouchInputToGameKeyEventAction
// import org.allbinary.input.motion.touch.action.DownTouchInputToGameKeyEventAction
// import org.allbinary.input.motion.touch.action.LeftTouchInputToGameKeyEventAction
// import org.allbinary.input.motion.touch.action.ReleaseTouchInputToGameKeyEventAction
// import org.allbinary.input.motion.touch.action.RightTouchInputToGameKeyEventAction
// import org.allbinary.input.motion.touch.action.UpTouchInputToGameKeyEventAction
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class CompleteMotionGestureInputToGameMotionGestureInput extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.CompleteMotionGestureInputToGameMotionGestureInput";
    }
    @lazy static jv_instance: CompleteMotionGestureInputToGameMotionGestureInput | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): CompleteMotionGestureInputToGameMotionGestureInput | null {
        if (!CompleteMotionGestureInputToGameMotionGestureInput.js_instance) {
            CompleteMotionGestureInputToGameMotionGestureInput.js_instance = true;
            CompleteMotionGestureInputToGameMotionGestureInput.jv_instance = new CompleteMotionGestureInputToGameMotionGestureInput().jinit_CompleteMotionGestureInputToGameMotionGestureInput_0();
        }
        return CompleteMotionGestureInputToGameMotionGestureInput.jv_instance;
    }
    static set instance(value: CompleteMotionGestureInputToGameMotionGestureInput | null) {
        CompleteMotionGestureInputToGameMotionGestureInput.js_instance = true;
        CompleteMotionGestureInputToGameMotionGestureInput.jv_instance = value;
    }
    logUtil: LogUtil | null = null;

    jfields_CompleteMotionGestureInputToGameMotionGestureInput(): void {
    this.logUtil = LogUtil.getInstance();
    }

    jinit_CompleteMotionGestureInputToGameMotionGestureInput_0(): CompleteMotionGestureInputToGameMotionGestureInput {
        super.jinit_JObject_0();
        this.jfields_CompleteMotionGestureInputToGameMotionGestureInput();
        return this;
    }
    

    static getInstance(): CompleteMotionGestureInputToGameMotionGestureInput | null {
        return CompleteMotionGestureInputToGameMotionGestureInput.instance;
    }
    

    init(): void {
        let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
        do {
            PreLogUtil.put("Compound Motion Gestures", this, commonStrings!.INIT); if (JThrowable.pending !== null) break;
            let motionGestureConfiguration: MotionGestureConfiguration | null = MotionGestureConfigurationFactory.getInstance(); if (JThrowable.pending !== null) break;
            let touchMotionGestureFactory: TouchMotionGestureFactory | null = TouchMotionGestureFactory.getInstance(); if (JThrowable.pending !== null) break;
            let list: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            list!.add(touchMotionGestureFactory!.DIAGONAL_DOWN_LEFT); if (JThrowable.pending !== null) break;
            motionGestureConfiguration!.addMotionGestureAction(list, DiagonalDownLeftTouchInputToGameKeyEventAction.getInstance()); if (JThrowable.pending !== null) break;
            list = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            list!.add(touchMotionGestureFactory!.DIAGONAL_DOWN_RIGHT); if (JThrowable.pending !== null) break;
            motionGestureConfiguration!.addMotionGestureAction(list, DiagonalDownRightTouchInputToGameKeyEventAction.getInstance()); if (JThrowable.pending !== null) break;
            list = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            list!.add(touchMotionGestureFactory!.DIAGONAL_UP_LEFT); if (JThrowable.pending !== null) break;
            motionGestureConfiguration!.addMotionGestureAction(list, DiagonalUpLeftTouchInputToGameKeyEventAction.getInstance()); if (JThrowable.pending !== null) break;
            list = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            list!.add(touchMotionGestureFactory!.DIAGONAL_UP_RIGHT); if (JThrowable.pending !== null) break;
            motionGestureConfiguration!.addMotionGestureAction(list, DiagonalUpRightTouchInputToGameKeyEventAction.getInstance()); if (JThrowable.pending !== null) break;
            list = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            list!.add(touchMotionGestureFactory!.LEFT); if (JThrowable.pending !== null) break;
            motionGestureConfiguration!.addMotionGestureAction(list, LeftTouchInputToGameKeyEventAction.getInstance()); if (JThrowable.pending !== null) break;
            list = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            list!.add(touchMotionGestureFactory!.RIGHT); if (JThrowable.pending !== null) break;
            motionGestureConfiguration!.addMotionGestureAction(list, RightTouchInputToGameKeyEventAction.getInstance()); if (JThrowable.pending !== null) break;
            list = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            list!.add(touchMotionGestureFactory!.DOWN); if (JThrowable.pending !== null) break;
            motionGestureConfiguration!.addMotionGestureAction(list, DownTouchInputToGameKeyEventAction.getInstance()); if (JThrowable.pending !== null) break;
            list = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            list!.add(touchMotionGestureFactory!.UP); if (JThrowable.pending !== null) break;
            motionGestureConfiguration!.addMotionGestureAction(list, UpTouchInputToGameKeyEventAction.getInstance()); if (JThrowable.pending !== null) break;
            list = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            list!.add(touchMotionGestureFactory!.RELEASED); if (JThrowable.pending !== null) break;
            motionGestureConfiguration!.addMotionGestureAction(list, ReleaseTouchInputToGameKeyEventAction.getInstance()); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.INIT, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

