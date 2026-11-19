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
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager

@global export class StopAtEdgeAI extends BasicAI {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.StopAtEdgeAI";
    }
    

    jinit_StopAtEdgeAI_2(ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): StopAtEdgeAI {
        super.jinit_BasicAI_2(ownerLayerInterface, gameInput);
        return this;
    }
    

    processAI(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        let ownerLayerInterface: AllBinaryLayer | null = this.getOwnerLayerInterface(); if (JThrowable.pending !== null) return;
        let velocityInterfaceCompositeInterface: VelocityInterfaceCompositeInterface | null = (changetype<VelocityInterfaceCompositeInterface | null>(ownerLayerInterface));
        let velocityProperties: BasicVelocityProperties | null = velocityInterfaceCompositeInterface!.getVelocityProperties(); if (JThrowable.pending !== null) return;
        let x: i32 = ownerLayerInterface!.getXP(); if (JThrowable.pending !== null) return;
        let y: i32 = ownerLayerInterface!.getYP(); if (JThrowable.pending !== null) return;
        let x2: i32 = ownerLayerInterface!.getX2(); if (JThrowable.pending !== null) return;
        let y2: i32 = ownerLayerInterface!.getY2(); if (JThrowable.pending !== null) return;
        let width: i32 = ownerLayerInterface!.getWidth(); if (JThrowable.pending !== null) return;
        let height: i32 = ownerLayerInterface!.getHeight(); if (JThrowable.pending !== null) return;
        let displayInfo: DisplayInfoSingleton | null = DisplayInfoSingleton.getInstance(); if (JThrowable.pending !== null) return;
        if (x2 + velocityProperties!.getVelocityXBasicDecimalP()!.getScaled() > displayInfo!.getLastWidth()) {
            ownerLayerInterface!.setPosition(displayInfo!.getLastWidth() - width, y, ownerLayerInterface!.getZP()); if (JThrowable.pending !== null) return;
            velocityProperties!.getVelocityYBasicDecimalP()!.setint(0); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (y2 + velocityProperties!.getVelocityYBasicDecimalP()!.getScaled() > displayInfo!.getLastHeight()) {
            ownerLayerInterface!.setPosition(x, displayInfo!.getLastHeight() - height, ownerLayerInterface!.getZP()); if (JThrowable.pending !== null) return;
            velocityProperties!.getVelocityXBasicDecimalP()!.setint(0); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (x + velocityProperties!.getVelocityXBasicDecimalP()!.getScaled() < 0) {
            ownerLayerInterface!.setPosition(0, y, ownerLayerInterface!.getZP()); if (JThrowable.pending !== null) return;
            velocityProperties!.getVelocityYBasicDecimalP()!.setint(0); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (y + velocityProperties!.getVelocityYBasicDecimalP()!.getScaled() < 0) {
            ownerLayerInterface!.setPosition(x, 0, ownerLayerInterface!.getZP()); if (JThrowable.pending !== null) return;
            velocityProperties!.getVelocityXBasicDecimalP()!.setint(0); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

