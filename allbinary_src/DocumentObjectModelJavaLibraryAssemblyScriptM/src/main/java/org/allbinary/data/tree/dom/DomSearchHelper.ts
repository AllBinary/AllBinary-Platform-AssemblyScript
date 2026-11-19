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
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.w3c.dom.Node
// import org.w3c.dom.NodeList

@global export class DomSearchHelper extends JObject {

    jclassName(): string {
        return "org.allbinary.data.tree.dom.DomSearchHelper";
    }
    

    jinit_DomSearchHelper_0(): DomSearchHelper {
        super.jinit_JObject_0();
        return this;
    }
    

    static getNodeNoThrow(nodeName: string | null, nodeList: NodeList | null): Node | null {
        let numberOfNodes: i32 = nodeList!.getLength(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < numberOfNodes; index++) {
            let node: Node | null = nodeList!.item(index); if (JThrowable.pending !== null) return null;
            if (JString.compareTo1(node!.getNodeName(), nodeName) == 0) {
                return node;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    static getNode(nodeName: string | null, nodeList: NodeList | null): Node | null {
        let node: Node | null = DomSearchHelper.getNodeNoThrow(nodeName, nodeList); if (JThrowable.pending !== null) return null;
        if (node != null) {
            return node;
        } else {
            { JThrowable.raise(new JException().jinit_JException_1(jstr(nodeName) + jstr(" Node Not Found in search"))); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    static getChildNodeList(nodeName: string | null, nodeList: NodeList | null): NodeList | null {
        let node: Node | null = DomSearchHelper.getNode(nodeName, nodeList); if (JThrowable.pending !== null) return null;
        return node!.getChildNodes();
    }
    

    static getAllNodes(nodeName: string | null, nodeList: NodeList | null): BasicArrayList | null {
        let vector: BasicArrayList | null = DomSearchHelper.getAllNodesNoThrow(nodeName, nodeList); if (JThrowable.pending !== null) return null;
        if (vector == null) {
            { JThrowable.raise(new JException().jinit_JException_1(jstr(nodeName) + jstr(" Node Not Found in search"))); return null; }
        } else {
            return vector;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    static getAllNodesNoThrow(nodeName: string | null, nodeList: NodeList | null): BasicArrayList | null {
        let nodeVector: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return null;
        let numberOfNodes: i32 = nodeList!.getLength(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < numberOfNodes; index++) {
            let node: Node | null = nodeList!.item(index); if (JThrowable.pending !== null) return null;
            if (JString.compareTo1(node!.getNodeName(), nodeName) == 0) {
                nodeVector!.add(node); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return nodeVector;
    }
}

