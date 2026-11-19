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
// package org.allbinary.graphics.displayable.screen
// import javax.microedition.lcdui.Displayable
// import org.allbinary.canvas.Processor

@global export class ScreenRepaintProcessor extends Processor {

    jclassName(): string {
        return "org.allbinary.graphics.displayable.screen.ScreenRepaintProcessor";
    }
    displayable: Displayable | null = null;

    jfields_ScreenRepaintProcessor(): void {
    
    }
    

    jinit_ScreenRepaintProcessor_1(displayable: Displayable | null): ScreenRepaintProcessor {
        super.jinit_Processor_0();
        this.jfields_ScreenRepaintProcessor();
        this.displayable = displayable;
        return this;
    }
    

    process(): void {
        ScreenRepaintUtil.repaint(this.displayable); if (JThrowable.pending !== null) return;
    }
}

