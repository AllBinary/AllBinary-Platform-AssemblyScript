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
// package org.allbinary.math
// import jsinterop.annotations.JsType
// import jsinterop.annotations.JsMethod
// import jsinterop.annotations.JsConstructor

@global export class FrameUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.math.FrameUtil";
    }
    @lazy static jv_instance: FrameUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): FrameUtil | null {
        if (!FrameUtil.js_instance) {
            FrameUtil.js_instance = true;
            FrameUtil.jv_instance = new FrameUtil().jinit_FrameUtil_0();
        }
        return FrameUtil.jv_instance;
    }
    static set instance(value: FrameUtil | null) {
        FrameUtil.js_instance = true;
        FrameUtil.jv_instance = value;
    }
    

    static getInstance(): FrameUtil | null {
        return FrameUtil.instance;
    }
    

    jinit_FrameUtil_0(): FrameUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    getFrameForAngle(angle: i16, angleIncrement: i32): i32 {
        return this.adjustAngleToFrameAngle((<i32>(angle))) / angleIncrement;
    }
    

    getFrameAngle(frame: i32, angleIncrement: i32): i32 {
        let frameAngle: i32 = angleIncrement * frame - 90;
        return this.adjustAngleToFrameAngle(frameAngle);
    }
    

    adjustAngleToFrameAngle(currentAngle: i32): i32 {
        let angleFactory: AngleFactory | null = AngleFactory.getInstance(); if (JThrowable.pending !== null) return 0;
        if (currentAngle > 359) {
            currentAngle = (currentAngle - (<i32>(angleFactory!.TOTAL_ANGLE)));
            while (currentAngle > 359) {
                currentAngle = (currentAngle - (<i32>(angleFactory!.TOTAL_ANGLE)));
            }
        }
        if (currentAngle < 0) {
            currentAngle = (currentAngle + (<i32>(angleFactory!.TOTAL_ANGLE)));
            while (currentAngle < 0) {
                currentAngle = (currentAngle + (<i32>(angleFactory!.TOTAL_ANGLE)));
            }
        }
        return currentAngle;
    }
}

