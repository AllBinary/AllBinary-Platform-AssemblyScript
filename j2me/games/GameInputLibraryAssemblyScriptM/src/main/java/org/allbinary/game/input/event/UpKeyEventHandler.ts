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

@global export class UpKeyEventHandler extends UpKeyEventHandlerBase {

    jclassName(): string {
        return "org.allbinary.game.input.event.UpKeyEventHandler";
    }
    @lazy static jv_instance: UpKeyEventHandler | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): UpKeyEventHandler | null {
        if (!UpKeyEventHandler.js_instance) {
            UpKeyEventHandler.js_instance = true;
            UpKeyEventHandler.jv_instance = new UpKeyEventHandler().jinit_UpKeyEventHandler_0();
        }
        return UpKeyEventHandler.jv_instance;
    }
    static set instance(value: UpKeyEventHandler | null) {
        UpKeyEventHandler.js_instance = true;
        UpKeyEventHandler.jv_instance = value;
    }
    @lazy static jv_instanceArray: StaticArray<UpKeyEventHandlerBase | null> | null = null;
    @lazy static js_instanceArray: bool = false;
    static get instanceArray(): StaticArray<UpKeyEventHandlerBase | null> | null {
        if (!UpKeyEventHandler.js_instanceArray) {
            UpKeyEventHandler.js_instanceArray = true;
            UpKeyEventHandler.jv_instanceArray = StaticArray.fromArray<UpKeyEventHandlerBase | null>([new UpKeyEventHandlerBase().jinit_UpKeyEventHandlerBase_0(), new UpKeyEventHandlerBase().jinit_UpKeyEventHandlerBase_0(), new UpKeyEventHandlerBase().jinit_UpKeyEventHandlerBase_0(), new UpKeyEventHandlerBase().jinit_UpKeyEventHandlerBase_0(), new UpKeyEventHandlerBase().jinit_UpKeyEventHandlerBase_0(), new UpKeyEventHandlerBase().jinit_UpKeyEventHandlerBase_0()]);
        }
        return UpKeyEventHandler.jv_instanceArray;
    }
    static set instanceArray(value: StaticArray<UpKeyEventHandlerBase | null> | null) {
        UpKeyEventHandler.js_instanceArray = true;
        UpKeyEventHandler.jv_instanceArray = value;
    }
    playerInputIdFactory: LocalPlayerInputIdFactory | null = null;

    jfields_UpKeyEventHandler(): void {
    this.playerInputIdFactory = LocalPlayerInputIdFactory.getInstance();
    }
    

    static getInstance(): UpKeyEventHandler | null {
        return UpKeyEventHandler.instance;
    }
    

    getInstanceForDevice(deviceId: i32): UpKeyEventHandlerBase | null {
        let playerInputId: i32 = this.playerInputIdFactory!.getPlayerForDevice(deviceId); if (JThrowable.pending !== null) return null;
        return UpKeyEventHandler.instanceArray![playerInputId];
    }
    

    getInstanceForPlayer(playerInputId: i32): UpKeyEventHandlerBase | null {
        return UpKeyEventHandler.instanceArray![playerInputId];
    }
    

    jinit_UpKeyEventHandler_0(): UpKeyEventHandler {
        super.jinit_UpKeyEventHandlerBase_0();
        this.jfields_UpKeyEventHandler();
        return this;
    }
    

    removeAllListeners(): void {
        super.removeAllListeners(); if (JThrowable.pending !== null) return;
        for (let index: i32 = UpKeyEventHandler.instanceArray!.length - 1; index >= 0; index--) {
            UpKeyEventHandler.instanceArray![index]!.removeAllListeners(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    removeListenerSingleThreaded(eventListenerInterface: EventListenerInterface | null): void {
        super.removeListenerSingleThreaded(eventListenerInterface); if (JThrowable.pending !== null) return;
        for (let index: i32 = UpKeyEventHandler.instanceArray!.length - 1; index >= 0; index--) {
            UpKeyEventHandler.instanceArray![index]!.removeListenerSingleThreaded(eventListenerInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    removeListener(eventListenerInterface: EventListenerInterface | null): void {
        super.removeListener(eventListenerInterface); if (JThrowable.pending !== null) return;
        for (let index: i32 = UpKeyEventHandler.instanceArray!.length - 1; index >= 0; index--) {
            UpKeyEventHandler.instanceArray![index]!.removeListener(eventListenerInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

