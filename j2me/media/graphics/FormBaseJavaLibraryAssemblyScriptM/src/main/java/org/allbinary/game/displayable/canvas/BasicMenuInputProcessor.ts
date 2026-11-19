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
// package org.allbinary.game.displayable.canvas
// import javax.microedition.lcdui.Canvas
// import javax.microedition.lcdui.NullCanvas
// import org.allbinary.game.input.PlayerGameInput
// import org.allbinary.graphics.displayable.MyCanvas
// import org.allbinary.input.motion.gesture.observer.BaseMotionGestureEventListener
// import org.allbinary.input.motion.gesture.observer.MotionGestureEvent
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class BasicMenuInputProcessor extends PlayerGameInput implements BaseMotionGestureEventListener {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.BasicMenuInputProcessor";
    }
    motionGestureEventList: BasicArrayList | null = null;
    canvas: Canvas | null = null;

    jfields_BasicMenuInputProcessor(): void {
    this.motionGestureEventList = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.canvas = NullCanvas.NULL_CANVAS;
    }
    

    jinit_BasicMenuInputProcessor_3(gameKeyEventList: BasicArrayList | null, playerInputId: i32, gameCanvas: Canvas | null): BasicMenuInputProcessor {
        super.jinit_PlayerGameInput_3(gameKeyEventList, new BasicArrayListD().jinit_BasicArrayListD_0(), playerInputId);
        this.jfields_BasicMenuInputProcessor();
        this.canvas = gameCanvas;
        return this;
    }
    

    onMotionGestureEvent(motionGestureEvent: MotionGestureEvent | null): void {
        this.motionGestureEventList!.add(motionGestureEvent); if (JThrowable.pending !== null) return;
    }
    

    onScrolledMotionGestureEvent(motionGestureEvent: MotionGestureEvent | null): void {
    }
    

    setCanvas(canvas: MyCanvas | null): void {
        this.canvas = canvas;
    }
    

    getCanvas(): MyCanvas | null {
        return changetype<MyCanvas | null>(this.canvas);
    }
    

    processInputList(): i32 {
        return -1;
    }
}

