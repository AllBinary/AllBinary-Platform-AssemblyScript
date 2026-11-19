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
// import org.allbinary.canvas.Processor

@global export class TempHorizontalFormProcessor extends Processor {

    jclassName(): string {
        return "org.allbinary.graphics.form.TempHorizontalFormProcessor";
    }
    scrollCurrentSelectionForm: ScrollCurrentSelectionForm | null = null;

    jfields_TempHorizontalFormProcessor(): void {
    
    }
    

    jinit_TempHorizontalFormProcessor_1(scrollCurrentSelectionForm: ScrollCurrentSelectionForm | null): TempHorizontalFormProcessor {
        super.jinit_Processor_0();
        this.jfields_TempHorizontalFormProcessor();
        this.scrollCurrentSelectionForm = scrollCurrentSelectionForm;
        return this;
    }
    

    process(): void {
        this.scrollCurrentSelectionForm!.processTempHorizontalForm(); if (JThrowable.pending !== null) return;
        this.scrollCurrentSelectionForm!.processor = Processor.getInstance(); if (JThrowable.pending !== null) return;
    }
}

