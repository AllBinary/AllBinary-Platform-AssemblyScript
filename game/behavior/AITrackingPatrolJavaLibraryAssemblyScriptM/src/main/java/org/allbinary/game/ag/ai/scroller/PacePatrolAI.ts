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
// import org.allbinary.direction.Direction
// import org.allbinary.direction.DirectionCompositeInterface
// import org.allbinary.direction.DirectionFactory
// import org.allbinary.game.input.GameInput
// import org.allbinary.game.tracking.TrackingEvent
// import org.allbinary.game.tracking.TrackingEventHandler
// import org.allbinary.game.tracking.TrackingEventListenerInterface
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.layer.LayerInterface
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventStrings
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class PacePatrolAI extends BasePatrolAI implements TrackingEventListenerInterface {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.scroller.PacePatrolAI";
    }
    trackingList: BasicArrayList | null = null;
    firingDistance: i32 = 0;
    isFollowLimitedByTerrain: bool = false;

    jfields_PacePatrolAI(): void {
    
    this.firingDistance = 0;
    this.isFollowLimitedByTerrain = false;
    }
    

    jinit_PacePatrolAI_3(hashtable: ABHashtable | null, ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): PacePatrolAI {
        super.jinit_BasePatrolAI_3(hashtable, ownerLayerInterface, gameInput);
        this.jfields_PacePatrolAI();
        TrackingEventHandler.getInstance()!.addListenerInterface(this); if (JThrowable.pending !== null) return this;
        this.trackingList = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    processAI(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        this.update(); if (JThrowable.pending !== null) return;
        let direction: Direction | null = this.setFiringDirectionForTargetIfInRange(); if (JThrowable.pending !== null) return;
        let directionFactory: DirectionFactory | null = DirectionFactory.getInstance(); if (JThrowable.pending !== null) return;
        if (direction == directionFactory!.LEFT) {
            if (this.lastKeyDirection != this.keyDirection || !this.isFollowLimitedByTerrain) {
                super.processKeyAI(Canvas.LEFT); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            this.keyDirection = Canvas.LEFT;
            this.lastKeyDirection = this.keyDirection;
            this.xTotalDistance = 0;
            super.processKeyAI(Canvas.KEY_NUM1); if (JThrowable.pending !== null) return;
        } else if (direction == directionFactory!.RIGHT) {
            if (this.lastKeyDirection != this.keyDirection || !this.isFollowLimitedByTerrain) {
                super.processKeyAI(Canvas.RIGHT); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            this.keyDirection = Canvas.RIGHT;
            this.lastKeyDirection = this.keyDirection;
            this.xTotalDistance = 0;
            super.processKeyAI(Canvas.KEY_NUM1); if (JThrowable.pending !== null) return;
        } else {
            super.processKeyAI(this.keyDirection); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setFiringDirectionForTargetIfInRange(): Direction | null {
        let directionFactory: DirectionFactory | null = DirectionFactory.getInstance(); if (JThrowable.pending !== null) return null;
        let ownerLayerInterface: AllBinaryLayer | null = this.getOwnerLayerInterface(); if (JThrowable.pending !== null) return null;
        let direction: Direction | null = directionFactory!.NOT_BORDERED_WITH;
        let lastTrackingEvent: TrackingEvent | null = null;
        let lastTrackingLayerInterface: LayerInterface | null = null;
        let directionCompositeInterface: DirectionCompositeInterface | null = null;
        let size: i32 = this.trackingList!.size(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < size; index++) {
            lastTrackingEvent = changetype<TrackingEvent | null>(this.trackingList!.get(0)); if (JThrowable.pending !== null) return null;
            lastTrackingLayerInterface = lastTrackingEvent!.getLayerInterface(); if (JThrowable.pending !== null) return null;
            let x: i32 = lastTrackingLayerInterface!.getXP(); if (JThrowable.pending !== null) return null;
            let y: i32 = lastTrackingLayerInterface!.getYP(); if (JThrowable.pending !== null) return null;
            let yDistance: i32 = ownerLayerInterface!.getYP() - y - ownerLayerInterface!.getHeight(); if (JThrowable.pending !== null) return null;
            let xDistance: i32 = ownerLayerInterface!.getXP() - x - ownerLayerInterface!.getWidth(); if (JThrowable.pending !== null) return null;
            let absXDistance: i32 = JMath.abs(xDistance); if (JThrowable.pending !== null) return null;
            let absYDistance: i32 = JMath.abs(yDistance); if (JThrowable.pending !== null) return null;
            if (absYDistance <= 100) {
                if (absXDistance < this.getFiringDistance() / 2) {
                    directionCompositeInterface = changetype<DirectionCompositeInterface | null>(this.getOwnerLayerInterface()); if (JThrowable.pending !== null) return null;
                    if (xDistance < 0 && directionCompositeInterface!.getDirection() == directionFactory!.RIGHT) {
                        direction = directionFactory!.RIGHT;
                    } else if (xDistance > 0 && directionCompositeInterface!.getDirection() == directionFactory!.LEFT) {
                        direction = directionFactory!.LEFT;
                    } if (JThrowable.pending !== null) return null;
                } if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return direction;
    }
    

    disable(): void {
    }
    

    onEvent(eventObject: AllBinaryEventObject | null): void {
        ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this); if (JThrowable.pending !== null) return;
    }
    

    onMovement(trackingEvent: TrackingEvent | null): void {
        this.trackingList!.clear(); if (JThrowable.pending !== null) return;
        this.trackingList!.add(trackingEvent); if (JThrowable.pending !== null) return;
    }
    

    getFiringDistance(): i32 {
        return this.firingDistance;
    }
    

    setFiringDistance(firingDistance: i32): void {
        this.firingDistance = firingDistance;
    }
}

