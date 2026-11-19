/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// package org.allbinary.game.configuration.persistance
// import javax.microedition.rms.RecordFilter

@global export class NullRecordFilter extends JObject implements RecordFilter {

    jclassName(): string {
        return "org.allbinary.game.configuration.persistance.NullRecordFilter";
    }
    @lazy static jv_NULL_RECORD_FILTER: NullRecordFilter | null = null;
    @lazy static js_NULL_RECORD_FILTER: bool = false;
    static get NULL_RECORD_FILTER(): NullRecordFilter | null {
        if (!NullRecordFilter.js_NULL_RECORD_FILTER) {
            NullRecordFilter.js_NULL_RECORD_FILTER = true;
            NullRecordFilter.jv_NULL_RECORD_FILTER = new NullRecordFilter().jinit_NullRecordFilter_0();
        }
        return NullRecordFilter.jv_NULL_RECORD_FILTER;
    }
    static set NULL_RECORD_FILTER(value: NullRecordFilter | null) {
        NullRecordFilter.js_NULL_RECORD_FILTER = true;
        NullRecordFilter.jv_NULL_RECORD_FILTER = value;
    }

    jinit_NullRecordFilter_0(): NullRecordFilter {
        super.jinit_JObject_0();
        return this;
    }
    

    matches(candidate: StaticArray<i8> | null): bool {
        return true;
    }
}

