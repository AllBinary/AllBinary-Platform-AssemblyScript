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
// package org.allbinary.midlet
// import javax.microedition.midlet.MIDlet
// import org.allbinary.canvas.Processor

@global export class MidletExitProcessor extends Processor {

    jclassName(): string {
        return "org.allbinary.midlet.MidletExitProcessor";
    }
    midlet: MIDlet | null = null;

    jfields_MidletExitProcessor(): void {
    
    }
    

    jinit_MidletExitProcessor_1(midlet: MIDlet | null): MidletExitProcessor {
        super.jinit_Processor_0();
        this.jfields_MidletExitProcessor();
        this.midlet = midlet;
        return this;
    }
    

    process(): void {
    }
}

