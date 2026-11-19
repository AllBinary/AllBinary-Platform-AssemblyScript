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
// import org.allbinary.input.AllBinarySensor
// import org.allbinary.input.NoAllBinarySensor

@global export class SensorGameUpdateProcessor extends JObject {

    jclassName(): string {
        return "org.allbinary.input.gyro.SensorGameUpdateProcessor";
    }
    inputSensor: AllBinarySensor | null = null;

    jfields_SensorGameUpdateProcessor(): void {
    this.inputSensor = NoAllBinarySensor.getInstance();
    }

    jinit_SensorGameUpdateProcessor_0(): SensorGameUpdateProcessor {
        super.jinit_JObject_0();
        this.jfields_SensorGameUpdateProcessor();
        return this;
    }
    

    setInputSensor(inputSensor: AllBinarySensor | null): void {
        this.inputSensor = inputSensor;
    }
    

    getInputSensor(): AllBinarySensor | null {
        return this.inputSensor;
    }
    

    process(anyType: Object | null): void {
    }
    

    sendNotifications(anyType: Object | null): void {
    }
    

    isAnySensor(): bool {
        if (this.inputSensor == NoAllBinarySensor.getInstance()) {
            return false;
        } else {
            return true;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    setNoSensors(): void {
        this.setInputSensor(NoAllBinarySensor.getInstance()); if (JThrowable.pending !== null) return;
    }
}

