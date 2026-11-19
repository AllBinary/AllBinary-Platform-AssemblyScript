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
// package org.allbinary.game.displayable
// import org.allbinary.graphics.displayable.event.DisplayChangeEventHandler
// import org.allbinary.graphics.displayable.event.DisplayChangeEventListener
// import org.allbinary.logic.util.event.handler.BasicEventHandler
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class GameLevelDisplayChangeEventListenersFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.displayable.GameLevelDisplayChangeEventListenersFactory";
    }
    @lazy static jv_instance: GameLevelDisplayChangeEventListenersFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GameLevelDisplayChangeEventListenersFactory | null {
        if (!GameLevelDisplayChangeEventListenersFactory.js_instance) {
            GameLevelDisplayChangeEventListenersFactory.js_instance = true;
            GameLevelDisplayChangeEventListenersFactory.jv_instance = new GameLevelDisplayChangeEventListenersFactory().jinit_GameLevelDisplayChangeEventListenersFactory_0();
        }
        return GameLevelDisplayChangeEventListenersFactory.jv_instance;
    }
    static set instance(value: GameLevelDisplayChangeEventListenersFactory | null) {
        GameLevelDisplayChangeEventListenersFactory.js_instance = true;
        GameLevelDisplayChangeEventListenersFactory.jv_instance = value;
    }
    list: BasicArrayList | null = null;

    jfields_GameLevelDisplayChangeEventListenersFactory(): void {
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    }

    jinit_GameLevelDisplayChangeEventListenersFactory_0(): GameLevelDisplayChangeEventListenersFactory {
        super.jinit_JObject_0();
        this.jfields_GameLevelDisplayChangeEventListenersFactory();
        return this;
    }
    

    static getInstance(): GameLevelDisplayChangeEventListenersFactory | null {
        return GameLevelDisplayChangeEventListenersFactory.instance;
    }
    

    add(displayChangeEventListener: DisplayChangeEventListener | null): void {
        this.list!.add(displayChangeEventListener); if (JThrowable.pending !== null) return;
        DisplayChangeEventHandler.getInstance()!.addListenerInterface(displayChangeEventListener); if (JThrowable.pending !== null) return;
    }
    

    clear(): void {
        let displayChangeEventHandler: BasicEventHandler | null = DisplayChangeEventHandler.getInstance(); if (JThrowable.pending !== null) return;
        let displayChangeEventListener: DisplayChangeEventListener | null = null;
        for (let index: i32 = this.list!.size(); --index >= 0; ) {
            displayChangeEventListener = changetype<DisplayChangeEventListener | null>(this.list!.objectArray![index]);
            displayChangeEventHandler!.removeListener(displayChangeEventListener); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.list!.clear(); if (JThrowable.pending !== null) return;
    }
}

