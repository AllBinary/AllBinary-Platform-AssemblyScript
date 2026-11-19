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
// package org.allbinary.layer.event
// import org.allbinary.logic.util.event.AllBinaryEventObject

@global export class ScrollMapEvent extends AllBinaryEventObject {

    jclassName(): string {
        return "org.allbinary.layer.event.ScrollMapEvent";
    }
    dx: i32 = 0;
    dy: i32 = 0;

    jfields_ScrollMapEvent(): void {
    this.dx = 0;
    this.dy = 0;
    }
    

    jinit_ScrollMapEvent_1(anyType: Object | null): ScrollMapEvent {
        super.jinit_AllBinaryEventObject_1(anyType);
        this.jfields_ScrollMapEvent();
        return this;
    }
    

    setDx(dx: i32): void {
        this.dx = dx;
    }
    

    getDx(): i32 {
        return this.dx;
    }
    

    setDy(dy: i32): void {
        this.dy = dy;
    }
    

    getDy(): i32 {
        return this.dy;
    }
    

    setDxDy(dx: i32, dy: i32): void {
        this.dx = dx;
        this.dy = dy;
    }
}

