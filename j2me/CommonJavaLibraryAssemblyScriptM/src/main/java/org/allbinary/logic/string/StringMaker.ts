// Generated Code Do Not Modify
// package org.allbinary.logic.string
// import jsinterop.annotations.JsType
// import jsinterop.annotations.JsMethod
// import jsinterop.annotations.JsConstructor

@global export class StringMaker extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.string.StringMaker";
    }
    charArray: StaticArray<u16> | null = null;
    currentLength: i32 = 0;

    jfields_StringMaker(): void {
    
    this.currentLength = 0;
    }
    

    jinit_StringMaker_0(): StringMaker {
        super.jinit_JObject_0();
        this.jfields_StringMaker();
        this.charArray = new StaticArray<u16>(20);
        return this;
    }
    

    append(string: string | null): StringMaker | null {
        let stringLength: i32 = JString.length0(string); if (JThrowable.pending !== null) return null;
        this.ensureCapacity(this.currentLength + stringLength); if (JThrowable.pending !== null) return null;
        JString.getChars4(string, 0, stringLength, this.charArray, this.currentLength); if (JThrowable.pending !== null) return null;
        this.currentLength += stringLength;
        return this;
    }
    

    appendchar(c: u16): StringMaker | null {
        this.ensureCapacity(this.currentLength + 1); if (JThrowable.pending !== null) return null;
        this.charArray![this.currentLength++] = c;
        return this;
    }
    

    appendCharArray(charArray: StaticArray<u16> | null, start: i32, end: i32): StringMaker | null {
        this.ensureCapacity(this.currentLength + (end - start)); if (JThrowable.pending !== null) return null;
        for (let index: i32 = start; index < end; index++) {
            this.charArray![this.currentLength++] = charArray![index];
        }
        return this;
    }
    

    appendbyte(b: i8): StringMaker | null {
        this.append(JInteger.toString1(b)); if (JThrowable.pending !== null) return null;
        return this;
    }
    

    appendshort(b: i16): StringMaker | null {
        this.append(JInteger.toString1(b)); if (JThrowable.pending !== null) return null;
        return this;
    }
    

    appendint(i: i32): StringMaker | null {
        this.append(JInteger.toString1(i)); if (JThrowable.pending !== null) return null;
        return this;
    }
    

    appendlong(l: i64): StringMaker | null {
        this.append(JLong.toString1(l)); if (JThrowable.pending !== null) return null;
        return this;
    }
    

    appendfloat(f: f32): StringMaker | null {
        this.append(JFloat.toString1(f)); if (JThrowable.pending !== null) return null;
        return this;
    }
    

    appendboolean(bool_: bool): StringMaker | null {
        if (bool_) {
            this.ensureCapacity(this.currentLength + 4); if (JThrowable.pending !== null) return null;
            this.charArray![this.currentLength++] = (<u16>0x74);
            this.charArray![this.currentLength++] = (<u16>0x72);
            this.charArray![this.currentLength++] = (<u16>0x75);
            this.charArray![this.currentLength++] = (<u16>0x65);
        } else {
            this.ensureCapacity(this.currentLength + 5); if (JThrowable.pending !== null) return null;
            this.charArray![this.currentLength++] = (<u16>0x66);
            this.charArray![this.currentLength++] = (<u16>0x61);
            this.charArray![this.currentLength++] = (<u16>0x6C);
            this.charArray![this.currentLength++] = (<u16>0x73);
            this.charArray![this.currentLength++] = (<u16>0x65);
        } if (JThrowable.pending !== null) return null;
        return this;
    }
    

    ensureCapacity(minSize: i32): void {
        let oldCapacity: i32 = this.charArray!.length;
        if (minSize > oldCapacity) {
            let newCapacity: i32 = oldCapacity * 3;
            if (newCapacity < minSize) {
                newCapacity = minSize;
            }
            let copy: StaticArray<u16> | null = new StaticArray<u16>(newCapacity);
            let min: i32 = this.min(this.charArray!.length, newCapacity); if (JThrowable.pending !== null) return;
            JSystem.arraycopy(this.charArray, 0, copy, 0, min); if (JThrowable.pending !== null) return;
            this.charArray = copy;
        } if (JThrowable.pending !== null) return;
    }
    

    min(value: i32, value2: i32): i32 {
        return ((value <= value2) ? value : value2);
    }
    

    delete_(start: i32, end: i32): StringMaker | null {
        this.currentLength -= (end - start);
        return this;
    }
    

    length(): i32 {
        return this.currentLength;
    }
    

    toString(): string | null {
        return JString.new3(this.charArray, 0, this.currentLength);
    }
}

