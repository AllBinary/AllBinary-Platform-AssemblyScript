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

@global export class FormPaintable extends Paintable {

    jclassName(): string {
        return "org.allbinary.graphics.form.FormPaintable";
    }
    form: PaintableForm | null = null;

    jfields_FormPaintable(): void {
    
    }
    

    jinit_FormPaintable_1(form: PaintableForm | null): FormPaintable {
        super.jinit_Paintable_0();
        this.jfields_FormPaintable();
        this.form = form;
        return this;
    }
    

    paint(graphics: Graphics | null): void {
        this.form!.paint(graphics); if (JThrowable.pending !== null) return;
    }
    

    getForm(): PaintableForm | null {
        return this.form;
    }
}

