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
// package org.allbinary.logic.io

@global export class InputOutputTypeData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.InputOutputTypeData";
    }
    @lazy static jv_instance: InputOutputTypeData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): InputOutputTypeData | null {
        if (!InputOutputTypeData.js_instance) {
            InputOutputTypeData.js_instance = true;
            InputOutputTypeData.jv_instance = new InputOutputTypeData().jinit_InputOutputTypeData_0();
        }
        return InputOutputTypeData.jv_instance;
    }
    static set instance(value: InputOutputTypeData | null) {
        InputOutputTypeData.js_instance = true;
        InputOutputTypeData.jv_instance = value;
    }
    NAME: string | null = null;
    FILE: string | null = null;
    RESPONSE: string | null = null;
    DB: string | null = null;
    JSP: string | null = null;
    JSP_FRAGMENT: string | null = null;
    PHP: string | null = null;
    ASP: string | null = null;
    PL: string | null = null;
    DEFAULT: string | null = null;
    DEFAULT_FRAGMENT: string | null = null;

    jfields_InputOutputTypeData(): void {
    this.NAME = "INPUT_OUTPUT_TYPE_NAME";
    this.FILE = "INPUT_OUTPUT_TYPE_FILE";
    this.RESPONSE = "INPUT_OUTPUT_TYPE_RESPONSE";
    this.DB = "INPUT_OUTPUT_TYPE_DB";
    this.JSP = "jsp";
    this.JSP_FRAGMENT = "jspf";
    this.PHP = "php";
    this.ASP = "asp";
    this.PL = "pl";
    this.DEFAULT = this.JSP;
    this.DEFAULT_FRAGMENT = this.JSP_FRAGMENT;
    }
    

    static getInstance(): InputOutputTypeData | null {
        return InputOutputTypeData.instance;
    }
    

    jinit_InputOutputTypeData_0(): InputOutputTypeData {
        super.jinit_JObject_0();
        this.jfields_InputOutputTypeData();
        return this;
    }
}

