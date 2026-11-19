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
// import org.allbinary.util.BasicArrayListD

@global export class NoPlayerGameInput extends PlayerGameInput {

    jclassName(): string {
        return "org.allbinary.game.input.NoPlayerGameInput";
    }
    @lazy static jv_SINGLETON: NoPlayerGameInput | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): NoPlayerGameInput | null {
        if (!NoPlayerGameInput.js_SINGLETON) {
            NoPlayerGameInput.js_SINGLETON = true;
            NoPlayerGameInput.jv_SINGLETON = new NoPlayerGameInput().jinit_NoPlayerGameInput_0();
        }
        return NoPlayerGameInput.jv_SINGLETON;
    }
    static set SINGLETON(value: NoPlayerGameInput | null) {
        NoPlayerGameInput.js_SINGLETON = true;
        NoPlayerGameInput.jv_SINGLETON = value;
    }
    

    static getInstance(): NoPlayerGameInput | null {
        return NoPlayerGameInput.SINGLETON;
    }
    

    jinit_NoPlayerGameInput_0(): NoPlayerGameInput {
        super.jinit_PlayerGameInput_3(new BasicArrayListD().jinit_BasicArrayListD_0(), new BasicArrayListD().jinit_BasicArrayListD_0(), -1);
        return this;
    }
    

    onDownGameKeyEvent(gameKeyEvent: GameKeyEvent | null): void {
    }
    

    onUpGameKeyEvent(gameKeyEvent: GameKeyEvent | null): void {
    }
}

