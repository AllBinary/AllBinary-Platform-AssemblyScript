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
// import org.allbinary.game.input.LocalPlayerInputIdFactory
// import org.allbinary.logic.util.event.EventListenerInterface

@global export class DownGameKeyEventHandler extends DownGameKeyEventHandlerBase {

    jclassName(): string {
        return "org.allbinary.game.input.event.DownGameKeyEventHandler";
    }
    @lazy static jv_instance: DownGameKeyEventHandler | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): DownGameKeyEventHandler | null {
        if (!DownGameKeyEventHandler.js_instance) {
            DownGameKeyEventHandler.js_instance = true;
            DownGameKeyEventHandler.jv_instance = new DownGameKeyEventHandler().jinit_DownGameKeyEventHandler_0();
        }
        return DownGameKeyEventHandler.jv_instance;
    }
    static set instance(value: DownGameKeyEventHandler | null) {
        DownGameKeyEventHandler.js_instance = true;
        DownGameKeyEventHandler.jv_instance = value;
    }
    @lazy static jv_instanceArray: StaticArray<DownGameKeyEventHandlerBase | null> | null = null;
    @lazy static js_instanceArray: bool = false;
    static get instanceArray(): StaticArray<DownGameKeyEventHandlerBase | null> | null {
        if (!DownGameKeyEventHandler.js_instanceArray) {
            DownGameKeyEventHandler.js_instanceArray = true;
            DownGameKeyEventHandler.jv_instanceArray = StaticArray.fromArray<DownGameKeyEventHandlerBase | null>([new DownGameKeyEventHandlerBase().jinit_DownGameKeyEventHandlerBase_0(), new DownGameKeyEventHandlerBase().jinit_DownGameKeyEventHandlerBase_0(), new DownGameKeyEventHandlerBase().jinit_DownGameKeyEventHandlerBase_0(), new DownGameKeyEventHandlerBase().jinit_DownGameKeyEventHandlerBase_0(), new DownGameKeyEventHandlerBase().jinit_DownGameKeyEventHandlerBase_0(), new DownGameKeyEventHandlerBase().jinit_DownGameKeyEventHandlerBase_0()]);
        }
        return DownGameKeyEventHandler.jv_instanceArray;
    }
    static set instanceArray(value: StaticArray<DownGameKeyEventHandlerBase | null> | null) {
        DownGameKeyEventHandler.js_instanceArray = true;
        DownGameKeyEventHandler.jv_instanceArray = value;
    }
    playerInputIdFactory: LocalPlayerInputIdFactory | null = null;

    jfields_DownGameKeyEventHandler(): void {
    this.playerInputIdFactory = LocalPlayerInputIdFactory.getInstance();
    }
    

    static getInstance(): DownGameKeyEventHandler | null {
        return DownGameKeyEventHandler.instance;
    }
    

    getInstanceForDevice(deviceId: i32): DownGameKeyEventHandlerBase | null {
        let playerInputId: i32 = this.playerInputIdFactory!.getPlayerForDevice(deviceId); if (JThrowable.pending !== null) return null;
        return DownGameKeyEventHandler.instanceArray![playerInputId];
    }
    

    getInstanceForPlayer(playerInputId: i32): DownGameKeyEventHandlerBase | null {
        return DownGameKeyEventHandler.instanceArray![playerInputId];
    }
    

    jinit_DownGameKeyEventHandler_0(): DownGameKeyEventHandler {
        super.jinit_DownGameKeyEventHandlerBase_0();
        this.jfields_DownGameKeyEventHandler();
        return this;
    }
    

    removeAllListeners(): void {
        super.removeAllListeners(); if (JThrowable.pending !== null) return;
        for (let index: i32 = DownGameKeyEventHandler.instanceArray!.length - 1; index >= 0; index--) {
            DownGameKeyEventHandler.instanceArray![index]!.removeAllListeners(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    removeListenerSingleThreaded(eventListenerInterface: EventListenerInterface | null): void {
        super.removeListenerSingleThreaded(eventListenerInterface); if (JThrowable.pending !== null) return;
        for (let index: i32 = DownGameKeyEventHandler.instanceArray!.length - 1; index >= 0; index--) {
            DownGameKeyEventHandler.instanceArray![index]!.removeListenerSingleThreaded(eventListenerInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    removeListener(eventListenerInterface: EventListenerInterface | null): void {
        super.removeListener(eventListenerInterface); if (JThrowable.pending !== null) return;
        for (let index: i32 = DownGameKeyEventHandler.instanceArray!.length - 1; index >= 0; index--) {
            DownGameKeyEventHandler.instanceArray![index]!.removeListener(eventListenerInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

