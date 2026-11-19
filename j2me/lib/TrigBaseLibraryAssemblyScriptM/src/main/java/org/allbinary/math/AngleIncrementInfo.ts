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
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.logic.string.StringMaker
// import jsinterop.annotations.JsProperty
// import jsinterop.annotations.JsMethod
// import jsinterop.annotations.JsConstructor

@global export class AngleIncrementInfo extends JObject {

    jclassName(): string {
        return "org.allbinary.math.AngleIncrementInfo";
    }
    @lazy static readonly INCREMENT: string | null = "Inc: ";
    angleIncrement: i16 = 0;
    DOWN_FRAME: JInteger | null = null;
    UP_FRAME: JInteger | null = null;
    LEFT_FRAME: JInteger | null = null;
    RIGHT_FRAME: JInteger | null = null;
    frameUtil: FrameUtil | null = null;

    jfields_AngleIncrementInfo(): void {
    
    
    
    
    
    this.frameUtil = FrameUtil.getInstance();
    }
    

    jinit_AngleIncrementInfo_1(angleIncrement: i16): AngleIncrementInfo {
        super.jinit_JObject_0();
        this.jfields_AngleIncrementInfo();
        this.angleIncrement = angleIncrement;
        let angleFactory: AngleFactory | null = AngleFactory.getInstance(); if (JThrowable.pending !== null) return this;
        let smallIntegerSingletonFactory: SmallIntegerSingletonFactory | null = SmallIntegerSingletonFactory.getInstance(); if (JThrowable.pending !== null) return this;
        this.DOWN_FRAME = smallIntegerSingletonFactory!.getAt(angleFactory!.DOWN!.getValue() / this.angleIncrement); if (JThrowable.pending !== null) return this;
        this.UP_FRAME = smallIntegerSingletonFactory!.getAt((<i32>(angleFactory!.UP!.getValue()))); if (JThrowable.pending !== null) return this;
        this.LEFT_FRAME = smallIntegerSingletonFactory!.getAt(angleFactory!.LEFT!.getValue() / this.angleIncrement); if (JThrowable.pending !== null) return this;
        this.RIGHT_FRAME = smallIntegerSingletonFactory!.getAt(angleFactory!.RIGHT!.getValue() / this.angleIncrement); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getFrameAngle(frame: i32): i32 {
        return this.frameUtil!.getFrameAngle(frame, (<i32>(this.angleIncrement)));
    }
    

    getAngleIncrement(): i16 {
        return this.angleIncrement;
    }
    

    toString(): string | null {
        return JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(AngleIncrementInfo.INCREMENT)!.appendshort(this.angleIncrement));
    }
    

    getClosestGeneralDirection(angle: i16): i32 {
        let closestDirection: JInteger | null = SmallIntegerSingletonFactory.getInstance()!.getAt(360); if (JThrowable.pending !== null) return 0;
        if (this.UP_FRAME!.intValue() - angle < closestDirection!.intValue() - angle) {
            closestDirection = this.UP_FRAME;
        } if (JThrowable.pending !== null) return 0;
        if (this.DOWN_FRAME!.intValue() - angle < closestDirection!.intValue() - angle) {
            closestDirection = this.DOWN_FRAME;
        } if (JThrowable.pending !== null) return 0;
        if (this.LEFT_FRAME!.intValue() - angle < closestDirection!.intValue() - angle) {
            closestDirection = this.LEFT_FRAME;
        } if (JThrowable.pending !== null) return 0;
        if (this.RIGHT_FRAME!.intValue() - angle < closestDirection!.intValue() - angle) {
            closestDirection = this.RIGHT_FRAME;
        } if (JThrowable.pending !== null) return 0;
        return closestDirection!.intValue();
    }
}

