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
// package org.allbinary.graphics.color
// import jsinterop.annotations.JsType
// import org.allbinary.logic.string.StringUtil
// import jsinterop.annotations.JsMethod
// import jsinterop.annotations.JsProperty

@global export class BasicColorFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.color.BasicColorFactory";
    }
    @lazy static jv_instance: BasicColorFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): BasicColorFactory | null {
        if (!BasicColorFactory.js_instance) {
            BasicColorFactory.js_instance = true;
            BasicColorFactory.jv_instance = new BasicColorFactory().jinit_BasicColorFactory_0();
        }
        return BasicColorFactory.jv_instance;
    }
    static set instance(value: BasicColorFactory | null) {
        BasicColorFactory.js_instance = true;
        BasicColorFactory.jv_instance = value;
    }
    NULL_COLOR: BasicColor | null = null;
    TAN: BasicColor | null = null;
    SKIN_PINK: BasicColor | null = null;
    RED: BasicColor | null = null;
    LIGHT_RED: BasicColor | null = null;
    DARK_GREEN: BasicColor | null = null;
    GREEN: BasicColor | null = null;
    LIGHT_GREEN: BasicColor | null = null;
    PURPLE: BasicColor | null = null;
    BLUE: BasicColor | null = null;
    LIGHT_BLUE: BasicColor | null = null;
    VERY_LIGHT_BLUE: BasicColor | null = null;
    PUCE: BasicColor | null = null;
    AQUA: BasicColor | null = null;
    YELLOW: BasicColor | null = null;
    PINK: BasicColor | null = null;
    BLACK: BasicColor | null = null;
    GREY: BasicColor | null = null;
    LIGHT_GREY: BasicColor | null = null;
    DARK_GREY: BasicColor | null = null;
    ORANGE: BasicColor | null = null;
    BROWN: BasicColor | null = null;
    WHITE: BasicColor | null = null;
    TRANSPARENT_COLOR: BasicColor | null = null;
    TRANSPARENT_GREY: BasicColor | null = null;
    TRANSPARENT_BLACK: BasicColor | null = null;
    TRANSPARENT_RED: BasicColor | null = null;
    CLEAR_COLOR: BasicColor | null = null;
    BORDER_COLOR: BasicColor | null = null;

    jfields_BasicColorFactory(): void {
    this.NULL_COLOR = this.createInstanceARGB(255, 255, 255, 255, "null color");
    this.TAN = this.createInstance(0xE9D8B5);
    this.SKIN_PINK = this.createInstance(0xFDCECE);
    this.RED = this.createInstanceAN(BasicColorUtil.getInstance()!.ALPHA, 0xFF0000, "red");
    this.LIGHT_RED = this.createInstanceAN(BasicColorUtil.getInstance()!.ALPHA, 0xFFA0A0, "light red");
    this.DARK_GREEN = this.createInstance(0x00FF00);
    this.GREEN = this.createInstanceAN(BasicColorUtil.getInstance()!.ALPHA, 0x00DD00, "green");
    this.LIGHT_GREEN = this.createInstance(0x007700);
    this.PURPLE = this.createInstanceAN(BasicColorUtil.getInstance()!.ALPHA, 0x400040, "purple");
    this.BLUE = this.createInstanceAN(BasicColorUtil.getInstance()!.ALPHA, 0x0000FF, "blue");
    this.LIGHT_BLUE = this.createInstance(0x00aaff);
    this.VERY_LIGHT_BLUE = this.createInstance(0x000033);
    this.PUCE = this.createInstance(0xFF00AA);
    this.AQUA = this.createInstance(0x00FFFF);
    this.YELLOW = this.createInstanceAN(BasicColorUtil.getInstance()!.ALPHA, 0xFFFF00, "yellow");
    this.PINK = this.createInstance(0xFF00FF);
    this.BLACK = this.createInstanceAN(BasicColorUtil.getInstance()!.ALPHA, 0x000000, "black");
    this.GREY = this.createInstanceAN(BasicColorUtil.getInstance()!.ALPHA, 0xAAAAAA, "grey");
    this.LIGHT_GREY = this.createInstance(0xC0C0C0);
    this.DARK_GREY = this.createInstance(0x404040);
    this.ORANGE = this.createInstance(0xe07718);
    this.BROWN = this.createInstance(0x956B00);
    this.WHITE = this.createInstance(0xFFFFFF);
    this.TRANSPARENT_COLOR = this.createInstanceAN(0x00000000, 0x000000, StringUtil.getInstance()!.EMPTY_STRING);
    this.TRANSPARENT_GREY = this.createInstanceAN(0x52000000, 0xECECEC, StringUtil.getInstance()!.EMPTY_STRING);
    this.TRANSPARENT_BLACK = this.createInstanceAN(0x52000000, 0x000000, StringUtil.getInstance()!.EMPTY_STRING);
    this.TRANSPARENT_RED = this.createInstanceAN(0x52000000, 0xFF0000, StringUtil.getInstance()!.EMPTY_STRING);
    this.CLEAR_COLOR = this.BLACK;
    this.BORDER_COLOR = this.WHITE;
    }

    jinit_BasicColorFactory_0(): BasicColorFactory {
        super.jinit_JObject_0();
        this.jfields_BasicColorFactory();
        return this;
    }
    

    static getInstance(): BasicColorFactory | null {
        return BasicColorFactory.instance;
    }
    

    createInstance(value: i32): BasicColor | null {
        return new BasicColor().jinit_BasicColor_3(BasicColorUtil.getInstance()!.ALPHA, value, StringUtil.getInstance()!.EMPTY_STRING);
    }
    

    createInstanceA(alphaValue: i32, value: i32): BasicColor | null {
        return new BasicColor().jinit_BasicColor_3(alphaValue, value, StringUtil.getInstance()!.EMPTY_STRING);
    }
    

    createInstanceAN(alphaValue: i32, value: i32, name: string | null): BasicColor | null {
        return new BasicColor().jinit_BasicColor_3(alphaValue, value, name);
    }
    

    createInstanceARGB(alphaValue: i32, r: i32, g: i32, b: i32, name: string | null): BasicColor | null {
        let ALPHA_MASK: i32 = (<i32><u32>0xFF000000);
        return new BasicColor().jinit_BasicColor_3(alphaValue, ((alphaValue << 24) & ALPHA_MASK) + ((r << 16) & 0x00FF0000) + ((g << 8) & 0x0000FF00) + (b & 0x000000FF), StringUtil.getInstance()!.EMPTY_STRING);
    }
}

