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
// package org.allbinary.platform.opengles
// import javax.microedition.khronos.opengles.GL10
// import javax.microedition.lcdui.Image
// import org.allbinary.string.CommonStrings

@global export class PlatformTextureBaseFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.platform.opengles.PlatformTextureBaseFactory";
    }
    @lazy static jv_NULL_PLATFORM_TEXTURE_BASE_FACTORY: PlatformTextureBaseFactory | null = null;
    @lazy static js_NULL_PLATFORM_TEXTURE_BASE_FACTORY: bool = false;
    static get NULL_PLATFORM_TEXTURE_BASE_FACTORY(): PlatformTextureBaseFactory | null {
        if (!PlatformTextureBaseFactory.js_NULL_PLATFORM_TEXTURE_BASE_FACTORY) {
            PlatformTextureBaseFactory.js_NULL_PLATFORM_TEXTURE_BASE_FACTORY = true;
            PlatformTextureBaseFactory.jv_NULL_PLATFORM_TEXTURE_BASE_FACTORY = new PlatformTextureBaseFactory().jinit_PlatformTextureBaseFactory_0();
        }
        return PlatformTextureBaseFactory.jv_NULL_PLATFORM_TEXTURE_BASE_FACTORY;
    }
    static set NULL_PLATFORM_TEXTURE_BASE_FACTORY(value: PlatformTextureBaseFactory | null) {
        PlatformTextureBaseFactory.js_NULL_PLATFORM_TEXTURE_BASE_FACTORY = true;
        PlatformTextureBaseFactory.jv_NULL_PLATFORM_TEXTURE_BASE_FACTORY = value;
    }
    commonStrings: CommonStrings | null = null;

    jfields_PlatformTextureBaseFactory(): void {
    this.commonStrings = CommonStrings.getInstance();
    }

    jinit_PlatformTextureBaseFactory_0(): PlatformTextureBaseFactory {
        super.jinit_JObject_0();
        this.jfields_PlatformTextureBaseFactory();
        return this;
    }
    

    load(gl: GL10 | null, target: i32, level: i32, image: Image | null, border: i32, flip: bool): void {
    }
}

