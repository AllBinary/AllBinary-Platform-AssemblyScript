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
// package org.allbinary.game.configuration.event
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventListenerInterface
// import org.allbinary.logic.util.event.handler.BasicEventHandler

@global export class GameInitializedEventHandler extends BasicEventHandler {

    jclassName(): string {
        return "org.allbinary.game.configuration.event.GameInitializedEventHandler";
    }
    @lazy static jv_gameKeyEventHandler: GameInitializedEventHandler | null = null;
    @lazy static js_gameKeyEventHandler: bool = false;
    static get gameKeyEventHandler(): GameInitializedEventHandler | null {
        if (!GameInitializedEventHandler.js_gameKeyEventHandler) {
            GameInitializedEventHandler.js_gameKeyEventHandler = true;
            GameInitializedEventHandler.jv_gameKeyEventHandler = new GameInitializedEventHandler().jinit_GameInitializedEventHandler_0();
        }
        return GameInitializedEventHandler.jv_gameKeyEventHandler;
    }
    static set gameKeyEventHandler(value: GameInitializedEventHandler | null) {
        GameInitializedEventHandler.js_gameKeyEventHandler = true;
        GameInitializedEventHandler.jv_gameKeyEventHandler = value;
    }
    

    jinit_GameInitializedEventHandler_0(): GameInitializedEventHandler {
        super.jinit_BasicEventHandler_0();
        return this;
    }
    

    static getInstance(): GameInitializedEventHandler | null {
        return GameInitializedEventHandler.gameKeyEventHandler;
    }
    

    process(eventObject: AllBinaryEventObject | null, eventListenerInterface: EventListenerInterface | null): void {
        let gameInitializedListenerInterface: GameInitializedListenerInterface | null = (changetype<GameInitializedListenerInterface | null>(eventListenerInterface));
        gameInitializedListenerInterface!.onGameInitialized(changetype<GameInitializedEvent | null>(eventObject)); if (JThrowable.pending !== null) return;
    }
}

