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
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.CellPositionFactory
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.paint.Paintable
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class TouchButtonsMappingPaintable extends Paintable {

    jclassName(): string {
        return "org.allbinary.input.motion.button.TouchButtonsMappingPaintable";
    }
    logUtil: LogUtil | null = null;
    foregroundColor: i32 = 0;
    paintableTable: StaticArray<StaticArray<Paintable | null> | null> | null = null;
    touchButtonLocationHelper: TouchButtonLocationHelper | null = null;

    jfields_TouchButtonsMappingPaintable(): void {
    this.logUtil = LogUtil.getInstance();
    
    this.paintableTable = JArrays.new2<Paintable | null>(0, 0);
    this.touchButtonLocationHelper = new TouchButtonLocationHelper().jinit_TouchButtonLocationHelper_0();
    }
    

    jinit_TouchButtonsMappingPaintable_1(basicColor: BasicColor | null): TouchButtonsMappingPaintable {
        super.jinit_Paintable_0();
        this.jfields_TouchButtonsMappingPaintable();
        this.foregroundColor = basicColor!.intValue(); if (JThrowable.pending !== null) return this;
        this.init(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    init(): void {
        do {
            this.paintableTable = this.createPaintableTable(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, "updateRectangle", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    createPaintableTable(): StaticArray<StaticArray<Paintable | null> | null> | null {
        let totalColumns: i32 = this.touchButtonLocationHelper!.getTotalColumns(); if (JThrowable.pending !== null) return null;
        let totalRows: i32 = this.touchButtonLocationHelper!.getTotalRows(); if (JThrowable.pending !== null) return null;
        let paintableTable: StaticArray<StaticArray<Paintable | null> | null> | null = JArrays.new2<Paintable | null>(totalColumns, totalRows);
        let cellPositionFactory: CellPositionFactory | null = CellPositionFactory.getInstance(); if (JThrowable.pending !== null) return null;
        let commonButtons: CommonButtons | null = CommonButtons.getInstance(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = totalColumns - 1; index >= 0; index--) {
            for (let rowIndex: i32 = totalRows - 1; rowIndex >= 0; rowIndex--) {
                this.paintableTable![index]![rowIndex] = TouchButton.createButton(BasicTouchInputFactory.getInstance()!.NONE, TouchButtonBlankResource.getInstance(), commonButtons!.NORMAL_BUTTON, cellPositionFactory!.getInstanceColRow(index, rowIndex), this.touchButtonLocationHelper!.getColumnsRemainderHalf(), this.touchButtonLocationHelper!.getRowsRemainderHalf()); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return paintableTable;
    }
    

    paint(graphics: Graphics | null): void {
        let totalColumns: i32 = this.touchButtonLocationHelper!.getTotalColumns(); if (JThrowable.pending !== null) return;
        let totalRows: i32 = this.touchButtonLocationHelper!.getTotalRows(); if (JThrowable.pending !== null) return;
        for (let index: i32 = totalColumns - 1; index >= 0; index--) {
            for (let rowIndex: i32 = totalRows - 1; rowIndex >= 0; rowIndex--) {
                this.paintableTable![index]![rowIndex]!.paint(graphics); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

