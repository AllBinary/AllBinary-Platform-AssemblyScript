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
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil

//This is mainly for network communications.
@global export class SecondaryThreadPool extends ThreadPool {

    jclassName(): string {
        return "org.allbinary.thread.SecondaryThreadPool";
    }
    @lazy static jv_instance: ThreadPool | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ThreadPool | null {
        if (!SecondaryThreadPool.js_instance) {
            SecondaryThreadPool.js_instance = true;
            SecondaryThreadPool.jv_instance = new SecondaryThreadPool().jinit_SecondaryThreadPool_3("Secondary", 1, ThreadPool.NORMAL_PRIORITY);
        }
        return SecondaryThreadPool.jv_instance;
    }
    static set instance(value: ThreadPool | null) {
        SecondaryThreadPool.js_instance = true;
        SecondaryThreadPool.jv_instance = value;
    }
    

    static getInstance(): ThreadPool | null {
        return SecondaryThreadPool.instance;
    }
    

    jinit_SecondaryThreadPool_3(poolName: string | null, numThreads: i32, priority: i32): SecondaryThreadPool {
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

