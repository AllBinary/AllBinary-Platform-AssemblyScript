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
// import javax.microedition.rms.RecordComparator

@global export class NullRecordComparator extends JObject implements RecordComparator {

    jclassName(): string {
        return "org.allbinary.game.configuration.persistance.NullRecordComparator";
    }
    @lazy static jv_NULL_RECORD_COMPARATOR: NullRecordComparator | null = null;
    @lazy static js_NULL_RECORD_COMPARATOR: bool = false;
    static get NULL_RECORD_COMPARATOR(): NullRecordComparator | null {
        if (!NullRecordComparator.js_NULL_RECORD_COMPARATOR) {
            NullRecordComparator.js_NULL_RECORD_COMPARATOR = true;
            NullRecordComparator.jv_NULL_RECORD_COMPARATOR = new NullRecordComparator().jinit_NullRecordComparator_0();
        }
        return NullRecordComparator.jv_NULL_RECORD_COMPARATOR;
    }
    static set NULL_RECORD_COMPARATOR(value: NullRecordComparator | null) {
        NullRecordComparator.js_NULL_RECORD_COMPARATOR = true;
        NullRecordComparator.jv_NULL_RECORD_COMPARATOR = value;
    }

    jinit_NullRecordComparator_0(): NullRecordComparator {
        super.jinit_JObject_0();
        return this;
    }
    

    compare(rec1: StaticArray<i8> | null, rec2: StaticArray<i8> | null): i32 {
        return 0;
    }
}

