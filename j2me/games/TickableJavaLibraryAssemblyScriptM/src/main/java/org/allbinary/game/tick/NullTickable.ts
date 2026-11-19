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
// package org.allbinary.game.tick
// import org.allbinary.layer.AllBinaryLayerManager

@global export class NullTickable extends JObject implements TickableInterface {

    jclassName(): string {
        return "org.allbinary.game.tick.NullTickable";
    }
    @lazy static jv_SINGLETON: NullTickable | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): NullTickable | null {
        if (!NullTickable.js_SINGLETON) {
            NullTickable.js_SINGLETON = true;
            NullTickable.jv_SINGLETON = new NullTickable().jinit_NullTickable_0();
        }
        return NullTickable.jv_SINGLETON;
    }
    static set SINGLETON(value: NullTickable | null) {
        NullTickable.js_SINGLETON = true;
        NullTickable.jv_SINGLETON = value;
    }
    NAME: string | null = null;

    jfields_NullTickable(): void {
    this.NAME = "NulLTickable";
    }

    jinit_NullTickable_0(): NullTickable {
        super.jinit_JObject_0();
        this.jfields_NullTickable();
        return this;
    }
    

    static getInstance(): NullTickable | null {
        return NullTickable.SINGLETON;
    }
    

    processTick(allBinaryLayerManager: AllBinaryLayerManager | null): void {
    }
    

    getName(): string | null {
        return this.NAME;
    }
}

