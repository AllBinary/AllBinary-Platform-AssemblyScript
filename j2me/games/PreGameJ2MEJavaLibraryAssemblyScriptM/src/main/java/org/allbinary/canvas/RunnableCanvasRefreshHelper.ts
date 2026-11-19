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
// package org.allbinary.canvas
// import org.allbinary.graphics.displayable.MyCanvas

@global export class RunnableCanvasRefreshHelper extends Processor {

    jclassName(): string {
        return "org.allbinary.canvas.RunnableCanvasRefreshHelper";
    }
    runnableCanvas: MyCanvas | null = null;

    jfields_RunnableCanvasRefreshHelper(): void {
    
    }
    

    jinit_RunnableCanvasRefreshHelper_1(runnableCanvas: MyCanvas | null): RunnableCanvasRefreshHelper {
        super.jinit_Processor_0();
        this.jfields_RunnableCanvasRefreshHelper();
        this.runnableCanvas = runnableCanvas;
        return this;
    }
    

    process(): void {
        this.runnableCanvas!.repaint(); if (JThrowable.pending !== null) return;
    }
}

