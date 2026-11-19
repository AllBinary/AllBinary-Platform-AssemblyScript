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
// package org.allbinary.input.accelerometer
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.game.configuration.feature.SensorFeatureFactory
// import org.allbinary.input.gyro.AllBinaryOrientationSensor

@global export class AccelerometerSensorFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.input.accelerometer.AccelerometerSensorFactory";
    }
    @lazy static jv_allBinaryAccelerometerSensor: AllBinaryOrientationSensor | null = null;
    @lazy static js_allBinaryAccelerometerSensor: bool = false;
    static get allBinaryAccelerometerSensor(): AllBinaryOrientationSensor | null {
        if (!AccelerometerSensorFactory.js_allBinaryAccelerometerSensor) {
            AccelerometerSensorFactory.js_allBinaryAccelerometerSensor = true;
            AccelerometerSensorFactory.jv_allBinaryAccelerometerSensor = AllBinaryOrientationSensor.NULL_ALLBINARY_ORIENTATION_SENSOR;
        }
        return AccelerometerSensorFactory.jv_allBinaryAccelerometerSensor;
    }
    static set allBinaryAccelerometerSensor(value: AllBinaryOrientationSensor | null) {
        AccelerometerSensorFactory.js_allBinaryAccelerometerSensor = true;
        AccelerometerSensorFactory.jv_allBinaryAccelerometerSensor = value;
    }

    jinit_AccelerometerSensorFactory_0(): AccelerometerSensorFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static init(): void {
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return;
        let sensorFeatureFactory: SensorFeatureFactory | null = SensorFeatureFactory.getInstance(); if (JThrowable.pending !== null) return;
        if (features!.isFeature(sensorFeatureFactory!.ORIENTATION_SENSORS)) {
            { JThrowable.raise(new JException().jinit_JException_1("No Orientation Sensors")); return; }
        } else if (features!.isFeature(sensorFeatureFactory!.SIMULATED_ORIENTATION_SENSORS)) {
            { JThrowable.raise(new JException().jinit_JException_1("No Simulation Sensors")); return; }
        } else if (features!.isFeature(sensorFeatureFactory!.NO_ORIENTATION)) {
            AccelerometerSensorFactory.allBinaryAccelerometerSensor = new NoAccelerometerSensor().jinit_NoAccelerometerSensor_0(); if (JThrowable.pending !== null) return;
        } else {
            { JThrowable.raise(new JException().jinit_JException_1("Not Such SensorFeature")); return; }
        } if (JThrowable.pending !== null) return;
    }
    

    static getInstance(): AllBinaryOrientationSensor | null {
        return AccelerometerSensorFactory.allBinaryAccelerometerSensor;
    }
}

