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
// package org.allbinary.game.score

@global export class NoScoreable extends Scoreable {

    jclassName(): string {
        return "org.allbinary.game.score.NoScoreable";
    }
    @lazy static jv_SINGLETON: NoScoreable | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): NoScoreable | null {
        if (!NoScoreable.js_SINGLETON) {
            NoScoreable.js_SINGLETON = true;
            NoScoreable.jv_SINGLETON = new NoScoreable().jinit_NoScoreable_0();
        }
        return NoScoreable.jv_SINGLETON;
    }
    static set SINGLETON(value: NoScoreable | null) {
        NoScoreable.js_SINGLETON = true;
        NoScoreable.jv_SINGLETON = value;
    }
    

    static getInstance(): NoScoreable | null {
        return NoScoreable.SINGLETON;
    }
    

    jinit_NoScoreable_0(): NoScoreable {
        super.jinit_Scoreable_1(0);
        return this;
    }
    

    addPoints(points: i32): void {
    }
    

    removePoints(points: i32): void {
    }
}

