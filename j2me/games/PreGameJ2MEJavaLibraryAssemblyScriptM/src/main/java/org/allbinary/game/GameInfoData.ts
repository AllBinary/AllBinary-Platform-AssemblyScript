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

@global export class GameInfoData extends JObject {

    jclassName(): string {
        return "org.allbinary.game.GameInfoData";
    }
    @lazy static jv_instance: GameInfoData | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GameInfoData | null {
        if (!GameInfoData.js_instance) {
            GameInfoData.js_instance = true;
            GameInfoData.jv_instance = new GameInfoData().jinit_GameInfoData_0();
        }
        return GameInfoData.jv_instance;
    }
    static set instance(value: GameInfoData | null) {
        GameInfoData.js_instance = true;
        GameInfoData.jv_instance = value;
    }
    GAME_TYPE: string | null = null;
    GAME_MODE: string | null = null;
    PLAYER_TYPE: string | null = null;
    HIGHEST_LEVEL: string | null = null;
    CURRENT_LEVEL: string | null = null;
    SOFTWARE_INFORMATION: string | null = null;

    jfields_GameInfoData(): void {
    this.GAME_TYPE = "GAME_TYPE";
    this.GAME_MODE = "GAME_MODE";
    this.PLAYER_TYPE = "PLAYER_TYPE";
    this.HIGHEST_LEVEL = "HIGHEST_LEVEL";
    this.CURRENT_LEVEL = "CURRENT_LEVEL";
    this.SOFTWARE_INFORMATION = "SOFTWARE_INFORMATION";
    }
    

    static getInstance(): GameInfoData | null {
        return GameInfoData.instance;
    }
    

    jinit_GameInfoData_0(): GameInfoData {
        super.jinit_JObject_0();
        this.jfields_GameInfoData();
        return this;
    }
}

