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
// package org.allbinary.logic.math.vector
// import org.allbinary.math.NoDecimalTrigTable

@global export class AxisMathVectorUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.math.vector.AxisMathVectorUtil";
    }
    @lazy static jv_instance: AxisMathVectorUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AxisMathVectorUtil | null {
        if (!AxisMathVectorUtil.js_instance) {
            AxisMathVectorUtil.js_instance = true;
            AxisMathVectorUtil.jv_instance = new AxisMathVectorUtil().jinit_AxisMathVectorUtil_0();
        }
        return AxisMathVectorUtil.jv_instance;
    }
    static set instance(value: AxisMathVectorUtil | null) {
        AxisMathVectorUtil.js_instance = true;
        AxisMathVectorUtil.jv_instance = value;
    }
    noDecimalTrigTable: NoDecimalTrigTable | null = null;

    jfields_AxisMathVectorUtil(): void {
    this.noDecimalTrigTable = NoDecimalTrigTable.getInstance();
    }

    jinit_AxisMathVectorUtil_0(): AxisMathVectorUtil {
        super.jinit_JObject_0();
        this.jfields_AxisMathVectorUtil();
        return this;
    }
    

    static getInstance(): AxisMathVectorUtil | null {
        return AxisMathVectorUtil.instance;
    }
    

    calculateX(magnitude: i64, angle: i32): i64 {
        return magnitude * this.noDecimalTrigTable!.cos(angle) / (<i64>10);
    }
    

    calculateY(magnitude: i64, angle: i32): i64 {
        return magnitude * this.noDecimalTrigTable!.sin(angle) / (<i64>10);
    }
    

    calculateZ(magnitude: i64, otherAngle: i32): i64 {
        return magnitude * this.noDecimalTrigTable!.sin(otherAngle) / (<i64>10);
    }
}

