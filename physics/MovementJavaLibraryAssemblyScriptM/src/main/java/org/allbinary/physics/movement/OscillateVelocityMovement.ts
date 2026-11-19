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
// import org.allbinary.game.physics.velocity.VelocityProperties
// import org.allbinary.logic.math.BasicDecimal

@global export class OscillateVelocityMovement extends BasicConstantVelocityMovement {

    jclassName(): string {
        return "org.allbinary.physics.movement.OscillateVelocityMovement";
    }
    oscillateMin: i32 = 0;
    oscillateMax: i32 = 0;
    oscillate: i32 = 0;
    oscillatePositive: bool = false;

    jfields_OscillateVelocityMovement(): void {
    
    
    this.oscillate = 0;
    this.oscillatePositive = false;
    }
    

    jinit_OscillateVelocityMovement_3(speedBasicDecimal: BasicDecimal | null, oscillateMin: i32, oscillateMax: i32): OscillateVelocityMovement {
        super.jinit_BasicConstantVelocityMovement_2(speedBasicDecimal, new VelocityProperties().jinit_VelocityProperties_2((<i32>(speedBasicDecimal!.getUnscaled())), (<i32>(speedBasicDecimal!.getUnscaled()))));
        this.jfields_OscillateVelocityMovement();
        this.oscillateMin = oscillateMin;
        this.oscillateMax = oscillateMax;
        return this;
    }
    

    process(layer: AllBinaryGameLayer | null): void {
        super.process(layer); if (JThrowable.pending !== null) return;
        if (this.oscillate < this.oscillateMin) {
            this.oscillatePositive = true;
        } else if (this.oscillate > this.oscillateMax) {
            this.oscillatePositive = false;
        }
        if (this.oscillatePositive) {
            this.oscillate++;
            this.getVelocityProperties()!.getVelocityXBasicDecimalP()!.addint(2000); if (JThrowable.pending !== null) return;
        } else {
            this.oscillate--;
            this.getVelocityProperties()!.getVelocityXBasicDecimalP()!.subtractint(2000); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

