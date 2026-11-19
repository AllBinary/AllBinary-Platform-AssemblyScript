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
// package org.allbinary.graphics.color

@global export class BasicColorUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.color.BasicColorUtil";
    }
    @lazy static jv_instance: BasicColorUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): BasicColorUtil | null {
        if (!BasicColorUtil.js_instance) {
            BasicColorUtil.js_instance = true;
            BasicColorUtil.jv_instance = new BasicColorUtil().jinit_BasicColorUtil_0();
        }
        return BasicColorUtil.jv_instance;
    }
    static set instance(value: BasicColorUtil | null) {
        BasicColorUtil.js_instance = true;
        BasicColorUtil.jv_instance = value;
    }
    ZERO_ARRAY: StaticArray<BasicColor | null> | null = null;
    ALPHA: i32 = 0;
    isAlpha: bool = false;
    ffOpaque: bool = false;

    jfields_BasicColorUtil(): void {
    this.ZERO_ARRAY = new StaticArray<BasicColor | null>(0);
    this.ALPHA = (<i32><u32>0xFF000000);
    this.isAlpha = true;
    this.ffOpaque = true;
    }

    jinit_BasicColorUtil_0(): BasicColorUtil {
        super.jinit_JObject_0();
        this.jfields_BasicColorUtil();
        return this;
    }
    

    static getInstance(): BasicColorUtil | null {
        return BasicColorUtil.instance;
    }
    

    getRGB(red: i32, green: i32, blue: i32): i32 {
        let value: i32 = 0;
        if (this.isAlpha) {
            if (this.ffOpaque) {
                value = this.ALPHA;
            }
        }
        value = (red << 16) | value;
        value = (green << 8) | value;
        value = blue | value;
        return value;
    }
    

    getARGB(alphaValue: i32, r: i32, g: i32, b: i32): i32 {
        return ((alphaValue << 24) & this.ALPHA) + ((r << 16) & 0x00FF0000) + ((g << 8) & 0x0000FF00) + (b & 0x000000FF);
    }
    

    get(alphaValue: i32, color: i32): i32 {
        return ((alphaValue << 24) & this.ALPHA) + color;
    }
    

    invert(color: i32): i32 {
        return (0xFFFFFF - color) | this.ALPHA;
    }
}

