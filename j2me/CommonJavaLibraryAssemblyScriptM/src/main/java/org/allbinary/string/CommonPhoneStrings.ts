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
// package org.allbinary.string
// import jsinterop.annotations.JsType

@global export class CommonPhoneStrings extends JObject {

    jclassName(): string {
        return "org.allbinary.string.CommonPhoneStrings";
    }
    @lazy static jv_instance: CommonPhoneStrings | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): CommonPhoneStrings | null {
        if (!CommonPhoneStrings.js_instance) {
            CommonPhoneStrings.js_instance = true;
            CommonPhoneStrings.jv_instance = new CommonPhoneStrings().jinit_CommonPhoneStrings_0();
        }
        return CommonPhoneStrings.jv_instance;
    }
    static set instance(value: CommonPhoneStrings | null) {
        CommonPhoneStrings.js_instance = true;
        CommonPhoneStrings.jv_instance = value;
    }
    UP: string | null = null;
    DOWN: string | null = null;
    LEFT: string | null = null;
    RIGHT: string | null = null;
    ZERO: string | null = null;
    ONE: string | null = null;
    TWO: string | null = null;
    THREE: string | null = null;
    FOUR: string | null = null;
    FIVE: string | null = null;
    SIX: string | null = null;
    SEVEN: string | null = null;
    EIGHT: string | null = null;
    NINE: string | null = null;
    POUND: string | null = null;
    STAR: string | null = null;
    FIRE: string | null = null;

    jfields_CommonPhoneStrings(): void {
    this.UP = "UP";
    this.DOWN = "DOWN";
    this.LEFT = "LEFT";
    this.RIGHT = "RIGHT";
    this.ZERO = "0";
    this.ONE = "1";
    this.TWO = "2";
    this.THREE = "3";
    this.FOUR = "4";
    this.FIVE = "5";
    this.SIX = "6";
    this.SEVEN = "7";
    this.EIGHT = "8";
    this.NINE = "9";
    this.POUND = "#";
    this.STAR = "*";
    this.FIRE = "FIRE";
    }

    jinit_CommonPhoneStrings_0(): CommonPhoneStrings {
        super.jinit_JObject_0();
        this.jfields_CommonPhoneStrings();
        return this;
    }
    

    static getInstance(): CommonPhoneStrings | null {
        return CommonPhoneStrings.instance;
    }
}

