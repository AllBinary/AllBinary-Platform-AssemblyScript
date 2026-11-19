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
// import org.allbinary.layer.AllBinaryLayer

@global export class HealthBarTwodAnimation extends HealthBarAnimation {

    jclassName(): string {
        return "org.allbinary.game.health.HealthBarTwodAnimation";
    }
    

    jinit_HealthBarTwodAnimation_2(layerInterface: AllBinaryLayer | null, location: i32): HealthBarTwodAnimation {
        super.jinit_HealthBarAnimation_2(layerInterface, location);
        return this;
    }
    

    paintXY(graphics: Graphics | null, x: i32, y: i32): void {
        let ax: i32 = this.allbinaryLayer!.getViewPosition()!.getX(); if (JThrowable.pending !== null) return;
        this.basicSetColorUtil!.setBasicColorP3(graphics, this.basicColor, this.colorP); if (JThrowable.pending !== null) return;
        graphics!.fillRect(ax, this.getY() - 1, this.x2, this.thickness); if (JThrowable.pending !== null) return;
    }
}

