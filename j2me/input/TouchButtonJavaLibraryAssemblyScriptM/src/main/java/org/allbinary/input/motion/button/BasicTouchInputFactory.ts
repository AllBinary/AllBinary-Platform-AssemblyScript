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
// import org.allbinary.game.input.InputFactory
// import org.allbinary.game.input.mapping.InputToGameKeyMapping
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonLabels
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class BasicTouchInputFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.button.BasicTouchInputFactory";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!BasicTouchInputFactory.js_instance) {
            BasicTouchInputFactory.js_instance = true;
            BasicTouchInputFactory.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return BasicTouchInputFactory.jv_instance;
    }
    static set instance(value: Object | null) {
        BasicTouchInputFactory.js_instance = true;
        BasicTouchInputFactory.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    SPECIAL_BUTTON_SEVEN_TESTING_ONLY: TouchButtonInput | null = null;
    SPECIAL_BUTTON_EIGHT_TESTING_ONLY: TouchButtonInput | null = null;
    SPECIAL_BUTTON_SIX: TouchButtonInput | null = null;
    SPECIAL_BUTTON_FIVE: TouchButtonInput | null = null;
    SPECIAL_BUTTON_FOUR: TouchButtonInput | null = null;
    SPECIAL_BUTTON_THREE: TouchButtonInput | null = null;
    SPECIAL_BUTTON_TWO: TouchButtonInput | null = null;
    SPECIAL_BUTTON_ONE: TouchButtonInput | null = null;
    UP: TouchButtonInput | null = null;
    LEFT: TouchButtonInput | null = null;
    RIGHT: TouchButtonInput | null = null;
    DOWN: TouchButtonInput | null = null;
    NONE: TouchButtonInput | null = null;
    initialized: bool = false;
    list: BasicArrayList | null = null;

    jfields_BasicTouchInputFactory(): void {
    this.logUtil = LogUtil.getInstance();
    
    
    
    
    
    
    
    
    
    
    
    
    
    this.initialized = false;
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    }
    

    static getInstance(): BasicTouchInputFactory | null {
        if (BasicTouchInputFactory.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            BasicTouchInputFactory.instance = new BasicTouchInputFactory().jinit_BasicTouchInputFactory_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<BasicTouchInputFactory | null>(BasicTouchInputFactory.instance);
    }
    

    jinit_BasicTouchInputFactory_0(): BasicTouchInputFactory {
        super.jinit_JObject_0();
        this.jfields_BasicTouchInputFactory();
        let MAX: i32 = InputFactory.getInstance()!.MAX; if (JThrowable.pending !== null) return this;
        this.SPECIAL_BUTTON_SEVEN_TESTING_ONLY = new TouchButtonInput().jinit_TouchButtonInput_2(MAX - 41, "Button 7 - Testing Only May Cross Over Key Values"); if (JThrowable.pending !== null) return this;
        this.SPECIAL_BUTTON_EIGHT_TESTING_ONLY = new TouchButtonInput().jinit_TouchButtonInput_2(MAX - 42, "Button 8 - Testing Only May Cross Over Key Values"); if (JThrowable.pending !== null) return this;
        this.SPECIAL_BUTTON_SIX = new TouchButtonInput().jinit_TouchButtonInput_2(MAX - 30, "Button 6"); if (JThrowable.pending !== null) return this;
        this.SPECIAL_BUTTON_FIVE = new TouchButtonInput().jinit_TouchButtonInput_2(MAX - 31, "Button 5"); if (JThrowable.pending !== null) return this;
        this.SPECIAL_BUTTON_FOUR = new TouchButtonInput().jinit_TouchButtonInput_2(MAX - 32, "Button 4"); if (JThrowable.pending !== null) return this;
        this.SPECIAL_BUTTON_THREE = new TouchButtonInput().jinit_TouchButtonInput_2(MAX - 33, "Button 3"); if (JThrowable.pending !== null) return this;
        this.SPECIAL_BUTTON_TWO = new TouchButtonInput().jinit_TouchButtonInput_2(MAX - 34, "Button 2"); if (JThrowable.pending !== null) return this;
        this.SPECIAL_BUTTON_ONE = new TouchButtonInput().jinit_TouchButtonInput_2(MAX - 35, "Button 1"); if (JThrowable.pending !== null) return this;
        this.UP = new TouchButtonInput().jinit_TouchButtonInput_2(MAX - 36, "Up Button"); if (JThrowable.pending !== null) return this;
        this.LEFT = new TouchButtonInput().jinit_TouchButtonInput_2(MAX - 37, "Left Button"); if (JThrowable.pending !== null) return this;
        this.RIGHT = new TouchButtonInput().jinit_TouchButtonInput_2(MAX - 38, "Right Button"); if (JThrowable.pending !== null) return this;
        this.DOWN = new TouchButtonInput().jinit_TouchButtonInput_2(MAX - 39, "Down Button"); if (JThrowable.pending !== null) return this;
        this.NONE = new TouchButtonInput().jinit_TouchButtonInput_2(MAX - 40, "No Button"); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    init(inputToGameKeyMapping: InputToGameKeyMapping | null): void {
        if (!this.initialized) {
            this.initialized = true;
            this.list!.add(this.UP); if (JThrowable.pending !== null) return;
            this.list!.add(this.LEFT); if (JThrowable.pending !== null) return;
            this.list!.add(this.RIGHT); if (JThrowable.pending !== null) return;
            this.list!.add(this.DOWN); if (JThrowable.pending !== null) return;
            this.list!.add(this.SPECIAL_BUTTON_TWO); if (JThrowable.pending !== null) return;
            this.list!.add(this.SPECIAL_BUTTON_FOUR); if (JThrowable.pending !== null) return;
            this.list!.add(this.SPECIAL_BUTTON_THREE); if (JThrowable.pending !== null) return;
            this.list!.add(this.SPECIAL_BUTTON_ONE); if (JThrowable.pending !== null) return;
            this.list!.add(this.SPECIAL_BUTTON_FIVE); if (JThrowable.pending !== null) return;
            this.list!.add(this.SPECIAL_BUTTON_SIX); if (JThrowable.pending !== null) return;
            this.list!.add(this.SPECIAL_BUTTON_SIX); if (JThrowable.pending !== null) return;
            this.list!.add(this.SPECIAL_BUTTON_SEVEN_TESTING_ONLY); if (JThrowable.pending !== null) return;
            this.list!.add(this.SPECIAL_BUTTON_EIGHT_TESTING_ONLY); if (JThrowable.pending !== null) return;
            this.updateAllFromList(this.list, inputToGameKeyMapping); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    updateAll(inputToGameKeyMapping: InputToGameKeyMapping | null): void {
        this.updateAllFromList(this.list, inputToGameKeyMapping); if (JThrowable.pending !== null) return;
    }
    

    updateAllFromList(list: BasicArrayList | null, inputToGameKeyMapping: InputToGameKeyMapping | null): void {
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonLabels.getInstance()!.START_LABEL)!.appendint(list!.size())), this, "updateAll"); if (JThrowable.pending !== null) return;
        let touchButtonInput: TouchButtonInput | null = null;
        for (let index: i32 = list!.size() - 1; index >= 0; index--) {
            touchButtonInput = changetype<TouchButtonInput | null>(list!.objectArray![index]);
            touchButtonInput!.update(inputToGameKeyMapping); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getList(): BasicArrayList | null {
        return this.list;
    }
}

