/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil

@global export class MusicThreadPool extends ThreadPool {

    jclassName(): string {
        return "org.allbinary.thread.MusicThreadPool";
    }
    @lazy static jv_THREAD_POOL: ThreadPool | null = null;
    @lazy static js_THREAD_POOL: bool = false;
    static get THREAD_POOL(): ThreadPool | null {
        if (!MusicThreadPool.js_THREAD_POOL) {
            MusicThreadPool.js_THREAD_POOL = true;
            MusicThreadPool.jv_THREAD_POOL = new ThreadPool().jinit_ThreadPool_3("Music", 2, ThreadPool.NORMAL_PRIORITY);
        }
        return MusicThreadPool.jv_THREAD_POOL;
    }
    static set THREAD_POOL(value: ThreadPool | null) {
        MusicThreadPool.js_THREAD_POOL = true;
        MusicThreadPool.jv_THREAD_POOL = value;
    }
    

    static getInstance(): ThreadPool | null {
        return MusicThreadPool.THREAD_POOL;
    }
    

    jinit_MusicThreadPool_3(poolName: string | null, numThreads: i32, priority: i32): MusicThreadPool {
        super.jinit_ThreadPool_3(poolName, numThreads, priority);
        return this;
    }
    

    runTask(task: JRunnable | null): void {
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(StringUtil.getInstance()!.toString1(task))!.appendlong(JSystem.currentTimeMillis())), this, this.threadPoolStrings!.ADD_TASK); if (JThrowable.pending !== null) return;
        super.runTask(task); if (JThrowable.pending !== null) return;
    }
    

    startTask(task: JRunnable | null): void {
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.threadPoolStrings!.START_TASK)!.append(StringUtil.getInstance()!.toString1(task))!.appendlong(JSystem.currentTimeMillis())), this, this.commonStrings!.RUN); if (JThrowable.pending !== null) return;
    }
    

    completedTask(task: JRunnable | null): void {
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.threadPoolStrings!.COMPLETE_TASK)!.append(StringUtil.getInstance()!.toString1(task))!.appendlong(JSystem.currentTimeMillis())), this, this.commonStrings!.RUN); if (JThrowable.pending !== null) return;
    }
}

