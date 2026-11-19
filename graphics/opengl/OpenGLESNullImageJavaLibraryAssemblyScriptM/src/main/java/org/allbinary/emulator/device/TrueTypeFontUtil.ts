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
// package org.allbinary.emulator.device
// import javax.microedition.khronos.opengles.GL10
// import javax.microedition.lcdui.Image
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.image.opengles.OpenGLESImage

@global export class TrueTypeFontUtil extends TrueTypeFontUtilBase {

    jclassName(): string {
        return "org.allbinary.emulator.device.TrueTypeFontUtil";
    }
    @lazy static jv_instance: TrueTypeFontUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TrueTypeFontUtil | null {
        if (!TrueTypeFontUtil.js_instance) {
            TrueTypeFontUtil.js_instance = true;
            TrueTypeFontUtil.jv_instance = new TrueTypeFontUtil().jinit_TrueTypeFontUtil_0();
        }
        return TrueTypeFontUtil.jv_instance;
    }
    static set instance(value: TrueTypeFontUtil | null) {
        TrueTypeFontUtil.js_instance = true;
        TrueTypeFontUtil.jv_instance = value;
    }
    fontImage: OpenGLESImage | null = null;

    jfields_TrueTypeFontUtil(): void {
    this.fontImage = OpenGLESImage.NULL_OPENGL_IMAGE;
    }
    

    static getInstance(): TrueTypeFontUtil | null {
        return TrueTypeFontUtil.instance;
    }
    

    jinit_TrueTypeFontUtil_0(): TrueTypeFontUtil {
        super.jinit_TrueTypeFontUtilBase_1(1);
        this.jfields_TrueTypeFontUtil();
        return this;
    }
    

    getAsTextureSize(textureSize: i32): i32 {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return 0; }
        return 0;
    }
    

    getCellSize(cellSize: i32): i32 {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return 0; }
        return 0;
    }
    

    getFontBitmap(filename: string | null, fontSize: i32, cellSize: i32, basicColor: BasicColor | null): Image | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    saveFontAtlasAsFile(): void {
    }
    

    getFontBitmapGL(gl: GL10 | null, filename: string | null, cellSize: i32, basicColor: BasicColor | null): Image | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
    

    getFontWidths(filename: string | null, fontSize: i32): StaticArray<i32> | null {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return null; }
        return null;
    }
}

