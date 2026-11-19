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
// package org.allbinary.game.configuration.feature
// import org.allbinary.game.configuration.event.ChangedGameFeatureListener
// import org.allbinary.logic.StdUtil
// import org.allbinary.util.ABHashtable

@global export class Feature extends JObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.feature.Feature";
    }
    @lazy static jv_hashtable: ABHashtable | null = null;
    @lazy static js_hashtable: bool = false;
    static get hashtable(): ABHashtable | null {
        if (!Feature.js_hashtable) {
            Feature.js_hashtable = true;
            Feature.jv_hashtable = StdUtil.getInstance()!.createHashtable();
        }
        return Feature.jv_hashtable;
    }
    static set hashtable(value: ABHashtable | null) {
        Feature.js_hashtable = true;
        Feature.jv_hashtable = value;
    }
    name: string | null = null;

    jfields_Feature(): void {
    
    }
    

    jinit_Feature_1(name: string | null): Feature {
        super.jinit_JObject_0();
        this.jfields_Feature();
        this.name = name;
        Feature.add(name, this); if (JThrowable.pending !== null) return this;
        ChangedGameFeatureListener.getInstance()!.add(this); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    static getInstance1(name: string | null): Feature | null {
        return changetype<Feature | null>(Feature.hashtable!.get(name));
    }
    

    static add(name: string | null, gameFeature: Feature | null): void {
        Feature.hashtable!.put(name, gameFeature); if (JThrowable.pending !== null) return;
    }
    

    toString(): string | null {
        return this.getName();
    }
    

    getName(): string | null {
        return this.name;
    }
}

