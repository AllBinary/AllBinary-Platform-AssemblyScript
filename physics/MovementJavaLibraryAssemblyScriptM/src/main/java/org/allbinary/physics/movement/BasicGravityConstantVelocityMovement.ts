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
// import org.allbinary.game.physics.acceleration.GravityUtil
// import org.allbinary.game.physics.velocity.VelocityProperties
// import org.allbinary.logic.math.BasicDecimal

@global export class BasicGravityConstantVelocityMovement extends BasicConstantVelocityMovement {

    jclassName(): string {
        return "org.allbinary.physics.movement.BasicGravityConstantVelocityMovement";
    }
    gravityUtil: GravityUtil | null = null;

    jfields_BasicGravityConstantVelocityMovement(): void {
    this.gravityUtil = GravityUtil.getInstance();
    }
    

    jinit_BasicGravityConstantVelocityMovement_1(speedBasicDecimal: BasicDecimal | null): BasicGravityConstantVelocityMovement {
        super.jinit_BasicConstantVelocityMovement_2(speedBasicDecimal, new VelocityProperties().jinit_VelocityProperties_2((<i32>(speedBasicDecimal!.getUnscaled())), (<i32>(speedBasicDecimal!.getUnscaled()))));
        this.jfields_BasicGravityConstantVelocityMovement();
        return this;
    }
    

    process(layer: AllBinaryGameLayer | null): void {
        super.process(layer); if (JThrowable.pending !== null) return;
        this.gravityUtil!.process(this.getVelocityProperties(), this.gravityUtil!.GAME_GRAVITY_VELOCITY); if (JThrowable.pending !== null) return;
    }
}

