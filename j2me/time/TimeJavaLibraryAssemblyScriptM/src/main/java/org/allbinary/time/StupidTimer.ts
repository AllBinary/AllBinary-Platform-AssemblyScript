// Generated Code Do Not Modify
// package org.allbinary.time
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.util.visitor.Visitor
// import org.allbinary.string.CommonStrings
// import org.allbinary.thread.ThreadObjectUtil

@global export class StupidTimer extends JObject {

    jclassName(): string {
        return "org.allbinary.time.StupidTimer";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    nullUtil: NullUtil | null = null;
    threadObjectUtil: ThreadObjectUtil | null = null;

    jfields_StupidTimer(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.nullUtil = NullUtil.getInstance();
    this.threadObjectUtil = ThreadObjectUtil.getInstance();
    }

    jinit_StupidTimer_0(): StupidTimer {
        super.jinit_JObject_0();
        this.jfields_StupidTimer();
        return this;
    }
    

    visitBool(visitorInterface: Visitor | null): bool {
        let result: JBoolean | null = changetype<JBoolean | null>(visitorInterface!.visit_1_Object(this.nullUtil!.NULL_OBJECT)); if (JThrowable.pending !== null) return false;
        let result2: bool = result!.booleanValue(); if (JThrowable.pending !== null) return false;
        return result2;
    }
    

    visit(visitorInterface: Visitor | null, timeDelayHelper: TimeDelayHelper | null): void {
        let tookTooLong: bool = false;
        let WAITING_FOR: string | null = "Waiting for: ";
        PreLogUtil.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(WAITING_FOR)!.append(StringUtil.getInstance()!.toString1(visitorInterface))), this, this.commonStrings!.VISIT); if (JThrowable.pending !== null) return;
        let index: i32 = 0;
        while (this.visitBool(visitorInterface)) {
            if (index % 10 == 0) {
                PreLogUtil.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(WAITING_FOR)!.appendint(index)), this, this.commonStrings!.VISIT); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            index++;
            {
                this.threadObjectUtil!.waitObjectFor(this, 1800); if (JThrowable.pending !== null) return;
            }
            if (timeDelayHelper!.isTimeTNT()) {
                tookTooLong = true;
                break;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (tookTooLong) {
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.VISIT, new JException().jinit_JException_1(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Took Too Long: ")!.append(StringUtil.getInstance()!.toString1(visitorInterface))))); if (JThrowable.pending !== null) return;
        } else {
            PreLogUtil.put(JObject.jtoString(timeDelayHelper), this, this.commonStrings!.VISIT); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    stopWaiting(): void {
        {
            this.threadObjectUtil!.notifyObject(this); if (JThrowable.pending !== null) return;
        }
    }
}

