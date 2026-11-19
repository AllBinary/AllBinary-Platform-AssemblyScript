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
// package javax.microedition.lcdui

//PlatformNullImageJavaLibrary
@global export class PreLoadPlatformImage extends PlatformImage {

    jclassName(): string {
        return "javax.microedition.lcdui.PreLoadPlatformImage";
    }
    @lazy static jv_instance: PreLoadPlatformImage | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): PreLoadPlatformImage | null {
        if (!PreLoadPlatformImage.js_instance) {
            PreLoadPlatformImage.js_instance = true;
            PreLoadPlatformImage.jv_instance = new PreLoadPlatformImage().jinit_PreLoadPlatformImage_0();
        }
        return PreLoadPlatformImage.jv_instance;
    }
    static set instance(value: PreLoadPlatformImage | null) {
        PreLoadPlatformImage.js_instance = true;
        PreLoadPlatformImage.jv_instance = value;
    }

    jinit_PreLoadPlatformImage_0(): PreLoadPlatformImage {
        super.jinit_PlatformImage_0();
        return this;
    }
    

    static getInstance(): PreLoadPlatformImage | null {
        return PreLoadPlatformImage.instance;
    }
}

