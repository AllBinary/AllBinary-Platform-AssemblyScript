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
// import org.allbinary.graphics.paint.Paintable

@global export class MultipleScrollSelectionFormRectPaintable extends Paintable {

    jclassName(): string {
        return "org.allbinary.graphics.form.MultipleScrollSelectionFormRectPaintable";
    }
    multipleScrollSelectionForm: MultipleScrollSelectionHorizontalForm | null = null;

    jfields_MultipleScrollSelectionFormRectPaintable(): void {
    
    }
    

    jinit_MultipleScrollSelectionFormRectPaintable_1(multipleScrollSelectionForm: MultipleScrollSelectionHorizontalForm | null): MultipleScrollSelectionFormRectPaintable {
        super.jinit_Paintable_0();
        this.jfields_MultipleScrollSelectionFormRectPaintable();
        this.multipleScrollSelectionForm = multipleScrollSelectionForm;
        return this;
    }
    

    paint(graphics: Graphics | null): void {
        this.multipleScrollSelectionForm!.fillRect(graphics); if (JThrowable.pending !== null) return;
    }
}

