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
// package org.allbinary.logic.communication.log.config.type
// import org.allbinary.data.tree.dom.DomNodeHelper
// import org.allbinary.data.tree.dom.DomSearchHelper
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.communication.log.config.LoggingInitInfo
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.w3c.dom.Node

@global export class LogConfigTypes extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.log.config.type.LogConfigTypes";
    }

    @lazy static jclinitDone: bool = false;
    @lazy static readonly JSP_ERROR_NO_FUNCTION: string | null = "in JSP Not In Function";
    @lazy static jv_LOGGING: BasicArrayList | null = null;
    @lazy static js_LOGGING: bool = false;
    static get LOGGING(): BasicArrayList | null {
        LogConfigTypes.jclinit();
        if (!LogConfigTypes.js_LOGGING) {
            LogConfigTypes.js_LOGGING = true;
            LogConfigTypes.jv_LOGGING = new BasicArrayListD().jinit_BasicArrayListD_0();
        }
        return LogConfigTypes.jv_LOGGING;
    }
    static set LOGGING(value: BasicArrayList | null) {
        LogConfigTypes.jclinit();
        LogConfigTypes.js_LOGGING = true;
        LogConfigTypes.jv_LOGGING = value;
    }
    

    static jclinit(): void {
        if (LogConfigTypes.jclinitDone) return;
        LogConfigTypes.jclinitDone = true;
        LogConfigTypes.init(); if (JThrowable.pending !== null) return;
    }
    

    jinit_LogConfigTypes_0(): LogConfigTypes {
        super.jinit_JObject_0();
        return this;
    }
    

    static init(): void {
        do {
            PreLogUtil.put("Initialize LogconfigTypes", "LogConfigTypes", "init()"); if (JThrowable.pending !== null) break;
            LogConfigTypeFactory.getInstance(); if (JThrowable.pending !== null) break;
            let loggingInitInfo: LoggingInitInfo | null = new LoggingInitInfo().jinit_LoggingInitInfo_0(); if (JThrowable.pending !== null) break;
            let logConfigTypeVector: BasicArrayList | null = LoggingInitInfo.getTypeList(); if (JThrowable.pending !== null) break;
            PreLogUtil.put(jstr("Number Of Log Configs: ") + jstr(loggingInitInfo!.getNumberOfLogConfigs()), "LogConfigTypes", "init()"); if (JThrowable.pending !== null) break;
            PreLogUtil.put(jstr("Number Of Log Config Type Names: ") + jstr(logConfigTypeVector!.size()), "LogConfigTypes", "init()"); if (JThrowable.pending !== null) break;
            LogConfigTypes.LOGGING!.addAllList(logConfigTypeVector); if (JThrowable.pending !== null) break;
            LogConfigTypes.LOGGING!.add(LogConfigTypeFactory.getInstance()!.NETBEANS_MODULE); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            PreLogUtil.putSE("Unable to initialize LogConfigTypes", "LogConfigTypes", "init()", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    static getInstance1(node: Node | null): LogConfigType | null {
        let nameValueNode: Node | null = DomSearchHelper.getNode(LogConfigTypeData.getInstance()!.NAME, node!.getChildNodes()); if (JThrowable.pending !== null) return null;
        let name: string | null = DomNodeHelper.getTextNodeValue_1(nameValueNode); if (JThrowable.pending !== null) return null;
        let descriptionValueNode: Node | null = DomSearchHelper.getNodeNoThrow(LogConfigTypeData.getInstance()!.DESCRIPTION, node!.getChildNodes()); if (JThrowable.pending !== null) return null;
        if (descriptionValueNode != null) {
            let description: string | null = DomNodeHelper.getTextNodeValue_1(descriptionValueNode); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        let availableLogConfigTypes: BasicArrayList | null = LogConfigType.availableLogConfigTypes;
        let size: i32 = availableLogConfigTypes!.size(); if (JThrowable.pending !== null) return null;
        let logConfigType: LogConfigType | null = null;
        for (let index: i32 = 0; index < size; index++) {
            logConfigType = changetype<LogConfigType | null>(availableLogConfigTypes!.get(index)); if (JThrowable.pending !== null) return null;
            if (JString.compareTo1(logConfigType!.getName(), name) == 0) {
                return logConfigType;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        { JThrowable.raise(new JException().jinit_JException_1(jstr("No Such LogConfigType: ") + jstr(name))); return null; }
        return null;
    }
}

