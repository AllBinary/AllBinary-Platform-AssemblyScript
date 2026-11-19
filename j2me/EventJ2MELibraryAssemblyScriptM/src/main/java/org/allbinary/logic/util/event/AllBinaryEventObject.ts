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
// package org.allbinary.logic.util.event
// import jsinterop.annotations.JsType
// import org.allbinary.logic.NullUtil
// import jsinterop.annotations.JsMethod
// import jsinterop.annotations.JsConstructor
// import jsinterop.annotations.JsProperty

@global export class AllBinaryEventObject extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.util.event.AllBinaryEventObject";
    }
    @lazy static jv_NULL_EVENT: AllBinaryEventObject | null = null;
    @lazy static js_NULL_EVENT: bool = false;
    static get NULL_EVENT(): AllBinaryEventObject | null {
        if (!AllBinaryEventObject.js_NULL_EVENT) {
            AllBinaryEventObject.js_NULL_EVENT = true;
            AllBinaryEventObject.jv_NULL_EVENT = new AllBinaryEventObject().jinit_AllBinaryEventObject_1(NullUtil.getInstance()!.NULL_OBJECT);
        }
        return AllBinaryEventObject.jv_NULL_EVENT;
    }
    static set NULL_EVENT(value: AllBinaryEventObject | null) {
        AllBinaryEventObject.js_NULL_EVENT = true;
        AllBinaryEventObject.jv_NULL_EVENT = value;
    }
    source: Object | null = null;

    jfields_AllBinaryEventObject(): void {
    
    }
    

    jinit_AllBinaryEventObject_1(anyType: Object | null): AllBinaryEventObject {
        super.jinit_JObject_0();
        this.jfields_AllBinaryEventObject();
        this.source = anyType;
        return this;
    }
    

    getSource(): Object | null {
        return this.source;
    }
    

    setSource(source: Object | null): void {
        this.source = source;
    }
}

