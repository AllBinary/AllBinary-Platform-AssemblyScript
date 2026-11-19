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
// package org.allbinary.game.displayable.canvas
// import org.allbinary.graphics.displayable.DisplayInfoSingleton

@global export class GameRunnable extends JObject implements JRunnable {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.GameRunnable";
    }
    WAIT: i32 = 0;
    FAST: i32 = 0;
    waitInMillis: i64 = 0;

    jfields_GameRunnable(): void {
    this.WAIT = 240;
    this.FAST = 60;
    this.waitInMillis = (<i64>(this.WAIT));
    }
    

    jinit_GameRunnable_0(): GameRunnable {
        super.jinit_JObject_0();
        this.jfields_GameRunnable();
        return this;
    }
    

    run(): void {
        DisplayInfoSingleton.getInstance()!.process(); if (JThrowable.pending !== null) return;
    }
    

    processLoopSleep(): void {
        JThread.sleep(this.waitInMillis); if (JThrowable.pending !== null) return;
    }
}

