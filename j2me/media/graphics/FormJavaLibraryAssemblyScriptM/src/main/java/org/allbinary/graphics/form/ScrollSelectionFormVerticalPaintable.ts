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

@global export class ScrollSelectionFormVerticalPaintable extends ItemIndexPaintable {

    jclassName(): string {
        return "org.allbinary.graphics.form.ScrollSelectionFormVerticalPaintable";
    }
    scrollSelectionForm: ScrollSelectionForm | null = null;

    jfields_ScrollSelectionFormVerticalPaintable(): void {
    
    }
    

    jinit_ScrollSelectionFormVerticalPaintable_1(scrollSelectionForm: ScrollSelectionForm | null): ScrollSelectionFormVerticalPaintable {
        super.jinit_ItemIndexPaintable_0();
        this.jfields_ScrollSelectionFormVerticalPaintable();
        this.scrollSelectionForm = scrollSelectionForm;
        return this;
    }
    

    paint(graphics: Graphics | null, index: i32, item: ABCustomItem | null, dx: i32, dy: i32): i32 {
        return this.scrollSelectionForm!.paintItemVertical(graphics, index, item, dx, dy);
    }
}

