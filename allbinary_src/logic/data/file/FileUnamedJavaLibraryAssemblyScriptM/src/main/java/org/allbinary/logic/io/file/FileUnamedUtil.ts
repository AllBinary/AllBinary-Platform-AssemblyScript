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
// package org.allbinary.logic.io.file
// import org.allbinary.string.CommonSeps

@global export class FileUnamedUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.io.file.FileUnamedUtil";
    }
    @lazy static jv_instance: FileUnamedUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): FileUnamedUtil | null {
        if (!FileUnamedUtil.js_instance) {
            FileUnamedUtil.js_instance = true;
            FileUnamedUtil.jv_instance = new FileUnamedUtil().jinit_FileUnamedUtil_0();
        }
        return FileUnamedUtil.jv_instance;
    }
    static set instance(value: FileUnamedUtil | null) {
        FileUnamedUtil.js_instance = true;
        FileUnamedUtil.jv_instance = value;
    }
    commonSeps: CommonSeps | null = null;

    jfields_FileUnamedUtil(): void {
    this.commonSeps = CommonSeps.getInstance();
    }

    jinit_FileUnamedUtil_0(): FileUnamedUtil {
        super.jinit_JObject_0();
        this.jfields_FileUnamedUtil();
        return this;
    }
    

    static getInstance(): FileUnamedUtil | null {
        return FileUnamedUtil.instance;
    }
    

    process(string: string | null): string | null {
        let simplifiedString: string | null = JString.toLowerCase0(string); if (JThrowable.pending !== null) return null;
        simplifiedString = JString.replace2(simplifiedString, this.commonSeps!.SPACE, this.commonSeps!.UNDERSCORE); if (JThrowable.pending !== null) return null;
        simplifiedString = JString.replace2(simplifiedString, this.commonSeps!.DASH, this.commonSeps!.UNDERSCORE); if (JThrowable.pending !== null) return null;
        return simplifiedString;
    }
}

