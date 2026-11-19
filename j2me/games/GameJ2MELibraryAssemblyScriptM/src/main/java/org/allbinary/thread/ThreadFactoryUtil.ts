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
// import org.allbinary.J2MEUtil
// import org.allbinary.canvas.RunnableCanvas
// import org.allbinary.game.displayable.canvas.AllBinaryGameCanvas
// import org.allbinary.game.displayable.canvas.DemoCanvas
// import org.allbinary.game.displayable.canvas.GameCanvasRunnableInterface
// import org.allbinary.game.displayable.canvas.RunnableCanvasSingleThreadStartRunnable
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonStrings

@global export class ThreadFactoryUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.thread.ThreadFactoryUtil";
    }
    @lazy static jv_instance: ThreadFactoryUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ThreadFactoryUtil | null {
        if (!ThreadFactoryUtil.js_instance) {
            ThreadFactoryUtil.js_instance = true;
            ThreadFactoryUtil.jv_instance = new ThreadFactoryUtil().jinit_ThreadFactoryUtil_0();
        }
        return ThreadFactoryUtil.jv_instance;
    }
    static set instance(value: ThreadFactoryUtil | null) {
        ThreadFactoryUtil.js_instance = true;
        ThreadFactoryUtil.jv_instance = value;
    }
    logUtil: LogUtil | null = null;

    jfields_ThreadFactoryUtil(): void {
    this.logUtil = LogUtil.getInstance();
    }

    jinit_ThreadFactoryUtil_0(): ThreadFactoryUtil {
        super.jinit_JObject_0();
        this.jfields_ThreadFactoryUtil();
        return this;
    }
    

    static getInstance(): ThreadFactoryUtil | null {
        return ThreadFactoryUtil.instance;
    }
    

    getInstanceGameCanvasRunnable(runnable: GameCanvasRunnableInterface | null): JThread | null {
        return this.getInstanceType(runnable, runnable!.getType());
    }
    

    getInstanceForRunnable(runnable: ABRunnable | null): JThread | null {
        return this.getInstanceType(runnable, runnable!.getType());
    }
    

    getInstanceType(runnable: JRunnable | null, type: i32): JThread | null {
        let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
        if (J2MEUtil.isHTML()) {
            if (type == DemoCanvas.TYPE || type == AllBinaryGameCanvas.TYPE) {
                let demoGameSingleThreadStartRunnable: RunnableCanvasSingleThreadStartRunnable | null = new RunnableCanvasSingleThreadStartRunnable().jinit_RunnableCanvasSingleThreadStartRunnable_1(changetype<RunnableCanvas | null>(runnable)); if (JThrowable.pending !== null) return null;
                PreLogUtil.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Using Pseudo Thread for DemoCanvas/AllBinaryGameCanvas under PlayN/HTML5: ")!.append(StringUtil.getInstance()!.toString1(runnable))), this, commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return null;
                let primaryThreadPool: ThreadPool | null = PrimaryThreadPool.getInstance(); if (JThrowable.pending !== null) return null;
                primaryThreadPool!.runTask(demoGameSingleThreadStartRunnable); if (JThrowable.pending !== null) return null;
            } else {
                PreLogUtil.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Using Pseudo Thread for Runnable under PlayN/HTML5: ")!.append(StringUtil.getInstance()!.toString1(runnable))), this, commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return null;
                let primaryThreadPool: ThreadPool | null = PrimaryThreadPool.getInstance(); if (JThrowable.pending !== null) return null;
                primaryThreadPool!.runTask(runnable); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        let thread: JThread | null = new JThread().jinit_JThread_2(runnable, JObject.jtoString(runnable)); if (JThrowable.pending !== null) return null;
        this.logUtil!.putF(JObject.jtoString(thread), this, commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return null;
        return thread;
    }
    

    start(thread: JThread | null): void {
        thread!.start(); if (JThrowable.pending !== null) return;
    }
}

