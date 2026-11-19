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
// package org.allbinary.physics.movement
// import org.allbinary.game.layer.AllBinaryGameLayer
// import org.allbinary.game.physics.velocity.BasicVelocityProperties
// import org.allbinary.game.physics.velocity.VelocityInterfaceCompositeInterface
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.logic.math.BasicDecimal
// import org.allbinary.logic.math.vector.AxisMathVectorUtil
// import org.allbinary.math.AngleFactory

@global export class BasicConstantVelocityMovement extends Movement implements VelocityInterfaceCompositeInterface {

    jclassName(): string {
        return "org.allbinary.physics.movement.BasicConstantVelocityMovement";
    }
    velocityProperties: BasicVelocityProperties | null = null;
    speedBasicDecimal: BasicDecimal | null = null;
    axisMathVectorUtil: AxisMathVectorUtil | null = null;

    jfields_BasicConstantVelocityMovement(): void {
    
    this.speedBasicDecimal = BasicDecimal.ZERO_BIGDECIMAL;
    this.axisMathVectorUtil = AxisMathVectorUtil.getInstance();
    }
    

    jinit_BasicConstantVelocityMovement_2(basicDecimal: BasicDecimal | null, velocityProperties: BasicVelocityProperties | null): BasicConstantVelocityMovement {
        super.jinit_Movement_0();
        this.jfields_BasicConstantVelocityMovement();
        this.setSpeedBasicDecimal(basicDecimal); if (JThrowable.pending !== null) return this;
        this.velocityProperties = velocityProperties;
        return this;
    }
    

    init(speedBasicDecimal: BasicDecimal | null, angle: i32, otherAngle: i32): void {
        this.speedBasicDecimal = speedBasicDecimal;
        let angleFactory: AngleFactory | null = AngleFactory.getInstance(); if (JThrowable.pending !== null) return;
        this.velocityProperties!.setVelocityWithBigDecimal(speedBasicDecimal, angleFactory!.getAt(angle), angleFactory!.getAt(otherAngle)); if (JThrowable.pending !== null) return;
    }
    

    moveOutsideRadius(layer: AllBinaryLayer | null, radius: i64, angle: i32, otherAngle: i32): void {
        let scaleFactorValue: i32 = this.speedBasicDecimal!.getScaledFactorValue(); if (JThrowable.pending !== null) return;
        let xVector: i32 = (<i32>((this.axisMathVectorUtil!.calculateX(radius, angle) / (<i64>(scaleFactorValue))))); if (JThrowable.pending !== null) return;
        let yVector: i32 = (<i32>((this.axisMathVectorUtil!.calculateY(radius, angle) / (<i64>(scaleFactorValue))))); if (JThrowable.pending !== null) return;
        let zVector: i32 = (<i32>((this.axisMathVectorUtil!.calculateZ(radius, otherAngle) / (<i64>(scaleFactorValue))))); if (JThrowable.pending !== null) return;
        layer!.moveDXYZ(xVector, yVector, zVector); if (JThrowable.pending !== null) return;
    }
    

    process(layer: AllBinaryGameLayer | null): void {
        layer!.moveDXYZ(this.velocityProperties!.getVelocityXBasicDecimalP()!.getScaled(), this.velocityProperties!.getVelocityYBasicDecimalP()!.getScaled(), this.velocityProperties!.getVelocityZBasicDecimalP()!.getScaled()); if (JThrowable.pending !== null) return;
    }
    

    toString(): string | null {
        return JObject.jtoString(this.velocityProperties);
    }
    

    stop(): void {
        this.velocityProperties!.zero(); if (JThrowable.pending !== null) return;
    }
    

    getVelocityProperties(): BasicVelocityProperties | null {
        return this.velocityProperties;
    }
    

    setVelocityProperties(velocityProperties: BasicVelocityProperties | null): void {
        this.velocityProperties = velocityProperties;
    }
    

    setSpeedBasicDecimal(speedBasicDecimal: BasicDecimal | null): void {
        this.speedBasicDecimal = speedBasicDecimal;
    }
    

    getSpeedBasicDecimal(): BasicDecimal | null {
        return this.speedBasicDecimal;
    }
}

