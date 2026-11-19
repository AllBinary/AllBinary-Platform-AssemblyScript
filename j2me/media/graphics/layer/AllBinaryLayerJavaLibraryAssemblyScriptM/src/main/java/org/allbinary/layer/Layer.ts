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
// package org.allbinary.layer
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.displayable.CanvasStrings
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonStrings

@global export class Layer extends JObject {

    jclassName(): string {
        return "org.allbinary.layer.Layer";
    }
    @lazy static jv_ID: JInteger | null = null;
    @lazy static js_ID: bool = false;
    static get ID(): JInteger | null {
        if (!Layer.js_ID) {
            Layer.js_ID = true;
            Layer.jv_ID = SmallIntegerSingletonFactory.getInstance()!.getAt(0);
        }
        return Layer.jv_ID;
    }
    static set ID(value: JInteger | null) {
        Layer.js_ID = true;
        Layer.jv_ID = value;
    }
    logUtil: LogUtil | null = null;
    x: i32 = 0;
    y: i32 = 0;
    z: i32 = 0;
    width: i32 = 0;
    height: i32 = 0;
    visible: bool = false;

    jfields_Layer(): void {
    this.logUtil = LogUtil.getInstance();
    this.x = 0;
    this.y = 0;
    this.z = 3;
    this.width = 0;
    this.height = 0;
    this.visible = true;
    }
    

    jinit_Layer_2(width: i32, height: i32): Layer {
        super.jinit_JObject_0();
        this.jfields_Layer();
        this.setLayerWidth(width); if (JThrowable.pending !== null) return this;
        this.setLayerHeight(height); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    setPosition(x: i32, y: i32, z: i32): void {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    

    moveDXY(dx: i32, dy: i32): void {
        this.x += dx;
        this.y += dy;
    }
    

    moveDXYZ(dx: i32, dy: i32, dz: i32): void {
        this.x += dx;
        this.y += dy;
        this.z += dz;
    }
    

    getXP(): i32 {
        return this.x;
    }
    

    getYP(): i32 {
        return this.y;
    }
    

    getZP(): i32 {
        return this.z;
    }
    

    getWidth(): i32 {
        return this.width;
    }
    

    getHeight(): i32 {
        return this.height;
    }
    

    getDepth(): i64 {
        return (<i64>0);
    }
    

    setVisible(visible: bool): void {
        this.visible = visible;
    }
    

    isVisible(): bool {
        return this.visible;
    }
    

    paint(graphics: Graphics | null): void {
        let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
        let canvasStrings: CanvasStrings | null = CanvasStrings.getInstance(); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(commonStrings!.NOT_IMPLEMENTED, this, canvasStrings!.PAINT); if (JThrowable.pending !== null) return;
    }
    

    setLayerWidth(width: i32): void {
        if (width < 0) {
            { JThrowable.raise(new JIllegalArgumentException().jinit_JIllegalArgumentException_0()); return; }
        } if (JThrowable.pending !== null) return;
        this.width = width;
    }
    

    setLayerHeight(height: i32): void {
        if (height < 0) {
            { JThrowable.raise(new JIllegalArgumentException().jinit_JIllegalArgumentException_0()); return; }
        } if (JThrowable.pending !== null) return;
        this.height = height;
    }
    

    toStringAppend(stringBuffer: StringMaker | null): void {
    }
}

