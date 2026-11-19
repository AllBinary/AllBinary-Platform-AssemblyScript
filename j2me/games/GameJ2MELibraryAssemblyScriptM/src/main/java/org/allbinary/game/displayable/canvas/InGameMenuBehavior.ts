/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2022 AllBinary 
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
// package org.allbinary.game.displayable.canvas
// import org.allbinary.graphics.displayable.event.DisplayChangeEvent

@global export class InGameMenuBehavior extends BaseMenuBehavior {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.InGameMenuBehavior";
    }
    @lazy static jv_instanceC: InGameMenuBehavior | null = null;
    @lazy static js_instanceC: bool = false;
    static get instanceC(): InGameMenuBehavior | null {
        if (!InGameMenuBehavior.js_instanceC) {
            InGameMenuBehavior.js_instanceC = true;
            InGameMenuBehavior.jv_instanceC = new InGameMenuBehavior().jinit_InGameMenuBehavior_0();
        }
        return InGameMenuBehavior.jv_instanceC;
    }
    static set instanceC(value: InGameMenuBehavior | null) {
        InGameMenuBehavior.js_instanceC = true;
        InGameMenuBehavior.jv_instanceC = value;
    }

    jinit_InGameMenuBehavior_0(): InGameMenuBehavior {
        super.jinit_BaseMenuBehavior_0();
        return this;
    }
    

    static getInstance(): InGameMenuBehavior | null {
        return InGameMenuBehavior.instanceC;
    }
    

    onDisplayChangeEvent(allBinaryGameCanvas: AllBinaryGameCanvas | null, displayChangeEvent: DisplayChangeEvent | null): void {
        allBinaryGameCanvas!.updateMenuFromEvent(displayChangeEvent); if (JThrowable.pending !== null) return;
    }
    

    initSpecialPaint(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
        allBinaryGameCanvas!.setNonBotPaintableP(new GameCanvasNonBotPaintable().jinit_GameCanvasNonBotPaintable_1(allBinaryGameCanvas)); if (JThrowable.pending !== null) return;
    }
    

    initMenu(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
        allBinaryGameCanvas!.initMenu2(); if (JThrowable.pending !== null) return;
    }
    

    updateMenu(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
        allBinaryGameCanvas!.initMenu2(); if (JThrowable.pending !== null) return;
    }
    

    popupMenu(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
        allBinaryGameCanvas!.popupMenu2(); if (JThrowable.pending !== null) return;
    }
    

    closeMenu(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
        allBinaryGameCanvas!.closeMenu2(); if (JThrowable.pending !== null) return;
    }
}

