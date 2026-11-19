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
// import org.allbinary.business.entry.EntryData
// import org.allbinary.data.tree.dom.DomNodeHelper
// import org.allbinary.data.tree.dom.DomSearchHelper
// import org.allbinary.data.tree.dom.document.DomDocumentHelper
// import org.allbinary.globals.PATH_GLOBALS
// import org.allbinary.globals.URLGLOBALS
// import org.allbinary.logic.communication.log.config.type.LogConfigType
// import org.allbinary.logic.communication.log.config.type.LogConfigTypeData
// import org.allbinary.logic.communication.log.config.type.LogConfigTypes
// import org.allbinary.logic.communication.log.config.type.LogConfigTypesData
// import org.allbinary.logic.io.AbFileLocalInputStream
// import org.allbinary.logic.io.file.AbFile
// import org.allbinary.logic.java.bool.BooleanUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.w3c.dom.Document
// import org.w3c.dom.Node
// import org.w3c.dom.NodeList

@global export class LogConfig extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.communication.log.config.LogConfig";
    }
    isEnabled_f: bool = false;
    name: string | null = null;
    description: string | null = null;
    path: string | null = null;
    fileName: string | null = null;

    jfields_LogConfig(): void {
    
    
    
    
    
    }
    

    jinit_LogConfig_4(aName: string | null, aDescription: string | null, aPath: string | null, aFileName: string | null): LogConfig {
        super.jinit_JObject_0();
        this.jfields_LogConfig();
        this.isEnabled_f = false;
        this.name = aName;
        this.description = aDescription;
        this.path = aPath;
        this.fileName = aFileName;
        return this;
    }
    

    jinit_LogConfig_1(node: Node | null): LogConfig {
        super.jinit_JObject_0();
        this.jfields_LogConfig();
        let enabledValueNode: Node | null = DomSearchHelper.getNode(EntryData.getInstance()!.ENABLE, node!.getChildNodes()); if (JThrowable.pending !== null) return this;
        let isEnabledString: string | null = DomNodeHelper.getTextNodeValue_1(enabledValueNode); if (JThrowable.pending !== null) return this;
        this.isEnabled_f = BooleanUtil.getInstance()!.getFromString(isEnabledString); if (JThrowable.pending !== null) return this;
        let logConfigData: LogConfigData | null = LogConfigData.getInstance(); if (JThrowable.pending !== null) return this;
        let nameValueNode: Node | null = DomSearchHelper.getNode(logConfigData!.NAME, node!.getChildNodes()); if (JThrowable.pending !== null) return this;
        this.name = DomNodeHelper.getTextNodeValue_1(nameValueNode); if (JThrowable.pending !== null) return this;
        let descriptionValueNode: Node | null = DomSearchHelper.getNode(logConfigData!.DESCRIPTION, node!.getChildNodes()); if (JThrowable.pending !== null) return this;
        this.description = DomNodeHelper.getTextNodeValue_1(descriptionValueNode); if (JThrowable.pending !== null) return this;
        let fileValueNode: Node | null = DomSearchHelper.getNode(logConfigData!.FILE, node!.getChildNodes()); if (JThrowable.pending !== null) return this;
        this.fileName = DomNodeHelper.getTextNodeValue_1(fileValueNode); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getName(): string | null {
        return this.name;
    }
    

    isEnabled(): bool {
        return this.isEnabled_f;
    }
    

    enable(): void {
        this.isEnabled_f = true;
    }
    

    disable(): void {
        this.isEnabled_f = false;
    }
    

    getDescription(): string | null {
        return this.description;
    }
    

    getFileName(): string | null {
        return this.fileName;
    }
    

    setName(value: string | null): void {
        this.name = value;
    }
    

    setDescription(value: string | null): void {
        this.description = value;
    }
    

    setPath(value: string | null): void {
        this.path = value;
    }
    

    setFileName(value: string | null): void {
        this.fileName = value;
    }
    

    getDoc(): Document | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(URLGLOBALS.getWebappPath()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(PATH_GLOBALS.getInstance()!.INIT_PATH); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.getFileName()); if (JThrowable.pending !== null) return null;
        let file: AbFile | null = AbFile.createAbFile(JObject.jtoString(stringBuffer)); if (JThrowable.pending !== null) return null;
        let document: Document | null = DomDocumentHelper.create_1_InputStream(new AbFileLocalInputStream().jinit_AbFileLocalInputStream_1(file)); if (JThrowable.pending !== null) return null;
        return document;
    }
    

    getTypeVector(): BasicArrayList | null {
        let logKeyVector: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return null;
        let document: Document | null = this.getDoc(); if (JThrowable.pending !== null) return null;
        let logConfigTypesNodeList: NodeList | null = document!.getElementsByTagName(LogConfigTypesData.getInstance()!.NAME); if (JThrowable.pending !== null) return null;
        let logConfigTypesNode: Node | null = logConfigTypesNodeList!.item(0); if (JThrowable.pending !== null) return null;
        let logConfigTypeNodeVector: BasicArrayList | null = DomSearchHelper.getAllNodes(LogConfigTypeData.getInstance()!.NAME, logConfigTypesNode!.getChildNodes()); if (JThrowable.pending !== null) return null;
        let size: i32 = logConfigTypeNodeVector!.size(); if (JThrowable.pending !== null) return null;
        for (let i: i32 = 0; i < size; i++) {
            let node: Node | null = changetype<Node | null>(logConfigTypeNodeVector!.get(i)); if (JThrowable.pending !== null) return null;
            let logType: LogConfigType | null = LogConfigTypes.getInstance1(node); if (JThrowable.pending !== null) return null;
            logKeyVector!.add(logType); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return logKeyVector;
    }
}

