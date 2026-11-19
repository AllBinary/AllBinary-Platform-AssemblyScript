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
// package org.allbinary.game.layer
// import java.util.Enumeration
// import org.allbinary.layer.Layer
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.util.EnumerationUtil

@global export class LevelLayersFinder extends JObject {

    jclassName(): string {
        return "org.allbinary.game.layer.LevelLayersFinder";
    }
    @lazy static jv_instance: LevelLayersFinder | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LevelLayersFinder | null {
        if (!LevelLayersFinder.js_instance) {
            LevelLayersFinder.js_instance = true;
            LevelLayersFinder.jv_instance = new LevelLayersFinder().jinit_LevelLayersFinder_0();
        }
        return LevelLayersFinder.jv_instance;
    }
    static set instance(value: LevelLayersFinder | null) {
        LevelLayersFinder.js_instance = true;
        LevelLayersFinder.jv_instance = value;
    }
    enumerationUtil: EnumerationUtil | null = null;

    jfields_LevelLayersFinder(): void {
    this.enumerationUtil = EnumerationUtil.getInstance();
    }

    jinit_LevelLayersFinder_0(): LevelLayersFinder {
        super.jinit_JObject_0();
        this.jfields_LevelLayersFinder();
        return this;
    }
    

    static getInstance(): LevelLayersFinder | null {
        return LevelLayersFinder.instance;
    }
    

    get(hashtable: ABHashtable | null): BasicArrayList | null {
        let smallIntegerSingletonFactory: SmallIntegerSingletonFactory | null = SmallIntegerSingletonFactory.getInstance(); if (JThrowable.pending !== null) return null;
        let list: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return null;
        let enumeration: JEnumeration | null = hashtable!.keys(); if (JThrowable.pending !== null) return null;
        let layerHashtableCanBeNull: ABHashtable | null = null;
        let integerCanBeNull: JInteger | null = null;
        let cachedIntegerCanBeNull: JInteger | null = null;
        while (this.enumerationUtil!.hasMoreElements(enumeration)) {
            layerHashtableCanBeNull = changetype<ABHashtable | null>(hashtable!.get(changetype<Object | null>(this.enumerationUtil!.nextElement(enumeration)))); if (JThrowable.pending !== null) return null;
            integerCanBeNull = changetype<JInteger | null>(layerHashtableCanBeNull!.get(changetype<Object | null>(Layer.ID))); if (JThrowable.pending !== null) return null;
            cachedIntegerCanBeNull = smallIntegerSingletonFactory!.getAt(integerCanBeNull!.intValue()); if (JThrowable.pending !== null) return null;
            if (!list!.contains(cachedIntegerCanBeNull)) {
                list!.add(cachedIntegerCanBeNull); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return list;
    }
}

