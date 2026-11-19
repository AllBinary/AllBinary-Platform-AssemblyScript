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
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonPhoneStrings
// import org.allbinary.string.CommonSeps
// import org.allbinary.string.CommonStrings
// import jsinterop.annotations.JsMethod
// import jsinterop.annotations.JsConstructor
// import jsinterop.annotations.JsProperty

@global export class AngleFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.math.AngleFactory";
    }
    @lazy static jv_instance: AngleFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AngleFactory | null {
        if (!AngleFactory.js_instance) {
            AngleFactory.js_instance = true;
            AngleFactory.jv_instance = new AngleFactory().jinit_AngleFactory_0();
        }
        return AngleFactory.jv_instance;
    }
    static set instance(value: AngleFactory | null) {
        AngleFactory.js_instance = true;
        AngleFactory.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    TOTAL_ANGLE: i16 = 0;
    QUARTER_TOTAL_ANGLE: i16 = 0;
    angleArray: StaticArray<Angle | null> | null = null;
    NEGATIVE_ONE: i16 = 0;
    NOT_ANGLE: NamedAngle | null = null;
    DOWN: NamedAngle | null = null;
    UP: NamedAngle | null = null;
    LEFT: NamedAngle | null = null;
    RIGHT: NamedAngle | null = null;
    frameUtil: FrameUtil | null = null;

    jfields_AngleFactory(): void {
    this.logUtil = LogUtil.getInstance();
    this.TOTAL_ANGLE = 360;
    this.QUARTER_TOTAL_ANGLE = 90;
    this.angleArray = new StaticArray<Angle | null>((<i32>(this.TOTAL_ANGLE)));
    this.NEGATIVE_ONE = (<i16>(-1));
    this.NOT_ANGLE = new NamedAngle().jinit_NamedAngle_2(this.NEGATIVE_ONE, CommonStrings.getInstance()!.EMPTY);
    
    
    
    
    this.frameUtil = FrameUtil.getInstance();
    }
    

    static getInstance(): AngleFactory | null {
        return AngleFactory.instance;
    }
    

    jinit_AngleFactory_0(): AngleFactory {
        super.jinit_JObject_0();
        this.jfields_AngleFactory();
        let commonPhoneStrings: CommonPhoneStrings | null = CommonPhoneStrings.getInstance(); if (JThrowable.pending !== null) return this;
        let total: i16 = (<i16>(this.angleArray!.length));
        this.UP = new NamedAngle().jinit_NamedAngle_2((<i16>(0)), commonPhoneStrings!.UP); if (JThrowable.pending !== null) return this;
        this.angleArray![0] = this.UP;
        for (let index: i32 = 1; index < 90; index++) {
            this.angleArray![index] = new Angle().jinit_Angle_1((<i16>(index))); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        this.RIGHT = new NamedAngle().jinit_NamedAngle_2((<i16>(90)), commonPhoneStrings!.RIGHT); if (JThrowable.pending !== null) return this;
        this.angleArray![90] = this.RIGHT;
        for (let index: i32 = 91; index < 180; index++) {
            this.angleArray![index] = new Angle().jinit_Angle_1((<i16>(index))); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        this.DOWN = new NamedAngle().jinit_NamedAngle_2((<i16>(180)), commonPhoneStrings!.DOWN); if (JThrowable.pending !== null) return this;
        this.angleArray![180] = this.DOWN;
        for (let index: i32 = 181; index < 270; index++) {
            this.angleArray![index] = new Angle().jinit_Angle_1((<i16>(index))); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        this.LEFT = new NamedAngle().jinit_NamedAngle_2((<i16>(270)), commonPhoneStrings!.LEFT); if (JThrowable.pending !== null) return this;
        this.angleArray![270] = this.LEFT;
        for (let index: i32 = 271; index < (<i32>(total)); index++) {
            this.angleArray![index] = new Angle().jinit_Angle_1((<i16>(index))); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getAt(index: i32): Angle | null {
        let adjustedIndex: i32 = this.frameUtil!.adjustAngleToFrameAngle(index); if (JThrowable.pending !== null) return null;
        return this.angleArray![adjustedIndex];
    }
    

    getClosestDirection(angle: i32): Angle | null {
        if ((angle >= 315 && angle < 360) || (angle >= 0 && angle < 45)) {
            return this.UP;
        } else if (angle >= 45 && angle < 135) {
            return this.RIGHT;
        } else if (angle >= 135 && angle < 225) {
            return this.DOWN;
        } else if (angle >= 225 && angle < 315) {
            return this.LEFT;
        }
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    getGeneralDirection(): Angle | null {
        return this.NOT_ANGLE;
    }
    

    static main(args: StaticArray<string | null> | null): void {
        let stringMaker: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        let angleFactory: AngleFactory | null = AngleFactory.getInstance(); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < 360; index++) {
            stringMaker!.appendint(index)!.append(CommonSeps.getInstance()!.FORWARD_SLASH)!.appendshort(angleFactory!.getClosestDirection(index)!.getValue())!.append(CommonSeps.getInstance()!.NEW_LINE); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        LogUtil.getInstance()!.putF(JObject.jtoString(stringMaker), "main", "main"); if (JThrowable.pending !== null) return;
    }
}

