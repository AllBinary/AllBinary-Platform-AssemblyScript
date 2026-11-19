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
// package org.allbinary.logic.visual.transform.info.dom
// import java.util.HashMap
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.data.tree.dom.DomSearchHelper
// import org.allbinary.data.tree.dom.document.DomDocumentFileHelper
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.io.file.AbFile
// import org.allbinary.logic.visual.transform.info.TransformInfoData
// import org.allbinary.logic.visual.transform.info.TransformInfoProperties
// import org.allbinary.logic.visual.transform.info.TransformInfoPropertiesFactory
// import org.allbinary.logic.visual.transform.info.TransformInfosData
// import org.allbinary.string.CommonStrings
// import org.w3c.dom.Document
// import org.w3c.dom.Node
// import org.w3c.dom.NodeList
// import org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory
// import org.allbinary.logic.communication.log.config.type.LogConfigTypes

@global export class TransformInfoPropertiesDocument extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.transform.info.dom.TransformInfoPropertiesDocument";
    }
    logUtil: LogUtil | null = null;
    document: Document | null = null;

    jfields_TransformInfoPropertiesDocument(): void {
    this.logUtil = LogUtil.getInstance();
    
    }
    

    jinit_TransformInfoPropertiesDocument_1(filePath: string | null): TransformInfoPropertiesDocument {
        super.jinit_JObject_0();
        this.jfields_TransformInfoPropertiesDocument();
        let xmlFile: AbFile | null = AbFile.createAbFile(filePath); if (JThrowable.pending !== null) return this;
        this.document = DomDocumentFileHelper.createDocument(xmlFile); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    toTransformInfoPropertiesHashMap(): JHashMap | null {
        do {
            let transformInfoPropertiesHashMap: JHashMap | null = StdUtil.getInstance()!.createHashMap(); if (JThrowable.pending !== null) break;
            let transformInfosNode: Node | null = this.document!.getElementsByTagName(TransformInfosData.getInstance()!.NAME)!.item(0); if (JThrowable.pending !== null) break;
            let transformInfosChildNodeList: NodeList | null = transformInfosNode!.getChildNodes(); if (JThrowable.pending !== null) break;
            let transformInfoNodeVector: BasicArrayList | null = DomSearchHelper.getAllNodes(TransformInfoData.getInstance()!.NAME, transformInfosChildNodeList); if (JThrowable.pending !== null) break;
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.VIEW)) {
                this.logUtil!.putF(jstr("Size: ") + jstr(transformInfoNodeVector!.size()), this, "toTransformInfoPropertiesHashMap()"); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            let size: i32 = transformInfoNodeVector!.size(); if (JThrowable.pending !== null) break;
            let node: Node | null = null;
            let transformInfoProperties: TransformInfoProperties | null = null;
            for (let index: i32 = 0; index < size; index++) {
                node = changetype<Node | null>(transformInfoNodeVector!.get(index)); if (JThrowable.pending !== null) break;
                transformInfoProperties = TransformInfoPropertiesFactory.getInstance()!.getInstance1(node); if (JThrowable.pending !== null) break;
                transformInfoPropertiesHashMap!.put(transformInfoProperties!.getName(), transformInfoProperties); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            return transformInfoPropertiesHashMap;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.VIEWERROR)) {
                let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
                this.logUtil!.put(commonStrings!.EXCEPTION, this, "toTransformInfoPropertiesHashMap()", e); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

