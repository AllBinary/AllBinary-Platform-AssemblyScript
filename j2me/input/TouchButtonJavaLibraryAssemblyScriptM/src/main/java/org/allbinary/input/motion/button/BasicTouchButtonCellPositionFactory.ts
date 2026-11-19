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
// import org.allbinary.graphics.CellPosition
// import org.allbinary.graphics.CellPositionFactory
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class BasicTouchButtonCellPositionFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.button.BasicTouchButtonCellPositionFactory";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    TOP_RIGHT: CellPosition | null = null;
    TOP_LEFT: CellPosition | null = null;
    SECOND_FROM_TOP_LEFT: CellPosition | null = null;
    SECOND_FROM_TOP_RIGHT: CellPosition | null = null;
    TOP_SECOND_FROM_LEFT: CellPosition | null = null;
    TOP_SECOND_FROM_RIGHT: CellPosition | null = null;
    BOTTOM_RIGHT: CellPosition | null = null;
    BOTTOM_SECOND_FROM_RIGHT: CellPosition | null = null;
    SECOND_FROM_BOTTOM_RIGHT: CellPosition | null = null;
    THIRD_FROM_BOTTOM_RIGHT: CellPosition | null = null;
    FOURTH_FROM_BOTTOM_RIGHT: CellPosition | null = null;
    SECOND_FROM_BOTTOM_SECOND_FROM_RIGHT: CellPosition | null = null;
    SECOND_FROM_BOTTOM_THIRD_FROM_RIGHT: CellPosition | null = null;
    SECOND_FROM_BOTTOM_FOURTH_FROM_RIGHT: CellPosition | null = null;
    BOTTOM_THIRD_FROM_RIGHT: CellPosition | null = null;
    BOTTOM_FOURTH_FROM_RIGHT: CellPosition | null = null;
    BOTTOM_SECOND_FROM_LEFT: CellPosition | null = null;
    SECOND_FROM_BOTTOM_LEFT: CellPosition | null = null;
    THIRD_FROM_BOTTOM_LEFT: CellPosition | null = null;
    BOTTOM_LEFT: CellPosition | null = null;
    SECOND_FROM_BOTTOM_SECOND_FROM_LEFT: CellPosition | null = null;

    jfields_BasicTouchButtonCellPositionFactory(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    
    
    this.SECOND_FROM_TOP_LEFT = null;
    this.SECOND_FROM_TOP_RIGHT = null;
    this.TOP_SECOND_FROM_LEFT = null;
    this.TOP_SECOND_FROM_RIGHT = null;
    
    
    
    this.THIRD_FROM_BOTTOM_RIGHT = null;
    this.FOURTH_FROM_BOTTOM_RIGHT = null;
    
    this.SECOND_FROM_BOTTOM_THIRD_FROM_RIGHT = null;
    this.SECOND_FROM_BOTTOM_FOURTH_FROM_RIGHT = null;
    this.BOTTOM_THIRD_FROM_RIGHT = null;
    this.BOTTOM_FOURTH_FROM_RIGHT = null;
    
    
    this.THIRD_FROM_BOTTOM_LEFT = null;
    
    
    }
    

    jinit_BasicTouchButtonCellPositionFactory_0(): BasicTouchButtonCellPositionFactory {
        super.jinit_JObject_0();
        this.jfields_BasicTouchButtonCellPositionFactory();
        this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.CONSTRUCTOR); if (JThrowable.pending !== null) return this;
        let touchButtonLocationHelper: TouchButtonLocationHelper | null = new TouchButtonLocationHelper().jinit_TouchButtonLocationHelper_0(); if (JThrowable.pending !== null) return this;
        let cellPositionFactory: CellPositionFactory | null = CellPositionFactory.getInstance(); if (JThrowable.pending !== null) return this;
        cellPositionFactory!.init(touchButtonLocationHelper!.getTotalColumns(), touchButtonLocationHelper!.getTotalRows()); if (JThrowable.pending !== null) return this;
        this.TOP_LEFT = cellPositionFactory!.getInstanceColRow(0, 0); if (JThrowable.pending !== null) return this;
        this.TOP_RIGHT = cellPositionFactory!.getInstanceColRow(touchButtonLocationHelper!.getTotalColumns() - 1, 0); if (JThrowable.pending !== null) return this;
        this.BOTTOM_LEFT = cellPositionFactory!.getInstanceColRow(0, touchButtonLocationHelper!.getTotalRows() - 1); if (JThrowable.pending !== null) return this;
        this.BOTTOM_RIGHT = cellPositionFactory!.getInstanceColRow(touchButtonLocationHelper!.getTotalColumns() - 1, touchButtonLocationHelper!.getTotalRows() - 1); if (JThrowable.pending !== null) return this;
        this.BOTTOM_SECOND_FROM_RIGHT = cellPositionFactory!.getInstanceColRow(touchButtonLocationHelper!.getTotalColumns() - 2, touchButtonLocationHelper!.getTotalRows() - 1); if (JThrowable.pending !== null) return this;
        this.SECOND_FROM_BOTTOM_RIGHT = cellPositionFactory!.getInstanceColRow(touchButtonLocationHelper!.getTotalColumns() - 1, touchButtonLocationHelper!.getTotalRows() - 2); if (JThrowable.pending !== null) return this;
        this.SECOND_FROM_BOTTOM_SECOND_FROM_RIGHT = cellPositionFactory!.getInstanceColRow(touchButtonLocationHelper!.getTotalColumns() - 2, touchButtonLocationHelper!.getTotalRows() - 2); if (JThrowable.pending !== null) return this;
        this.BOTTOM_SECOND_FROM_LEFT = cellPositionFactory!.getInstanceColRow(1, touchButtonLocationHelper!.getTotalRows() - 1); if (JThrowable.pending !== null) return this;
        this.SECOND_FROM_BOTTOM_LEFT = cellPositionFactory!.getInstanceColRow(0, touchButtonLocationHelper!.getTotalRows() - 2); if (JThrowable.pending !== null) return this;
        this.SECOND_FROM_BOTTOM_SECOND_FROM_LEFT = cellPositionFactory!.getInstanceColRow(1, touchButtonLocationHelper!.getTotalRows() - 2); if (JThrowable.pending !== null) return this;
        if (touchButtonLocationHelper!.getTotalRows() > 2) {
            this.SECOND_FROM_TOP_LEFT = cellPositionFactory!.getInstanceColRow(0, 1); if (JThrowable.pending !== null) return this;
            this.SECOND_FROM_TOP_RIGHT = cellPositionFactory!.getInstanceColRow(touchButtonLocationHelper!.getTotalColumns() - 1, 1); if (JThrowable.pending !== null) return this;
        } else {
            this.SECOND_FROM_TOP_LEFT = cellPositionFactory!.NONE;
            this.SECOND_FROM_TOP_RIGHT = cellPositionFactory!.NONE;
        } if (JThrowable.pending !== null) return this;
        if (touchButtonLocationHelper!.getTotalRows() >= 4) {
            this.THIRD_FROM_BOTTOM_RIGHT = cellPositionFactory!.getInstanceColRow(touchButtonLocationHelper!.getTotalColumns() - 1, touchButtonLocationHelper!.getTotalRows() - 3); if (JThrowable.pending !== null) return this;
            this.FOURTH_FROM_BOTTOM_RIGHT = cellPositionFactory!.getInstanceColRow(touchButtonLocationHelper!.getTotalColumns() - 1, touchButtonLocationHelper!.getTotalRows() - 4); if (JThrowable.pending !== null) return this;
            this.THIRD_FROM_BOTTOM_LEFT = cellPositionFactory!.getInstanceColRow(0, touchButtonLocationHelper!.getTotalRows() - 3); if (JThrowable.pending !== null) return this;
        } else {
            this.THIRD_FROM_BOTTOM_RIGHT = cellPositionFactory!.NONE;
            this.FOURTH_FROM_BOTTOM_RIGHT = cellPositionFactory!.NONE;
            this.THIRD_FROM_BOTTOM_LEFT = cellPositionFactory!.NONE;
        } if (JThrowable.pending !== null) return this;
        if (touchButtonLocationHelper!.getTotalColumns() >= 4) {
            this.SECOND_FROM_BOTTOM_THIRD_FROM_RIGHT = cellPositionFactory!.getInstanceColRow(touchButtonLocationHelper!.getTotalColumns() - 3, touchButtonLocationHelper!.getTotalRows() - 2); if (JThrowable.pending !== null) return this;
            this.SECOND_FROM_BOTTOM_FOURTH_FROM_RIGHT = cellPositionFactory!.getInstanceColRow(touchButtonLocationHelper!.getTotalColumns() - 4, touchButtonLocationHelper!.getTotalRows() - 2); if (JThrowable.pending !== null) return this;
            this.BOTTOM_THIRD_FROM_RIGHT = cellPositionFactory!.getInstanceColRow(touchButtonLocationHelper!.getTotalColumns() - 3, touchButtonLocationHelper!.getTotalRows() - 1); if (JThrowable.pending !== null) return this;
            this.BOTTOM_FOURTH_FROM_RIGHT = cellPositionFactory!.getInstanceColRow(touchButtonLocationHelper!.getTotalColumns() - 4, touchButtonLocationHelper!.getTotalRows() - 1); if (JThrowable.pending !== null) return this;
            this.TOP_SECOND_FROM_LEFT = cellPositionFactory!.getInstanceColRow(1, 0); if (JThrowable.pending !== null) return this;
            this.TOP_SECOND_FROM_RIGHT = cellPositionFactory!.getInstanceColRow(touchButtonLocationHelper!.getTotalColumns() - 2, 0); if (JThrowable.pending !== null) return this;
        } else {
            this.SECOND_FROM_BOTTOM_THIRD_FROM_RIGHT = cellPositionFactory!.NONE;
            this.SECOND_FROM_BOTTOM_FOURTH_FROM_RIGHT = cellPositionFactory!.NONE;
            this.BOTTOM_THIRD_FROM_RIGHT = cellPositionFactory!.NONE;
            this.BOTTOM_FOURTH_FROM_RIGHT = cellPositionFactory!.NONE;
            this.TOP_SECOND_FROM_LEFT = cellPositionFactory!.NONE;
            this.TOP_SECOND_FROM_RIGHT = cellPositionFactory!.NONE;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
}

