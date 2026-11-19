/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// package org.allbinary.game.displayable.canvas

@global export class NullWaitGameRunnable extends GameRunnable {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.NullWaitGameRunnable";
    }
    @lazy static jv_instance: GameRunnable | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GameRunnable | null {
        if (!NullWaitGameRunnable.js_instance) {
            NullWaitGameRunnable.js_instance = true;
            NullWaitGameRunnable.jv_instance = new NullWaitGameRunnable().jinit_NullWaitGameRunnable_0();
        }
        return NullWaitGameRunnable.jv_instance;
    }
    static set instance(value: GameRunnable | null) {
        NullWaitGameRunnable.js_instance = true;
        NullWaitGameRunnable.jv_instance = value;
    }

    jinit_NullWaitGameRunnable_0(): NullWaitGameRunnable {
        super.jinit_GameRunnable_0();
        return this;
    }
    

    static getInstance(): GameRunnable | null {
        return NullWaitGameRunnable.instance;
    }
}

