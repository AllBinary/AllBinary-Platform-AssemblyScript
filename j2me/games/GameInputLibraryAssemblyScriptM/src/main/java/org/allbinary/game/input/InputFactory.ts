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
// package org.allbinary.game.input
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonStrings

@global export class InputFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.InputFactory";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!InputFactory.js_instance) {
            InputFactory.js_instance = true;
            InputFactory.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return InputFactory.jv_instance;
    }
    static set instance(value: Object | null) {
        InputFactory.js_instance = true;
        InputFactory.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    KEY_CODE_LABEL: string | null = null;
    DEVICE_ID_LABEL: string | null = null;
    MAX: i32 = 0;
    inputIntegerArray: StaticArray<Input | null> | null = null;
    NO_INPUT: Input | null = null;

    jfields_InputFactory(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.KEY_CODE_LABEL = "KeyCode: ";
    this.DEVICE_ID_LABEL = "DeviceId: ";
    this.MAX = SmallIntegerSingletonFactory.getInstance()!.getMin();
    this.inputIntegerArray = new StaticArray<Input | null>(this.MAX);
    this.NO_INPUT = new Input().jinit_Input_2(0, this.commonStrings!.UNKNOWN);
    }
    

    static getInstance(): InputFactory | null {
        if (InputFactory.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            InputFactory.instance = new InputFactory().jinit_InputFactory_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<InputFactory | null>(InputFactory.instance);
    }
    

    jinit_InputFactory_0(): InputFactory {
        super.jinit_JObject_0();
        this.jfields_InputFactory();
        let size: i32 = this.inputIntegerArray!.length;
        for (let index: i32 = 0; index < size; index++) {
            this.inputIntegerArray![index] = this.NO_INPUT;
        }
        return this;
    }
    

    add(id: i32, input: Input | null): void {
        this.inputIntegerArray![id] = input;
    }
    

    getInstanceById(id: i32): Input | null {
        if (id < 0) {
            id = -id;
        }
        if (id > this.inputIntegerArray!.length) {
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Warning id: ")!.appendint(id)), this, this.commonStrings!.GET_INSTANCE); if (JThrowable.pending !== null) return null;
            return this.NO_INPUT;
        } if (JThrowable.pending !== null) return null;
        return this.inputIntegerArray![id];
    }
}

