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
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.game.configuration.feature.InputFeatureFactory
// import org.allbinary.game.input.event.GameKeyEvent
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList

@global export class GameInput extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.GameInput";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    gameKeyEventList: BasicArrayList | null = null;
    removalGameKeyEventList: BasicArrayList | null = null;
    isRemoveDuplicateKeyPresses: bool = false;

    jfields_GameInput(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    
    
    
    }
    

    jinit_GameInput_2(gameKeyEventList: BasicArrayList | null, removalGameKeyEventList: BasicArrayList | null): GameInput {
        super.jinit_JObject_0();
        this.jfields_GameInput();
        this.gameKeyEventList = gameKeyEventList;
        this.removalGameKeyEventList = removalGameKeyEventList;
        this.isRemoveDuplicateKeyPresses = Features.getInstance()!.isFeature(InputFeatureFactory.getInstance()!.REMOVE_DUPLICATE_KEY_PRESSES); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    add(gameKeyEvent: GameKeyEvent | null): void {
        if (this.isRemoveDuplicateKeyPresses && this.gameKeyEventList!.contains(gameKeyEvent)) {
            return;
        } if (JThrowable.pending !== null) return;
        if (gameKeyEvent != null) {
            this.gameKeyEventList!.add(gameKeyEvent); if (JThrowable.pending !== null) return;
        } else {
            this.logUtil!.putF("Danger Passed Null GameKeyEvent", this, this.commonStrings!.ADD); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    addForRemoval(gameKeyEvent: GameKeyEvent | null): void {
        this.removalGameKeyEventList!.add(gameKeyEvent); if (JThrowable.pending !== null) return;
    }
    

    isForRemoval(gameKeyEvent: GameKeyEvent | null): bool {
        return this.removalGameKeyEventList!.contains(gameKeyEvent);
    }
    

    clear(): void {
        this.gameKeyEventList!.clear(); if (JThrowable.pending !== null) return;
    }
    

    removeNonAIInputGameKeyEvents(): void {
        let list: BasicArrayList | null = this.gameKeyEventList;
        let gameKeyEvent: GameKeyEvent | null = null;
        for (let index: i32 = list!.size(); --index >= 0; ) {
            gameKeyEvent = changetype<GameKeyEvent | null>(list!.objectArray![index]);
            if (gameKeyEvent!.getSourceId() != 1) {
                list!.removeAt(index); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    update(): void {
        let removeList: BasicArrayList | null = this.removalGameKeyEventList;
        let list: BasicArrayList | null = this.gameKeyEventList;
        let size: i32 = removeList!.size(); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < size; index++) {
            let anyType: Object | null = removeList!.objectArray![index];
            for (let index2: i32 = list!.size(); --index2 >= 0; ) {
                if (changetype<Object | null>(list!.objectArray![index2]) == anyType) {
                    list!.removeAt(index2); if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        removeList!.clear(); if (JThrowable.pending !== null) return;
    }
    

    getRemovalGameKeyEventList(): BasicArrayList | null {
        return this.removalGameKeyEventList;
    }
    

    getGameKeyEventList(): BasicArrayList | null {
        return this.gameKeyEventList;
    }
}

