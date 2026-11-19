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
// package org.allbinary.direction
// import org.allbinary.logic.string.StringMaker

@global export class Direction extends JObject {

    jclassName(): string {
        return "org.allbinary.direction.Direction";
    }
    @lazy static jv_directionArray: StaticArray<Direction | null> | null = null;
    @lazy static js_directionArray: bool = false;
    static get directionArray(): StaticArray<Direction | null> | null {
        if (!Direction.js_directionArray) {
            Direction.js_directionArray = true;
            Direction.jv_directionArray = new StaticArray<Direction | null>(13);
        }
        return Direction.jv_directionArray;
    }
    static set directionArray(value: StaticArray<Direction | null> | null) {
        Direction.js_directionArray = true;
        Direction.jv_directionArray = value;
    }
    name: string | null = null;
    otherName: string | null = null;
    value: i32 = 0;
    frameFactor: i32 = 0;

    jfields_Direction(): void {
    
    
    
    
    }
    

    jinit_Direction_4(name: string | null, otherName: string | null, value: i32, frameFactor: i32): Direction {
        super.jinit_JObject_0();
        this.jfields_Direction();
        this.name = name;
        this.otherName = otherName;
        this.value = value;
        this.frameFactor = frameFactor;
        Direction.directionArray![value] = this;
        return this;
    }
    

    static getInstance1(direction: i32): Direction | null {
        return Direction.directionArray![direction];
    }
    

    getValue(): i32 {
        return this.value;
    }
    

    getFrameFactor(): i32 {
        return this.frameFactor;
    }
    

    getOtherName(): string | null {
        return this.otherName;
    }
    

    getName(): string | null {
        return this.name;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("Direction: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.getName()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" Or: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.getOtherName()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" Value: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.value); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

