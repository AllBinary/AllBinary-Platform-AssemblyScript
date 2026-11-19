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
// import javax.microedition.lcdui.Image
// import org.allbinary.animation.IndexedAnimation

@global export class IndexedAnimationToImageArrayUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.image.IndexedAnimationToImageArrayUtil";
    }

    jinit_IndexedAnimationToImageArrayUtil_0(): IndexedAnimationToImageArrayUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance3(width: i32, height: i32, sequentialAnimationInterface: IndexedAnimation | null): StaticArray<Image | null> | null {
        let size: i32 = sequentialAnimationInterface!.getAnimationSize(); if (JThrowable.pending !== null) return null;
        let imageArray: StaticArray<Image | null> | null = new StaticArray<Image | null>(size);
        for (let index: i32 = 0; index < size; index++) {
            sequentialAnimationInterface!.setFrame(index); if (JThrowable.pending !== null) return null;
            imageArray![index] = AnimationFrameToImageUtil.getInstance()!.getInstanceWH(width, height, sequentialAnimationInterface); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return imageArray;
    }
}

