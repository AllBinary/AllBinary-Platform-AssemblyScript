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

@global export class VelocityProperties extends BasicVelocityProperties implements VelocityInterface {

    jclassName(): string {
        return "org.allbinary.game.physics.velocity.VelocityProperties";
    }
    @lazy static jv_NULL_VELOCITY_PROPERTIES: VelocityProperties | null = null;
    @lazy static js_NULL_VELOCITY_PROPERTIES: bool = false;
    static get NULL_VELOCITY_PROPERTIES(): VelocityProperties | null {
        if (!VelocityProperties.js_NULL_VELOCITY_PROPERTIES) {
            VelocityProperties.js_NULL_VELOCITY_PROPERTIES = true;
            VelocityProperties.jv_NULL_VELOCITY_PROPERTIES = new VelocityProperties().jinit_VelocityProperties_2(0, 0);
        }
        return VelocityProperties.jv_NULL_VELOCITY_PROPERTIES;
    }
    static set NULL_VELOCITY_PROPERTIES(value: VelocityProperties | null) {
        VelocityProperties.js_NULL_VELOCITY_PROPERTIES = true;
        VelocityProperties.jv_NULL_VELOCITY_PROPERTIES = value;
    }
    maxForwardVelocity: i32 = 0;
    maxReverseVelocity: i32 = 0;

    jfields_VelocityProperties(): void {
    this.maxForwardVelocity = 0;
    this.maxReverseVelocity = 0;
    }
    

    jinit_VelocityProperties_2(maxForwardVelocity: i32, maxReverseVelocity: i32): VelocityProperties {
        super.jinit_BasicVelocityProperties_0();
        this.jfields_VelocityProperties();
        this.setMaxForwardVelocity(maxForwardVelocity); if (JThrowable.pending !== null) return this;
        this.setMaxReverseVelocity(maxReverseVelocity); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getMaxForwardVelocity(): i32 {
        return this.maxForwardVelocity;
    }
    

    setMaxForwardVelocity(maxForwardVelocity: i32): void {
        this.maxForwardVelocity = maxForwardVelocity;
    }
    

    getMaxReverseVelocity(): i32 {
        return this.maxReverseVelocity;
    }
    

    setMaxReverseVelocity(maxReverseVelocity: i32): void {
        this.maxReverseVelocity = maxReverseVelocity;
    }
    

    limitMaxXYForwardVelocity(): void {
        this.limitMaxXYVelocity(this.getMaxForwardVelocity()); if (JThrowable.pending !== null) return;
    }
    

    limitMaxXYReverseVelocity(): void {
        this.limitMaxXYVelocity(this.getMaxReverseVelocity()); if (JThrowable.pending !== null) return;
    }
    

    limitMaxYForwardVelocity(): void {
        this.limitMaxYVelocity(this.getMaxForwardVelocity()); if (JThrowable.pending !== null) return;
    }
    

    limitMaxYReverseVelocity(): void {
        this.limitMaxYVelocity(this.getMaxReverseVelocity()); if (JThrowable.pending !== null) return;
    }
    

    limitMaxXForwardVelocity(): void {
        this.limitMaxXVelocity(this.getMaxForwardVelocity()); if (JThrowable.pending !== null) return;
    }
    

    limitMaxXReverseVelocity(): void {
        this.limitMaxXVelocity(this.getMaxReverseVelocity()); if (JThrowable.pending !== null) return;
    }
    

    isOverXYMaxForwardVelocity(): bool {
        return this.isOverXYMaxVelocity(this.getMaxForwardVelocity());
    }
    

    isOverXYMaxReverseVelocity(): bool {
        return this.isOverXYMaxVelocity(this.getMaxReverseVelocity());
    }
    

    limitXYToForwardAndReverseMaxVelocity(): void {
        this.limitMaxXYForwardVelocity(); if (JThrowable.pending !== null) return;
        this.limitMaxXYReverseVelocity(); if (JThrowable.pending !== null) return;
    }
    

    limitMaxXYVelocity(maxVelocity: i32): void {
        this.limitMaxXVelocity(maxVelocity); if (JThrowable.pending !== null) return;
        this.limitMaxYVelocity(maxVelocity); if (JThrowable.pending !== null) return;
    }
    

    limitMaxPositiveYVelocity(maxVelocity: i32): void {
        if (this.velocityYBasicDecimal!.getUnscaled() > (<i64>(maxVelocity))) {
            this.velocityYBasicDecimal!.setint(maxVelocity); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    limitMaxNegativeYVelocity(maxVelocity: i32): void {
        if (this.velocityYBasicDecimal!.getUnscaled() < (<i64>(-maxVelocity))) {
            this.velocityYBasicDecimal!.setint(-maxVelocity); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    limitMaxYVelocity(maxVelocity: i32): void {
        this.limitMaxPositiveYVelocity(maxVelocity); if (JThrowable.pending !== null) return;
        this.limitMaxNegativeYVelocity(maxVelocity); if (JThrowable.pending !== null) return;
    }
    

    limitMaxXVelocity(maxVelocity: i32): void {
        if (this.velocityXBasicDecimal!.getUnscaled() > (<i64>(maxVelocity))) {
            this.velocityXBasicDecimal!.setint(maxVelocity); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (this.velocityXBasicDecimal!.getUnscaled() < (<i64>(-maxVelocity))) {
            this.velocityXBasicDecimal!.setint(-maxVelocity); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    isOverXYMaxVelocity(maxVelocity: i32): bool {
        if (this.velocityXBasicDecimal!.getUnscaled() > (<i64>(maxVelocity))) {
            return true;
        } if (JThrowable.pending !== null) return false;
        if (this.velocityXBasicDecimal!.getUnscaled() < (<i64>(-maxVelocity))) {
            return true;
        } if (JThrowable.pending !== null) return false;
        if (this.velocityYBasicDecimal!.getUnscaled() > (<i64>(maxVelocity))) {
            return true;
        } if (JThrowable.pending !== null) return false;
        if (this.velocityYBasicDecimal!.getUnscaled() < (<i64>(-maxVelocity))) {
            return true;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    setVelocityi(magnitude: i64, angle: i32, otherAngle: i32): void {
        super.setVelocityi(magnitude, angle, otherAngle); if (JThrowable.pending !== null) return;
        this.limitXYToForwardAndReverseMaxVelocity(); if (JThrowable.pending !== null) return;
    }
    

    addVelocityi(magnitude: i64, angle: i32, otherAngle: i32): void {
        super.addVelocityi(magnitude, angle, otherAngle); if (JThrowable.pending !== null) return;
        this.limitXYToForwardAndReverseMaxVelocity(); if (JThrowable.pending !== null) return;
    }
}

