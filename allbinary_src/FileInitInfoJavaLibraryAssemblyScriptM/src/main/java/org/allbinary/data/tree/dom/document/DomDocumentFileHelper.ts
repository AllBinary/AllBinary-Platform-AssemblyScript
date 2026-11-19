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
// import javax.xml.transform.Transformer
// import javax.xml.transform.TransformerFactory
// import javax.xml.transform.dom.DOMSource
// import javax.xml.transform.stream.StreamResult
// import org.allbinary.logic.io.AbDataOutputStream
// import org.allbinary.logic.io.AbFileInputStream
// import org.allbinary.logic.io.DataOutputStreamFactory
// import org.allbinary.logic.io.StreamUtil
// import org.allbinary.logic.io.file.AbFile
// import org.w3c.dom.Document

@global export class DomDocumentFileHelper extends JObject {

    jclassName(): string {
        return "org.allbinary.data.tree.dom.document.DomDocumentFileHelper";
    }
    

    jinit_DomDocumentFileHelper_0(): DomDocumentFileHelper {
        super.jinit_JObject_0();
        return this;
    }
    

    static createDocument(xmlFile: AbFile | null): Document | null {
        do {
            return DomDocumentHelper.create_1_InputStream(AbFileInputStream.createFromAbFile(xmlFile));
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(e); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    static save(file: AbFile | null, document: Document | null): void {
        let dataOutputStream: AbDataOutputStream | null = null;
        do {
            let copyTransformerFactory: TransformerFactory | null = TransformerFactory.newInstance(); if (JThrowable.pending !== null) break;
            let copyTransformer: Transformer | null = copyTransformerFactory!.newTransformer(); if (JThrowable.pending !== null) break;
            let domSource: DOMSource | null = new DOMSource().jinit_DOMSource_1(document); if (JThrowable.pending !== null) break;
            if (file!.isFile()) {
                file!.delete_(); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            file!.createNewFile(); if (JThrowable.pending !== null) break;
            dataOutputStream = DataOutputStreamFactory.getInstance()!.getInstanceForAbFile(file); if (JThrowable.pending !== null) break;
            let streamResult: StreamResult | null = new StreamResult().jinit_StreamResult_1(dataOutputStream); if (JThrowable.pending !== null) break;
            copyTransformer!.transform(domSource, streamResult); if (JThrowable.pending !== null) break;
            dataOutputStream!.flush(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(e); return; }
        }
        {
            StreamUtil.getInstance()!.close(dataOutputStream); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

