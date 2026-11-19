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
// package org.allbinary.bounds.event
// import org.allbinary.graphics.Rectangle
// import org.allbinary.logic.util.event.AllBinaryEventObject

@global export class BoundsChangeEvent extends AllBinaryEventObject {

    jclassName(): string {
        return "org.allbinary.bounds.event.BoundsChangeEvent";
    }
    

    jinit_BoundsChangeEvent_1(rectangle: Rectangle | null): BoundsChangeEvent {
        super.jinit_AllBinaryEventObject_1(rectangle);
        return this;
    }
    

    getRectangle(): Rectangle | null {
        return changetype<Rectangle | null>(this.getSource());
    }
}

