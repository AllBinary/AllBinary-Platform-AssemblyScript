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
// import javax.microedition.lcdui.Canvas
// import org.allbinary.ai.ArtificialIntelligence
// import org.allbinary.ai.ArtificialIntelligenceTransitionInterface
// import org.allbinary.animation.IndexedAnimation
// import org.allbinary.animation.RotationAnimationInterface
// import org.allbinary.animation.RotationAnimationInterfaceCompositeInterface
// import org.allbinary.game.ai.BasicAI
// import org.allbinary.game.input.GameInput
// import org.allbinary.game.physics.velocity.BasicVelocityProperties
// import org.allbinary.game.physics.velocity.VelocityInterface
// import org.allbinary.game.physics.velocity.VelocityInterfaceCompositeInterface
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.math.AngleIncrementInfo
// import org.allbinary.util.CircularIndexUtil

@global export class HorizontaRotationManeuverAI extends BasicAI implements ArtificialIntelligenceTransitionInterface {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.HorizontaRotationManeuverAI";
    }
    circularIndexUtil: CircularIndexUtil | null = null;
    currentSpeedDivisor: i32 = 0;
    rotationAnimationInterface: IndexedAnimation | null = null;
    baseVelocityInterface: BasicVelocityProperties | null = null;
    velocityInterface: VelocityInterface | null = null;

    jfields_HorizontaRotationManeuverAI(): void {
    this.circularIndexUtil = CircularIndexUtil.createInstanceAt(10, JInteger.MAX_VALUE);
    this.currentSpeedDivisor = 5;
    
    
    
    }
    

    jinit_HorizontaRotationManeuverAI_2(ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): HorizontaRotationManeuverAI {
        super.jinit_BasicAI_2(ownerLayerInterface, gameInput);
        this.jfields_HorizontaRotationManeuverAI();
        let rotationAnimationInterfaceCompositeInterface: RotationAnimationInterfaceCompositeInterface | null = changetype<RotationAnimationInterfaceCompositeInterface | null>(this.getOwnerLayerInterface()); if (JThrowable.pending !== null) return this;
        this.rotationAnimationInterface = rotationAnimationInterfaceCompositeInterface!.getRotationAnimationInterface(); if (JThrowable.pending !== null) return this;
        let velocityInterfaceCompositeInterface: VelocityInterfaceCompositeInterface | null = changetype<VelocityInterfaceCompositeInterface | null>(this.getOwnerLayerInterface()); if (JThrowable.pending !== null) return this;
        this.baseVelocityInterface = velocityInterfaceCompositeInterface!.getVelocityProperties(); if (JThrowable.pending !== null) return this;
        this.velocityInterface = changetype<VelocityInterface | null>(this.baseVelocityInterface);
        let rotationAnimationInterface: RotationAnimationInterface | null = changetype<RotationAnimationInterface | null>(this.rotationAnimationInterface);
        let angleIncrementInfo: AngleIncrementInfo | null = rotationAnimationInterface!.getAngleInfoP()!.getAngleIncrementInfo(); if (JThrowable.pending !== null) return this;
        rotationAnimationInterfaceCompositeInterface!.setFrame(angleIncrementInfo!.RIGHT_FRAME!.intValue()); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    transition(): void {
        let rotationAnimationInterface: RotationAnimationInterface | null = changetype<RotationAnimationInterface | null>(this.rotationAnimationInterface);
        let angleIncrementInfo: AngleIncrementInfo | null = rotationAnimationInterface!.getAngleInfoP()!.getAngleIncrementInfo(); if (JThrowable.pending !== null) return;
        let rotationAnimationInterfaceCompositeInterface: RotationAnimationInterfaceCompositeInterface | null = changetype<RotationAnimationInterfaceCompositeInterface | null>(this.getOwnerLayerInterface()); if (JThrowable.pending !== null) return;
        rotationAnimationInterfaceCompositeInterface!.setFrame(angleIncrementInfo!.RIGHT_FRAME!.intValue()); if (JThrowable.pending !== null) return;
        let allbinaryLayer: AllBinaryLayer | null = this.getOwnerLayerInterface(); if (JThrowable.pending !== null) return;
        allbinaryLayer!.setPosition(allbinaryLayer!.getXP(), 1, allbinaryLayer!.getZP()); if (JThrowable.pending !== null) return;
    }
    

    processAI(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        let rotationAnimationInterface: RotationAnimationInterface | null = (changetype<RotationAnimationInterface | null>(this.rotationAnimationInterface));
        let angleIncrementInfo: AngleIncrementInfo | null = rotationAnimationInterface!.getAngleInfoP()!.getAngleIncrementInfo(); if (JThrowable.pending !== null) return;
        let frame: i32 = this.rotationAnimationInterface!.getFrame(); if (JThrowable.pending !== null) return;
        let ownerLayerInterface: AllBinaryLayer | null = this.getOwnerLayerInterface(); if (JThrowable.pending !== null) return;
        if (ownerLayerInterface!.getXP() - ownerLayerInterface!.getWidth() <= 0 && frame == angleIncrementInfo!.LEFT_FRAME!.intValue()) {
            this.reverse(); if (JThrowable.pending !== null) return;
            this.drop(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let displayInfo: DisplayInfoSingleton | null = DisplayInfoSingleton.getInstance(); if (JThrowable.pending !== null) return;
        if (ownerLayerInterface!.getX2() + ownerLayerInterface!.getWidth() > displayInfo!.getLastWidth() && frame == angleIncrementInfo!.RIGHT_FRAME!.intValue()) {
            this.reverse(); if (JThrowable.pending !== null) return;
            this.accelerate(); if (JThrowable.pending !== null) return;
            this.drop(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let index: i32 = this.circularIndexUtil!.getIndex(); if (JThrowable.pending !== null) return;
        if (index % this.currentSpeedDivisor == 0 && index % 2 == 0) {
            super.processKeyAI(Canvas.UP); if (JThrowable.pending !== null) return;
            this.velocityInterface!.limitMaxXYVelocity(this.velocityInterface!.getMaxForwardVelocity() / this.currentSpeedDivisor); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.circularIndexUtil!.next(); if (JThrowable.pending !== null) return;
        if (frame == angleIncrementInfo!.LEFT_FRAME!.intValue()) {
            super.processKeyAI(Canvas.KEY_NUM0); if (JThrowable.pending !== null) return;
        } else if (frame == angleIncrementInfo!.RIGHT_FRAME!.intValue()) {
            super.processKeyAI(Canvas.KEY_POUND); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    reverse(): void {
        let rotationAnimationInterface: RotationAnimationInterface | null = changetype<RotationAnimationInterface | null>(this.rotationAnimationInterface);
        let angleIncrementInfo: AngleIncrementInfo | null = rotationAnimationInterface!.getAngleInfoP()!.getAngleIncrementInfo(); if (JThrowable.pending !== null) return;
        let frame: i32 = this.rotationAnimationInterface!.getFrame(); if (JThrowable.pending !== null) return;
        if (frame == angleIncrementInfo!.LEFT_FRAME!.intValue()) {
            let rotationAnimationInterfaceCompositeInterface: RotationAnimationInterfaceCompositeInterface | null = changetype<RotationAnimationInterfaceCompositeInterface | null>(this.getOwnerLayerInterface()); if (JThrowable.pending !== null) return;
            rotationAnimationInterfaceCompositeInterface!.setFrame(angleIncrementInfo!.RIGHT_FRAME!.intValue()); if (JThrowable.pending !== null) return;
            this.baseVelocityInterface!.zero(); if (JThrowable.pending !== null) return;
        } else if (frame == angleIncrementInfo!.RIGHT_FRAME!.intValue()) {
            let rotationAnimationInterfaceCompositeInterface: RotationAnimationInterfaceCompositeInterface | null = changetype<RotationAnimationInterfaceCompositeInterface | null>(this.getOwnerLayerInterface()); if (JThrowable.pending !== null) return;
            rotationAnimationInterfaceCompositeInterface!.setFrame(angleIncrementInfo!.LEFT_FRAME!.intValue()); if (JThrowable.pending !== null) return;
            this.baseVelocityInterface!.zero(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    accelerate(): void {
        if (this.currentSpeedDivisor > 1) {
            this.currentSpeedDivisor--;
        }
    }
    

    drop(): void {
        let displayInfo: DisplayInfoSingleton | null = DisplayInfoSingleton.getInstance(); if (JThrowable.pending !== null) return;
        let ownerLayerInterface: AllBinaryLayer | null = this.getOwnerLayerInterface(); if (JThrowable.pending !== null) return;
        let y: i32 = ownerLayerInterface!.getYP(); if (JThrowable.pending !== null) return;
        if (ownerLayerInterface!.getY2() + ownerLayerInterface!.getHeight() > displayInfo!.getLastHeight()) {
            y = 0;
        } else {
            y += ownerLayerInterface!.getHeight() + 1; if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        ownerLayerInterface!.setPosition(ownerLayerInterface!.getXP(), y, ownerLayerInterface!.getZP()); if (JThrowable.pending !== null) return;
    }
    

    getId(): i32 {
        return ArtificialIntelligence.AI_ID;
    }
}

