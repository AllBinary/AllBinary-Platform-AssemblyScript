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
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.util.BasicArrayListUtil

@global export class LayerInterfaceFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.layer.LayerInterfaceFactory";
    }
    @lazy static jv_SINGLETON: LayerInterfaceFactory | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): LayerInterfaceFactory | null {
        if (!LayerInterfaceFactory.js_SINGLETON) {
            LayerInterfaceFactory.js_SINGLETON = true;
            LayerInterfaceFactory.jv_SINGLETON = new LayerInterfaceFactory().jinit_LayerInterfaceFactory_0();
        }
        return LayerInterfaceFactory.jv_SINGLETON;
    }
    static set SINGLETON(value: LayerInterfaceFactory | null) {
        LayerInterfaceFactory.js_SINGLETON = true;
        LayerInterfaceFactory.jv_SINGLETON = value;
    }
    logUtil: LogUtil | null = null;
    list: BasicArrayList | null = null;
    HASHTABLE_LABEL: string | null = null;

    jfields_LayerInterfaceFactory(): void {
    this.logUtil = LogUtil.getInstance();
    this.list = BasicArrayListUtil.getInstance()!.getImmutableInstance();
    this.HASHTABLE_LABEL = "Hashtable: ";
    }

    jinit_LayerInterfaceFactory_0(): LayerInterfaceFactory {
        super.jinit_JObject_0();
        this.jfields_LayerInterfaceFactory();
        return this;
    }
    

    static getInstance(): LayerInterfaceFactory | null {
        return LayerInterfaceFactory.SINGLETON;
    }
    

    init(): void {
        this.list = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return;
    }
    

    getNexInstance(hashtable: ABHashtable | null, x: i32, y: i32, z: i32): AllBinaryLayer | null {
        let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.HASHTABLE_LABEL)!.append(StringUtil.getInstance()!.toString1(hashtable))), this, commonStrings!.GET_INSTANCE); if (JThrowable.pending !== null) return null;
        let typeInteger: JInteger | null = changetype<JInteger | null>(hashtable!.get(changetype<Object | null>(Layer.ID))); if (JThrowable.pending !== null) return null;
        let layerInterfaceFactoryInterface: LayerInterfaceFactoryInterface | null = changetype<LayerInterfaceFactoryInterface | null>(this.list!.objectArray![typeInteger!.intValue() - 1]); if (JThrowable.pending !== null) return null;
        return layerInterfaceFactoryInterface!.getNextInstance(hashtable, x, y, z);
    }
    

    add(layerInterfaceFactoryInterface: LayerInterfaceFactoryInterface | null): void {
        this.list!.add(layerInterfaceFactoryInterface); if (JThrowable.pending !== null) return;
    }
}

