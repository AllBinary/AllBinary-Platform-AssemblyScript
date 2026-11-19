/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// import java.io.ByteArrayOutputStream
// import java.io.StringReader
// import java.io.StringWriter
// import java.io.Writer
// import javax.xml.parsers.DocumentBuilderFactory
// import javax.xml.transform.OutputKeys
// import javax.xml.transform.Transformer
// import javax.xml.transform.TransformerConfigurationException
// import javax.xml.transform.TransformerFactory
// import javax.xml.transform.dom.DOMSource
// import javax.xml.transform.stream.StreamResult
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.java.bool.BooleanFactory
// import org.allbinary.logic.java.characters.CharacterSetData
// import org.w3c.dom.Document
// import org.xml.sax.InputSource

@global export class XmlDocumentHelper extends JObject {

    jclassName(): string {
        return "org.allbinary.data.tree.dom.document.XmlDocumentHelper";
    }
    @lazy static jv_instance: XmlDocumentHelper | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): XmlDocumentHelper | null {
        if (!XmlDocumentHelper.js_instance) {
            XmlDocumentHelper.js_instance = true;
            XmlDocumentHelper.jv_instance = new XmlDocumentHelper().jinit_XmlDocumentHelper_0();
        }
        return XmlDocumentHelper.jv_instance;
    }
    static set instance(value: XmlDocumentHelper | null) {
        XmlDocumentHelper.js_instance = true;
        XmlDocumentHelper.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    INDENT_NUMBER: string | null = null;
    indent: i32 = 0;
    ignoreDeclaration: bool = false;

    jfields_XmlDocumentHelper(): void {
    this.logUtil = LogUtil.getInstance();
    this.INDENT_NUMBER = "indent-number";
    this.indent = 0;
    this.ignoreDeclaration = false;
    }
    

    static getInstance(): XmlDocumentHelper | null {
        return XmlDocumentHelper.instance;
    }
    

    jinit_XmlDocumentHelper_0(): XmlDocumentHelper {
        super.jinit_JObject_0();
        this.jfields_XmlDocumentHelper();
        this.init(4, true); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    init(indent: i32, ignoreDeclaration: bool): void {
        this.indent = indent;
        this.ignoreDeclaration = ignoreDeclaration;
    }
    

    createTransformer_2(indent: i32, ignoreDeclaration: bool): Transformer | null {
        let booleanFactory: BooleanFactory | null = BooleanFactory.getInstance(); if (JThrowable.pending !== null) return null;
        let transformerFactory: TransformerFactory | null = TransformerFactory.newInstance(); if (JThrowable.pending !== null) return null;
        transformerFactory!.setAttribute(this.INDENT_NUMBER, indent); if (JThrowable.pending !== null) return null;
        let transformer: Transformer | null = transformerFactory!.newTransformer(); if (JThrowable.pending !== null) return null;
        transformer!.setOutputProperty(OutputKeys.ENCODING, CharacterSetData.getInstance()!.UTF_8); if (JThrowable.pending !== null) return null;
        transformer!.setOutputProperty(OutputKeys.OMIT_XML_DECLARATION, (ignoreDeclaration ? booleanFactory!.YES : booleanFactory!.NO)); if (JThrowable.pending !== null) return null;
        transformer!.setOutputProperty(OutputKeys.INDENT, booleanFactory!.YES); if (JThrowable.pending !== null) return null;
        return transformer;
    }
    

    createTransformer_0(): Transformer | null {
        let currentIndent: i32 = 0;
        let currentIgnoreDeclaration: bool = false;
        {
            currentIndent = this.indent;
            currentIgnoreDeclaration = this.ignoreDeclaration;
        }
        return this.createTransformer_2(currentIndent, currentIgnoreDeclaration);
    }
    

    format(xmlString: string | null): string | null {
        return this.formatWithTransformer(xmlString, this.createTransformer_0());
    }
    

    formatWithTransformer(xmlString: string | null, transformer: Transformer | null): string | null {
        let src: InputSource | null = new InputSource().jinit_InputSource_1(new JStringReader().jinit_JStringReader_1(xmlString)); if (JThrowable.pending !== null) return null;
        let document: Document | null = DocumentBuilderFactory.newInstance()!.newDocumentBuilder()!.parse(src); if (JThrowable.pending !== null) return null;
        let out: JWriter | null = new JStringWriter().jinit_JStringWriter_0(); if (JThrowable.pending !== null) return null;
        transformer!.transform(new DOMSource().jinit_DOMSource_1(document), new StreamResult().jinit_StreamResult_1(out)); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(out);
    }
    

    static toString1(document: Document | null): string | null {
        do {
            let domSource: DOMSource | null = new DOMSource().jinit_DOMSource_1(document); if (JThrowable.pending !== null) break;
            let byteArrayOutputStream: JByteArrayOutputStream | null = new JByteArrayOutputStream().jinit_JByteArrayOutputStream_0(); if (JThrowable.pending !== null) break;
            let streamResult: StreamResult | null = new StreamResult().jinit_StreamResult_1(byteArrayOutputStream); if (JThrowable.pending !== null) break;
            let copyTransformerFactory: TransformerFactory | null = TransformerFactory.newInstance(); if (JThrowable.pending !== null) break;
            let copyTransformer: Transformer | null = copyTransformerFactory!.newTransformer(); if (JThrowable.pending !== null) break;
            copyTransformer!.transform(domSource, streamResult); if (JThrowable.pending !== null) break;
            return JObject.jtoString(byteArrayOutputStream);
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            { JThrowable.raise(e); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

