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
// package org.allbinary.media.audio

@global export class PrimaryPlayerQueueFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.media.audio.PrimaryPlayerQueueFactory";
    }
    @lazy static jv_SINGLETON: PlayerQueue | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): PlayerQueue | null {
        if (!PrimaryPlayerQueueFactory.js_SINGLETON) {
            PrimaryPlayerQueueFactory.js_SINGLETON = true;
            PrimaryPlayerQueueFactory.jv_SINGLETON = new PlayerQueue().jinit_PlayerQueue_1(4);
        }
        return PrimaryPlayerQueueFactory.jv_SINGLETON;
    }
    static set SINGLETON(value: PlayerQueue | null) {
        PrimaryPlayerQueueFactory.js_SINGLETON = true;
        PrimaryPlayerQueueFactory.jv_SINGLETON = value;
    }

    jinit_PrimaryPlayerQueueFactory_0(): PrimaryPlayerQueueFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): PlayerQueue | null {
        return PrimaryPlayerQueueFactory.SINGLETON;
    }
}

