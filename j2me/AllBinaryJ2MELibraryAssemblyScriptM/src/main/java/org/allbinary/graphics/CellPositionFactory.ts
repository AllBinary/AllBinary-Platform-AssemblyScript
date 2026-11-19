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
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonStrings

@global export class CellPositionFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.CellPositionFactory";
    }
    @lazy static jv_SINGLETON: CellPositionFactory | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): CellPositionFactory | null {
        if (!CellPositionFactory.js_SINGLETON) {
            CellPositionFactory.js_SINGLETON = true;
            CellPositionFactory.jv_SINGLETON = new CellPositionFactory().jinit_CellPositionFactory_0();
        }
        return CellPositionFactory.jv_SINGLETON;
    }
    static set SINGLETON(value: CellPositionFactory | null) {
        CellPositionFactory.js_SINGLETON = true;
        CellPositionFactory.jv_SINGLETON = value;
    }
    logUtil: LogUtil | null = null;
    NONE: CellPosition | null = null;
    cellPositionArray: StaticArray<StaticArray<CellPosition | null> | null> | null = null;
    columns: i32 = 0;
    rows: i32 = 0;

    jfields_CellPositionFactory(): void {
    this.logUtil = LogUtil.getInstance();
    this.NONE = new CellPosition().jinit_CellPosition_4(-1, -1, -1, -1);
    this.cellPositionArray = JArrays.new2<CellPosition | null>(0, 0);
    this.columns = 0;
    this.rows = 0;
    }
    

    static getInstance(): CellPositionFactory | null {
        return CellPositionFactory.SINGLETON;
    }
    

    jinit_CellPositionFactory_0(): CellPositionFactory {
        super.jinit_JObject_0();
        this.jfields_CellPositionFactory();
        return this;
    }
    

    init(columns: i32, rows: i32): void {
        let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        stringBuffer!.append("Init: columns: "); if (JThrowable.pending !== null) return;
        stringBuffer!.appendint(columns); if (JThrowable.pending !== null) return;
        stringBuffer!.append(" rows: "); if (JThrowable.pending !== null) return;
        stringBuffer!.appendint(rows); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(stringBuffer), this, commonStrings!.INIT); if (JThrowable.pending !== null) return;
        this.cellPositionArray = JArrays.new2<CellPosition | null>(columns, rows);
        this.columns = columns;
        this.rows = rows;
        for (let column: i32 = 0; column < columns; column++) {
            for (let row: i32 = 0; row < rows; row++) {
                this.createInstance(column, row); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getInstanceColRow(i_column: i32, i_row: i32): CellPosition | null {
        do {
            return this.cellPositionArray![i_column]![i_row];
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
            this.logUtil!.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("columns: ")!.appendint(this.getColumns())!.append(" rows: ")!.appendint(this.getRows())!.append(" col: ")!.appendint(i_column)!.append(" row: ")!.appendint(i_row)), this, commonStrings!.GET_INSTANCE, e); if (JThrowable.pending !== null) return null;
            return this.NONE;
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    createInstance(i_column: i32, i_row: i32): CellPosition | null {
        let cellPositionCanBeNull: CellPosition | null = this.cellPositionArray![i_column]![i_row];
        if (cellPositionCanBeNull == null) {
            cellPositionCanBeNull = new CellPosition().jinit_CellPosition_4(i_column, i_row, this.columns, this.rows); if (JThrowable.pending !== null) return null;
            this.cellPositionArray![i_column]![i_row] = cellPositionCanBeNull;
        } if (JThrowable.pending !== null) return null;
        return cellPositionCanBeNull;
    }
    

    getColumns(): i32 {
        return this.columns;
    }
    

    getRows(): i32 {
        return this.rows;
    }
}

