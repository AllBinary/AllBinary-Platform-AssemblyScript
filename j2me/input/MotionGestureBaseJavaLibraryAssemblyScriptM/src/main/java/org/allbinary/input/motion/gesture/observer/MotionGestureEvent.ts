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
// import org.allbinary.graphics.GPoint
// import org.allbinary.graphics.PointFactory
// import org.allbinary.input.motion.gesture.MotionGestureInput
// import org.allbinary.input.motion.gesture.TouchMotionGestureFactory
// import org.allbinary.TsUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.string.CommonLabels

@global export class MotionGestureEvent extends AllBinaryEventObject {

    jclassName(): string {
        return "org.allbinary.input.motion.gesture.observer.MotionGestureEvent";
    }
    @lazy static readonly PREVIOUS: string | null = " Previous: ";
    @lazy static readonly HASHCODE: string | null = " hashcode: ";
    motionGesture: MotionGestureInput | null = null;
    id: i32 = 0;
    previousPoint: GPoint | null = null;
    currentPoint: GPoint | null = null;
    commonLabels: CommonLabels | null = null;

    jfields_MotionGestureEvent(): void {
    this.motionGesture = TouchMotionGestureFactory.getInstance()!.NO_MOTION;
    
    this.previousPoint = PointFactory.getInstance()!.ZERO_ZERO;
    this.currentPoint = PointFactory.getInstance()!.ZERO_ZERO;
    this.commonLabels = CommonLabels.getInstance();
    }
    

    jinit_MotionGestureEvent_3(source: Object | null, id: i32, motionGesture: MotionGestureInput | null): MotionGestureEvent {
        super.jinit_AllBinaryEventObject_1(source);
        this.jfields_MotionGestureEvent();
        this.id = id;
        this.setMotionGesture(motionGesture); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getMotionGesture(): MotionGestureInput | null {
        return this.motionGesture;
    }
    

    setMotionGesture(motionGesture: MotionGestureInput | null): void {
        this.motionGesture = motionGesture;
    }
    

    getPreviousPoint(): GPoint | null {
        return this.previousPoint;
    }
    

    setPreviousPoint(previousPoint: GPoint | null): void {
        this.previousPoint = previousPoint;
    }
    

    getCurrentPoint(): GPoint | null {
        return this.currentPoint;
    }
    

    setCurrentPoint(currentPoint: GPoint | null): void {
        this.currentPoint = currentPoint;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let stringUtil: StringUtil | null = StringUtil.getInstance(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(stringUtil!.toString1(this.motionGesture)); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.commonLabels!.CURRENT); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(stringUtil!.toString1(this.currentPoint)); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(MotionGestureEvent.PREVIOUS); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(stringUtil!.toString1(this.previousPoint)); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(MotionGestureEvent.HASHCODE); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(TsUtil.getInstance()!.hashCode1(this)); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    getId(): i32 {
        return this.id;
    }
}

