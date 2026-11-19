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
// package org.allbinary.data.tree.dom
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.w3c.dom.Node
// import org.w3c.dom.NodeList

@global export class DomNodeHelper extends JObject {

    jclassName(): string {
        return "org.allbinary.data.tree.dom.DomNodeHelper";
    }
    

    jinit_DomNodeHelper_0(): DomNodeHelper {
        super.jinit_JObject_0();
        return this;
    }
    

    static getFirstChildElement(parentNode: Node | null): Node | null {
        let node: Node | null = parentNode!.getFirstChild(); if (JThrowable.pending !== null) return null;
        if (node != null && node!.getNodeType() != Node_JStatics.ELEMENT_NODE) {
            let nodeList: NodeList | null = parentNode!.getChildNodes(); if (JThrowable.pending !== null) return null;
            for (let index: i32 = 0; index < nodeList!.getLength(); index++) {
                node = nodeList!.item(index); if (JThrowable.pending !== null) return null;
                if (node!.getNodeType() == 1) {
                    break;
                } if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return node;
    }
    

    static getTextNodeValue_1(node: Node | null): string | null {
        let nodeTextNode: Node | null = node!.getFirstChild(); if (JThrowable.pending !== null) return null;
        if (nodeTextNode != null) {
            return nodeTextNode!.getNodeValue();
        } else {
            return StringUtil.getInstance()!.EMPTY_STRING;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    static getTextNodeValue_2(nodeName: string | null, nodeList: NodeList | null): string | null {
        let node: Node | null = DomSearchHelper.getNode(nodeName, nodeList); if (JThrowable.pending !== null) return null;
        return DomNodeHelper.getTextNodeValue_1(node);
    }
    

    static getTextNodesValue(node: Node | null): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let nodeList: NodeList | null = node!.getChildNodes(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < nodeList!.getLength(); index++) {
            let nodeTextNode: Node | null = nodeList!.item(index); if (JThrowable.pending !== null) return null;
            if (nodeTextNode!.getNodeType() == Node_JStatics.TEXT_NODE) {
                if (nodeTextNode != null) {
                    stringBuffer!.append(nodeTextNode!.getNodeValue()); if (JThrowable.pending !== null) return null;
                } if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

