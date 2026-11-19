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

@global export class BasicDecimal extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.math.BasicDecimal";
    }
    @lazy static jv_ZERO_BIGDECIMAL: BasicDecimal | null = null;
    @lazy static js_ZERO_BIGDECIMAL: bool = false;
    static get ZERO_BIGDECIMAL(): BasicDecimal | null {
        if (!BasicDecimal.js_ZERO_BIGDECIMAL) {
            BasicDecimal.js_ZERO_BIGDECIMAL = true;
            BasicDecimal.jv_ZERO_BIGDECIMAL = new BasicDecimal().jinit_BasicDecimal_1(0);
        }
        return BasicDecimal.jv_ZERO_BIGDECIMAL;
    }
    static set ZERO_BIGDECIMAL(value: BasicDecimal | null) {
        BasicDecimal.js_ZERO_BIGDECIMAL = true;
        BasicDecimal.jv_ZERO_BIGDECIMAL = value;
    }
    units: i64 = 0;
    scaled: i32 = 0;
    factor: i32 = 0;
    factorValue: i32 = 0;

    jfields_BasicDecimal(): void {
    
    this.scaled = 0;
    this.factor = ScaleFactorFactory.getInstance()!.DEFAULT_SCALE_FACTOR;
    this.factorValue = ScaleFactorFactory.getInstance()!.DEFAULT_SCALE_VALUE;
    }
    

    static createBigDecimal(bigDecimal: BasicDecimal | null): BasicDecimal | null {
        return new BasicDecimal().jinit_BasicDecimal_1(bigDecimal!.getUnscaled());
    }
    

    jinit_BasicDecimal_1(units: i64): BasicDecimal {
        super.jinit_JObject_0();
        this.jfields_BasicDecimal();
        this.units = units;
        this.updateScaled(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    setint(value: i32): void {
        this.units = (<i64>(value));
        this.updateScaled(); if (JThrowable.pending !== null) return;
    }
    

    setlong(value: i64): void {
        this.units = value;
        this.updateScaled(); if (JThrowable.pending !== null) return;
    }
    

    set(bigDecimal: BasicDecimal | null): void {
        this.units = bigDecimal!.getUnscaled(); if (JThrowable.pending !== null) return;
        this.updateScaled(); if (JThrowable.pending !== null) return;
    }
    

    addint(value: i32): void {
        this.units = this.units + (<i64>(value));
        this.updateScaled(); if (JThrowable.pending !== null) return;
    }
    

    addlong(value: i64): void {
        this.units = this.units + value;
        this.updateScaled(); if (JThrowable.pending !== null) return;
    }
    

    add(bigDecimal: BasicDecimal | null): void {
        this.units = this.units + bigDecimal!.getUnscaled(); if (JThrowable.pending !== null) return;
        this.updateScaled(); if (JThrowable.pending !== null) return;
    }
    

    subtractint(value: i32): void {
        this.units = this.units - (<i64>(value));
        this.updateScaled(); if (JThrowable.pending !== null) return;
    }
    

    subtractlong(value: i64): void {
        this.units = this.units - value;
        this.updateScaled(); if (JThrowable.pending !== null) return;
    }
    

    subtract(bigDecimal: BasicDecimal | null): void {
        this.units = this.units - bigDecimal!.getUnscaled(); if (JThrowable.pending !== null) return;
        this.updateScaled(); if (JThrowable.pending !== null) return;
    }
    

    multiplyint(value: i32): void {
        this.units = this.units * (<i64>(value));
        this.updateScaled(); if (JThrowable.pending !== null) return;
    }
    

    multiplylong(value: i64): void {
        this.units = this.units * value;
        this.updateScaled(); if (JThrowable.pending !== null) return;
    }
    

    multiply(bigDecimal: BasicDecimal | null): void {
        this.units = this.units * bigDecimal!.getUnscaled(); if (JThrowable.pending !== null) return;
        this.updateScaled(); if (JThrowable.pending !== null) return;
    }
    

    divideint(value: i32): void {
        this.units = this.units / (<i64>(value));
        this.updateScaled(); if (JThrowable.pending !== null) return;
    }
    

    dividelong(value: i64): void {
        this.units = this.units / value;
        this.updateScaled(); if (JThrowable.pending !== null) return;
    }
    

    divide(bigDecimal: BasicDecimal | null): void {
        this.units = this.units / bigDecimal!.getUnscaled(); if (JThrowable.pending !== null) return;
        this.updateScaled(); if (JThrowable.pending !== null) return;
    }
    

    getUnscaled(): i64 {
        return this.units;
    }
    

    updateScaled(): void {
        this.scaled = (<i32>((this.units / (<i64>(this.factorValue)))));
    }
    

    getScaled(): i32 {
        return this.scaled;
    }
    

    toString(): string | null {
        return JLong.toString1(this.units);
    }
    

    getScaledFactor(): i32 {
        return this.factor;
    }
    

    getScaledFactorValue(): i32 {
        return this.factorValue;
    }
}

