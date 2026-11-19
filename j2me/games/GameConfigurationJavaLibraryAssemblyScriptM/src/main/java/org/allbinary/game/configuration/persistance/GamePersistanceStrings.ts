/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// package org.allbinary.game.configuration.persistance

@global export class GamePersistanceStrings extends JObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.persistance.GamePersistanceStrings";
    }
    @lazy static jv_instance: GamePersistanceStrings | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GamePersistanceStrings | null {
        if (!GamePersistanceStrings.js_instance) {
            GamePersistanceStrings.js_instance = true;
            GamePersistanceStrings.jv_instance = new GamePersistanceStrings().jinit_GamePersistanceStrings_0();
        }
        return GamePersistanceStrings.jv_instance;
    }
    static set instance(value: GamePersistanceStrings | null) {
        GamePersistanceStrings.js_instance = true;
        GamePersistanceStrings.jv_instance = value;
    }
    SAVED_GAME_RECORD_ID: string | null = null;
    SAVED_GAME_CONFIGURATION_RECORD_ID: string | null = null;
    DEFAULT_INPUT_MAPPING_RECORD_ID: string | null = null;
    SAVED_INPUT_CONFIGURATION_RECORD_ID: string | null = null;

    jfields_GamePersistanceStrings(): void {
    this.SAVED_GAME_RECORD_ID = "_SG";
    this.SAVED_GAME_CONFIGURATION_RECORD_ID = "_SGC";
    this.DEFAULT_INPUT_MAPPING_RECORD_ID = "_DIM";
    this.SAVED_INPUT_CONFIGURATION_RECORD_ID = "_SIC";
    }

    jinit_GamePersistanceStrings_0(): GamePersistanceStrings {
        super.jinit_JObject_0();
        this.jfields_GamePersistanceStrings();
        return this;
    }
    

    static getInstance(): GamePersistanceStrings | null {
        return GamePersistanceStrings.instance;
    }
}

