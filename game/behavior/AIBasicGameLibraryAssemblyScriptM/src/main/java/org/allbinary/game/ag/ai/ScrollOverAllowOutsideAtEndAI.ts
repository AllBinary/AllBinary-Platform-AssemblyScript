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
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager

@global export class ScrollOverAllowOutsideAtEndAI extends BasicAI {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.ScrollOverAllowOutsideAtEndAI";
    }
    

    jinit_ScrollOverAllowOutsideAtEndAI_2(ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): ScrollOverAllowOutsideAtEndAI {
        super.jinit_BasicAI_2(ownerLayerInterface, gameInput);
        return this;
    }
    

    processAI(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        let ownerLayerInterface: AllBinaryLayer | null = this.getOwnerLayerInterface(); if (JThrowable.pending !== null) return;
        let x: i32 = ownerLayerInterface!.getXP(); if (JThrowable.pending !== null) return;
        let y: i32 = ownerLayerInterface!.getYP(); if (JThrowable.pending !== null) return;
        let width: i32 = ownerLayerInterface!.getWidth(); if (JThrowable.pending !== null) return;
        let height: i32 = ownerLayerInterface!.getHeight(); if (JThrowable.pending !== null) return;
        let displayInfo: DisplayInfoSingleton | null = DisplayInfoSingleton.getInstance(); if (JThrowable.pending !== null) return;
        if (x > displayInfo!.getLastWidth()) {
            ownerLayerInterface!.setPosition(-width, y, ownerLayerInterface!.getZP()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (y > displayInfo!.getLastHeight()) {
            ownerLayerInterface!.setPosition(x, -height, ownerLayerInterface!.getZP()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (x < -width) {
            ownerLayerInterface!.setPosition(displayInfo!.getLastWidth() + width, y, ownerLayerInterface!.getZP()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (y < -height) {
            ownerLayerInterface!.setPosition(x, displayInfo!.getLastHeight() + height, ownerLayerInterface!.getZP()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

