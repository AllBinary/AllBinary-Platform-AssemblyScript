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
// package org.allbinary.midlet
// import javax.microedition.lcdui.Command
// import javax.microedition.lcdui.CommandListener
// import javax.microedition.lcdui.Display
// import javax.microedition.lcdui.Displayable
// import javax.microedition.lcdui.NullCanvas
// import javax.microedition.midlet.MIDlet
// import javax.microedition.midlet.MIDletStateChangeException
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.util.event.EventStrings
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonStrings
// import org.allbinary.system.Memory
// import org.allbinary.logic.NullUtil
// import org.allbinary.util.ABHashtable

@global export class AllBinaryMidlet extends MIDlet implements CommandListener {

    jclassName(): string {
        return "org.allbinary.midlet.AllBinaryMidlet";
    }
    @lazy static jv_NULL_ALLBINARY_MIDLET: Object | null = null;
    @lazy static js_NULL_ALLBINARY_MIDLET: bool = false;
    static get NULL_ALLBINARY_MIDLET(): Object | null {
        if (!AllBinaryMidlet.js_NULL_ALLBINARY_MIDLET) {
            AllBinaryMidlet.js_NULL_ALLBINARY_MIDLET = true;
            AllBinaryMidlet.jv_NULL_ALLBINARY_MIDLET = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return AllBinaryMidlet.jv_NULL_ALLBINARY_MIDLET;
    }
    static set NULL_ALLBINARY_MIDLET(value: Object | null) {
        AllBinaryMidlet.js_NULL_ALLBINARY_MIDLET = true;
        AllBinaryMidlet.jv_NULL_ALLBINARY_MIDLET = value;
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    SET_DISPLAY: string | null = null;
    SETTING_: string | null = null;
    _DISPLAY_: string | null = null;
    SETTING_NO_TITLE: string | null = null;
    hashtable: ABHashtable | null = null;
    midletDestroyed: bool = false;

    jfields_AllBinaryMidlet(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.SET_DISPLAY = "setDisplay";
    this.SETTING_ = "Setting: ";
    this._DISPLAY_ = " Display: ";
    this.SETTING_NO_TITLE = "Setting: No Title, Display: ";
    this.hashtable = StdUtil.getInstance()!.createHashtable();
    this.midletDestroyed = false;
    }
    

    static getNullInstance(): AllBinaryMidlet | null {
        if (AllBinaryMidlet.NULL_ALLBINARY_MIDLET == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            AllBinaryMidlet.NULL_ALLBINARY_MIDLET = new AllBinaryMidlet().jinit_AllBinaryMidlet_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<AllBinaryMidlet | null>(AllBinaryMidlet.NULL_ALLBINARY_MIDLET);
    }
    

    jinit_AllBinaryMidlet_0(): AllBinaryMidlet {
        super.jinit_MIDlet_0();
        this.jfields_AllBinaryMidlet();
        this.logUtil!.putF(this.commonStrings!.CONSTRUCTOR, this, "AllBinaryMidlet::AllBinaryMidlet"); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    setDisplay(newDisplay: Displayable | null): void {
        let title: string | null = StringUtil.getInstance()!.EMPTY_STRING; if (JThrowable.pending !== null) return;
        if (newDisplay != NullCanvas.NULL_CANVAS) {
            title = newDisplay!.getTitle(); if (JThrowable.pending !== null) return;
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.SETTING_)!.append(title)!.append(this._DISPLAY_)!.append(StringUtil.getInstance()!.toString1(newDisplay))), this, this.SET_DISPLAY); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let display: Display | null = this.getDisplay(); if (JThrowable.pending !== null) return;
        display!.setCurrent(newDisplay); if (JThrowable.pending !== null) return;
    }
    

    getDisplay(): Display | null {
        return Display.getDisplay(this);
    }
    

    getCurrentDisplayable(): Displayable | null {
        return Display.getDisplay(this)!.getCurrent();
    }
    

    setDestroyed(destroyed: bool): void {
        this.midletDestroyed = destroyed;
    }
    

    isDestroyed(): bool {
        return this.midletDestroyed;
    }
    

    startApp(): void {
        ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this); if (JThrowable.pending !== null) return;
    }
    

    pauseApp(): void {
        ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this); if (JThrowable.pending !== null) return;
    }
    

    destroyAppInRunnable(unconditional: bool, isProgress: bool): void {
    }
    

    destroyApp(unconditional: bool): void {
        let METHOD_NAME: string | null = "AllBinaryMidlet::destroyApp";
        do {
            this.logUtil!.putF(this.commonStrings!.START, this, METHOD_NAME); if (JThrowable.pending !== null) break;
            PreLogUtil.put(Memory.getInfo(), this, METHOD_NAME); if (JThrowable.pending !== null) break;
            this.setDestroyed(true); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, METHOD_NAME, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setStartStateHashtable(hashtable: ABHashtable | null): void {
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonLabels.getInstance()!.START_LABEL)!.append(StringUtil.getInstance()!.toString1(hashtable))), this, "setStartStateHashtable"); if (JThrowable.pending !== null) return;
        this.hashtable = hashtable;
    }
    

    getStartStateHashtable(): ABHashtable | null {
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonLabels.getInstance()!.START_LABEL)!.append(StringUtil.getInstance()!.toString1(this.hashtable))), this, "getStartStateHashtable"); if (JThrowable.pending !== null) return null;
        return this.hashtable;
    }
    

    getCurrentStateHashtable(): ABHashtable | null {
        this.logUtil!.putF(this.commonStrings!.START, this, "getStateHashtable"); if (JThrowable.pending !== null) return null;
        return StdUtil.getInstance()!.NULL_TABLE;
    }
    

    commandAction(command: Command | null, displayable: Displayable | null): void {
    }
}

