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
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.layer.LayerManager
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.util.event.AllBinaryEventObject

@global export class LayerManagerEvent extends AllBinaryEventObject {

    jclassName(): string {
        return "org.allbinary.layer.event.LayerManagerEvent";
    }
    layerInterface: AllBinaryLayer | null = null;
    crud: string | null = null;

    jfields_LayerManagerEvent(): void {
    this.layerInterface = AllBinaryLayer.NULL_ALLBINARY_LAYER;
    
    }
    

    jinit_LayerManagerEvent_2(layerManager: LayerManager | null, crud: string | null): LayerManagerEvent {
        super.jinit_AllBinaryEventObject_1(layerManager);
        this.jfields_LayerManagerEvent();
        this.crud = crud;
        return this;
    }
    

    getLayerInterface(): AllBinaryLayer | null {
        return this.layerInterface;
    }
    

    setLayerInterface(layerInterface: AllBinaryLayer | null): void {
        this.layerInterface = layerInterface;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("LayerManagerEvent: \n"); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("LayerInterface: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(JObject.jtoString(this.getLayerInterface())); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("\nCRUD: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.crud); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

