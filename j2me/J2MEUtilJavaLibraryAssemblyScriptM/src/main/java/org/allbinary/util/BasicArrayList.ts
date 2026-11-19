// Generated Code Do Not Modify
// package org.allbinary.util
// import jsinterop.annotations.JsType
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonSeps
// import jsinterop.annotations.JsMethod
// import jsinterop.annotations.JsConstructor
// import jsinterop.annotations.JsProperty

//This is a very fast and simple resizable list.
@global export class BasicArrayList extends JObject {

    jclassName(): string {
        return "org.allbinary.util.BasicArrayList";
    }
    @lazy static readonly SIZE: string | null = ", Size: ";
    arrayUtil: ArrayUtil | null = null;
    objectArray: StaticArray<Object | null> | null = null;
    currentIndex: i32 = 0;

    jfields_BasicArrayList(): void {
    this.arrayUtil = ArrayUtil.getInstance();
    
    this.currentIndex = 0;
    }
    

    jinit_BasicArrayList_1(objectArray: StaticArray<Object | null> | null): BasicArrayList {
        super.jinit_JObject_0();
        this.jfields_BasicArrayList();
        this.objectArray = objectArray;
        return this;
    }
    

    addAt(index: i32, element: Object | null): void {
        if (index > this.currentIndex || index < 0) {
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
            stringBuffer!.append(CommonLabels.getInstance()!.INDEX_LABEL); if (JThrowable.pending !== null) return;
            stringBuffer!.appendint(index); if (JThrowable.pending !== null) return;
            stringBuffer!.append(BasicArrayList.SIZE); if (JThrowable.pending !== null) return;
            stringBuffer!.appendint(this.currentIndex); if (JThrowable.pending !== null) return;
            { JThrowable.raise(new JIndexOutOfBoundsException().jinit_JIndexOutOfBoundsException_1(JObject.jtoString(stringBuffer))); return; }
        } if (JThrowable.pending !== null) return;
        this.ensureCapacity(this.currentIndex + 1); if (JThrowable.pending !== null) return;
        JSystem.arraycopy(this.objectArray, index, this.objectArray, index + 1, this.currentIndex - index); if (JThrowable.pending !== null) return;
        this.objectArray![index] = element;
        this.currentIndex++;
    }
    

    add(anyType: Object | null): bool {
        this.ensureCapacity(this.currentIndex + 1); if (JThrowable.pending !== null) return false;
        this.objectArray![this.currentIndex++] = anyType;
        return true;
    }
    

    removeAt(index: i32): Object | null {
        if (index >= this.currentIndex) {
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(CommonLabels.getInstance()!.INDEX_LABEL); if (JThrowable.pending !== null) return null;
            stringBuffer!.appendint(index); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(BasicArrayList.SIZE); if (JThrowable.pending !== null) return null;
            stringBuffer!.appendint(this.currentIndex); if (JThrowable.pending !== null) return null;
            { JThrowable.raise(new JIndexOutOfBoundsException().jinit_JIndexOutOfBoundsException_1(JObject.jtoString(stringBuffer))); return null; }
        } if (JThrowable.pending !== null) return null;
        let oldValue: Object | null = this.objectArray![index];
        let numMoved: i32 = this.currentIndex - index - 1;
        if (numMoved > 0) {
            JSystem.arraycopy(this.objectArray, index + 1, this.objectArray, index, numMoved); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        this.objectArray![--this.currentIndex] = null;
        return oldValue;
    }
    

    remove(anyType: Object | null): bool {
        if (anyType == null) {
            for (let index: i32 = 0; index < this.currentIndex; index++) {
                if (this.objectArray![index] == null) {
                    let numMoved: i32 = this.currentIndex - index - 1;
                    if (numMoved > 0) {
                        JSystem.arraycopy(this.objectArray, index + 1, this.objectArray, index, numMoved); if (JThrowable.pending !== null) return false;
                    } if (JThrowable.pending !== null) return false;
                    this.objectArray![--this.currentIndex] = null;
                    return true;
                } if (JThrowable.pending !== null) return false;
            } if (JThrowable.pending !== null) return false;
        } else {
            for (let index: i32 = 0; index < this.currentIndex; index++) {
                if (anyType == this.objectArray![index] || JObject.jequals(anyType, this.objectArray![index])) {
                    let numMoved: i32 = this.currentIndex - index - 1;
                    if (numMoved > 0) {
                        JSystem.arraycopy(this.objectArray, index + 1, this.objectArray, index, numMoved); if (JThrowable.pending !== null) return false;
                    } if (JThrowable.pending !== null) return false;
                    this.objectArray![--this.currentIndex] = null;
                    return true;
                } if (JThrowable.pending !== null) return false;
            } if (JThrowable.pending !== null) return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    removeAll2(list: BasicArrayList | null): bool {
        let result: bool = true;
        let size: i32 = list!.size(); if (JThrowable.pending !== null) return false;
        for (let index: i32 = 0; index < size; index++) {
            if (this.remove(list!.get(index))) {
            } else {
                result = false;
            } if (JThrowable.pending !== null) return false;
        } if (JThrowable.pending !== null) return false;
        return result;
    }
    

    addAll2(list: BasicArrayList | null): bool {
        this.ensureCapacity(this.currentIndex + list!.currentIndex); if (JThrowable.pending !== null) return false;
        let listSize: i32 = list!.currentIndex;
        for (let index: i32 = 0; index < listSize; index++) {
            this.objectArray![this.currentIndex++] = list!.objectArray![index];
        }
        return true;
    }
    

    addAllList(list: BasicArrayList | null): bool {
        let newObjectArray: StaticArray<Object | null> | null = list!.toArray(); if (JThrowable.pending !== null) return false;
        return this.addAll(newObjectArray);
    }
    

    addAll(newObjectArray: StaticArray<Object | null> | null): bool {
        let numSize: i32 = newObjectArray!.length;
        this.ensureCapacity(this.currentIndex + numSize); if (JThrowable.pending !== null) return false;
        JSystem.arraycopy(newObjectArray, 0, this.objectArray, this.currentIndex, numSize); if (JThrowable.pending !== null) return false;
        this.currentIndex += numSize;
        return numSize != 0;
    }
    

    ensureCapacity(minSize: i32): void {
        let oldCapacity: i32 = this.objectArray!.length;
        if (minSize > oldCapacity) {
            let newCapacity: i32 = ((oldCapacity * 3) >> 1) + 1;
            if (newCapacity < minSize) {
                newCapacity = minSize;
            }
            this.objectArray = this.arrayUtil!.copyOf(this.objectArray, newCapacity); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    trimToSize(): void {
        let oldCapacity: i32 = this.objectArray!.length;
        if (this.currentIndex < oldCapacity) {
            this.objectArray = this.arrayUtil!.copyOf(this.objectArray, this.currentIndex); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    indexOf(anyType: Object | null): i32 {
        if (anyType == null) {
            for (let i: i32 = 0; i < this.currentIndex; i++) {
                if (this.objectArray![i] == null) {
                    return i;
                }
            }
        } else {
            for (let i: i32 = 0; i < this.currentIndex; i++) {
                if (JObject.jequals(anyType, this.objectArray![i])) {
                    return i;
                } if (JThrowable.pending !== null) return 0;
            } if (JThrowable.pending !== null) return 0;
        } if (JThrowable.pending !== null) return 0;
        return -1;
    }
    

    lastIndexOf(anyType: Object | null): i32 {
        if (anyType == null) {
            for (let i: i32 = this.currentIndex - 1; i >= 0; i--) {
                if (this.objectArray![i] == null) {
                    return i;
                }
            }
        } else {
            for (let i: i32 = this.currentIndex - 1; i >= 0; i--) {
                if (JObject.jequals(anyType, this.objectArray![i])) {
                    return i;
                } if (JThrowable.pending !== null) return 0;
            } if (JThrowable.pending !== null) return 0;
        } if (JThrowable.pending !== null) return 0;
        return -1;
    }
    

    get(index: i32): Object | null {
        if (index >= this.currentIndex) {
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(CommonLabels.getInstance()!.INDEX_LABEL); if (JThrowable.pending !== null) return null;
            stringBuffer!.appendint(index); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(BasicArrayList.SIZE); if (JThrowable.pending !== null) return null;
            stringBuffer!.appendint(this.currentIndex); if (JThrowable.pending !== null) return null;
            { JThrowable.raise(new JIndexOutOfBoundsException().jinit_JIndexOutOfBoundsException_1(JObject.jtoString(stringBuffer))); return null; }
        } if (JThrowable.pending !== null) return null;
        return this.objectArray![index];
    }
    

    set(index: i32, element: Object | null): Object | null {
        if (index >= this.currentIndex) {
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(CommonLabels.getInstance()!.INDEX_LABEL); if (JThrowable.pending !== null) return null;
            stringBuffer!.appendint(index); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(BasicArrayList.SIZE); if (JThrowable.pending !== null) return null;
            stringBuffer!.appendint(this.currentIndex); if (JThrowable.pending !== null) return null;
            { JThrowable.raise(new JIndexOutOfBoundsException().jinit_JIndexOutOfBoundsException_1(JObject.jtoString(stringBuffer))); return null; }
        } if (JThrowable.pending !== null) return null;
        let oldValue: Object | null = this.objectArray![index];
        this.objectArray![index] = element;
        return oldValue;
    }
    

    clear(): void {
        for (let i: i32 = 0; i < this.currentIndex; i++) {
            this.objectArray![i] = null;
        }
        this.currentIndex = 0;
    }
    

    size(): i32 {
        return this.currentIndex;
    }
    

    isEmpty(): bool {
        return this.currentIndex == 0;
    }
    

    contains(anyType: Object | null): bool {
        return this.indexOf(anyType) >= 0;
    }
    

    toArray(): StaticArray<Object | null> | null {
        return this.arrayUtil!.copyOf(this.objectArray, this.currentIndex);
    }
    

    toArrayType(objectArray: StaticArray<Object | null> | null): StaticArray<Object | null> | null {
        if (objectArray!.length < this.currentIndex) {
            return this.arrayUtil!.copyOfType(this.objectArray, this.currentIndex, JObject.jclassOf(objectArray));
        } if (JThrowable.pending !== null) return null;
        JSystem.arraycopy(this.objectArray, 0, objectArray, 0, this.currentIndex); if (JThrowable.pending !== null) return null;
        if (objectArray!.length > this.currentIndex) {
            objectArray![this.currentIndex] = null;
        }
        return objectArray;
    }
    

    clone(): Object | null {
        let size: i32 = this.size(); if (JThrowable.pending !== null) return null;
        let list: BasicArrayList | null = new BasicArrayListS().jinit_BasicArrayListS_1(size); if (JThrowable.pending !== null) return null;
        let anyType: Object | null = null;
        for (let index: i32 = 0; index < size; index++) {
            anyType = this.objectArray![index];
            list!.add(anyType); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return list;
    }
    

    toString(): string | null {
        let COMMA_SEP: string | null = CommonSeps.getInstance()!.COMMA_SEP; if (JThrowable.pending !== null) return null;
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < this.currentIndex; index++) {
            stringBuffer!.append(JObject.jtoString(this.objectArray![index])); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(COMMA_SEP); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

