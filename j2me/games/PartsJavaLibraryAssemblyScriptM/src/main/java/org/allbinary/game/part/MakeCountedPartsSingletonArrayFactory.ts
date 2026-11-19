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
// package org.allbinary.game.part
// import org.allbinary.game.layer.pickup.CountedPickedUpLayerInterfaceFactory
// import org.allbinary.game.layer.pickup.CountedPickedUpLayerInterfaceFactoryPool
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.util.BasicArrayListUtil

@global export class MakeCountedPartsSingletonArrayFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.part.MakeCountedPartsSingletonArrayFactory";
    }
    @lazy static jv_instance: MakeCountedPartsSingletonArrayFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): MakeCountedPartsSingletonArrayFactory | null {
        if (!MakeCountedPartsSingletonArrayFactory.js_instance) {
            MakeCountedPartsSingletonArrayFactory.js_instance = true;
            MakeCountedPartsSingletonArrayFactory.jv_instance = new MakeCountedPartsSingletonArrayFactory().jinit_MakeCountedPartsSingletonArrayFactory_0();
        }
        return MakeCountedPartsSingletonArrayFactory.jv_instance;
    }
    static set instance(value: MakeCountedPartsSingletonArrayFactory | null) {
        MakeCountedPartsSingletonArrayFactory.js_instance = true;
        MakeCountedPartsSingletonArrayFactory.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    list: BasicArrayList | null = null;

    jfields_MakeCountedPartsSingletonArrayFactory(): void {
    this.logUtil = LogUtil.getInstance();
    this.list = BasicArrayListUtil.getInstance()!.getImmutableInstance();
    }

    jinit_MakeCountedPartsSingletonArrayFactory_0(): MakeCountedPartsSingletonArrayFactory {
        super.jinit_JObject_0();
        this.jfields_MakeCountedPartsSingletonArrayFactory();
        return this;
    }
    

    static getInstance(): MakeCountedPartsSingletonArrayFactory | null {
        return MakeCountedPartsSingletonArrayFactory.instance;
    }
    

    getUpdated(partInterfaceArray: StaticArray<PartInterface | null> | null): StaticArray<PartInterface | null> | null {
        this.list = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < partInterfaceArray!.length; index++) {
            this.list!.add(partInterfaceArray![index]); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        let countedBasicArrayList: BasicArrayList | null = CountedPickedUpLayerInterfaceFactoryPool.getInstance()!.getList(); if (JThrowable.pending !== null) return null;
        let layerInterfaceFactoryInterface: CountedPickedUpLayerInterfaceFactory | null = null;
        let size: i32 = countedBasicArrayList!.size(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < size; index++) {
            layerInterfaceFactoryInterface = changetype<CountedPickedUpLayerInterfaceFactory | null>(countedBasicArrayList!.objectArray![index]);
            this.list!.add(new CountedLayerInterfaceFactoryPart().jinit_CountedLayerInterfaceFactoryPart_2(0, layerInterfaceFactoryInterface)); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("Total Parts: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.list!.size()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" Counted: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(countedBasicArrayList!.size()); if (JThrowable.pending !== null) return null;
        let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
        this.logUtil!.putF(JObject.jtoString(stringBuffer), this, commonStrings!.GET_INSTANCE); if (JThrowable.pending !== null) return null;
        let newPartInterfaceArray: StaticArray<PartInterface | null> | null = new StaticArray<PartInterface | null>(this.list!.size()); if (JThrowable.pending !== null) return null;
        let newSize: i32 = newPartInterfaceArray!.length;
        for (let index: i32 = 0; index < newSize; index++) {
            newPartInterfaceArray![index] = changetype<PartInterface | null>(this.list!.get(index)); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return newPartInterfaceArray;
    }
}

