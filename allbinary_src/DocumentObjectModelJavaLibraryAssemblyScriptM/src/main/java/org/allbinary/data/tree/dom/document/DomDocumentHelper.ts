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
// package org.allbinary.data.tree.dom.document
// import java.io.InputStream
// import java.io.StringBufferInputStream
// import javax.xml.parsers.DocumentBuilder
// import javax.xml.parsers.DocumentBuilderFactory
// import org.allbinary.string.CommonPhoneStrings
// import org.w3c.dom.Document

@global export class DomDocumentHelper extends JObject {

    jclassName(): string {
        return "org.allbinary.data.tree.dom.document.DomDocumentHelper";
    }
    

    jinit_DomDocumentHelper_0(): DomDocumentHelper {
        super.jinit_JObject_0();
        return this;
    }
    

    static init(): void {
        let commonPhoneStrings: CommonPhoneStrings | null = CommonPhoneStrings.getInstance(); if (JThrowable.pending !== null) return;
        JSystem.setProperty("jdk.xml.maxElementDepth", commonPhoneStrings!.ZERO); if (JThrowable.pending !== null) return;
        JSystem.setProperty("jdk.xml.xpathExprOpLimit", commonPhoneStrings!.ZERO); if (JThrowable.pending !== null) return;
        JSystem.setProperty("jdk.xml.xpathTotalOpLimit", commonPhoneStrings!.ZERO); if (JThrowable.pending !== null) return;
        let LIMIT: string | null = "500000";
        JSystem.setProperty("jdk.xml.maxGeneralEntitySizeLimit", LIMIT); if (JThrowable.pending !== null) return;
        JSystem.setProperty("jdk.xml.totalEntitySizeLimit", LIMIT); if (JThrowable.pending !== null) return;
    }
    

    static create_0(): Document | null {
        do {
            let factory: DocumentBuilderFactory | null = DocumentBuilderFactory.newInstance(); if (JThrowable.pending !== null) break;
            let builder: DocumentBuilder | null = factory!.newDocumentBuilder(); if (JThrowable.pending !== null) break;
            let document: Document | null = builder!.newDocument(); if (JThrowable.pending !== null) break;
            return document;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            return null;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    static create_1_InputStream(inputStream: JInputStream | null): Document | null {
        do {
            let factory: DocumentBuilderFactory | null = DocumentBuilderFactory.newInstance(); if (JThrowable.pending !== null) break;
            let builder: DocumentBuilder | null = factory!.newDocumentBuilder(); if (JThrowable.pending !== null) break;
            let document: Document | null = builder!.parse(inputStream); if (JThrowable.pending !== null) break;
            return document;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(e); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    static create_1_String(xmlString: string | null): Document | null {
        do {
            let factory: DocumentBuilderFactory | null = DocumentBuilderFactory.newInstance(); if (JThrowable.pending !== null) break;
            let builder: DocumentBuilder | null = factory!.newDocumentBuilder(); if (JThrowable.pending !== null) break;
            let document: Document | null = builder!.parse(new JStringBufferInputStream().jinit_JStringBufferInputStream_1(xmlString)); if (JThrowable.pending !== null) break;
            return document;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(e); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

