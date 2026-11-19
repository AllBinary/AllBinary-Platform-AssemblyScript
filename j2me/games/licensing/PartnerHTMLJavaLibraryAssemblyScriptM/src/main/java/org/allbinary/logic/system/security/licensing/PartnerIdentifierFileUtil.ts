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
// package org.allbinary.logic.system.security.licensing
// import org.allbinary.data.resource.ResourceUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonStrings

@global export class PartnerIdentifierFileUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.security.licensing.PartnerIdentifierFileUtil";
    }
    @lazy static jv_instance: PartnerIdentifierFileUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): PartnerIdentifierFileUtil | null {
        if (!PartnerIdentifierFileUtil.js_instance) {
            PartnerIdentifierFileUtil.js_instance = true;
            PartnerIdentifierFileUtil.jv_instance = new PartnerIdentifierFileUtil().jinit_PartnerIdentifierFileUtil_0();
        }
        return PartnerIdentifierFileUtil.jv_instance;
    }
    static set instance(value: PartnerIdentifierFileUtil | null) {
        PartnerIdentifierFileUtil.js_instance = true;
        PartnerIdentifierFileUtil.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    FILE_NAME: string | null = null;

    jfields_PartnerIdentifierFileUtil(): void {
    this.logUtil = LogUtil.getInstance();
    this.FILE_NAME = "partner.txt";
    }

    jinit_PartnerIdentifierFileUtil_0(): PartnerIdentifierFileUtil {
        super.jinit_JObject_0();
        this.jfields_PartnerIdentifierFileUtil();
        return this;
    }
    

    static getInstance(): PartnerIdentifierFileUtil | null {
        return PartnerIdentifierFileUtil.instance;
    }
    

    get(): string | null {
        do {
            let resourceUtil: ResourceUtil | null = ResourceUtil.getInstance(); if (JThrowable.pending !== null) break;
            let partnerString: string | null = StringUtil.getInstance()!.EMPTY_STRING; if (JThrowable.pending !== null) break;
            return partnerString;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.GET, e); if (JThrowable.pending !== null) return null;
            return StringUtil.getInstance()!.NULL_STRING;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

