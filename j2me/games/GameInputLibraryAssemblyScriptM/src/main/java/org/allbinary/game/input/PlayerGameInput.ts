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
// package org.allbinary.game.input
// import org.allbinary.game.input.event.GameKeyEvent
// import org.allbinary.game.input.event.GameKeyEventListenerInterface
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventStrings
// import org.allbinary.string.CommonLabels
// import org.allbinary.util.BasicArrayList

@global export class PlayerGameInput extends GameInput implements GameKeyEventListenerInterface {

    jclassName(): string {
        return "org.allbinary.game.input.PlayerGameInput";
    }
    gameInputStrings: GameInputStrings | null = null;
    playerInputId: i32 = 0;

    jfields_PlayerGameInput(): void {
    this.gameInputStrings = GameInputStrings.getInstance();
    
    }
    

    jinit_PlayerGameInput_3(gameKeyEventList: BasicArrayList | null, removalGameKeyEventList: BasicArrayList | null, playerInputId: i32): PlayerGameInput {
        super.jinit_GameInput_2(gameKeyEventList, removalGameKeyEventList);
        this.jfields_PlayerGameInput();
        this.playerInputId = playerInputId;
        return this;
    }
    

    onPressGameKeyEvent(gameKeyEvent: GameKeyEvent | null): void {
        this.add(gameKeyEvent); if (JThrowable.pending !== null) return;
        this.addForRemoval(gameKeyEvent); if (JThrowable.pending !== null) return;
    }
    

    onDownGameKeyEvent(gameKeyEvent: GameKeyEvent | null): void {
        this.add(gameKeyEvent); if (JThrowable.pending !== null) return;
    }
    

    onDownKeyEvent(gameKeyEvent: GameKeyEvent | null): void {
        this.add(gameKeyEvent); if (JThrowable.pending !== null) return;
        this.addForRemoval(gameKeyEvent); if (JThrowable.pending !== null) return;
    }
    

    onDownKey(gameKeyEvent: JInteger | null): void {
        PreLogUtil.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonLabels.getInstance()!.START_LABEL)!.append(JObject.jtoString(gameKeyEvent))), this, this.gameInputStrings!.ON_DOWN_GAME_KEY); if (JThrowable.pending !== null) return;
    }
    

    onUpGameKeyEvent(gameKeyEvent: GameKeyEvent | null): void {
        this.addForRemoval(gameKeyEvent); if (JThrowable.pending !== null) return;
    }
    

    onUpKeyEvent(gameKeyEvent: JInteger | null): void {
    }
    

    onEvent(eventObject: AllBinaryEventObject | null): void {
        ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this); if (JThrowable.pending !== null) return;
    }
    

    getPlayerInputId(): i32 {
        return this.playerInputId;
    }
}

