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

@global export class CustomGPoint extends GPoint {

    jclassName(): string {
        return "org.allbinary.graphics.CustomGPoint";
    }
    @lazy static jv_NULL_CUSTOM_POINT: CustomGPoint | null = null;
    @lazy static js_NULL_CUSTOM_POINT: bool = false;
    static get NULL_CUSTOM_POINT(): CustomGPoint | null {
        if (!CustomGPoint.js_NULL_CUSTOM_POINT) {
            CustomGPoint.js_NULL_CUSTOM_POINT = true;
            CustomGPoint.jv_NULL_CUSTOM_POINT = new CustomGPoint().jinit_CustomGPoint_3(0, 0, 0);
        }
        return CustomGPoint.jv_NULL_CUSTOM_POINT;
    }
    static set NULL_CUSTOM_POINT(value: CustomGPoint | null) {
        CustomGPoint.js_NULL_CUSTOM_POINT = true;
        CustomGPoint.jv_NULL_CUSTOM_POINT = value;
    }
    cx: i32 = 0;
    cy: i32 = 0;
    cz: i32 = 0;

    jfields_CustomGPoint(): void {
    this.cx = 0;
    this.cy = 0;
    this.cz = 0;
    }
    

    static getInstance1(point: GPoint | null): CustomGPoint | null {
        return new CustomGPoint().jinit_CustomGPoint_3(point!.getX(), point!.getY(), point!.getZ());
    }
    

    static getInstance3(x: i32, y: i32): CustomGPoint | null {
        return new CustomGPoint().jinit_CustomGPoint_3(x, y, 3);
    }
    

    jinit_CustomGPoint_3(x: i32, y: i32, z: i32): CustomGPoint {
        super.jinit_GPoint_3(x, y, z);
        this.jfields_CustomGPoint();
        return this;
    }
    

    setX(x: i32): void {
        this.cx = x;
    }
    

    getX(): i32 {
        return this.cx;
    }
    

    setY(y: i32): void {
        this.cy = y;
    }
    

    getY(): i32 {
        return this.cy;
    }
    

    setZ(z: i32): void {
        this.cz = z;
    }
    

    getZ(): i32 {
        return this.cz;
    }
}

