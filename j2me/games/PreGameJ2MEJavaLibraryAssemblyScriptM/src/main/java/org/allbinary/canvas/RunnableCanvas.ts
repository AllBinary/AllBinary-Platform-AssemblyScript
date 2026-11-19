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
// package org.allbinary.canvas
// import javax.microedition.lcdui.CommandListener
// import org.allbinary.TsUtil
// import org.allbinary.game.displayable.canvas.NullWaitGameRunnable
// import org.allbinary.graphics.displayable.MyCanvas
// import org.allbinary.logic.ABSystemWrapper
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonStrings
// import org.allbinary.thread.NullThread
// import org.allbinary.thread.RunnableInterface
// import org.allbinary.thread.ThreadObjectUtil
// import org.allbinary.time.TimeDelayHelper
// import org.allbinary.util.BasicArrayList

@global export class RunnableCanvas extends MyCanvas implements RunnableInterface {

    jclassName(): string {
        return "org.allbinary.canvas.RunnableCanvas";
    }
    nullUtil: NullUtil | null = null;
    stdUtil: StdUtil | null = null;
    systemWrapper: ABSystemWrapper | null = null;
    tsUtil: TsUtil | null = null;
    thread: JThread | null = null;
    currentThread: JThread | null = null;
    running: bool = false;
    loopTimeHelper: TimeDelayHelper | null = null;
    runnableCanvasRefreshHelper: Processor | null = null;
    commonLabels: CommonLabels | null = null;
    threadObjectUtil: ThreadObjectUtil | null = null;
    SET_RUNNING: string | null = null;
    IS_RUNNING: string | null = null;
    THREAD: string | null = null;
    NOT_EQUAL: string | null = null;
    PAUSE_SLEEP: string | null = null;
    START_PAUSE: string | null = null;
    END_PAUSE: string | null = null;
    PROCESS_LOOP_SLEEP: string | null = null;
    pauseWait: i64 = 0;
    notified: bool = false;

    jfields_RunnableCanvas(): void {
    this.nullUtil = NullUtil.getInstance();
    this.stdUtil = StdUtil.getInstance();
    this.systemWrapper = ABSystemWrapper.getInstance();
    this.tsUtil = TsUtil.getInstance();
    this.thread = NullThread.NULL_THREAD;
    this.currentThread = NullThread.NULL_THREAD;
    this.running = false;
    this.loopTimeHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(NullWaitGameRunnable.getInstance()!.WAIT);
    this.runnableCanvasRefreshHelper = Processor.getInstance();
    this.commonLabels = CommonLabels.getInstance();
    this.threadObjectUtil = ThreadObjectUtil.getInstance();
    this.SET_RUNNING = "setRunning";
    this.IS_RUNNING = "isRunning";
    this.THREAD = "Thread: ";
    this.NOT_EQUAL = " != ";
    this.PAUSE_SLEEP = "pause sleep";
    this.START_PAUSE = "start pause - game thread sleep at: ";
    this.END_PAUSE = "end pause - game thread sleep at: ";
    this.PROCESS_LOOP_SLEEP = "processLoopSleep";
    this.pauseWait = (<i64>0);
    this.notified = false;
    }
    

    jinit_RunnableCanvas_3(commandListener: CommandListener | null, childNameList: BasicArrayList | null, hasParam: bool): RunnableCanvas {
        super.jinit_MyCanvas_2(CommonStrings.getInstance()!.UNKNOWN, childNameList);
        this.jfields_RunnableCanvas();
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("RunnableCanvas delay: ")!.appendint(this.loopTimeHelper!.delay)), this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
        this.runnableCanvasRefreshHelper = new RunnableCanvasRefreshHelper().jinit_RunnableCanvasRefreshHelper_1(this); if (JThrowable.pending !== null) return this;
        if (commandListener != null) {
            this.initCommands(commandListener); if (JThrowable.pending !== null) return this;
        } else if (hasParam) {
            this.logUtil!.putF("commandListener was null", this, "initCommands"); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    initCommands(cmdListener: CommandListener | null): void {
        this.logUtil!.putF(this.commonStrings!.NOT_IMPLEMENTED, this, "initCommands"); if (JThrowable.pending !== null) return;
    }
    

    isMainCanvas(): bool {
        if (this.getCustomCommandListener() != null) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    setThread(thread: JThread | null): void {
        this.thread = thread;
    }
    

    setRunning(running: bool): void {
        this.running = running;
        if (!this.running) {
            this.thread = NullThread.NULL_THREAD;
            {
                this.threadObjectUtil!.notifyObject(this); if (JThrowable.pending !== null) return;
            }
        } if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.IS_RUNNING)!.appendboolean(this.running)), this, this.SET_RUNNING); if (JThrowable.pending !== null) return;
    }
    

    isRunning(): bool {
        if (this.thread == this.currentThread) {
            return this.running;
        } else {
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return false;
            stringBuffer!.append(this.THREAD); if (JThrowable.pending !== null) return false;
            if (this.thread != null) {
                stringBuffer!.append(JObject.jtoString(this.thread)); if (JThrowable.pending !== null) return false;
            } if (JThrowable.pending !== null) return false;
            stringBuffer!.append(this.NOT_EQUAL); if (JThrowable.pending !== null) return false;
            if (this.currentThread != null) {
                stringBuffer!.append(StringUtil.getInstance()!.toString1(this.currentThread)); if (JThrowable.pending !== null) return false;
            } if (JThrowable.pending !== null) return false;
            this.logUtil!.putF(JObject.jtoString(stringBuffer), this, this.IS_RUNNING); if (JThrowable.pending !== null) return false;
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    getLoopTimeHelperP(): TimeDelayHelper | null {
        return this.loopTimeHelper;
    }
    

    setWait(wait: i32): void {
        this.loopTimeHelper!.delay = wait;
        this.pauseWait = (<i64>(wait)) * (<i64>3);
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("setWait - delay: ")!.appendint(this.loopTimeHelper!.delay)), this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return;
    }
    

    getWait(): i32 {
        return this.loopTimeHelper!.delay;
    }
    

    setCurrentThread(): void {
        this.currentThread = JThread.currentThread(); if (JThrowable.pending !== null) return;
    }
    

    setCurrentThreadFake(): void {
        this.currentThread = this.thread;
    }
    

    showNotify(): void {
        do {
            this.stopWaiting(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "showNotify", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    stopWaiting(): void {
        this.notified = true;
        {
            this.threadObjectUtil!.notifyObject(this); if (JThrowable.pending !== null) return;
        }
        this.repaint(); if (JThrowable.pending !== null) return;
    }
    

    waitOnNotify(wait: i64): void {
        if (!this.notified) {
            if (wait > (<i64>0)) {
                this.threadObjectUtil!.waitObjectFor(this, wait); if (JThrowable.pending !== null) return;
            } else {
                this.threadObjectUtil!.waitObject(this); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    processSleep(): void {
        JThread.sleep(this.pauseWait); if (JThrowable.pending !== null) return;
    }
    

    isPausable(): bool {
        return false;
    }
    

    processGameSleep(sleep: i64): void {
        JThread.sleep(sleep); if (JThrowable.pending !== null) return;
    }
    

    processLoopSleep(): void {
        this.runnableCanvasRefreshHelper!.process(); if (JThrowable.pending !== null) return;
        if (this.isPaused()) {
            let stringMaker: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
            if (this.isRunning() && !this.isSingleThread()) {
                stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return;
                let currentTimeMillis: i64 = this.systemWrapper!.currentTimeMillis(); if (JThrowable.pending !== null) return;
                this.logUtil!.putF(JObject.jtoString(stringMaker!.append(this.START_PAUSE)!.appendlong(currentTimeMillis)!.append(this.PAUSE_SLEEP)!.appendlong(this.pauseWait)), this, this.PROCESS_LOOP_SLEEP); if (JThrowable.pending !== null) return;
                while (this.isPaused() && this.isRunning() && !this.isSingleThread()) {
                    this.processSleep(); if (JThrowable.pending !== null) return;
                    if (!this.isPausable()) {
                        stringMaker!.delete_(0, stringMaker!.length()); if (JThrowable.pending !== null) return;
                        this.logUtil!.putF(JObject.jtoString(stringMaker!.append(this.END_PAUSE)!.appendlong(currentTimeMillis)), this, this.PROCESS_LOOP_SLEEP); if (JThrowable.pending !== null) return;
                        return;
                    } if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let elapsedTime: i64 = this.loopTimeHelper!.getElapsedTNT(); if (JThrowable.pending !== null) return;
        let wait: i64 = (<i64>(this.loopTimeHelper!.delay));
        if (elapsedTime > wait) {
            elapsedTime = wait;
        } else {
            this.processGameSleep(wait - elapsedTime); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    isSingleThread(): bool {
        return false;
    }
    

    run(): void {
        this.setCurrentThread(); if (JThrowable.pending !== null) return;
    }
    

    end2(): void {
    }
    

    getType(): i32 {
        return -1;
    }
}

