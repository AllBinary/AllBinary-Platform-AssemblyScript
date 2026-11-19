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
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class GameInputProcessorComposite extends PlayerGameInput {

    jclassName(): string {
        return "org.allbinary.game.input.GameInputProcessorComposite";
    }
    name: string | null = null;
    gameInputProcessorInterface: GameInputProcessorInterface | null = null;
    NAME_LABEL: string | null = null;

    jfields_GameInputProcessorComposite(): void {
    
    
    this.NAME_LABEL = " GameInputProcessorInterface: ";
    }
    

    jinit_GameInputProcessorComposite_2(name: string | null, gameInputProcessorInterface: GameInputProcessorInterface | null): GameInputProcessorComposite {
        super.jinit_PlayerGameInput_3(new BasicArrayListD().jinit_BasicArrayListD_0(), new BasicArrayListD().jinit_BasicArrayListD_0(), -1);
        this.jfields_GameInputProcessorComposite();
        this.name = name;
        this.gameInputProcessorInterface = gameInputProcessorInterface;
        return this;
    }
    

    update(): void {
        do {
            let list: BasicArrayList | null = this.getGameKeyEventList(); if (JThrowable.pending !== null) break;
            this.gameInputProcessorInterface!.onInput(list); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(this.commonStrings!.EXCEPTION, this, this.commonStrings!.UPDATE, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    toString(): string | null {
        return JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(super.toString())!.append(this.NAME_LABEL)!.append(this.name));
    }
}

