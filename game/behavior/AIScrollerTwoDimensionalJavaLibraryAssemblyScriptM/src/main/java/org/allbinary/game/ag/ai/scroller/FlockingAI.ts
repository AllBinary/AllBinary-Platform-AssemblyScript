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
// package org.allbinary.game.ag.ai.scroller
// import javax.microedition.lcdui.Canvas
// import org.allbinary.game.ai.BasicAI
// import org.allbinary.game.identification.BasicGroupFactory
// import org.allbinary.game.input.GameInput
// import org.allbinary.game.layer.identification.GroupLayerManagerListener
// import org.allbinary.game.layer.weapon.WeaponLayer
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.logic.math.MathUtil
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.BasicArrayList

@global export class FlockingAI extends BasicAI {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.scroller.FlockingAI";
    }
    allowedDistance: i32 = 0;

    jfields_FlockingAI(): void {
    
    }
    

    jinit_FlockingAI_3(hashtable: ABHashtable | null, ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): FlockingAI {
        super.jinit_BasicAI_2(ownerLayerInterface, gameInput);
        this.jfields_FlockingAI();
        let allowedDistance: JInteger | null = changetype<JInteger | null>(hashtable!.get(BasePatrolAI.MAX_DISTANCE)); if (JThrowable.pending !== null) return this;
        this.allowedDistance = allowedDistance!.intValue(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    processAI(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        let maxDistance: i32 = 0;
        let farAllbinaryLayer: AllBinaryLayer | null = AllBinaryLayer.NULL_ALLBINARY_LAYER;
        let groupLayerManagerListener: GroupLayerManagerListener | null = GroupLayerManagerListener.getInstance(); if (JThrowable.pending !== null) return;
        let list: BasicArrayList | null = groupLayerManagerListener!.getList(BasicGroupFactory.getInstance()!.ENEMY); if (JThrowable.pending !== null) return;
        let size: i32 = list!.size(); if (JThrowable.pending !== null) return;
        let allBinaryLayer: AllBinaryLayer | null = null;
        let ownerLayerInterface: AllBinaryLayer | null = null;
        for (let index: i32 = 0; index < size; index++) {
            allBinaryLayer = changetype<AllBinaryLayer | null>(list!.get(index)); if (JThrowable.pending !== null) return;
            if (allBinaryLayer!.getType() != WeaponLayer.getStaticType()) {
                let distance: i32 = this.getXYDistance(allBinaryLayer); if (JThrowable.pending !== null) return;
                if (distance > maxDistance) {
                    maxDistance = distance;
                    farAllbinaryLayer = allBinaryLayer;
                    if (distance > this.allowedDistance) {
                        break;
                    }
                }
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (maxDistance > this.allowedDistance) {
            if (farAllbinaryLayer != AllBinaryLayer.NULL_ALLBINARY_LAYER) {
                ownerLayerInterface = this.getOwnerLayerInterface(); if (JThrowable.pending !== null) return;
                if (farAllbinaryLayer!.getXP() < ownerLayerInterface!.getXP()) {
                    this.processKeyAI(Canvas.LEFT); if (JThrowable.pending !== null) return;
                } else if (farAllbinaryLayer!.getXP() > ownerLayerInterface!.getXP()) {
                    this.processKeyAI(Canvas.RIGHT); if (JThrowable.pending !== null) return;
                } else if (farAllbinaryLayer!.getYP() > ownerLayerInterface!.getYP()) {
                    this.processKeyAI(Canvas.UP); if (JThrowable.pending !== null) return;
                } else if (farAllbinaryLayer!.getYP() < ownerLayerInterface!.getYP()) {
                    this.processKeyAI(Canvas.DOWN); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getXYDistance(allBinaryLayer: AllBinaryLayer | null): i32 {
        let ownerLayerInterface: AllBinaryLayer | null = this.getOwnerLayerInterface(); if (JThrowable.pending !== null) return 0;
        let xTotalDistance: i32 = (allBinaryLayer!.getXP() + allBinaryLayer!.getHalfWidth()) - (ownerLayerInterface!.getXP() + ownerLayerInterface!.getHalfWidth()); if (JThrowable.pending !== null) return 0;
        let yTotalDistance: i32 = (allBinaryLayer!.getYP() + allBinaryLayer!.getHalfHeight()) - (ownerLayerInterface!.getYP() + ownerLayerInterface!.getHalfHeight()); if (JThrowable.pending !== null) return 0;
        let mathUtil: MathUtil | null = MathUtil.getInstance(); if (JThrowable.pending !== null) return 0;
        let totalDistance: i32 = mathUtil!.abs(xTotalDistance) + mathUtil!.abs(yTotalDistance); if (JThrowable.pending !== null) return 0;
        return totalDistance;
    }
}

