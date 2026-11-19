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
// import java.util.HashMap
// import java.util.Set
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.logic.java.anyType.clazz.ClassUtil
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonSeps
// import org.w3c.dom.Document
// import org.w3c.dom.Node

@global export class ModDomHelper extends JObject {

    jclassName(): string {
        return "org.allbinary.data.tree.dom.ModDomHelper";
    }
    

    jinit_ModDomHelper_0(): ModDomHelper {
        super.jinit_JObject_0();
        return this;
    }
    

    static createTextNode(document: Document | null, name: string | null, text: string | null): Node | null {
        let newValueNode: Node | null = document!.createElement(name); if (JThrowable.pending !== null) return null;
        let newValueTextNode: Node | null = document!.createTextNode(text); if (JThrowable.pending !== null) return null;
        newValueNode!.appendChild(newValueTextNode); if (JThrowable.pending !== null) return null;
        return newValueNode;
    }
    

    static createValueNode(document: Document | null, text: string | null): Node | null {
        return ModDomHelper.createTextNode(document, DomData.VALUE, text);
    }
    

    static createNameNode(document: Document | null, text: string | null): Node | null {
        return ModDomHelper.createTextNode(document, DomData.NAME, text);
    }
    

    static createIndexNode(document: Document | null, index: i32): Node | null {
        return ModDomHelper.createTextNode(document, DomData.INDEX, JObject.jtoString(new JInteger().jinit_JInteger_1(index)));
    }
    

    static createNameValueNodes_4_DocumentStringStringString(document: Document | null, elementName: string | null, nameText: string | null, valueText: string | null): Node | null {
        let newNode: Node | null = document!.createElement(elementName); if (JThrowable.pending !== null) return null;
        newNode!.appendChild(ModDomHelper.createNameNode(document, nameText)); if (JThrowable.pending !== null) return null;
        newNode!.appendChild(ModDomHelper.createValueNode(document, valueText)); if (JThrowable.pending !== null) return null;
        return newNode;
    }
    

    static createNameValueNodes_3_DocumentStringString(document: Document | null, elementNameAndNameText: string | null, valueText: string | null): Node | null {
        let newNode: Node | null = ModDomHelper.createNameValueNodes_4_DocumentStringStringString(document, elementNameAndNameText, elementNameAndNameText, valueText); if (JThrowable.pending !== null) return null;
        return newNode;
    }
    

    static createNameValueIndexNodes_4_DocumentStringintString(document: Document | null, elementNameAndNameText: string | null, index: i32, valueText: string | null): Node | null {
        let newNode: Node | null = ModDomHelper.createNameValueNodes_3_DocumentStringString(document, elementNameAndNameText, valueText); if (JThrowable.pending !== null) return null;
        newNode!.appendChild(ModDomHelper.createIndexNode(document, index)); if (JThrowable.pending !== null) return null;
        return newNode;
    }
    

    static createNameValueNodes_3_DocumentStringHashMap(document: Document | null, rootNode: string | null, hashMap: JHashMap | null): Node | null {
        let node: Node | null = document!.createElement(rootNode); if (JThrowable.pending !== null) return null;
        return ModDomHelper.createNameValueNodes_3_DocumentNodeHashMap(document, node, hashMap);
    }
    

    static createNameValueNodes_3_DocumentNodeHashMap(document: Document | null, node: Node | null, hashMap: JHashMap | null): Node | null {
        let stringUtil: StringUtil | null = StringUtil.getInstance(); if (JThrowable.pending !== null) return null;
        let keySet: JSet | null = hashMap!.keySet(); if (JThrowable.pending !== null) return null;
        let keyArray: StaticArray<Object | null> | null = keySet!.toArray(); if (JThrowable.pending !== null) return null;
        let size: i32 = keyArray!.length;
        for (let i: i32 = 0; i < size; i++) {
            let objectKey: Object | null = keyArray![i];
            let name: string | null = changetype<string | null>(objectKey);
            let anyType: Object | null = changetype<Object | null>(hashMap!.get(objectKey)); if (JThrowable.pending !== null) return null;
            if (anyType == null) {
                let value: string | null = stringUtil!.EMPTY_STRING;
                node!.appendChild(ModDomHelper.createNameValueNodes_3_DocumentStringString(document, name, value)); if (JThrowable.pending !== null) return null;
            } else if ((anyType instanceof String)) {
                let value: string | null = stringUtil!.getNonNull(changetype<string | null>(anyType)); if (JThrowable.pending !== null) return null;
                node!.appendChild(ModDomHelper.createNameValueNodes_3_DocumentStringString(document, name, value)); if (JThrowable.pending !== null) return null;
            } else if ((anyType instanceof JHashMap)) {
                node!.appendChild(ModDomHelper.createNameValueNodes_3_DocumentStringHashMap(document, name, hashMap)); if (JThrowable.pending !== null) return null;
            } else {
                { JThrowable.raise(new JException().jinit_JException_1(jstr("HashMap value is the wrong instance and is: ") + jstr(ClassUtil.viewAll_2_ObjectString(anyType, CommonSeps.getInstance()!.NEW_LINE)))); return null; }
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return node;
    }
    

    static createNameValueNodes_4_DocumentStringStringBasicArrayList(document: Document | null, rootNodeName: string | null, duplicateNodeName: string | null, valueVector: BasicArrayList | null): Node | null {
        let stringUtil: StringUtil | null = StringUtil.getInstance(); if (JThrowable.pending !== null) return null;
        let node: Node | null = document!.createElement(rootNodeName); if (JThrowable.pending !== null) return null;
        let size: i32 = valueVector!.size(); if (JThrowable.pending !== null) return null;
        for (let i: i32 = 0; i < size; i++) {
            let value: string | null = stringUtil!.getNonNull(changetype<string | null>(valueVector!.get(i))); if (JThrowable.pending !== null) return null;
            node!.appendChild(ModDomHelper.createNameValueNodes_3_DocumentStringString(document, duplicateNodeName, value)); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return node;
    }
    

    static createNameValueIndexNodes_4_DocumentStringStringBasicArrayList(document: Document | null, rootNodeName: string | null, duplicateNodeName: string | null, valueVector: BasicArrayList | null): Node | null {
        let stringUtil: StringUtil | null = StringUtil.getInstance(); if (JThrowable.pending !== null) return null;
        let node: Node | null = document!.createElement(rootNodeName); if (JThrowable.pending !== null) return null;
        let size: i32 = valueVector!.size(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < size; index++) {
            let value: string | null = stringUtil!.getNonNull(changetype<string | null>(valueVector!.get(index))); if (JThrowable.pending !== null) return null;
            node!.appendChild(ModDomHelper.createNameValueIndexNodes_4_DocumentStringintString(document, duplicateNodeName, index, value)); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return node;
    }
    

    static createNodeWithValueNodes_3_DocumentStringHashMap(document: Document | null, rootNode: string | null, hashMap: JHashMap | null): Node | null {
        let node: Node | null = document!.createElement(rootNode); if (JThrowable.pending !== null) return null;
        return ModDomHelper.createNodeWithValueNodes_3_DocumentNodeHashMap(document, node, hashMap);
    }
    

    static createNodeWithValueNodes_3_DocumentNodeHashMap(document: Document | null, node: Node | null, hashMap: JHashMap | null): Node | null {
        let stringUtil: StringUtil | null = StringUtil.getInstance(); if (JThrowable.pending !== null) return null;
        let keySet: JSet | null = hashMap!.keySet(); if (JThrowable.pending !== null) return null;
        let keyArray: StaticArray<Object | null> | null = keySet!.toArray(); if (JThrowable.pending !== null) return null;
        let size: i32 = keyArray!.length;
        for (let i: i32 = 0; i < size; i++) {
            let name: string | null = changetype<string | null>(keyArray![i]);
            let anyType: Object | null = changetype<Object | null>(hashMap!.get(name)); if (JThrowable.pending !== null) return null;
            let value: string | null = stringUtil!.getNonNull(changetype<string | null>(anyType)); if (JThrowable.pending !== null) return null;
            node!.appendChild(ModDomHelper.createTextNode(document, name, value)); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return node;
    }
}

