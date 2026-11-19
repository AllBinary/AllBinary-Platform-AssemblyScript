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
// package org.allbinary.game.layer.hud.event
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventListenerInterface
// import org.allbinary.logic.util.event.NullEventListener
// import org.allbinary.logic.util.event.handler.BasicEventHandler
// import org.allbinary.util.BasicArrayList

@global export class GameNotificationEventHandler extends BasicEventHandler {

    jclassName(): string {
        return "org.allbinary.game.layer.hud.event.GameNotificationEventHandler";
    }
    @lazy static jv_instance: GameNotificationEventHandler | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GameNotificationEventHandler | null {
        if (!GameNotificationEventHandler.js_instance) {
            GameNotificationEventHandler.js_instance = true;
            GameNotificationEventHandler.jv_instance = new GameNotificationEventHandler().jinit_GameNotificationEventHandler_0();
        }
        return GameNotificationEventHandler.jv_instance;
    }
    static set instance(value: GameNotificationEventHandler | null) {
        GameNotificationEventHandler.js_instance = true;
        GameNotificationEventHandler.jv_instance = value;
    }
    enabled: bool = false;

    jfields_GameNotificationEventHandler(): void {
    this.enabled = true;
    }
    

    jinit_GameNotificationEventHandler_0(): GameNotificationEventHandler {
        super.jinit_BasicEventHandler_0();
        this.jfields_GameNotificationEventHandler();
        return this;
    }
    

    removeAllListeners(): void {
        let eventListenerInterface: EventListenerInterface | null = NullEventListener.NULL_EVENT_LISTENER;
        let list: BasicArrayList | null = this.eventListenerInterfaceList;
        if (list!.size() > 0) {
            eventListenerInterface = changetype<EventListenerInterface | null>(list!.objectArray![0]);
        } if (JThrowable.pending !== null) return;
        super.removeAllListeners(); if (JThrowable.pending !== null) return;
        if (eventListenerInterface != NullEventListener.NULL_EVENT_LISTENER) {
            this.addListenerInterface(eventListenerInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    static getInstance(): GameNotificationEventHandler | null {
        return GameNotificationEventHandler.instance;
    }
    

    process(eventObject: AllBinaryEventObject | null, eventListenerInterface: EventListenerInterface | null): void {
        if (!this.enabled) {
            return;
        }
        let gameNotificationListenerInterface: GameNotificationListenerInterface | null = changetype<GameNotificationListenerInterface | null>(eventListenerInterface);
        gameNotificationListenerInterface!.onGameNotificationEvent(changetype<GameNotificationEvent | null>(eventObject)); if (JThrowable.pending !== null) return;
    }
}

