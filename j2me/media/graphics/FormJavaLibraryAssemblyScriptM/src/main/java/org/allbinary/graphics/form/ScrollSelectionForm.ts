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
// import javax.microedition.lcdui.Canvas
// import javax.microedition.lcdui.Graphics
// import org.allbinary.graphics.GPoint
// import org.allbinary.graphics.Rectangle
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.form.item.ABCustomItem
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.math.RectangleCollisionUtil
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonSeps
// import org.allbinary.string.CommonStrings

@global export class ScrollSelectionForm extends PaintableForm {

    jclassName(): string {
        return "org.allbinary.graphics.form.ScrollSelectionForm";
    }
    @lazy static jv_NULL_SCROLL_SELECTION_FORM: Object | null = null;
    @lazy static js_NULL_SCROLL_SELECTION_FORM: bool = false;
    static get NULL_SCROLL_SELECTION_FORM(): Object | null {
        if (!ScrollSelectionForm.js_NULL_SCROLL_SELECTION_FORM) {
            ScrollSelectionForm.js_NULL_SCROLL_SELECTION_FORM = true;
            ScrollSelectionForm.jv_NULL_SCROLL_SELECTION_FORM = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return ScrollSelectionForm.jv_NULL_SCROLL_SELECTION_FORM;
    }
    static set NULL_SCROLL_SELECTION_FORM(value: Object | null) {
        ScrollSelectionForm.js_NULL_SCROLL_SELECTION_FORM = true;
        ScrollSelectionForm.jv_NULL_SCROLL_SELECTION_FORM = value;
    }
    @lazy static jv_NULL_SCROLL_SELECTION_HORIZONTAL_FORM: Object | null = null;
    @lazy static js_NULL_SCROLL_SELECTION_HORIZONTAL_FORM: bool = false;
    static get NULL_SCROLL_SELECTION_HORIZONTAL_FORM(): Object | null {
        if (!ScrollSelectionForm.js_NULL_SCROLL_SELECTION_HORIZONTAL_FORM) {
            ScrollSelectionForm.js_NULL_SCROLL_SELECTION_HORIZONTAL_FORM = true;
            ScrollSelectionForm.jv_NULL_SCROLL_SELECTION_HORIZONTAL_FORM = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return ScrollSelectionForm.jv_NULL_SCROLL_SELECTION_HORIZONTAL_FORM;
    }
    static set NULL_SCROLL_SELECTION_HORIZONTAL_FORM(value: Object | null) {
        ScrollSelectionForm.js_NULL_SCROLL_SELECTION_HORIZONTAL_FORM = true;
        ScrollSelectionForm.jv_NULL_SCROLL_SELECTION_HORIZONTAL_FORM = value;
    }
    @lazy static readonly INSIDE_FORM: string | null = " inside form";
    @lazy static readonly IS_IN_FORM: string | null = "isInForm";
    @lazy static readonly GET_SELECTED_INDEX: string | null = "getSelectedIndexForPoint";
    rectangleCollisionUtil: RectangleCollisionUtil | null = null;
    border: i32 = 0;
    halfBorder: i32 = 0;
    buttonBasicColor: BasicColor | null = null;
    scrollSelectionFormFormTypeItemIndexPaintable: ItemIndexPaintable | null = null;
    formTypeItemIndexDx: ItemIndexDx | null = null;
    paintable: ItemPaintable | null = null;
    adjustedExtraBorder: i32 = 0;

    jfields_ScrollSelectionForm(): void {
    this.rectangleCollisionUtil = RectangleCollisionUtil.getInstance();
    
    
    
    this.scrollSelectionFormFormTypeItemIndexPaintable = ItemIndexPaintable.getInstance();
    this.formTypeItemIndexDx = ItemIndexDx.getInstance();
    this.paintable = ItemPaintableFactory.getInstance();
    
    }
    

    static createForm(title: string | null, items: StaticArray<ABCustomItem | null> | null, formPaintableFactory: ItemPaintableFactory | null, border: i32, backgroundBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): PaintableForm | null {
        do {
            if (formPaintableFactory == ItemPaintableFactory.getInstance()) {
                return new ScrollSelectionForm().jinit_ScrollSelectionForm_7(title, items, formPaintableFactory, border, -3, backgroundBasicColor, foregroundBasicColor);
            } else {
                let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) break;
                let logUtil: LogUtil | null = LogUtil.getInstance(); if (JThrowable.pending !== null) break;
                logUtil!.putF(commonStrings!.EXCEPTION, logUtil, commonStrings!.EXCEPTION); if (JThrowable.pending !== null) break;
                return PaintableForm.getNullPaintableForm();
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return null;
            let logUtil: LogUtil | null = LogUtil.getInstance(); if (JThrowable.pending !== null) return null;
            logUtil!.put(commonStrings!.EXCEPTION, logUtil, commonStrings!.EXCEPTION, e); if (JThrowable.pending !== null) return null;
            return PaintableForm.getNullPaintableForm();
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    static getNullScrollSelectionForm(): ScrollSelectionForm | null {
        if (ScrollSelectionForm.NULL_SCROLL_SELECTION_FORM == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            ScrollSelectionForm.NULL_SCROLL_SELECTION_FORM = ScrollSelectionForm.createForm(StringUtil.getInstance()!.EMPTY_STRING, new StaticArray<ABCustomItem | null>(0), ItemPaintableFactory.getInstance(), 0, BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<ScrollSelectionForm | null>(ScrollSelectionForm.NULL_SCROLL_SELECTION_FORM);
    }
    

    static getNullScrollSelectionFormHorizontal(): ScrollSelectionForm | null {
        if (ScrollSelectionForm.NULL_SCROLL_SELECTION_HORIZONTAL_FORM == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            ScrollSelectionForm.NULL_SCROLL_SELECTION_HORIZONTAL_FORM = ScrollSelectionForm.createForm(StringUtil.getInstance()!.EMPTY_STRING, new StaticArray<ABCustomItem | null>(0), ItemPaintableFactory.getInstance(), 0, BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<ScrollSelectionForm | null>(ScrollSelectionForm.NULL_SCROLL_SELECTION_HORIZONTAL_FORM);
    }
    

    jinit_ScrollSelectionForm_7(title: string | null, items: StaticArray<ABCustomItem | null> | null, formPaintableFactory: ItemPaintableFactory | null, border: i32, adjustedExtraBorder: i32, backgroundBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): ScrollSelectionForm {
        super.jinit_PaintableForm_4(title, items, backgroundBasicColor, foregroundBasicColor);
        this.jfields_ScrollSelectionForm();
        this.adjustedExtraBorder = adjustedExtraBorder;
        this.buttonBasicColor = foregroundBasicColor;
        this.border = border;
        this.halfBorder = (border >> 1);
        this.paintable = formPaintableFactory!.getInstanceItemPaintable(this); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    init(rectangle: Rectangle | null, formType: FormType | null): void {
        super.init(rectangle, formType); if (JThrowable.pending !== null) return;
        let formTypeFactory: FormTypeFactory | null = FormTypeFactory.getInstance(); if (JThrowable.pending !== null) return;
        if (formType == formTypeFactory!.HORIZONTAL_FORM) {
            this.scrollSelectionFormFormTypeItemIndexPaintable = new ScrollSelectionFormHorizontalPaintable().jinit_ScrollSelectionFormHorizontalPaintable_1(this); if (JThrowable.pending !== null) return;
            this.formTypeItemIndexDx = new ScrollSelectionFormHorizontalDx().jinit_ScrollSelectionFormHorizontalDx_1(this); if (JThrowable.pending !== null) return;
        } else if (formType == formTypeFactory!.VERTICAL_CENTER_FORM) {
            this.scrollSelectionFormFormTypeItemIndexPaintable = new ScrollSelectionFormVerticalPaintable().jinit_ScrollSelectionFormVerticalPaintable_1(this); if (JThrowable.pending !== null) return;
            this.formTypeItemIndexDx = new ScrollSelectionFormVericalDx().jinit_ScrollSelectionFormVericalDx_1(this); if (JThrowable.pending !== null) return;
        } else if (formType == formTypeFactory!.TEMP_HORIZONTAL_FORM) {
            this.scrollSelectionFormFormTypeItemIndexPaintable = new ScrollSelectionFormTempHorizontalPaintable().jinit_ScrollSelectionFormTempHorizontalPaintable_1(this); if (JThrowable.pending !== null) return;
            this.formTypeItemIndexDx = new ScrollSelectionFormTempHorizontalDx().jinit_ScrollSelectionFormTempHorizontalDx_1(this); if (JThrowable.pending !== null) return;
        } else if (formType == formTypeFactory!.NULL_FORM_TYPE) {
        } else {
            { JThrowable.raise(new JException().jinit_JException_1(formTypeFactory!.UNK)); return; }
        } if (JThrowable.pending !== null) return;
    }
    

    paintItemHorizontal(graphics: Graphics | null, index: i32, item: ABCustomItem | null, x: i32, y: i32): i32 {
        let width: i32 = item!.getMinimumWidth(); if (JThrowable.pending !== null) return 0;
        return x + width + this.border;
    }
    

    paintItemVertical(graphics: Graphics | null, index: i32, item: ABCustomItem | null, x: i32, y: i32): i32 {
        let height: i32 = item!.getMinimumHeight(); if (JThrowable.pending !== null) return 0;
        return y + height + this.border;
    }
    

    paintItemTempHorizontal(graphics: Graphics | null, index: i32, item: ABCustomItem | null, x: i32, y: i32): i32 {
        return 0;
    }
    

    getSelectedIndexForPointHorizontalDx(index: i32, item: ABCustomItem | null, dx: i32, dy: i32): i32 {
        return dx - this.halfBorder;
    }
    

    getSelectedIndexForPointVerticalDx(index: i32, item: ABCustomItem | null, dx: i32, dy: i32): i32 {
        return dx + this.getDiffX(item);
    }
    

    getSelectedIndexForPointTempHorizontalDx(index: i32, item: ABCustomItem | null, dx: i32, dy: i32): i32 {
        return dx + this.getDiffX(item);
    }
    

    append(item: ABCustomItem | null): i32 {
        return super.append(item);
    }
    

    getSelectedItem(point: GPoint | null): ABCustomItem | null {
        let index: i32 = this.getSelectedIndexForPoint(point); if (JThrowable.pending !== null) return null;
        if (index != -1) {
            return this.get(index);
        } else {
            return ABCustomItem.getNullInstance();
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    getItemIndex(item: ABCustomItem | null): i32 {
        let nextItem: ABCustomItem | null = null;
        let size: i32 = this.size(); if (JThrowable.pending !== null) return 0;
        for (let index: i32 = 0; index < size; index++) {
            nextItem = changetype<ABCustomItem | null>(this.get(index)); if (JThrowable.pending !== null) return 0;
            if (nextItem == item) {
                return index;
            }
        } if (JThrowable.pending !== null) return 0;
        return -1;
    }
    

    getStartIndex(): i32 {
        return 0;
    }
    

    getSelectedIndexForPoint(point: GPoint | null): i32 {
        let start: i32 = this.getStartIndex(); if (JThrowable.pending !== null) return 0;
        let size: i32 = this.size(); if (JThrowable.pending !== null) return 0;
        let dx: i32 = this.getDx(); if (JThrowable.pending !== null) return 0;
        let dy: i32 = this.getDy(); if (JThrowable.pending !== null) return 0;
        let formTypeFactory: FormTypeFactory | null = FormTypeFactory.getInstance(); if (JThrowable.pending !== null) return 0;
        let commonLabels: CommonLabels | null = CommonLabels.getInstance(); if (JThrowable.pending !== null) return 0;
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return 0;
        stringBuffer!.append(commonLabels!.START_LABEL); if (JThrowable.pending !== null) return 0;
        stringBuffer!.appendint(start); if (JThrowable.pending !== null) return 0;
        stringBuffer!.append(CommonSeps.getInstance()!.SPACE); if (JThrowable.pending !== null) return 0;
        stringBuffer!.append(commonLabels!.TOTAL_LABEL); if (JThrowable.pending !== null) return 0;
        stringBuffer!.appendint(size); if (JThrowable.pending !== null) return 0;
        this.logUtil!.putF(JObject.jtoString(stringBuffer), this, ScrollSelectionForm.GET_SELECTED_INDEX); if (JThrowable.pending !== null) return 0;
        let item: ABCustomItem | null = null;
        let width: i32 = 0;
        let height: i32 = 0;
        let diffX: i32 = 0;
        for (let index: i32 = start; index < size; index++) {
            item = this.get(index); if (JThrowable.pending !== null) return 0;
            width = item!.getMinimumWidth(); if (JThrowable.pending !== null) return 0;
            height = item!.getMinimumHeight(); if (JThrowable.pending !== null) return 0;
            diffX = this.formTypeItemIndexDx!.getDx(index, item, dx, dy); if (JThrowable.pending !== null) return 0;
            if (this.rectangleCollisionUtil!.isInside(diffX, dy - this.halfBorder, diffX + width + this.border, dy + height + this.halfBorder + 1, point!.getX(), point!.getY())) {
                stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return 0;
                stringBuffer!.append(commonLabels!.ITEM_LABEL); if (JThrowable.pending !== null) return 0;
                stringBuffer!.append(item!.getLabel()); if (JThrowable.pending !== null) return 0;
                stringBuffer!.append(CommonSeps.getInstance()!.SPACE); if (JThrowable.pending !== null) return 0;
                stringBuffer!.append(commonLabels!.INDEX_LABEL); if (JThrowable.pending !== null) return 0;
                stringBuffer!.appendint(index); if (JThrowable.pending !== null) return 0;
                this.logUtil!.putF(JObject.jtoString(stringBuffer), this, ScrollSelectionForm.GET_SELECTED_INDEX); if (JThrowable.pending !== null) return 0;
                return index;
            } if (JThrowable.pending !== null) return 0;
            if (this.formType == formTypeFactory!.HORIZONTAL_FORM) {
                dx = dx + width + this.border;
                if (dx > this.rectangle!.getMaxX()) {
                    break;
                } if (JThrowable.pending !== null) return 0;
            } else if (this.formType == formTypeFactory!.VERTICAL_CENTER_FORM) {
                dy = dy + height + this.border;
                if (dy > this.rectangle!.getMaxY()) {
                    break;
                } if (JThrowable.pending !== null) return 0;
            } else if (this.formType == formTypeFactory!.NULL_FORM_TYPE) {
            } else {
                { JThrowable.raise(new JException().jinit_JException_1(formTypeFactory!.UNK)); return 0; }
            } if (JThrowable.pending !== null) return 0;
        } if (JThrowable.pending !== null) return 0;
        return -1;
    }
    

    processInputKey(gameKeyCode: i32): i32 {
        let formTypeFactory: FormTypeFactory | null = FormTypeFactory.getInstance(); if (JThrowable.pending !== null) return 0;
        if (this.size() == 0) {
            return -1;
        } if (JThrowable.pending !== null) return 0;
        let index: i32 = this.getSelectedIndex(); if (JThrowable.pending !== null) return 0;
        if (this.formType == formTypeFactory!.HORIZONTAL_FORM || this.formType == formTypeFactory!.TEMP_HORIZONTAL_FORM) {
            if (gameKeyCode == Canvas.RIGHT) {
                index++;
            } else if (gameKeyCode == Canvas.LEFT) {
                index--;
            }
        } else if (this.formType == formTypeFactory!.VERTICAL_CENTER_FORM) {
            if (gameKeyCode == Canvas.DOWN) {
                index++;
            } else if (gameKeyCode == Canvas.UP) {
                index--;
            }
        } else if (this.formType == formTypeFactory!.NULL_FORM_TYPE) {
        } else {
            { JThrowable.raise(new JException().jinit_JException_1(formTypeFactory!.UNK)); return 0; }
        } if (JThrowable.pending !== null) return 0;
        let max: i32 = this.size() - 1; if (JThrowable.pending !== null) return 0;
        if (index < 0) {
            this.setSelectedIndex(0); if (JThrowable.pending !== null) return 0;
        } else if (index > max) {
            this.setSelectedIndex(max); if (JThrowable.pending !== null) return 0;
        } else {
            this.setSelectedIndex(index); if (JThrowable.pending !== null) return 0;
        } if (JThrowable.pending !== null) return 0;
        return -1;
    }
    

    isInForm(point: GPoint | null): bool {
        if (this.rectangleCollisionUtil!.isInside(this.x, this.y - this.halfBorder, this.rectangle!.getMaxX() + this.border, this.rectangle!.getMaxY() + this.border, point!.getX(), point!.getY())) {
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(StringUtil.getInstance()!.toString1(point))!.append(ScrollSelectionForm.INSIDE_FORM)), this, ScrollSelectionForm.IS_IN_FORM); if (JThrowable.pending !== null) return false;
            return true;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    paintItem(graphics: Graphics | null, index: i32, item: ABCustomItem | null, x: i32, y: i32): i32 {
        item!.paintXY(graphics, x, y); if (JThrowable.pending !== null) return 0;
        let width: i32 = item!.getMinimumWidth(); if (JThrowable.pending !== null) return 0;
        let height: i32 = item!.getMinimumHeight(); if (JThrowable.pending !== null) return 0;
        graphics!.setColor(this.getButtonBasicColor()!.intValue()); if (JThrowable.pending !== null) return 0;
        let adjustedBorder: i32 = 3;
        graphics!.drawRect(x - this.halfBorder - adjustedBorder, y - this.halfBorder - adjustedBorder, width + this.border + this.adjustedExtraBorder, height + this.border + this.adjustedExtraBorder); if (JThrowable.pending !== null) return 0;
        return this.scrollSelectionFormFormTypeItemIndexPaintable!.paint(graphics, index, item, x, y);
    }
    

    paintUnselectedItem(graphics: Graphics | null, index: i32, item: ABCustomItem | null, x: i32, y: i32): i32 {
        graphics!.setColor(this.getButtonBasicColor()!.intValue()); if (JThrowable.pending !== null) return 0;
        item!.paintUnselected(graphics, x, y); if (JThrowable.pending !== null) return 0;
        return this.scrollSelectionFormFormTypeItemIndexPaintable!.paint(graphics, index, item, x, y);
    }
    

    getDiffX(item: ABCustomItem | null): i32 {
        return 0;
    }
    

    getDx(): i32 {
        return this.x;
    }
    

    getDy(): i32 {
        return this.y;
    }
    

    setButtonBasicColor(buttonBasicColor: BasicColor | null): void {
        this.buttonBasicColor = buttonBasicColor;
    }
    

    getButtonBasicColor(): BasicColor | null {
        return this.buttonBasicColor;
    }
}

