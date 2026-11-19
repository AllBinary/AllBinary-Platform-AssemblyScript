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

@global export class ThreadUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.thread.ThreadUtil";
    }
    @lazy static jv_instance: ThreadUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ThreadUtil | null {
        if (!ThreadUtil.js_instance) {
            ThreadUtil.js_instance = true;
            ThreadUtil.jv_instance = new ThreadUtil().jinit_ThreadUtil_0();
        }
        return ThreadUtil.jv_instance;
    }
    static set instance(value: ThreadUtil | null) {
        ThreadUtil.js_instance = true;
        ThreadUtil.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    JOIN: string | null = null;

    jfields_ThreadUtil(): void {
    this.logUtil = LogUtil.getInstance();
    this.JOIN = "join";
    }

    jinit_ThreadUtil_0(): ThreadUtil {
        super.jinit_JObject_0();
        this.jfields_ThreadUtil();
        return this;
    }
    

    static getInstance(): ThreadUtil | null {
        return ThreadUtil.instance;
    }
    

    isRunning(thread: JThread | null): bool {
        if (thread != null && thread!.isAlive()) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    join(thread: JThread | null): void {
        if (ThreadUtil.getInstance()!.isRunning(thread)) {
            this.logUtil!.putF("Waiting for Thread To Join/End", this, this.JOIN); if (JThrowable.pending !== null) return;
            thread!.join(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

