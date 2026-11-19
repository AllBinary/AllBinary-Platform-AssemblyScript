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
// package org.allbinary.logic.visual.transform.info
// import org.allbinary.data.tree.dom.DomNodeHelper
// import org.allbinary.data.tree.dom.DomSearchHelper
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonLabels
// import org.w3c.dom.Attr
// import org.w3c.dom.NamedNodeMap
// import org.w3c.dom.Node
// import org.w3c.dom.NodeList
// import org.allbinary.logic.communication.log.config.type.LogConfigTypeFactory
// import org.allbinary.logic.communication.log.config.type.LogConfigTypes

@global export class TransformInfoPropertiesFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.visual.transform.info.TransformInfoPropertiesFactory";
    }
    @lazy static jv_instance: TransformInfoPropertiesFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TransformInfoPropertiesFactory | null {
        if (!TransformInfoPropertiesFactory.js_instance) {
            TransformInfoPropertiesFactory.js_instance = true;
            TransformInfoPropertiesFactory.jv_instance = new TransformInfoPropertiesFactory().jinit_TransformInfoPropertiesFactory_0();
        }
        return TransformInfoPropertiesFactory.jv_instance;
    }
    static set instance(value: TransformInfoPropertiesFactory | null) {
        TransformInfoPropertiesFactory.js_instance = true;
        TransformInfoPropertiesFactory.jv_instance = value;
    }
    logUtil: LogUtil | null = null;

    jfields_TransformInfoPropertiesFactory(): void {
    this.logUtil = LogUtil.getInstance();
    }
    

    static getInstance(): TransformInfoPropertiesFactory | null {
        return TransformInfoPropertiesFactory.instance;
    }
    

    jinit_TransformInfoPropertiesFactory_0(): TransformInfoPropertiesFactory {
        super.jinit_JObject_0();
        this.jfields_TransformInfoPropertiesFactory();
        return this;
    }
    

    getInstance1(node: Node | null): TransformInfoProperties | null {
        let transformInfoChildNodeList: NodeList | null = node!.getChildNodes(); if (JThrowable.pending !== null) return null;
        let transformInfoData: TransformInfoData | null = TransformInfoData.getInstance(); if (JThrowable.pending !== null) return null;
        let attributes: NamedNodeMap | null = node!.getAttributes(); if (JThrowable.pending !== null) return null;
        let attrNode: Attr | null = changetype<Attr | null>(attributes!.getNamedItem(transformInfoData!.NAME)); if (JThrowable.pending !== null) return null;
        let name: string | null = attrNode!.getValue(); if (JThrowable.pending !== null) return null;
        if (LogConfigTypes.LOGGING!.contains(LogConfigTypeFactory.getInstance()!.VIEW)) {
            this.logUtil!.putF(jstr(jstr(CommonLabels.getInstance()!.NEXT) + jstr(" View Name: ")) + jstr(name), this, "toTransformInfoPropertiesHashMap()"); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        let labelNode: Node | null = DomSearchHelper.getNodeNoThrow(transformInfoData!.LABEL, transformInfoChildNodeList); if (JThrowable.pending !== null) return null;
        let label: string | null = DomNodeHelper.getTextNodesValue(labelNode); if (JThrowable.pending !== null) return null;
        if (label == null) {
            label = name;
        }
        let descriptionNode: Node | null = DomSearchHelper.getNode(transformInfoData!.DESCRIPTION, transformInfoChildNodeList); if (JThrowable.pending !== null) return null;
        let description: string | null = DomNodeHelper.getTextNodesValue(descriptionNode); if (JThrowable.pending !== null) return null;
        let objectFileNode: Node | null = DomSearchHelper.getNode(transformInfoData!.OBJECTFILENAME, transformInfoChildNodeList); if (JThrowable.pending !== null) return null;
        let objectFileName: string | null = DomNodeHelper.getTextNodeValue_1(objectFileNode); if (JThrowable.pending !== null) return null;
        let objectConfigFileNode: Node | null = DomSearchHelper.getNode(transformInfoData!.OBJECTCONFIGFILENAME, transformInfoChildNodeList); if (JThrowable.pending !== null) return null;
        let objectConfigFileName: string | null = DomNodeHelper.getTextNodeValue_1(objectConfigFileNode); if (JThrowable.pending !== null) return null;
        let templateFileNode: Node | null = DomSearchHelper.getNode(transformInfoData!.TEMPLATEFILENAME, transformInfoChildNodeList); if (JThrowable.pending !== null) return null;
        let templateFileName: string | null = DomNodeHelper.getTextNodeValue_1(templateFileNode); if (JThrowable.pending !== null) return null;
        let transformInfoProperties: TransformInfoProperties | null = new TransformInfoProperties().jinit_TransformInfoProperties_6(name, label, description, objectFileName, objectConfigFileName, templateFileName); if (JThrowable.pending !== null) return null;
        return transformInfoProperties;
    }
}

