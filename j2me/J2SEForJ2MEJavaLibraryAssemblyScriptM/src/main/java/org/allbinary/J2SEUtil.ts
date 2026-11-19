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
// package org.allbinary
// import java.util.HashMap
// import java.util.Map
// import java.util.Set

//J2SEForJ2ME
@global export class J2SEUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.J2SEUtil";
    }
    @lazy static jv_instance: J2SEUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): J2SEUtil | null {
        if (!J2SEUtil.js_instance) {
            J2SEUtil.js_instance = true;
            J2SEUtil.jv_instance = new J2SEUtil().jinit_J2SEUtil_0();
        }
        return J2SEUtil.jv_instance;
    }
    static set instance(value: J2SEUtil | null) {
        J2SEUtil.js_instance = true;
        J2SEUtil.jv_instance = value;
    }

    jinit_J2SEUtil_0(): J2SEUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): J2SEUtil | null {
        return J2SEUtil.instance;
    }
    

    getHashMapAsArray(hashMap: JHashMap | null): StaticArray<Object | null> | null {
        let objectArray: StaticArray<Object | null> | null = hashMap!.keySet()!.toArray(); if (JThrowable.pending !== null) return null;
        return objectArray;
    }
    

    getMapAsArray(map: JMap | null): StaticArray<Object | null> | null {
        let objectArray: StaticArray<Object | null> | null = map!.keySet()!.toArray(); if (JThrowable.pending !== null) return null;
        return objectArray;
    }
    

    getSetAsArray(set: JSet | null): StaticArray<Object | null> | null {
        let objectArray: StaticArray<Object | null> | null = set!.toArray(); if (JThrowable.pending !== null) return null;
        return objectArray;
    }
}

