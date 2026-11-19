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
// import org.allbinary.graphics.form.item.ABCustomItem

@global export class MultipleScrollSelectionFormHorizontalPaintable extends ItemIndexPaintable {

    jclassName(): string {
        return "org.allbinary.graphics.form.MultipleScrollSelectionFormHorizontalPaintable";
    }
    multipleScrollSelectionForm: MultipleScrollSelectionHorizontalForm | null = null;

    jfields_MultipleScrollSelectionFormHorizontalPaintable(): void {
    
    }
    

    jinit_MultipleScrollSelectionFormHorizontalPaintable_1(multipleScrollSelectionForm: MultipleScrollSelectionHorizontalForm | null): MultipleScrollSelectionFormHorizontalPaintable {
        super.jinit_ItemIndexPaintable_0();
        this.jfields_MultipleScrollSelectionFormHorizontalPaintable();
        this.multipleScrollSelectionForm = multipleScrollSelectionForm;
        return this;
    }
    

    paint(graphics: Graphics | null, index: i32, item: ABCustomItem | null, dx: i32, dy: i32): i32 {
        return this.multipleScrollSelectionForm!.paintHorizontal(graphics, index, item, dx, dy);
    }
}

