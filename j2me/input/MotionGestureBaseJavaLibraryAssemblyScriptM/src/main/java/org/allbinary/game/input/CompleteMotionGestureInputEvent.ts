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
// package org.allbinary.game.input
// import org.allbinary.input.motion.gesture.MotionGestureInput
// import org.allbinary.input.motion.gesture.TouchMotionGestureFactory
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.string.CommonStrings

@global export class CompleteMotionGestureInputEvent extends AllBinaryEventObject implements CompleteMotionGestureInputInterface {

    jclassName(): string {
        return "org.allbinary.game.input.CompleteMotionGestureInputEvent";
    }
    logUtil: LogUtil | null = null;
    name: string | null = null;
    motionGestureInput: MotionGestureInput | null = null;

    jfields_CompleteMotionGestureInputEvent(): void {
    this.logUtil = LogUtil.getInstance();
    this.name = StringUtil.getInstance()!.EMPTY_STRING;
    this.motionGestureInput = TouchMotionGestureFactory.getInstance()!.NO_MOTION;
    }
    

    jinit_CompleteMotionGestureInputEvent_2(name: string | null, motionGestureInput: MotionGestureInput | null): CompleteMotionGestureInputEvent {
        super.jinit_AllBinaryEventObject_1(motionGestureInput);
        this.jfields_CompleteMotionGestureInputEvent();
        this.setName(name); if (JThrowable.pending !== null) return this;
        do {
            this.setMotionGestureInput(motionGestureInput); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return this;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, "InputToGameKeyEventAction", e); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    setName(name: string | null): void {
        this.name = name;
    }
    

    getName(): string | null {
        return this.name;
    }
    

    setMotionGestureInput(motionGestureInput: MotionGestureInput | null): void {
        this.motionGestureInput = motionGestureInput;
    }
    

    getMotionGestureInput(): MotionGestureInput | null {
        return this.motionGestureInput;
    }
}

