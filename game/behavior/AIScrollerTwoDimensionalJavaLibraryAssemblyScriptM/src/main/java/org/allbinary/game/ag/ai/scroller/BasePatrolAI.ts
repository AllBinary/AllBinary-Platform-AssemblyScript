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
// import org.allbinary.game.input.GameInput
// import org.allbinary.game.physics.velocity.BasicVelocityProperties
// import org.allbinary.game.physics.velocity.VelocityInterfaceCompositeInterface
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.logic.math.MathUtil
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.util.ABHashtable

@global export class BasePatrolAI extends BasicAI {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.scroller.BasePatrolAI";
    }
    @lazy static jv_MAX_DISTANCE: JInteger | null = null;
    @lazy static js_MAX_DISTANCE: bool = false;
    static get MAX_DISTANCE(): JInteger | null {
        if (!BasePatrolAI.js_MAX_DISTANCE) {
            BasePatrolAI.js_MAX_DISTANCE = true;
            BasePatrolAI.jv_MAX_DISTANCE = SmallIntegerSingletonFactory.getInstance()!.getAt(2);
        }
        return BasePatrolAI.jv_MAX_DISTANCE;
    }
    static set MAX_DISTANCE(value: JInteger | null) {
        BasePatrolAI.js_MAX_DISTANCE = true;
        BasePatrolAI.jv_MAX_DISTANCE = value;
    }
    @lazy static jv_DIRECTION_ARRAY: JInteger | null = null;
    @lazy static js_DIRECTION_ARRAY: bool = false;
    static get DIRECTION_ARRAY(): JInteger | null {
        if (!BasePatrolAI.js_DIRECTION_ARRAY) {
            BasePatrolAI.js_DIRECTION_ARRAY = true;
            BasePatrolAI.jv_DIRECTION_ARRAY = SmallIntegerSingletonFactory.getInstance()!.getAt(3);
        }
        return BasePatrolAI.jv_DIRECTION_ARRAY;
    }
    static set DIRECTION_ARRAY(value: JInteger | null) {
        BasePatrolAI.js_DIRECTION_ARRAY = true;
        BasePatrolAI.jv_DIRECTION_ARRAY = value;
    }
    @lazy static jv_FIRING_DISTANCE: JInteger | null = null;
    @lazy static js_FIRING_DISTANCE: bool = false;
    static get FIRING_DISTANCE(): JInteger | null {
        if (!BasePatrolAI.js_FIRING_DISTANCE) {
            BasePatrolAI.js_FIRING_DISTANCE = true;
            BasePatrolAI.jv_FIRING_DISTANCE = SmallIntegerSingletonFactory.getInstance()!.getAt(4);
        }
        return BasePatrolAI.jv_FIRING_DISTANCE;
    }
    static set FIRING_DISTANCE(value: JInteger | null) {
        BasePatrolAI.js_FIRING_DISTANCE = true;
        BasePatrolAI.jv_FIRING_DISTANCE = value;
    }
    @lazy static jv_SPEED: JInteger | null = null;
    @lazy static js_SPEED: bool = false;
    static get SPEED(): JInteger | null {
        if (!BasePatrolAI.js_SPEED) {
            BasePatrolAI.js_SPEED = true;
            BasePatrolAI.jv_SPEED = SmallIntegerSingletonFactory.getInstance()!.getAt(5);
        }
        return BasePatrolAI.jv_SPEED;
    }
    static set SPEED(value: JInteger | null) {
        BasePatrolAI.js_SPEED = true;
        BasePatrolAI.jv_SPEED = value;
    }
    maxDistance: JInteger | null = null;
    currentDistance: i32 = 0;
    xTotalDistance: i32 = 0;
    lastKeyDirection: i32 = 0;
    keyDirection: i32 = 0;

    jfields_BasePatrolAI(): void {
    
    
    this.xTotalDistance = 0;
    this.lastKeyDirection = Canvas.RIGHT;
    this.keyDirection = Canvas.RIGHT;
    }
    

    jinit_BasePatrolAI_3(hashtable: ABHashtable | null, ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): BasePatrolAI {
        super.jinit_BasicAI_2(ownerLayerInterface, gameInput);
        this.jfields_BasePatrolAI();
        this.maxDistance = changetype<JInteger | null>(hashtable!.get(BasePatrolAI.MAX_DISTANCE)); if (JThrowable.pending !== null) return this;
        this.currentDistance = this.maxDistance!.intValue(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    update(): void {
        this.updateTotalDistance(); if (JThrowable.pending !== null) return;
        this.changeDirectionIfReachedPacingAreaMax(); if (JThrowable.pending !== null) return;
    }
    

    updateTotalDistance(): void {
        let velocityInterfaceCompositeInterface: VelocityInterfaceCompositeInterface | null = changetype<VelocityInterfaceCompositeInterface | null>(this.getOwnerLayerInterface()); if (JThrowable.pending !== null) return;
        let velocityProperties: BasicVelocityProperties | null = velocityInterfaceCompositeInterface!.getVelocityProperties(); if (JThrowable.pending !== null) return;
        this.xTotalDistance += velocityProperties!.getVelocityXBasicDecimalP()!.getScaled(); if (JThrowable.pending !== null) return;
    }
    

    changeDirectionIfReachedPacingAreaMax(): void {
        let mathUtil: MathUtil | null = MathUtil.getInstance(); if (JThrowable.pending !== null) return;
        let totalDistance: i32 = mathUtil!.abs(this.xTotalDistance); if (JThrowable.pending !== null) return;
        if (totalDistance > this.currentDistance) {
            this.nextDirection(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    nextDirection(): void {
        if (this.lastKeyDirection == Canvas.LEFT) {
            this.keyDirection = Canvas.RIGHT;
            this.lastKeyDirection = this.keyDirection;
            this.xTotalDistance = 0;
        } else if (this.lastKeyDirection == Canvas.RIGHT) {
            this.keyDirection = Canvas.LEFT;
            this.lastKeyDirection = this.keyDirection;
            this.xTotalDistance = 0;
        }
    }
    

    disable(): void {
    }
}

