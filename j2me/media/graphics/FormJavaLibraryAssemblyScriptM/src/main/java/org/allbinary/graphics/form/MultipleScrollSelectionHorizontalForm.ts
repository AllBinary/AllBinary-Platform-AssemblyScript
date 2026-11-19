// Generated Code Do Not Modify
// package org.allbinary.graphics.form
// import javax.microedition.lcdui.Font
// import javax.microedition.lcdui.Graphics
// import org.allbinary.J2MEUtil
// import org.allbinary.graphics.Rectangle
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.font.MyFontProcessor
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.graphics.font.UpdateMyFontProcessor
// import org.allbinary.graphics.form.item.ABCustomItem
// import org.allbinary.graphics.paint.NullPaintable
// import org.allbinary.graphics.paint.Paintable
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.string.StringMaker

@global export class MultipleScrollSelectionHorizontalForm extends ScrollSelectionForm implements UpdateMyFontInterface {

    jclassName(): string {
        return "org.allbinary.graphics.form.MultipleScrollSelectionHorizontalForm";
    }
    rectPaintable: Paintable | null = null;
    multipleScrollSelectionHorizontalFormTypeItemIndexPaintable: ItemIndexPaintable | null = null;
    backgroundColor: i32 = 0;
    myFontProcessor: MyFontProcessor | null = null;
    logged: bool = false;
    fontHeight: i32 = 0;

    jfields_MultipleScrollSelectionHorizontalForm(): void {
    this.rectPaintable = NullPaintable.getInstance();
    this.multipleScrollSelectionHorizontalFormTypeItemIndexPaintable = ItemIndexPaintable.getInstance();
    this.backgroundColor = BasicColorFactory.getInstance()!.TRANSPARENT_GREY!.intValue();
    this.myFontProcessor = new UpdateMyFontProcessor().jinit_UpdateMyFontProcessor_1(this);
    this.logged = false;
    this.fontHeight = 0;
    }
    

    static createForm_7(title: string | null, items: StaticArray<ABCustomItem | null> | null, rectangle: Rectangle | null, formType: FormType | null, border: i32, backgroundBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): ScrollSelectionForm | null {
        let scrollSelectionForm: ScrollSelectionForm | null = new MultipleScrollSelectionHorizontalForm().jinit_MultipleScrollSelectionHorizontalForm_6(title, items, ItemPaintableFactory.getInstance(), border, backgroundBasicColor, foregroundBasicColor); if (JThrowable.pending !== null) return null;
        scrollSelectionForm!.init(rectangle, formType); if (JThrowable.pending !== null) return null;
        return scrollSelectionForm;
    }
    

    jinit_MultipleScrollSelectionHorizontalForm_6(title: string | null, items: StaticArray<ABCustomItem | null> | null, formPaintableFactory: ItemPaintableFactory | null, border: i32, backgroundBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): MultipleScrollSelectionHorizontalForm {
        super.jinit_ScrollSelectionForm_7(title, items, formPaintableFactory, border, 3, backgroundBasicColor, foregroundBasicColor);
        this.jfields_MultipleScrollSelectionHorizontalForm();
        if (J2MEUtil.isJ2ME() || J2MEUtil.isHTML()) {
        } else {
            this.rectPaintable = new MultipleScrollSelectionFormRectPaintable().jinit_MultipleScrollSelectionFormRectPaintable_1(this); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    fillRect(graphics: Graphics | null): void {
        graphics!.setColor(this.backgroundColor); if (JThrowable.pending !== null) return;
        graphics!.fillRect(this.x, this.y, this.rectangle!.getWidth(), this.rectangle!.getHeight()); if (JThrowable.pending !== null) return;
    }
    

    init(rectangle: Rectangle | null, formType: FormType | null): void {
        super.init(rectangle, formType); if (JThrowable.pending !== null) return;
        let formTypeFactory: FormTypeFactory | null = FormTypeFactory.getInstance(); if (JThrowable.pending !== null) return;
        if (formType == formTypeFactory!.HORIZONTAL_FORM) {
            this.multipleScrollSelectionHorizontalFormTypeItemIndexPaintable = new MultipleScrollSelectionFormHorizontalPaintable().jinit_MultipleScrollSelectionFormHorizontalPaintable_1(this); if (JThrowable.pending !== null) return;
        } else if (formType == formTypeFactory!.VERTICAL_CENTER_FORM) {
            this.multipleScrollSelectionHorizontalFormTypeItemIndexPaintable = new MultipleScrollSelectionFormVerticalPaintable().jinit_MultipleScrollSelectionFormVerticalPaintable_1(this); if (JThrowable.pending !== null) return;
        } else if (formType == formTypeFactory!.NULL_FORM_TYPE) {
        } else {
            { JThrowable.raise(new JException().jinit_JException_1(formTypeFactory!.UNK)); return; }
        } if (JThrowable.pending !== null) return;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        let font: Font | null = graphics!.getFont(); if (JThrowable.pending !== null) return;
        this.fontHeight = font!.getHeight(); if (JThrowable.pending !== null) return;
        this.myFontProcessor = MyFontProcessor.getInstance(); if (JThrowable.pending !== null) return;
    }
    

    paintHorizontal(graphics: Graphics | null, index: i32, item: ABCustomItem | null, dx: i32, dy: i32): i32 {
        let dx2: i32 = this.paintItem(graphics, index, item, dx, dy) + this.border; if (JThrowable.pending !== null) return 0;
        this.paintable!.paint(graphics, index, dx, dy); if (JThrowable.pending !== null) return 0;
        dx = dx2;
        return dx;
    }
    

    paintVertical(graphics: Graphics | null, index: i32, item: ABCustomItem | null, dx: i32, dy: i32): i32 {
        this.paintItem(graphics, index, item, dx, dy); if (JThrowable.pending !== null) return 0;
        this.paintable!.paint(graphics, index, dx, dy); if (JThrowable.pending !== null) return 0;
        return dx;
    }
    

    getStartIndex(): i32 {
        return this.getSelectedIndex();
    }
    

    paint(graphics: Graphics | null): void {
        do {
            this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) break;
            let start: i32 = this.getStartIndex(); if (JThrowable.pending !== null) break;
            let size: i32 = this.size(); if (JThrowable.pending !== null) break;
            let dx: i32 = this.x;
            let dy: i32 = this.y;
            this.rectPaintable!.paint(graphics); if (JThrowable.pending !== null) break;
            graphics!.drawString(this.getTitle(), this.x, this.y - this.fontHeight, 0); if (JThrowable.pending !== null) break;
            let item: ABCustomItem | null = null;
            for (let index: i32 = start; index < size; index++) {
                item = this.get(index); if (JThrowable.pending !== null) break;
                if (dx >= this.rectangle!.getMaxX()) {
                    if (this.logged) {
                    } else {
                        this.logged = true;
                        PreLogUtil.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("painting beyond maxx: ")!.appendint(this.rectangle!.getMaxX())), this, this.canvasStrings!.PAINT); if (JThrowable.pending !== null) break;
                    } if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
                dx = this.multipleScrollSelectionHorizontalFormTypeItemIndexPaintable!.paint(graphics, index, item, dx, dy); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            PreLogUtil.put(this.commonStrings!.EXCEPTION, this, this.canvasStrings!.PAINT); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

