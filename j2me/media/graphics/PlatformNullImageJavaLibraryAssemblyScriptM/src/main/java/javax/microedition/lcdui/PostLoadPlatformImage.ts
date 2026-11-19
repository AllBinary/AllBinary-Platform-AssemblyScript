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
@global export class PostLoadPlatformImage extends PlatformImage {

    jclassName(): string {
        return "javax.microedition.lcdui.PostLoadPlatformImage";
    }
    @lazy static jv_instance: PostLoadPlatformImage | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): PostLoadPlatformImage | null {
        if (!PostLoadPlatformImage.js_instance) {
            PostLoadPlatformImage.js_instance = true;
            PostLoadPlatformImage.jv_instance = new PostLoadPlatformImage().jinit_PostLoadPlatformImage_0();
        }
        return PostLoadPlatformImage.jv_instance;
    }
    static set instance(value: PostLoadPlatformImage | null) {
        PostLoadPlatformImage.js_instance = true;
        PostLoadPlatformImage.jv_instance = value;
    }

    jinit_PostLoadPlatformImage_0(): PostLoadPlatformImage {
        super.jinit_PlatformImage_0();
        return this;
    }
    

    static getInstance(): PostLoadPlatformImage | null {
        return PostLoadPlatformImage.instance;
    }
}

