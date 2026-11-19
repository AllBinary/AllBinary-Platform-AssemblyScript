// Generated Code Do Not Modify
// package org.allbinary.physics.movement
// import org.allbinary.game.layer.AllBinaryGameLayer
// import org.allbinary.game.physics.velocity.BasicVelocityProperties
// import org.allbinary.logic.math.BasicDecimal
// import org.allbinary.logic.math.MathUtil
// import org.allbinary.logic.math.ScaleFactorFactory

@global export class PreciseConstantVelocityMovement extends BasicConstantVelocityMovement {

    jclassName(): string {
        return "org.allbinary.physics.movement.PreciseConstantVelocityMovement";
    }
    accumulatedX: i32 = 0;
    accumulatedY: i32 = 0;
    accumulatedZ: i32 = 0;
    factorValue: i32 = 0;

    jfields_PreciseConstantVelocityMovement(): void {
    this.accumulatedX = 0;
    this.accumulatedY = 0;
    this.accumulatedZ = 0;
    this.factorValue = ScaleFactorFactory.getInstance()!.DEFAULT_SCALE_VALUE;
    }
    

    jinit_PreciseConstantVelocityMovement_2(basicDecimal: BasicDecimal | null, velocityProperties: BasicVelocityProperties | null): PreciseConstantVelocityMovement {
        super.jinit_BasicConstantVelocityMovement_2(basicDecimal, velocityProperties);
        this.jfields_PreciseConstantVelocityMovement();
        return this;
    }
    

    init(speedBasicDecimal: BasicDecimal | null, angle: i32, otherAngle: i32): void {
    }
    

    process(layer: AllBinaryGameLayer | null): void {
        let mathUtil: MathUtil | null = MathUtil.getInstance(); if (JThrowable.pending !== null) return;
        let velocityProperties: BasicVelocityProperties | null = this.getVelocityProperties(); if (JThrowable.pending !== null) return;
        this.accumulatedX = (<i32>(((<i64>(this.accumulatedX)) + velocityProperties!.getVelocityXBasicDecimalP()!.getUnscaled()))); if (JThrowable.pending !== null) return;
        this.accumulatedY = (<i32>(((<i64>(this.accumulatedY)) + velocityProperties!.getVelocityYBasicDecimalP()!.getUnscaled()))); if (JThrowable.pending !== null) return;
        this.accumulatedZ = (<i32>(((<i64>(this.accumulatedZ)) + velocityProperties!.getVelocityZBasicDecimalP()!.getUnscaled()))); if (JThrowable.pending !== null) return;
        layer!.moveDXYZ(this.accumulatedX / this.factorValue, this.accumulatedY / this.factorValue, this.accumulatedZ / this.factorValue); if (JThrowable.pending !== null) return;
        if (mathUtil!.abs(this.accumulatedX) > this.factorValue) {
            this.accumulatedX = 0;
        } if (JThrowable.pending !== null) return;
        if (mathUtil!.abs(this.accumulatedY) > this.factorValue) {
            this.accumulatedY = 0;
        } if (JThrowable.pending !== null) return;
        if (mathUtil!.abs(this.accumulatedZ) > this.factorValue) {
            this.accumulatedZ = 0;
        } if (JThrowable.pending !== null) return;
    }
}

