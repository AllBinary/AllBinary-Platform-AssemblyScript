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

@global export class UpGameKeyEventHandler extends UpGameKeyEventHandlerBase {

    jclassName(): string {
        return "org.allbinary.game.input.event.UpGameKeyEventHandler";
    }
    @lazy static jv_instance: UpGameKeyEventHandler | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): UpGameKeyEventHandler | null {
        if (!UpGameKeyEventHandler.js_instance) {
            UpGameKeyEventHandler.js_instance = true;
            UpGameKeyEventHandler.jv_instance = new UpGameKeyEventHandler().jinit_UpGameKeyEventHandler_0();
        }
        return UpGameKeyEventHandler.jv_instance;
    }
    static set instance(value: UpGameKeyEventHandler | null) {
        UpGameKeyEventHandler.js_instance = true;
        UpGameKeyEventHandler.jv_instance = value;
    }
    @lazy static jv_instanceArray: StaticArray<UpGameKeyEventHandlerBase | null> | null = null;
    @lazy static js_instanceArray: bool = false;
    static get instanceArray(): StaticArray<UpGameKeyEventHandlerBase | null> | null {
        if (!UpGameKeyEventHandler.js_instanceArray) {
            UpGameKeyEventHandler.js_instanceArray = true;
            UpGameKeyEventHandler.jv_instanceArray = StaticArray.fromArray<UpGameKeyEventHandlerBase | null>([new UpGameKeyEventHandlerBase().jinit_UpGameKeyEventHandlerBase_0(), new UpGameKeyEventHandlerBase().jinit_UpGameKeyEventHandlerBase_0(), new UpGameKeyEventHandlerBase().jinit_UpGameKeyEventHandlerBase_0(), new UpGameKeyEventHandlerBase().jinit_UpGameKeyEventHandlerBase_0(), new UpGameKeyEventHandlerBase().jinit_UpGameKeyEventHandlerBase_0(), new UpGameKeyEventHandlerBase().jinit_UpGameKeyEventHandlerBase_0()]);
        }
        return UpGameKeyEventHandler.jv_instanceArray;
    }
    static set instanceArray(value: StaticArray<UpGameKeyEventHandlerBase | null> | null) {
        UpGameKeyEventHandler.js_instanceArray = true;
        UpGameKeyEventHandler.jv_instanceArray = value;
    }
    playerInputIdFactory: LocalPlayerInputIdFactory | null = null;

    jfields_UpGameKeyEventHandler(): void {
    this.playerInputIdFactory = LocalPlayerInputIdFactory.getInstance();
    }
    

    static getInstance(): UpGameKeyEventHandler | null {
        return UpGameKeyEventHandler.instance;
    }
    

    getInstanceForDevice(deviceId: i32): UpGameKeyEventHandlerBase | null {
        let playerInputId: i32 = this.playerInputIdFactory!.getPlayerForDevice(deviceId); if (JThrowable.pending !== null) return null;
        return UpGameKeyEventHandler.instanceArray![playerInputId];
    }
    

    getInstanceForPlayer(playerInputId: i32): UpGameKeyEventHandlerBase | null {
        return UpGameKeyEventHandler.instanceArray![playerInputId];
    }
    

    jinit_UpGameKeyEventHandler_0(): UpGameKeyEventHandler {
        super.jinit_UpGameKeyEventHandlerBase_0();
        this.jfields_UpGameKeyEventHandler();
        return this;
    }
    

    removeAllListeners(): void {
        super.removeAllListeners(); if (JThrowable.pending !== null) return;
        for (let index: i32 = UpGameKeyEventHandler.instanceArray!.length - 1; index >= 0; index--) {
            UpGameKeyEventHandler.instanceArray![index]!.removeAllListeners(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    removeListenerSingleThreaded(eventListenerInterface: EventListenerInterface | null): void {
        super.removeListenerSingleThreaded(eventListenerInterface); if (JThrowable.pending !== null) return;
        for (let index: i32 = UpGameKeyEventHandler.instanceArray!.length - 1; index >= 0; index--) {
            UpGameKeyEventHandler.instanceArray![index]!.removeListenerSingleThreaded(eventListenerInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    removeListener(eventListenerInterface: EventListenerInterface | null): void {
        super.removeListener(eventListenerInterface); if (JThrowable.pending !== null) return;
        for (let index: i32 = UpGameKeyEventHandler.instanceArray!.length - 1; index >= 0; index--) {
            UpGameKeyEventHandler.instanceArray![index]!.removeListener(eventListenerInterface); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

