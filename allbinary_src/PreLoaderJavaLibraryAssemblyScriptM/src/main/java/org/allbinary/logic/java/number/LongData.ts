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
// package org.allbinary.logic.java.number

@global export class LongData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.java.number.LongData";
    }
    @lazy static jv_MAX_LONG_LENGTH: i32 = 0;
    @lazy static js_MAX_LONG_LENGTH: bool = false;
    static get MAX_LONG_LENGTH(): i32 {
        if (!LongData.js_MAX_LONG_LENGTH) {
            LongData.js_MAX_LONG_LENGTH = true;
            LongData.jv_MAX_LONG_LENGTH = JString.length0(JObject.jtoString(new JLong().jinit_JLong_1(JLong.MAX_VALUE)));
        }
        return LongData.jv_MAX_LONG_LENGTH;
    }
    static set MAX_LONG_LENGTH(value: i32) {
        LongData.js_MAX_LONG_LENGTH = true;
        LongData.jv_MAX_LONG_LENGTH = value;
    }
    

    jinit_LongData_0(): LongData {
        super.jinit_JObject_0();
        return this;
    }
}

