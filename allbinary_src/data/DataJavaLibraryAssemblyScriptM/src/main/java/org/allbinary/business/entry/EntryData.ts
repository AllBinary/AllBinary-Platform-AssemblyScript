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
// package org.allbinary.business.entry

@global export class EntryData extends JObject {

    jclassName(): string {
        return "org.allbinary.business.entry.EntryData";
    }
    @lazy static jv_instance: EntryData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): EntryData | null {
        if (!EntryData.js_instance) {
            EntryData.js_instance = true;
            EntryData.jv_instance = new EntryData().jinit_EntryData_0();
        }
        return EntryData.jv_instance;
    }
    static set instance(value: EntryData | null) {
        EntryData.js_instance = true;
        EntryData.jv_instance = value;
    }
    ID: string | null = null;
    ENCRYPTION: string | null = null;
    TIMECREATED: string | null = null;
    LASTMODIFIED: string | null = null;
    DEFAULT: string | null = null;
    SPECIAL: string | null = null;
    ENABLE: string | null = null;
    YES: string | null = null;
    NO: string | null = null;

    jfields_EntryData(): void {
    this.ID = "ENTRY_ID";
    this.ENCRYPTION = "ENTRY_ENCRYPTION";
    this.TIMECREATED = "ENTRY_TIMECREATED";
    this.LASTMODIFIED = "ENTRY_LASTMODIFIED";
    this.DEFAULT = "ENTRY_DEFAULT";
    this.SPECIAL = "ENTRY_SPECIAL";
    this.ENABLE = "ENTRY_ENABLE";
    this.YES = "Yes";
    this.NO = "No";
    }
    

    static getInstance(): EntryData | null {
        return EntryData.instance;
    }
    

    jinit_EntryData_0(): EntryData {
        super.jinit_JObject_0();
        this.jfields_EntryData();
        return this;
    }
}

