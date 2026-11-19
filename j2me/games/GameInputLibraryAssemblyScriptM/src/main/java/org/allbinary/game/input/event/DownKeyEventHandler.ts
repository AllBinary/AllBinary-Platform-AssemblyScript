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

@global export class DownKeyEventHandler extends DownKeyEventHandlerBase {

    jclassName(): string {
        return "org.allbinary.game.input.event.DownKeyEventHandler";
    }
    @lazy static jv_instance: DownKeyEventHandler | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): DownKeyEventHandler | null {
        if (!DownKeyEventHandler.js_instance) {
            DownKeyEventHandler.js_instance = true;
            DownKeyEventHandler.jv_instance = new DownKeyEventHandler().jinit_DownKeyEventHandler_0();
        }
        return DownKeyEventHandler.jv_instance;
    }
    static set instance(value: DownKeyEventHandler | null) {
        DownKeyEventHandler.js_instance = true;
        DownKeyEventHandler.jv_instance = value;
    }
    @lazy static jv_instanceArray: StaticArray<DownKeyEventHandlerBase | null> | null = null;
    @lazy static js_instanceArray: bool = false;
    static get instanceArray(): StaticArray<DownKeyEventHandlerBase | null> | null {
        if (!DownKeyEventHandler.js_instanceArray) {
            DownKeyEventHandler.js_instanceArray = true;
            DownKeyEventHandler.jv_instanceArray = StaticArray.fromArray<DownKeyEventHandlerBase | null>([new DownKeyEventHandlerBase().jinit_DownKeyEventHandlerBase_0(), new DownKeyEventHandlerBase().jinit_DownKeyEventHandlerBase_0(), new DownKeyEventHandlerBase().jinit_DownKeyEventHandlerBase_0(), new DownKeyEventHandlerBase().jinit_DownKeyEventHandlerBase_0(), new DownKeyEventHandlerBase().jinit_DownKeyEventHandlerBase_0(), new DownKeyEventHandlerBase().jinit_DownKeyEventHandlerBase_0()]);
        }
        return DownKeyEventHandler.jv_instanceArray;
    }
    static set instanceArray(value: StaticArray<DownKeyEventHandlerBase | null> | null) {
        DownKeyEventHandler.js_instanceArray = true;
        DownKeyEventHandler.jv_instanceArray = value;
    }
    playerInputIdFactory: LocalPlayerInputIdFactory | null = null;

    jfields_DownKeyEventHandler(): void {
    this.playerInputIdFactory = LocalPlayerInputIdFactory.getInstance();
    }
    

    static getInstance(): DownKeyEventHandler | null {
        return DownKeyEventHandler.instance;
    }
    

    getInstanceForDevice(deviceId: i32): DownKeyEventHandlerBase | null {
        let playerInputId: i32 = this.playerInputIdFactory!.getPlayerForDevice(deviceId); if (JThrowable.pending !== null) return null;
        return DownKeyEventHandler.instanceArray![playerInputId];
    }
    

    getInstanceForPlayer(playerInputId: i32): DownKeyEventHandlerBase | null {
        return DownKeyEventHandler.instanceArray![playerInputId];
    }
    

    jinit_DownKeyEventHandler_0(): DownKeyEventHandler {
        super.jinit_DownKeyEventHandlerBase_0();
        this.jfields_DownKeyEventHandler();
        return this;
    }
    

    removeAllListeners(): void {
        super.removeAllListeners(); if (JThrowable.pending !== null) return;
        for (let index: i32 = DownKeyEventHandler.instanceArray!.length - 1; index >= 0; index--) {
            DownKeyEventHandler.instanceArray![index]!.removeAllListeners(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    removeListenerSingleThreaded(eventListenerInterface: EventListenerInterface | null): void {
        super.removeListenerSingleThreaded(eventListenerInterface); if (JThrowable.pending !== null) return;
        for (let index: i32 = DownKeyEventHandler.instanceArray!.length - 1; index >= 0; index--) {
            DownKeyEventHandler.instanceArray![index]!.removeListenerSingleThreaded(eventListenerInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    removeListener(eventListenerInterface: EventListenerInterface | null): void {
        super.removeListener(eventListenerInterface); if (JThrowable.pending !== null) return;
        for (let index: i32 = DownKeyEventHandler.instanceArray!.length - 1; index >= 0; index--) {
            DownKeyEventHandler.instanceArray![index]!.removeListener(eventListenerInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

