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
// package org.allbinary.game.ag.life
// import javax.microedition.lcdui.Graphics
// import org.allbinary.game.health.Health
// import org.allbinary.game.health.HealthBarAnimation
// import org.allbinary.game.health.HealthBarTwodAnimation
// import org.allbinary.game.health.HealthInterface
// import org.allbinary.game.health.HealthListenerInterface
// import org.allbinary.graphics.paint.Paintable
// import org.allbinary.layer.AllBinaryLayer

@global export class HealthIncludingLifeBar extends Paintable implements HealthListenerInterface {

    jclassName(): string {
        return "org.allbinary.game.ag.life.HealthIncludingLifeBar";
    }
    animationInterface: HealthBarAnimation | null = null;
    life: Life | null = null;
    healthInterface: HealthInterface | null = null;
    allbinaryLayer: AllBinaryLayer | null = null;

    jfields_HealthIncludingLifeBar(): void {
    
    
    
    
    }
    

    static createHealthIncludingLifeBar(layerInterface: AllBinaryLayer | null, life: Life | null, healthInterface: Health | null, location: i32, direction: i32): HealthIncludingLifeBar | null {
        return new HealthIncludingLifeBar().jinit_HealthIncludingLifeBar_5(layerInterface, life, healthInterface, new HealthBarTwodAnimation().jinit_HealthBarTwodAnimation_2(layerInterface, location), direction);
    }
    

    jinit_HealthIncludingLifeBar_5(layerInterface: AllBinaryLayer | null, life: Life | null, healthInterface: Health | null, animationInterface: HealthBarAnimation | null, direction: i32): HealthIncludingLifeBar {
        super.jinit_Paintable_0();
        this.jfields_HealthIncludingLifeBar();
        this.allbinaryLayer = layerInterface;
        this.animationInterface = animationInterface;
        this.life = life;
        this.healthInterface = healthInterface;
        this.healthInterface!.addListener(this); if (JThrowable.pending !== null) return this;
        this.onHealthChange(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    onHealthChange(): void {
        this.animationInterface!.onHealthChange(((this.healthInterface!.getHealth() + (this.healthInterface!.getMaxHealth() * (<i32>(this.life!.get())))) * this.allbinaryLayer!.getWidth()) / (this.healthInterface!.getMaxHealth() + (this.healthInterface!.getMaxHealth() * (<i32>(this.life!.getStartLives()))))); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        this.animationInterface!.paintXY(graphics, 0, 0); if (JThrowable.pending !== null) return;
    }
    

    paintThreed(graphics: Graphics | null): void {
        this.animationInterface!.paintThreedXYZ(graphics, 0, 0, 0); if (JThrowable.pending !== null) return;
    }
}

