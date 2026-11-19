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
// import org.allbinary.game.input.GameKey
// import org.allbinary.game.input.GameKeyEventSourceInterface
// import org.allbinary.game.input.Input
// import org.allbinary.game.input.InputFactory
// import org.allbinary.game.input.event.GameKeyEvent
// import org.allbinary.game.input.event.GameKeyEventFactory
// import org.allbinary.game.input.mapping.InputToGameKeyMapping
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class TouchButtonInput extends Input implements GameKeyEventSourceInterface {

    jclassName(): string {
        return "org.allbinary.input.motion.button.TouchButtonInput";
    }
    logUtil: LogUtil | null = null;
    gameKeyEventFactory: GameKeyEventFactory | null = null;
    TOUCH_BUTTON_SOURCE_ID: i32 = 0;
    gameKeyEvent: GameKeyEvent | null = null;

    jfields_TouchButtonInput(): void {
    this.logUtil = LogUtil.getInstance();
    this.gameKeyEventFactory = GameKeyEventFactory.getInstance();
    this.TOUCH_BUTTON_SOURCE_ID = this.gameKeyEventFactory!.TOUCH_BUTTON_SOURCE_ID;
    this.gameKeyEvent = GameKeyEvent.NONE;
    }
    

    jinit_TouchButtonInput_2(id: i32, name: string | null): TouchButtonInput {
        super.jinit_Input_2(id, name);
        this.jfields_TouchButtonInput();
        let inputFactory: InputFactory | null = InputFactory.getInstance(); if (JThrowable.pending !== null) return this;
        inputFactory!.add(this.getId(), this); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    update(inputToGameKeyMapping: InputToGameKeyMapping | null): void {
        do {
            let gameKey: GameKey | null = inputToGameKeyMapping!.getInstance1(this.getId()); if (JThrowable.pending !== null) break;
            this.gameKeyEvent = this.gameKeyEventFactory!.getInstanceForInput(this, gameKey); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.UPDATE, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    getSourceId(): i32 {
        return this.TOUCH_BUTTON_SOURCE_ID;
    }
    

    getGameKeyEvent(): GameKeyEvent | null {
        return this.gameKeyEvent;
    }
}

