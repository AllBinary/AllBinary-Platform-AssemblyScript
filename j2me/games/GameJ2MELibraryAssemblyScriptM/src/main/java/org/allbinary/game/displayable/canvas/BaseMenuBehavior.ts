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
// import org.allbinary.graphics.paint.NullPaintable

@global export class BaseMenuBehavior extends JObject {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.BaseMenuBehavior";
    }
    @lazy static jv_instance: BaseMenuBehavior | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): BaseMenuBehavior | null {
        if (!BaseMenuBehavior.js_instance) {
            BaseMenuBehavior.js_instance = true;
            BaseMenuBehavior.jv_instance = new BaseMenuBehavior().jinit_BaseMenuBehavior_0();
        }
        return BaseMenuBehavior.jv_instance;
    }
    static set instance(value: BaseMenuBehavior | null) {
        BaseMenuBehavior.js_instance = true;
        BaseMenuBehavior.jv_instance = value;
    }

    jinit_BaseMenuBehavior_0(): BaseMenuBehavior {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): BaseMenuBehavior | null {
        return BaseMenuBehavior.instance;
    }
    

    onDisplayChangeEvent(allBinaryGameCanvas: AllBinaryGameCanvas | null, displayChangeEvent: DisplayChangeEvent | null): void {
    }
    

    initSpecialPaint(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
        allBinaryGameCanvas!.setNonBotPaintableP(NullPaintable.getInstance()); if (JThrowable.pending !== null) return;
    }
    

    initMenu(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
    }
    

    updateMenu(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
    }
    

    popupMenu(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
    }
    

    closeMenu(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
    }
}

