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
// package org.allbinary.game.physics.velocity
// import org.allbinary.logic.math.BasicDecimal

@global export class DragVelocityBehavior extends VelocityBehaviorBase {

    jclassName(): string {
        return "org.allbinary.game.physics.velocity.DragVelocityBehavior";
    }
    @lazy static jv_instance: DragVelocityBehavior | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): DragVelocityBehavior | null {
        if (!DragVelocityBehavior.js_instance) {
            DragVelocityBehavior.js_instance = true;
            DragVelocityBehavior.jv_instance = new DragVelocityBehavior().jinit_DragVelocityBehavior_0();
        }
        return DragVelocityBehavior.jv_instance;
    }
    static set instance(value: DragVelocityBehavior | null) {
        DragVelocityBehavior.js_instance = true;
        DragVelocityBehavior.jv_instance = value;
    }

    jinit_DragVelocityBehavior_0(): DragVelocityBehavior {
        super.jinit_VelocityBehaviorBase_0();
        return this;
    }
    

    reduce(velocityProperties: BasicVelocityProperties | null, nominator: i32, denominator: i32): void {
        if (velocityProperties!.getVelocityXBasicDecimalP()!.getUnscaled() != (<i64>0)) {
            let basicDecimal: BasicDecimal | null = velocityProperties!.getVelocityXBasicDecimalP(); if (JThrowable.pending !== null) return;
            basicDecimal!.multiplyint(nominator); if (JThrowable.pending !== null) return;
            basicDecimal!.divideint(denominator); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (velocityProperties!.getVelocityYBasicDecimalP()!.getUnscaled() != (<i64>0)) {
            let basicDecimal: BasicDecimal | null = velocityProperties!.getVelocityYBasicDecimalP(); if (JThrowable.pending !== null) return;
            basicDecimal!.multiplyint(nominator); if (JThrowable.pending !== null) return;
            basicDecimal!.divideint(denominator); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    reduceX(velocityProperties: BasicVelocityProperties | null, nominator: i32, denominator: i32): void {
        let basicDecimal: BasicDecimal | null = velocityProperties!.getVelocityXBasicDecimalP(); if (JThrowable.pending !== null) return;
        if (basicDecimal!.getUnscaled() != (<i64>0)) {
            basicDecimal!.multiplyint(nominator); if (JThrowable.pending !== null) return;
            basicDecimal!.divideint(denominator); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    reduceY(velocityProperties: BasicVelocityProperties | null, nominator: i32, denominator: i32): void {
        if (velocityProperties!.getVelocityYBasicDecimalP()!.getUnscaled() != (<i64>0)) {
            let basicDecimal: BasicDecimal | null = velocityProperties!.getVelocityYBasicDecimalP(); if (JThrowable.pending !== null) return;
            basicDecimal!.multiplyint(nominator); if (JThrowable.pending !== null) return;
            basicDecimal!.divideint(denominator); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

