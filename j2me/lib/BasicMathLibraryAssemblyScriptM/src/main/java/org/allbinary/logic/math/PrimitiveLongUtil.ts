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
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class PrimitiveLongUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.math.PrimitiveLongUtil";
    }
    logUtil: LogUtil | null = null;
    powerOfTen: i32 = 0;
    maxValue: i32 = 0;
    maxDigits: i32 = 0;
    charArray: StaticArray<u16> | null = null;
    currentTotalDigits: i32 = 0;
    primitiveLongSingleton: PrimitiveLongSingleton | null = null;

    jfields_PrimitiveLongUtil(): void {
    this.logUtil = LogUtil.getInstance();
    
    
    
    
    this.currentTotalDigits = 0;
    this.primitiveLongSingleton = PrimitiveLongSingleton.getInstance();
    }
    

    static createPowerOfTen(powerOfTen: i32): PrimitiveLongUtil | null {
        let primitiveLongUtil: PrimitiveLongUtil | null = new PrimitiveLongUtil().jinit_PrimitiveLongUtil_2(powerOfTen, NullUtil.getInstance()!.NULL_OBJECT); if (JThrowable.pending !== null) return null;
        if (powerOfTen % 10 != 0) {
            let logUtil: LogUtil | null = LogUtil.getInstance(); if (JThrowable.pending !== null) return null;
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
            logUtil!.put(commonStrings!.EXCEPTION, primitiveLongUtil, commonStrings!.CONSTRUCTOR, new JException().jinit_JException_1("Max must be power of 10")); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return primitiveLongUtil;
    }
    

    jinit_PrimitiveLongUtil_2(powerOfTen: i32, unused: Object | null): PrimitiveLongUtil {
        super.jinit_JObject_0();
        this.jfields_PrimitiveLongUtil();
        this.maxDigits = MathUtil.getInstance()!.getTotalDigits(powerOfTen); if (JThrowable.pending !== null) return this;
        this.powerOfTen = powerOfTen;
        this.maxValue = (powerOfTen * 10) - 1;
        this.charArray = new StaticArray<u16>(this.maxDigits);
        return this;
    }
    

    getCharArray(value: i32): StaticArray<u16> | null {
        if (value < 10) {
            this.setCurrentTotalDigits(1); if (JThrowable.pending !== null) return null;
            return this.primitiveLongSingleton!.NUMBER_CHAR_ARRAYS![value];
        } if (JThrowable.pending !== null) return null;
        if (value > this.maxValue) {
            this.setCurrentTotalDigits(3); if (JThrowable.pending !== null) return null;
            return this.primitiveLongSingleton!.UNK;
        } if (JThrowable.pending !== null) return null;
        let index: i32 = 0;
        let div: i32 = this.powerOfTen;
        let lastValue: i32 = 0;
        while (div >= 1) {
            let digit: i32 = (value - lastValue) / div;
            if (digit >= 0 && digit < 10) {
                if (digit == 0 && index == 0) {
                } else {
                    this.charArray![index++] = this.primitiveLongSingleton!.NUMBER_CHAR_ARRAY![digit];
                }
                lastValue += digit * div;
            }
            div = div / 10;
        }
        this.setCurrentTotalDigits(index); if (JThrowable.pending !== null) return null;
        return this.charArray;
    }
    

    setCurrentTotalDigits(currentTotalDigits: i32): void {
        this.currentTotalDigits = currentTotalDigits;
    }
    

    getCurrentTotalDigits(): i32 {
        return this.currentTotalDigits;
    }
    

    getMaxDigits(): i32 {
        return this.maxDigits;
    }
}

