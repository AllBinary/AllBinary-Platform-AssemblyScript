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
// package org.allbinary.game.ag.ai.scroller
// import javax.microedition.lcdui.Canvas
// import org.allbinary.game.ai.BasicAI
// import org.allbinary.game.input.GameInput
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.time.GameTickTimeDelayHelperFactory
// import org.allbinary.time.TimeDelayHelper

@global export class TimedFireAI extends BasicAI {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.scroller.TimedFireAI";
    }
    @lazy static jv_TIME: JInteger | null = null;
    @lazy static js_TIME: bool = false;
    static get TIME(): JInteger | null {
        if (!TimedFireAI.js_TIME) {
            TimedFireAI.js_TIME = true;
            TimedFireAI.jv_TIME = SmallIntegerSingletonFactory.getInstance()!.getAt(1);
        }
        return TimedFireAI.jv_TIME;
    }
    static set TIME(value: JInteger | null) {
        TimedFireAI.js_TIME = true;
        TimedFireAI.jv_TIME = value;
    }
    maxFireDelayTimeHelper: TimeDelayHelper | null = null;
    delay: i32 = 0;

    jfields_TimedFireAI(): void {
    this.maxFireDelayTimeHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(0);
    
    }
    

    jinit_TimedFireAI_3(delay: i32, ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): TimedFireAI {
        super.jinit_BasicAI_2(ownerLayerInterface, gameInput);
        this.jfields_TimedFireAI();
        this.delay = delay;
        return this;
    }
    

    processAI(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        let timeFiredInterface: TimeFiredInterface | null = changetype<TimeFiredInterface | null>(this.getOwnerLayerInterface()); if (JThrowable.pending !== null) return;
        if (this.maxFireDelayTimeHelper!.isTime(GameTickTimeDelayHelperFactory.getInstance()!.startTime) && timeFiredInterface!.getLastFireTime() + this.maxFireDelayTimeHelper!.delay < this.maxFireDelayTimeHelper!.getStartTime()) {
            super.processKeyAI(Canvas.KEY_NUM1); if (JThrowable.pending !== null) return;
            this.maxFireDelayTimeHelper!.delay = this.delay;
        } if (JThrowable.pending !== null) return;
    }
}

