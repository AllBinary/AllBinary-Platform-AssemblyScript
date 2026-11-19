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
// package org.allbinary.image

@global export class ImageCacheFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.image.ImageCacheFactory";
    }
    @lazy static jv_IMAGE_CACHE: ImageCache | null = null;
    @lazy static js_IMAGE_CACHE: bool = false;
    static get IMAGE_CACHE(): ImageCache | null {
        if (!ImageCacheFactory.js_IMAGE_CACHE) {
            ImageCacheFactory.js_IMAGE_CACHE = true;
            ImageCacheFactory.jv_IMAGE_CACHE = new ImageCache().jinit_ImageCache_0();
        }
        return ImageCacheFactory.jv_IMAGE_CACHE;
    }
    static set IMAGE_CACHE(value: ImageCache | null) {
        ImageCacheFactory.js_IMAGE_CACHE = true;
        ImageCacheFactory.jv_IMAGE_CACHE = value;
    }

    jinit_ImageCacheFactory_0(): ImageCacheFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): ImageCache | null {
        return ImageCacheFactory.IMAGE_CACHE;
    }
    

    static init(): void {
    }
}

