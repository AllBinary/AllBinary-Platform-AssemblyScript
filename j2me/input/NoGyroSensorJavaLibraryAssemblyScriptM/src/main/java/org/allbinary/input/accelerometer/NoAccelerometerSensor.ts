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
// import org.allbinary.input.gyro.AllBinaryOrientationSensor
// import org.allbinary.logic.math.Orientation

@global export class NoAccelerometerSensor extends AllBinaryOrientationSensor {

    jclassName(): string {
        return "org.allbinary.input.accelerometer.NoAccelerometerSensor";
    }
    

    jinit_NoAccelerometerSensor_0(): NoAccelerometerSensor {
        super.jinit_AllBinaryOrientationSensor_0();
        return this;
    }
    

    getOrientation(): Orientation | null {
        return Orientation.NONE;
    }
    

    onSensorChange(): void {
    }
}

