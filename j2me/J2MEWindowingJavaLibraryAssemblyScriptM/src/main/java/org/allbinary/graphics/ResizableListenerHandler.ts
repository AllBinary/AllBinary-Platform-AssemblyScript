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
// package org.allbinary.graphics

@global export class ResizableListenerHandler extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.ResizableListenerHandler";
    }
    @lazy static jv_instance: ResizableListenerHandler | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ResizableListenerHandler | null {
        if (!ResizableListenerHandler.js_instance) {
            ResizableListenerHandler.js_instance = true;
            ResizableListenerHandler.jv_instance = new ResizableListenerHandler().jinit_ResizableListenerHandler_0();
        }
        return ResizableListenerHandler.jv_instance;
    }
    static set instance(value: ResizableListenerHandler | null) {
        ResizableListenerHandler.js_instance = true;
        ResizableListenerHandler.jv_instance = value;
    }

    jinit_ResizableListenerHandler_0(): ResizableListenerHandler {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): ResizableListenerHandler | null {
        return ResizableListenerHandler.instance;
    }
    

    setListener(resizableListenerInterface: ResizableListenerInterface | null): void {
    }
    

    fire(isFullScreen: bool): void {
    }
    

    fireEvent(value: bool): void {
    }
}

