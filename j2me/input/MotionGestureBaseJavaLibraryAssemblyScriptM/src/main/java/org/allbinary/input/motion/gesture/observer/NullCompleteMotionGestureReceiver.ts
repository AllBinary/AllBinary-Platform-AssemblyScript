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
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList

@global export class NullCompleteMotionGestureReceiver extends JObject implements CompleteMotionGestureListenerInterface {

    jclassName(): string {
        return "org.allbinary.input.motion.gesture.observer.NullCompleteMotionGestureReceiver";
    }
    logUtil: LogUtil | null = null;

    jfields_NullCompleteMotionGestureReceiver(): void {
    this.logUtil = LogUtil.getInstance();
    }
    

    jinit_NullCompleteMotionGestureReceiver_0(): NullCompleteMotionGestureReceiver {
        super.jinit_JObject_0();
        this.jfields_NullCompleteMotionGestureReceiver();
        let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return this;
        this.logUtil!.putF("Null Gesture Reciever", this, commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    onMotionGestureCompleted(list: BasicArrayList | null): void {
    }
}

