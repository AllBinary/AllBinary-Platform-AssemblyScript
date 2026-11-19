// Generated Code Do Not Modify
// package org.allbinary.thread
// import org.allbinary.TsUtil

@global export class ThreadObjectUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.thread.ThreadObjectUtil";
    }
    @lazy static jv_instance: ThreadObjectUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ThreadObjectUtil | null {
        if (!ThreadObjectUtil.js_instance) {
            ThreadObjectUtil.js_instance = true;
            ThreadObjectUtil.jv_instance = new ThreadObjectUtil().jinit_ThreadObjectUtil_0();
        }
        return ThreadObjectUtil.jv_instance;
    }
    static set instance(value: ThreadObjectUtil | null) {
        ThreadObjectUtil.js_instance = true;
        ThreadObjectUtil.jv_instance = value;
    }
    NULL_PRIORITY_RUNNABLE: PriorityRunnable | null = null;

    jfields_ThreadObjectUtil(): void {
    this.NULL_PRIORITY_RUNNABLE = new NullPriorityRunnable().jinit_NullPriorityRunnable_0();
    }

    jinit_ThreadObjectUtil_0(): ThreadObjectUtil {
        super.jinit_JObject_0();
        this.jfields_ThreadObjectUtil();
        return this;
    }
    

    static getInstance(): ThreadObjectUtil | null {
        return ThreadObjectUtil.instance;
    }
    

    notifyObject(anyType: Object | null): void {
        JObject.jnotify(anyType); if (JThrowable.pending !== null) return;
    }
    

    waitObject(anyType: Object | null): void {
        JObject.jwait(anyType); if (JThrowable.pending !== null) return;
    }
    

    waitObjectFor(anyType: Object | null, delay: i64): void {
        TsUtil.getInstance()!.waitFor(anyType, delay); if (JThrowable.pending !== null) return;
    }
    

    processThread(runnable: JRunnable | null): void {
        let thread: JThread | null = new JThread().jinit_JThread_1(runnable); if (JThrowable.pending !== null) return;
        thread!.start(); if (JThrowable.pending !== null) return;
    }
}

