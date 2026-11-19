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
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonSeps

@global export class Rectangle extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.Rectangle";
    }
    point: GPoint | null = null;
    width: i32 = 0;
    height: i32 = 0;

    jfields_Rectangle(): void {
    
    
    
    }
    

    jinit_Rectangle_3(point: GPoint | null, width: i32, height: i32): Rectangle {
        super.jinit_JObject_0();
        this.jfields_Rectangle();
        this.point = point;
        this.width = width;
        this.height = height;
        return this;
    }
    

    getPoint(): GPoint | null {
        return this.point;
    }
    

    setPoint(point: GPoint | null): void {
        this.point = point;
    }
    

    getMaxX(): i32 {
        return this.point!.getX() + this.width;
    }
    

    getMaxY(): i32 {
        return this.point!.getY() + this.height;
    }
    

    getWidth(): i32 {
        return this.width;
    }
    

    setWidth(width: i32): void {
        this.width = width;
    }
    

    getHeight(): i32 {
        return this.height;
    }
    

    setHeight(height: i32): void {
        this.height = height;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(JObject.jtoString(this.getPoint())); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(CommonSeps.getInstance()!.SPACE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(CommonLabels.getInstance()!.WIDTH_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.getWidth()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(CommonSeps.getInstance()!.SPACE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(CommonLabels.getInstance()!.HEIGHT_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.getHeight()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" MaxX: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.getMaxX()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" MaxY: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.getMaxY()); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

