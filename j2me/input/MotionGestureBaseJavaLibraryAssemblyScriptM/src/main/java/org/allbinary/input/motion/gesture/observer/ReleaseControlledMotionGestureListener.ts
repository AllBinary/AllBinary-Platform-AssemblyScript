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

@global export class ReleaseControlledMotionGestureListener extends JObject implements MotionGestureEventListener {

    jclassName(): string {
        return "org.allbinary.input.motion.gesture.observer.ReleaseControlledMotionGestureListener";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    currentMotionGesture: MotionGestureInput | null = null;
    isMouseGestureOccurring: bool = false;
    motionGestureCollection: BasicArrayList | null = null;
    signed: CompleteMotionGestureListenerInterface | null = null;

    jfields_ReleaseControlledMotionGestureListener(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.currentMotionGesture = TouchMotionGestureFactory.getInstance()!.NO_MOTION;
    this.isMouseGestureOccurring = false;
    this.motionGestureCollection = new BasicArrayListD().jinit_BasicArrayListD_0();
    
    }
    

    jinit_ReleaseControlledMotionGestureListener_1(signed: CompleteMotionGestureListenerInterface | null): ReleaseControlledMotionGestureListener {
        super.jinit_JObject_0();
        this.jfields_ReleaseControlledMotionGestureListener();
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
        this.isMouseGestureOccurring = true;
        this.currentMotionGesture = TouchMotionGestureFactory.getInstance()!.NO_MOTION; if (JThrowable.pending !== null) return;
        this.onMotionGestureEvent(ev); if (JThrowable.pending !== null) return;
    }
    

    onScrolledMotionGestureEvent(motionGestureEvent: MotionGestureEvent | null): void {
    }
    

    released(ev: MotionGestureEvent | null): void {
        do {
            if (this.isMouseGestureOccurring == false) {
                return;
            }
            this.isMouseGestureOccurring = false;
            this.signed!.onMotionGestureCompleted(this.motionGestureCollection); if (JThrowable.pending !== null) break;
            this.motionGestureCollection!.clear(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.commonStrings!.EXCEPTION_LABEL)!.append(StringUtil.getInstance()!.toString1(ev!.getMotionGesture()))), this, "release", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    onMotionGestureEvent(ev: MotionGestureEvent | null): void {
        if (this.isMouseGestureOccurring == false) {
            return;
        }
        let motionGestureInput: MotionGestureInput | null = ev!.getMotionGesture(); if (JThrowable.pending !== null) return;
        if (motionGestureInput == TouchMotionGestureFactory.getInstance()!.PRESSED) {
            this.onPressedMotionGestureEvent(ev); if (JThrowable.pending !== null) return;
        } else if (motionGestureInput == TouchMotionGestureFactory.getInstance()!.RELEASED) {
            this.released(ev); if (JThrowable.pending !== null) return;
        } else {
            if (this.currentMotionGesture != motionGestureInput) {
                this.currentMotionGesture = motionGestureInput;
                this.motionGestureCollection!.add(ev!.getMotionGesture()); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

