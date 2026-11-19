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
// package org.allbinary.logic
// import org.allbinary.util.ABHashMap
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.ABStack
// import org.allbinary.util.ABVector

//ActualPlatform
@global export class StdUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.StdUtil";
    }
    @lazy static jv_instance: StdUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): StdUtil | null {
        if (!StdUtil.js_instance) {
            StdUtil.js_instance = true;
            StdUtil.jv_instance = new StdUtil().jinit_StdUtil_0();
        }
        return StdUtil.jv_instance;
    }
    static set instance(value: StdUtil | null) {
        StdUtil.js_instance = true;
        StdUtil.jv_instance = value;
    }
    EMPTY_VECTOR: ABVector | null = null;
    NULL_TABLE: ABHashtable | null = null;
    NULL_MAP: ABHashMap | null = null;

    jfields_StdUtil(): void {
    this.EMPTY_VECTOR = this.createVector();
    this.NULL_TABLE = this.createHashtable();
    this.NULL_MAP = this.createHashMap();
    }

    jinit_StdUtil_0(): StdUtil {
        super.jinit_JObject_0();
        this.jfields_StdUtil();
        return this;
    }
    

    static getInstance(): StdUtil | null {
        return StdUtil.instance;
    }
    

    createStack(): ABStack | null {
        return new ABStack().jinit_ABStack_0();
    }
    

    createVector(): ABVector | null {
        return new ABVector().jinit_ABVector_0();
    }
    

    createHashtable(): ABHashtable | null {
        return new ABHashtable().jinit_ABHashtable_0();
    }
    

    createHashMap(): ABHashMap | null {
        return new ABHashMap().jinit_ABHashMap_0();
    }
}

