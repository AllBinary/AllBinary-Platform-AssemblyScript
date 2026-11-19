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
// package org.allbinary.game.paint
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.paint.NullPaintable
// import org.allbinary.graphics.paint.Paintable
// import org.allbinary.graphics.paint.StatePaintable

@global export class BasicGameDemoPaintable extends StatePaintable {

    jclassName(): string {
        return "org.allbinary.game.paint.BasicGameDemoPaintable";
    }
    mainDemoStatePaintable: Paintable | null = null;
    ownershipPaintable: Paintable | null = null;
    helpPaintableInterface: Paintable | null = null;
    currentStatePaintable: Paintable | null = null;

    jfields_BasicGameDemoPaintable(): void {
    
    
    
    this.currentStatePaintable = NullPaintable.getInstance();
    }
    

    jinit_BasicGameDemoPaintable_3(mainDemoStatePaintable: Paintable | null, ownershipPaintable: Paintable | null, helpPaintableInterface: Paintable | null): BasicGameDemoPaintable {
        super.jinit_StatePaintable_0();
        this.jfields_BasicGameDemoPaintable();
        this.mainDemoStatePaintable = mainDemoStatePaintable;
        this.setCurrentStatePaintable(NullPaintable.getInstance()); if (JThrowable.pending !== null) return this;
        this.ownershipPaintable = ownershipPaintable;
        this.helpPaintableInterface = helpPaintableInterface;
        return this;
    }
    

    setState(state: i32): void {
        if (state == 0) {
            this.setCurrentStatePaintable(this.getMainDemoStatePaintable()); if (JThrowable.pending !== null) return;
        } else if (state == 1) {
            this.setCurrentStatePaintable(this.helpPaintableInterface); if (JThrowable.pending !== null) return;
        } else {
            this.setCurrentStatePaintable(this.ownershipPaintable); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        this.getCurrentStatePaintable()!.paint(graphics); if (JThrowable.pending !== null) return;
    }
    

    getHelpPaintableInterface(): Paintable | null {
        return this.helpPaintableInterface;
    }
    

    setCurrentStatePaintable(currentStatePaintable: Paintable | null): void {
        this.currentStatePaintable = currentStatePaintable;
    }
    

    getCurrentStatePaintable(): Paintable | null {
        return this.currentStatePaintable;
    }
    

    getMainDemoStatePaintable(): Paintable | null {
        return this.mainDemoStatePaintable;
    }
}

