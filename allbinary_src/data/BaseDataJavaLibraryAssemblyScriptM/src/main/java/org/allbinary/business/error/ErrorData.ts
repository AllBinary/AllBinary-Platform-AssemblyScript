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
// package org.allbinary.business.error

@global export class ErrorData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.error.ErrorData";
    }
    @lazy static jv_instance: ErrorData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ErrorData | null {
        if (!ErrorData.js_instance) {
            ErrorData.js_instance = true;
            ErrorData.jv_instance = new ErrorData().jinit_ErrorData_0();
        }
        return ErrorData.jv_instance;
    }
    static set instance(value: ErrorData | null) {
        ErrorData.js_instance = true;
        ErrorData.jv_instance = value;
    }
    NAME: string | null = null;
    TEXT: string | null = null;

    jfields_ErrorData(): void {
    this.NAME = "ERROR_NAME";
    this.TEXT = "ERROR_TEXT";
    }
    

    static getInstance(): ErrorData | null {
        return ErrorData.instance;
    }
    

    jinit_ErrorData_0(): ErrorData {
        super.jinit_JObject_0();
        this.jfields_ErrorData();
        return this;
    }
}

