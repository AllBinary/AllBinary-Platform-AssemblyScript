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

@global export class NoAllBinarySensor extends AllBinarySensor {

    jclassName(): string {
        return "org.allbinary.input.NoAllBinarySensor";
    }
    @lazy static jv_instance: NoAllBinarySensor | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): NoAllBinarySensor | null {
        if (!NoAllBinarySensor.js_instance) {
            NoAllBinarySensor.js_instance = true;
            NoAllBinarySensor.jv_instance = new NoAllBinarySensor().jinit_NoAllBinarySensor_0();
        }
        return NoAllBinarySensor.jv_instance;
    }
    static set instance(value: NoAllBinarySensor | null) {
        NoAllBinarySensor.js_instance = true;
        NoAllBinarySensor.jv_instance = value;
    }
    

    static getInstance(): NoAllBinarySensor | null {
        return NoAllBinarySensor.instance;
    }
    

    jinit_NoAllBinarySensor_0(): NoAllBinarySensor {
        super.jinit_AllBinarySensor_0();
        return this;
    }
}

