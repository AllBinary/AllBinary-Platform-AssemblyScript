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

@global export class SimpleGravityVelocityMovement extends BasicConstantVelocityMovement {

    jclassName(): string {
        return "org.allbinary.physics.movement.SimpleGravityVelocityMovement";
    }
    gravityUtil: GravityUtil | null = null;

    jfields_SimpleGravityVelocityMovement(): void {
    this.gravityUtil = GravityUtil.getInstance();
    }
    

    jinit_SimpleGravityVelocityMovement_1(speedBasicDecimal: BasicDecimal | null): SimpleGravityVelocityMovement {
        super.jinit_BasicConstantVelocityMovement_2(speedBasicDecimal, new VelocityProperties().jinit_VelocityProperties_2((<i32>(speedBasicDecimal!.getUnscaled())), (<i32>(speedBasicDecimal!.getUnscaled()))));
        this.jfields_SimpleGravityVelocityMovement();
        return this;
    }
    

    process(layer: AllBinaryGameLayer | null): void {
        this.gravityUtil!.process(this.getVelocityProperties(), this.gravityUtil!.GAME_GRAVITY_VELOCITY); if (JThrowable.pending !== null) return;
        super.process(layer); if (JThrowable.pending !== null) return;
    }
}

