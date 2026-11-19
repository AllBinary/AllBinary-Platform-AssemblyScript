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

@global export class CustomGravityConstantVelocityMovement extends BasicConstantVelocityMovement {

    jclassName(): string {
        return "org.allbinary.physics.movement.CustomGravityConstantVelocityMovement";
    }
    customGravity: i32 = 0;
    gravityUtil: GravityUtil | null = null;

    jfields_CustomGravityConstantVelocityMovement(): void {
    
    this.gravityUtil = GravityUtil.getInstance();
    }
    

    jinit_CustomGravityConstantVelocityMovement_2(speedBasicDecimal: BasicDecimal | null, customGravity: i32): CustomGravityConstantVelocityMovement {
        super.jinit_BasicConstantVelocityMovement_2(speedBasicDecimal, new VelocityProperties().jinit_VelocityProperties_2((<i32>(speedBasicDecimal!.getUnscaled())), (<i32>(speedBasicDecimal!.getUnscaled()))));
        this.jfields_CustomGravityConstantVelocityMovement();
        this.customGravity = customGravity;
        return this;
    }
    

    process(layer: AllBinaryGameLayer | null): void {
        super.process(layer); if (JThrowable.pending !== null) return;
        this.gravityUtil!.process(this.getVelocityProperties(), this.customGravity); if (JThrowable.pending !== null) return;
        let velocityProperties: VelocityProperties | null = changetype<VelocityProperties | null>(this.getVelocityProperties()); if (JThrowable.pending !== null) return;
        velocityProperties!.limitMaxYForwardVelocity(); if (JThrowable.pending !== null) return;
    }
}

