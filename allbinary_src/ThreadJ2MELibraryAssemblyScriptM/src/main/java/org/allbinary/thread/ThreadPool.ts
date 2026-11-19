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
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD
// import org.allbinary.util.BasicArrayListUtil

@global export class ThreadPool extends JObject {

    jclassName(): string {
        return "org.allbinary.thread.ThreadPool";
    }
    @lazy static readonly ROOT_NAME: string | null = "-PooledThread-";
    @lazy static jv_NORMAL_PRIORITY: i32 = 0;
    @lazy static js_NORMAL_PRIORITY: bool = false;
    static get NORMAL_PRIORITY(): i32 {
        if (!ThreadPool.js_NORMAL_PRIORITY) {
            ThreadPool.js_NORMAL_PRIORITY = true;
            ThreadPool.jv_NORMAL_PRIORITY = JThread.NORM_PRIORITY;
        }
        return ThreadPool.jv_NORMAL_PRIORITY;
    }
    static set NORMAL_PRIORITY(value: i32) {
        ThreadPool.js_NORMAL_PRIORITY = true;
        ThreadPool.jv_NORMAL_PRIORITY = value;
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    NULL_RUNNABLE: NullRunnable | null = null;
    threadPoolStrings: ThreadPoolStrings | null = null;
    threadObjectUtil: ThreadObjectUtil | null = null;
    poolName: string | null = null;
    priority: i32 = 0;
    isAlive: bool = false;
    taskQueue: BasicArrayList | null = null;
    threadID: i32 = 0;
    numThreads: i32 = 0;
    runningTask: bool = false;

    jfields_ThreadPool(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.NULL_RUNNABLE = NullRunnable.getInstance();
    this.threadPoolStrings = ThreadPoolStrings.getInstance();
    this.threadObjectUtil = ThreadObjectUtil.getInstance();
    
    
    this.isAlive = false;
    this.taskQueue = BasicArrayListUtil.getInstance()!.getImmutableInstance();
    this.threadID = 0;
    
    this.runningTask = false;
    }
    

    jinit_ThreadPool_3(poolName: string | null, numThreads: i32, priority: i32): ThreadPool {
        super.jinit_JObject_0();
        this.jfields_ThreadPool();
        this.poolName = poolName;
        this.priority = priority;
        this.numThreads = numThreads;
        return this;
    }
    

    init(): void {
        if (!this.isAlive) {
            this.isAlive = true;
            this.taskQueue = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return;
            let pooledThread: PooledThread | null = null;
            for (let i: i32 = 0; i < this.numThreads; i++) {
                pooledThread = new PooledThread().jinit_PooledThread_1(this); if (JThrowable.pending !== null) return;
                pooledThread!.setPriority(this.priority); if (JThrowable.pending !== null) return;
                pooledThread!.start(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    runAPriorityTask(): void {
        { JThrowable.raise(new JRuntimeException().jinit_JRuntimeException_0()); return; }
    }
    

    runTaskWithPriority(task: PriorityRunnable | null): void {
        {
            if (!this.isAlive) {
                this.init(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            if (task != null) {
                let size: i32 = this.taskQueue!.size(); if (JThrowable.pending !== null) return;
                let runnable: PriorityRunnable | null = null;
                let lowerPriorityRunnable: PriorityRunnable | null = this.threadObjectUtil!.NULL_PRIORITY_RUNNABLE;
                for (let index: i32 = 0; index < size; index++) {
                    runnable = changetype<PriorityRunnable | null>(this.taskQueue!.get(index)); if (JThrowable.pending !== null) return;
                    if (runnable!.getPriority() > task!.getPriority()) {
                        lowerPriorityRunnable = runnable;
                        break;
                    } if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
                if (lowerPriorityRunnable == this.threadObjectUtil!.NULL_PRIORITY_RUNNABLE) {
                    this.taskQueue!.add(task); if (JThrowable.pending !== null) return;
                } else {
                    let index: i32 = this.taskQueue!.indexOf(lowerPriorityRunnable); if (JThrowable.pending !== null) return;
                    this.taskQueue!.addAt(index, task); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
                JObject.jnotify(this); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        }
    }
    

    runTask(task: JRunnable | null): void {
        {
            if (!this.isAlive) {
                this.init(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            if (task != null) {
                this.taskQueue!.add(task); if (JThrowable.pending !== null) return;
                JObject.jnotify(this); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        }
    }
    

    getTask(): JRunnable | null {
        {
            while (this.taskQueue!.size() == 0) {
                if (!this.isAlive) {
                    return this.NULL_RUNNABLE;
                }
                JObject.jwait(this); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            let runnable: JRunnable | null = changetype<JRunnable | null>(this.taskQueue!.removeAt(0)); if (JThrowable.pending !== null) return null;
            return runnable;
        }
        return null;
    }
    

    clear(): void {
        {
            if (this.isAlive) {
                this.taskQueue!.clear(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        }
    }
    

    close(): void {
        {
            if (this.isAlive) {
                this.isAlive = false;
                this.taskQueue!.clear(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        }
    }
    

    join(): void {
        {
            this.isAlive = false;
            this.taskQueue!.clear(); if (JThrowable.pending !== null) return;
            JObject.jnotifyAll(this); if (JThrowable.pending !== null) return;
        }
    }
    

    isBusy(): bool {
        if (!this.isAlive) {
            return false;
        }
        if (this.taskQueue!.size() > 0) {
            return true;
        } if (JThrowable.pending !== null) return false;
        if (this.runningTask) {
            return true;
        }
        return false;
    }
    

    threadStarted(): void {
    }
    

    threadStopped(): void {
        if (this.numThreads == 1) {
            this.isAlive = false;
            this.taskQueue!.clear(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    startTask(task: JRunnable | null): void {
    }
    

    completedTask(task: JRunnable | null): void {
    }
    

    createName(): string | null {
        return JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.poolName)!.append(ThreadPool.ROOT_NAME)!.appendint(this.threadID++));
    }
}

