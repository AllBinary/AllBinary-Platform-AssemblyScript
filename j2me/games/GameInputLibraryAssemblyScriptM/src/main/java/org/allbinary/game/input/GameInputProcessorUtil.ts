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

@global export class GameInputProcessorUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.GameInputProcessorUtil";
    }

    jinit_GameInputProcessorUtil_0(): GameInputProcessorUtil {
        super.jinit_JObject_0();
        return this;
    }
    

    static init(inputProcessorArray: StaticArray<GameInputProcessor | null> | null): void {
        let noInputProcessor: GameInputProcessor | null = GameInputProcessor.getInstance(); if (JThrowable.pending !== null) return;
        let total: i32 = InputFactory.getInstance()!.MAX; if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < total; index++) {
            let inputProcessorCanBeNull: GameInputProcessor | null = inputProcessorArray![index];
            if (inputProcessorCanBeNull == null) {
                inputProcessorArray![index] = noInputProcessor;
            }
        }
    }
}

