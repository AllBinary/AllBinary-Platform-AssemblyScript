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
// package org.allbinary.logic.communication.log.config
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class LoggingInitInfo extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.log.config.LoggingInitInfo";
    }
    @lazy static logConfigInfoList: BasicArrayList | null = null;
    @lazy static hasRead: bool = false;
    

    jinit_LoggingInitInfo_0(): LoggingInitInfo {
        super.jinit_JObject_0();
        return this;
    }
    

    static write(): void {
        do {
            LoggingInitInfo.hasRead = false;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(e); return; }
        } if (JThrowable.pending !== null) return;
    }
    

    static read(): void {
        do {
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(e); return; }
        } if (JThrowable.pending !== null) return;
    }
    

    static setHasRead(value: bool): void {
        LoggingInitInfo.hasRead = value;
    }
    

    static updateIfNeeded(): void {
        if (!LoggingInitInfo.hasRead) {
            LoggingInitInfo.read(); if (JThrowable.pending !== null) return;
            LoggingInitInfo.hasRead = true;
            if (LoggingInitInfo.logConfigInfoList == null) {
                { JThrowable.raise(new JException().jinit_JException_1("Read Failed")); return; }
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    isValid(): bool {
        do {
            return true;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    static set(logConfigInfoList: BasicArrayList | null): void {
        LoggingInitInfo.logConfigInfoList = logConfigInfoList;
    }
    

    static get(): BasicArrayList | null {
        LoggingInitInfo.updateIfNeeded(); if (JThrowable.pending !== null) return null;
        return LoggingInitInfo.logConfigInfoList;
    }
    

    static getTypeList(): BasicArrayList | null {
        LoggingInitInfo.updateIfNeeded(); if (JThrowable.pending !== null) return null;
        let allLogTypeVector: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return null;
        let size: i32 = LoggingInitInfo.logConfigInfoList!.size(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < size; index++) {
            let logConfigInfo: LogConfig | null = changetype<LogConfig | null>(LoggingInitInfo.logConfigInfoList!.objectArray![index]);
            let logTypeVector: BasicArrayList | null = logConfigInfo!.getTypeVector(); if (JThrowable.pending !== null) return null;
            if (logConfigInfo!.isEnabled()) {
                allLogTypeVector!.addAllList(logTypeVector); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return allLogTypeVector;
    }
    

    getNumberOfLogConfigs(): i32 {
        return LoggingInitInfo.logConfigInfoList!.size();
    }
    

    toString(): string | null {
        do {
            return null;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            return "Error";
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

