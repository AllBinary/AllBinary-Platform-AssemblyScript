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
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonStrings

@global export class PropertyInitUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.PropertyInitUtil";
    }
    @lazy static jv_instance: PropertyInitUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): PropertyInitUtil | null {
        if (!PropertyInitUtil.js_instance) {
            PropertyInitUtil.js_instance = true;
            PropertyInitUtil.jv_instance = new PropertyInitUtil().jinit_PropertyInitUtil_0();
        }
        return PropertyInitUtil.jv_instance;
    }
    static set instance(value: PropertyInitUtil | null) {
        PropertyInitUtil.js_instance = true;
        PropertyInitUtil.jv_instance = value;
    }

    jinit_PropertyInitUtil_0(): PropertyInitUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance1(value: i32): PropertyInitUtil | null {
        let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
        let logUtil: LogUtil | null = LogUtil.getInstance(); if (JThrowable.pending !== null) return null;
        logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("PropertyInitUtil: ")!.appendint(value)), logUtil, commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return null;
        return PropertyInitUtil.instance;
    }
}

