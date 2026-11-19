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
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.logic.math.BasicDecimal
// import org.allbinary.logic.math.vector.AxisMathVectorUtil
// import org.allbinary.math.AngleFactory

@global export class ConstantVelocityNotifyViewChangeMovement extends Movement {

    jclassName(): string {
        return "org.allbinary.physics.movement.ConstantVelocityNotifyViewChangeMovement";
    }
    basicVelocityProperties: BasicVelocityProperties | null = null;
    speedBasicDecimal: BasicDecimal | null = null;
    axisMathVectorUtil: AxisMathVectorUtil | null = null;

    jfields_ConstantVelocityNotifyViewChangeMovement(): void {
    
    
    this.axisMathVectorUtil = AxisMathVectorUtil.getInstance();
    }
    

    jinit_ConstantVelocityNotifyViewChangeMovement_0(): ConstantVelocityNotifyViewChangeMovement {
        super.jinit_Movement_0();
        this.jfields_ConstantVelocityNotifyViewChangeMovement();
        this.speedBasicDecimal = BasicDecimal.ZERO_BIGDECIMAL;
        this.basicVelocityProperties = new BasicVelocityProperties().jinit_BasicVelocityProperties_0(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    init(speedBasicDecimal: BasicDecimal | null, angle: i32, otherAngle: i32): void {
        this.speedBasicDecimal = speedBasicDecimal;
        let angleFactory: AngleFactory | null = AngleFactory.getInstance(); if (JThrowable.pending !== null) return;
        this.basicVelocityProperties!.setVelocityWithBigDecimal(speedBasicDecimal, angleFactory!.getAt(angle), angleFactory!.getAt(otherAngle)); if (JThrowable.pending !== null) return;
    }
    

    moveOutsideRadius(layer: AllBinaryLayer | null, radius: i64, angle: i32, otherAngle: i32): void {
        let scaleFactorValue: i32 = this.speedBasicDecimal!.getScaledFactorValue(); if (JThrowable.pending !== null) return;
        let xVector: i32 = (<i32>((this.axisMathVectorUtil!.calculateX(radius, angle) / (<i64>(scaleFactorValue))))); if (JThrowable.pending !== null) return;
        let yVector: i32 = (<i32>((this.axisMathVectorUtil!.calculateY(radius, angle) / (<i64>(scaleFactorValue))))); if (JThrowable.pending !== null) return;
        let zVector: i32 = (<i32>((this.axisMathVectorUtil!.calculateZ(radius, otherAngle) / (<i64>(scaleFactorValue))))); if (JThrowable.pending !== null) return;
        layer!.moveDXYZ(xVector, yVector, zVector); if (JThrowable.pending !== null) return;
    }
    

    process(layer: AllBinaryGameLayer | null): void {
        let x: i32 = this.basicVelocityProperties!.getVelocityXBasicDecimalP()!.getScaled(); if (JThrowable.pending !== null) return;
        let y: i32 = this.basicVelocityProperties!.getVelocityYBasicDecimalP()!.getScaled(); if (JThrowable.pending !== null) return;
        let z: i32 = this.basicVelocityProperties!.getVelocityZBasicDecimalP()!.getScaled(); if (JThrowable.pending !== null) return;
        layer!.moveDXYZ(x, y, z); if (JThrowable.pending !== null) return;
        if (x != 0 || y != 0 || z != 0) {
            layer!.onViewPositionChangeEvent(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    stop(): void {
        this.basicVelocityProperties!.zero(); if (JThrowable.pending !== null) return;
    }
}

