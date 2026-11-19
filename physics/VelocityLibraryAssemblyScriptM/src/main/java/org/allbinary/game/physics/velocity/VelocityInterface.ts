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
// package org.allbinary.game.physics.velocity

@global export interface VelocityInterface extends BasicVelocityInterface {
    

    getMaxForwardVelocity(): i32;
    

    getMaxReverseVelocity(): i32;
    

    limitMaxXYForwardVelocity(): void;
    

    limitMaxXYReverseVelocity(): void;
    

    limitXYToForwardAndReverseMaxVelocity(): void;
    

    limitMaxXYVelocity(maxVelocity: i32): void;
    

    setMaxForwardVelocity(maxForwardVelocity: i32): void;
    

    setMaxReverseVelocity(maxReverseVelocity: i32): void;
}

