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
// package org.allbinary.thread

@global export class SoundThreadPool extends JObject {

    jclassName(): string {
        return "org.allbinary.thread.SoundThreadPool";
    }
    @lazy static jv_instance: ThreadPool | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ThreadPool | null {
        if (!SoundThreadPool.js_instance) {
            SoundThreadPool.js_instance = true;
            SoundThreadPool.jv_instance = new ThreadPool().jinit_ThreadPool_3("Sound", 1, ThreadPool.NORMAL_PRIORITY);
        }
        return SoundThreadPool.jv_instance;
    }
    static set instance(value: ThreadPool | null) {
        SoundThreadPool.js_instance = true;
        SoundThreadPool.jv_instance = value;
    }

    jinit_SoundThreadPool_0(): SoundThreadPool {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): ThreadPool | null {
        return SoundThreadPool.instance;
    }
}

