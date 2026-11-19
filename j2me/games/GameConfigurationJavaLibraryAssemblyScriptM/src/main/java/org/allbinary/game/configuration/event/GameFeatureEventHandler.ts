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

@global export class GameFeatureEventHandler extends BasicEventHandler {

    jclassName(): string {
        return "org.allbinary.game.configuration.event.GameFeatureEventHandler";
    }
    @lazy static jv_gameKeyEventHandler: GameFeatureEventHandler | null = null;
    @lazy static js_gameKeyEventHandler: bool = false;
    static get gameKeyEventHandler(): GameFeatureEventHandler | null {
        if (!GameFeatureEventHandler.js_gameKeyEventHandler) {
            GameFeatureEventHandler.js_gameKeyEventHandler = true;
            GameFeatureEventHandler.jv_gameKeyEventHandler = new GameFeatureEventHandler().jinit_GameFeatureEventHandler_0();
        }
        return GameFeatureEventHandler.jv_gameKeyEventHandler;
    }
    static set gameKeyEventHandler(value: GameFeatureEventHandler | null) {
        GameFeatureEventHandler.js_gameKeyEventHandler = true;
        GameFeatureEventHandler.jv_gameKeyEventHandler = value;
    }
    

    jinit_GameFeatureEventHandler_0(): GameFeatureEventHandler {
        super.jinit_BasicEventHandler_0();
        return this;
    }
    

    static getInstance(): GameFeatureEventHandler | null {
        return GameFeatureEventHandler.gameKeyEventHandler;
    }
    

    process(eventObject: AllBinaryEventObject | null, eventListenerInterface: EventListenerInterface | null): void {
        let gameFeatureListenerInterface: GameFeatureListenerInterface | null = (changetype<GameFeatureListenerInterface | null>(eventListenerInterface));
        gameFeatureListenerInterface!.onGameFeatureChange(changetype<GameFeatureEvent | null>(eventObject)); if (JThrowable.pending !== null) return;
    }
}

