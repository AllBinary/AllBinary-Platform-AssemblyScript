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
// package org.allbinary.canvas
// import org.allbinary.logic.math.PrimitiveLongSingleton
// import org.allbinary.logic.math.ScaleFactorFactory
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonSeps
// import org.allbinary.time.GameTickTimeDelayHelper
// import org.allbinary.time.GameTickTimeDelayHelperFactory
// import org.allbinary.time.TimeDelayHelper

@global export class BaseGameStatistics extends JObject {

    jclassName(): string {
        return "org.allbinary.canvas.BaseGameStatistics";
    }
    timeDelayHelper: TimeDelayHelper | null = null;
    updateDelayHelper: TimeDelayHelper | null = null;
    totalRefreshes: i64 = 0;
    totalFrames: i64 = 0;
    gameTickTimeDelayHelper: GameTickTimeDelayHelper | null = null;
    DEFAULT_SCALE_FACTOR: i32 = 0;
    NOT: string | null = null;
    EMPTY_STRING: string | null = null;
    STRING_ARRAY: StaticArray<string | null> | null = null;
    SPACE_CHAR: u16 = 0;
    PLUS_CHAR: u16 = 0;
    X_CHAR: u16 = 0;
    CHAR_ARRAY: StaticArray<StaticArray<u16> | null> | null = null;
    primitiveLongSingleton: PrimitiveLongSingleton | null = null;

    jfields_BaseGameStatistics(): void {
    this.timeDelayHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(JInteger.MAX_VALUE);
    this.updateDelayHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(2000);
    this.totalRefreshes = 0;
    this.totalFrames = 0;
    this.gameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance();
    this.DEFAULT_SCALE_FACTOR = ScaleFactorFactory.getInstance()!.DEFAULT_SCALE_FACTOR;
    this.NOT = "Not enough Time to Calculate";
    this.EMPTY_STRING = StringUtil.getInstance()!.EMPTY_STRING;
    this.STRING_ARRAY = StaticArray.fromArray<string | null>([" Total Time: ", this.EMPTY_STRING, " Total Frames: ", this.EMPTY_STRING, " Frames/10 Sec: ", this.EMPTY_STRING, " Total Paints: ", this.EMPTY_STRING, " Paints/10 Sec: ", this.EMPTY_STRING]);
    this.SPACE_CHAR = (<u16>0x20);
    this.PLUS_CHAR = (<u16>0x2B);
    this.X_CHAR = (<u16>0x58);
    this.CHAR_ARRAY = StaticArray.fromArray<StaticArray<u16> | null>([StaticArray.fromArray<u16>([(<u16>0x46), (<u16>0x72), (<u16>0x61), (<u16>0x6D), (<u16>0x65), (<u16>0x73), (<u16>0x2F), (<u16>0x31), (<u16>0x30), (<u16>0x20), (<u16>0x53), (<u16>0x65), (<u16>0x63), (<u16>0x3A)]), StaticArray.fromArray<u16>([(<u16>0x58), (<u16>0x58)]), StaticArray.fromArray<u16>([(<u16>0x50), (<u16>0x61), (<u16>0x69), (<u16>0x6E), (<u16>0x74), (<u16>0x73), (<u16>0x2F), (<u16>0x31), (<u16>0x30), (<u16>0x20), (<u16>0x53), (<u16>0x65), (<u16>0x63), (<u16>0x3A)]), StaticArray.fromArray<u16>([(<u16>0x58), (<u16>0x58)])]);
    this.primitiveLongSingleton = PrimitiveLongSingleton.getInstance();
    }
    

    jinit_BaseGameStatistics_0(): BaseGameStatistics {
        super.jinit_JObject_0();
        this.jfields_BaseGameStatistics();
        return this;
    }
    

    init(): void {
        this.timeDelayHelper!.setStartTimeTNT(); if (JThrowable.pending !== null) return;
        this.totalRefreshes = (<i64>0);
        this.totalFrames = (<i64>0);
    }
    

    add(string: string | null): void {
    }
    

    process(): void {
    }
    

    nextFrame(): void {
        this.totalFrames++;
    }
    

    nextRefresh(): void {
        this.totalRefreshes++;
    }
    

    getRefreshRate(): i16 {
        let elapsed: i64 = this.timeDelayHelper!.getElapsed(this.gameTickTimeDelayHelper!.startTime); if (JThrowable.pending !== null) return 0;
        if (elapsed > (<i64>1)) {
            let time: i16 = (<i16>((this.totalRefreshes / (elapsed >> this.DEFAULT_SCALE_FACTOR))));
            return time;
        } else {
            return 0;
        }
        return 0;
    }
    

    getTimeDelayHelper(): TimeDelayHelper | null {
        return this.timeDelayHelper;
    }
    

    to2DCharArray(): StaticArray<StaticArray<u16> | null> | null {
        let totalTime: i64 = this.timeDelayHelper!.getElapsed(this.gameTickTimeDelayHelper!.startTime); if (JThrowable.pending !== null) return null;
        totalTime = (totalTime >> this.DEFAULT_SCALE_FACTOR);
        if (totalTime > (<i64>0) && this.updateDelayHelper!.isTime(this.gameTickTimeDelayHelper!.startTime)) {
            let framesPerSec: i32 = (<i32>((this.totalFrames / totalTime)));
            if (framesPerSec < 10) {
                this.CHAR_ARRAY![1]![0] = this.SPACE_CHAR;
                this.CHAR_ARRAY![1]![1] = this.primitiveLongSingleton!.NUMBER_CHAR_ARRAY![framesPerSec];
            } else if (framesPerSec < 100) {
                let tens: i32 = framesPerSec / 10;
                let removeTens: i32 = tens * 10;
                this.CHAR_ARRAY![1]![0] = this.primitiveLongSingleton!.NUMBER_CHAR_ARRAY![tens];
                this.CHAR_ARRAY![1]![1] = this.primitiveLongSingleton!.NUMBER_CHAR_ARRAY![framesPerSec - removeTens];
            } else {
                this.CHAR_ARRAY![1]![0] = this.PLUS_CHAR;
                this.CHAR_ARRAY![1]![1] = this.PLUS_CHAR;
            }
            let refreshesPerSec: i32 = (<i32>((this.totalRefreshes / totalTime)));
            if (refreshesPerSec < 10) {
                this.CHAR_ARRAY![3]![0] = this.X_CHAR;
                this.CHAR_ARRAY![3]![1] = this.primitiveLongSingleton!.NUMBER_CHAR_ARRAY![refreshesPerSec];
            } else if (refreshesPerSec < 100) {
                let tens: i32 = refreshesPerSec / 10;
                let removeTens: i32 = tens * 10;
                this.CHAR_ARRAY![3]![0] = this.primitiveLongSingleton!.NUMBER_CHAR_ARRAY![refreshesPerSec / 10];
                this.CHAR_ARRAY![3]![1] = this.primitiveLongSingleton!.NUMBER_CHAR_ARRAY![refreshesPerSec - removeTens];
            } else {
                this.CHAR_ARRAY![3]![0] = this.PLUS_CHAR;
                this.CHAR_ARRAY![3]![1] = this.PLUS_CHAR;
            }
        } if (JThrowable.pending !== null) return null;
        return this.CHAR_ARRAY;
    }
    

    toStringArray(): StaticArray<string | null> | null {
        let totalTime: i64 = this.timeDelayHelper!.getElapsed(this.gameTickTimeDelayHelper!.startTime); if (JThrowable.pending !== null) return null;
        totalTime = (totalTime / (<i64>10000));
        if (totalTime > (<i64>0)) {
            this.STRING_ARRAY![1] = JLong.toString1(totalTime); if (JThrowable.pending !== null) return null;
            this.STRING_ARRAY![3] = JLong.toString1(this.totalFrames); if (JThrowable.pending !== null) return null;
            this.STRING_ARRAY![5] = JLong.toString1(this.totalFrames / totalTime); if (JThrowable.pending !== null) return null;
            this.STRING_ARRAY![7] = JLong.toString1(this.totalRefreshes); if (JThrowable.pending !== null) return null;
            this.STRING_ARRAY![9] = JLong.toString1(this.totalRefreshes / totalTime); if (JThrowable.pending !== null) return null;
        } else {
            let string: string | null = this.EMPTY_STRING;
            this.STRING_ARRAY![1] = string;
            this.STRING_ARRAY![3] = string;
            this.STRING_ARRAY![5] = string;
            this.STRING_ARRAY![7] = string;
            this.STRING_ARRAY![9] = string;
        } if (JThrowable.pending !== null) return null;
        return this.STRING_ARRAY;
    }
    

    toStringAt(totalTime: i64): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.STRING_ARRAY![0]); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendlong(totalTime); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.STRING_ARRAY![2]); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendlong(this.totalFrames); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.STRING_ARRAY![4]); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendlong(this.totalFrames / totalTime); if (JThrowable.pending !== null) return null;
        if (this.totalRefreshes > (<i64>0)) {
            stringBuffer!.append(this.STRING_ARRAY![6]); if (JThrowable.pending !== null) return null;
            stringBuffer!.appendlong(this.totalRefreshes); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(this.STRING_ARRAY![8]); if (JThrowable.pending !== null) return null;
            stringBuffer!.appendlong(this.totalRefreshes / totalTime); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    toString(): string | null {
        let totalTime: i64 = this.timeDelayHelper!.getElapsed(this.gameTickTimeDelayHelper!.startTime); if (JThrowable.pending !== null) return null;
        totalTime = (totalTime / (<i64>1000));
        if (totalTime > (<i64>0)) {
            return this.toStringAt(totalTime);
        } else {
            return this.NOT;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

