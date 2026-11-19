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
// package org.allbinary.game.ag.layer.hud.basic.time
// import org.allbinary.logic.math.PrimitiveLongSingleton
// import org.allbinary.logic.math.PrimitiveLongUtil
// import org.allbinary.time.GameTickTimeDelayHelper
// import org.allbinary.time.GameTickTimeDelayHelperFactory

@global export class HudTimer extends JObject {

    jclassName(): string {
        return "org.allbinary.game.ag.layer.hud.basic.time.HudTimer";
    }
    startTime: i64 = 0;
    hundredthTime: i64 = 0;
    maxTime: i64 = 0;
    modifier: i64 = 0;
    hundrethsString: StaticArray<u16> | null = null;
    totalDigits: i32 = 0;
    primitiveLongUtil: PrimitiveLongUtil | null = null;
    MAX: StaticArray<u16> | null = null;
    gameTickTimeDelayHelper: GameTickTimeDelayHelper | null = null;

    jfields_HudTimer(): void {
    this.startTime = (<i64>(-1));
    this.hundredthTime = 0;
    
    this.modifier = 0;
    this.hundrethsString = PrimitiveLongSingleton.getInstance()!.ZERO;
    this.totalDigits = 1;
    
    this.MAX = StaticArray.fromArray<u16>([(<u16>0x4C), (<u16>0x4F), (<u16>0x4C)]);
    this.gameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance();
    }
    

    jinit_HudTimer_1(maxTime: i32): HudTimer {
        super.jinit_JObject_0();
        this.jfields_HudTimer();
        this.primitiveLongUtil = PrimitiveLongUtil.createPowerOfTen(maxTime); if (JThrowable.pending !== null) return this;
        this.maxTime = (<i64>(maxTime));
        return this;
    }
    

    start(): void {
        this.hundredthTime = (<i64>0);
        this.startTime = this.gameTickTimeDelayHelper!.startTime;
    }
    

    get(): i64 {
        return this.hundredthTime;
    }
    

    update(): void {
        let lastLowerTime: i64 = this.hundredthTime;
        let currentTime: i64 = ((this.modifier + this.gameTickTimeDelayHelper!.startTime) - this.startTime);
        if (currentTime < (<i64>0)) {
            currentTime = (<i64>0);
        }
        this.hundredthTime = currentTime / (<i64>100);
        if (this.hundredthTime >= this.maxTime) {
            if (this.startTime > (<i64>0)) {
                this.hundrethsString = this.MAX;
            }
        } else if (lastLowerTime != this.hundredthTime) {
            this.hundrethsString = this.primitiveLongUtil!.getCharArray((<i32>(this.hundredthTime))); if (JThrowable.pending !== null) return;
            this.totalDigits = this.primitiveLongUtil!.getCurrentTotalDigits(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    reduce(value: i32): void {
        this.modifier -= (<i64>(value));
    }
    

    add(value: i32): void {
        this.modifier += (<i64>(value));
    }
    

    getTimeChars(): StaticArray<u16> | null {
        return this.hundrethsString;
    }
    

    getCurrentTotalDigits(): i32 {
        return this.totalDigits;
    }
}

