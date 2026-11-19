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
// package org.allbinary.input.motion.button
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonStrings

@global export class TouchScreenFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.button.TouchScreenFactory";
    }
    @lazy static jv_SINGLETON: TouchScreenFactory | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): TouchScreenFactory | null {
        if (!TouchScreenFactory.js_SINGLETON) {
            TouchScreenFactory.js_SINGLETON = true;
            TouchScreenFactory.jv_SINGLETON = new TouchScreenFactory().jinit_TouchScreenFactory_0();
        }
        return TouchScreenFactory.jv_SINGLETON;
    }
    static set SINGLETON(value: TouchScreenFactory | null) {
        TouchScreenFactory.js_SINGLETON = true;
        TouchScreenFactory.jv_SINGLETON = value;
    }
    logUtil: LogUtil | null = null;
    touch: bool = false;
    multiTouch: bool = false;
    multiTouchDistinct: bool = false;
    touchScreenType: TouchScreenType | null = null;

    jfields_TouchScreenFactory(): void {
    this.logUtil = LogUtil.getInstance();
    this.touch = false;
    this.multiTouch = false;
    this.multiTouchDistinct = false;
    this.touchScreenType = TouchScreenTypesFactory.getInstance()!.NOTOUCH;
    }
    

    jinit_TouchScreenFactory_0(): TouchScreenFactory {
        super.jinit_JObject_0();
        this.jfields_TouchScreenFactory();
        do {
            this.setTouch(true); if (JThrowable.pending !== null) break;
            this.setMultiTouch(false); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return this;
            this.logUtil!.put(commonStrings!.EXCEPTION, TouchScreenFactory.SINGLETON, commonStrings!.GET_INSTANCE, e); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    static getInstance(): TouchScreenFactory | null {
        return TouchScreenFactory.SINGLETON;
    }
    

    setMultiTouch(multiTouch: bool): void {
        this.multiTouch = multiTouch;
    }
    

    isMultiTouch(): bool {
        return this.multiTouch;
    }
    

    setTouch(touch: bool): void {
        this.touch = touch;
    }
    

    isTouch(): bool {
        return this.touch;
    }
    

    setMultiTouchDistinct(multiTouchDistinct: bool): void {
        this.multiTouchDistinct = multiTouchDistinct;
    }
    

    isMultiTouchDistinct(): bool {
        return this.multiTouchDistinct;
    }
    

    setTouchScreenType(touchScreenType: TouchScreenType | null): void {
        this.touchScreenType = touchScreenType;
    }
    

    getTouchScreenType(): TouchScreenType | null {
        return this.touchScreenType;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("TouchScreen: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendboolean(this.isTouch()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" MultiTouch: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendboolean(this.isMultiTouch()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" Distinct MultiTouch: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendboolean(this.isMultiTouchDistinct()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" TouchScreenType: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(StringUtil.getInstance()!.toString1(this.getTouchScreenType())); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

