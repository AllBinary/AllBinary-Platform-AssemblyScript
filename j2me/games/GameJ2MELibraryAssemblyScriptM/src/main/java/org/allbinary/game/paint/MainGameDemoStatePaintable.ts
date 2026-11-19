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
// import org.allbinary.graphics.paint.Paintable

@global export class MainGameDemoStatePaintable extends Paintable {

    jclassName(): string {
        return "org.allbinary.game.paint.MainGameDemoStatePaintable";
    }
    ownershipPaintableInterface: Paintable | null = null;
    menuPaintableInterface: Paintable | null = null;

    jfields_MainGameDemoStatePaintable(): void {
    
    
    }
    

    jinit_MainGameDemoStatePaintable_2(ownershipPaintableInterface: Paintable | null, menuPaintableInterface: Paintable | null): MainGameDemoStatePaintable {
        super.jinit_Paintable_0();
        this.jfields_MainGameDemoStatePaintable();
        this.ownershipPaintableInterface = ownershipPaintableInterface;
        this.menuPaintableInterface = menuPaintableInterface;
        return this;
    }
    

    paint(graphics: Graphics | null): void {
        this.menuPaintableInterface!.paint(graphics); if (JThrowable.pending !== null) return;
        this.ownershipPaintableInterface!.paint(graphics); if (JThrowable.pending !== null) return;
    }
    

    getOwnershipPaintableInterface(): Paintable | null {
        return this.ownershipPaintableInterface;
    }
    

    getMenuPaintableInterface(): Paintable | null {
        return this.menuPaintableInterface;
    }
}

