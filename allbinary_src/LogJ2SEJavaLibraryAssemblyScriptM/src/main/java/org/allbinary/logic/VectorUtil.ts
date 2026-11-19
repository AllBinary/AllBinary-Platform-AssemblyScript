/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2026 AllBinary 
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
// package org.allbinary.logic
// import java.util.Vector

@global export class VectorUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.VectorUtil";
    }
    @lazy static jv_instance: VectorUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): VectorUtil | null {
        if (!VectorUtil.js_instance) {
            VectorUtil.js_instance = true;
            VectorUtil.jv_instance = new VectorUtil().jinit_VectorUtil_0();
        }
        return VectorUtil.jv_instance;
    }
    static set instance(value: VectorUtil | null) {
        VectorUtil.js_instance = true;
        VectorUtil.jv_instance = value;
    }

    jinit_VectorUtil_0(): VectorUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): VectorUtil | null {
        return VectorUtil.instance;
    }
    

    getSize(anyType: Object | null): i32 {
        let vector: JVector | null = changetype<JVector | null>(anyType);
        return vector!.size();
    }
    

    elementAt(anyType: Object | null, index: i32): Object | null {
        let vector: JVector | null = changetype<JVector | null>(anyType);
        return vector!.elementAt(index);
    }
}

