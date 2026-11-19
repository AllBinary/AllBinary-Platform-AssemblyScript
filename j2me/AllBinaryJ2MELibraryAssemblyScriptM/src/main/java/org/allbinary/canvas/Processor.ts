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
// package org.allbinary.canvas

@global export class Processor extends JObject {

    jclassName(): string {
        return "org.allbinary.canvas.Processor";
    }
    @lazy static jv_SINGLETON: Processor | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): Processor | null {
        if (!Processor.js_SINGLETON) {
            Processor.js_SINGLETON = true;
            Processor.jv_SINGLETON = new Processor().jinit_Processor_0();
        }
        return Processor.jv_SINGLETON;
    }
    static set SINGLETON(value: Processor | null) {
        Processor.js_SINGLETON = true;
        Processor.jv_SINGLETON = value;
    }

    jinit_Processor_0(): Processor {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): Processor | null {
        return Processor.SINGLETON;
    }
    

    process(): void {
    }
    

    processt(timeDelta: i64): void {
    }
}

