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

@global export class SmallLongFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.math.SmallLongFactory";
    }
    @lazy static jv_instance: SmallLongFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): SmallLongFactory | null {
        if (!SmallLongFactory.js_instance) {
            SmallLongFactory.js_instance = true;
            SmallLongFactory.jv_instance = new SmallLongFactory().jinit_SmallLongFactory_0();
        }
        return SmallLongFactory.jv_instance;
    }
    static set instance(value: SmallLongFactory | null) {
        SmallLongFactory.js_instance = true;
        SmallLongFactory.jv_instance = value;
    }
    NEGATIVE_MAX: i32 = 0;
    POSITIVE_MAX: i32 = 0;
    INTEGER_ARRAY: StaticArray<JLong | null> | null = null;
    STRING_ARRAY: StaticArray<string | null> | null = null;
    MIN: i32 = 0;
    lastMin: i32 = 0;
    lastNegativeMin: i32 = 0;

    jfields_SmallLongFactory(): void {
    this.NEGATIVE_MAX = 500;
    this.POSITIVE_MAX = 0x2D1;
    this.INTEGER_ARRAY = new StaticArray<JLong | null>(this.NEGATIVE_MAX + this.POSITIVE_MAX);
    this.STRING_ARRAY = new StaticArray<string | null>(this.NEGATIVE_MAX + this.POSITIVE_MAX);
    this.MIN = 0;
    this.lastMin = 0;
    this.lastNegativeMin = 0;
    }
    

    static getInstance(): SmallLongFactory | null {
        return SmallLongFactory.instance;
    }
    

    initWithRange(value: i32, negativeValue: i32): void {
        for (let index: i32 = value - 1; index >= this.lastMin; index--) {
            this.INTEGER_ARRAY![index + this.NEGATIVE_MAX] = new JLong().jinit_JLong_1(index); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        for (let index: i32 = negativeValue - 1; index >= this.lastNegativeMin; index--) {
            this.INTEGER_ARRAY![index] = new JLong().jinit_JLong_1(-index); if (JThrowable.pending !== null) return;
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
        if (this.INTEGER_ARRAY![0] == null) {
            if (this.lastMin < this.POSITIVE_MAX || this.lastNegativeMin < this.NEGATIVE_MAX) {
                for (let index: i32 = this.POSITIVE_MAX - 1; index >= this.lastMin; index--) {
                    this.INTEGER_ARRAY![index + this.NEGATIVE_MAX] = new JLong().jinit_JLong_1(index); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
                for (let index: i32 = this.NEGATIVE_MAX - 1; index >= this.lastNegativeMin; index--) {
                    this.INTEGER_ARRAY![index] = new JLong().jinit_JLong_1(-index); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
                this.lastMin = this.POSITIVE_MAX;
                this.lastNegativeMin = this.NEGATIVE_MAX;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    jinit_SmallLongFactory_0(): SmallLongFactory {
        super.jinit_JObject_0();
        this.jfields_SmallLongFactory();
        return this;
    }
    

    getInstanceNoThrow(index: i64): JLong | null {
        if (index + (<i64>(this.NEGATIVE_MAX)) > (<i64>(this.INTEGER_ARRAY!.length - 1))) {
            return this.INTEGER_ARRAY![-1 + this.NEGATIVE_MAX];
        }
        return this.INTEGER_ARRAY![((<i32>(index))) + this.NEGATIVE_MAX];
    }
    

    getString(index: i32): string | null {
        let i: i32 = index + this.NEGATIVE_MAX;
        if (this.STRING_ARRAY![i] == null) {
            this.STRING_ARRAY![i] = JObject.jtoString(this.INTEGER_ARRAY![i]); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return this.STRING_ARRAY![i];
    }
}

