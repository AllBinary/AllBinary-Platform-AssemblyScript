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
// package org.allbinary.android.input.motion
// import org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer
// import org.allbinary.time.TimeDelayHelper

@global export class AnalogControllerHelper extends JObject {

    jclassName(): string {
        return "org.allbinary.android.input.motion.AnalogControllerHelper";
    }
    reduceTimeFactor: i32 = 0;
    SCALE_VALUE: i32 = 0;
    rightTimeElapsedHelper: TimeDelayHelper | null = null;
    leftTimeElapsedHelper: TimeDelayHelper | null = null;
    downTimeElapsedHelper: TimeDelayHelper | null = null;
    upTimeElapsedHelper: TimeDelayHelper | null = null;

    jfields_AnalogControllerHelper(): void {
    
    this.SCALE_VALUE = AnalogControllerConfigurationFactory.getInstance()!.SCALE_VALUE;
    this.rightTimeElapsedHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(0);
    this.leftTimeElapsedHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(0);
    this.downTimeElapsedHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(0);
    this.upTimeElapsedHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(0);
    }
    

    jinit_AnalogControllerHelper_1(reduceTimeFactor: i32): AnalogControllerHelper {
        super.jinit_JObject_0();
        this.jfields_AnalogControllerHelper();
        this.reduceTimeFactor = reduceTimeFactor;
        return this;
    }
    

    right(collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer | null, xAnalogValue: i32): void {
        this.rightTimeElapsedHelper!.delay = ((this.SCALE_VALUE - xAnalogValue) >> this.reduceTimeFactor);
        if (this.rightTimeElapsedHelper!.isTimeTNT()) {
            collidableDestroyableDamageableLayer!.right(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    left(collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer | null, xAnalogValue: i32): void {
        this.leftTimeElapsedHelper!.delay = ((this.SCALE_VALUE + xAnalogValue) >> this.reduceTimeFactor);
        if (this.leftTimeElapsedHelper!.isTimeTNT()) {
            collidableDestroyableDamageableLayer!.left(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    up(collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer | null, xAnalogValue: i32): void {
        this.upTimeElapsedHelper!.delay = ((this.SCALE_VALUE - xAnalogValue) >> this.reduceTimeFactor);
        if (this.upTimeElapsedHelper!.isTimeTNT()) {
            collidableDestroyableDamageableLayer!.up(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    down(collidableDestroyableDamageableLayer: CollidableDestroyableDamageableLayer | null, xAnalogValue: i32): void {
        this.downTimeElapsedHelper!.delay = ((this.SCALE_VALUE + xAnalogValue) >> this.reduceTimeFactor);
        if (this.downTimeElapsedHelper!.isTimeTNT()) {
            collidableDestroyableDamageableLayer!.down(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

