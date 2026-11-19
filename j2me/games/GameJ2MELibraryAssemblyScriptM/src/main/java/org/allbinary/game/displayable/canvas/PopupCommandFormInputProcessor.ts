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
// import org.allbinary.graphics.displayable.MyCanvas
// import org.allbinary.graphics.form.ScrollSelectionForm
// import org.allbinary.input.motion.gesture.observer.MotionGestureEvent
// import org.allbinary.util.BasicArrayList

@global export class PopupCommandFormInputProcessor extends CommandFormInputProcessor {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.PopupCommandFormInputProcessor";
    }
    

    jinit_PopupCommandFormInputProcessor_5(gameKeyEventList: BasicArrayList | null, playerInputId: i32, gameCanvas: MyCanvas | null, form: ScrollSelectionForm | null, popupMenuInputProcessor: PopupMenuInputProcessor | null): PopupCommandFormInputProcessor {
        super.jinit_CommandFormInputProcessor_4(gameKeyEventList, playerInputId, gameCanvas, form);
        return this;
    }
    

    processInput(key: i32): i32 {
        return super.processInput(key);
    }
    

    processMotionInput(motionGestureEvent: MotionGestureEvent | null): void {
        super.processMotionInput(motionGestureEvent); if (JThrowable.pending !== null) return;
    }
}

