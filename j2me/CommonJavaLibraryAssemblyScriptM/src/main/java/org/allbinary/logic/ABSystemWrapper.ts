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
// import jsinterop.annotations.JsType

@global export class ABSystemWrapper extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.ABSystemWrapper";
    }
    @lazy static jv_instance: ABSystemWrapper | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ABSystemWrapper | null {
        if (!ABSystemWrapper.js_instance) {
            ABSystemWrapper.js_instance = true;
            ABSystemWrapper.jv_instance = new ABSystemWrapper().jinit_ABSystemWrapper_0();
        }
        return ABSystemWrapper.jv_instance;
    }
    static set instance(value: ABSystemWrapper | null) {
        ABSystemWrapper.js_instance = true;
        ABSystemWrapper.jv_instance = value;
    }

    jinit_ABSystemWrapper_0(): ABSystemWrapper {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): ABSystemWrapper | null {
        return ABSystemWrapper.instance;
    }
    

    arraycopy(src: Object | null, srcPos: i32, dest: Object | null, destPos: i32, length: i32): void {
        JSystem.arraycopy(src, srcPos, dest, destPos, length); if (JThrowable.pending !== null) return;
    }
    

    currentTimeMillis(): i64 {
        return JSystem.currentTimeMillis();
    }
}

