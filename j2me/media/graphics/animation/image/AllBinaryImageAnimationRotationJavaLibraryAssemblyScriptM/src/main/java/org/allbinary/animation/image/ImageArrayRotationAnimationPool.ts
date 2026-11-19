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
// package org.allbinary.animation.image
// import org.allbinary.logic.util.cache.BasicArrayListResetablePool
// import org.allbinary.logic.util.cache.CacheableInterface
// import org.allbinary.logic.util.cache.CacheableInterfaceFactoryInterface
// import org.allbinary.logic.util.cache.PoolInterface

@global export class ImageArrayRotationAnimationPool extends BasicArrayListResetablePool {

    jclassName(): string {
        return "org.allbinary.animation.image.ImageArrayRotationAnimationPool";
    }
    @lazy static jv_IMAGE_ROTATION_ANIMATION_POOL: PoolInterface | null = null;
    @lazy static js_IMAGE_ROTATION_ANIMATION_POOL: bool = false;
    static get IMAGE_ROTATION_ANIMATION_POOL(): PoolInterface | null {
        if (!ImageArrayRotationAnimationPool.js_IMAGE_ROTATION_ANIMATION_POOL) {
            ImageArrayRotationAnimationPool.js_IMAGE_ROTATION_ANIMATION_POOL = true;
            ImageArrayRotationAnimationPool.jv_IMAGE_ROTATION_ANIMATION_POOL = new ImageArrayRotationAnimationPool().jinit_ImageArrayRotationAnimationPool_1(new ImageArrayRotationAnimationCacheableInterfaceFactory().jinit_ImageArrayRotationAnimationCacheableInterfaceFactory_0());
        }
        return ImageArrayRotationAnimationPool.jv_IMAGE_ROTATION_ANIMATION_POOL;
    }
    static set IMAGE_ROTATION_ANIMATION_POOL(value: PoolInterface | null) {
        ImageArrayRotationAnimationPool.js_IMAGE_ROTATION_ANIMATION_POOL = true;
        ImageArrayRotationAnimationPool.jv_IMAGE_ROTATION_ANIMATION_POOL = value;
    }
    

    jinit_ImageArrayRotationAnimationPool_1(cacheableInterfaceFactoryInterface: CacheableInterfaceFactoryInterface | null): ImageArrayRotationAnimationPool {
        super.jinit_BasicArrayListResetablePool_1(cacheableInterfaceFactoryInterface);
        return this;
    }
    

    static getInstance(): PoolInterface | null {
        return ImageArrayRotationAnimationPool.IMAGE_ROTATION_ANIMATION_POOL;
    }
    

    remove(key: Object | null): CacheableInterface | null {
        let cacheableInterface: CacheableInterface | null = super.remove(key); if (JThrowable.pending !== null) return null;
        let allBinaryImageRotationAnimationInfo: ImageArrayRotationAnimationInfo | null = changetype<ImageArrayRotationAnimationInfo | null>(key);
        let imageArrayRotationAnimationCacheable: ImageArrayRotationAnimationCacheable | null = (changetype<ImageArrayRotationAnimationCacheable | null>(cacheableInterface));
        imageArrayRotationAnimationCacheable!.setImageArray(allBinaryImageRotationAnimationInfo!.getImageArray()); if (JThrowable.pending !== null) return null;
        return cacheableInterface;
    }
}

