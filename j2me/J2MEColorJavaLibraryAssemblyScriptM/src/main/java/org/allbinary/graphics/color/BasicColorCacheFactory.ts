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
// package org.allbinary.graphics.color
// import org.allbinary.logic.StdUtil
// import org.allbinary.util.ABHashtable

@global export class BasicColorCacheFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.color.BasicColorCacheFactory";
    }
    @lazy static jv_instance: BasicColorCacheFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): BasicColorCacheFactory | null {
        if (!BasicColorCacheFactory.js_instance) {
            BasicColorCacheFactory.js_instance = true;
            BasicColorCacheFactory.jv_instance = new BasicColorCacheFactory().jinit_BasicColorCacheFactory_0();
        }
        return BasicColorCacheFactory.jv_instance;
    }
    static set instance(value: BasicColorCacheFactory | null) {
        BasicColorCacheFactory.js_instance = true;
        BasicColorCacheFactory.jv_instance = value;
    }
    hashtable: ABHashtable | null = null;

    jfields_BasicColorCacheFactory(): void {
    this.hashtable = StdUtil.getInstance()!.createHashtable();
    }
    

    static getInstance(): BasicColorCacheFactory | null {
        return BasicColorCacheFactory.instance;
    }
    

    jinit_BasicColorCacheFactory_0(): BasicColorCacheFactory {
        super.jinit_JObject_0();
        this.jfields_BasicColorCacheFactory();
        return this;
    }
    

    add(basicDefaultColor: BasicColor | null): void {
        this.hashtable!.put(new JInteger().jinit_JInteger_1(basicDefaultColor!.intValue()), basicDefaultColor); if (JThrowable.pending !== null) return;
    }
    

    getAndOrCreate(integer: JInteger | null): BasicColor | null {
        let basicColor: BasicColor | null = changetype<BasicColor | null>(this.hashtable!.get(integer)); if (JThrowable.pending !== null) return null;
        if (basicColor == null) {
            basicColor = BasicColorFactory.getInstance()!.createInstance(integer!.intValue()); if (JThrowable.pending !== null) return null;
            this.hashtable!.put(integer, basicColor); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return basicColor;
    }
}

