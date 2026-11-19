/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// package org.allbinary.logic.math

@global export class J2SEMath extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.math.J2SEMath";
    }
    @lazy static jv_instance: J2SEMath | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): J2SEMath | null {
        if (!J2SEMath.js_instance) {
            J2SEMath.js_instance = true;
            J2SEMath.jv_instance = new J2SEMath().jinit_J2SEMath_0();
        }
        return J2SEMath.jv_instance;
    }
    static set instance(value: J2SEMath | null) {
        J2SEMath.js_instance = true;
        J2SEMath.jv_instance = value;
    }

    jinit_J2SEMath_0(): J2SEMath {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): J2SEMath | null {
        return J2SEMath.instance;
    }
    

    round(value: f32): i32 {
        return JMath.toInt(value);
    }
    

    abs(value: f32): f32 {
        return ((value < (<f32>0.0)) ? -value : value);
    }
    

    absdouble(value: f64): f64 {
        return ((value < 0.0) ? -value : value);
    }
}

