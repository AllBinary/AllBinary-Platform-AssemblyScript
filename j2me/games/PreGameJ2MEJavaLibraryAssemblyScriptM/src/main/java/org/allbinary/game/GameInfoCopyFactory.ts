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
// package org.allbinary.game

@global export class GameInfoCopyFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.GameInfoCopyFactory";
    }

    jinit_GameInfoCopyFactory_0(): GameInfoCopyFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstanceMaxLevel(gameInfo: GameInfo | null, maxLevel: i32): GameInfo | null {
        return new GameInfo().jinit_GameInfo_5(gameInfo!.getGameType(), gameInfo!.getGameMode(), gameInfo!.getPlayerType(), maxLevel, gameInfo!.getCurrentLevel());
    }
    

    static getInstance1(gameInfo: GameInfo | null): GameInfo | null {
        return new GameInfo().jinit_GameInfo_5(gameInfo!.getGameType(), gameInfo!.getGameMode(), gameInfo!.getPlayerType(), gameInfo!.getHighestLevel(), gameInfo!.getCurrentLevel());
    }
}

