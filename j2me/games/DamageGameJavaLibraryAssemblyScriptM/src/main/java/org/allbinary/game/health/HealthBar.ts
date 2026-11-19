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
// package org.allbinary.game.health
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.paint.Paintable
// import org.allbinary.layer.AllBinaryLayer

@global export class HealthBar extends Paintable implements HealthListenerInterface {

    jclassName(): string {
        return "org.allbinary.game.health.HealthBar";
    }
    animationInterface: HealthBarAnimation | null = null;
    healthInterface: HealthInterface | null = null;
    allbinaryLayer: AllBinaryLayer | null = null;

    jfields_HealthBar(): void {
    
    
    
    }
    

    jinit_HealthBar_4(layerInterface: AllBinaryLayer | null, healthInterface: Health | null, animationInterface: HealthBarAnimation | null, direction: i32): HealthBar {
        super.jinit_Paintable_0();
        this.jfields_HealthBar();
        this.allbinaryLayer = layerInterface;
        this.animationInterface = animationInterface;
        this.healthInterface = healthInterface;
        this.healthInterface!.addListener(this); if (JThrowable.pending !== null) return this;
        this.onHealthChange(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    onHealthChange(): void {
        this.animationInterface!.onHealthChange(this.healthInterface!.getHealth() * this.allbinaryLayer!.getWidth() / this.healthInterface!.getMaxHealth()); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        this.animationInterface!.paintXY(graphics, 0, 0); if (JThrowable.pending !== null) return;
    }
    

    paintThreed(graphics: Graphics | null): void {
        this.animationInterface!.paintThreedXYZ(graphics, 0, 0, 0); if (JThrowable.pending !== null) return;
    }
}

