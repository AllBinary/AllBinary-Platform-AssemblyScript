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

@global export class TempHorizontalItemIndexDx extends ItemIndexDx {

    jclassName(): string {
        return "org.allbinary.graphics.form.TempHorizontalItemIndexDx";
    }
    scrollCurrentSelectionForm: ScrollCurrentSelectionForm | null = null;

    jfields_TempHorizontalItemIndexDx(): void {
    
    }
    

    jinit_TempHorizontalItemIndexDx_1(scrollCurrentSelectionForm: ScrollCurrentSelectionForm | null): TempHorizontalItemIndexDx {
        super.jinit_ItemIndexDx_0();
        this.jfields_TempHorizontalItemIndexDx();
        this.scrollCurrentSelectionForm = scrollCurrentSelectionForm;
        return this;
    }
    

    getDx(index: i32, item: ABCustomItem | null, dx: i32, dy: i32): i32 {
        return this.scrollCurrentSelectionForm!.getXTempHorizontalForm(index, item, dx, dy);
    }
}

