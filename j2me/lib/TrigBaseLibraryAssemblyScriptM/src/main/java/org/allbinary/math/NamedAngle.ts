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
// package org.allbinary.math
// import jsinterop.annotations.JsType
// import jsinterop.annotations.JsProperty
// import jsinterop.annotations.JsConstructor

@global export class NamedAngle extends Angle {

    jclassName(): string {
        return "org.allbinary.math.NamedAngle";
    }
    name: string | null = null;

    jfields_NamedAngle(): void {
    
    }
    

    jinit_NamedAngle_2(angle: i16, name: string | null): NamedAngle {
        super.jinit_Angle_1(angle);
        this.jfields_NamedAngle();
        this.name = name;
        return this;
    }
}

