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
// import javax.microedition.lcdui.Command
// import javax.microedition.lcdui.Graphics
// import org.allbinary.J2MEUtil
// import org.allbinary.animation.Animation
// import org.allbinary.animation.NullAnimationFactory
// import org.allbinary.animation.vector.RectangleAdjustedAnimation
// import org.allbinary.animation.vector.RectangleFilledAdjustedAnimation
// import org.allbinary.graphics.color.BasicColor
// import org.allbinary.graphics.color.BasicColorFactory
// import org.allbinary.graphics.font.UpdateMyFontInterface
// import org.allbinary.graphics.form.item.CommandTextItem
// import org.allbinary.graphics.form.item.ABCustomItem

@global export class CommandCurrentSelectionForm extends ScrollCurrentSelectionForm implements UpdateMyFontInterface {

    jclassName(): string {
        return "org.allbinary.graphics.form.CommandCurrentSelectionForm";
    }
    selectedAnimationArray: StaticArray<Animation | null> | null = null;
    unSelectedAnimationArray: StaticArray<Animation | null> | null = null;

    jfields_CommandCurrentSelectionForm(): void {
    this.selectedAnimationArray = new StaticArray<Animation | null>(16);
    this.unSelectedAnimationArray = new StaticArray<Animation | null>(16);
    }
    

    jinit_CommandCurrentSelectionForm_6(title: string | null, items: StaticArray<ABCustomItem | null> | null, border: i32, moveForSmallScreen: bool, backgroundBasicColor: BasicColor | null, foregroundBasicColor: BasicColor | null): CommandCurrentSelectionForm {
        super.jinit_ScrollCurrentSelectionForm_8(title, items, ItemPaintableFactory.getInstance(), border, -3, moveForSmallScreen, backgroundBasicColor, foregroundBasicColor);
        this.jfields_CommandCurrentSelectionForm();
        this.initAnimations(); if (JThrowable.pending !== null) return this;
        this.addAll(items); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    updateMeasurement(graphics: Graphics | null): void {
        this.updateAll(graphics, this.getAllitems()); if (JThrowable.pending !== null) return;
        super.updateMeasurement(graphics); if (JThrowable.pending !== null) return;
    }
    

    initAnimations(): void {
        let nullAnimation: Animation | null = NullAnimationFactory.getFactoryInstance()!.getInstance1(0); if (JThrowable.pending !== null) return;
        for (let index: i32 = this.selectedAnimationArray!.length; --index >= 0; ) {
            this.selectedAnimationArray![index] = nullAnimation;
        }
        for (let index: i32 = this.unSelectedAnimationArray!.length; --index >= 0; ) {
            this.unSelectedAnimationArray![index] = nullAnimation;
        }
    }
    

    addAll(items: StaticArray<ABCustomItem | null> | null): void {
        for (let index: i32 = items!.length; --index >= 0; ) {
            this.addAt(index, items![index]); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    addAt(index: i32, item: ABCustomItem | null): void {
        let basicColorFactory: BasicColorFactory | null = BasicColorFactory.getInstance(); if (JThrowable.pending !== null) return;
        let buttonColor: BasicColor | null = basicColorFactory!.TRANSPARENT_GREY;
        let selectedButtonColor: BasicColor | null = basicColorFactory!.TRANSPARENT_RED;
        let width: i32 = item!.getMinimumWidth(); if (JThrowable.pending !== null) return;
        let height: i32 = item!.getMinimumHeight(); if (JThrowable.pending !== null) return;
        let adjustedBorder: i32 = 3;
        let offset: i32 = -(this.halfBorder + adjustedBorder);
        let rectWidth: i32 = width + this.border - adjustedBorder;
        let rectHeight: i32 = height + this.border - adjustedBorder;
        if (J2MEUtil.isJ2ME() || J2MEUtil.isHTML()) {
            this.selectedAnimationArray![index] = new RectangleAdjustedAnimation().jinit_RectangleAdjustedAnimation_5(rectWidth, rectHeight, offset, offset, selectedButtonColor); if (JThrowable.pending !== null) return;
        } else {
            this.selectedAnimationArray![index] = new RectangleFilledAdjustedAnimation().jinit_RectangleFilledAdjustedAnimation_5(rectWidth, rectHeight, offset, offset, selectedButtonColor); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        adjustedBorder = 4;
        if (J2MEUtil.isJ2ME() || J2MEUtil.isHTML()) {
            this.unSelectedAnimationArray![index] = new RectangleAdjustedAnimation().jinit_RectangleAdjustedAnimation_5(rectWidth, rectHeight, offset, offset, buttonColor); if (JThrowable.pending !== null) return;
        } else {
            this.unSelectedAnimationArray![index] = new RectangleFilledAdjustedAnimation().jinit_RectangleFilledAdjustedAnimation_5(rectWidth, rectHeight, offset, offset, buttonColor); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    updateAll(graphics: Graphics | null, items: StaticArray<ABCustomItem | null> | null): void {
        for (let index: i32 = items!.length; --index >= 0; ) {
            items![index]!.preMeasurement(graphics); if (JThrowable.pending !== null) return;
            this.updateAt(index, items![index]); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    updateAt(index: i32, item: ABCustomItem | null): void {
        let basicColorFactory: BasicColorFactory | null = BasicColorFactory.getInstance(); if (JThrowable.pending !== null) return;
        let buttonColor: BasicColor | null = basicColorFactory!.TRANSPARENT_GREY;
        let selectedButtonColor: BasicColor | null = basicColorFactory!.TRANSPARENT_RED;
        let width: i32 = item!.getMinimumWidth(); if (JThrowable.pending !== null) return;
        let height: i32 = item!.getMinimumHeight(); if (JThrowable.pending !== null) return;
        let adjustedBorder: i32 = 3;
        let offset: i32 = -(this.halfBorder + adjustedBorder);
        let rectWidth: i32 = width + this.border - adjustedBorder;
        let rectHeight: i32 = height + this.border - adjustedBorder;
        if (J2MEUtil.isJ2ME() || J2MEUtil.isHTML()) {
            let rectangleAdjustedAnimation: RectangleAdjustedAnimation | null = changetype<RectangleAdjustedAnimation | null>(this.selectedAnimationArray![index]);
            rectangleAdjustedAnimation!.setWidth(rectWidth); if (JThrowable.pending !== null) return;
            rectangleAdjustedAnimation!.setHeight(rectHeight); if (JThrowable.pending !== null) return;
            rectangleAdjustedAnimation!.setOffsetX(offset); if (JThrowable.pending !== null) return;
            rectangleAdjustedAnimation!.setOffsetY(offset); if (JThrowable.pending !== null) return;
            rectangleAdjustedAnimation!.setBasicColorP(selectedButtonColor); if (JThrowable.pending !== null) return;
        } else {
            let rectangleAdjustedAnimation: RectangleFilledAdjustedAnimation | null = changetype<RectangleFilledAdjustedAnimation | null>(this.selectedAnimationArray![index]);
            rectangleAdjustedAnimation!.setWidth(rectWidth); if (JThrowable.pending !== null) return;
            rectangleAdjustedAnimation!.setHeight(rectHeight); if (JThrowable.pending !== null) return;
            rectangleAdjustedAnimation!.setOffsetX(offset); if (JThrowable.pending !== null) return;
            rectangleAdjustedAnimation!.setOffsetY(offset); if (JThrowable.pending !== null) return;
            rectangleAdjustedAnimation!.setBasicColorP(selectedButtonColor); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        adjustedBorder = 4;
        if (J2MEUtil.isJ2ME() || J2MEUtil.isHTML()) {
            let rectangleAdjustedAnimation: RectangleAdjustedAnimation | null = changetype<RectangleAdjustedAnimation | null>(this.unSelectedAnimationArray![index]);
            rectangleAdjustedAnimation!.setWidth(rectWidth); if (JThrowable.pending !== null) return;
            rectangleAdjustedAnimation!.setHeight(rectHeight); if (JThrowable.pending !== null) return;
            rectangleAdjustedAnimation!.setOffsetX(offset); if (JThrowable.pending !== null) return;
            rectangleAdjustedAnimation!.setOffsetY(offset); if (JThrowable.pending !== null) return;
            rectangleAdjustedAnimation!.setBasicColorP(buttonColor); if (JThrowable.pending !== null) return;
        } else {
            let rectangleAdjustedAnimation: RectangleFilledAdjustedAnimation | null = changetype<RectangleFilledAdjustedAnimation | null>(this.unSelectedAnimationArray![index]);
            rectangleAdjustedAnimation!.setWidth(rectWidth); if (JThrowable.pending !== null) return;
            rectangleAdjustedAnimation!.setHeight(rectHeight); if (JThrowable.pending !== null) return;
            rectangleAdjustedAnimation!.setOffsetX(offset); if (JThrowable.pending !== null) return;
            rectangleAdjustedAnimation!.setOffsetY(offset); if (JThrowable.pending !== null) return;
            rectangleAdjustedAnimation!.setBasicColorP(buttonColor); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getSelectedCommand(): Command | null {
        let index: i32 = super.getSelectedIndex(); if (JThrowable.pending !== null) return null;
        let commandTextItem: CommandTextItem | null = changetype<CommandTextItem | null>(this.get(index)); if (JThrowable.pending !== null) return null;
        return commandTextItem!.getCommand();
    }
    

    append(item: ABCustomItem | null): i32 {
        let result: i32 = super.append(item); if (JThrowable.pending !== null) return 0;
        this.addAt(result, item); if (JThrowable.pending !== null) return 0;
        return result;
    }
    

    delete_(itemNum: i32): void {
        super.delete_(itemNum); if (JThrowable.pending !== null) return;
    }
    

    deleteAll(): void {
        this.initAnimations(); if (JThrowable.pending !== null) return;
        super.deleteAll(); if (JThrowable.pending !== null) return;
    }
    

    insert(itemNum: i32, item: ABCustomItem | null): void {
        super.insert(itemNum, item); if (JThrowable.pending !== null) return;
    }
    

    set(itemNum: i32, item: ABCustomItem | null): void {
        super.set(itemNum, item); if (JThrowable.pending !== null) return;
    }
    

    paint(graphics: Graphics | null): void {
        this.myFontProcessor!.process(graphics); if (JThrowable.pending !== null) return;
        super.paint(graphics); if (JThrowable.pending !== null) return;
    }
    

    paintItem(graphics: Graphics | null, index: i32, item: ABCustomItem | null, x: i32, y: i32): i32 {
        this.selectedAnimationArray![index]!.paintXY(graphics, x, y); if (JThrowable.pending !== null) return 0;
        return super.paintItem(graphics, index, item, x, y);
    }
    

    paintUnselectedItem(graphics: Graphics | null, index: i32, item: ABCustomItem | null, x: i32, y: i32): i32 {
        this.unSelectedAnimationArray![index]!.paintXY(graphics, x, y); if (JThrowable.pending !== null) return 0;
        return super.paintUnselectedItem(graphics, index, item, x, y);
    }
}

