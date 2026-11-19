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
// package org.allbinary.graphics

@global export class Line extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.Line";
    }
    p1: GPoint | null = null;
    p2: GPoint | null = null;
    deltaX: f64 = 0.0;
    deltaY: f64 = 0.0;

    jfields_Line(): void {
    
    
    this.deltaX = 0.0;
    this.deltaY = 0.0;
    }
    

    jinit_Line_2(p1: GPoint | null, p2: GPoint | null): Line {
        super.jinit_JObject_0();
        this.jfields_Line();
        this.p1 = PointFactory.getInstance()!.ZERO_ZERO; if (JThrowable.pending !== null) return this;
        this.p2 = this.p1;
        this.setP1(p1); if (JThrowable.pending !== null) return this;
        this.setP2(p2); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getGradient(): f64 {
        return this.getDeltaY() / this.getDeltaX();
    }
    

    update(): void {
        this.deltaX = (<f64>(this.getP1()!.getX())) - (<f64>(this.getP2()!.getX())); if (JThrowable.pending !== null) return;
        this.deltaY = (<f64>(this.getP1()!.getY())) - (<f64>(this.getP2()!.getY())); if (JThrowable.pending !== null) return;
    }
    

    getDeltaX(): f64 {
        return this.deltaX;
    }
    

    getDeltaY(): f64 {
        return this.deltaY;
    }
    

    getP1(): GPoint | null {
        return this.p1;
    }
    

    getP2(): GPoint | null {
        return this.p2;
    }
    

    setP1(p1: GPoint | null): void {
        this.p1 = p1;
        this.update(); if (JThrowable.pending !== null) return;
    }
    

    setP2(p2: GPoint | null): void {
        this.p2 = p2;
        this.update(); if (JThrowable.pending !== null) return;
    }
}

