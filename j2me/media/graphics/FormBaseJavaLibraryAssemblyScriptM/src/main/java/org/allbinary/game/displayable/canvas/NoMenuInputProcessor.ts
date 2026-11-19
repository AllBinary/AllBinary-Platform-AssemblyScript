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
// import javax.microedition.lcdui.NullCanvas
// import org.allbinary.game.input.event.GameKeyEvent
// import org.allbinary.input.motion.gesture.observer.MotionGestureEvent
// import org.allbinary.util.BasicArrayListUtil

@global export class NoMenuInputProcessor extends BasicMenuInputProcessor {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.NoMenuInputProcessor";
    }
    @lazy static jv_SINGLETON: NoMenuInputProcessor | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): NoMenuInputProcessor | null {
        if (!NoMenuInputProcessor.js_SINGLETON) {
            NoMenuInputProcessor.js_SINGLETON = true;
            NoMenuInputProcessor.jv_SINGLETON = new NoMenuInputProcessor().jinit_NoMenuInputProcessor_0();
        }
        return NoMenuInputProcessor.jv_SINGLETON;
    }
    static set SINGLETON(value: NoMenuInputProcessor | null) {
        NoMenuInputProcessor.js_SINGLETON = true;
        NoMenuInputProcessor.jv_SINGLETON = value;
    }
    

    static getInstance(): NoMenuInputProcessor | null {
        return NoMenuInputProcessor.SINGLETON;
    }
    

    jinit_NoMenuInputProcessor_0(): NoMenuInputProcessor {
        super.jinit_BasicMenuInputProcessor_3(BasicArrayListUtil.getInstance()!.getImmutableInstance(), -1, NullCanvas.NULL_CANVAS);
        return this;
    }
    

    onDownGameKeyEvent(gameKeyEvent: GameKeyEvent | null): void {
    }
    

    onUpGameKeyEvent(gameKeyEvent: GameKeyEvent | null): void {
    }
    

    onMotionGestureEvent(motionGestureEvent: MotionGestureEvent | null): void {
    }
}

