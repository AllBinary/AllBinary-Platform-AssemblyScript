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
// package org.allbinary.platform.graphics
// import javax.microedition.lcdui.Image
// import javax.microedition.lcdui.NullImage
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory

@global export class PlatformBitmapBase extends JObject {

    jclassName(): string {
        return "org.allbinary.platform.graphics.PlatformBitmapBase";
    }
    @lazy static jv_NULL_PLATFORM_BITMAP_BASE: PlatformBitmapBase | null = null;
    @lazy static js_NULL_PLATFORM_BITMAP_BASE: bool = false;
    static get NULL_PLATFORM_BITMAP_BASE(): PlatformBitmapBase | null {
        if (!PlatformBitmapBase.js_NULL_PLATFORM_BITMAP_BASE) {
            PlatformBitmapBase.js_NULL_PLATFORM_BITMAP_BASE = true;
            PlatformBitmapBase.jv_NULL_PLATFORM_BITMAP_BASE = new PlatformBitmapBase().jinit_PlatformBitmapBase_0();
        }
        return PlatformBitmapBase.jv_NULL_PLATFORM_BITMAP_BASE;
    }
    static set NULL_PLATFORM_BITMAP_BASE(value: PlatformBitmapBase | null) {
        PlatformBitmapBase.js_NULL_PLATFORM_BITMAP_BASE = true;
        PlatformBitmapBase.jv_NULL_PLATFORM_BITMAP_BASE = value;
    }
    alpha: i32 = 0;
    basicColor: BasicColor | null = null;

    jfields_PlatformBitmapBase(): void {
    this.alpha = 255;
    this.basicColor = BasicColorFactory.getInstance()!.NULL_COLOR;
    }

    jinit_PlatformBitmapBase_0(): PlatformBitmapBase {
        super.jinit_JObject_0();
        this.jfields_PlatformBitmapBase();
        return this;
    }
    

    getWidth(): i32 {
        return 0;
    }
    

    getHeight(): i32 {
        return 0;
    }
    

    getImage(): Image | null {
        return NullImage.NULL_IMAGE;
    }
}

