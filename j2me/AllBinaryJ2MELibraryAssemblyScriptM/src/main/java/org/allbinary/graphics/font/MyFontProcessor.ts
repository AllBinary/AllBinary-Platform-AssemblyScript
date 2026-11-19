/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// package org.allbinary.graphics.font
// import javax.microedition.lcdui.Font
// import javax.microedition.lcdui.Graphics

@global export class MyFontProcessor extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.font.MyFontProcessor";
    }
    @lazy static jv_instance: MyFontProcessor | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): MyFontProcessor | null {
        if (!MyFontProcessor.js_instance) {
            MyFontProcessor.js_instance = true;
            MyFontProcessor.jv_instance = new MyFontProcessor().jinit_MyFontProcessor_0();
        }
        return MyFontProcessor.jv_instance;
    }
    static set instance(value: MyFontProcessor | null) {
        MyFontProcessor.js_instance = true;
        MyFontProcessor.jv_instance = value;
    }

    jinit_MyFontProcessor_0(): MyFontProcessor {
        super.jinit_JObject_0();
        return this;
    }
    

    static defaultCharWidth(font: Font | null): i32 {
        return font!.charWidth((<u16>0x43));
    }
    

    static defaultStringWidth(font: Font | null, size: i32): i32 {
        return MyFontProcessor.defaultCharWidth(font) * size;
    }
    

    static getInstance(): MyFontProcessor | null {
        return MyFontProcessor.instance;
    }
    

    process(graphics: Graphics | null): void {
    }
}

