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

@global export class PrimitiveLongSingleton extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.math.PrimitiveLongSingleton";
    }
    @lazy static jv_instance: PrimitiveLongSingleton | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): PrimitiveLongSingleton | null {
        if (!PrimitiveLongSingleton.js_instance) {
            PrimitiveLongSingleton.js_instance = true;
            PrimitiveLongSingleton.jv_instance = new PrimitiveLongSingleton().jinit_PrimitiveLongSingleton_0();
        }
        return PrimitiveLongSingleton.jv_instance;
    }
    static set instance(value: PrimitiveLongSingleton | null) {
        PrimitiveLongSingleton.js_instance = true;
        PrimitiveLongSingleton.jv_instance = value;
    }
    UNK: StaticArray<u16> | null = null;
    NUMBER_ARRAY: StaticArray<i8> | null = null;
    NUMBER_CHAR_ARRAY: StaticArray<u16> | null = null;
    NUMBER_CHAR_ARRAYS: StaticArray<StaticArray<u16> | null> | null = null;
    ZERO: StaticArray<u16> | null = null;

    jfields_PrimitiveLongSingleton(): void {
    this.UNK = StaticArray.fromArray<u16>([(<u16>0x55), (<u16>0x6E), (<u16>0x6B)]);
    this.NUMBER_ARRAY = StaticArray.fromArray<i8>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    this.NUMBER_CHAR_ARRAY = StaticArray.fromArray<u16>([(<u16>0x30), (<u16>0x31), (<u16>0x32), (<u16>0x33), (<u16>0x34), (<u16>0x35), (<u16>0x36), (<u16>0x37), (<u16>0x38), (<u16>0x39)]);
    this.NUMBER_CHAR_ARRAYS = StaticArray.fromArray<StaticArray<u16> | null>([StaticArray.fromArray<u16>([(<u16>0x30)]), StaticArray.fromArray<u16>([(<u16>0x31)]), StaticArray.fromArray<u16>([(<u16>0x32)]), StaticArray.fromArray<u16>([(<u16>0x33)]), StaticArray.fromArray<u16>([(<u16>0x34)]), StaticArray.fromArray<u16>([(<u16>0x35)]), StaticArray.fromArray<u16>([(<u16>0x36)]), StaticArray.fromArray<u16>([(<u16>0x37)]), StaticArray.fromArray<u16>([(<u16>0x38)]), StaticArray.fromArray<u16>([(<u16>0x39)])]);
    this.ZERO = StaticArray.fromArray<u16>([this.NUMBER_CHAR_ARRAY![0]]);
    }

    jinit_PrimitiveLongSingleton_0(): PrimitiveLongSingleton {
        super.jinit_JObject_0();
        this.jfields_PrimitiveLongSingleton();
        return this;
    }
    

    static getInstance(): PrimitiveLongSingleton | null {
        return PrimitiveLongSingleton.instance;
    }
    

    getNumberFromChar(numberAsChar: u16): i8 {
        let size: i32 = this.NUMBER_CHAR_ARRAY!.length;
        for (let index: i32 = 0; index < size; index++) {
            if (this.NUMBER_CHAR_ARRAY![index] == numberAsChar) {
                return this.NUMBER_ARRAY![index];
            }
        }
        { JThrowable.raise(new JException().jinit_JException_1(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("numberAsChar was not in array: ")!.appendchar(numberAsChar)))); return 0; }
        return 0;
    }
}

