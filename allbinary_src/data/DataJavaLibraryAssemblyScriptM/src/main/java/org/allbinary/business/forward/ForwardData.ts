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
// package org.allbinary.business.forward

@global export class ForwardData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.forward.ForwardData";
    }
    @lazy static jv_instance: ForwardData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ForwardData | null {
        if (!ForwardData.js_instance) {
            ForwardData.js_instance = true;
            ForwardData.jv_instance = new ForwardData().jinit_ForwardData_0();
        }
        return ForwardData.jv_instance;
    }
    static set instance(value: ForwardData | null) {
        ForwardData.js_instance = true;
        ForwardData.jv_instance = value;
    }
    PAGE: string | null = null;
    NAME: string | null = null;
    VALUE: string | null = null;

    jfields_ForwardData(): void {
    this.PAGE = "FORWARD_PAGE";
    this.NAME = "FORWARD_NAME";
    this.VALUE = "FORWARD_VALUE";
    }
    

    jinit_ForwardData_0(): ForwardData {
        super.jinit_JObject_0();
        this.jfields_ForwardData();
        return this;
    }
    

    static getInstance(): ForwardData | null {
        return ForwardData.instance;
    }
}

