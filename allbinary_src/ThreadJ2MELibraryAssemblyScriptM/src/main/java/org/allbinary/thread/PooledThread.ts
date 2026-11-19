/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// import org.allbinary.string.CommonStrings

@global export class PooledThread extends JThread {

    jclassName(): string {
        return "org.allbinary.thread.PooledThread";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    threadObjectUtil: ThreadObjectUtil | null = null;
    threadPool: ThreadPool | null = null;
    INTERRUPT_EXCEPTION: string | null = null;

    jfields_PooledThread(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.threadObjectUtil = ThreadObjectUtil.getInstance();
    
    this.INTERRUPT_EXCEPTION = "Exit InterruptedException";
    }
    

    jinit_PooledThread_1(threadPool: ThreadPool | null): PooledThread {
        super.jinit_JThread_1(threadPool!.createName());
        this.jfields_PooledThread();
        this.logUtil!.putF(this.commonStrings!.CONSTRUCTOR, this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
        this.threadPool = threadPool;
        return this;
    }
    

    run(): void {
        this.threadPool!.threadStarted(); if (JThrowable.pending !== null) return;
        while (true) {
            let task2: JRunnable | null = this.threadObjectUtil!.NULL_PRIORITY_RUNNABLE;
            do {
                task2 = this.threadPool!.getTask(); if (JThrowable.pending !== null) break;
                this.threadPool!.runningTask = true;
                this.threadPool!.startTask(task2); if (JThrowable.pending !== null) break;
            } while (false); if (JThrowable.pending != null && JThrowable.pending instanceof JInterruptedException) {
                let ex: JInterruptedException | null = changetype<JInterruptedException | null>(JThrowable.take());
                let logUtil: LogUtil | null = LogUtil.getInstance(); if (JThrowable.pending !== null) return;
                logUtil!.putF(this.INTERRUPT_EXCEPTION, this, this.commonStrings!.RUN); if (JThrowable.pending !== null) return;
                break;
            } if (JThrowable.pending !== null) return;
            if (task2 == this.threadObjectUtil!.NULL_PRIORITY_RUNNABLE) {
                break;
            }
            do {
                task2!.run(); if (JThrowable.pending !== null) break;
                this.threadPool!.completedTask(task2); if (JThrowable.pending !== null) break;
                this.threadPool!.runningTask = false;
            } while (false); if (JThrowable.pending != null) {
                let e: JException | null = changetype<JException | null>(JThrowable.take());
                let logUtil: LogUtil | null = LogUtil.getInstance(); if (JThrowable.pending !== null) return;
                logUtil!.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.commonStrings!.EXCEPTION_LABEL)!.append(StringUtil.getInstance()!.toString1(task2))), this, this.commonStrings!.RUN, e); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.threadPool!.threadStopped(); if (JThrowable.pending !== null) return;
    }
}

