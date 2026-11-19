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
// package org.allbinary.logic.math
// import org.allbinary.logic.string.StringMaker

@global export class Orientation extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.math.Orientation";
    }
    @lazy static jv_NONE: Orientation | null = null;
    @lazy static js_NONE: bool = false;
    static get NONE(): Orientation | null {
        if (!Orientation.js_NONE) {
            Orientation.js_NONE = true;
            Orientation.jv_NONE = new Orientation().jinit_Orientation_3(0, 0, 0);
        }
        return Orientation.jv_NONE;
    }
    static set NONE(value: Orientation | null) {
        Orientation.js_NONE = true;
        Orientation.jv_NONE = value;
    }
    @lazy static jv_SINGLETON: Orientation | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): Orientation | null {
        if (!Orientation.js_SINGLETON) {
            Orientation.js_SINGLETON = true;
            Orientation.jv_SINGLETON = new Orientation().jinit_Orientation_3(0, 0, 0);
        }
        return Orientation.jv_SINGLETON;
    }
    static set SINGLETON(value: Orientation | null) {
        Orientation.js_SINGLETON = true;
        Orientation.jv_SINGLETON = value;
    }
    yaw: BasicDecimal | null = null;
    pitch: BasicDecimal | null = null;
    roll: BasicDecimal | null = null;

    jfields_Orientation(): void {
    this.yaw = new BasicDecimal().jinit_BasicDecimal_1(0);
    this.pitch = new BasicDecimal().jinit_BasicDecimal_1(0);
    this.roll = new BasicDecimal().jinit_BasicDecimal_1(0);
    }
    

    static getInstance3(yaw: i32, pitch: i32, roll: i32): Orientation | null {
        Orientation.SINGLETON!.yaw!.setint(yaw); if (JThrowable.pending !== null) return null;
        Orientation.SINGLETON!.pitch!.setint(pitch); if (JThrowable.pending !== null) return null;
        Orientation.SINGLETON!.roll!.setint(roll); if (JThrowable.pending !== null) return null;
        return Orientation.SINGLETON;
    }
    

    jinit_Orientation_3(yaw: i32, pitch: i32, roll: i32): Orientation {
        super.jinit_JObject_0();
        this.jfields_Orientation();
        this.yaw!.setint(yaw); if (JThrowable.pending !== null) return this;
        this.pitch!.setint(pitch); if (JThrowable.pending !== null) return this;
        this.roll!.setint(roll); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("Y: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(JObject.jtoString(this.yaw)); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" P: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(JObject.jtoString(this.pitch)); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" R: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(JObject.jtoString(this.roll)); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

