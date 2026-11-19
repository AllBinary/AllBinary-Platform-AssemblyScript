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
// package org.allbinary.media

@global export class AllBinaryNoVibration extends AllBinaryVibrationME {

    jclassName(): string {
        return "org.allbinary.media.AllBinaryNoVibration";
    }
    @lazy static jv_NO_VIBRATION: AllBinaryVibrationME | null = null;
    @lazy static js_NO_VIBRATION: bool = false;
    static get NO_VIBRATION(): AllBinaryVibrationME | null {
        if (!AllBinaryNoVibration.js_NO_VIBRATION) {
            AllBinaryNoVibration.js_NO_VIBRATION = true;
            AllBinaryNoVibration.jv_NO_VIBRATION = new AllBinaryNoVibration().jinit_AllBinaryNoVibration_0();
        }
        return AllBinaryNoVibration.jv_NO_VIBRATION;
    }
    static set NO_VIBRATION(value: AllBinaryVibrationME | null) {
        AllBinaryNoVibration.js_NO_VIBRATION = true;
        AllBinaryNoVibration.jv_NO_VIBRATION = value;
    }

    jinit_AllBinaryNoVibration_0(): AllBinaryNoVibration {
        super.jinit_AllBinaryVibrationME_0();
        return this;
    }
    

    vibrate(duration: i32, type: i32, volume: i32): void {
    }
}

