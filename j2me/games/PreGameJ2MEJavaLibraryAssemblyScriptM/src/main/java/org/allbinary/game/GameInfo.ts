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
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonSeps
// import org.allbinary.logic.StdUtil
// import org.allbinary.string.CommonLabels
// import org.allbinary.util.ABHashtable

@global export class GameInfo extends JObject {

    jclassName(): string {
        return "org.allbinary.game.GameInfo";
    }
    @lazy static jv_NONE: GameInfo | null = null;
    @lazy static js_NONE: bool = false;
    static get NONE(): GameInfo | null {
        if (!GameInfo.js_NONE) {
            GameInfo.js_NONE = true;
            GameInfo.jv_NONE = new GameInfo().jinit_GameInfo_5(GameTypeFactory.getInstance()!.NONE, GameMode.NONE, PlayerTypesFactory.getInstance()!.PLAYER_TYPE_ONE, -1, -1);
        }
        return GameInfo.jv_NONE;
    }
    static set NONE(value: GameInfo | null) {
        GameInfo.js_NONE = true;
        GameInfo.jv_NONE = value;
    }
    @lazy static readonly LEVEL_NAME: string | null = "LEVEL";
    logUtil: LogUtil | null = null;
    gameInfoData: GameInfoData | null = null;
    gameType: GameType | null = null;
    gameMode: GameMode | null = null;
    playerType: PlayerType | null = null;
    highestLevel: i32 = 0;
    currentLevel: i32 = 0;
    NEW_LEVEL: string | null = null;
    SET_CURRENT_LEVEL: string | null = null;
    NEXT_GAME_LEVEL: string | null = null;

    jfields_GameInfo(): void {
    this.logUtil = LogUtil.getInstance();
    this.gameInfoData = GameInfoData.getInstance();
    
    
    
    this.highestLevel = 0;
    
    this.NEW_LEVEL = "New Level: ";
    this.SET_CURRENT_LEVEL = "setCurrentLevel";
    this.NEXT_GAME_LEVEL = "nextGameLevel";
    }
    

    jinit_GameInfo_5(gameType: GameType | null, gameMode: GameMode | null, playerType: PlayerType | null, highestLevel: i32, currentLevel: i32): GameInfo {
        super.jinit_JObject_0();
        this.jfields_GameInfo();
        this.gameType = gameType;
        this.gameMode = gameMode;
        this.setHighestLevel(highestLevel); if (JThrowable.pending !== null) return this;
        this.currentLevel = currentLevel;
        this.playerType = playerType;
        return this;
    }
    

    getGameType(): GameType | null {
        return this.gameType;
    }
    

    getGameMode(): GameMode | null {
        return this.gameMode;
    }
    

    getPlayerType(): PlayerType | null {
        return this.playerType;
    }
    

    getHighestLevel(): i32 {
        return this.highestLevel;
    }
    

    setHighestLevel(highestLevel: i32): void {
        this.highestLevel = highestLevel;
    }
    

    getCurrentLevel(): i32 {
        return this.currentLevel;
    }
    

    setCurrentLevel(currentLevel: i32): void {
        this.currentLevel = currentLevel;
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.NEW_LEVEL)!.appendint(this.getCurrentLevel())), this, this.SET_CURRENT_LEVEL); if (JThrowable.pending !== null) return;
    }
    

    nextGameLevel(): void {
        if (this.getCurrentLevel() < this.getHighestLevel()) {
            this.currentLevel++;
        } if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonLabels.getInstance()!.NEXT)!.append(CommonSeps.getInstance()!.SPACE)!.append(this.NEW_LEVEL)!.appendint(this.getCurrentLevel())), this, this.NEXT_GAME_LEVEL); if (JThrowable.pending !== null) return;
    }
    

    previousGameLevel(): void {
        if (this.getCurrentLevel() > 1) {
            this.currentLevel--;
        } if (JThrowable.pending !== null) return;
    }
    

    isLastLevel(): bool {
        if (this.getCurrentLevel() >= this.getHighestLevel()) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    toHashtable(): ABHashtable | null {
        let hashtable: ABHashtable | null = StdUtil.getInstance()!.createHashtable(); if (JThrowable.pending !== null) return null;
        hashtable!.put(this.gameInfoData!.GAME_TYPE, JObject.jtoString(this.getGameType())); if (JThrowable.pending !== null) return null;
        hashtable!.put(this.gameInfoData!.GAME_MODE, JObject.jtoString(this.gameMode)); if (JThrowable.pending !== null) return null;
        hashtable!.put(this.gameInfoData!.PLAYER_TYPE, JObject.jtoString(this.playerType)); if (JThrowable.pending !== null) return null;
        hashtable!.put(this.gameInfoData!.HIGHEST_LEVEL, JInteger.toString1(this.getHighestLevel())); if (JThrowable.pending !== null) return null;
        hashtable!.put(this.gameInfoData!.CURRENT_LEVEL, JInteger.toString1(this.currentLevel)); if (JThrowable.pending !== null) return null;
        return hashtable;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let commonSeps: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.gameInfoData!.GAME_TYPE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonSeps!.EQUALS); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(JObject.jtoString(this.getGameType())); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonSeps!.COMMA_SEP); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.gameInfoData!.GAME_MODE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonSeps!.EQUALS); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(JObject.jtoString(this.gameMode)); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonSeps!.COMMA_SEP); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.gameInfoData!.PLAYER_TYPE); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonSeps!.EQUALS); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(StringUtil.getInstance()!.toString1(this.playerType)); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonSeps!.COMMA_SEP); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.gameInfoData!.HIGHEST_LEVEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonSeps!.EQUALS); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.getHighestLevel()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonSeps!.COMMA_SEP); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.gameInfoData!.CURRENT_LEVEL); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonSeps!.EQUALS); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint(this.currentLevel); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

