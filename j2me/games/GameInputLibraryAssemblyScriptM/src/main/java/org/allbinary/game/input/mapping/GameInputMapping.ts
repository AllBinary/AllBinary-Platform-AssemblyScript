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
// package org.allbinary.game.input.mapping
// import org.allbinary.game.input.GameKey
// import org.allbinary.logic.string.StringUtil

@global export class GameInputMapping extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.mapping.GameInputMapping";
    }
    name: string | null = null;
    gameKey: GameKey | null = null;

    jfields_GameInputMapping(): void {
    this.name = StringUtil.getInstance()!.EMPTY_STRING;
    this.gameKey = GameKey.NULL_GAME_KEY;
    }
    

    jinit_GameInputMapping_2(name: string | null, gameKey: GameKey | null): GameInputMapping {
        super.jinit_JObject_0();
        this.jfields_GameInputMapping();
        this.setName(name); if (JThrowable.pending !== null) return this;
        this.setGameKey(gameKey); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    setGameKey(gameKey: GameKey | null): void {
        this.gameKey = gameKey;
    }
    

    getGameKey(): GameKey | null {
        return this.gameKey;
    }
    

    setName(name: string | null): void {
        this.name = name;
    }
    

    getName(): string | null {
        return this.name;
    }
}

