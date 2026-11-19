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
// package org.allbinary.input
// import org.allbinary.input.motion.AllMotionRecognizer
// import org.allbinary.input.motion.gesture.observer.BasicMotionGesturesHandler
// import org.allbinary.input.motion.gesture.observer.GameMotionGestureListener
// import org.allbinary.input.motion.gesture.observer.MotionGestureReceiveInterfaceFactory
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

//TouchJ2ME
@global export class TouchJ2ME extends JObject {

    jclassName(): string {
        return "org.allbinary.input.TouchJ2ME";
    }
    logUtil: LogUtil | null = null;
    DEVICE_ID: i32 = 0;
    motionRecognizer: AllMotionRecognizer | null = null;

    jfields_TouchJ2ME(): void {
    this.logUtil = LogUtil.getInstance();
    this.DEVICE_ID = 0;
    this.motionRecognizer = new AllMotionRecognizer().jinit_AllMotionRecognizer_0();
    }
    

    jinit_TouchJ2ME_0(): TouchJ2ME {
        super.jinit_JObject_0();
        this.jfields_TouchJ2ME();
        let motionGesturesHandler: BasicMotionGesturesHandler | null = this.motionRecognizer!.getMotionGestureRecognizer()!.getMotionGesturesHandler(); if (JThrowable.pending !== null) return this;
        motionGesturesHandler!.addListenerInterface(new GameMotionGestureListener().jinit_GameMotionGestureListener_1(MotionGestureReceiveInterfaceFactory.getInstance())); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    pointerDragged(x: i32, y: i32): void {
        do {
            this.motionRecognizer!.processDraggedMotionEvent(x, y, this.DEVICE_ID, 0); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, "pointerDragged", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    pointerPressed(x: i32, y: i32): void {
        do {
            this.motionRecognizer!.processStartMotionEvent(x, y, this.DEVICE_ID, 0); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, "pointerPressed", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    pointerReleased(x: i32, y: i32): void {
        do {
            this.motionRecognizer!.processEndMotionEvent(x, y, this.DEVICE_ID, 0); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, "pointerReleased", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

