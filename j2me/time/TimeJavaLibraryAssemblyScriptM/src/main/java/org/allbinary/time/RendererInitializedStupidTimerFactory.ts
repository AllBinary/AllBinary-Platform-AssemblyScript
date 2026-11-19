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
// package org.allbinary.time

@global export class RendererInitializedStupidTimerFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.time.RendererInitializedStupidTimerFactory";
    }
    @lazy static jv_instance: StupidTimer | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): StupidTimer | null {
        if (!RendererInitializedStupidTimerFactory.js_instance) {
            RendererInitializedStupidTimerFactory.js_instance = true;
            RendererInitializedStupidTimerFactory.jv_instance = new StupidTimer().jinit_StupidTimer_0();
        }
        return RendererInitializedStupidTimerFactory.jv_instance;
    }
    static set instance(value: StupidTimer | null) {
        RendererInitializedStupidTimerFactory.js_instance = true;
        RendererInitializedStupidTimerFactory.jv_instance = value;
    }

    jinit_RendererInitializedStupidTimerFactory_0(): RendererInitializedStupidTimerFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): StupidTimer | null {
        return RendererInitializedStupidTimerFactory.instance;
    }
}

