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
// package org.allbinary.logic.java.byteutil

@global export class ByteUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.java.byteutil.ByteUtil";
    }
    @lazy static jv_instance: ByteUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ByteUtil | null {
        if (!ByteUtil.js_instance) {
            ByteUtil.js_instance = true;
            ByteUtil.jv_instance = new ByteUtil().jinit_ByteUtil_0();
        }
        return ByteUtil.jv_instance;
    }
    static set instance(value: ByteUtil | null) {
        ByteUtil.js_instance = true;
        ByteUtil.jv_instance = value;
    }
    

    static getInstance(): ByteUtil | null {
        return ByteUtil.instance;
    }
    

    jinit_ByteUtil_0(): ByteUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    xor(array: StaticArray<i8> | null, mask: i8): StaticArray<i8> | null {
        let bytes: StaticArray<i8> | null = new StaticArray<i8>(array!.length);
        let size: i32 = array!.length;
        let index: i32 = 0;
        let currentByte: i8 = 0;
        while (index < size) {
            currentByte = array![index];
            bytes![index] = (<i8>((currentByte ^ mask)));
            index++;
        }
        return bytes;
    }
    

    not(array: StaticArray<i8> | null): StaticArray<i8> | null {
        let bytes: StaticArray<i8> | null = new StaticArray<i8>(array!.length);
        let size: i32 = array!.length;
        let index: i32 = 0;
        while (index < size) {
            bytes![index] = (<i8>(~array![index]));
            index++;
        }
        return bytes;
    }
    

    xorByte(array: StaticArray<i8> | null, index: i32): StaticArray<i8> | null {
        let mask: i8 = 0;
        if (index == 0) {
            mask = 1;
        }
        if (index == 1) {
            mask = 2;
        }
        if (index == 2) {
            mask = 4;
        }
        if (index == 3) {
            mask = 8;
        }
        if (index == 4) {
            mask = 16;
        }
        if (index == 5) {
            mask = 32;
        }
        if (index == 6) {
            mask = 64;
        }
        if (index == 7) {
            mask = (<i8>(-127));
        }
        return this.xor(array, mask);
    }
    

    compare(newByteArray: StaticArray<i8> | null, oldByteArray: StaticArray<i8> | null): bool {
        if (newByteArray!.length != oldByteArray!.length) {
            return false;
        } else {
        }
        let size: i32 = newByteArray!.length;
        for (let index: i32 = 0; index < size; index++) {
            if (newByteArray![index] != oldByteArray![index]) {
                return false;
            }
        }
        return true;
    }
    

    compareWithStats(newByteArray: StaticArray<i8> | null, newSize: i32, oldByteArray: StaticArray<i8> | null, stats: StaticArray<i32> | null): bool {
        if (newSize != oldByteArray!.length) {
            stats![0] = -1;
            stats![2] = newSize;
            stats![3] = oldByteArray!.length;
            return false;
        } else {
            stats![0] = newSize;
        }
        stats![1] = 0;
        let size: i32 = newSize;
        for (let index: i32 = 0; index < size; index++) {
            if (newByteArray![index] != oldByteArray![index]) {
                return false;
            }
            stats![1]++;
        }
        return true;
    }
}

