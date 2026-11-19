/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// package org.allbinary.graphics.displayable.screen
// import org.allbinary.graphics.GPoint

@global export class DisplayPointScalar extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.displayable.screen.DisplayPointScalar";
    }
    @lazy static jv_instance: DisplayPointScalar | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): DisplayPointScalar | null {
        if (!DisplayPointScalar.js_instance) {
            DisplayPointScalar.js_instance = true;
            DisplayPointScalar.jv_instance = new DisplayPointScalar().jinit_DisplayPointScalar_0();
        }
        return DisplayPointScalar.jv_instance;
    }
    static set instance(value: DisplayPointScalar | null) {
        DisplayPointScalar.js_instance = true;
        DisplayPointScalar.jv_instance = value;
    }

    jinit_DisplayPointScalar_0(): DisplayPointScalar {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): DisplayPointScalar | null {
        return DisplayPointScalar.instance;
    }
    

    processX(value: i32): i32 {
        return value;
    }
    

    processY(value: i32): i32 {
        return value;
    }
    

    process(point: GPoint | null): GPoint | null {
        return point;
    }
}

