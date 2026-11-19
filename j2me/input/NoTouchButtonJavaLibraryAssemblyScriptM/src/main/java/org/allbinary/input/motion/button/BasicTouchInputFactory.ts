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
    this.SPECIAL_BUTTON_SIX = new TouchButtonInput().jinit_TouchButtonInput_2(InputFactory.getInstance()!.MAX - 30, "Button 6");
    this.SPECIAL_BUTTON_FIVE = new TouchButtonInput().jinit_TouchButtonInput_2(InputFactory.getInstance()!.MAX - 31, "Button 5");
    this.SPECIAL_BUTTON_FOUR = new TouchButtonInput().jinit_TouchButtonInput_2(InputFactory.getInstance()!.MAX - 32, "Button 4");
    this.SPECIAL_BUTTON_THREE = new TouchButtonInput().jinit_TouchButtonInput_2(InputFactory.getInstance()!.MAX - 33, "Button 3");
    this.SPECIAL_BUTTON_TWO = new TouchButtonInput().jinit_TouchButtonInput_2(InputFactory.getInstance()!.MAX - 34, "Button 2");
    this.SPECIAL_BUTTON_ONE = new TouchButtonInput().jinit_TouchButtonInput_2(InputFactory.getInstance()!.MAX - 35, "Button 1");
    this.UP = new TouchButtonInput().jinit_TouchButtonInput_2(InputFactory.getInstance()!.MAX - 36, "Up Button");
    this.LEFT = new TouchButtonInput().jinit_TouchButtonInput_2(InputFactory.getInstance()!.MAX - 37, "Left Button");
    this.RIGHT = new TouchButtonInput().jinit_TouchButtonInput_2(InputFactory.getInstance()!.MAX - 38, "Right Button");
    this.DOWN = new TouchButtonInput().jinit_TouchButtonInput_2(InputFactory.getInstance()!.MAX - 39, "Down Button");
    this.NONE = new TouchButtonInput().jinit_TouchButtonInput_2(InputFactory.getInstance()!.MAX - 40, "No Button");
    this.initialized = false;
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    }

    jinit_BasicTouchInputFactory_0(): BasicTouchInputFactory {
        super.jinit_JObject_0();
        this.jfields_BasicTouchInputFactory();
        return this;
    }
    

    static getInstance(): BasicTouchInputFactory | null {
        if (BasicTouchInputFactory.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            BasicTouchInputFactory.instance = new BasicTouchInputFactory().jinit_BasicTouchInputFactory_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<BasicTouchInputFactory | null>(BasicTouchInputFactory.instance);
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
            this.updateAllList(this.list, inputToGameKeyMapping); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    updateAll(inputToGameKeyMapping: InputToGameKeyMapping | null): void {
        this.updateAllList(this.getList(), inputToGameKeyMapping); if (JThrowable.pending !== null) return;
    }
    

    updateAllList(list: BasicArrayList | null, inputToGameKeyMapping: InputToGameKeyMapping | null): void {
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonLabels.getInstance()!.START)!.appendint(list!.size())), this, "updateAll"); if (JThrowable.pending !== null) return;
        for (let index: i32 = list!.size() - 1; index >= 0; index--) {
            let touchButtonInput: TouchButtonInput | null = changetype<TouchButtonInput | null>(list!.get(index)); if (JThrowable.pending !== null) return;
            touchButtonInput!.update(inputToGameKeyMapping); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getList(): BasicArrayList | null {
        return this.list;
    }
}

