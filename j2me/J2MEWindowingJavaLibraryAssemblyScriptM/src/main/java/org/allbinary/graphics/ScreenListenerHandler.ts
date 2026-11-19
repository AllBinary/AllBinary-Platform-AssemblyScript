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

@global export class ScreenListenerHandler extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.ScreenListenerHandler";
    }
    @lazy static jv_instance: ScreenListenerHandler | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ScreenListenerHandler | null {
        if (!ScreenListenerHandler.js_instance) {
            ScreenListenerHandler.js_instance = true;
            ScreenListenerHandler.jv_instance = new ScreenListenerHandler().jinit_ScreenListenerHandler_0();
        }
        return ScreenListenerHandler.jv_instance;
    }
    static set instance(value: ScreenListenerHandler | null) {
        ScreenListenerHandler.js_instance = true;
        ScreenListenerHandler.jv_instance = value;
    }
    screenListenerInterface: ScreenListenerInterface | null = null;

    jfields_ScreenListenerHandler(): void {
    this.screenListenerInterface = new ScreenEmptyListener().jinit_ScreenEmptyListener_0();
    }

    jinit_ScreenListenerHandler_0(): ScreenListenerHandler {
        super.jinit_JObject_0();
        this.jfields_ScreenListenerHandler();
        return this;
    }
    

    static getInstance(): ScreenListenerHandler | null {
        return ScreenListenerHandler.instance;
    }
    

    setListener(screenListenerInterface: ScreenListenerInterface | null): void {
        this.screenListenerInterface = screenListenerInterface;
    }
    

    fireWithState(isFullScreen: bool): void {
        this.screenListenerInterface!.onFullScreen(isFullScreen); if (JThrowable.pending !== null) return;
    }
    

    fire(): void {
        this.screenListenerInterface!.onFullScreenDisplay(); if (JThrowable.pending !== null) return;
    }
}

