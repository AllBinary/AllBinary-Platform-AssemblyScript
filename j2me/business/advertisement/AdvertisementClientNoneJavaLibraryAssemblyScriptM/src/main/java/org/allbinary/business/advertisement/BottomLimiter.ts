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
// package org.allbinary.business.advertisement
// import org.allbinary.game.GameAdState
// import org.allbinary.graphics.displayable.DisplayInfoSingleton

@global export class BottomLimiter extends JObject {

    jclassName(): string {
        return "org.allbinary.business.advertisement.BottomLimiter";
    }
    @lazy static jv_instance: BottomLimiter | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): BottomLimiter | null {
        if (!BottomLimiter.js_instance) {
            BottomLimiter.js_instance = true;
            BottomLimiter.jv_instance = new BottomLimiter().jinit_BottomLimiter_0();
        }
        return BottomLimiter.jv_instance;
    }
    static set instance(value: BottomLimiter | null) {
        BottomLimiter.js_instance = true;
        BottomLimiter.jv_instance = value;
    }
    bottom: i32 = 0;
    deltaY: i32 = 0;
    lower: i32 = 0;
    higher: i32 = 0;

    jfields_BottomLimiter(): void {
    this.bottom = 0;
    this.deltaY = 0;
    this.lower = 0;
    this.higher = 0;
    }
    

    static getInstance(): BottomLimiter | null {
        return BottomLimiter.instance;
    }
    

    jinit_BottomLimiter_0(): BottomLimiter {
        super.jinit_JObject_0();
        this.jfields_BottomLimiter();
        return this;
    }
    

    init(lower: i32, higher: i32): void {
        this.lower = lower;
        this.higher = higher;
    }
    

    update(): void {
        let displayInfo: DisplayInfoSingleton | null = DisplayInfoSingleton.getInstance(); if (JThrowable.pending !== null) return;
        let gameAdState: GameAdState | null = GameAdStateFactory.getInstance()!.getCurrentInstance(); if (JThrowable.pending !== null) return;
        if (gameAdState!.isShowingAt()) {
            this.deltaY = this.higher;
        } else {
            this.deltaY = this.lower;
        } if (JThrowable.pending !== null) return;
        this.bottom = displayInfo!.getLastHeight() - this.deltaY; if (JThrowable.pending !== null) return;
    }
    

    getDeltaY(): i32 {
        return this.deltaY;
    }
    

    getBottom(): i32 {
        return this.bottom;
    }
}

