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

//This is mainly for network communications.
@global export class PathFindingThreadPool extends ThreadPool {

    jclassName(): string {
        return "org.allbinary.thread.PathFindingThreadPool";
    }
    @lazy static jv_instance: ThreadPool | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ThreadPool | null {
        if (!PathFindingThreadPool.js_instance) {
            PathFindingThreadPool.js_instance = true;
            PathFindingThreadPool.jv_instance = new PathFindingThreadPool().jinit_PathFindingThreadPool_3("PathFinding", 1, 1);
        }
        return PathFindingThreadPool.jv_instance;
    }
    static set instance(value: ThreadPool | null) {
        PathFindingThreadPool.js_instance = true;
        PathFindingThreadPool.jv_instance = value;
    }
    

    static getInstance(): ThreadPool | null {
        return PathFindingThreadPool.instance;
    }
    

    jinit_PathFindingThreadPool_3(poolName: string | null, numThreads: i32, priority: i32): PathFindingThreadPool {
        super.jinit_ThreadPool_3(poolName, numThreads, ThreadPool.NORMAL_PRIORITY);
        return this;
    }
    

    runTaskWithPriority(task: PriorityRunnable | null): void {
        super.runTaskWithPriority(task); if (JThrowable.pending !== null) return;
    }
    

    runTask(task: JRunnable | null): void {
        super.runTask(task); if (JThrowable.pending !== null) return;
    }
    

    startTask(task: JRunnable | null): void {
    }
    

    completedTask(task: JRunnable | null): void {
    }
}

