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
// import org.allbinary.bounds.BoundsVisitorInterface
// import org.allbinary.game.physics.velocity.VelocityInterface
// import org.allbinary.game.physics.velocity.VelocityInterfaceCompositeInterface
// import org.allbinary.layer.LayerInterface
// import org.allbinary.logic.communication.log.LogUtil

@global export class ReverseVelocityBoundsVisitor extends JObject implements BoundsVisitorInterface {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.ReverseVelocityBoundsVisitor";
    }
    logUtil: LogUtil | null = null;
    velocityInterface: VelocityInterface | null = null;
    layerInterface: LayerInterface | null = null;

    jfields_ReverseVelocityBoundsVisitor(): void {
    this.logUtil = LogUtil.getInstance();
    
    
    }
    

    jinit_ReverseVelocityBoundsVisitor_1(layerInterface: LayerInterface | null): ReverseVelocityBoundsVisitor {
        super.jinit_JObject_0();
        this.jfields_ReverseVelocityBoundsVisitor();
        this.layerInterface = layerInterface;
        let velocityInterfaceCompositeInterface: VelocityInterfaceCompositeInterface | null = changetype<VelocityInterfaceCompositeInterface | null>(layerInterface);
        this.velocityInterface = changetype<VelocityInterface | null>(velocityInterfaceCompositeInterface!.getVelocityProperties()); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getX(): i32 {
        return this.layerInterface!.getXP();
    }
    

    getY(): i32 {
        return this.layerInterface!.getYP();
    }
    

    minX(): void {
        if (this.velocityInterface!.getVelocityXBasicDecimalP()!.getUnscaled() < (<i64>0)) {
            this.velocityInterface!.getVelocityXBasicDecimalP()!.multiplyint(-1); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    maxX(): void {
        if (this.velocityInterface!.getVelocityXBasicDecimalP()!.getUnscaled() > (<i64>0)) {
            this.velocityInterface!.getVelocityXBasicDecimalP()!.multiplyint(-1); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    minY(): void {
        if (this.velocityInterface!.getVelocityYBasicDecimalP()!.getUnscaled() < (<i64>0)) {
            this.velocityInterface!.getVelocityYBasicDecimalP()!.multiplyint(-1); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    maxY(): void {
        if (this.velocityInterface!.getVelocityYBasicDecimalP()!.getUnscaled() > (<i64>0)) {
            this.velocityInterface!.getVelocityYBasicDecimalP()!.multiplyint(-1); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

