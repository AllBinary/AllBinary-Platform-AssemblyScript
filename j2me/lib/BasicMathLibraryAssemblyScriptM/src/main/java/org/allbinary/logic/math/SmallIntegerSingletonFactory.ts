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
// import org.allbinary.AndroidUtil
// import org.allbinary.J2MEUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker

@global export class SmallIntegerSingletonFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.math.SmallIntegerSingletonFactory";
    }
    @lazy static jv_instance: SmallIntegerSingletonFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): SmallIntegerSingletonFactory | null {
        if (!SmallIntegerSingletonFactory.js_instance) {
            SmallIntegerSingletonFactory.js_instance = true;
            SmallIntegerSingletonFactory.jv_instance = new SmallIntegerSingletonFactory().jinit_SmallIntegerSingletonFactory_0();
        }
        return SmallIntegerSingletonFactory.jv_instance;
    }
    static set instance(value: SmallIntegerSingletonFactory | null) {
        SmallIntegerSingletonFactory.js_instance = true;
        SmallIntegerSingletonFactory.jv_instance = value;
    }
    NEGATIVE_MAX: i32 = 0;
    POSITIVE_MAX: i32 = 0;
    INTEGER_ARRAY: StaticArray<JInteger | null> | null = null;
    STRING_ARRAY: StaticArray<string | null> | null = null;
    MIN: i32 = 0;
    lastMin: i32 = 0;
    lastNegativeMin: i32 = 0;

    jfields_SmallIntegerSingletonFactory(): void {
    this.NEGATIVE_MAX = 500;
    this.POSITIVE_MAX = 0x2D1;
    this.INTEGER_ARRAY = new StaticArray<JInteger | null>(this.NEGATIVE_MAX + this.POSITIVE_MAX);
    this.STRING_ARRAY = new StaticArray<string | null>(this.NEGATIVE_MAX + this.POSITIVE_MAX);
    this.MIN = 0;
    this.lastMin = 0;
    this.lastNegativeMin = 0;
    }
    

    static getInstance(): SmallIntegerSingletonFactory | null {
        return SmallIntegerSingletonFactory.instance;
    }
    

    getMin(): i32 {
        let minAllowed: i32 = this.getMinAllowed(); if (JThrowable.pending !== null) return 0;
        if (this.MIN <= minAllowed) {
            if (J2MEUtil.isJ2ME()) {
            } else if (AndroidUtil.isAndroid()) {
                let logUtil: LogUtil | null = LogUtil.getInstance(); if (JThrowable.pending !== null) return 0;
                logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Android InputFactory was initialized before GameMidlet: ")!.appendint(this.MIN)), this, "getMin"); if (JThrowable.pending !== null) return 0;
                this.initWithRange(0x291, 6); if (JThrowable.pending !== null) return 0;
            } else {
                let logUtil: LogUtil | null = LogUtil.getInstance(); if (JThrowable.pending !== null) return 0;
                logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("InputFactory was initialized before GameMidlet or KeyFactoryInitializer - Currently this is occurs on JS build by TouchMotionGestureFactory constructor: ")!.appendint(this.MIN)), this, "getMin"); if (JThrowable.pending !== null) return 0;
                this.initWithRange(0x2D0, 6); if (JThrowable.pending !== null) return 0;
            } if (JThrowable.pending !== null) return 0;
        } if (JThrowable.pending !== null) return 0;
        if (this.MIN <= minAllowed) {
            let logUtil: LogUtil | null = LogUtil.getInstance(); if (JThrowable.pending !== null) return 0;
            logUtil!.put("This means you loaded the InputFactory before determining the platform input size requirements.", this, "getMin", new JException().jinit_JException_0()); if (JThrowable.pending !== null) return 0;
        } if (JThrowable.pending !== null) return 0;
        return this.MIN;
    }
    

    getMinAllowed(): i32 {
        if (J2MEUtil.isJ2ME()) {
            return 0;
        } else {
            if (AndroidUtil.isAndroid()) {
                return 0x101;
            } else {
                return 23;
            } if (JThrowable.pending !== null) return 0;
        } if (JThrowable.pending !== null) return 0;
        return 0;
    }
    

    initWithRange(value: i32, negativeValue: i32): void {
        for (let index: i32 = value - 1; index >= this.lastMin; index--) {
            this.INTEGER_ARRAY![index + this.NEGATIVE_MAX] = new JInteger().jinit_JInteger_1(index); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        for (let index: i32 = negativeValue - 1; index >= this.lastNegativeMin; index--) {
            this.INTEGER_ARRAY![index] = new JInteger().jinit_JInteger_1(-index); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (this.lastMin < value) {
            this.lastMin = value;
            this.MIN = value;
        }
        if (this.lastNegativeMin < negativeValue) {
            this.lastNegativeMin = negativeValue;
        }
    }
    

    init(): void {
        if (this.lastMin < this.POSITIVE_MAX || this.lastNegativeMin < this.NEGATIVE_MAX) {
            for (let index: i32 = this.POSITIVE_MAX - 1; index >= this.lastMin; index--) {
                this.INTEGER_ARRAY![index + this.NEGATIVE_MAX] = new JInteger().jinit_JInteger_1(index); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            for (let index: i32 = this.NEGATIVE_MAX - 1; index >= this.lastNegativeMin; index--) {
                this.INTEGER_ARRAY![index] = new JInteger().jinit_JInteger_1(-index); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            this.lastMin = this.POSITIVE_MAX;
            this.MIN = this.lastMin;
            this.lastNegativeMin = this.NEGATIVE_MAX;
        } if (JThrowable.pending !== null) return;
    }
    

    jinit_SmallIntegerSingletonFactory_0(): SmallIntegerSingletonFactory {
        super.jinit_JObject_0();
        this.jfields_SmallIntegerSingletonFactory();
        this.initWithRange(23, 0); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getAt(index: i32): JInteger | null {
        return this.INTEGER_ARRAY![index + this.NEGATIVE_MAX];
    }
    

    getAtNoThrow(index: i32): JInteger | null {
        if (index + this.NEGATIVE_MAX > this.INTEGER_ARRAY!.length - 1) {
            return this.INTEGER_ARRAY![-1 + this.NEGATIVE_MAX];
        }
        return this.INTEGER_ARRAY![index + this.NEGATIVE_MAX];
    }
    

    createInstance(index: i32): JInteger | null {
        let integer: JInteger | null = this.getAt(index); if (JThrowable.pending !== null) return null;
        if (integer == null) {
            integer = new JInteger().jinit_JInteger_1(index); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return integer;
    }
    

    getString(index: i32): string | null {
        let i: i32 = index + this.NEGATIVE_MAX;
        if (this.STRING_ARRAY![i] == null) {
            this.STRING_ARRAY![i] = JObject.jtoString(this.INTEGER_ARRAY![i]); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return this.STRING_ARRAY![i];
    }
}

