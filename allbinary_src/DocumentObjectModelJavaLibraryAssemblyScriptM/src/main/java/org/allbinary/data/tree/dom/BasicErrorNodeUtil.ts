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
// import org.allbinary.business.error.ErrorData
// import org.w3c.dom.Document
// import org.w3c.dom.Node

@global export class BasicErrorNodeUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.data.tree.dom.BasicErrorNodeUtil";
    }
    

    jinit_BasicErrorNodeUtil_0(): BasicErrorNodeUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static get(document: Document | null, errorText: string | null): Node | null {
        do {
            let node: Node | null = document!.createElement(ErrorData.getInstance()!.NAME); if (JThrowable.pending !== null) break;
            node!.appendChild(ModDomHelper.createNameValueNodes_3_DocumentStringString(document, ErrorData.getInstance()!.TEXT, errorText)); if (JThrowable.pending !== null) break;
            return node;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(new JException().jinit_JException_1("Error Node Creation Failure")); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

