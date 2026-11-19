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
// package org.allbinary.time

@global export class GameTickTimeDelayHelper extends JObject {

    jclassName(): string {
        return "org.allbinary.time.GameTickTimeDelayHelper";
    }
    timeDelta: i64 = 0;
    startTime: i64 = 0;
    lastStartTime: i64 = 0;

    jfields_GameTickTimeDelayHelper(): void {
    this.timeDelta = 0;
    
    
    }
    

    jinit_GameTickTimeDelayHelper_1(startTime: i64): GameTickTimeDelayHelper {
        super.jinit_JObject_0();
        this.jfields_GameTickTimeDelayHelper();
        this.startTime = startTime;
        this.lastStartTime = (<i64>0);
        return this;
    }
    

    setStartTime(): i64 {
        this.startTime = JSystem.currentTimeMillis(); if (JThrowable.pending !== null) return 0;
        return this.startTime;
    }
    

    loop(): void {
        if (this.lastStartTime == JLong.MIN_VALUE) {
            this.timeDelta = (<i64>0);
        } else {
            this.timeDelta = JSystem.currentTimeMillis() - this.lastStartTime; if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getTimeFromStart(): i64 {
        return this.startTime - this.lastStartTime;
    }
}

