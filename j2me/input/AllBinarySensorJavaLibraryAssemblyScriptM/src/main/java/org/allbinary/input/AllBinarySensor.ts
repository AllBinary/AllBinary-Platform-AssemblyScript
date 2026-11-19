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
// package org.allbinary.input
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class AllBinarySensor extends JObject implements AllBinarySensorListener {

    jclassName(): string {
        return "org.allbinary.input.AllBinarySensor";
    }
    @lazy static jv_NULL_ALLBINARY_SENSOR: AllBinarySensor | null = null;
    @lazy static js_NULL_ALLBINARY_SENSOR: bool = false;
    static get NULL_ALLBINARY_SENSOR(): AllBinarySensor | null {
        if (!AllBinarySensor.js_NULL_ALLBINARY_SENSOR) {
            AllBinarySensor.js_NULL_ALLBINARY_SENSOR = true;
            AllBinarySensor.jv_NULL_ALLBINARY_SENSOR = new AllBinarySensor().jinit_AllBinarySensor_0();
        }
        return AllBinarySensor.jv_NULL_ALLBINARY_SENSOR;
    }
    static set NULL_ALLBINARY_SENSOR(value: AllBinarySensor | null) {
        AllBinarySensor.js_NULL_ALLBINARY_SENSOR = true;
        AllBinarySensor.jv_NULL_ALLBINARY_SENSOR = value;
    }
    @lazy static max: i32 = 100;
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;

    jfields_AllBinarySensor(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    }
    

    jinit_AllBinarySensor_0(): AllBinarySensor {
        super.jinit_JObject_0();
        this.jfields_AllBinarySensor();
        return this;
    }
    

    init(): void {
    }
    

    update(): void {
    }
    

    static setMax(max: i32): void {
        AllBinarySensor.max = max;
    }
    

    static getMax(): i32 {
        return AllBinarySensor.max;
    }
    

    getId(): i32 {
        return AllBinarySensor.getMax();
    }
    

    shutdown(): void {
        this.logUtil!.putF(this.commonStrings!.START, this, "shutdown"); if (JThrowable.pending !== null) return;
    }
    

    onSensorChange(): void {
        ForcedLogUtil.log(this.commonStrings!.NOT_IMPLEMENTED, this); if (JThrowable.pending !== null) return;
    }
}

