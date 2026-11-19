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
// package org.allbinary.game.configuration.persistance

@global export class GameDifficultyFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.persistance.GameDifficultyFactory";
    }
    @lazy static jv_instance: GameDifficultyFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GameDifficultyFactory | null {
        if (!GameDifficultyFactory.js_instance) {
            GameDifficultyFactory.js_instance = true;
            GameDifficultyFactory.jv_instance = new GameDifficultyFactory().jinit_GameDifficultyFactory_0();
        }
        return GameDifficultyFactory.jv_instance;
    }
    static set instance(value: GameDifficultyFactory | null) {
        GameDifficultyFactory.js_instance = true;
        GameDifficultyFactory.jv_instance = value;
    }
    level: i32 = 0;

    jfields_GameDifficultyFactory(): void {
    this.level = 0;
    }

    jinit_GameDifficultyFactory_0(): GameDifficultyFactory {
        super.jinit_JObject_0();
        this.jfields_GameDifficultyFactory();
        return this;
    }
    

    static getInstance(): GameDifficultyFactory | null {
        return GameDifficultyFactory.instance;
    }
    

    setLevel(level: i32): void {
        this.level = level;
    }
    

    getLevel(): i32 {
        return this.level;
    }
}

