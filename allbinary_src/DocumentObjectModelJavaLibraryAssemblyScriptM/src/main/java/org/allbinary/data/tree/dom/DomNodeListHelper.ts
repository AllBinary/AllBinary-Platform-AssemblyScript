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
// import org.allbinary.logic.StdUtil
// import org.w3c.dom.NodeList

@global export class DomNodeListHelper extends JObject {

    jclassName(): string {
        return "org.allbinary.data.tree.dom.DomNodeListHelper";
    }

    jinit_DomNodeListHelper_0(): DomNodeListHelper {
        super.jinit_JObject_0();
        return this;
    }
    

    static getVector(nodeList: NodeList | null): BasicArrayList | null {
        let vector: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return null;
        let size: i32 = nodeList!.getLength(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < size; index++) {
            vector!.add(DomNodeHelper.getTextNodeValue_1(nodeList!.item(index))); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return vector;
    }
}

