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
// package org.allbinary.graphics.paint

@global export class ProcessPaintableSingletonFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.paint.ProcessPaintableSingletonFactory";
    }
    @lazy static jv_SINGLETON: ProcessPaintable | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): ProcessPaintable | null {
        if (!ProcessPaintableSingletonFactory.js_SINGLETON) {
            ProcessPaintableSingletonFactory.js_SINGLETON = true;
            ProcessPaintableSingletonFactory.jv_SINGLETON = new ProcessPaintable().jinit_ProcessPaintable_0();
        }
        return ProcessPaintableSingletonFactory.jv_SINGLETON;
    }
    static set SINGLETON(value: ProcessPaintable | null) {
        ProcessPaintableSingletonFactory.js_SINGLETON = true;
        ProcessPaintableSingletonFactory.jv_SINGLETON = value;
    }
    

    jinit_ProcessPaintableSingletonFactory_0(): ProcessPaintableSingletonFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): ProcessPaintable | null {
        return ProcessPaintableSingletonFactory.SINGLETON;
    }
}

