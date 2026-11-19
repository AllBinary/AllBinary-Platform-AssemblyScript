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
// package org.allbinary.game.ag.ai.tactical
// import javax.microedition.lcdui.Canvas
// import org.allbinary.game.ai.BasicAI
// import org.allbinary.game.input.GameInput
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager

@global export class LurchAI extends BasicAI {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.tactical.LurchAI";
    }
    currentRelativeAngle: i32 = 0;
    currentSpeed: i32 = 0;

    jfields_LurchAI(): void {
    this.currentRelativeAngle = 0;
    this.currentSpeed = 0;
    }
    

    jinit_LurchAI_2(ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): LurchAI {
        super.jinit_BasicAI_2(ownerLayerInterface, gameInput);
        this.jfields_LurchAI();
        return this;
    }
    

    processAI(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        if (this.currentSpeed == -1) {
            this.currentSpeed = 5;
        } else {
            this.currentSpeed = -1;
        }
        let ownerLayerInterface: AllBinaryLayer | null = this.getOwnerLayerInterface(); if (JThrowable.pending !== null) return;
        let x: i32 = ownerLayerInterface!.getXP(); if (JThrowable.pending !== null) return;
        if (ownerLayerInterface!.getXP() - this.currentSpeed <= 0) {
            this.reverse(); if (JThrowable.pending !== null) return;
            this.drop(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (ownerLayerInterface!.getX2() + this.currentSpeed > DisplayInfoSingleton.getInstance()!.getLastWidth()) {
            this.reverse(); if (JThrowable.pending !== null) return;
            this.accelerate(); if (JThrowable.pending !== null) return;
            this.drop(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (this.currentRelativeAngle == 0) {
            x += this.currentSpeed;
        } else if (this.currentRelativeAngle == 180) {
            x -= this.currentSpeed;
        }
        ownerLayerInterface!.setPosition(x, ownerLayerInterface!.getYP(), ownerLayerInterface!.getZP()); if (JThrowable.pending !== null) return;
        if (this.currentRelativeAngle == 0) {
            super.processKeyAI(Canvas.KEY_NUM0); if (JThrowable.pending !== null) return;
        } else if (this.currentRelativeAngle == 180) {
            super.processKeyAI(Canvas.KEY_POUND); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    reverse(): void {
        if (this.currentRelativeAngle == 180) {
            this.currentRelativeAngle = 0;
        } else if (this.currentRelativeAngle == 0) {
            this.currentRelativeAngle = 180;
        }
    }
    

    accelerate(): void {
        if (this.currentSpeed < 20) {
            this.currentSpeed++;
        }
    }
    

    drop(): void {
        let ownerLayerInterface: AllBinaryLayer | null = this.getOwnerLayerInterface(); if (JThrowable.pending !== null) return;
        let y: i32 = ownerLayerInterface!.getYP(); if (JThrowable.pending !== null) return;
        if (ownerLayerInterface!.getY2() + ownerLayerInterface!.getHeight() > DisplayInfoSingleton.getInstance()!.getLastHeight()) {
            y = 0;
        } else {
            y += ownerLayerInterface!.getHeight() + 1; if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        ownerLayerInterface!.setPosition(ownerLayerInterface!.getXP(), y, ownerLayerInterface!.getZP()); if (JThrowable.pending !== null) return;
    }
}

