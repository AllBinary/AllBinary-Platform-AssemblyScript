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
// package org.allbinary.graphics.font
// import javax.microedition.lcdui.Font
// import javax.microedition.lcdui.Graphics

@global export class FontDebugFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.font.FontDebugFactory";
    }
    @lazy static jv_instance: FontDebugFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): FontDebugFactory | null {
        if (!FontDebugFactory.js_instance) {
            FontDebugFactory.js_instance = true;
            FontDebugFactory.jv_instance = new FontDebugFactory().jinit_FontDebugFactory_0();
        }
        return FontDebugFactory.jv_instance;
    }
    static set instance(value: FontDebugFactory | null) {
        FontDebugFactory.js_instance = true;
        FontDebugFactory.jv_instance = value;
    }

    jinit_FontDebugFactory_0(): FontDebugFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): FontDebugFactory | null {
        return FontDebugFactory.instance;
    }
    

    setFont(font: Font | null, graphics: Graphics | null): void {
        graphics!.setFont(font); if (JThrowable.pending !== null) return;
    }
}

