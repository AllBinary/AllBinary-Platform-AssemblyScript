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
// import java.io.InputStream
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonSeps
// import org.allbinary.string.CommonStrings

//J2ME
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

    jfields_ResourceUtil(): void {
    this.logUtil = LogUtil.getInstance();
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
        this.logUtil!.putF(CommonStrings.getInstance()!.NOT_IMPLEMENTED, this, "setLoadingPaths"); if (JThrowable.pending !== null) return;
    }
    

    getResourceAsStream(resource: string | null): JInputStream | null {
        let inputStream: JInputStream | null = JObject.jclassOf(resource)!.getResourceAsStream(resource); if (JThrowable.pending !== null) return null;
        if (inputStream == null) {
            inputStream = this.getResourceAsStreamAtStart(resource, 2); if (JThrowable.pending !== null) return null;
            if (inputStream == null) {
                inputStream = this.getResourceAsStreamAtStart(resource, 1); if (JThrowable.pending !== null) return null;
                if (inputStream == null) {
                    let stringMaker: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
                    let index: i32 = JString.lastIndexOf1(resource, (<u16>0x2F)); if (JThrowable.pending !== null) return null;
                    let resourcePath: string | null = JString.substring1(resource, index + 1); if (JThrowable.pending !== null) return null;
                    inputStream = JObject.jclassOf(resource)!.getResourceAsStream(resourcePath); if (JThrowable.pending !== null) return null;
                    if (inputStream == null) {
                        resourcePath = JString.substring1(resource, index); if (JThrowable.pending !== null) return null;
                        inputStream = JObject.jclassOf(resource)!.getResourceAsStream(resourcePath); if (JThrowable.pending !== null) return null;
                        if (inputStream == null) {
                            let RES: string | null = "res";
                            resourcePath = JObject.jtoString(stringMaker!.append(RES)!.append(JString.substring1(resource, index))); if (JThrowable.pending !== null) return null;
                            inputStream = JObject.jclassOf(resource)!.getResourceAsStream(resourcePath); if (JThrowable.pending !== null) return null;
                            if (inputStream == null) {
                                stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return null;
                                resourcePath = JObject.jtoString(stringMaker!.append("/")!.append(RES)!.append(JString.substring1(resource, index))); if (JThrowable.pending !== null) return null;
                                inputStream = JObject.jclassOf(resource)!.getResourceAsStream(resourcePath); if (JThrowable.pending !== null) return null;
                                let COLON: string | null = CommonSeps.getInstance()!.COLON; if (JThrowable.pending !== null) return null;
                                if (inputStream == null) {
                                    stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return null;
                                    resourcePath = JObject.jtoString(stringMaker!.append(RES)!.append(COLON)!.append(JString.substring1(resource, index))); if (JThrowable.pending !== null) return null;
                                    inputStream = JObject.jclassOf(resource)!.getResourceAsStream(resourcePath); if (JThrowable.pending !== null) return null;
                                    if (inputStream == null) {
                                        stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return null;
                                        resourcePath = JObject.jtoString(stringMaker!.append(RES)!.append(COLON)!.append(JString.substring1(resource, index + 1))); if (JThrowable.pending !== null) return null;
                                        inputStream = JObject.jclassOf(resource)!.getResourceAsStream(resourcePath); if (JThrowable.pending !== null) return null;
                                        if (inputStream == null) {
                                            let RESOURCE_STRING: string | null = "resource";
                                            stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return null;
                                            resourcePath = JObject.jtoString(stringMaker!.append(RESOURCE_STRING)!.append(COLON)!.append(JString.substring1(resource, index))); if (JThrowable.pending !== null) return null;
                                            inputStream = JObject.jclassOf(resource)!.getResourceAsStream(resourcePath); if (JThrowable.pending !== null) return null;
                                            if (inputStream == null) {
                                                stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return null;
                                                resourcePath = JObject.jtoString(stringMaker!.append(RESOURCE_STRING)!.append(COLON)!.append(JString.substring1(resource, index + 1))); if (JThrowable.pending !== null) return null;
                                                inputStream = JObject.jclassOf(resource)!.getResourceAsStream(resourcePath); if (JThrowable.pending !== null) return null;
                                                if (inputStream == null) {
                                                    stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return null;
                                                    { JThrowable.raise(new JException().jinit_JException_1(JObject.jtoString(stringMaker!.append("Unable to obtain: ")!.append(resource)))); return null; }
                                                } if (JThrowable.pending !== null) return null;
                                            } if (JThrowable.pending !== null) return null;
                                        } if (JThrowable.pending !== null) return null;
                                    } if (JThrowable.pending !== null) return null;
                                } if (JThrowable.pending !== null) return null;
                            } if (JThrowable.pending !== null) return null;
                        } if (JThrowable.pending !== null) return null;
                    } if (JThrowable.pending !== null) return null;
                } if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return inputStream;
    }
    

    getResourceAsStreamAtStart(resource: string | null, startIndex: i32): JInputStream | null {
        let stringMaker: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let index: i32 = JString.indexOf1(resource, CommonSeps.getInstance()!.COLON); if (JThrowable.pending !== null) return null;
        let resourcePath: string | null = JString.substring1(resource, index + startIndex); if (JThrowable.pending !== null) return null;
        let inputStream: JInputStream | null = JObject.jclassOf(resource)!.getResourceAsStream(resourcePath); if (JThrowable.pending !== null) return null;
        if (inputStream != null) {
            return inputStream;
        }
        return inputStream;
    }
    

    addResource(resource: string | null, value: JInteger | null): void {
    }
}

