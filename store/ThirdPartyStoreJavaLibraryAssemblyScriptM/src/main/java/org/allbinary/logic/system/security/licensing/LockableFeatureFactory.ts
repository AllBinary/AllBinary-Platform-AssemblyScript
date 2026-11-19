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
// package org.allbinary.logic.system.security.licensing
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class LockableFeatureFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.logic.system.security.licensing.LockableFeatureFactory";
    }
    @lazy static jv_instance: LockableFeatureFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LockableFeatureFactory | null {
        if (!LockableFeatureFactory.js_instance) {
            LockableFeatureFactory.js_instance = true;
            LockableFeatureFactory.jv_instance = new LockableFeatureFactory().jinit_LockableFeatureFactory_0();
        }
        return LockableFeatureFactory.jv_instance;
    }
    static set instance(value: LockableFeatureFactory | null) {
        LockableFeatureFactory.js_instance = true;
        LockableFeatureFactory.jv_instance = value;
    }
    list: BasicArrayList | null = null;

    jfields_LockableFeatureFactory(): void {
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    }

    jinit_LockableFeatureFactory_0(): LockableFeatureFactory {
        super.jinit_JObject_0();
        this.jfields_LockableFeatureFactory();
        return this;
    }
    

    static getInstance(): LockableFeatureFactory | null {
        return LockableFeatureFactory.instance;
    }
    

    getList(): BasicArrayList | null {
        return this.list;
    }
}

