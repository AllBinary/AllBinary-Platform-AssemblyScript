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
// package org.allbinary.input.gyro

@global export class GyroSensorFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.input.gyro.GyroSensorFactory";
    }
    @lazy static jv_allBinaryGyroSensor: AllBinaryOrientationSensor | null = null;
    @lazy static js_allBinaryGyroSensor: bool = false;
    static get allBinaryGyroSensor(): AllBinaryOrientationSensor | null {
        if (!GyroSensorFactory.js_allBinaryGyroSensor) {
            GyroSensorFactory.js_allBinaryGyroSensor = true;
            GyroSensorFactory.jv_allBinaryGyroSensor = AllBinaryOrientationSensor.NULL_ALLBINARY_ORIENTATION_SENSOR;
        }
        return GyroSensorFactory.jv_allBinaryGyroSensor;
    }
    static set allBinaryGyroSensor(value: AllBinaryOrientationSensor | null) {
        GyroSensorFactory.js_allBinaryGyroSensor = true;
        GyroSensorFactory.jv_allBinaryGyroSensor = value;
    }

    jinit_GyroSensorFactory_0(): GyroSensorFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static init(): void {
        GyroSensorFactory.allBinaryGyroSensor = new NoGyroSensor().jinit_NoGyroSensor_0(); if (JThrowable.pending !== null) return;
    }
    

    static getInstance(): AllBinaryOrientationSensor | null {
        return GyroSensorFactory.allBinaryGyroSensor;
    }
}

