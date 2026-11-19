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

@global export class ScrollOverAtHalfAI extends BasicAI {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.ScrollOverAtHalfAI";
    }
    

    jinit_ScrollOverAtHalfAI_2(ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): ScrollOverAtHalfAI {
        super.jinit_BasicAI_2(ownerLayerInterface, gameInput);
        return this;
    }
    

    processAI(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        let ownerLayerInterface: AllBinaryLayer | null = this.getOwnerLayerInterface(); if (JThrowable.pending !== null) return;
        let x: i32 = ownerLayerInterface!.getXP(); if (JThrowable.pending !== null) return;
        let y: i32 = ownerLayerInterface!.getYP(); if (JThrowable.pending !== null) return;
        let halfWidth: i32 = ownerLayerInterface!.getHalfWidth(); if (JThrowable.pending !== null) return;
        let halfHeight: i32 = ownerLayerInterface!.getHalfHeight(); if (JThrowable.pending !== null) return;
        let displayInfo: DisplayInfoSingleton | null = DisplayInfoSingleton.getInstance(); if (JThrowable.pending !== null) return;
        if (x > displayInfo!.getLastWidth() - halfWidth) {
            ownerLayerInterface!.setPosition(halfWidth + 1, y, ownerLayerInterface!.getZP()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (y > displayInfo!.getLastHeight() - halfHeight) {
            ownerLayerInterface!.setPosition(x, halfHeight + 1, ownerLayerInterface!.getZP()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (x < -halfWidth) {
            ownerLayerInterface!.setPosition(displayInfo!.getLastWidth() - halfWidth, y, ownerLayerInterface!.getZP()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (y < -halfHeight) {
            ownerLayerInterface!.setPosition(x, displayInfo!.getLastHeight() - halfHeight, ownerLayerInterface!.getZP()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

