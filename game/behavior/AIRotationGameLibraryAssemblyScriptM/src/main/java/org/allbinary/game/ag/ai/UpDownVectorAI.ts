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
// package org.allbinary.game.ag.ai
// import org.allbinary.game.ai.BasicAI
// import org.allbinary.game.input.GameInput
// import org.allbinary.game.physics.velocity.BasicVelocityProperties
// import org.allbinary.game.physics.velocity.VelocityInterfaceCompositeInterface
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.logic.math.BasicDecimal

@global export class UpDownVectorAI extends BasicAI {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.UpDownVectorAI";
    }
    velocityInterface: BasicVelocityProperties | null = null;
    index: i32 = 0;

    jfields_UpDownVectorAI(): void {
    
    this.index = 0;
    }
    

    jinit_UpDownVectorAI_2(ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): UpDownVectorAI {
        super.jinit_BasicAI_2(ownerLayerInterface, gameInput);
        this.jfields_UpDownVectorAI();
        let velocityInterfaceCompositeInterface: VelocityInterfaceCompositeInterface | null = changetype<VelocityInterfaceCompositeInterface | null>(this.getOwnerLayerInterface()); if (JThrowable.pending !== null) return this;
        this.velocityInterface = velocityInterfaceCompositeInterface!.getVelocityProperties(); if (JThrowable.pending !== null) return this;
        this.velocityInterface!.getVelocityYBasicDecimalP()!.setint(0); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    processAI(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        let y: i32 = this.getOwnerLayerInterface()!.getHeight() * 270; if (JThrowable.pending !== null) return;
        if (this.index < 5) {
            let basicDecimal: BasicDecimal | null = this.velocityInterface!.getVelocityYBasicDecimalP(); if (JThrowable.pending !== null) return;
            basicDecimal!.setint(0); if (JThrowable.pending !== null) return;
            basicDecimal!.addint(y); if (JThrowable.pending !== null) return;
            this.index++;
        } else if (this.index < 10) {
            let basicDecimal: BasicDecimal | null = this.velocityInterface!.getVelocityYBasicDecimalP(); if (JThrowable.pending !== null) return;
            basicDecimal!.setint(0); if (JThrowable.pending !== null) return;
            basicDecimal!.subtractint(y); if (JThrowable.pending !== null) return;
            this.index++;
        } else {
            this.index = 0;
            this.processAI(allBinaryLayerManager); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

