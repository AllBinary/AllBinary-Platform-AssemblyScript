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
// import org.allbinary.data.tree.dom.DomSearchHelper
// import org.allbinary.data.tree.dom.document.DomDocumentHelper
// import org.allbinary.data.tree.dom.document.XmlDocumentHelper
// import org.allbinary.globals.PATH_GLOBALS
// import org.allbinary.globals.URLGLOBALS
// import org.allbinary.logic.io.AbFileLocalInputStream
// import org.allbinary.logic.io.file.AbFile
// import org.allbinary.logic.io.path.AbPath
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.w3c.dom.Document
// import org.w3c.dom.Node
// import org.w3c.dom.NodeList

@global export class LoggingInitInfo extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.log.config.LoggingInitInfo";
    }
    @lazy static readonly INITFILENAME: string | null = "logConfig.xml";
    @lazy static jv_PACKAGE: string | null = null;
    @lazy static js_PACKAGE: bool = false;
    static get PACKAGE(): string | null {
        if (!LoggingInitInfo.js_PACKAGE) {
            LoggingInitInfo.js_PACKAGE = true;
            LoggingInitInfo.jv_PACKAGE = PATH_GLOBALS.getInstance()!.INIT_PATH;
        }
        return LoggingInitInfo.jv_PACKAGE;
    }
    static set PACKAGE(value: string | null) {
        LoggingInitInfo.js_PACKAGE = true;
        LoggingInitInfo.jv_PACKAGE = value;
    }
    @lazy static logConfigInfoList: BasicArrayList | null = null;
    @lazy static hasRead: bool = false;
    

    jinit_LoggingInitInfo_0(): LoggingInitInfo {
        super.jinit_JObject_0();
        return this;
    }
    

    static getDoc(): Document | null {
        let path: string | null = jstr(URLGLOBALS.getWebappPath()) + jstr(LoggingInitInfo.PACKAGE); if (JThrowable.pending !== null) return null;
        let FILEABPATH: AbPath | null = new AbPath().jinit_AbPath_2(path, LoggingInitInfo.INITFILENAME); if (JThrowable.pending !== null) return null;
        let file: AbFile | null = AbFile.createAbFileFromAbPath(FILEABPATH); if (JThrowable.pending !== null) return null;
        let document: Document | null = DomDocumentHelper.create_1_InputStream(new AbFileLocalInputStream().jinit_AbFileLocalInputStream_1(file)); if (JThrowable.pending !== null) return null;
        return document;
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
            let document: Document | null = LoggingInitInfo.getDoc(); if (JThrowable.pending !== null) break;
            let logConfigsNodeList: NodeList | null = document!.getElementsByTagName(LogConfigsData.getInstance()!.NAME); if (JThrowable.pending !== null) break;
            let logConfigsNode: Node | null = logConfigsNodeList!.item(0); if (JThrowable.pending !== null) break;
            let logConfigNodeVector: BasicArrayList | null = DomSearchHelper.getAllNodes(LogConfigData.getInstance()!.NAME, logConfigsNode!.getChildNodes()); if (JThrowable.pending !== null) break;
            LoggingInitInfo.logConfigInfoList = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) break;
            let size: i32 = logConfigNodeVector!.size(); if (JThrowable.pending !== null) break;
            for (let i: i32 = 0; i < size; i++) {
                let node: Node | null = changetype<Node | null>(logConfigNodeVector!.get(i)); if (JThrowable.pending !== null) break;
                let logConfigInfo: LogConfig | null = new LogConfig().jinit_LogConfig_1(node); if (JThrowable.pending !== null) break;
                LoggingInitInfo.logConfigInfoList!.add(logConfigInfo); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
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
    

    static set(logConfigInfoVector: BasicArrayList | null): void {
        LoggingInitInfo.logConfigInfoList = logConfigInfoVector;
    }
    

    static get(): BasicArrayList | null {
        LoggingInitInfo.updateIfNeeded(); if (JThrowable.pending !== null) return null;
        return LoggingInitInfo.logConfigInfoList;
    }
    

    static getTypeNameList(): BasicArrayList | null {
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
            let document: Document | null = LoggingInitInfo.getDoc(); if (JThrowable.pending !== null) break;
            return XmlDocumentHelper.toString1(document);
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            return "Error";
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

