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
// import org.allbinary.game.configuration.GameConfigurationCentral

@global export class AllBinaryVibration extends AllBinaryVibrationME {

    jclassName(): string {
        return "org.allbinary.media.AllBinaryVibration";
    }
    @lazy static jv_VIBRATION: AllBinaryVibrationME | null = null;
    @lazy static js_VIBRATION: bool = false;
    static get VIBRATION(): AllBinaryVibrationME | null {
        if (!AllBinaryVibration.js_VIBRATION) {
            AllBinaryVibration.js_VIBRATION = true;
            AllBinaryVibration.jv_VIBRATION = AllBinaryNoVibration.NO_VIBRATION;
        }
        return AllBinaryVibration.jv_VIBRATION;
    }
    static set VIBRATION(value: AllBinaryVibrationME | null) {
        AllBinaryVibration.js_VIBRATION = true;
        AllBinaryVibration.jv_VIBRATION = value;
    }
    

    jinit_AllBinaryVibration_0(): AllBinaryVibration {
        super.jinit_AllBinaryVibrationME_0();
        return this;
    }
    

    static getInstance(): AllBinaryVibrationME | null {
        return AllBinaryVibration.VIBRATION;
    }
    

    static init(): void {
        if (GameConfigurationCentral.getInstance()!.VIBRATION!.getValue()!.intValue() == 0) {
            AllBinaryVibration.VIBRATION = AllBinaryNoVibration.NO_VIBRATION;
        } else {
            AllBinaryVibration.VIBRATION = new AllBinaryVibration().jinit_AllBinaryVibration_0(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    vibrate(duration: i32, type: i32, volume: i32): void {
    }
}

