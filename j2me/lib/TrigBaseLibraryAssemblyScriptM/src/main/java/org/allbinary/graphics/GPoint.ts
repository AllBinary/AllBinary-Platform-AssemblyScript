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
// package org.allbinary.graphics
// import jsinterop.annotations.JsType
// import jsinterop.annotations.JsMethod
// import jsinterop.annotations.JsConstructor
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.math.PositionStrings
// import org.allbinary.string.CommonSeps

@global export class GPoint extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.GPoint";
    }
    @lazy static readonly POINT_LABEL: string | null = "Point: ";
    x: i32 = 0;
    y: i32 = 0;
    z: i32 = 0;

    jfields_GPoint(): void {
    
    
    
    }
    

    static getInstance1(point: GPoint | null): GPoint | null {
        return new GPoint().jinit_GPoint_3(point!.getX(), point!.getY(), point!.getZ());
    }
    

    jinit_GPoint_3(x: i32, y: i32, z: i32): GPoint {
        super.jinit_JObject_0();
        this.jfields_GPoint();
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }
    

    getX(): i32 {
        return this.x;
    }
    

    getY(): i32 {
        return this.y;
    }
    

    getZ(): i32 {
        return this.z;
    }
    

    getRawX(): i32 {
        return this.x;
    }
    

    getRawY(): i32 {
        return this.y;
    }
    

    getRawZ(): i32 {
        return this.z;
    }
    

    toString(): string | null {
        return GPoint.toStringStatic(this.getX(), this.getY(), this.getZ());
    }
    

    static toStringStatic(x: i32, y: i32, z: i32): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let positionStrings: PositionStrings | null = PositionStrings.getInstance(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(GPoint.POINT_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(positionStrings!.X_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(x); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(CommonSeps.getInstance()!.SPACE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(positionStrings!.Y_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(y); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(CommonSeps.getInstance()!.SPACE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(positionStrings!.Z_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(z); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

