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
// package org.allbinary.animation
// import org.allbinary.media.ScaleProperties

@global export interface AnimationInterfaceFactoryInterface extends BasicAnimationInterfaceFactoryInterface {
    

    getInstance1(instanceId: i32): Animation | null;
    

    setInitialScale(scaleProperties: ScaleProperties | null): void;
}

