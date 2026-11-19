/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// package org.allbinary.persistance
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.string.CommonSeps

@global export class PlatformRecordIdUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.persistance.PlatformRecordIdUtil";
    }
    @lazy static jv_instance: PlatformRecordIdUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): PlatformRecordIdUtil | null {
        if (!PlatformRecordIdUtil.js_instance) {
            PlatformRecordIdUtil.js_instance = true;
            PlatformRecordIdUtil.jv_instance = new PlatformRecordIdUtil().jinit_PlatformRecordIdUtil_0();
        }
        return PlatformRecordIdUtil.jv_instance;
    }
    static set instance(value: PlatformRecordIdUtil | null) {
        PlatformRecordIdUtil.js_instance = true;
        PlatformRecordIdUtil.jv_instance = value;
    }
    PLATFORM_SHORT_NAME: string | null = null;

    jfields_PlatformRecordIdUtil(): void {
    this.PLATFORM_SHORT_NAME = "JSE";
    }

    jinit_PlatformRecordIdUtil_0(): PlatformRecordIdUtil {
        super.jinit_JObject_0();
        this.jfields_PlatformRecordIdUtil();
        return this;
    }
    

    static getInstance(): PlatformRecordIdUtil | null {
        return PlatformRecordIdUtil.instance;
    }
    

    getRecordId(abeClientInformation: AbeClientInformationInterface | null, baseRecordId: string | null): string | null {
        return JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(abeClientInformation!.toShortString())!.append(CommonSeps.getInstance()!.UNDERSCORE)!.append(this.PLATFORM_SHORT_NAME)!.append(baseRecordId));
    }
}

