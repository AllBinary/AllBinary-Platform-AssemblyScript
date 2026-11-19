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
// import org.allbinary.logic.math.BasicDecimal
// import org.allbinary.time.GameTickTimeDelayHelperFactory
// import org.allbinary.time.TimeDelayHelper

@global export class DelayedConstantVelocityMovement extends BasicConstantVelocityMovement {

    jclassName(): string {
        return "org.allbinary.physics.movement.DelayedConstantVelocityMovement";
    }
    timeDelayHelper: TimeDelayHelper | null = null;

    jfields_DelayedConstantVelocityMovement(): void {
    this.timeDelayHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(60);
    }
    

    jinit_DelayedConstantVelocityMovement_2(basicDecimal: BasicDecimal | null, velocityProperties: BasicVelocityProperties | null): DelayedConstantVelocityMovement {
        super.jinit_BasicConstantVelocityMovement_2(basicDecimal, velocityProperties);
        this.jfields_DelayedConstantVelocityMovement();
        return this;
    }
    

    init(speedBasicDecimal: BasicDecimal | null, angle: i32, otherAngle: i32): void {
    }
    

    process(layer: AllBinaryGameLayer | null): void {
        if (this.timeDelayHelper!.isTime(GameTickTimeDelayHelperFactory.getInstance()!.startTime)) {
            super.process(layer); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

