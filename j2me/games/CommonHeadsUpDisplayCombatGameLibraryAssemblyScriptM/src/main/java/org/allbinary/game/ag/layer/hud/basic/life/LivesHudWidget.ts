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
// package org.allbinary.game.ag.layer.hud.basic.life
// import javax.microedition.lcdui.Graphics
// import org.allbinary.animation.Animation
// import org.allbinary.game.ag.life.Life
// import org.allbinary.game.graphics.hud.BasicHud
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.displayable.event.DisplayChangeEvent
// import org.allbinary.graphics.paint.PaintableInterface

@global export class LivesHudWidget extends BasicHud implements PaintableInterface {

    jclassName(): string {
        return "org.allbinary.game.ag.layer.hud.basic.life.LivesHudWidget";
    }
    lifeInterface: Life | null = null;
    xArray: StaticArray<i32> | null = null;
    animationInterface: Animation | null = null;

    jfields_LivesHudWidget(): void {
    
    
    
    }
    

    jinit_LivesHudWidget_4(animationInterface: Animation | null, lifeInterface: Life | null, location: i32, direction: i32): LivesHudWidget {
        super.jinit_BasicHud_4(location, direction, 2, BasicColorFactory.getInstance()!.WHITE);
        this.jfields_LivesHudWidget();
        this.lifeInterface = lifeInterface;
        let size: i32 = (<i32>(this.getLifeInterface()!.getMaxlives())); if (JThrowable.pending !== null) return this;
        this.xArray = new StaticArray<i32>(size);
        this.animationInterface = animationInterface;
        this.updateMaxWidth = (<i32>(this.lifeInterface!.getMaxlives())) * 16; if (JThrowable.pending !== null) return this;
        this.updateMaxHeight = 16;
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        super.updateMeasurement(graphics); if (JThrowable.pending !== null) return;
        let maxLives: i32 = (<i32>(this.getLifeInterface()!.getMaxlives())); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < maxLives; index++) {
            this.xArray![index] = this.getX() + (index * 16); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    onDisplayChangeEvent(displayChangeEvent: DisplayChangeEvent | null): void {
        super.onDisplayChangeEvent(displayChangeEvent); if (JThrowable.pending !== null) return;
        this.myFontProcessor = this.updateMyFontProcessor;
    }
    

    setX(x: i32): void {
        super.setX(x); if (JThrowable.pending !== null) return;
        this.myFontProcessor = this.updateMyFontProcessor;
    }
    

    paint(graphics: Graphics | null): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        for (let index: i32 = (<i32>(this.getLifeInterface()!.get())); --index >= 0; ) {
            this.animationInterface!.paintXY(graphics, this.xArray![index], this.getY()); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    paintThreed(graphics: Graphics | null): void {
    }
    

    getLifeInterface(): Life | null {
        return this.lifeInterface;
    }
}

