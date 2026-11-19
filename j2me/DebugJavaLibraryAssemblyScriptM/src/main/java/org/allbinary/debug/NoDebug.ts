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
// package org.allbinary.debug

@global export class NoDebug extends JObject implements DebugInterface {

    jclassName(): string {
        return "org.allbinary.debug.NoDebug";
    }
    @lazy static jv_SINGLETON: DebugInterface | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): DebugInterface | null {
        if (!NoDebug.js_SINGLETON) {
            NoDebug.js_SINGLETON = true;
            NoDebug.jv_SINGLETON = new NoDebug().jinit_NoDebug_0();
        }
        return NoDebug.jv_SINGLETON;
    }
    static set SINGLETON(value: DebugInterface | null) {
        NoDebug.js_SINGLETON = true;
        NoDebug.jv_SINGLETON = value;
    }

    jinit_NoDebug_0(): NoDebug {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): DebugInterface | null {
        return NoDebug.SINGLETON;
    }
    

    start(): void {
    }
    

    stop(): void {
    }
    

    getMaxTime(): i64 {
        return (<i64>10000);
    }
    

    getStartTime(): i64 {
        return (<i64>0);
    }
    

    isRunning(): bool {
        return false;
    }
}

