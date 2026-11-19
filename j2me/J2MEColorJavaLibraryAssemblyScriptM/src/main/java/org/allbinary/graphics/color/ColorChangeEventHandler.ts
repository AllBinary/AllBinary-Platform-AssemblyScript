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
// import org.allbinary.logic.util.event.handler.BasicEventHandler

@global export class ColorChangeEventHandler extends BasicEventHandler {

    jclassName(): string {
        return "org.allbinary.graphics.color.ColorChangeEventHandler";
    }
    @lazy static jv_eventHandler: ColorChangeEventHandler | null = null;
    @lazy static js_eventHandler: bool = false;
    static get eventHandler(): ColorChangeEventHandler | null {
        if (!ColorChangeEventHandler.js_eventHandler) {
            ColorChangeEventHandler.js_eventHandler = true;
            ColorChangeEventHandler.jv_eventHandler = new ColorChangeEventHandler().jinit_ColorChangeEventHandler_0();
        }
        return ColorChangeEventHandler.jv_eventHandler;
    }
    static set eventHandler(value: ColorChangeEventHandler | null) {
        ColorChangeEventHandler.js_eventHandler = true;
        ColorChangeEventHandler.jv_eventHandler = value;
    }
    

    jinit_ColorChangeEventHandler_0(): ColorChangeEventHandler {
        super.jinit_BasicEventHandler_0();
        return this;
    }
    

    static getInstance(): ColorChangeEventHandler | null {
        return ColorChangeEventHandler.eventHandler;
    }
}

