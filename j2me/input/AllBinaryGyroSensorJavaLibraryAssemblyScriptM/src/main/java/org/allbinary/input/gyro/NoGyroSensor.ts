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
// import org.allbinary.input.AllBinarySensorListener
// import org.allbinary.logic.math.Orientation

@global export class NoGyroSensor extends AllBinaryOrientationSensor implements AllBinarySensorListener {

    jclassName(): string {
        return "org.allbinary.input.gyro.NoGyroSensor";
    }
    

    jinit_NoGyroSensor_0(): NoGyroSensor {
        super.jinit_AllBinaryOrientationSensor_0();
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getOrientation(): Orientation | null {
        return Orientation.NONE;
    }
    

    onSensorChange(): void {
    }
}

