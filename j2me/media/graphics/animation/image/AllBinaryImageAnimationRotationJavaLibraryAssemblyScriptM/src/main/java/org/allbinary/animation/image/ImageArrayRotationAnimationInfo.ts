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
// package org.allbinary.animation.image
// import javax.microedition.lcdui.Image
// import org.allbinary.math.AngleInfo

@global export class ImageArrayRotationAnimationInfo extends JObject {

    jclassName(): string {
        return "org.allbinary.animation.image.ImageArrayRotationAnimationInfo";
    }
    imageArray: StaticArray<Image | null> | null = null;
    angleIncrement: i32 = 0;
    totalAngle: i32 = 0;
    dx: i32 = 0;
    dy: i32 = 0;

    jfields_ImageArrayRotationAnimationInfo(): void {
    
    
    
    
    
    }
    

    jinit_ImageArrayRotationAnimationInfo_5(imageArray: StaticArray<Image | null> | null, angleIncrement: i32, totalAngle: i32, dx: i32, dy: i32): ImageArrayRotationAnimationInfo {
        super.jinit_JObject_0();
        this.jfields_ImageArrayRotationAnimationInfo();
        this.imageArray = imageArray;
        this.angleIncrement = angleIncrement;
        this.totalAngle = totalAngle;
        this.dx = dx;
        this.dy = dy;
        return this;
    }
    

    setImageArray(imageArray: StaticArray<Image | null> | null): void {
        this.imageArray = imageArray;
    }
    

    getImageArray(): StaticArray<Image | null> | null {
        return this.imageArray;
    }
    

    getAngleInfoP(): AngleInfo | null {
        return AngleInfo.getInstance1((<i16>(this.angleIncrement)));
    }
    

    setTotalAngle(totalAngle: i32): void {
        this.totalAngle = totalAngle;
    }
    

    getTotalAngle(): i32 {
        return this.totalAngle;
    }
    

    setDx(dx: i32): void {
        this.dx = dx;
    }
    

    getDx(): i32 {
        return this.dx;
    }
    

    setDy(dy: i32): void {
        this.dy = dy;
    }
    

    getDy(): i32 {
        return this.dy;
    }
}

