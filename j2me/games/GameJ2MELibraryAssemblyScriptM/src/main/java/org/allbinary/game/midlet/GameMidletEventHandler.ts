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
// package org.allbinary.game.midlet
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventListenerInterface
// import org.allbinary.logic.util.event.handler.BasicEventHandler

@global export class GameMidletEventHandler extends BasicEventHandler {

    jclassName(): string {
        return "org.allbinary.game.midlet.GameMidletEventHandler";
    }
    @lazy static jv_gameKeyEventHandler: GameMidletEventHandler | null = null;
    @lazy static js_gameKeyEventHandler: bool = false;
    static get gameKeyEventHandler(): GameMidletEventHandler | null {
        if (!GameMidletEventHandler.js_gameKeyEventHandler) {
            GameMidletEventHandler.js_gameKeyEventHandler = true;
            GameMidletEventHandler.jv_gameKeyEventHandler = new GameMidletEventHandler().jinit_GameMidletEventHandler_0();
        }
        return GameMidletEventHandler.jv_gameKeyEventHandler;
    }
    static set gameKeyEventHandler(value: GameMidletEventHandler | null) {
        GameMidletEventHandler.js_gameKeyEventHandler = true;
        GameMidletEventHandler.jv_gameKeyEventHandler = value;
    }
    

    jinit_GameMidletEventHandler_0(): GameMidletEventHandler {
        super.jinit_BasicEventHandler_0();
        return this;
    }
    

    static getInstance(): GameMidletEventHandler | null {
        return GameMidletEventHandler.gameKeyEventHandler;
    }
    

    process(eventObject: AllBinaryEventObject | null, eventListenerInterface: EventListenerInterface | null): void {
        let gameMidletEventListener: GameMidletEventListener | null = changetype<GameMidletEventListener | null>(eventListenerInterface);
        gameMidletEventListener!.onGameEnd(eventObject); if (JThrowable.pending !== null) return;
    }
}

