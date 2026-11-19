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

@global export class InputTypeData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.InputTypeData";
    }
    @lazy static jv_instance: InputTypeData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): InputTypeData | null {
        if (!InputTypeData.js_instance) {
            InputTypeData.js_instance = true;
            InputTypeData.jv_instance = new InputTypeData().jinit_InputTypeData_0();
        }
        return InputTypeData.jv_instance;
    }
    static set instance(value: InputTypeData | null) {
        InputTypeData.js_instance = true;
        InputTypeData.jv_instance = value;
    }
    NAME: string | null = null;

    jfields_InputTypeData(): void {
    this.NAME = "INPUT_TYPE_NAME";
    }
    

    static getInstance(): InputTypeData | null {
        return InputTypeData.instance;
    }
    

    jinit_InputTypeData_0(): InputTypeData {
        super.jinit_JObject_0();
        this.jfields_InputTypeData();
        return this;
    }
}

