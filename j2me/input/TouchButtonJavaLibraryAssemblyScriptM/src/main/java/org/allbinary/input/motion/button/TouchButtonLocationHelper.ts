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
// import org.allbinary.graphics.displayable.DisplayInfoSingleton
// import org.allbinary.logic.string.StringMaker

@global export class TouchButtonLocationHelper extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.button.TouchButtonLocationHelper";
    }
    totalColumns: i32 = 0;
    totalRows: i32 = 0;
    columnsRemainder: i32 = 0;
    rowsRemainder: i32 = 0;
    columnsRemainderHalf: i32 = 0;
    rowsRemainderHalf: i32 = 0;

    jfields_TouchButtonLocationHelper(): void {
    
    
    
    
    
    
    }
    

    jinit_TouchButtonLocationHelper_0(): TouchButtonLocationHelper {
        super.jinit_JObject_0();
        this.jfields_TouchButtonLocationHelper();
        let buttonSize: i32 = CommonButtons.getInstance()!.STANDARD_BUTTON_SIZE; if (JThrowable.pending !== null) return this;
        let displayInfo: DisplayInfoSingleton | null = DisplayInfoSingleton.getInstance(); if (JThrowable.pending !== null) return this;
        this.totalColumns = JMath.roundf((<f32>(displayInfo!.getLastWidth())) / (<f32>(buttonSize))); if (JThrowable.pending !== null) return this;
        this.totalRows = JMath.roundf((<f32>(displayInfo!.getLastHeight())) / (<f32>(buttonSize))); if (JThrowable.pending !== null) return this;
        this.columnsRemainder = displayInfo!.getLastWidth() % buttonSize; if (JThrowable.pending !== null) return this;
        this.columnsRemainderHalf = (this.columnsRemainder >> 1);
        this.rowsRemainder = displayInfo!.getLastHeight() % buttonSize; if (JThrowable.pending !== null) return this;
        this.rowsRemainderHalf = (this.rowsRemainder >> 1);
        return this;
    }
    

    getTotalColumns(): i32 {
        return this.totalColumns;
    }
    

    getTotalRows(): i32 {
        return this.totalRows;
    }
    

    getColumnsRemainder(): i32 {
        return this.columnsRemainder;
    }
    

    getRowsRemainder(): i32 {
        return this.rowsRemainder;
    }
    

    getColumnsRemainderHalf(): i32 {
        return this.columnsRemainderHalf;
    }
    

    getRowsRemainderHalf(): i32 {
        return this.rowsRemainderHalf;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append("totalColumns: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.totalColumns); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" totalRows: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.totalRows); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" columnsRemainder: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.columnsRemainder); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" rowsRemainder: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.rowsRemainder); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" columnsRemainderHalf: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.columnsRemainderHalf); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(" rowsRemainderHalf: "); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.rowsRemainderHalf); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

