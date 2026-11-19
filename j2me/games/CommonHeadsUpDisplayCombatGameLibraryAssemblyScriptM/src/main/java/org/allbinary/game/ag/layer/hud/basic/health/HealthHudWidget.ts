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
// package org.allbinary.game.ag.layer.hud.basic.health
// import javax.microedition.lcdui.Graphics
// import org.allbinary.animation.Animation
// import org.allbinary.game.graphics.hud.BasicHud
// import org.allbinary.game.health.Health
// import org.allbinary.game.health.HealthListenerInterface
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.paint.PaintableInterface
// import org.allbinary.time.GameTickTimeDelayHelper
// import org.allbinary.time.GameTickTimeDelayHelperFactory
// import org.allbinary.time.NoTimeDelayHelper
// import org.allbinary.time.TimeDelayHelper

@global export class HealthHudWidget extends BasicHud implements PaintableInterface, HealthListenerInterface {

    jclassName(): string {
        return "org.allbinary.game.ag.layer.hud.basic.health.HealthHudWidget";
    }
    healthScale: i32 = 0;
    animationInterface: Animation | null = null;
    healthInterface: Health | null = null;
    max: i32 = 0;
    xArray: StaticArray<i32> | null = null;
    gameTickTimeDelayHelper: GameTickTimeDelayHelper | null = null;
    timeDelayHelper: TimeDelayHelper | null = null;
    slowBeatTimeDelayHelper: TimeDelayHelper | null = null;
    mediumBeatTimeDelayHelper: TimeDelayHelper | null = null;
    fastBeatTimeDelayHelper: TimeDelayHelper | null = null;

    jfields_HealthHudWidget(): void {
    
    
    
    this.max = 0;
    
    this.gameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance();
    this.timeDelayHelper = NoTimeDelayHelper.SINGLETON;
    this.slowBeatTimeDelayHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(1280);
    this.mediumBeatTimeDelayHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(640);
    this.fastBeatTimeDelayHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(320);
    }
    

    jinit_HealthHudWidget_4(animationInterface: Animation | null, healthInterface: Health | null, location: i32, direction: i32): HealthHudWidget {
        super.jinit_BasicHud_4(location, direction, 2, BasicColorFactory.getInstance()!.WHITE);
        this.jfields_HealthHudWidget();
        this.animationInterface = animationInterface;
        this.healthInterface = healthInterface;
        this.healthInterface!.addListener(this); if (JThrowable.pending !== null) return this;
        this.healthScale = (this.healthInterface!.getMaxHealth() / 6) + 1; if (JThrowable.pending !== null) return this;
        this.onHealthChange(); if (JThrowable.pending !== null) return this;
        this.updateMaxWidth = healthInterface!.getMaxHealth() * 16; if (JThrowable.pending !== null) return this;
        this.updateMaxHeight = 16;
        this.xArray = new StaticArray<i32>(30);
        this.update(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    update(): void {
        if (this.xArray != null) {
            for (let index: i32 = 0; index < this.xArray!.length; index++) {
                this.xArray![index] = this.getX() + (index * 16); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setX(x: i32): void {
        super.setX(x); if (JThrowable.pending !== null) return;
        this.update(); if (JThrowable.pending !== null) return;
    }
    

    onHealthChange(): void {
        this.max = (this.healthInterface!.getHealth() / this.healthScale); if (JThrowable.pending !== null) return;
        this.timeDelayHelper = NoTimeDelayHelper.SINGLETON;
        if (this.max <= 1 && this.healthInterface!.isAlive()) {
            this.max = 1;
            if (this.healthScale - this.healthInterface!.getHealth() > (this.healthScale * 2) / 3) {
                this.timeDelayHelper = this.slowBeatTimeDelayHelper;
            } else if (this.healthScale - this.healthInterface!.getHealth() > this.healthScale / 3) {
                this.timeDelayHelper = this.mediumBeatTimeDelayHelper;
            } else {
                this.timeDelayHelper = this.fastBeatTimeDelayHelper;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < this.max; index++) {
            if (this.timeDelayHelper!.isTime(this.gameTickTimeDelayHelper!.startTime)) {
                this.animationInterface!.paintXY(graphics, this.xArray![index], this.getY()); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    paintThreed(graphics: Graphics | null): void {
    }
}

