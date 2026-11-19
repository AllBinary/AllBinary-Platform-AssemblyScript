/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// package org.allbinary.graphics.font
// import javax.microedition.lcdui.Graphics

@global export class UpdateMyFontProcessor extends MyFontProcessor {

    jclassName(): string {
        return "org.allbinary.graphics.font.UpdateMyFontProcessor";
    }
    updateMeasurementProcessor: UpdateMyFontInterface | null = null;

    jfields_UpdateMyFontProcessor(): void {
    
    }
    

    jinit_UpdateMyFontProcessor_1(keyValueDrawCharArray: UpdateMyFontInterface | null): UpdateMyFontProcessor {
        super.jinit_MyFontProcessor_0();
        this.jfields_UpdateMyFontProcessor();
        this.updateMeasurementProcessor = keyValueDrawCharArray;
        return this;
    }
    

    process(graphics: Graphics | null): void {
        this.updateMeasurementProcessor!.updateMeasurement(graphics); if (JThrowable.pending !== null) return;
    }
}

