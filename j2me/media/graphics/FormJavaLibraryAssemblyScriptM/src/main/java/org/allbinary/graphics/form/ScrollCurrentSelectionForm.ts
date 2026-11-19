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
// package org.allbinary.graphics.form
// import javax.microedition.lcdui.Graphics
// import org.allbinary.canvas.Processor
// import org.allbinary.graphics.Rectangle
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.graphics.font.UpdateMyFontProcessor
// import org.allbinary.graphics.form.item.ABCustomItem

@global export class ScrollCurrentSelectionForm extends ScrollSelectionForm implements UpdateMyFontInterface {

    jclassName(): string {
        return "org.allbinary.graphics.form.ScrollCurrentSelectionForm";
    }
    moveForSmallScreen: bool = false;
    updateMyFontProcessor: MyFontProcessor | null = null;
    myFontProcessor: MyFontProcessor | null = null;
    processor: Processor | null = null;
    preItemIndexDx: ItemIndexDx | null = null;
    dx: i32 = 0;
    dy: i32 = 0;
    maxWidth: i32 = 0;

    jfields_ScrollCurrentSelectionForm(): void {
    
    this.updateMyFontProcessor = new UpdateMyFontProcessor().jinit_UpdateMyFontProcessor_1(this);
    this.myFontProcessor = this.updateMyFontProcessor;
    this.processor = Processor.getInstance();
    this.preItemIndexDx = ItemIndexDx.getInstance();
    this.dx = 0;
    this.dy = 0;
    this.maxWidth = 0;
    }
    

    jinit_ScrollCurrentSelectionForm_8(title: string | null, items: StaticArray<ABCustomItem | null> | null, formPaintableFactory: ItemPaintableFactory | null, border: i32, adjustedExtraBorder: i32, moveForSmallScreen: bool, backgroundBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): ScrollCurrentSelectionForm {
        super.jinit_ScrollSelectionForm_7(title, items, formPaintableFactory, border, adjustedExtraBorder, backgroundBasicColor, foregroundBasicColor);
        this.jfields_ScrollCurrentSelectionForm();
        this.moveForSmallScreen = moveForSmallScreen;
        return this;
    }
    

    init(rectangle: Rectangle | null, formType: FormType | null): void {
        super.init(rectangle, formType); if (JThrowable.pending !== null) return;
        let formTypeFactory: FormTypeFactory | null = FormTypeFactory.getInstance(); if (JThrowable.pending !== null) return;
        if (formType == formTypeFactory!.TEMP_HORIZONTAL_FORM) {
            this.processor = new TempHorizontalFormProcessor().jinit_TempHorizontalFormProcessor_1(this); if (JThrowable.pending !== null) return;
            this.preItemIndexDx = new TempHorizontalItemIndexDx().jinit_TempHorizontalItemIndexDx_1(this); if (JThrowable.pending !== null) return;
        } else if (formType == formTypeFactory!.HORIZONTAL_FORM) {
            this.processor = new HorizontalFormProcessor().jinit_HorizontalFormProcessor_1(this); if (JThrowable.pending !== null) return;
            this.preItemIndexDx = new HorizontalItemIndexDx().jinit_HorizontalItemIndexDx_1(this); if (JThrowable.pending !== null) return;
        } else if (formType == formTypeFactory!.VERTICAL_CENTER_FORM) {
            this.processor = new VerticalFormProcessor().jinit_VerticalFormProcessor_1(this); if (JThrowable.pending !== null) return;
            this.preItemIndexDx = new VerticalItemIndexDx().jinit_VerticalItemIndexDx_1(this); if (JThrowable.pending !== null) return;
        } else if (formType == formTypeFactory!.NULL_FORM_TYPE) {
        } else {
            this.logUtil!.putF(formTypeFactory!.UNK, this, this.commonStrings!.INIT); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.myFontProcessor = this.updateMyFontProcessor;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        this.myFontProcessor = MyFontProcessor.getInstance(); if (JThrowable.pending !== null) return;
    }
    

    processTempHorizontalForm(): void {
        this.dx = this.x - 30 + (this.rectangle!.getWidth() >> 1); if (JThrowable.pending !== null) return;
        this.dy = this.y;
    }
    

    processHorizontalForm(): void {
        let size: i32 = this.size(); if (JThrowable.pending !== null) return;
        let totalWidth: i32 = 0;
        let item: ABCustomItem | null = null;
        for (let index: i32 = 0; index < size; index++) {
            item = this.get(index); if (JThrowable.pending !== null) return;
            totalWidth += item!.getMinimumWidth() + this.border; if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.dx = this.x + (this.rectangle!.getWidth() >> 1) - (totalWidth >> 1); if (JThrowable.pending !== null) return;
        this.dy = this.y + (this.rectangle!.getHeight() >> 1); if (JThrowable.pending !== null) return;
        if (this.moveForSmallScreen) {
            let maxTitleHeight: i32 = 175;
            if (this.dy < maxTitleHeight) {
                this.dy = maxTitleHeight;
            }
        }
    }
    

    processVerticalForm(): void {
        let totalHeight: i32 = 0;
        let size: i32 = this.size(); if (JThrowable.pending !== null) return;
        let item2: ABCustomItem | null = null;
        for (let index: i32 = 0; index < size; index++) {
            item2 = this.get(index); if (JThrowable.pending !== null) return;
            if (this.maxWidth < item2!.getMinimumWidth()) {
                this.maxWidth = item2!.getMinimumWidth(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            totalHeight += item2!.getMinimumHeight() + this.border; if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        this.dx = ((this.rectangle!.getWidth() - this.maxWidth) / 2); if (JThrowable.pending !== null) return;
        if (this.size() > 0) {
            this.dy = this.y + ((this.rectangle!.getHeight() - totalHeight) / 2); if (JThrowable.pending !== null) return;
            if (this.moveForSmallScreen) {
                let maxTitleHeight: i32 = 175;
                if (this.dy < maxTitleHeight) {
                    this.dy = maxTitleHeight;
                }
            }
        } else {
            this.dy = this.y;
        } if (JThrowable.pending !== null) return;
    }
    

    getXTempHorizontalForm(index: i32, item: ABCustomItem | null, dx: i32, dy: i32): i32 {
        return this.getDiffX(item);
    }
    

    getXHorizontalForm(index: i32, item: ABCustomItem | null, dx: i32, dy: i32): i32 {
        return 0;
    }
    

    getXVerticalForm(index: i32, item: ABCustomItem | null, dx: i32, dy: i32): i32 {
        return this.getDiffX(item) + this.halfBorder;
    }
    

    getDiffX(item: ABCustomItem | null): i32 {
        return ((this.maxWidth - item!.getMinimumWidth()) >> 1);
    }
    

    getDx(): i32 {
        return this.dx;
    }
    

    getDy(): i32 {
        return this.dy;
    }
    

    paint(graphics: Graphics | null): void {
        do {
            this.processor!.process(); if (JThrowable.pending !== null) break;
            let delta: i32 = 0;
            let deltaX: i32 = this.getDx(); if (JThrowable.pending !== null) break;
            let deltaY: i32 = this.getDy(); if (JThrowable.pending !== null) break;
            let size: i32 = this.size(); if (JThrowable.pending !== null) break;
            let formTypeFactory: FormTypeFactory | null = FormTypeFactory.getInstance(); if (JThrowable.pending !== null) break;
            let item: ABCustomItem | null = null;
            for (let index: i32 = 0; index < size; index++) {
                item = this.get(index); if (JThrowable.pending !== null) break;
                let diffX: i32 = this.preItemIndexDx!.getDx(index, item, this.dx, this.dy); if (JThrowable.pending !== null) break;
                if (index == this.getSelectedIndex()) {
                    delta = this.paintItem(graphics, index, item, deltaX + diffX, deltaY); if (JThrowable.pending !== null) break;
                    this.paintable!.paint(graphics, index, deltaX + diffX, deltaY); if (JThrowable.pending !== null) break;
                } else {
                    delta = this.paintUnselectedItem(graphics, index, item, deltaX + diffX, deltaY); if (JThrowable.pending !== null) break;
                    this.paintable!.paint(graphics, index, deltaX + diffX, deltaY); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                if (this.formType == formTypeFactory!.TEMP_HORIZONTAL_FORM) {
                } else if (this.formType == formTypeFactory!.HORIZONTAL_FORM) {
                    deltaX = delta;
                } else if (this.formType == formTypeFactory!.VERTICAL_CENTER_FORM) {
                    deltaY = delta;
                } else {
                    { JThrowable.raise(new JException().jinit_JException_1(formTypeFactory!.UNK)); break; }
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.canvasStrings!.PAINT, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

