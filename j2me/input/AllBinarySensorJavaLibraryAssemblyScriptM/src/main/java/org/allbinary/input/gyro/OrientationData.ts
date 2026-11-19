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

@global export class OrientationData extends JObject {

    jclassName(): string {
        return "org.allbinary.input.gyro.OrientationData";
    }
    @lazy static jv_SINGLETON: OrientationData | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): OrientationData | null {
        if (!OrientationData.js_SINGLETON) {
            OrientationData.js_SINGLETON = true;
            OrientationData.jv_SINGLETON = new OrientationData().jinit_OrientationData_0();
        }
        return OrientationData.jv_SINGLETON;
    }
    static set SINGLETON(value: OrientationData | null) {
        OrientationData.js_SINGLETON = true;
        OrientationData.jv_SINGLETON = value;
    }
    ORIENTATION_SENSOR_INPUT: string | null = null;
    ORIENTATION_TYPE: string | null = null;

    jfields_OrientationData(): void {
    this.ORIENTATION_SENSOR_INPUT = "Orientation Sensor Input";
    this.ORIENTATION_TYPE = "Orientation Type";
    }
    

    jinit_OrientationData_0(): OrientationData {
        super.jinit_JObject_0();
        this.jfields_OrientationData();
        return this;
    }
    

    static getInstance(): OrientationData | null {
        return OrientationData.SINGLETON;
    }
}

