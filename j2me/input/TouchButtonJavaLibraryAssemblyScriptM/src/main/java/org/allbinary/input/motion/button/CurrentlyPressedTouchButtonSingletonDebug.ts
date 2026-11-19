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
// import org.allbinary.graphics.GPoint
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonSeps

@global export class CurrentlyPressedTouchButtonSingletonDebug extends CurrentlyPressedTouchButtonSingleton {

    jclassName(): string {
        return "org.allbinary.input.motion.button.CurrentlyPressedTouchButtonSingletonDebug";
    }
    @lazy static jv_instanceC: CurrentlyPressedTouchButtonSingletonDebug | null = null;
    @lazy static js_instanceC: bool = false;
    static get instanceC(): CurrentlyPressedTouchButtonSingletonDebug | null {
        if (!CurrentlyPressedTouchButtonSingletonDebug.js_instanceC) {
            CurrentlyPressedTouchButtonSingletonDebug.js_instanceC = true;
            CurrentlyPressedTouchButtonSingletonDebug.jv_instanceC = new CurrentlyPressedTouchButtonSingletonDebug().jinit_CurrentlyPressedTouchButtonSingletonDebug_0();
        }
        return CurrentlyPressedTouchButtonSingletonDebug.jv_instanceC;
    }
    static set instanceC(value: CurrentlyPressedTouchButtonSingletonDebug | null) {
        CurrentlyPressedTouchButtonSingletonDebug.js_instanceC = true;
        CurrentlyPressedTouchButtonSingletonDebug.jv_instanceC = value;
    }
    string: string | null = null;
    listString: string | null = null;
    appendText: string | null = null;
    PRESSED_AND_FIRED: string | null = null;
    PRESSED_AND_NOT_FIRED: string | null = null;
    ASSOCIATED_RELEASED_AND_FIRED: string | null = null;
    RELEASED_AND_FIRED: string | null = null;
    RELEASED_AND_FIRED_2: string | null = null;
    RELEASED_AND_NOT_FIRED: string | null = null;

    jfields_CurrentlyPressedTouchButtonSingletonDebug(): void {
    this.string = StringUtil.getInstance()!.EMPTY_STRING;
    this.listString = StringUtil.getInstance()!.EMPTY_STRING;
    this.appendText = StringUtil.getInstance()!.EMPTY_STRING;
    this.PRESSED_AND_FIRED = "pressed & fired";
    this.PRESSED_AND_NOT_FIRED = "pressed in button but not fired";
    this.ASSOCIATED_RELEASED_AND_FIRED = "assoc. rel & fired";
    this.RELEASED_AND_FIRED = "rel & fired 1";
    this.RELEASED_AND_FIRED_2 = "rel & fired 2";
    this.RELEASED_AND_NOT_FIRED = "rel & not fired";
    }

    jinit_CurrentlyPressedTouchButtonSingletonDebug_0(): CurrentlyPressedTouchButtonSingletonDebug {
        super.jinit_CurrentlyPressedTouchButtonSingleton_0();
        this.jfields_CurrentlyPressedTouchButtonSingletonDebug();
        return this;
    }
    

    static getInstance(): CurrentlyPressedTouchButtonSingleton | null {
        return CurrentlyPressedTouchButtonSingletonDebug.instanceC;
    }
    

    appendTouchButtonInput(append: string | null, touchButtonInput: TouchButtonInput | null): void {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        stringBuffer!.append(JObject.jtoString(touchButtonInput)); if (JThrowable.pending !== null) return;
        stringBuffer!.append(CommonSeps.getInstance()!.SPACE); if (JThrowable.pending !== null) return;
        stringBuffer!.append(append); if (JThrowable.pending !== null) return;
        this.appendText = JObject.jtoString(stringBuffer); if (JThrowable.pending !== null) return;
        this.string = JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.listString)!.append(this.appendText)); if (JThrowable.pending !== null) return;
    }
    

    append(append: string | null): void {
        this.appendText = JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.appendText)!.append(append)); if (JThrowable.pending !== null) return;
        this.string = JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.listString)!.append(this.appendText)); if (JThrowable.pending !== null) return;
    }
    

    clearLog(x: i32, y: i32): void {
        this.appendText = JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(GPoint.toStringStatic(x, y, 0))!.append(CommonSeps.getInstance()!.SPACE)); if (JThrowable.pending !== null) return;
        this.string = JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.listString)!.append(this.appendText)); if (JThrowable.pending !== null) return;
    }
    

    releaseAndNotFired(): void {
        this.append(this.RELEASED_AND_NOT_FIRED); if (JThrowable.pending !== null) return;
    }
    

    releaseAndFired(touchButtonInput: TouchButtonInput | null): void {
        this.appendTouchButtonInput(this.RELEASED_AND_FIRED, touchButtonInput); if (JThrowable.pending !== null) return;
    }
    

    releaseAndFired2(touchButtonInput: TouchButtonInput | null): void {
        this.appendTouchButtonInput(this.RELEASED_AND_FIRED_2, touchButtonInput); if (JThrowable.pending !== null) return;
    }
    

    releaseAndFiredAssociated(touchButtonInput: TouchButtonInput | null): void {
        this.appendTouchButtonInput(this.ASSOCIATED_RELEASED_AND_FIRED, touchButtonInput); if (JThrowable.pending !== null) return;
    }
    

    pressedAndFired(touchButtonInput: TouchButtonInput | null): void {
        this.appendTouchButtonInput(this.PRESSED_AND_FIRED, touchButtonInput); if (JThrowable.pending !== null) return;
    }
    

    pressedAndNotFired(touchButtonInput: TouchButtonInput | null): void {
        this.appendTouchButtonInput(this.PRESSED_AND_NOT_FIRED, touchButtonInput); if (JThrowable.pending !== null) return;
    }
    

    removeAt(index: i32): TouchButtonInput | null {
        let touchButtonInput: TouchButtonInput | null = super.removeAt(index); if (JThrowable.pending !== null) return null;
        this.listString = JObject.jtoString(this.list); if (JThrowable.pending !== null) return null;
        this.string = JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.listString)!.append(this.appendText)); if (JThrowable.pending !== null) return null;
        return touchButtonInput;
    }
    

    remove(touchButtonInput: TouchButtonInput | null): bool {
        let isRemoved: bool = super.remove(touchButtonInput); if (JThrowable.pending !== null) return false;
        this.listString = JObject.jtoString(this.list); if (JThrowable.pending !== null) return false;
        this.string = JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.listString)!.append(this.appendText)); if (JThrowable.pending !== null) return false;
        return isRemoved;
    }
    

    add(touchButtonInput: TouchButtonInput | null): void {
        super.add(touchButtonInput); if (JThrowable.pending !== null) return;
        this.listString = JObject.jtoString(this.list); if (JThrowable.pending !== null) return;
        this.string = JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.listString)!.append(this.appendText)); if (JThrowable.pending !== null) return;
    }
    

    toString(): string | null {
        return this.string;
    }
}

