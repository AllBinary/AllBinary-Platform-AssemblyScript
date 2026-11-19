/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// package org.allbinary.graphics.threed
// import javax.microedition.lcdui.Font
// import javax.microedition.midlet.MIDlet

//OpenGLNone
@global export class SWTJOGLProcessor extends JObject implements JRunnable {

    jclassName(): string {
        return "org.allbinary.graphics.threed.SWTJOGLProcessor";
    }
    @lazy static jv_instance: SWTJOGLProcessor | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): SWTJOGLProcessor | null {
        if (!SWTJOGLProcessor.js_instance) {
            SWTJOGLProcessor.js_instance = true;
            SWTJOGLProcessor.jv_instance = new SWTJOGLProcessor().jinit_SWTJOGLProcessor_0();
        }
        return SWTJOGLProcessor.jv_instance;
    }
    static set instance(value: SWTJOGLProcessor | null) {
        SWTJOGLProcessor.js_instance = true;
        SWTJOGLProcessor.jv_instance = value;
    }

    jinit_SWTJOGLProcessor_0(): SWTJOGLProcessor {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): SWTJOGLProcessor | null {
        return SWTJOGLProcessor.instance;
    }
    

    init(display: Object | null, comp: Object | null): void {
    }
    

    isHolderCreated(): bool {
        return true;
    }
    

    setRenderer(renderer: Object | null): void {
    }
    

    isJOGL(): bool {
        return false;
    }
    

    createSurface(): void {
    }
    

    onSurfaceCreated(): void {
    }
    

    onSurfaceChangedForEvent(event: Object | null): void {
    }
    

    onSurfaceChanged(): void {
    }
    

    onSurfaceChangedWH(width: i32, height: i32): void {
    }
    

    addListener(): void {
    }
    

    addListeners(midlet: MIDlet | null): void {
    }
    

    run(): void {
    }
    

    clear(): void {
    }
    

    setCustom(width: i32, height: i32, ratio: f32): void {
    }
    

    setRatioProcessor(ratioProcessor: RatioProcessor | null): void {
    }
    

    isPortraitRatioProcessor(): bool {
        return true;
    }
    

    charWidth(font: Font | null, ch: u16): i32 {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return 0; }
        return 0;
    }
    

    charsWidth(font: Font | null, ch: StaticArray<u16> | null, offset: i32, length: i32): i32 {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return 0; }
        return 0;
    }
    

    stringWidth(font: Font | null, str: string | null): i32 {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return 0; }
        return 0;
    }
    

    substringWidth(font: Font | null, str: string | null, offset: i32, len: i32): i32 {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return 0; }
        return 0;
    }
}

