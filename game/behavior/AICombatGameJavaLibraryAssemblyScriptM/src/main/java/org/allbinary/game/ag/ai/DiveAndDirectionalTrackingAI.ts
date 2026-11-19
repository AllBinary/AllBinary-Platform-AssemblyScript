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
// import org.allbinary.ai.ArtificialIntelligenceInterface
// import org.allbinary.direction.Direction
// import org.allbinary.direction.DirectionFactory
// import org.allbinary.direction.DirectionalCompositeInterface
// import org.allbinary.direction.DirectionalInterface
// import org.allbinary.game.ai.BasicAI
// import org.allbinary.game.combat.destroy.event.DestroyedEvent
// import org.allbinary.game.combat.destroy.event.DestroyedEventHandler
// import org.allbinary.game.combat.destroy.event.DestroyedEventListenerInterface
// import org.allbinary.game.identification.Group
// import org.allbinary.game.input.GameInput
// import org.allbinary.game.physics.velocity.BasicVelocityProperties
// import org.allbinary.game.physics.velocity.VelocityInterfaceCompositeInterface
// import org.allbinary.game.tracking.TrackingEvent
// import org.allbinary.game.tracking.TrackingEventHandler
// import org.allbinary.game.tracking.TrackingEventListenerInterface
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.math.MathUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventStrings
// import org.allbinary.logic.util.visitor.Visitor
// import org.allbinary.time.GameTickTimeDelayHelper
// import org.allbinary.time.GameTickTimeDelayHelperFactory
// import org.allbinary.time.TimeDelayHelper
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class DiveAndDirectionalTrackingAI extends BasicAI implements TrackingEventListenerInterface, DestroyedEventListenerInterface {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.DiveAndDirectionalTrackingAI";
    }
    mathUtil: MathUtil | null = null;
    directionFactory: DirectionFactory | null = null;
    gameTickTimeDelayHelper: GameTickTimeDelayHelper | null = null;
    timeDelayHelper: TimeDelayHelper | null = null;
    list: BasicArrayList | null = null;
    directionalInterface: DirectionalInterface | null = null;
    velocityInterface: BasicVelocityProperties | null = null;
    directionToKeyMap: StaticArray<i32> | null = null;
    initialDropped: bool = false;
    diveP: bool = false;
    directionOfTarget: Direction | null = null;
    MIN_DISTANCE: i32 = 0;
    lastTrackingLayerInterface: AllBinaryLayer | null = null;
    artificialIntelligenceInterface: ArtificialIntelligenceInterface | null = null;
    aiVistor: Visitor | null = null;
    lastDirection: Direction | null = null;

    jfields_DiveAndDirectionalTrackingAI(): void {
    this.mathUtil = MathUtil.getInstance();
    this.directionFactory = DirectionFactory.getInstance();
    this.gameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance();
    this.timeDelayHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(500);
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    
    
    this.directionToKeyMap = StaticArray.fromArray<i32>([Canvas.LEFT, Canvas.DOWN, Canvas.UP, Canvas.RIGHT]);
    this.initialDropped = false;
    this.diveP = false;
    this.directionOfTarget = Direction.getInstance1(0);
    this.MIN_DISTANCE = 40;
    this.lastTrackingLayerInterface = AllBinaryLayer.NULL_ALLBINARY_LAYER;
    
    
    this.lastDirection = DirectionFactory.getInstance()!.NO_DIRECTION;
    }
    

    jinit_DiveAndDirectionalTrackingAI_4(ownerLayerInterface: AllBinaryLayer | null, artificialIntelligenceInterface: ArtificialIntelligenceInterface | null, gameInput: GameInput | null, visitor: Visitor | null): DiveAndDirectionalTrackingAI {
        super.jinit_BasicAI_2(ownerLayerInterface, gameInput);
        this.jfields_DiveAndDirectionalTrackingAI();
        this.aiVistor = visitor;
        this.artificialIntelligenceInterface = artificialIntelligenceInterface;
        let directionalCompositeInterface: DirectionalCompositeInterface | null = changetype<DirectionalCompositeInterface | null>(this.getOwnerLayerInterface()); if (JThrowable.pending !== null) return this;
        this.directionalInterface = directionalCompositeInterface!.getDirectionalInterface(); if (JThrowable.pending !== null) return this;
        let velocityInterfaceCompositeInterface: VelocityInterfaceCompositeInterface | null = changetype<VelocityInterfaceCompositeInterface | null>(this.getOwnerLayerInterface()); if (JThrowable.pending !== null) return this;
        this.velocityInterface = velocityInterfaceCompositeInterface!.getVelocityProperties(); if (JThrowable.pending !== null) return this;
        DestroyedEventHandler.getInstance()!.addListenerInterface(this); if (JThrowable.pending !== null) return this;
        this.init(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    processAI(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        if (this.isBeyondTarget()) {
            this.init(); if (JThrowable.pending !== null) return;
            this.velocityInterface!.zero(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (!this.diveP) {
            this.target(allBinaryLayerManager); if (JThrowable.pending !== null) return;
        } else {
            this.dive(); if (JThrowable.pending !== null) return;
            this.attack(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.list!.clear(); if (JThrowable.pending !== null) return;
    }
    

    init(): void {
        this.diveP = false;
        this.directionOfTarget = DirectionFactory.getInstance()!.NOT_BORDERED_WITH; if (JThrowable.pending !== null) return;
        TrackingEventHandler.getInstance()!.addListenerInterface(this); if (JThrowable.pending !== null) return;
    }
    

    target(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        if (this.list!.size() == 0) {
            return;
        } if (JThrowable.pending !== null) return;
        let lastTrackingEvent: TrackingEvent | null = changetype<TrackingEvent | null>(this.list!.removeAt(0)); if (JThrowable.pending !== null) return;
        this.lastTrackingLayerInterface = lastTrackingEvent!.getLayerInterface(); if (JThrowable.pending !== null) return;
        let layerInterface: AllBinaryLayer | null = this.lastTrackingLayerInterface;
        let ownerLayerInterface: AllBinaryLayer | null = this.getOwnerLayerInterface(); if (JThrowable.pending !== null) return;
        let groupArray: StaticArray<Group | null> | null = layerInterface!.getGroupInterface(); if (JThrowable.pending !== null) return;
        let ownerGroupArray: StaticArray<Group | null> | null = ownerLayerInterface!.getGroupInterface(); if (JThrowable.pending !== null) return;
        if (groupArray == ownerGroupArray) {
            return;
        }
        let x: i32 = this.lastTrackingLayerInterface!.getXP(); if (JThrowable.pending !== null) return;
        let y: i32 = this.lastTrackingLayerInterface!.getYP(); if (JThrowable.pending !== null) return;
        let yDistance: i32 = ownerLayerInterface!.getYP() - y - ownerLayerInterface!.getHeight(); if (JThrowable.pending !== null) return;
        let xDistance: i32 = ownerLayerInterface!.getXP() - x - ownerLayerInterface!.getWidth(); if (JThrowable.pending !== null) return;
        let directionFactory: DirectionFactory | null = DirectionFactory.getInstance(); if (JThrowable.pending !== null) return;
        if (this.mathUtil!.abs(yDistance) > this.mathUtil!.abs(xDistance)) {
            if (yDistance > this.MIN_DISTANCE) {
                this.directionOfTarget = directionFactory!.UP;
            } else if (yDistance < -this.MIN_DISTANCE) {
                this.directionOfTarget = directionFactory!.DOWN;
            }
        } else {
            if (xDistance > this.MIN_DISTANCE) {
                this.directionOfTarget = directionFactory!.LEFT;
            } else if (xDistance < -this.MIN_DISTANCE) {
                this.directionOfTarget = directionFactory!.RIGHT;
            }
        } if (JThrowable.pending !== null) return;
        if (!this.initialDropped && this.directionOfTarget != directionFactory!.NOT_BORDERED_WITH) {
            this.drop(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (this.initialDropped) {
            if (this.directionOfTarget == directionFactory!.UP || this.directionOfTarget == directionFactory!.DOWN) {
                this.verticalTargeting(x); if (JThrowable.pending !== null) return;
            } else if (this.directionOfTarget == directionFactory!.LEFT || this.directionOfTarget == directionFactory!.RIGHT) {
                this.horizontalTargeting(y); if (JThrowable.pending !== null) return;
            } else {
                this.artificialIntelligenceInterface!.processAI(allBinaryLayerManager); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    verticalTargeting(x: i32): void {
        let ownerLayerInterface: AllBinaryLayer | null = this.getOwnerLayerInterface(); if (JThrowable.pending !== null) return;
        if (ownerLayerInterface!.getXP() < x) {
            this.moveRight(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (ownerLayerInterface!.getXP() > x) {
            this.moveLeft(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (ownerLayerInterface!.getXP() > x - 3 && ownerLayerInterface!.getXP() < x + 3) {
            this.setDive(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    horizontalTargeting(y: i32): void {
        let ownerLayerInterface: AllBinaryLayer | null = this.getOwnerLayerInterface(); if (JThrowable.pending !== null) return;
        if (ownerLayerInterface!.getYP() < y) {
            this.moveDown(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (ownerLayerInterface!.getYP() > y) {
            this.moveUp(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (ownerLayerInterface!.getYP() > y - 3 && ownerLayerInterface!.getYP() < y + 3) {
            this.setDive(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setDive(): void {
        this.diveP = true;
        this.velocityInterface!.zero(); if (JThrowable.pending !== null) return;
        TrackingEventHandler.getInstance()!.removeListener(this); if (JThrowable.pending !== null) return;
    }
    

    moveRight(): void {
        this.setLastDirection(this.directionFactory!.RIGHT); if (JThrowable.pending !== null) return;
        this.directionalInterface!.setFrameByDirection(this.lastDirection); if (JThrowable.pending !== null) return;
        this.aiVistor!.visit(this); if (JThrowable.pending !== null) return;
    }
    

    moveLeft(): void {
        this.setLastDirection(this.directionFactory!.LEFT); if (JThrowable.pending !== null) return;
        this.directionalInterface!.setFrameByDirection(this.lastDirection); if (JThrowable.pending !== null) return;
        this.aiVistor!.visit(this); if (JThrowable.pending !== null) return;
    }
    

    moveDown(): void {
        this.setLastDirection(this.directionFactory!.DOWN); if (JThrowable.pending !== null) return;
        this.directionalInterface!.setFrameByDirection(this.lastDirection); if (JThrowable.pending !== null) return;
        this.aiVistor!.visit(this); if (JThrowable.pending !== null) return;
    }
    

    moveUp(): void {
        this.setLastDirection(this.directionFactory!.UP); if (JThrowable.pending !== null) return;
        this.directionalInterface!.setFrameByDirection(this.lastDirection); if (JThrowable.pending !== null) return;
        this.aiVistor!.visit(this); if (JThrowable.pending !== null) return;
    }
    

    dive(): void {
        this.directionalInterface!.setFrameByDirection(this.directionOfTarget); if (JThrowable.pending !== null) return;
        this.aiVistor!.visit(this); if (JThrowable.pending !== null) return;
    }
    

    attack(): void {
        super.processKeyAI(Canvas.KEY_NUM1); if (JThrowable.pending !== null) return;
    }
    

    drop(): void {
        if (this.timeDelayHelper!.isTime(this.gameTickTimeDelayHelper!.startTime)) {
            this.initialDropped = true;
            this.aiVistor!.visit(this); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    isBeyondTarget(): bool {
        if (this.directionOfTarget == this.directionFactory!.DOWN) {
            if (this.getOwnerLayerInterface()!.getYP() > this.lastTrackingLayerInterface!.getYP() + this.MIN_DISTANCE) {
                return true;
            } else {
                return false;
            } if (JThrowable.pending !== null) return false;
        } else if (this.directionOfTarget == this.directionFactory!.UP) {
            if (this.getOwnerLayerInterface()!.getYP() < this.lastTrackingLayerInterface!.getYP() + this.MIN_DISTANCE) {
                return true;
            } else {
                return false;
            } if (JThrowable.pending !== null) return false;
        } else if (this.directionOfTarget == this.directionFactory!.RIGHT) {
            if (this.getOwnerLayerInterface()!.getXP() > this.lastTrackingLayerInterface!.getXP() + this.MIN_DISTANCE) {
                return true;
            } else {
                return false;
            } if (JThrowable.pending !== null) return false;
        } else if (this.directionOfTarget == this.directionFactory!.LEFT) {
            if (this.getOwnerLayerInterface()!.getXP() < this.lastTrackingLayerInterface!.getXP() + this.MIN_DISTANCE) {
                return true;
            } else {
                return false;
            } if (JThrowable.pending !== null) return false;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    onEvent(eventObject: AllBinaryEventObject | null): void {
        ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this); if (JThrowable.pending !== null) return;
    }
    

    onMovement(trackingEvent: TrackingEvent | null): void {
        this.list!.add(trackingEvent); if (JThrowable.pending !== null) return;
    }
    

    onDestroyed(destroyedEvent: DestroyedEvent | null): void {
        if (this.getOwnerLayerInterface() == destroyedEvent!.getLayerInterface()) {
            TrackingEventHandler.getInstance()!.removeListener(this); if (JThrowable.pending !== null) return;
            DestroyedEventHandler.getInstance()!.removeListener(this); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setLastDirection(lastDirection: Direction | null): void {
        this.lastDirection = lastDirection;
        let value: i32 = this.getLastDirection()!.getValue(); if (JThrowable.pending !== null) return;
        if (value < 4) {
            super.setLastKey(this.directionToKeyMap![value]); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setLastKey(lastKey: i32): void {
        super.setLastKey(lastKey); if (JThrowable.pending !== null) return;
        if (this.getLastKey() == Canvas.LEFT) {
            this.lastDirection = DirectionFactory.getInstance()!.LEFT; if (JThrowable.pending !== null) return;
        } else if (this.getLastKey() == Canvas.DOWN) {
            this.lastDirection = DirectionFactory.getInstance()!.DOWN; if (JThrowable.pending !== null) return;
        } else if (this.getLastKey() == Canvas.UP) {
            this.lastDirection = DirectionFactory.getInstance()!.UP; if (JThrowable.pending !== null) return;
        } else if (this.getLastKey() == Canvas.RIGHT) {
            this.lastDirection = DirectionFactory.getInstance()!.RIGHT; if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getLastDirection(): Direction | null {
        return this.lastDirection;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(super.toString()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" LastDirection: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(StringUtil.getInstance()!.toString1(this.getLastDirection())); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

