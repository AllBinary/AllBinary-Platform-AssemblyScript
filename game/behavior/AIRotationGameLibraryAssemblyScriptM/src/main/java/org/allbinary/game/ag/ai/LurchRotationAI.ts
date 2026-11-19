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
// import org.allbinary.animation.IndexedAnimation
// import org.allbinary.animation.RotationAnimationInterface
// import org.allbinary.animation.RotationAnimationInterfaceCompositeInterface
// import org.allbinary.game.ag.ai.tactical.LurchAI
// import org.allbinary.game.input.GameInput
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.math.AngleIncrementInfo

@global export class LurchRotationAI extends LurchAI {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.LurchRotationAI";
    }
    rotationAnimationInterface: IndexedAnimation | null = null;

    jfields_LurchRotationAI(): void {
    
    }
    

    jinit_LurchRotationAI_2(ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): LurchRotationAI {
        super.jinit_LurchAI_2(ownerLayerInterface, gameInput);
        this.jfields_LurchRotationAI();
        let rotationAnimationInterfaceCompositeInterface: RotationAnimationInterfaceCompositeInterface | null = changetype<RotationAnimationInterfaceCompositeInterface | null>(this.getOwnerLayerInterface()); if (JThrowable.pending !== null) return this;
        this.rotationAnimationInterface = rotationAnimationInterfaceCompositeInterface!.getRotationAnimationInterface(); if (JThrowable.pending !== null) return this;
        this.update(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    reverse(): void {
        super.reverse(); if (JThrowable.pending !== null) return;
        this.update(); if (JThrowable.pending !== null) return;
    }
    

    update(): void {
        if (this.currentRelativeAngle == 0) {
            let rotationAnimationInterface: RotationAnimationInterface | null = changetype<RotationAnimationInterface | null>(this.rotationAnimationInterface);
            let angleIncrementInfo: AngleIncrementInfo | null = rotationAnimationInterface!.getAngleInfoP()!.getAngleIncrementInfo(); if (JThrowable.pending !== null) return;
            let rotationAnimationInterfaceCompositeInterface: RotationAnimationInterfaceCompositeInterface | null = changetype<RotationAnimationInterfaceCompositeInterface | null>(this.getOwnerLayerInterface()); if (JThrowable.pending !== null) return;
            rotationAnimationInterfaceCompositeInterface!.setFrame(angleIncrementInfo!.RIGHT_FRAME!.intValue()); if (JThrowable.pending !== null) return;
        } else if (this.currentRelativeAngle == 180) {
            let rotationAnimationInterface: RotationAnimationInterface | null = changetype<RotationAnimationInterface | null>(this.rotationAnimationInterface);
            let angleIncrementInfo: AngleIncrementInfo | null = rotationAnimationInterface!.getAngleInfoP()!.getAngleIncrementInfo(); if (JThrowable.pending !== null) return;
            let rotationAnimationInterfaceCompositeInterface: RotationAnimationInterfaceCompositeInterface | null = changetype<RotationAnimationInterfaceCompositeInterface | null>(this.getOwnerLayerInterface()); if (JThrowable.pending !== null) return;
            rotationAnimationInterfaceCompositeInterface!.setFrame(angleIncrementInfo!.LEFT_FRAME!.intValue()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

