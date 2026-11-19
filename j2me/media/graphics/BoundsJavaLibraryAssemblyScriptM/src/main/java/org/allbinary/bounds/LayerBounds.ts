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
// package org.allbinary.bounds
// import org.allbinary.bounds.event.BoundsChangeEvent
// import org.allbinary.bounds.event.BoundsChangeEventListener
// import org.allbinary.graphics.Rectangle
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventStrings

@global export class LayerBounds extends JObject implements BoundsChangeEventListener {

    jclassName(): string {
        return "org.allbinary.bounds.LayerBounds";
    }
    logUtil: LogUtil | null = null;
    rectangle: Rectangle | null = null;

    jfields_LayerBounds(): void {
    this.logUtil = LogUtil.getInstance();
    
    }
    

    jinit_LayerBounds_1(rectangle: Rectangle | null): LayerBounds {
        super.jinit_JObject_0();
        this.jfields_LayerBounds();
        this.rectangle = rectangle;
        return this;
    }
    

    getRectangleP(): Rectangle | null {
        return this.rectangle;
    }
    

    visit(boundsVisitorInterface: BoundsVisitorInterface | null): void {
    }
    

    onEvent(eventObject: AllBinaryEventObject | null): void {
        ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this); if (JThrowable.pending !== null) return;
    }
    

    onBoundsChangeEvent(boundsChangeEvent: BoundsChangeEvent | null): void {
        this.rectangle = boundsChangeEvent!.getRectangle(); if (JThrowable.pending !== null) return;
    }
}

