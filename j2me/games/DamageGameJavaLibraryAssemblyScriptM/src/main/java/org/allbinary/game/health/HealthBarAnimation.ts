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
// import org.allbinary.animation.Animation
// import org.allbinary.game.graphics.hud.BasicHudFactory
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.layer.AllBinaryLayer

@global export class HealthBarAnimation extends Animation {

    jclassName(): string {
        return "org.allbinary.game.health.HealthBarAnimation";
    }
    basicColorFactory: BasicColorFactory | null = null;
    x2: i32 = 0;
    thickness: i32 = 0;
    location: i32 = 0;
    allbinaryLayer: AllBinaryLayer | null = null;

    jfields_HealthBarAnimation(): void {
    this.basicColorFactory = BasicColorFactory.getInstance();
    this.x2 = 0;
    this.thickness = 0;
    
    
    }
    

    jinit_HealthBarAnimation_2(layerInterface: AllBinaryLayer | null, location: i32): HealthBarAnimation {
        super.jinit_Animation_0();
        this.jfields_HealthBarAnimation();
        this.allbinaryLayer = layerInterface;
        this.location = location;
        let basicHudFactory: BasicHudFactory | null = BasicHudFactory.getInstance(); if (JThrowable.pending !== null) return this;
        if (this.location != basicHudFactory!.TOPLEFT && this.location != basicHudFactory!.BOTTOMLEFT) {
            { JThrowable.raise(new JException().jinit_JException_1("Location Not Valid")); return this; }
        } if (JThrowable.pending !== null) return this;
        if (layerInterface!.getWidth() > 40) {
            this.thickness = 3;
        } else if (layerInterface!.getWidth() > 20) {
            this.thickness = 2;
        } else {
            this.thickness = 1;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    onHealthChange(newX2: i32): void {
        this.x2 = newX2;
        let quarter: i32 = (this.allbinaryLayer!.getWidth() >> 2); if (JThrowable.pending !== null) return;
        if (this.x2 > quarter * 3) {
            this.basicColor = this.basicColorFactory!.GREEN;
            this.colorP = this.basicColor!.intValue(); if (JThrowable.pending !== null) return;
        } else if (this.x2 > quarter * 2) {
            this.basicColor = this.basicColorFactory!.YELLOW;
            this.colorP = this.basicColor!.intValue(); if (JThrowable.pending !== null) return;
        } else if (this.x2 > quarter) {
            this.basicColor = this.basicColorFactory!.ORANGE;
            this.colorP = this.basicColor!.intValue(); if (JThrowable.pending !== null) return;
        } else {
            this.basicColor = this.basicColorFactory!.RED;
            this.colorP = this.basicColor!.intValue(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getY(): i32 {
        let basicHudFactory: BasicHudFactory | null = BasicHudFactory.getInstance(); if (JThrowable.pending !== null) return 0;
        if (this.location == basicHudFactory!.TOPLEFT) {
            return this.allbinaryLayer!.getViewPosition()!.getY() - 4;
        } else if (this.location == basicHudFactory!.BOTTOMLEFT) {
            return this.allbinaryLayer!.getViewPosition()!.getY2() + 4;
        } if (JThrowable.pending !== null) return 0;
        return -1;
    }
}

