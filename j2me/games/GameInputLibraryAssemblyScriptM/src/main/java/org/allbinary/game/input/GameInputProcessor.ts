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
// package org.allbinary.game.input
// import org.allbinary.game.input.event.GameKeyEvent
// import org.allbinary.layer.AllBinaryLayerManager

@global export class GameInputProcessor extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.GameInputProcessor";
    }
    @lazy static jv_instance: GameInputProcessor | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GameInputProcessor | null {
        if (!GameInputProcessor.js_instance) {
            GameInputProcessor.js_instance = true;
            GameInputProcessor.jv_instance = new GameInputProcessor().jinit_GameInputProcessor_0();
        }
        return GameInputProcessor.jv_instance;
    }
    static set instance(value: GameInputProcessor | null) {
        GameInputProcessor.js_instance = true;
        GameInputProcessor.jv_instance = value;
    }
    

    static getInstance(): GameInputProcessor | null {
        return GameInputProcessor.instance;
    }
    

    jinit_GameInputProcessor_0(): GameInputProcessor {
        super.jinit_JObject_0();
        return this;
    }
    

    processEvent(allbinaryLayerManager: AllBinaryLayerManager | null, gameKeyEvent: GameKeyEvent | null): void {
    }
    

    processReleasedEvent(allbinaryLayerManager: AllBinaryLayerManager | null, gameKeyEvent: GameKeyEvent | null): void {
    }
    

    processAnalog(allbinaryLayerManager: AllBinaryLayerManager | null, gameKeyEvent: GameKeyEvent | null, analogValue: i32): void {
    }
    

    process(allbinaryLayerManager: AllBinaryLayerManager | null, keyAsInteger: JInteger | null): void {
    }
    

    processReleased(allbinaryLayerManager: AllBinaryLayerManager | null, keyAsInteger: JInteger | null): void {
    }
}

