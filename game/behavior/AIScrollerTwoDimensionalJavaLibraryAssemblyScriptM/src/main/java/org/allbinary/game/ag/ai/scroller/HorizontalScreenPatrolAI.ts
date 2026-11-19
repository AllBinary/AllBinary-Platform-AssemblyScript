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
// import org.allbinary.game.layer.AllBinaryGameLayerManager
// import org.allbinary.game.rand.MyRandomFactory
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.AllBinaryLayerManager
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.media.audio.PlayerQueue
// import org.allbinary.media.audio.SecondaryPlayerQueueFactory
// import org.allbinary.media.audio.Sound
// import org.allbinary.time.TimeDelayHelper
// import org.allbinary.util.ABHashtable

@global export class HorizontalScreenPatrolAI extends BasicAI {

    jclassName(): string {
        return "org.allbinary.game.ag.ai.scroller.HorizontalScreenPatrolAI";
    }
    @lazy static jv_SOUND: JInteger | null = null;
    @lazy static js_SOUND: bool = false;
    static get SOUND(): JInteger | null {
        if (!HorizontalScreenPatrolAI.js_SOUND) {
            HorizontalScreenPatrolAI.js_SOUND = true;
            HorizontalScreenPatrolAI.jv_SOUND = SmallIntegerSingletonFactory.getInstance()!.getAt(433);
        }
        return HorizontalScreenPatrolAI.jv_SOUND;
    }
    static set SOUND(value: JInteger | null) {
        HorizontalScreenPatrolAI.js_SOUND = true;
        HorizontalScreenPatrolAI.jv_SOUND = value;
    }
    keyDirection: i32 = 0;
    displayInfoSingleton: DisplayInfoSingleton | null = null;
    firingX: i32 = 0;
    firedIndex: i32 = 0;
    MAX_FIRE: i32 = 0;
    timeDelayHelper: TimeDelayHelper | null = null;
    secondaryPlayerQueue: PlayerQueue | null = null;
    sound: Sound | null = null;

    jfields_HorizontalScreenPatrolAI(): void {
    this.keyDirection = Canvas.LEFT;
    this.displayInfoSingleton = DisplayInfoSingleton.getInstance();
    this.firingX = this.displayInfoSingleton!.getLastHalfWidth();
    this.firedIndex = 0;
    this.MAX_FIRE = 28;
    this.timeDelayHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(240);
    this.secondaryPlayerQueue = SecondaryPlayerQueueFactory.getInstance();
    
    }
    

    jinit_HorizontalScreenPatrolAI_3(hashtable: ABHashtable | null, ownerLayerInterface: AllBinaryLayer | null, gameInput: GameInput | null): HorizontalScreenPatrolAI {
        super.jinit_BasicAI_2(ownerLayerInterface, gameInput);
        this.jfields_HorizontalScreenPatrolAI();
        this.sound = changetype<Sound | null>(hashtable!.get(HorizontalScreenPatrolAI.SOUND)); if (JThrowable.pending !== null) return this;
        if (this.sound == null) {
            { JThrowable.raise(new JException().jinit_JException_1("No Sound Provided!!")); return this; }
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    processAI(allBinaryLayerManager: AllBinaryLayerManager | null): void {
        super.processKeyAI(this.keyDirection); if (JThrowable.pending !== null) return;
        if (this.timeDelayHelper!.isTimeTNT()) {
            let layerInterface: AllBinaryLayer | null = this.getOwnerLayerInterface(); if (JThrowable.pending !== null) return;
            let currentOwnerLayerX: i32 = layerInterface!.getXP(); if (JThrowable.pending !== null) return;
            if (currentOwnerLayerX < -layerInterface!.getWidth()) {
                let y: i32 = MyRandomFactory.getInstance()!.getAbsoluteNextIntAllowZero(50); if (JThrowable.pending !== null) return;
                layerInterface!.setPosition(this.displayInfoSingleton!.getLastWidth() + layerInterface!.getWidth() + 50, y, layerInterface!.getZP()); if (JThrowable.pending !== null) return;
                this.firedIndex = 0;
                this.firingX = this.displayInfoSingleton!.getLastHalfWidth() + MyRandomFactory.getInstance()!.getNextInt(this.displayInfoSingleton!.getLastHalfWidth()); if (JThrowable.pending !== null) return;
                this.secondaryPlayerQueue!.add(this.sound); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            if (currentOwnerLayerX < this.firingX && currentOwnerLayerX > -layerInterface!.getWidth()) {
                super.processKeyAI(Canvas.KEY_NUM1); if (JThrowable.pending !== null) return;
                let gameLayerManager: AllBinaryGameLayerManager | null = changetype<AllBinaryGameLayerManager | null>(allBinaryLayerManager);
                let FIRE: i32 = (gameLayerManager!.getGameInfo()!.getCurrentLevel() + 12) >> 2; if (JThrowable.pending !== null) return;
                if (FIRE > this.MAX_FIRE) {
                    FIRE = this.MAX_FIRE;
                }
                if (this.firedIndex > FIRE) {
                    this.firedIndex = 0;
                    this.firingX = JInteger.MIN_VALUE;
                }
                this.firedIndex++;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    nextDirection(): void {
    }
}

