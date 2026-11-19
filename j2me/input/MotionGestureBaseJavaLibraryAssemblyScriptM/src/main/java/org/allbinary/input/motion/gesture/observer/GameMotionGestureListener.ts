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
// package org.allbinary.input.motion.gesture.observer
// import org.allbinary.input.motion.gesture.MotionGestureInput
// import org.allbinary.input.motion.gesture.TouchMotionGestureFactory
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class GameMotionGestureListener extends JObject implements MotionGestureEventListener {

    jclassName(): string {
        return "org.allbinary.input.motion.gesture.observer.GameMotionGestureListener";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    motionGestureCollection: BasicArrayList | null = null;
    touchGestureCollection: BasicArrayList | null = null;
    signed: CompleteMotionGestureListenerInterface | null = null;

    jfields_GameMotionGestureListener(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.motionGestureCollection = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.touchGestureCollection = new BasicArrayListD().jinit_BasicArrayListD_0();
    
    }
    

    jinit_GameMotionGestureListener_1(signed: CompleteMotionGestureListenerInterface | null): GameMotionGestureListener {
        super.jinit_JObject_0();
        this.jfields_GameMotionGestureListener();
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
        this.signed = signed;
        return this;
    }
    

    onEvent(eventObject: AllBinaryEventObject | null): void {
        ForcedLogUtil.log(this.commonStrings!.NOT_IMPLEMENTED, this); if (JThrowable.pending !== null) return;
    }
    

    onUpMotionGestureEvent(ev: MotionGestureEvent | null): void {
        this.onMotionGestureEvent(ev); if (JThrowable.pending !== null) return;
    }
    

    onDownMotionGestureEvent(ev: MotionGestureEvent | null): void {
        this.onMotionGestureEvent(ev); if (JThrowable.pending !== null) return;
    }
    

    onLeftMotionGestureEvent(ev: MotionGestureEvent | null): void {
        this.onMotionGestureEvent(ev); if (JThrowable.pending !== null) return;
    }
    

    onRightMotionGestureEvent(ev: MotionGestureEvent | null): void {
        this.onMotionGestureEvent(ev); if (JThrowable.pending !== null) return;
    }
    

    onDiagonalDownRightMotionGestureEvent(ev: MotionGestureEvent | null): void {
        this.onMotionGestureEvent(ev); if (JThrowable.pending !== null) return;
    }
    

    onDiagonalDownLeftMotionGestureEvent(ev: MotionGestureEvent | null): void {
        this.onMotionGestureEvent(ev); if (JThrowable.pending !== null) return;
    }
    

    onDiagonalUpRightMotionGestureEvent(ev: MotionGestureEvent | null): void {
        this.onMotionGestureEvent(ev); if (JThrowable.pending !== null) return;
    }
    

    onDiagonalUpLeftMotionGestureEvent(ev: MotionGestureEvent | null): void {
        this.onMotionGestureEvent(ev); if (JThrowable.pending !== null) return;
    }
    

    onPressedMotionGestureEvent(ev: MotionGestureEvent | null): void {
        this.touchGestureCollection!.add(ev!.getMotionGesture()); if (JThrowable.pending !== null) return;
    }
    

    released(ev: MotionGestureEvent | null): void {
        do {
            this.touchGestureCollection!.add(ev!.getMotionGesture()); if (JThrowable.pending !== null) break;
            this.signed!.onMotionGestureCompleted(this.touchGestureCollection); if (JThrowable.pending !== null) break;
            this.touchGestureCollection!.clear(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
            stringBuffer!.append(this.commonStrings!.EXCEPTION_LABEL); if (JThrowable.pending !== null) return;
            stringBuffer!.append(StringUtil.getInstance()!.toString1(ev!.getMotionGesture())); if (JThrowable.pending !== null) return;
            this.logUtil!.put(JObject.jtoString(stringBuffer), this, "release", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    onScrolledMotionGestureEvent(motionGestureEvent: MotionGestureEvent | null): void {
    }
    

    onMotionGestureEvent(ev: MotionGestureEvent | null): void {
        do {
            let motionGestureInput: MotionGestureInput | null = ev!.getMotionGesture(); if (JThrowable.pending !== null) break;
            if (motionGestureInput == TouchMotionGestureFactory.getInstance()!.PRESSED) {
                this.onPressedMotionGestureEvent(ev); if (JThrowable.pending !== null) break;
            } else if (motionGestureInput == TouchMotionGestureFactory.getInstance()!.RELEASED) {
                this.released(ev); if (JThrowable.pending !== null) break;
            } else {
                this.motionGestureCollection!.add(motionGestureInput); if (JThrowable.pending !== null) break;
                this.signed!.onMotionGestureCompleted(this.motionGestureCollection); if (JThrowable.pending !== null) break;
                this.motionGestureCollection!.clear(); if (JThrowable.pending !== null) break;
                this.touchGestureCollection!.clear(); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
            stringBuffer!.append(this.commonStrings!.EXCEPTION_LABEL); if (JThrowable.pending !== null) return;
            stringBuffer!.append(StringUtil.getInstance()!.toString1(ev!.getMotionGesture())); if (JThrowable.pending !== null) return;
            this.logUtil!.put(JObject.jtoString(stringBuffer), this, "onMotionGestureEvent", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

