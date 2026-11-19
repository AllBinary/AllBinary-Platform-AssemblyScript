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
// import org.allbinary.game.input.event.GameKeyEvent
// import org.allbinary.graphics.form.ScrollSelectionForm
// import org.allbinary.input.motion.gesture.observer.MotionGestureEvent
// import org.allbinary.time.TimeDelayHelper
// import org.allbinary.util.BasicArrayList

@global export class ImmediateCommandFormInputProcessor extends CommandFormInputProcessor {

    jclassName(): string {
        return "org.allbinary.game.displayable.canvas.ImmediateCommandFormInputProcessor";
    }
    timeHelper: TimeDelayHelper | null = null;
    gameCommandCanvas: GameCommandCanvas | null = null;

    jfields_ImmediateCommandFormInputProcessor(): void {
    this.timeHelper = new TimeDelayHelper().jinit_TimeDelayHelper_1(25);
    
    }
    

    jinit_ImmediateCommandFormInputProcessor_4(gameKeyEventList: BasicArrayList | null, playerInputId: i32, gameCommandCanvas: GameCommandCanvas | null, form: ScrollSelectionForm | null): ImmediateCommandFormInputProcessor {
        super.jinit_CommandFormInputProcessor_4(gameKeyEventList, playerInputId, gameCommandCanvas, form);
        this.jfields_ImmediateCommandFormInputProcessor();
        this.gameCommandCanvas = gameCommandCanvas;
        return this;
    }
    

    onPressGameKeyEvent(gameKeyEvent: GameKeyEvent | null): void {
        do {
            super.onPressGameKeyEvent(gameKeyEvent); if (JThrowable.pending !== null) break;
            if (this.timeHelper!.isTimeTNT()) {
                this.processInputList(); if (JThrowable.pending !== null) break;
                this.gameCommandCanvas!.repaintBehavior!.onChangeRepaint(this.getCanvas()); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.gameInputStrings!.ON_PRESS_GAME_KEY, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    onDownGameKeyEvent(gameKeyEvent: GameKeyEvent | null): void {
        do {
            super.onDownGameKeyEvent(gameKeyEvent); if (JThrowable.pending !== null) break;
            if (this.timeHelper!.isTimeTNT()) {
                this.processInputList(); if (JThrowable.pending !== null) break;
                this.gameCommandCanvas!.repaintBehavior!.onChangeRepaint(this.getCanvas()); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.gameInputStrings!.ON_DOWN_GAME_KEY, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    onUpGameKeyEvent(gameKeyEvent: GameKeyEvent | null): void {
        do {
            super.onUpGameKeyEvent(gameKeyEvent); if (JThrowable.pending !== null) break;
            if (this.timeHelper!.isTimeTNT()) {
                this.processInputList(); if (JThrowable.pending !== null) break;
                this.gameCommandCanvas!.repaintBehavior!.onChangeRepaint(this.getCanvas()); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.gameInputStrings!.ON_UP_GAME_KEY, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    onMotionGestureEvent(motionGestureEvent: MotionGestureEvent | null): void {
        do {
            super.onMotionGestureEvent(motionGestureEvent); if (JThrowable.pending !== null) break;
            if (this.timeHelper!.isTimeTNT()) {
                this.processInputList(); if (JThrowable.pending !== null) break;
                this.gameCommandCanvas!.repaintBehavior!.onChangeRepaint(this.getCanvas()); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, "onMotionGestureEvent", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

