// Generated Code Do Not Modify
// package org.allbinary.graphics.form
// import org.allbinary.graphics.GPoint
// import org.allbinary.graphics.Rectangle
// import org.allbinary.graphics.RectangleFactory
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.displayable.CanvasStrings
// import org.allbinary.graphics.form.item.ABCustomItem
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.string.StringUtil

@global export class PaintableForm extends ABCustomForm {

    jclassName(): string {
        return "org.allbinary.graphics.form.PaintableForm";
    }
    @lazy static jv_NULL_PAINTABLE_FORM: Object | null = null;
    @lazy static js_NULL_PAINTABLE_FORM: bool = false;
    static get NULL_PAINTABLE_FORM(): Object | null {
        if (!PaintableForm.js_NULL_PAINTABLE_FORM) {
            PaintableForm.js_NULL_PAINTABLE_FORM = true;
            PaintableForm.jv_NULL_PAINTABLE_FORM = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return PaintableForm.jv_NULL_PAINTABLE_FORM;
    }
    static set NULL_PAINTABLE_FORM(value: Object | null) {
        PaintableForm.js_NULL_PAINTABLE_FORM = true;
        PaintableForm.jv_NULL_PAINTABLE_FORM = value;
    }
    canvasStrings: CanvasStrings | null = null;
    rectangle: Rectangle | null = null;
    x: i32 = 0;
    y: i32 = 0;
    formType: FormType | null = null;

    jfields_PaintableForm(): void {
    this.canvasStrings = CanvasStrings.getInstance();
    this.rectangle = RectangleFactory.SINGLETON;
    this.x = 0;
    this.y = 0;
    this.formType = FormTypeFactory.getInstance()!.NULL_FORM_TYPE;
    }
    

    static getNullPaintableForm(): PaintableForm | null {
        if (PaintableForm.NULL_PAINTABLE_FORM == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            PaintableForm.NULL_PAINTABLE_FORM = new PaintableForm().jinit_PaintableForm_4(StringUtil.getInstance()!.EMPTY_STRING, new StaticArray<ABCustomItem | null>(0), BasicColorFactory.getInstance()!.BLACK, BasicColorFactory.getInstance()!.WHITE); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<PaintableForm | null>(PaintableForm.NULL_PAINTABLE_FORM);
    }
    

    jinit_PaintableForm_4(title: string | null, items: StaticArray<ABCustomItem | null> | null, backgroundBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): PaintableForm {
        super.jinit_ABCustomForm_4(title, items, backgroundBasicColor, foregroundBasicColor);
        this.jfields_PaintableForm();
        this.setSelectedIndex(0); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    init(rectangle: Rectangle | null, formType: FormType | null): void {
        this.rectangle = rectangle;
        let point: GPoint | null = this.rectangle!.getPoint(); if (JThrowable.pending !== null) return;
        this.x = point!.getX(); if (JThrowable.pending !== null) return;
        this.y = point!.getY(); if (JThrowable.pending !== null) return;
        this.formType = formType;
    }
    

    getWidth(): i32 {
        return this.rectangle!.getWidth();
    }
}

