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

@global export class PartInterfaceUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.game.part.PartInterfaceUtil";
    }
    @lazy static jv_SINGLETON: StaticArray<PartInterface | null> | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): StaticArray<PartInterface | null> | null {
        if (!PartInterfaceUtil.js_SINGLETON) {
            PartInterfaceUtil.js_SINGLETON = true;
            PartInterfaceUtil.jv_SINGLETON = new StaticArray<PartInterface | null>(0);
        }
        return PartInterfaceUtil.jv_SINGLETON;
    }
    static set SINGLETON(value: StaticArray<PartInterface | null> | null) {
        PartInterfaceUtil.js_SINGLETON = true;
        PartInterfaceUtil.jv_SINGLETON = value;
    }

    jinit_PartInterfaceUtil_0(): PartInterfaceUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static getZeroArray(): StaticArray<PartInterface | null> | null {
        return PartInterfaceUtil.SINGLETON;
    }
}

