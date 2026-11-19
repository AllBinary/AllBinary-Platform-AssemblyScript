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
// package org.allbinary.logic.system.security.licensing.client
// import org.allbinary.logic.string.StringUtil
// import java.io.IOException
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.init.crypt.jcehelper.CryptInterface
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.communication.xmlrpc.XmlRpcAbeClient
// import org.allbinary.logic.java.exception.ExceptionUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.logic.system.security.licensing.AbeClientLicense
// import org.allbinary.logic.system.security.licensing.AbeLicenseInterface
// import org.allbinary.string.CommonLabels
// import org.allbinary.util.ABHashtable
// import org.apache.xmlrpc.XmlRpcClient
// import org.apache.xmlrpc.XmlRpcException

@global export class XmlRpcAbeLicenseRetrievalClient extends XmlRpcAbeClient {

    jclassName(): string {
        return "org.allbinary.logic.system.security.licensing.client.XmlRpcAbeLicenseRetrievalClient";
    }
    logUtil: LogUtil | null = null;

    jfields_XmlRpcAbeLicenseRetrievalClient(): void {
    this.logUtil = LogUtil.getInstance();
    }
    

    jinit_XmlRpcAbeLicenseRetrievalClient_1(clientInfo: AbeClientInformationInterface | null): XmlRpcAbeLicenseRetrievalClient {
        super.jinit_XmlRpcAbeClient_2(clientInfo, "LicServ.getLicense");
        this.jfields_XmlRpcAbeLicenseRetrievalClient();
        return this;
    }
    

    get_2(anyType: Object | null, cryptInterface: CryptInterface | null): Object | null {
        do {
            let server: string | null = this.getClientInfo()!.getLicenseServer(this.getServer()); if (JThrowable.pending !== null) break;
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) break;
            stringBuffer!.append(this.TRYING); if (JThrowable.pending !== null) break;
            stringBuffer!.appendint(this.getServer()); if (JThrowable.pending !== null) break;
            stringBuffer!.append(this.SEP); if (JThrowable.pending !== null) break;
            stringBuffer!.append(server); if (JThrowable.pending !== null) break;
            this.logUtil!.putF(jstr(CommonLabels.getInstance()!.START_LABEL) + jstr(JObject.jtoString(stringBuffer)), this, this.commonStrings!.GET); if (JThrowable.pending !== null) break;
            let param: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            let xmlRpcClient: XmlRpcClient | null = new XmlRpcClient().jinit_XmlRpcClient_1(server); if (JThrowable.pending !== null) break;
            this.setClient(xmlRpcClient); if (JThrowable.pending !== null) break;
            xmlRpcClient!.setBasicAuthentication(StringUtil.getInstance()!.EMPTY_STRING, StringUtil.getInstance()!.EMPTY_STRING); if (JThrowable.pending !== null) break;
            let hashtable: ABHashtable | null = this.getClientInfo()!.toHashtable(); if (JThrowable.pending !== null) break;
            this.logUtil!.putF(jstr(this.CLIENT_INFO) + jstr(JObject.jtoString(hashtable)), this, this.commonStrings!.GET); if (JThrowable.pending !== null) break;
            param!.add(hashtable); if (JThrowable.pending !== null) break;
            let result: Object | null = xmlRpcClient!.executeWithCrypt(this.getRemoteMethod(), param, cryptInterface); if (JThrowable.pending !== null) break;
            this.logUtil!.putF(jstr(this.RESULT) + jstr(JObject.jtoString(result)), this, this.commonStrings!.GET); if (JThrowable.pending !== null) break;
            let resultHashtable: ABHashtable | null = changetype<ABHashtable | null>(result);
            if (!AbeClientLicense.hasRequiredKeys(resultHashtable)) {
                this.logUtil!.putF(this.INVALID, this, this.commonStrings!.GET); if (JThrowable.pending !== null) break;
                return this.tryAnother(anyType);
            } if (JThrowable.pending !== null) break;
            let abeLicenseInterface: AbeLicenseInterface | null = new AbeClientLicense().jinit_AbeClientLicense_1(resultHashtable); if (JThrowable.pending !== null) break;
            this.logUtil!.putF(jstr(this.commonStrings!.END) + jstr(JObject.jtoString(stringBuffer)), this, this.commonStrings!.GET); if (JThrowable.pending !== null) break;
            XmlRpcAbeClient.isOnline = true;
            return abeLicenseInterface;
        } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof JIOException) {
            let e: JIOException | null = changetype<JIOException | null>(JThrowable.take());
            this.logUtil!.put(this.EXCEPTION_IN_CLIENT, this, this.commonStrings!.GET, e); if (JThrowable.pending !== null) return null;
            this.logUtil!.putF(jstr(this.TRYING_OTHER_SERVERS) + jstr(ExceptionUtil.getInstance()!.getStackTrace(e)), this, this.commonStrings!.GET); if (JThrowable.pending !== null) return null;
            if (!JString.startsWith1(e!.getMessage(), this.HOST_NOT_RESOLVED)) {
                return this.tryAnother(anyType);
            } else {
                XmlRpcAbeClient.isOnline = false;
                { JThrowable.raise(new JException().jinit_JException_1(this.HOST_NOT_RESOLVED_MSG)); return null; }
            } if (JThrowable.pending !== null) return null;
        } else if (JThrowable.pending != null && JThrowable.pending instanceof XmlRpcException) {
            let e: XmlRpcException | null = changetype<XmlRpcException | null>(JThrowable.take());
            this.logUtil!.put(this.SERVER_REPORTED_ERROR, this, this.commonStrings!.GET, e); if (JThrowable.pending !== null) return null;
            return this.tryAnother(anyType);
        } else if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.UNKNOWN_ERROR, this, this.commonStrings!.GET, e); if (JThrowable.pending !== null) return null;
            return this.tryAnother(anyType);
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

