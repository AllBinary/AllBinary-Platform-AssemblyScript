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
// package org.allbinary.layer
// import org.allbinary.TsUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonSeps

@global export class LayerManagerLogging extends LayerManagerLoggingBase {

    jclassName(): string {
        return "org.allbinary.layer.LayerManagerLogging";
    }
    @lazy static jv_instance: LayerManagerLogging | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LayerManagerLogging | null {
        if (!LayerManagerLogging.js_instance) {
            LayerManagerLogging.js_instance = true;
            LayerManagerLogging.jv_instance = new LayerManagerLogging().jinit_LayerManagerLogging_0();
        }
        return LayerManagerLogging.jv_instance;
    }
    static set instance(value: LayerManagerLogging | null) {
        LayerManagerLogging.js_instance = true;
        LayerManagerLogging.jv_instance = value;
    }
    @lazy static removeFailed: bool = false;
    logUtil: LogUtil | null = null;
    stringBuilder: StringMaker | null = null;
    APPEND: string | null = null;
    APPEND_: string | null = null;
    _AT_: string | null = null;
    ATTEMPT_REMOVE_: string | null = null;
    REMOVE_: string | null = null;
    REMOVE: string | null = null;
    DID_NOT_REMOVE: string | null = null;
    CLEAR: string | null = null;

    jfields_LayerManagerLogging(): void {
    this.logUtil = LogUtil.getInstance();
    this.stringBuilder = new StringMaker().jinit_StringMaker_0();
    this.APPEND = "append";
    this.APPEND_ = " append: ";
    this._AT_ = " at: ";
    this.ATTEMPT_REMOVE_ = " Remove Attempt: ";
    this.REMOVE_ = " Remove: ";
    this.REMOVE = "remove";
    this.DID_NOT_REMOVE = " Did not remove: ";
    this.CLEAR = " Clear List";
    }

    jinit_LayerManagerLogging_0(): LayerManagerLogging {
        super.jinit_LayerManagerLoggingBase_0();
        this.jfields_LayerManagerLogging();
        return this;
    }
    

    static getInstance(): LayerManagerLogging | null {
        return LayerManagerLogging.instance;
    }
    

    append(layerInterface: AllBinaryLayer | null): void {
        this.stringBuilder!.delete_(0, this.stringBuilder!.length()); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(this.stringBuilder!.appendint(TsUtil.getInstance()!.hashCode1(this))!.append(this.APPEND_)!.append(layerInterface!.getName())), this, this.APPEND); if (JThrowable.pending !== null) return;
    }
    

    appendAt(layerInterface: AllBinaryLayer | null, index: i32): void {
        this.stringBuilder!.delete_(0, this.stringBuilder!.length()); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(this.stringBuilder!.appendint(TsUtil.getInstance()!.hashCode1(this))!.append(this.APPEND_)!.append(layerInterface!.getName())!.append(this._AT_)!.appendint(index)), this, this.APPEND); if (JThrowable.pending !== null) return;
    }
    

    remove(layerInterface: AllBinaryLayer | null): void {
        if (layerInterface == null) {
            this.stringBuilder!.delete_(0, this.stringBuilder!.length()); if (JThrowable.pending !== null) return;
            this.logUtil!.putF(JObject.jtoString(this.stringBuilder!.appendint(TsUtil.getInstance()!.hashCode1(this))!.append(this.ATTEMPT_REMOVE_)!.append(StringUtil.getInstance()!.toString1(layerInterface))), this, this.REMOVE); if (JThrowable.pending !== null) return;
        } else {
            this.stringBuilder!.delete_(0, this.stringBuilder!.length()); if (JThrowable.pending !== null) return;
            this.logUtil!.putF(JObject.jtoString(this.stringBuilder!.appendint(TsUtil.getInstance()!.hashCode1(this))!.append(this.ATTEMPT_REMOVE_)!.append(layerInterface!.getName())), this, this.REMOVE); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    removeResult(layerManager: LayerManager | null, layerInterface: AllBinaryLayer | null, result: bool): void {
        if (layerInterface == null) {
            this.stringBuilder!.delete_(0, this.stringBuilder!.length()); if (JThrowable.pending !== null) return;
            this.logUtil!.putF(JObject.jtoString(this.stringBuilder!.appendint(TsUtil.getInstance()!.hashCode1(this))!.append(this.REMOVE_)!.append(StringUtil.getInstance()!.toString1(layerInterface))), this, this.REMOVE); if (JThrowable.pending !== null) return;
        } else if (result) {
            if (LayerManagerLogging.removeFailed) {
                this.stringBuilder!.delete_(0, this.stringBuilder!.length()); if (JThrowable.pending !== null) return;
                this.logUtil!.putF(JObject.jtoString(this.stringBuilder!.appendint(TsUtil.getInstance()!.hashCode1(this))!.append(this.REMOVE_)!.append(layerInterface!.getName())), this, this.REMOVE); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } else {
            this.stringBuilder!.delete_(0, this.stringBuilder!.length()); if (JThrowable.pending !== null) return;
            this.logUtil!.putF(JObject.jtoString(this.stringBuilder!.appendint(TsUtil.getInstance()!.hashCode1(this))!.append(this.DID_NOT_REMOVE)!.append(layerInterface!.getName())), this, this.REMOVE); if (JThrowable.pending !== null) return;
            LayerManagerLogging.removeFailed = true;
        } if (JThrowable.pending !== null) return;
    }
    

    log(layerManager: LayerManager | null): void {
        this.stringBuilder!.delete_(0, this.stringBuilder!.length()); if (JThrowable.pending !== null) return;
        let size: i32 = layerManager!.getSize(); if (JThrowable.pending !== null) return;
        let commonSeps: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) return;
        this.stringBuilder!.append(JInteger.toHexString(TsUtil.getInstance()!.hashCode1(layerManager)))!.append(commonSeps!.COLON_SEP); if (JThrowable.pending !== null) return;
        this.stringBuilder!.appendint(size)!.append(commonSeps!.COLON_SEP); if (JThrowable.pending !== null) return;
        let allBinaryLayer: AllBinaryLayer | null = null;
        for (let index: i32 = 0; index < size; index++) {
            allBinaryLayer = (changetype<AllBinaryLayer | null>(layerManager!.getLayerAt(index))); if (JThrowable.pending !== null) return;
            this.stringBuilder!.append(allBinaryLayer!.getName())!.append(commonSeps!.COMMA); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(this.stringBuilder), this, this.REMOVE); if (JThrowable.pending !== null) return;
    }
    

    clear(): void {
        this.stringBuilder!.delete_(0, this.stringBuilder!.length()); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(this.stringBuilder!.appendint(TsUtil.getInstance()!.hashCode1(this))!.append(this.CLEAR)), this, this.CLEAR); if (JThrowable.pending !== null) return;
    }
}

