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
// import org.allbinary.game.input.CompleteMotionGestureInputEventListenerInterface
// import org.allbinary.game.input.motion.action.NoCompleteMotionGestureInputEventListener
// import org.allbinary.input.AllBinarySensor
// import org.allbinary.logic.math.Orientation

@global export class AllBinaryOrientationSensor extends AllBinarySensor {

    jclassName(): string {
        return "org.allbinary.input.gyro.AllBinaryOrientationSensor";
    }
    @lazy static jv_NULL_ALLBINARY_ORIENTATION_SENSOR: AllBinaryOrientationSensor | null = null;
    @lazy static js_NULL_ALLBINARY_ORIENTATION_SENSOR: bool = false;
    static get NULL_ALLBINARY_ORIENTATION_SENSOR(): AllBinaryOrientationSensor | null {
        if (!AllBinaryOrientationSensor.js_NULL_ALLBINARY_ORIENTATION_SENSOR) {
            AllBinaryOrientationSensor.js_NULL_ALLBINARY_ORIENTATION_SENSOR = true;
            AllBinaryOrientationSensor.jv_NULL_ALLBINARY_ORIENTATION_SENSOR = new AllBinaryOrientationSensor().jinit_AllBinaryOrientationSensor_0();
        }
        return AllBinaryOrientationSensor.jv_NULL_ALLBINARY_ORIENTATION_SENSOR;
    }
    static set NULL_ALLBINARY_ORIENTATION_SENSOR(value: AllBinaryOrientationSensor | null) {
        AllBinaryOrientationSensor.js_NULL_ALLBINARY_ORIENTATION_SENSOR = true;
        AllBinaryOrientationSensor.jv_NULL_ALLBINARY_ORIENTATION_SENSOR = value;
    }
    listener: CompleteMotionGestureInputEventListenerInterface | null = null;

    jfields_AllBinaryOrientationSensor(): void {
    this.listener = NoCompleteMotionGestureInputEventListener.getInstance();
    }
    

    setListener(completeMotionGestureInputEventListenerInterface: CompleteMotionGestureInputEventListenerInterface | null): void {
        this.listener = completeMotionGestureInputEventListenerInterface;
    }
    

    jinit_AllBinaryOrientationSensor_0(): AllBinaryOrientationSensor {
        super.jinit_AllBinarySensor_0();
        this.jfields_AllBinaryOrientationSensor();
        return this;
    }
    

    getOrientation(): Orientation | null {
        { JThrowable.raise(new JException().jinit_JException_1(this.commonStrings!.NOT_IMPLEMENTED)); return null; }
        return null;
    }
}

