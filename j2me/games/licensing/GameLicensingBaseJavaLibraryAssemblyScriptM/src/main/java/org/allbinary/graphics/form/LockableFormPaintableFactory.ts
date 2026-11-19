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

@global export class LockableFormPaintableFactory extends ItemPaintableFactory {

    jclassName(): string {
        return "org.allbinary.graphics.form.LockableFormPaintableFactory";
    }
    lockedIndex: i32 = 0;

    jfields_LockableFormPaintableFactory(): void {
    
    }
    

    jinit_LockableFormPaintableFactory_1(lockedIndex: i32): LockableFormPaintableFactory {
        super.jinit_ItemPaintableFactory_0();
        this.jfields_LockableFormPaintableFactory();
        this.lockedIndex = lockedIndex;
        return this;
    }
    

    getInstanceItemPaintable(paintableForm: PaintableForm | null): ItemPaintable | null {
        return new LockablePaintable().jinit_LockablePaintable_1(this.lockedIndex);
    }
}

