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
// import org.allbinary.graphics.form.item.ABCustomItem

@global export class ScrollSelectionFormVericalDx extends ItemIndexDx {

    jclassName(): string {
        return "org.allbinary.graphics.form.ScrollSelectionFormVericalDx";
    }
    scrollSelectionForm: ScrollSelectionForm | null = null;

    jfields_ScrollSelectionFormVericalDx(): void {
    
    }
    

    jinit_ScrollSelectionFormVericalDx_1(scrollSelectionForm: ScrollSelectionForm | null): ScrollSelectionFormVericalDx {
        super.jinit_ItemIndexDx_0();
        this.jfields_ScrollSelectionFormVericalDx();
        this.scrollSelectionForm = scrollSelectionForm;
        return this;
    }
    

    getDx(index: i32, item: ABCustomItem | null, dx: i32, dy: i32): i32 {
        return this.scrollSelectionForm!.getSelectedIndexForPointVerticalDx(index, item, dx, dy);
    }
}

