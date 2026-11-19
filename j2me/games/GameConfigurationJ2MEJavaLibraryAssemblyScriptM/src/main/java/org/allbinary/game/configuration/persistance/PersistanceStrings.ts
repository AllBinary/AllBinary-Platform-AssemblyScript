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

@global export class PersistanceStrings extends JObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.persistance.PersistanceStrings";
    }
    @lazy static jv_instance: PersistanceStrings | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): PersistanceStrings | null {
        if (!PersistanceStrings.js_instance) {
            PersistanceStrings.js_instance = true;
            PersistanceStrings.jv_instance = new PersistanceStrings().jinit_PersistanceStrings_0();
        }
        return PersistanceStrings.jv_instance;
    }
    static set instance(value: PersistanceStrings | null) {
        PersistanceStrings.js_instance = true;
        PersistanceStrings.jv_instance = value;
    }
    SAVING: string | null = null;
    NUMBER_OF_RECORDS: string | null = null;
    LOADING_ID: string | null = null;
    LOAD_ALL: string | null = null;
    DELETING_WITH_ID: string | null = null;
    CLOSING_RECORDSTORE: string | null = null;
    NOT_SAVING: string | null = null;
    ERROR_LOADING: string | null = null;
    ERROR_LOADING_ID: string | null = null;
    ID: string | null = null;
    GAME_ACTION_INPUT: string | null = null;

    jfields_PersistanceStrings(): void {
    this.SAVING = "Saving: ";
    this.NUMBER_OF_RECORDS = "Number of records: ";
    this.LOADING_ID = "Loading data with id: ";
    this.LOAD_ALL = "loadAll";
    this.DELETING_WITH_ID = "Deleting data with id: ";
    this.CLOSING_RECORDSTORE = "Closing RecordStore";
    this.NOT_SAVING = "Not Saving: ";
    this.ERROR_LOADING = "Error Loading gameActionInput: ";
    this.ERROR_LOADING_ID = "Error Loading id: ";
    this.ID = " id: ";
    this.GAME_ACTION_INPUT = " GameActionInput: ";
    }

    jinit_PersistanceStrings_0(): PersistanceStrings {
        super.jinit_JObject_0();
        this.jfields_PersistanceStrings();
        return this;
    }
    

    static getInstance(): PersistanceStrings | null {
        return PersistanceStrings.instance;
    }
}

