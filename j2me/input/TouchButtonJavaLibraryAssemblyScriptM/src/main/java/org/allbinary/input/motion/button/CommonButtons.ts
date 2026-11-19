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
// package org.allbinary.input.motion.button
// import org.allbinary.graphics.PointFactory
// import org.allbinary.graphics.Rectangle
// import org.allbinary.graphics.displayable.DisplayInfoSingleton

@global export class CommonButtons extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.button.CommonButtons";
    }
    @lazy static jv_instance: CommonButtons | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): CommonButtons | null {
        if (!CommonButtons.js_instance) {
            CommonButtons.js_instance = true;
            CommonButtons.jv_instance = new CommonButtons().jinit_CommonButtons_0();
        }
        return CommonButtons.jv_instance;
    }
    static set instance(value: CommonButtons | null) {
        CommonButtons.js_instance = true;
        CommonButtons.jv_instance = value;
    }
    STANDARD_BUTTON_SIZE: i32 = 0;
    NORMAL_BUTTON: Rectangle | null = null;
    LARGE_BUTTON: Rectangle | null = null;

    jfields_CommonButtons(): void {
    
    
    
    }
    

    static getInstance(): CommonButtons | null {
        return CommonButtons.instance;
    }
    

    jinit_CommonButtons_0(): CommonButtons {
        super.jinit_JObject_0();
        this.jfields_CommonButtons();
        let displayInfo: DisplayInfoSingleton | null = DisplayInfoSingleton.getInstance(); if (JThrowable.pending !== null) return this;
        let commonButtonSize: i32 = 128;
        while (commonButtonSize > 64) {
            let totalColumns: i32 = displayInfo!.getLastWidth() / commonButtonSize; if (JThrowable.pending !== null) return this;
            let totalRows: i32 = displayInfo!.getLastHeight() / commonButtonSize; if (JThrowable.pending !== null) return this;
            let max: i32 = totalColumns;
            if (totalRows > max) {
                max = totalRows;
            }
            if (max > 9) {
                break;
            }
            commonButtonSize = commonButtonSize >> 1;
        } if (JThrowable.pending !== null) return this;
        this.STANDARD_BUTTON_SIZE = commonButtonSize;
        this.NORMAL_BUTTON = new Rectangle().jinit_Rectangle_3(PointFactory.getInstance()!.ZERO_ZERO, this.STANDARD_BUTTON_SIZE, this.STANDARD_BUTTON_SIZE); if (JThrowable.pending !== null) return this;
        this.LARGE_BUTTON = new Rectangle().jinit_Rectangle_3(PointFactory.getInstance()!.ZERO_ZERO, this.STANDARD_BUTTON_SIZE << 1, this.STANDARD_BUTTON_SIZE << 1); if (JThrowable.pending !== null) return this;
        return this;
    }
}

