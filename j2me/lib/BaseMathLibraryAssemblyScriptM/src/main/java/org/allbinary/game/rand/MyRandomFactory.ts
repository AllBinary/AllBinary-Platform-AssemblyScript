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
// package org.allbinary.game.rand
// import java.util.Random
// import jsinterop.annotations.JsType
// import jsinterop.annotations.JsMethod
// import jsinterop.annotations.JsConstructor
// import org.allbinary.logic.math.MathUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonSeps

//Do not use in client code for money related things.
@global export class MyRandomFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.rand.MyRandomFactory";
    }
    @lazy static jv_instance: MyRandomFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): MyRandomFactory | null {
        if (!MyRandomFactory.js_instance) {
            MyRandomFactory.js_instance = true;
            MyRandomFactory.jv_instance = new MyRandomFactory().jinit_MyRandomFactory_0();
        }
        return MyRandomFactory.jv_instance;
    }
    static set instance(value: MyRandomFactory | null) {
        MyRandomFactory.js_instance = true;
        MyRandomFactory.jv_instance = value;
    }
    mathUtil: MathUtil | null = null;
    rand: JRandom | null = null;

    jfields_MyRandomFactory(): void {
    this.mathUtil = MathUtil.getInstance();
    
    }
    

    static getInstance(): MyRandomFactory | null {
        return MyRandomFactory.instance;
    }
    

    jinit_MyRandomFactory_0(): MyRandomFactory {
        super.jinit_JObject_0();
        this.jfields_MyRandomFactory();
        this.rand = new JRandom().jinit_JRandom_1(JSystem.currentTimeMillis()); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    setSeed(seed: i64): void {
        this.rand = new JRandom().jinit_JRandom_1(seed); if (JThrowable.pending !== null) return;
    }
    

    getNextInt(range: i32): i32 {
        let div: i32 = (JInteger.MAX_VALUE / range) + 1;
        return (this.rand!.nextInt0() / div);
    }
    

    getAbsoluteNextInt(range: i32): i32 {
        return this.mathUtil!.abs(this.getNextInt(range));
    }
    

    getAbsoluteNextIntAllowZero(range: i32): i32 {
        if (range == 0) {
            return 0;
        } else {
            return this.mathUtil!.abs(this.getNextInt(range));
        } if (JThrowable.pending !== null) return 0;
        return 0;
    }
    

    shuffle(intArray: StaticArray<i32> | null): void {
        this.shuffleTotal(intArray, intArray!.length * 7); if (JThrowable.pending !== null) return;
    }
    

    shuffleTotal(intArray: StaticArray<i32> | null, shuffleTotal: i32): void {
        let size: i32 = intArray!.length;
        let randomIndex: i32 = 0;
        let randomIndex2: i32 = 0;
        let value: i32 = 0;
        for (let index: i32 = 0; index < shuffleTotal; index++) {
            randomIndex = this.getAbsoluteNextIntAllowZero(size); if (JThrowable.pending !== null) return;
            randomIndex2 = this.getAbsoluteNextIntAllowZero(size); if (JThrowable.pending !== null) return;
            value = intArray![randomIndex];
            intArray![randomIndex] = intArray![randomIndex2];
            intArray![randomIndex2] = value;
        } if (JThrowable.pending !== null) return;
    }
    

    shuffle2(intArray: StaticArray<i32> | null, intArray2: StaticArray<i32> | null): void {
        this.shuffle2Total(intArray, intArray2, intArray!.length * 7); if (JThrowable.pending !== null) return;
    }
    

    shuffle2Total(intArray: StaticArray<i32> | null, intArray2: StaticArray<i32> | null, shuffleTotal: i32): void {
        let size: i32 = intArray!.length;
        let randomIndex: i32 = 0;
        let randomIndex2: i32 = 0;
        let value: i32 = 0;
        let value2: i32 = 0;
        for (let index: i32 = 0; index < shuffleTotal; index++) {
            randomIndex = this.getAbsoluteNextIntAllowZero(size); if (JThrowable.pending !== null) return;
            randomIndex2 = this.getAbsoluteNextIntAllowZero(size); if (JThrowable.pending !== null) return;
            value = intArray![randomIndex];
            value2 = intArray2![randomIndex];
            intArray![randomIndex] = intArray![randomIndex2];
            intArray![randomIndex2] = value;
            intArray2![randomIndex] = intArray2![randomIndex2];
            intArray2![randomIndex2] = value2;
        } if (JThrowable.pending !== null) return;
    }
    

    static main(args: StaticArray<string | null> | null): void {
        let randomFactory: MyRandomFactory | null = MyRandomFactory.getInstance(); if (JThrowable.pending !== null) return;
        let stringBuilder: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        let commonSeps: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) return;
        let size2: i32 = 100;
        for (let index: i32 = 0; index < size2; index++) {
            stringBuilder!.appendint(randomFactory!.getAbsoluteNextInt(3))!.append(commonSeps!.COMMA); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        JSystem.println(jstr(JObject.jtoString(stringBuilder))); if (JThrowable.pending !== null) return;
        stringBuilder!.delete_(0, stringBuilder!.length()); if (JThrowable.pending !== null) return;
        let intArray: StaticArray<i32> | null = new StaticArray<i32>(52);
        let intArray2: StaticArray<i32> | null = new StaticArray<i32>(52);
        let size: i32 = intArray!.length;
        for (let index: i32 = 0; index < size; index++) {
            intArray![index] = index;
            intArray2![index] = index;
        }
        randomFactory!.shuffle2(intArray, intArray2); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < size; index++) {
            stringBuilder!.appendint(intArray![index])!.append(commonSeps!.COMMA); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        JSystem.println(jstr(JObject.jtoString(stringBuilder))); if (JThrowable.pending !== null) return;
        stringBuilder!.delete_(0, stringBuilder!.length()); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < size; index++) {
            stringBuilder!.appendint(intArray2![index])!.append(commonSeps!.COMMA); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        JSystem.println(jstr(JObject.jtoString(stringBuilder))); if (JThrowable.pending !== null) return;
        let found: bool = false;
        for (let index: i32 = 0; index < size; index++) {
            found = false;
            for (let index2: i32 = 0; index2 < size; index2++) {
                if (intArray![index2] == index) {
                    found = true;
                }
            }
            if (!found) {
                { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return; }
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

