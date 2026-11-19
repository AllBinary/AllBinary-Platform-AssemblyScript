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
// import org.allbinary.direction.Direction
// import org.allbinary.direction.DirectionUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.math.BasicDecimal
// import org.allbinary.logic.math.vector.AxisMathVectorUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.math.Angle
// import org.allbinary.math.PositionStrings
// import org.allbinary.string.CommonSeps

@global export class BasicVelocityProperties extends JObject implements BasicVelocityInterface {

    jclassName(): string {
        return "org.allbinary.game.physics.velocity.BasicVelocityProperties";
    }
    logUtil: LogUtil | null = null;
    velocityXBasicDecimal: BasicDecimal | null = null;
    velocityYBasicDecimal: BasicDecimal | null = null;
    velocityZBasicDecimal: BasicDecimal | null = null;
    axisMathVectorUtil: AxisMathVectorUtil | null = null;
    directionUtil: DirectionUtil | null = null;

    jfields_BasicVelocityProperties(): void {
    this.logUtil = LogUtil.getInstance();
    
    
    
    this.axisMathVectorUtil = AxisMathVectorUtil.getInstance();
    this.directionUtil = DirectionUtil.getInstance();
    }
    

    jinit_BasicVelocityProperties_0(): BasicVelocityProperties {
        super.jinit_JObject_0();
        this.jfields_BasicVelocityProperties();
        this.velocityXBasicDecimal = new BasicDecimal().jinit_BasicDecimal_1(0); if (JThrowable.pending !== null) return this;
        this.velocityYBasicDecimal = new BasicDecimal().jinit_BasicDecimal_1(0); if (JThrowable.pending !== null) return this;
        this.velocityZBasicDecimal = new BasicDecimal().jinit_BasicDecimal_1(0); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    zero(): void {
        this.velocityXBasicDecimal!.setint(0); if (JThrowable.pending !== null) return;
        this.velocityYBasicDecimal!.setint(0); if (JThrowable.pending !== null) return;
        this.velocityZBasicDecimal!.setint(0); if (JThrowable.pending !== null) return;
    }
    

    getVelocityXBasicDecimalP(): BasicDecimal | null {
        return this.velocityXBasicDecimal;
    }
    

    getVelocityYBasicDecimalP(): BasicDecimal | null {
        return this.velocityYBasicDecimal;
    }
    

    getVelocityZBasicDecimalP(): BasicDecimal | null {
        return this.velocityZBasicDecimal;
    }
    

    setVelocityWithBigDecimalAndDirection(magnitudeBasicDecimal: BasicDecimal | null, direction: Direction | null, otherDirection: Direction | null): void {
        let angle: Angle | null = this.directionUtil!.getAngle(direction); if (JThrowable.pending !== null) return;
        let otherAngle: Angle | null = this.directionUtil!.getAngle(otherDirection); if (JThrowable.pending !== null) return;
        this.setVelocityWithBigDecimal(magnitudeBasicDecimal, angle, otherAngle); if (JThrowable.pending !== null) return;
    }
    

    setVelocityWithDirection(magnitude: i64, direction: Direction | null, otherDirection: Direction | null): void {
        let angle: Angle | null = this.directionUtil!.getAngle(direction); if (JThrowable.pending !== null) return;
        let otherAngle: Angle | null = this.directionUtil!.getAngle(otherDirection); if (JThrowable.pending !== null) return;
        this.setVelocity(magnitude, angle, otherAngle); if (JThrowable.pending !== null) return;
    }
    

    addVelocityWithBigDecimalAndDirection(magnitudeBasicDecimal: BasicDecimal | null, direction: Direction | null, otherDirection: Direction | null): void {
        let angle: Angle | null = this.directionUtil!.getAngle(direction); if (JThrowable.pending !== null) return;
        let otherAngle: Angle | null = this.directionUtil!.getAngle(otherDirection); if (JThrowable.pending !== null) return;
        this.addVelocityWithBigDecimal(magnitudeBasicDecimal, angle, otherAngle); if (JThrowable.pending !== null) return;
    }
    

    addVelocityWithDirection(magnitude: i64, direction: Direction | null, otherDirection: Direction | null): void {
        let angle: Angle | null = this.directionUtil!.getAngle(direction); if (JThrowable.pending !== null) return;
        let otherAngle: Angle | null = this.directionUtil!.getAngle(otherDirection); if (JThrowable.pending !== null) return;
        this.addVelocity(magnitude, angle, otherAngle); if (JThrowable.pending !== null) return;
    }
    

    setVelocityWithBigDecimal(magnitudeBasicDecimal: BasicDecimal | null, angle: Angle | null, otherAngle: Angle | null): void {
        let magnitude: i64 = magnitudeBasicDecimal!.getUnscaled(); if (JThrowable.pending !== null) return;
        this.setVelocity(magnitude, angle, otherAngle); if (JThrowable.pending !== null) return;
    }
    

    addVelocityWithBigDecimal(magnitudeBasicDecimal: BasicDecimal | null, angle: Angle | null, otherAngle: Angle | null): void {
        let magnitude: i64 = magnitudeBasicDecimal!.getUnscaled(); if (JThrowable.pending !== null) return;
        this.addVelocity(magnitude, angle, otherAngle); if (JThrowable.pending !== null) return;
    }
    

    setVelocity(magnitude: i64, angle: Angle | null, otherAngle: Angle | null): void {
        this.setVelocityi(magnitude, (<i32>(angle!.getValue())), (<i32>(otherAngle!.getValue()))); if (JThrowable.pending !== null) return;
    }
    

    addVelocity(magnitude: i64, angle: Angle | null, otherAngle: Angle | null): void {
        this.addVelocityi(magnitude, (<i32>(angle!.getValue())), (<i32>(otherAngle!.getValue()))); if (JThrowable.pending !== null) return;
    }
    

    setVelocityi(magnitude: i64, angle: i32, otherAngle: i32): void {
        let xVector: i64 = (this.axisMathVectorUtil!.calculateX(magnitude, angle) / (<i64>(this.velocityXBasicDecimal!.getScaledFactorValue()))); if (JThrowable.pending !== null) return;
        let yVector: i64 = (this.axisMathVectorUtil!.calculateY(magnitude, angle) / (<i64>(this.velocityYBasicDecimal!.getScaledFactorValue()))); if (JThrowable.pending !== null) return;
        let zVector: i64 = (this.axisMathVectorUtil!.calculateZ(magnitude, otherAngle) / (<i64>(this.velocityZBasicDecimal!.getScaledFactorValue()))); if (JThrowable.pending !== null) return;
        this.velocityXBasicDecimal!.setlong(xVector); if (JThrowable.pending !== null) return;
        this.velocityYBasicDecimal!.setlong(yVector); if (JThrowable.pending !== null) return;
        this.velocityZBasicDecimal!.setlong(zVector); if (JThrowable.pending !== null) return;
    }
    

    addVelocityi(magnitude: i64, angle: i32, otherAngle: i32): void {
        let xVector: i64 = (this.axisMathVectorUtil!.calculateX(magnitude, angle) / (<i64>(this.velocityXBasicDecimal!.getScaledFactorValue()))); if (JThrowable.pending !== null) return;
        let yVector: i64 = (this.axisMathVectorUtil!.calculateY(magnitude, angle) / (<i64>(this.velocityYBasicDecimal!.getScaledFactorValue()))); if (JThrowable.pending !== null) return;
        let zVector: i64 = (this.axisMathVectorUtil!.calculateZ(magnitude, otherAngle) / (<i64>(this.velocityZBasicDecimal!.getScaledFactorValue()))); if (JThrowable.pending !== null) return;
        this.velocityXBasicDecimal!.addlong(xVector); if (JThrowable.pending !== null) return;
        this.velocityYBasicDecimal!.addlong(yVector); if (JThrowable.pending !== null) return;
        this.velocityZBasicDecimal!.addlong(zVector); if (JThrowable.pending !== null) return;
    }
    

    toString(): string | null {
        let commonSeps: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) return null;
        let positionStrings: PositionStrings | null = PositionStrings.getInstance(); if (JThrowable.pending !== null) return null;
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let stringUtil: StringUtil | null = StringUtil.getInstance(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("Velocity "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(positionStrings!.X_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(stringUtil!.toString1(this.velocityXBasicDecimal)); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonSeps!.SPACE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(positionStrings!.Y_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(stringUtil!.toString1(this.velocityYBasicDecimal)); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonSeps!.SPACE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(positionStrings!.Z_LABEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(stringUtil!.toString1(this.velocityZBasicDecimal)); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

