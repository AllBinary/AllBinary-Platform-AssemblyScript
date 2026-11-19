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

@global export class XYOscillateVelocityMovement extends BasicConstantVelocityMovement {

    jclassName(): string {
        return "org.allbinary.physics.movement.XYOscillateVelocityMovement";
    }
    oscillateMin: i32 = 0;
    oscillateMax: i32 = 0;
    oscillate: i32 = 0;
    oscillatePositive: bool = false;

    jfields_XYOscillateVelocityMovement(): void {
    
    
    this.oscillate = 0;
    this.oscillatePositive = false;
    }
    

    jinit_XYOscillateVelocityMovement_3(speedBasicDecimal: BasicDecimal | null, oscillateMin: i32, oscillateMax: i32): XYOscillateVelocityMovement {
        super.jinit_BasicConstantVelocityMovement_2(speedBasicDecimal, new VelocityProperties().jinit_VelocityProperties_2((<i32>(speedBasicDecimal!.getUnscaled())), (<i32>(speedBasicDecimal!.getUnscaled()))));
        this.jfields_XYOscillateVelocityMovement();
        this.oscillateMin = oscillateMin;
        this.oscillateMax = oscillateMax;
        return this;
    }
    

    process(layer: AllBinaryGameLayer | null): void {
        super.process(layer); if (JThrowable.pending !== null) return;
        if (this.oscillate < this.oscillateMin) {
            this.oscillatePositive = true;
            this.getVelocityProperties()!.getVelocityYBasicDecimalP()!.addint(3000); if (JThrowable.pending !== null) return;
        } else if (this.oscillate > this.oscillateMax) {
            this.oscillatePositive = false;
            this.getVelocityProperties()!.getVelocityYBasicDecimalP()!.subtractint(3000); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (this.oscillatePositive) {
            this.oscillate++;
            this.getVelocityProperties()!.getVelocityXBasicDecimalP()!.addint(5000); if (JThrowable.pending !== null) return;
        } else {
            this.oscillate--;
            this.getVelocityProperties()!.getVelocityXBasicDecimalP()!.subtractint(5000); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

