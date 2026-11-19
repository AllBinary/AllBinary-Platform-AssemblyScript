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
// package org.allbinary.util
// import jsinterop.annotations.JsType
// import java.util.Enumeration
// import jsinterop.annotations.JsMethod

//ArkTs does not have this.  So this is for the ArkTs build.
@global export class EnumerationUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.util.EnumerationUtil";
    }
    @lazy static jv_instance: EnumerationUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): EnumerationUtil | null {
        if (!EnumerationUtil.js_instance) {
            EnumerationUtil.js_instance = true;
            EnumerationUtil.jv_instance = new EnumerationUtil().jinit_EnumerationUtil_0();
        }
        return EnumerationUtil.jv_instance;
    }
    static set instance(value: EnumerationUtil | null) {
        EnumerationUtil.js_instance = true;
        EnumerationUtil.jv_instance = value;
    }

    jinit_EnumerationUtil_0(): EnumerationUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): EnumerationUtil | null {
        return EnumerationUtil.instance;
    }
    

    hasMoreElements(enumeration: JEnumeration | null): bool {
        return enumeration!.hasMoreElements();
    }
    

    nextElement(enumeration: JEnumeration | null): Object | null {
        return enumeration!.nextElement();
    }
    

    getAsArray(enumeration: JEnumeration | null): StaticArray<Object | null> | null {
        let basicArrayList: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return null;
        while (this.hasMoreElements(enumeration)) {
            basicArrayList!.add(this.nextElement(enumeration)); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return basicArrayList!.toArray();
    }
}

