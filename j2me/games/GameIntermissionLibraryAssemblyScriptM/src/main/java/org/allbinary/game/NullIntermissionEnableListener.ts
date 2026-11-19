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
// package org.allbinary.game

@global export class NullIntermissionEnableListener extends JObject implements IntermissionEnableListenerInterface {

    jclassName(): string {
        return "org.allbinary.game.NullIntermissionEnableListener";
    }
    @lazy static jv_SINGLETON: IntermissionEnableListenerInterface | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): IntermissionEnableListenerInterface | null {
        if (!NullIntermissionEnableListener.js_SINGLETON) {
            NullIntermissionEnableListener.js_SINGLETON = true;
            NullIntermissionEnableListener.jv_SINGLETON = new NullIntermissionEnableListener().jinit_NullIntermissionEnableListener_0();
        }
        return NullIntermissionEnableListener.jv_SINGLETON;
    }
    static set SINGLETON(value: IntermissionEnableListenerInterface | null) {
        NullIntermissionEnableListener.js_SINGLETON = true;
        NullIntermissionEnableListener.jv_SINGLETON = value;
    }
    

    static getInstance(): IntermissionEnableListenerInterface | null {
        return NullIntermissionEnableListener.SINGLETON;
    }
    

    jinit_NullIntermissionEnableListener_0(): NullIntermissionEnableListener {
        super.jinit_JObject_0();
        return this;
    }
    

    notifyIntermission(enable: bool): void {
    }
}

