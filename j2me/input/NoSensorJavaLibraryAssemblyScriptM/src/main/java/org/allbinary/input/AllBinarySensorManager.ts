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
// import org.allbinary.input.accelerometer.AccelerometerSensorFactory
// import org.allbinary.input.gyro.GyroSensorFactory
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class AllBinarySensorManager extends JObject {

    jclassName(): string {
        return "org.allbinary.input.AllBinarySensorManager";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!AllBinarySensorManager.js_instance) {
            AllBinarySensorManager.js_instance = true;
            AllBinarySensorManager.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return AllBinarySensorManager.jv_instance;
    }
    static set instance(value: Object | null) {
        AllBinarySensorManager.js_instance = true;
        AllBinarySensorManager.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    ORIENTATION_SENSOR_INPUT: string | null = null;
    ORIENTATION_TYPE: string | null = null;
    list: BasicArrayList | null = null;

    jfields_AllBinarySensorManager(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.ORIENTATION_SENSOR_INPUT = "Orientation Sensor Input";
    this.ORIENTATION_TYPE = "Orientation Type";
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    }
    

    static getInstance(): AllBinarySensorManager | null {
        if (AllBinarySensorManager.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            AllBinarySensorManager.instance = new AllBinarySensorManager().jinit_AllBinarySensorManager_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<AllBinarySensorManager | null>(AllBinarySensorManager.instance);
    }
    

    jinit_AllBinarySensorManager_0(): AllBinarySensorManager {
        super.jinit_JObject_0();
        this.jfields_AllBinarySensorManager();
        do {
            GyroSensorFactory.init(); if (JThrowable.pending !== null) break;
            AccelerometerSensorFactory.init(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.CONSTRUCTOR, e); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    init(): void {
    }
    

    getSensorNamesList(): BasicArrayList | null {
        return this.list;
    }
    

    shutdown(): void {
    }
}

