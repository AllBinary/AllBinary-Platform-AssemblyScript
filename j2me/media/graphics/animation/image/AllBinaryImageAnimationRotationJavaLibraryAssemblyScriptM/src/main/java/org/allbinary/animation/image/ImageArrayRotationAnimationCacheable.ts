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
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.util.cache.CacheableInterface

@global export class ImageArrayRotationAnimationCacheable extends AdjustedImageArrayRotationAnimation implements CacheableInterface {

    jclassName(): string {
        return "org.allbinary.animation.image.ImageArrayRotationAnimationCacheable";
    }
    

    jinit_ImageArrayRotationAnimationCacheable_2(anyType: Object | null, animationBehavior: AnimationBehavior | null): ImageArrayRotationAnimationCacheable {
        super.jinit_AdjustedImageArrayRotationAnimation_6((changetype<ImageArrayRotationAnimationInfo | null>(anyType))!.getImageArray(), (changetype<ImageArrayRotationAnimationInfo | null>(anyType))!.getAngleInfoP(), (changetype<ImageArrayRotationAnimationInfo | null>(anyType))!.getTotalAngle(), (changetype<ImageArrayRotationAnimationInfo | null>(anyType))!.getDx(), (changetype<ImageArrayRotationAnimationInfo | null>(anyType))!.getDy(), animationBehavior);
        return this;
    }
    

    getKey(): Object | null {
        return NullUtil.getInstance()!.NULL_OBJECT;
    }
    

    toString(): string | null {
        return StringUtil.getInstance()!.EMPTY_STRING;
    }
}

