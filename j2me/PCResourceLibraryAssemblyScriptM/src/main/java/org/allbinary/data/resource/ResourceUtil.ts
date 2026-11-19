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
// package org.allbinary.data.resource
// import java.io.ByteArrayInputStream
// import java.io.ByteArrayOutputStream
// import java.io.FileInputStream
// import java.io.InputStream
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.io.StreamUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil

//J2SE - PC
@global export class ResourceUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.data.resource.ResourceUtil";
    }
    @lazy static jv_instance: ResourceUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ResourceUtil | null {
        if (!ResourceUtil.js_instance) {
            ResourceUtil.js_instance = true;
            ResourceUtil.jv_instance = new ResourceUtil().jinit_ResourceUtil_0();
        }
        return ResourceUtil.jv_instance;
    }
    static set instance(value: ResourceUtil | null) {
        ResourceUtil.js_instance = true;
        ResourceUtil.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    path: string | null = null;
    ext: string | null = null;

    jfields_ResourceUtil(): void {
    this.logUtil = LogUtil.getInstance();
    this.path = StringUtil.getInstance()!.EMPTY_STRING;
    this.ext = StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    static getInstance(): ResourceUtil | null {
        return ResourceUtil.instance;
    }
    

    jinit_ResourceUtil_0(): ResourceUtil {
        super.jinit_JObject_0();
        this.jfields_ResourceUtil();
        return this;
    }
    

    setLoadingPaths(path: string | null, ext: string | null): void {
        this.path = path;
        this.ext = ext;
    }
    

    setClassLoader(classLoader: JClassLoader | null): void {
    }
    

    getResourceAsStream(resource: string | null): JInputStream | null {
        let inputStream: JInputStream | null = this.getResourceAsStreamAtStart(resource, 2); if (JThrowable.pending !== null) return null;
        if (inputStream == null) {
            inputStream = this.getResourceAsStreamAtStart(resource, 1); if (JThrowable.pending !== null) return null;
            if (inputStream == null) {
                { JThrowable.raise(new JException().jinit_JException_1(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Unable to obtain: ")!.append(resource)))); return null; }
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return inputStream;
    }
    

    getResourceAsStreamAtStart(resource: string | null, startIndex: i32): JInputStream | null {
        let inputStream: JInputStream | null = new JFileInputStream().jinit_JFileInputStream_1(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.path)!.append(resource)!.append(this.ext))); if (JThrowable.pending !== null) return null;
        if (inputStream != null) {
            let byteArray: StaticArray<i8> | null = new StaticArray<i8>(inputStream!.available()); if (JThrowable.pending !== null) return null;
            StreamUtil.getInstance()!.getByteArray(inputStream, new JByteArrayOutputStream().jinit_JByteArrayOutputStream_0(), byteArray); if (JThrowable.pending !== null) return null;
            return new JByteArrayInputStream().jinit_JByteArrayInputStream_1(byteArray);
        } if (JThrowable.pending !== null) return null;
        return inputStream;
    }
    

    addResource(resource: string | null, value: JInteger | null): void {
    }
}

