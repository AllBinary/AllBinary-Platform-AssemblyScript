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
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class BasicLayerProcessor extends JObject {

    jclassName(): string {
        return "org.allbinary.layer.BasicLayerProcessor";
    }
    @lazy static jv_NULL_LAYER_PROCESSOR: BasicLayerProcessor | null = null;
    @lazy static js_NULL_LAYER_PROCESSOR: bool = false;
    static get NULL_LAYER_PROCESSOR(): BasicLayerProcessor | null {
        if (!BasicLayerProcessor.js_NULL_LAYER_PROCESSOR) {
            BasicLayerProcessor.js_NULL_LAYER_PROCESSOR = true;
            BasicLayerProcessor.jv_NULL_LAYER_PROCESSOR = new BasicLayerProcessor().jinit_BasicLayerProcessor_0();
        }
        return BasicLayerProcessor.jv_NULL_LAYER_PROCESSOR;
    }
    static set NULL_LAYER_PROCESSOR(value: BasicLayerProcessor | null) {
        BasicLayerProcessor.js_NULL_LAYER_PROCESSOR = true;
        BasicLayerProcessor.jv_NULL_LAYER_PROCESSOR = value;
    }
    logUtil: LogUtil | null = null;
    list: BasicArrayList | null = null;

    jfields_BasicLayerProcessor(): void {
    this.logUtil = LogUtil.getInstance();
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    }
    

    jinit_BasicLayerProcessor_0(): BasicLayerProcessor {
        super.jinit_JObject_0();
        this.jfields_BasicLayerProcessor();
        return this;
    }
    

    add(layerInterface: AllBinaryLayer | null): void {
        if (!this.list!.contains(layerInterface)) {
            this.list!.add(layerInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    process(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        { JThrowable.raise(new JException().jinit_JException_1(CommonStrings.getInstance()!.NOT_IMPLEMENTED)); return; }
    }
    

    getList(): BasicArrayList | null {
        return this.list;
    }
}

