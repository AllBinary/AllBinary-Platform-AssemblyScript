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
// package org.allbinary.graphics.color
// import org.allbinary.logic.util.event.AllBinaryEventObject

@global export class ColorChangeEvent extends AllBinaryEventObject {

    jclassName(): string {
        return "org.allbinary.graphics.color.ColorChangeEvent";
    }
    basicColor: BasicColor | null = null;

    jfields_ColorChangeEvent(): void {
    this.basicColor = BasicColorFactory.getInstance()!.WHITE;
    }
    

    jinit_ColorChangeEvent_1(anyType: Object | null): ColorChangeEvent {
        super.jinit_AllBinaryEventObject_1(anyType);
        this.jfields_ColorChangeEvent();
        return this;
    }
    

    setBasicColorP(basicColor: BasicColor | null): void {
        this.basicColor = basicColor;
    }
    

    getBasicColorP(): BasicColor | null {
        return this.basicColor;
    }
}

