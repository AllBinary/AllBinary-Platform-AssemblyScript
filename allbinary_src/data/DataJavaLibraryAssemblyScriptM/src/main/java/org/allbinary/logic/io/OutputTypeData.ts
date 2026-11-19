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

@global export class OutputTypeData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.OutputTypeData";
    }
    @lazy static jv_instance: OutputTypeData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): OutputTypeData | null {
        if (!OutputTypeData.js_instance) {
            OutputTypeData.js_instance = true;
            OutputTypeData.jv_instance = new OutputTypeData().jinit_OutputTypeData_0();
        }
        return OutputTypeData.jv_instance;
    }
    static set instance(value: OutputTypeData | null) {
        OutputTypeData.js_instance = true;
        OutputTypeData.jv_instance = value;
    }
    NAME: string | null = null;

    jfields_OutputTypeData(): void {
    this.NAME = "OUTPUT_TYPE_NAME";
    }
    

    jinit_OutputTypeData_0(): OutputTypeData {
        super.jinit_JObject_0();
        this.jfields_OutputTypeData();
        return this;
    }
    

    static getInstance(): OutputTypeData | null {
        return OutputTypeData.instance;
    }
}

