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
// package org.allbinary.game.input.event
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.util.event.EventListenerInterface
// import org.allbinary.string.CommonStrings

@global export class GameKeyEventHandler extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.event.GameKeyEventHandler";
    }
    @lazy static jv_instance: GameKeyEventHandler | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GameKeyEventHandler | null {
        if (!GameKeyEventHandler.js_instance) {
            GameKeyEventHandler.js_instance = true;
            GameKeyEventHandler.jv_instance = new GameKeyEventHandler().jinit_GameKeyEventHandler_0();
        }
        return GameKeyEventHandler.jv_instance;
    }
    static set instance(value: GameKeyEventHandler | null) {
        GameKeyEventHandler.js_instance = true;
        GameKeyEventHandler.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    pressGameKeyEventHandler: PressGameKeyEventHandler | null = null;
    upGameKeyEventHandler: UpGameKeyEventHandler | null = null;
    downGameKeyEventHandler: DownGameKeyEventHandler | null = null;

    jfields_GameKeyEventHandler(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.pressGameKeyEventHandler = PressGameKeyEventHandler.getInstance();
    this.upGameKeyEventHandler = UpGameKeyEventHandler.getInstance();
    this.downGameKeyEventHandler = DownGameKeyEventHandler.getInstance();
    }

    jinit_GameKeyEventHandler_0(): GameKeyEventHandler {
        super.jinit_JObject_0();
        this.jfields_GameKeyEventHandler();
        return this;
    }
    

    static getInstance(): GameKeyEventHandler | null {
        return GameKeyEventHandler.instance;
    }
    

    removeAllListeners(): void {
        this.pressGameKeyEventHandler!.removeAllListeners(); if (JThrowable.pending !== null) return;
        this.upGameKeyEventHandler!.removeAllListeners(); if (JThrowable.pending !== null) return;
        this.downGameKeyEventHandler!.removeAllListeners(); if (JThrowable.pending !== null) return;
    }
    

    addListenerForPlayer(eventListenerInterface: EventListenerInterface | null, playerInputId: i32): void {
        this.logUtil!.putF(JObject.jtoString(eventListenerInterface), this, this.commonStrings!.ADD_LISTENER); if (JThrowable.pending !== null) return;
        this.pressGameKeyEventHandler!.addListenerSingleThreaded(eventListenerInterface); if (JThrowable.pending !== null) return;
        this.upGameKeyEventHandler!.getInstanceForPlayer(playerInputId)!.addListenerSingleThreaded(eventListenerInterface); if (JThrowable.pending !== null) return;
        this.downGameKeyEventHandler!.getInstanceForPlayer(playerInputId)!.addListenerSingleThreaded(eventListenerInterface); if (JThrowable.pending !== null) return;
    }
    

    addListener(eventListenerInterface: EventListenerInterface | null): void {
        this.logUtil!.putF(JObject.jtoString(eventListenerInterface), this, this.commonStrings!.ADD_LISTENER); if (JThrowable.pending !== null) return;
        this.pressGameKeyEventHandler!.addListenerSingleThreaded(eventListenerInterface); if (JThrowable.pending !== null) return;
        this.upGameKeyEventHandler!.addListenerSingleThreaded(eventListenerInterface); if (JThrowable.pending !== null) return;
        this.downGameKeyEventHandler!.addListenerSingleThreaded(eventListenerInterface); if (JThrowable.pending !== null) return;
    }
    

    removeListener(eventListenerInterface: EventListenerInterface | null): void {
        this.logUtil!.putF(JObject.jtoString(eventListenerInterface), this, this.commonStrings!.REMOVE_LISTENER); if (JThrowable.pending !== null) return;
        this.pressGameKeyEventHandler!.removeListenerSingleThreaded(eventListenerInterface); if (JThrowable.pending !== null) return;
        this.upGameKeyEventHandler!.removeListenerSingleThreaded(eventListenerInterface); if (JThrowable.pending !== null) return;
        this.downGameKeyEventHandler!.removeListenerSingleThreaded(eventListenerInterface); if (JThrowable.pending !== null) return;
    }
}

