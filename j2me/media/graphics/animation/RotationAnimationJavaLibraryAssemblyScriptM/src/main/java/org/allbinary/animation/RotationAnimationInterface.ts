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
// import org.allbinary.direction.DirectionalInterface
// import org.allbinary.math.AngleInfo

@global export interface RotationAnimationInterface extends IndexedAnimationInterface /* Java also extends DirectionalInterface */ {
    

    getAngleInfoP(): AngleInfo | null;
    

    nextRotation(): void;
    

    previousRotation(): void;

    setFrameByDirection(p0: Direction | null): void;

    setFrameToAngle(p0: Angle | null): void;

    adjustFrameToAngle(p0: Angle | null): void;

    adjustFrame(p0: i16): void;
}

