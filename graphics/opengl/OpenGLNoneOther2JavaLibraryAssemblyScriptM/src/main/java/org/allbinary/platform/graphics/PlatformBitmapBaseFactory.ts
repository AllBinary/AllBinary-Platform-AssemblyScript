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

@global export class PlatformBitmapBaseFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.platform.graphics.PlatformBitmapBaseFactory";
    }
    @lazy static jv_NULL_PLATFORM_BITMAP_BASE_FACTORY: PlatformBitmapBaseFactory | null = null;
    @lazy static js_NULL_PLATFORM_BITMAP_BASE_FACTORY: bool = false;
    static get NULL_PLATFORM_BITMAP_BASE_FACTORY(): PlatformBitmapBaseFactory | null {
        if (!PlatformBitmapBaseFactory.js_NULL_PLATFORM_BITMAP_BASE_FACTORY) {
            PlatformBitmapBaseFactory.js_NULL_PLATFORM_BITMAP_BASE_FACTORY = true;
            PlatformBitmapBaseFactory.jv_NULL_PLATFORM_BITMAP_BASE_FACTORY = new PlatformBitmapBaseFactory().jinit_PlatformBitmapBaseFactory_0();
        }
        return PlatformBitmapBaseFactory.jv_NULL_PLATFORM_BITMAP_BASE_FACTORY;
    }
    static set NULL_PLATFORM_BITMAP_BASE_FACTORY(value: PlatformBitmapBaseFactory | null) {
        PlatformBitmapBaseFactory.js_NULL_PLATFORM_BITMAP_BASE_FACTORY = true;
        PlatformBitmapBaseFactory.jv_NULL_PLATFORM_BITMAP_BASE_FACTORY = value;
    }

    jinit_PlatformBitmapBaseFactory_0(): PlatformBitmapBaseFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    createBitmap(image: Image | null): PlatformBitmapBase | null {
        return PlatformBitmapBase.NULL_PLATFORM_BITMAP_BASE;
    }
}

