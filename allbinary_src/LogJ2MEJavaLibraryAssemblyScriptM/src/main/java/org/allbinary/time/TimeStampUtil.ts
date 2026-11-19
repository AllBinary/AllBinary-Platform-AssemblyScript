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
// package org.allbinary.time
// import java.util.Calendar
// import java.util.Date

//ActualPlatform
@global export class TimeStampUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.time.TimeStampUtil";
    }
    @lazy static jv_instance: TimeStampUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TimeStampUtil | null {
        if (!TimeStampUtil.js_instance) {
            TimeStampUtil.js_instance = true;
            TimeStampUtil.jv_instance = new TimeStampUtil().jinit_TimeStampUtil_0();
        }
        return TimeStampUtil.jv_instance;
    }
    static set instance(value: TimeStampUtil | null) {
        TimeStampUtil.js_instance = true;
        TimeStampUtil.jv_instance = value;
    }
    

    static getInstance(): TimeStampUtil | null {
        return TimeStampUtil.instance;
    }
    

    jinit_TimeStampUtil_0(): TimeStampUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    getAsString(): string | null {
        let calendar: JCalendar | null = JCalendar.getInstance(); if (JThrowable.pending !== null) return null;
        let date: JDate | null = calendar!.getTime(); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(date);
    }
}

