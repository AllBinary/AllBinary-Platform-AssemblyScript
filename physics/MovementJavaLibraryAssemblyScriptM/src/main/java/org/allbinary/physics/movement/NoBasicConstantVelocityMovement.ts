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

@global export class NoBasicConstantVelocityMovement extends BasicConstantVelocityMovement {

    jclassName(): string {
        return "org.allbinary.physics.movement.NoBasicConstantVelocityMovement";
    }
    

    jinit_NoBasicConstantVelocityMovement_0(): NoBasicConstantVelocityMovement {
        super.jinit_BasicConstantVelocityMovement_2(BasicDecimal.ZERO_BIGDECIMAL, new BasicVelocityProperties().jinit_BasicVelocityProperties_0());
        return this;
    }
    

    process(layer: AllBinaryGameLayer | null): void {
    }
}

