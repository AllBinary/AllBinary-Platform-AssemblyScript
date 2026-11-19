// Generated Code Do Not Modify
// package org.allbinary.util
// import jsinterop.annotations.JsType
// import org.allbinary.logic.math.MathUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonSeps
// import jsinterop.annotations.JsMethod

@global export class ArrayUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.util.ArrayUtil";
    }
    @lazy static jv_instance: ArrayUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ArrayUtil | null {
        if (!ArrayUtil.js_instance) {
            ArrayUtil.js_instance = true;
            ArrayUtil.jv_instance = new ArrayUtil().jinit_ArrayUtil_0();
        }
        return ArrayUtil.jv_instance;
    }
    static set instance(value: ArrayUtil | null) {
        ArrayUtil.js_instance = true;
        ArrayUtil.jv_instance = value;
    }
    mathUtil: MathUtil | null = null;

    jfields_ArrayUtil(): void {
    this.mathUtil = MathUtil.getInstance();
    }

    jinit_ArrayUtil_0(): ArrayUtil {
        super.jinit_JObject_0();
        this.jfields_ArrayUtil();
        return this;
    }
    

    static getInstance(): ArrayUtil | null {
        return ArrayUtil.instance;
    }
    

    copyOf(original: StaticArray<Object | null> | null, newLength: i32): StaticArray<Object | null> | null {
        return this.copyOfType(original, newLength, JObject.jclassOf(original));
    }
    

    copyOfType(original: StaticArray<Object | null> | null, newLength: i32, newType: JClass | null): StaticArray<Object | null> | null {
        let copy: StaticArray<Object | null> | null = new StaticArray<Object | null>(newLength);
        JSystem.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original!.length, newLength)); if (JThrowable.pending !== null) return null;
        return copy;
    }
    

    copyOfbyte(original: StaticArray<i8> | null, newLength: i32): StaticArray<i8> | null {
        let copy: StaticArray<i8> | null = new StaticArray<i8>(newLength);
        JSystem.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original!.length, newLength)); if (JThrowable.pending !== null) return null;
        return copy;
    }
    

    copyOfshort(original: StaticArray<i16> | null, newLength: i32): StaticArray<i16> | null {
        let copy: StaticArray<i16> | null = new StaticArray<i16>(newLength);
        JSystem.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original!.length, newLength)); if (JThrowable.pending !== null) return null;
        return copy;
    }
    

    copyOfint(original: StaticArray<i32> | null, newLength: i32): StaticArray<i32> | null {
        let copy: StaticArray<i32> | null = new StaticArray<i32>(newLength);
        JSystem.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original!.length, newLength)); if (JThrowable.pending !== null) return null;
        return copy;
    }
    

    copyOflong(original: StaticArray<i64> | null, newLength: i32): StaticArray<i64> | null {
        let copy: StaticArray<i64> | null = new StaticArray<i64>(newLength);
        JSystem.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original!.length, newLength)); if (JThrowable.pending !== null) return null;
        return copy;
    }
    

    copyOfchar(original: StaticArray<u16> | null, newLength: i32): StaticArray<u16> | null {
        let copy: StaticArray<u16> | null = new StaticArray<u16>(newLength);
        JSystem.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original!.length, newLength)); if (JThrowable.pending !== null) return null;
        return copy;
    }
    

    copyOffloat(original: StaticArray<f32> | null, newLength: i32): StaticArray<f32> | null {
        let copy: StaticArray<f32> | null = new StaticArray<f32>(newLength);
        JSystem.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original!.length, newLength)); if (JThrowable.pending !== null) return null;
        return copy;
    }
    

    copyOfdouble(original: StaticArray<f64> | null, newLength: i32): StaticArray<f64> | null {
        let copy: StaticArray<f64> | null = new StaticArray<f64>(newLength);
        JSystem.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original!.length, newLength)); if (JThrowable.pending !== null) return null;
        return copy;
    }
    

    copyOfboolean(original: StaticArray<bool> | null, newLength: i32): StaticArray<bool> | null {
        let copy: StaticArray<bool> | null = new StaticArray<bool>(newLength);
        JSystem.arraycopy(original, 0, copy, 0, this.mathUtil!.min(original!.length, newLength)); if (JThrowable.pending !== null) return null;
        return copy;
    }
    

    reverse(intArray: StaticArray<i32> | null): void {
        let length: i32 = intArray!.length - 1;
        let temp: i32 = 0;
        let size: i32 = length / 2;
        for (let index: i32 = 0; index <= size; index++) {
            temp = intArray![index];
            intArray![index] = intArray![length - index];
            intArray![length - index] = temp;
        }
    }
    

    flip(intArray: StaticArray<i32> | null, width: i32, height: i32): void {
        let length: i32 = height - 1;
        let temp: i32 = 0;
        let index: i32 = 0;
        let rowIndex: i32 = 0;
        for (let y: i32 = 0; y <= length / 2; y++) {
            for (let x: i32 = 0; x < width; x++) {
                rowIndex = ((length - y) * width);
                index = x + (y * width);
                temp = intArray![index];
                intArray![index] = intArray![rowIndex + x];
                intArray![rowIndex + x] = temp;
            }
        }
    }
    

    toStringFromTwoDimensionaArray(twoDimensionalIntArray: StaticArray<StaticArray<i32> | null> | null): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let commonSeps: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) return null;
        let endIndex: i32 = twoDimensionalIntArray!.length;
        let endIndex2: i32 = twoDimensionalIntArray![0]!.length;
        for (let index: i32 = 0; index < endIndex; index++) {
            stringBuffer!.append(commonSeps!.BRACE_OPEN); if (JThrowable.pending !== null) return null;
            for (let index2: i32 = 0; index2 < endIndex2; index2++) {
                stringBuffer!.appendint((<i32>(twoDimensionalIntArray![index]![index2]))); if (JThrowable.pending !== null) return null;
                stringBuffer!.append(commonSeps!.COMMA_SEP); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            stringBuffer!.append(commonSeps!.BRACE_CLOSE); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(commonSeps!.NEW_LINE); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    toStringFromObjectArray(objectArray: StaticArray<Object | null> | null): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let commonSeps: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < objectArray!.length; index++) {
            stringBuffer!.append(StringUtil.getInstance()!.toString1(objectArray![index])); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(commonSeps!.COMMA_SEP); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    toStringFromByteArray(byteArray: StaticArray<i8> | null): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let commonSeps: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < byteArray!.length; index++) {
            stringBuffer!.appendbyte(byteArray![index]); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(commonSeps!.COMMA_SEP); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

