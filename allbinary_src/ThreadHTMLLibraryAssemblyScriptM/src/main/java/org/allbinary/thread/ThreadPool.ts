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
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class ThreadPool extends JObject {

    jclassName(): string {
        return "org.allbinary.thread.ThreadPool";
    }
    static readonly NORMAL_PRIORITY: i32 = 5;
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    NULL_RUNNABLE: NullRunnable | null = null;
    threadPoolStrings: ThreadPoolStrings | null = null;
    threadObjectUtil: ThreadObjectUtil | null = null;
    isAlive: bool = false;
    taskQueue: BasicArrayList | null = null;
    numThreads: i32 = 0;
    runningTask: bool = false;
    currentPriorityRunnable: PriorityRunnable | null = null;

    jfields_ThreadPool(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.NULL_RUNNABLE = NullRunnable.getInstance();
    this.threadPoolStrings = ThreadPoolStrings.getInstance();
    this.threadObjectUtil = ThreadObjectUtil.getInstance();
    this.isAlive = false;
    this.taskQueue = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.numThreads = 0;
    this.runningTask = false;
    this.currentPriorityRunnable = this.threadObjectUtil!.NULL_PRIORITY_RUNNABLE;
    }
    

    jinit_ThreadPool_3(poolName: string | null, numThreads: i32, priority: i32): ThreadPool {
        super.jinit_JObject_0();
        this.jfields_ThreadPool();
        return this;
    }
    

    runAPriorityTask(): void {
        if (!this.currentPriorityRunnable!.isDone()) {
            this.currentPriorityRunnable!.run(); if (JThrowable.pending !== null) return;
        } else {
            let runnable: JRunnable | null = this.getTask(); if (JThrowable.pending !== null) return;
            if (runnable == this.NULL_RUNNABLE) {
                return;
            }
            this.currentPriorityRunnable = changetype<PriorityRunnable | null>(runnable);
            if (!(this.currentPriorityRunnable == this.threadObjectUtil!.NULL_PRIORITY_RUNNABLE)) {
                this.currentPriorityRunnable!.reset(); if (JThrowable.pending !== null) return;
                this.currentPriorityRunnable!.run(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    runATask(): void {
        let runnable: JRunnable | null = this.getTask(); if (JThrowable.pending !== null) return;
        if (runnable != null) {
            runnable!.run(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    init(): void {
        if (!this.isAlive) {
            this.isAlive = true;
            this.taskQueue = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    runTaskWithPriority(task: PriorityRunnable | null): void {
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
        } if (JThrowable.pending !== null) return;
    }
    

    runTask(task: JRunnable | null): void {
        if (!this.isAlive) {
            this.init(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (task != null) {
            this.taskQueue!.add(task); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getTask(): JRunnable | null {
        if (this.taskQueue!.isEmpty()) {
            return this.NULL_RUNNABLE;
        } if (JThrowable.pending !== null) return null;
        return changetype<JRunnable | null>(this.taskQueue!.removeAt(0));
    }
    

    clear(): void {
        this.taskQueue!.clear(); if (JThrowable.pending !== null) return;
    }
    

    close(): void {
        if (this.isAlive) {
            this.isAlive = false;
            this.taskQueue!.clear(); if (JThrowable.pending !== null) return;
            this.currentPriorityRunnable = this.threadObjectUtil!.NULL_PRIORITY_RUNNABLE;
        } if (JThrowable.pending !== null) return;
    }
    

    join(): void {
        this.isAlive = false;
        this.taskQueue!.clear(); if (JThrowable.pending !== null) return;
        this.currentPriorityRunnable = this.threadObjectUtil!.NULL_PRIORITY_RUNNABLE;
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
            this.currentPriorityRunnable = this.threadObjectUtil!.NULL_PRIORITY_RUNNABLE;
        } if (JThrowable.pending !== null) return;
    }
    

    startTask(task: JRunnable | null): void {
    }
    

    completedTask(task: JRunnable | null): void {
    }
}

