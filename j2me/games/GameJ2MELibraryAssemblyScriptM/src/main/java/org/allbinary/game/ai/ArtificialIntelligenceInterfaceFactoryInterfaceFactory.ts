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
// package org.allbinary.game.ai
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.util.BasicArrayListUtil

@global export class ArtificialIntelligenceInterfaceFactoryInterfaceFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.ai.ArtificialIntelligenceInterfaceFactoryInterfaceFactory";
    }
    @lazy static jv_SINGLETON: ArtificialIntelligenceInterfaceFactoryInterfaceFactory | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): ArtificialIntelligenceInterfaceFactoryInterfaceFactory | null {
        if (!ArtificialIntelligenceInterfaceFactoryInterfaceFactory.js_SINGLETON) {
            ArtificialIntelligenceInterfaceFactoryInterfaceFactory.js_SINGLETON = true;
            ArtificialIntelligenceInterfaceFactoryInterfaceFactory.jv_SINGLETON = new ArtificialIntelligenceInterfaceFactoryInterfaceFactory().jinit_ArtificialIntelligenceInterfaceFactoryInterfaceFactory_0();
        }
        return ArtificialIntelligenceInterfaceFactoryInterfaceFactory.jv_SINGLETON;
    }
    static set SINGLETON(value: ArtificialIntelligenceInterfaceFactoryInterfaceFactory | null) {
        ArtificialIntelligenceInterfaceFactoryInterfaceFactory.js_SINGLETON = true;
        ArtificialIntelligenceInterfaceFactoryInterfaceFactory.jv_SINGLETON = value;
    }
    list: BasicArrayList | null = null;

    jfields_ArtificialIntelligenceInterfaceFactoryInterfaceFactory(): void {
    this.list = BasicArrayListUtil.getInstance()!.getImmutableInstance();
    }

    jinit_ArtificialIntelligenceInterfaceFactoryInterfaceFactory_0(): ArtificialIntelligenceInterfaceFactoryInterfaceFactory {
        super.jinit_JObject_0();
        this.jfields_ArtificialIntelligenceInterfaceFactoryInterfaceFactory();
        return this;
    }
    

    clear(): void {
        this.list = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return;
    }
    

    static getInstance(): ArtificialIntelligenceInterfaceFactoryInterfaceFactory | null {
        return ArtificialIntelligenceInterfaceFactoryInterfaceFactory.SINGLETON;
    }
    

    getInstanceFromCollection(hashtable: ABHashtable | null): ArtificialIntelligenceInterfaceFactoryInterface | null {
        let typeInteger: JInteger | null = changetype<JInteger | null>(hashtable!.get(changetype<Object | null>(BasicAI.ID))); if (JThrowable.pending !== null) return null;
        let type: i32 = typeInteger!.intValue(); if (JThrowable.pending !== null) return null;
        let artificialIntelligenceInterfaceFactoryInterface: ArtificialIntelligenceInterfaceFactoryInterface | null = changetype<ArtificialIntelligenceInterfaceFactoryInterface | null>(this.list!.objectArray![type - 1]);
        return artificialIntelligenceInterfaceFactoryInterface;
    }
    

    add(artificialIntelligenceInterfaceFactoryInterface: ArtificialIntelligenceInterfaceFactoryInterface | null): void {
        this.list!.add(artificialIntelligenceInterfaceFactoryInterface); if (JThrowable.pending !== null) return;
    }
}

