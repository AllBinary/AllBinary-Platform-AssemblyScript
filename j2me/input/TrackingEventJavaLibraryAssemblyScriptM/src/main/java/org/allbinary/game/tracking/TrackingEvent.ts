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
// package org.allbinary.game.tracking
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.util.event.AllBinaryEventObject

@global export class TrackingEvent extends AllBinaryEventObject {

    jclassName(): string {
        return "org.allbinary.game.tracking.TrackingEvent";
    }
    layerInterface: AllBinaryLayer | null = null;

    jfields_TrackingEvent(): void {
    this.layerInterface = AllBinaryLayer.NULL_ALLBINARY_LAYER;
    }
    

    jinit_TrackingEvent_1(allBinaryLayerInterface: Object | null): TrackingEvent {
        super.jinit_AllBinaryEventObject_1(allBinaryLayerInterface);
        this.jfields_TrackingEvent();
        if (allBinaryLayerInterface != changetype<Object | null>(TrackingEventHandler.getInstance())) {
            this.setLayerInterface(changetype<AllBinaryLayer | null>(allBinaryLayerInterface)); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    init(anyType: Object | null): void {
        this.setSource(anyType); if (JThrowable.pending !== null) return;
    }
    

    getLayerInterface(): AllBinaryLayer | null {
        return this.layerInterface;
    }
    

    setLayerInterface(layerInterface: AllBinaryLayer | null): void {
        this.layerInterface = layerInterface;
    }
    

    setLayerInterfaceForCircularStaticPool(layerInterface: AllBinaryLayer | null): void {
        this.layerInterface = layerInterface;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("TrackingEvent: \n"); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("LayerInterface: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(JObject.jtoString(this.layerInterface)); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

