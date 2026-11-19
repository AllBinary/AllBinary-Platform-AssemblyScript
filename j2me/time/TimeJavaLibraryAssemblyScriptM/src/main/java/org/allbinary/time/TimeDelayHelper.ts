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
// package org.allbinary.time
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonLabels

@global export class TimeDelayHelper extends JObject {

    jclassName(): string {
        return "org.allbinary.time.TimeDelayHelper";
    }
    startTime: i64 = 0;
    elapsedTimeAtPause: i64 = 0;
    delay: i32 = 0;

    jfields_TimeDelayHelper(): void {
    this.startTime = (<i64>(-1));
    this.elapsedTimeAtPause = JLong.MIN_VALUE;
    
    }
    

    jinit_TimeDelayHelper_1(delay: i32): TimeDelayHelper {
        super.jinit_JObject_0();
        this.jfields_TimeDelayHelper();
        this.delay = delay;
        this.setStartTimeTNT(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    isTimeTNT(): bool {
        let currentTime: i64 = JSystem.currentTimeMillis(); if (JThrowable.pending !== null) return false;
        if (currentTime - this.startTime > (<i64>(this.delay))) {
            this.startTime = currentTime;
            return true;
        }
        return false;
    }
    

    isTimeSinceTNT(delay: i32): bool {
        let currentTime: i64 = JSystem.currentTimeMillis(); if (JThrowable.pending !== null) return false;
        if (currentTime - this.startTime > (<i64>(delay))) {
            this.startTime = currentTime;
            return true;
        }
        return false;
    }
    

    isTime(currentTime: i64): bool {
        if (currentTime - this.startTime > (<i64>(this.delay))) {
            this.startTime = currentTime;
            return true;
        }
        return false;
    }
    

    isTimeWithoutReset(currentTime: i64): bool {
        if (currentTime - this.startTime > (<i64>(this.delay))) {
            return true;
        }
        return false;
    }
    

    isTimeSince(delay: i32, currentTime: i64): bool {
        if (currentTime - this.startTime > (<i64>(this.delay))) {
            this.startTime = currentTime;
            return true;
        }
        return false;
    }
    

    getElapsedTNT(): i64 {
        return JSystem.currentTimeMillis() - this.startTime;
    }
    

    getElapsed(currentTime: i64): i64 {
        return currentTime - this.startTime;
    }
    

    isElapsed(currentTime: i64, time: i64): bool {
        if (this.getElapsed(currentTime) > time) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    isElapsedTNT(time: i64): bool {
        if (this.getElapsedTNT() > time) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    setStartTime(startTime: i64): void {
        this.startTime = startTime;
    }
    

    getStartTime(): i64 {
        return this.startTime;
    }
    

    setStartTimeTNT(): void {
        this.startTime = JSystem.currentTimeMillis(); if (JThrowable.pending !== null) return;
    }
    

    pause(): void {
        this.elapsedTimeAtPause = this.getElapsedTNT(); if (JThrowable.pending !== null) return;
        this.startTime = JLong.MAX_VALUE;
    }
    

    resume(): bool {
        if (this.elapsedTimeAtPause != JLong.MIN_VALUE) {
            this.startTime = JSystem.currentTimeMillis() + this.elapsedTimeAtPause; if (JThrowable.pending !== null) return false;
            this.elapsedTimeAtPause = JLong.MIN_VALUE;
            this.setStartTimeTNT(); if (JThrowable.pending !== null) return false;
            return true;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    toStringAt(currentTime: i64): string | null {
        let elapsed: i64 = this.getElapsed(currentTime); if (JThrowable.pending !== null) return null;
        if (elapsed > (<i64>0)) {
            let commonLabels: CommonLabels | null = CommonLabels.getInstance(); if (JThrowable.pending !== null) return null;
            let elapsedAsString: string | null = JLong.toString1(elapsed); if (JThrowable.pending !== null) return null;
            return JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(commonLabels!.START)!.appendlong(this.startTime)!.append(commonLabels!.CURRENT)!.appendlong(currentTime)!.append(commonLabels!.ELAPSED)!.append(elapsedAsString));
        } else {
            return StringUtil.getInstance()!.EMPTY_STRING;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    toString(): string | null {
        let currentTime: i64 = JSystem.currentTimeMillis(); if (JThrowable.pending !== null) return null;
        let elapsed: i64 = this.getElapsed(currentTime); if (JThrowable.pending !== null) return null;
        if (elapsed > (<i64>0)) {
            let commonLabels: CommonLabels | null = CommonLabels.getInstance(); if (JThrowable.pending !== null) return null;
            let elapsedAsString: string | null = JLong.toString1(elapsed); if (JThrowable.pending !== null) return null;
            return JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(commonLabels!.START)!.appendlong(this.startTime)!.append(commonLabels!.CURRENT)!.appendlong(currentTime)!.append(commonLabels!.ELAPSED)!.append(elapsedAsString));
        } else {
            return StringUtil.getInstance()!.EMPTY_STRING;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

