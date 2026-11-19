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
// package org.allbinary.image.opengles
// import org.allbinary.image.ImageCache

//OpenGLNoneOtherJavaLibrary
@global export class OpenGLImageCacheFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.image.opengles.OpenGLImageCacheFactory";
    }
    @lazy static jv_IMAGE_CACHE: ImageCache | null = null;
    @lazy static js_IMAGE_CACHE: bool = false;
    static get IMAGE_CACHE(): ImageCache | null {
        if (!OpenGLImageCacheFactory.js_IMAGE_CACHE) {
            OpenGLImageCacheFactory.js_IMAGE_CACHE = true;
            OpenGLImageCacheFactory.jv_IMAGE_CACHE = ImageCache.NULL_IMAGE_CACHE;
        }
        return OpenGLImageCacheFactory.jv_IMAGE_CACHE;
    }
    static set IMAGE_CACHE(value: ImageCache | null) {
        OpenGLImageCacheFactory.js_IMAGE_CACHE = true;
        OpenGLImageCacheFactory.jv_IMAGE_CACHE = value;
    }

    jinit_OpenGLImageCacheFactory_0(): OpenGLImageCacheFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): ImageCache | null {
        return OpenGLImageCacheFactory.IMAGE_CACHE;
    }
    

    static init(): void {
        if (OpenGLImageCacheFactory.IMAGE_CACHE == null) {
        }
    }
}

