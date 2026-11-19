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
// import javax.microedition.rms.RecordStore

@global export class NullRecordStore extends RecordStore {

    jclassName(): string {
        return "org.allbinary.game.configuration.persistance.NullRecordStore";
    }
    @lazy static jv_NULL_RECORD_STORE: NullRecordStore | null = null;
    @lazy static js_NULL_RECORD_STORE: bool = false;
    static get NULL_RECORD_STORE(): NullRecordStore | null {
        if (!NullRecordStore.js_NULL_RECORD_STORE) {
            NullRecordStore.js_NULL_RECORD_STORE = true;
            NullRecordStore.jv_NULL_RECORD_STORE = new NullRecordStore().jinit_NullRecordStore_0();
        }
        return NullRecordStore.jv_NULL_RECORD_STORE;
    }
    static set NULL_RECORD_STORE(value: NullRecordStore | null) {
        NullRecordStore.js_NULL_RECORD_STORE = true;
        NullRecordStore.jv_NULL_RECORD_STORE = value;
    }

    jinit_NullRecordStore_0(): NullRecordStore {
        super.jinit_RecordStore_0();
        return this;
    }
}

