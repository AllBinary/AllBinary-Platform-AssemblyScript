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
// import org.allbinary.direction.Direction
// import org.allbinary.logic.math.BasicDecimal
// import org.allbinary.math.Angle

@global export interface BasicVelocityInterface {
    

    getVelocityXBasicDecimalP(): BasicDecimal | null;
    

    getVelocityYBasicDecimalP(): BasicDecimal | null;
    

    zero(): void;
    

    setVelocityWithBigDecimalAndDirection(magnitudeBasicDecimal: BasicDecimal | null, direction: Direction | null, otherDirection: Direction | null): void;
    

    addVelocityWithBigDecimalAndDirection(magnitudeBasicDecimal: BasicDecimal | null, direction: Direction | null, otherDirection: Direction | null): void;
    

    setVelocityWithDirection(magnitude: i64, direction: Direction | null, otherDirection: Direction | null): void;
    

    addVelocityWithDirection(magnitude: i64, direction: Direction | null, otherDirection: Direction | null): void;
    

    setVelocityWithBigDecimal(magnitudeBasicDecimal: BasicDecimal | null, angle: Angle | null, otherAngle: Angle | null): void;
    

    addVelocityWithBigDecimal(magnitudeBasicDecimal: BasicDecimal | null, angle: Angle | null, otherAngle: Angle | null): void;
    

    setVelocity(magnitude: i64, angle: Angle | null, otherAngle: Angle | null): void;
    

    addVelocity(magnitude: i64, angle: Angle | null, otherAngle: Angle | null): void;
    

    addVelocityi(magnitude: i64, angle: i32, otherAngle: i32): void;
}

