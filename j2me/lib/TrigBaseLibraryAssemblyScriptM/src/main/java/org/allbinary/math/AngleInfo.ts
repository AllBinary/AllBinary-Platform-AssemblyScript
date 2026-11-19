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
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonSeps
// import jsinterop.annotations.JsMethod
// import jsinterop.annotations.JsConstructor

@global export class AngleInfo extends JObject {

    jclassName(): string {
        return "org.allbinary.math.AngleInfo";
    }
    @lazy static readonly ANGLE: string | null = "Angle: ";
    angleIncrementInfo: AngleIncrementInfo | null = null;
    angle: i16 = 0;
    frameUtil: FrameUtil | null = null;

    jfields_AngleInfo(): void {
    
    this.angle = 0;
    this.frameUtil = FrameUtil.getInstance();
    }
    

    static getInstance1(angleIncrement: i16): AngleInfo | null {
        return new AngleInfo().jinit_AngleInfo_1(AngleIncrementInfoFactory.getInstance()!.getAt(angleIncrement));
    }
    

    jinit_AngleInfo_1(angleIncrementInfo: AngleIncrementInfo | null): AngleInfo {
        super.jinit_JObject_0();
        this.jfields_AngleInfo();
        this.angleIncrementInfo = angleIncrementInfo;
        return this;
    }
    

    adjustAngle(frame: i32): void {
        let newAngle: i32 = (<i32>(this.angleIncrementInfo!.getAngleIncrement())) * frame - 90; if (JThrowable.pending !== null) return;
        this.setAngle((<i16>(this.frameUtil!.adjustAngleToFrameAngle(newAngle)))); if (JThrowable.pending !== null) return;
    }
    

    getAngle(): i16 {
        return this.angle;
    }
    

    setAngle(angle: i16): void {
        this.angle = angle;
    }
    

    getAngleIncrementInfo(): AngleIncrementInfo | null {
        return this.angleIncrementInfo;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(AngleInfo.ANGLE); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendshort(this.angle); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(CommonSeps.getInstance()!.SPACE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(StringUtil.getInstance()!.toString1(this.getAngleIncrementInfo())); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

