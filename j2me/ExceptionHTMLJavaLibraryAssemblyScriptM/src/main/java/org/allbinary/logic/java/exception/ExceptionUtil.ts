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
// package org.allbinary.logic.java.exception
// import jsinterop.annotations.JsType

//ActualPlatform
@global export class ExceptionUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.java.exception.ExceptionUtil";
    }
    @lazy static jv_instance: ExceptionUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ExceptionUtil | null {
        if (!ExceptionUtil.js_instance) {
            ExceptionUtil.js_instance = true;
            ExceptionUtil.jv_instance = new ExceptionUtil().jinit_ExceptionUtil_0();
        }
        return ExceptionUtil.jv_instance;
    }
    static set instance(value: ExceptionUtil | null) {
        ExceptionUtil.js_instance = true;
        ExceptionUtil.jv_instance = value;
    }
    @lazy static jv_PRETEND_EXCEPTION: JException | null = null;
    @lazy static js_PRETEND_EXCEPTION: bool = false;
    static get PRETEND_EXCEPTION(): JException | null {
        if (!ExceptionUtil.js_PRETEND_EXCEPTION) {
            ExceptionUtil.js_PRETEND_EXCEPTION = true;
            ExceptionUtil.jv_PRETEND_EXCEPTION = new JException().jinit_JException_1("Not Really An Exception");
        }
        return ExceptionUtil.jv_PRETEND_EXCEPTION;
    }
    static set PRETEND_EXCEPTION(value: JException | null) {
        ExceptionUtil.js_PRETEND_EXCEPTION = true;
        ExceptionUtil.jv_PRETEND_EXCEPTION = value;
    }
    NONE: string | null = null;

    jfields_ExceptionUtil(): void {
    this.NONE = "No Stack Trace";
    }
    

    static getInstance(): ExceptionUtil | null {
        return ExceptionUtil.instance;
    }
    

    jinit_ExceptionUtil_0(): ExceptionUtil {
        super.jinit_JObject_0();
        this.jfields_ExceptionUtil();
        return this;
    }
    

    getStackTrace(e: JThrowable | null): string | null {
        e!.printStackTrace(); if (JThrowable.pending !== null) return null;
        return this.NONE;
    }
}

