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
// package org.allbinary.graphics
// import org.allbinary.graph.V
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonSeps

@global export class CellPosition extends V {

    jclassName(): string {
        return "org.allbinary.graphics.CellPosition";
    }
    id: i32 = 0;
    column: i32 = 0;
    row: i32 = 0;

    jfields_CellPosition(): void {
    
    
    
    }
    

    jinit_CellPosition_4(column: i32, row: i32, columns: i32, rows: i32): CellPosition {
        super.jinit_V_0();
        this.jfields_CellPosition();
        this.column = column;
        this.row = row;
        this.id = (row * columns) + column;
        return this;
    }
    

    getColumn(): i32 {
        return this.column;
    }
    

    getRow(): i32 {
        return this.row;
    }
    

    toString(): string | null {
        return CellPosition.toStringColRow(this.getColumn(), this.getRow());
    }
    

    static toStringCellPosition(basicGeographicMapCellPosition: CellPosition | null): string | null {
        return CellPosition.toStringColRow(basicGeographicMapCellPosition!.getColumn(), basicGeographicMapCellPosition!.getRow());
    }
    

    static toStringColRow(i_column: i32, i_row: i32): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let commonSeps: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonSeps!.PARENTHESIS_OPEN); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(i_column); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonSeps!.COMMA); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(i_row); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonSeps!.PARENTHESIS_CLOSE); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    getId(): i32 {
        return this.id;
    }
}

