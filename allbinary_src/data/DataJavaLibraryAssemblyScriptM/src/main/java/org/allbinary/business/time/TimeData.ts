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
// package org.allbinary.business.time

@global export class TimeData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.time.TimeData";
    }
    @lazy static jv_instance: TimeData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TimeData | null {
        if (!TimeData.js_instance) {
            TimeData.js_instance = true;
            TimeData.jv_instance = new TimeData().jinit_TimeData_0();
        }
        return TimeData.jv_instance;
    }
    static set instance(value: TimeData | null) {
        TimeData.js_instance = true;
        TimeData.jv_instance = value;
    }
    NAME: string | null = null;
    START: string | null = null;
    END: string | null = null;

    jfields_TimeData(): void {
    this.NAME = "TIME_NAME";
    this.START = "TIME_START";
    this.END = "TIME_END";
    }
    

    static getInstance(): TimeData | null {
        return TimeData.instance;
    }
    

    jinit_TimeData_0(): TimeData {
        super.jinit_JObject_0();
        this.jfields_TimeData();
        return this;
    }
}

