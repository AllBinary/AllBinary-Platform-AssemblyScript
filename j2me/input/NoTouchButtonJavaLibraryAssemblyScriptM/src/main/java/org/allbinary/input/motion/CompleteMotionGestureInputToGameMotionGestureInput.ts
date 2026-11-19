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
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.string.CommonStrings

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
    commonStrings: CommonStrings | null = null;

    jfields_CompleteMotionGestureInputToGameMotionGestureInput(): void {
    this.commonStrings = CommonStrings.getInstance();
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
        PreLogUtil.put("No Touch Button = No Compound Motion Gestures", this, this.commonStrings!.INIT); if (JThrowable.pending !== null) return;
    }
}

