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
// package org.allbinary.logic.communication.xmlrpc
// import org.allbinary.game.rand.MyRandomFactory
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonSeps
// import org.allbinary.string.CommonStrings
// import org.apache.xmlrpc.NullXmlRpcHandler
// import org.apache.xmlrpc.XmlRpcClient
// import org.apache.xmlrpc.XmlRpcHandler

@global export class XmlRpcAbeClient extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.xmlrpc.XmlRpcAbeClient";
    }
    @lazy static isOnline: bool = true;
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    remoteMethod: string | null = null;
    clientInfo: AbeClientInformationInterface | null = null;
    client: XmlRpcHandler | null = null;
    server: i32 = 0;
    start: i32 = 0;
    maxServers: i32 = 0;
    isDone: bool = false;
    START_SERVER: string | null = null;
    TRYING: string | null = null;
    SEP: string | null = null;
    CLIENT_INFO: string | null = null;
    RESULT: string | null = null;
    INVALID: string | null = null;
    EXCEPTION_IN_CLIENT: string | null = null;
    SERVER_REPORTED_ERROR: string | null = null;
    UNKNOWN_ERROR: string | null = null;
    TRYING_OTHER_SERVERS: string | null = null;
    HOST_NOT_RESOLVED_MSG: string | null = null;
    HOST_NOT_RESOLVED: string | null = null;
    myRandomFactory: MyRandomFactory | null = null;

    jfields_XmlRpcAbeClient(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    
    
    this.client = NullXmlRpcHandler.NULL_XML_RPC_HANDLER;
    
    this.start = 0;
    this.maxServers = 0;
    
    this.START_SERVER = "Start With Server #";
    this.TRYING = "Trying Server #";
    this.SEP = CommonLabels.getInstance()!.COLON_SEP;
    this.CLIENT_INFO = "Client Info: \n";
    this.RESULT = jstr(CommonLabels.getInstance()!.RESULT_) + jstr(CommonSeps.getInstance()!.NEW_LINE);
    this.INVALID = "License data is Invalid Trying Other Servers";
    this.EXCEPTION_IN_CLIENT = "Exception in client";
    this.SERVER_REPORTED_ERROR = "Server reported error";
    this.UNKNOWN_ERROR = "Unknown License Retrieval Failure";
    this.TRYING_OTHER_SERVERS = "IOException Trying Other Servers";
    this.HOST_NOT_RESOLVED_MSG = "Not Trying Again Since Host Unresolved";
    this.HOST_NOT_RESOLVED = "Host is unresolved";
    this.myRandomFactory = MyRandomFactory.getInstance();
    }
    

    jinit_XmlRpcAbeClient_2(clientInfo: AbeClientInformationInterface | null, remoteMethod: string | null): XmlRpcAbeClient {
        super.jinit_JObject_0();
        this.jfields_XmlRpcAbeClient();
        this.remoteMethod = remoteMethod;
        this.clientInfo = clientInfo;
        if (clientInfo!.getNumberOfLicenseServers() > 1) {
            this.maxServers = clientInfo!.getNumberOfLicenseServers() - 2; if (JThrowable.pending !== null) return this;
            this.start = this.myRandomFactory!.getAbsoluteNextInt(this.maxServers) + 1; if (JThrowable.pending !== null) return this;
        } else if (clientInfo!.getNumberOfLicenseServers() == 1) {
            this.maxServers = 0;
            this.start = 0;
        } if (JThrowable.pending !== null) return this;
        this.isDone = false;
        this.server = this.start;
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(this.START_SERVER); if (JThrowable.pending !== null) return this;
        stringBuffer!.appendint(this.getServer()); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(this.SEP); if (JThrowable.pending !== null) return this;
        stringBuffer!.append(clientInfo!.getLicenseServer(this.getServer())); if (JThrowable.pending !== null) return this;
        this.logUtil!.putF(JObject.jtoString(stringBuffer), this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    get(anyType: Object | null): Object | null {
        ForcedLogUtil.log(this.commonStrings!.NOT_IMPLEMENTED, this); if (JThrowable.pending !== null) return null;
        return NullUtil.getInstance()!.NULL_OBJECT;
    }
    

    tryAnother(anyType: Object | null): Object | null {
        if (this.getServer() < this.getMaxServers()) {
            this.setServer(this.getServer() + 1); if (JThrowable.pending !== null) return null;
        } else {
            this.setServer(0); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (this.getServer() != this.getStart() && !this.isIsDone()) {
            return this.get(anyType);
        } else {
            this.setIsDone(true); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        { JThrowable.raise(new JException().jinit_JException_1("Tried All Servers But Still Failed")); return null; }
        return null;
    }
    

    getClientInfo(): AbeClientInformationInterface | null {
        return this.clientInfo;
    }
    

    getClient(): XmlRpcHandler | null {
        return this.client;
    }
    

    setClient(client: XmlRpcClient | null): void {
        this.client = client;
    }
    

    getServer(): i32 {
        return this.server;
    }
    

    setServer(server: i32): void {
        this.server = server;
    }
    

    getStart(): i32 {
        return this.start;
    }
    

    setStart(start: i32): void {
        this.start = start;
    }
    

    getMaxServers(): i32 {
        return this.maxServers;
    }
    

    setMaxServers(maxServers: i32): void {
        this.maxServers = maxServers;
    }
    

    isIsDone(): bool {
        return this.isDone;
    }
    

    setIsDone(isDone: bool): void {
        this.isDone = isDone;
    }
    

    getRemoteMethod(): string | null {
        return this.remoteMethod;
    }
}

