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
// package org.allbinary.game.combat.destroy.event
// import org.allbinary.game.displayable.canvas.AllBinaryGameCanvas
// import org.allbinary.game.displayable.canvas.NullGameCanvas
// import org.allbinary.layer.AllBinaryLayer
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.util.event.AllBinaryEventObject

@global export class DestroyedEvent extends AllBinaryEventObject {

    jclassName(): string {
        return "org.allbinary.game.combat.destroy.event.DestroyedEvent";
    }
    allBinaryGameCanvas: AllBinaryGameCanvas | null = null;
    allBinaryLayerInterface: AllBinaryLayer | null = null;

    jfields_DestroyedEvent(): void {
    this.allBinaryGameCanvas = NullGameCanvas.getInstance();
    this.allBinaryLayerInterface = AllBinaryLayer.NULL_ALLBINARY_LAYER;
    }
    

    jinit_DestroyedEvent_1(combatGameCanvas: AllBinaryGameCanvas | null): DestroyedEvent {
        super.jinit_AllBinaryEventObject_1(DestroyedEventHandler.getInstance());
        this.jfields_DestroyedEvent();
        this.setAllBinaryGameCanvas(combatGameCanvas); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getAllBinaryGameCanvas(): AllBinaryGameCanvas | null {
        return this.allBinaryGameCanvas;
    }
    

    getLayerInterface(): AllBinaryLayer | null {
        return this.allBinaryLayerInterface;
    }
    

    setAllBinaryGameCanvas(allBinaryGameCanvas: AllBinaryGameCanvas | null): void {
        this.allBinaryGameCanvas = allBinaryGameCanvas;
    }
    

    setLayerInterfaceForCircularStaticPool(allBinaryLayerInterface: AllBinaryLayer | null): void {
        this.allBinaryLayerInterface = allBinaryLayerInterface;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("DestroyedEvent: \n"); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("AllBinaryLayerInterface: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(JObject.jtoString(this.allBinaryLayerInterface)); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("\nAllBinaryGameCanvas: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(StringUtil.getInstance()!.toString1(this.getAllBinaryGameCanvas())); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

