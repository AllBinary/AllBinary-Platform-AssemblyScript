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
// package org.allbinary.animation
// import org.allbinary.logic.util.event.handler.BasicEventHandler

@global export class AnimationEventHandler extends BasicEventHandler {

    jclassName(): string {
        return "org.allbinary.animation.AnimationEventHandler";
    }
    @lazy static jv_eventHandler: AnimationEventHandler | null = null;
    @lazy static js_eventHandler: bool = false;
    static get eventHandler(): AnimationEventHandler | null {
        if (!AnimationEventHandler.js_eventHandler) {
            AnimationEventHandler.js_eventHandler = true;
            AnimationEventHandler.jv_eventHandler = new AnimationEventHandler().jinit_AnimationEventHandler_0();
        }
        return AnimationEventHandler.jv_eventHandler;
    }
    static set eventHandler(value: AnimationEventHandler | null) {
        AnimationEventHandler.js_eventHandler = true;
        AnimationEventHandler.jv_eventHandler = value;
    }
    

    jinit_AnimationEventHandler_0(): AnimationEventHandler {
        super.jinit_BasicEventHandler_0();
        return this;
    }
    

    static getInstance(): AnimationEventHandler | null {
        return AnimationEventHandler.eventHandler;
    }
}

