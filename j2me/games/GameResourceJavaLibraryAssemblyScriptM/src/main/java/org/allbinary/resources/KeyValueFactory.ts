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
// package org.allbinary.resources
// import org.allbinary.logic.StdUtil
// import org.allbinary.util.ABHashtable

@global export class KeyValueFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.resources.KeyValueFactory";
    }
    @lazy static jv_instance: KeyValueFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): KeyValueFactory | null {
        if (!KeyValueFactory.js_instance) {
            KeyValueFactory.js_instance = true;
            KeyValueFactory.jv_instance = new KeyValueFactory().jinit_KeyValueFactory_0();
        }
        return KeyValueFactory.jv_instance;
    }
    static set instance(value: KeyValueFactory | null) {
        KeyValueFactory.js_instance = true;
        KeyValueFactory.jv_instance = value;
    }
    MAP: ABHashtable | null = null;

    jfields_KeyValueFactory(): void {
    this.MAP = StdUtil.getInstance()!.createHashtable();
    }

    jinit_KeyValueFactory_0(): KeyValueFactory {
        super.jinit_JObject_0();
        this.jfields_KeyValueFactory();
        return this;
    }
    

    static getInstance(): KeyValueFactory | null {
        return KeyValueFactory.instance;
    }
    

    get(key: string | null): string | null {
        if (!this.MAP!.containsKey(changetype<Object | null>(key))) {
            return key;
        } if (JThrowable.pending !== null) return null;
        return changetype<string | null>(this.MAP!.get(changetype<Object | null>(key)));
    }
}

