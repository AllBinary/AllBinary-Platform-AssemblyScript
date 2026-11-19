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
// package org.allbinary.input.motion.button
// import org.allbinary.game.input.event.GameKeyEvent

@global export class ReleaseHelper extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.button.ReleaseHelper";
    }
    touchButtonRecognizer: TouchButtonRecognizer | null = null;

    jfields_ReleaseHelper(): void {
    
    }
    

    jinit_ReleaseHelper_1(touchButtonRecognizer: TouchButtonRecognizer | null): ReleaseHelper {
        super.jinit_JObject_0();
        this.jfields_ReleaseHelper();
        this.touchButtonRecognizer = touchButtonRecognizer;
        return this;
    }
    

    release(touchButtonInput: TouchButtonInput | null, deviceId: i32): void {
        let nextTouchButtonInput: TouchButtonInput | null = null;
        let gameKeyEvent: GameKeyEvent | null = null;
        for (let index: i32 = this.touchButtonRecognizer!.currentlyPressedTouchButtonSingleton!.size() - 1; index >= 0; index--) {
            nextTouchButtonInput = this.touchButtonRecognizer!.currentlyPressedTouchButtonSingleton!.get(index); if (JThrowable.pending !== null) return;
            gameKeyEvent = nextTouchButtonInput!.getGameKeyEvent(); if (JThrowable.pending !== null) return;
            this.touchButtonRecognizer!.upGameKeyEventHandler!.fireEvent(gameKeyEvent); if (JThrowable.pending !== null) return;
            this.touchButtonRecognizer!.upGameKeyEventHandler!.getInstanceForDevice(deviceId)!.fireEvent(gameKeyEvent); if (JThrowable.pending !== null) return;
            this.touchButtonRecognizer!.currentlyPressedTouchButtonSingleton!.removeAt(index); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

