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
// package org.allbinary.vector

@global export class VectorInfo extends JObject {

    jclassName(): string {
        return "org.allbinary.vector.VectorInfo";
    }
    width: i32 = 0;
    height: i32 = 0;
    points: StaticArray<StaticArray<i32> | null> | null = null;
    totalFrames: i32 = 0;

    jfields_VectorInfo(): void {
    
    
    
    
    }
    

    jinit_VectorInfo_4(width: i32, height: i32, points: StaticArray<StaticArray<i32> | null> | null, totalFrames: i32): VectorInfo {
        super.jinit_JObject_0();
        this.jfields_VectorInfo();
        this.width = width;
        this.height = height;
        this.points = points;
        this.totalFrames = totalFrames;
        return this;
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
    

    getPoints(): StaticArray<StaticArray<i32> | null> | null {
        return this.points;
    }
    

    setPoints(points: StaticArray<StaticArray<i32> | null> | null): void {
        this.points = points;
    }
    

    getTotalFrames(): i32 {
        return this.totalFrames;
    }
    

    setTotalFrames(totalFrames: i32): void {
        this.totalFrames = totalFrames;
    }
}

