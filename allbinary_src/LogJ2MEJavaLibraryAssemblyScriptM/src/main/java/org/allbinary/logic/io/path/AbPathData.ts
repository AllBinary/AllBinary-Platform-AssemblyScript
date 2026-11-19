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
// package org.allbinary.logic.io.path
// import org.allbinary.logic.io.file.FilePathData
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonSeps

@global export class AbPathData extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.path.AbPathData";
    }
    @lazy static jv_instance: AbPathData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): AbPathData | null {
        if (!AbPathData.js_instance) {
            AbPathData.js_instance = true;
            AbPathData.jv_instance = new AbPathData().jinit_AbPathData_0();
        }
        return AbPathData.jv_instance;
    }
    static set instance(value: AbPathData | null) {
        AbPathData.js_instance = true;
        AbPathData.jv_instance = value;
    }
    EXTENSION_SEP: string | null = null;
    SEPARATORCHAR: u16 = 0;
    SEPARATOR: string | null = null;

    jfields_AbPathData(): void {
    this.EXTENSION_SEP = CommonSeps.getInstance()!.PERIOD;
    this.SEPARATORCHAR = (<u16>0x2F);
    this.SEPARATOR = CommonSeps.getInstance()!.FORWARD_SLASH;
    }
    

    static getInstance(): AbPathData | null {
        return AbPathData.instance;
    }
    

    jinit_AbPathData_0(): AbPathData {
        super.jinit_JObject_0();
        this.jfields_AbPathData();
        return this;
    }
}

