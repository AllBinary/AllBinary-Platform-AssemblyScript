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
// import org.allbinary.animation.AnimationBehavior
// import org.allbinary.logic.util.cache.CacheableInterface
// import org.allbinary.logic.util.cache.CacheableInterfaceFactoryInterface

@global export class ImageArrayRotationAnimationCacheableInterfaceFactory extends JObject implements CacheableInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.image.ImageArrayRotationAnimationCacheableInterfaceFactory";
    }

    jinit_ImageArrayRotationAnimationCacheableInterfaceFactory_0(): ImageArrayRotationAnimationCacheableInterfaceFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    getInstance1(key: Object | null): CacheableInterface | null {
        return new ImageArrayRotationAnimationCacheable().jinit_ImageArrayRotationAnimationCacheable_2(key, AnimationBehavior.getInstance());
    }
}

