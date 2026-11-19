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
// import java.io.ByteArrayOutputStream
// import java.io.File
// import java.io.OutputStream
// import java.io.StringBufferInputStream
// import javax.xml.transform.Templates
// import javax.xml.transform.Transformer
// import javax.xml.transform.TransformerFactory
// import javax.xml.transform.URIResolver
// import javax.xml.transform.stream.StreamResult
// import javax.xml.transform.stream.StreamSource
// import org.allbinary.data.tree.dom.document.XmlDocumentHelper
// import org.w3c.dom.Document

//import org.allbinary.data.tree.dom.document.DomDocumentHelper;
@global export class XslHelper extends JObject {

    jclassName(): string {
        return "org.allbinary.data.tree.dom.XslHelper";
    }
    @lazy static jv_instance: XslHelper | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): XslHelper | null {
        if (!XslHelper.js_instance) {
            XslHelper.js_instance = true;
            XslHelper.jv_instance = new XslHelper().jinit_XslHelper_0();
        }
        return XslHelper.jv_instance;
    }
    static set instance(value: XslHelper | null) {
        XslHelper.js_instance = true;
        XslHelper.jv_instance = value;
    }
    

    static getInstance(): XslHelper | null {
        return XslHelper.instance;
    }
    

    jinit_XslHelper_0(): XslHelper {
        super.jinit_JObject_0();
        return this;
    }
    

    translate_3_StreamSourceStreamSourceStreamResult(xsltStreamSource: StreamSource | null, xmlStreamSource: StreamSource | null, streamResult: StreamResult | null): JOutputStream | null {
        do {
            let transformerFactory: TransformerFactory | null = TransformerFactory.newInstance(); if (JThrowable.pending !== null) break;
            let transformer: Transformer | null = transformerFactory!.newTransformer(xsltStreamSource); if (JThrowable.pending !== null) break;
            transformer!.transform(xmlStreamSource, streamResult); if (JThrowable.pending !== null) break;
            return streamResult!.getOutputStream();
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(e); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    translate_4(resolver: URIResolver | null, xsltStreamSource: StreamSource | null, xmlStreamSource: StreamSource | null, streamResult: StreamResult | null): JOutputStream | null {
        do {
            let tFactory: TransformerFactory | null = TransformerFactory.newInstance(); if (JThrowable.pending !== null) break;
            tFactory!.setURIResolver(resolver); if (JThrowable.pending !== null) break;
            let transformer: Transformer | null = tFactory!.newTransformer(xsltStreamSource); if (JThrowable.pending !== null) break;
            transformer!.transform(xmlStreamSource, streamResult); if (JThrowable.pending !== null) break;
            return streamResult!.getOutputStream();
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(e); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    translateTemplate(templates: Templates | null, xmlStreamSource: StreamSource | null): string | null {
        do {
            let outputStream: JByteArrayOutputStream | null = new JByteArrayOutputStream().jinit_JByteArrayOutputStream_0(); if (JThrowable.pending !== null) break;
            let streamResult: StreamResult | null = new StreamResult().jinit_StreamResult_1(outputStream); if (JThrowable.pending !== null) break;
            templates!.newTransformer()!.transform(xmlStreamSource, streamResult); if (JThrowable.pending !== null) break;
            return JObject.jtoString(streamResult!.getOutputStream());
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(e); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    translate_2_StreamSourceDocument(xsltStreamSource: StreamSource | null, xmlDocument: Document | null): string | null {
        do {
            let outputStream: JByteArrayOutputStream | null = new JByteArrayOutputStream().jinit_JByteArrayOutputStream_0(); if (JThrowable.pending !== null) break;
            return JObject.jtoString(this.translate_3_StreamSourceStreamSourceStreamResult(xsltStreamSource, new StreamSource().jinit_StreamSource_1(new JStringBufferInputStream().jinit_JStringBufferInputStream_1(XmlDocumentHelper.toString1(xmlDocument))), new StreamResult().jinit_StreamResult_1(outputStream)));
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(e); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    translate_2_StreamSourceStreamSource(xsltStreamSource: StreamSource | null, xmlStreamSource: StreamSource | null): string | null {
        do {
            let outputStream: JByteArrayOutputStream | null = new JByteArrayOutputStream().jinit_JByteArrayOutputStream_0(); if (JThrowable.pending !== null) break;
            return JObject.jtoString(this.translate_3_StreamSourceStreamSourceStreamResult(xsltStreamSource, xmlStreamSource, new StreamResult().jinit_StreamResult_1(outputStream)));
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(e); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    translate_3_URIResolverStreamSourceStreamSource(resolver: URIResolver | null, xsltStreamSource: StreamSource | null, xmlStreamSource: StreamSource | null): string | null {
        do {
            let outputStream: JByteArrayOutputStream | null = new JByteArrayOutputStream().jinit_JByteArrayOutputStream_0(); if (JThrowable.pending !== null) break;
            return JObject.jtoString(this.translate_4(resolver, xsltStreamSource, xmlStreamSource, new StreamResult().jinit_StreamResult_1(outputStream)));
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(e); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    export_(outputFile: JFile | null, xsltFilePath: string | null, xmlDocument: Document | null): void {
        do {
            outputFile!.createNewFile(); if (JThrowable.pending !== null) break;
            this.translate_3_StreamSourceStreamSourceStreamResult(new StreamSource().jinit_StreamSource_1(xsltFilePath), new StreamSource().jinit_StreamSource_1(new JStringBufferInputStream().jinit_JStringBufferInputStream_1(XmlDocumentHelper.toString1(xmlDocument))), new StreamResult().jinit_StreamResult_1(outputFile)); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(e); return; }
        } if (JThrowable.pending !== null) return;
    }
}

