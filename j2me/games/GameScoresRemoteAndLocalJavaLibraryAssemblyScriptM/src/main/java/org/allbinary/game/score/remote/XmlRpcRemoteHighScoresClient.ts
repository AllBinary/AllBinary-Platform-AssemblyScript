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
// package org.allbinary.game.score.remote
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
// import org.allbinary.util.ABHashtable
// import org.apache.xmlrpc.XmlRpcClient
// import org.apache.xmlrpc.XmlRpcException

@global export class XmlRpcRemoteHighScoresClient extends XmlRpcAbeClient {

    jclassName(): string {
        return "org.allbinary.game.score.remote.XmlRpcRemoteHighScoresClient";
    }
    logUtil: LogUtil | null = null;
    page: string | null = null;

    jfields_XmlRpcRemoteHighScoresClient(): void {
    this.logUtil = LogUtil.getInstance();
    
    }
    

    jinit_XmlRpcRemoteHighScoresClient_3(clientInfo: AbeClientInformationInterface | null, page: string | null, remoteMethod: string | null): XmlRpcRemoteHighScoresClient {
        super.jinit_XmlRpcAbeClient_2(clientInfo, remoteMethod);
        this.jfields_XmlRpcRemoteHighScoresClient();
        this.page = page;
        this.setServer(0); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    get_2(anyType: Object | null, cryptInterface: CryptInterface | null): Object | null {
        do {
            let param: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            let serverUrl: string | null = this.getClientInfo()!.getLicenseServer(this.getServer()); if (JThrowable.pending !== null) break;
            let index: i32 = JString.lastIndexOf1(serverUrl, (<u16>0x2F)); if (JThrowable.pending !== null) break;
            serverUrl = jstr(JString.substring2(serverUrl, 0, index + 1)) + jstr(this.page); if (JThrowable.pending !== null) break;
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) break;
            stringBuffer!.append(this.TRYING); if (JThrowable.pending !== null) break;
            stringBuffer!.appendint(this.getServer()); if (JThrowable.pending !== null) break;
            stringBuffer!.append(this.SEP); if (JThrowable.pending !== null) break;
            stringBuffer!.append(serverUrl); if (JThrowable.pending !== null) break;
            this.logUtil!.putF(JObject.jtoString(stringBuffer), this, this.commonStrings!.GET); if (JThrowable.pending !== null) break;
            let xmlRpcClient: XmlRpcClient | null = new XmlRpcClient().jinit_XmlRpcClient_1(serverUrl); if (JThrowable.pending !== null) break;
            this.setClient(xmlRpcClient); if (JThrowable.pending !== null) break;
            xmlRpcClient!.setBasicAuthentication(StringUtil.getInstance()!.EMPTY_STRING, StringUtil.getInstance()!.EMPTY_STRING); if (JThrowable.pending !== null) break;
            let hashtable: ABHashtable | null = changetype<ABHashtable | null>(anyType);
            this.logUtil!.putF(jstr(this.CLIENT_INFO) + jstr(JObject.jtoString(hashtable)), this, this.commonStrings!.GET); if (JThrowable.pending !== null) break;
            param!.add(hashtable); if (JThrowable.pending !== null) break;
            let result: Object | null = xmlRpcClient!.executeWithCrypt(this.getRemoteMethod(), param, cryptInterface); if (JThrowable.pending !== null) break;
            this.logUtil!.putF(jstr(this.RESULT) + jstr(JObject.jtoString(result)), this, this.commonStrings!.GET); if (JThrowable.pending !== null) break;
            XmlRpcAbeClient.isOnline = true;
            return result;
        } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof JIOException) {
            let e: JIOException | null = changetype<JIOException | null>(JThrowable.take());
            this.logUtil!.put(jstr(this.TRYING_OTHER_SERVERS) + jstr(ExceptionUtil.getInstance()!.getStackTrace(e)), this, this.commonStrings!.GET, e); if (JThrowable.pending !== null) return null;
            if (!JString.startsWith1(e!.getMessage(), this.HOST_NOT_RESOLVED)) {
                return this.tryAnother(anyType);
            } else {
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

