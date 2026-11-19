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
// package org.allbinary.math
// import jsinterop.annotations.JsType
// import jsinterop.annotations.JsMethod
// import jsinterop.annotations.JsConstructor

@global export class Angle extends JObject {

    jclassName(): string {
        return "org.allbinary.math.Angle";
    }
    value: i16 = 0;

    jfields_Angle(): void {
    
    }
    

    jinit_Angle_1(angle: i16): Angle {
        super.jinit_JObject_0();
        this.jfields_Angle();
        this.value = angle;
        return this;
    }
    

    getValue(): i16 {
        return this.value;
    }
}

