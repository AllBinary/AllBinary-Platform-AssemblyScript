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
// package org.allbinary.game.configuration
// import org.allbinary.logic.StdUtil
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class GameConfigurationSingleton extends JObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.GameConfigurationSingleton";
    }
    @lazy static jv_SINGLETON: GameConfigurationSingleton | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): GameConfigurationSingleton | null {
        if (!GameConfigurationSingleton.js_SINGLETON) {
            GameConfigurationSingleton.js_SINGLETON = true;
            GameConfigurationSingleton.jv_SINGLETON = new GameConfigurationSingleton().jinit_GameConfigurationSingleton_0();
        }
        return GameConfigurationSingleton.jv_SINGLETON;
    }
    static set SINGLETON(value: GameConfigurationSingleton | null) {
        GameConfigurationSingleton.js_SINGLETON = true;
        GameConfigurationSingleton.jv_SINGLETON = value;
    }
    list: BasicArrayList | null = null;
    hashtable: ABHashtable | null = null;

    jfields_GameConfigurationSingleton(): void {
    
    
    }
    

    static getInstance(): GameConfigurationSingleton | null {
        return GameConfigurationSingleton.SINGLETON;
    }
    

    jinit_GameConfigurationSingleton_0(): GameConfigurationSingleton {
        super.jinit_JObject_0();
        this.jfields_GameConfigurationSingleton();
        this.list = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return this;
        this.hashtable = StdUtil.getInstance()!.createHashtable(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getInstanceByName(name: string | null): GameConfiguration | null {
        return changetype<GameConfiguration | null>(this.hashtable!.get(name));
    }
    

    getOptionsBasicArrayList(): BasicArrayList | null {
        return this.list;
    }
    

    add(gameConfiguration: GameConfiguration | null): void {
        this.list!.add(gameConfiguration); if (JThrowable.pending !== null) return;
    }
    

    getHashtable(): ABHashtable | null {
        return this.hashtable;
    }
}

