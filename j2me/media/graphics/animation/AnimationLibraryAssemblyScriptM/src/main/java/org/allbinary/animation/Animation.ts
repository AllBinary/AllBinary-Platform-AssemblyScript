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
// package org.allbinary.animation
// import javax.microedition.khronos.opengles.GL
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.color.BasicColorSetUtil
// import org.allbinary.image.opengles.OpenGLSurfaceChangedInterface

@global export class Animation extends JObject implements AnimationInterface, OpenGLSurfaceChangedInterface {

    jclassName(): string {
        return "org.allbinary.animation.Animation";
    }
    basicSetColorUtil: BasicColorSetUtil | null = null;
    basicColor: BasicColor | null = null;
    colorP: i32 = 0;
    changeBasicColorP: BasicColor | null = null;
    changeColorP: i32 = 0;
    alphaP: i32 = 0;

    jfields_Animation(): void {
    this.basicSetColorUtil = BasicColorSetUtil.getInstance();
    this.basicColor = BasicColorFactory.getInstance()!.WHITE;
    this.colorP = 0;
    this.changeBasicColorP = BasicColorFactory.getInstance()!.NULL_COLOR;
    this.changeColorP = 0;
    this.alphaP = 0;
    }
    

    jinit_Animation_0(): Animation {
        super.jinit_JObject_0();
        this.jfields_Animation();
        return this;
    }
    

    setAlpha(alpha: i32): void {
        this.alphaP = alpha;
    }
    

    nextFrame(): void {
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        this.basicSetColorUtil!.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor()); if (JThrowable.pending !== null) return;
    }
    

    paintThreedXYZ(graphics: Graphics | null, x: i32, y: i32, z: i32): void {
    }
    

    isThreed(): bool {
        return false;
    }
    

    getBasicColorP(): BasicColor | null {
        return this.basicColor;
    }
    

    setBasicColorP(basicColor: BasicColor | null): void {
        this.basicColor = basicColor;
        this.colorP = this.basicColor!.intValue(); if (JThrowable.pending !== null) return;
    }
    

    setBackgroundBasicColorP(basicColor: BasicColor | null): void {
    }
    

    getChangeBasicColor(): BasicColor | null {
        return this.changeBasicColorP;
    }
    

    changeBasicColor(basicColor: BasicColor | null): void {
        this.changeBasicColorP = basicColor;
        this.changeColorP = this.changeBasicColorP!.intValue(); if (JThrowable.pending !== null) return;
    }
    

    getChangeColor(): i32 {
        return this.changeColorP;
    }
    

    getColor(): i32 {
        return this.colorP;
    }
    

    setScale(scaleX: f32, scaleY: f32): void {
    }
    

    setMaxScale(maxScaleX: f32, maxScaleY: f32): void {
    }
    

    set(gl: GL | null): void {
    }
    

    setDx(dx: i32): void {
    }
    

    getDx(): i32 {
        return 0;
    }
    

    setDy(dy: i32): void {
    }
    

    getDy(): i32 {
        return 0;
    }
}

