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
// import org.allbinary.game.configuration.persistance.GameConfigurationPersistanceSingleton
// import org.allbinary.game.configuration.persistance.KeyValuePersistance
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface
// import org.allbinary.string.CommonSeps
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.ABHashtable
// import org.allbinary.util.BasicArrayList

@global export class GameConfigurationCentral extends JObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.GameConfigurationCentral";
    }
    @lazy static jv_SINGLETON: Object | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): Object | null {
        if (!GameConfigurationCentral.js_SINGLETON) {
            GameConfigurationCentral.js_SINGLETON = true;
            GameConfigurationCentral.jv_SINGLETON = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return GameConfigurationCentral.jv_SINGLETON;
    }
    static set SINGLETON(value: Object | null) {
        GameConfigurationCentral.js_SINGLETON = true;
        GameConfigurationCentral.jv_SINGLETON = value;
    }
    logUtil: LogUtil | null = null;
    SCALE: GameConfiguration | null = null;
    ORIENTATION: GameConfiguration | null = null;
    SENSOR_UPDATE_RATE: GameConfiguration | null = null;
    VIBRATION: GameConfiguration | null = null;
    CHALLENGE_LEVEL: GameConfiguration | null = null;
    COLLIDE_DAMAGE: GameConfiguration | null = null;
    DURABILITY_CHALLENGE_LEVEL: GameConfiguration | null = null;
    SPEED_CHALLENGE_LEVEL: GameConfiguration | null = null;
    ATTACK_CHALLENGE_LEVEL: GameConfiguration | null = null;
    CONTROL_LEVEL: GameConfiguration | null = null;
    PLAYER_INPUT_WAIT: GameConfiguration | null = null;
    SPEED: GameConfiguration | null = null;
    SOUND_VOLUME: GameConfiguration | null = null;
    MAX_GAME_OBJECTS: GameConfiguration | null = null;
    MAX_LAYERS: GameConfiguration | null = null;
    gameControlFidelity: i32 = 0;

    jfields_GameConfigurationCentral(): void {
    this.logUtil = LogUtil.getInstance();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    this.gameControlFidelity = 36;
    }
    

    static getInstance(): GameConfigurationCentral | null {
        if (GameConfigurationCentral.SINGLETON == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            GameConfigurationCentral.SINGLETON = new GameConfigurationCentral().jinit_GameConfigurationCentral_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<GameConfigurationCentral | null>(GameConfigurationCentral.SINGLETON);
    }
    

    jinit_GameConfigurationCentral_0(): GameConfigurationCentral {
        super.jinit_JObject_0();
        this.jfields_GameConfigurationCentral();
        let smallIntegerSingletonFactory: SmallIntegerSingletonFactory | null = SmallIntegerSingletonFactory.getInstance(); if (JThrowable.pending !== null) return this;
        this.SCALE = new GameConfiguration().jinit_GameConfiguration_4("Scale", smallIntegerSingletonFactory!.getAt(2), smallIntegerSingletonFactory!.getAt(2), smallIntegerSingletonFactory!.getAt(3)); if (JThrowable.pending !== null) return this;
        this.ORIENTATION = new GameConfiguration().jinit_GameConfiguration_4("Orientation", smallIntegerSingletonFactory!.getAt(0), smallIntegerSingletonFactory!.getAt(0), smallIntegerSingletonFactory!.getAt(8)); if (JThrowable.pending !== null) return this;
        this.SENSOR_UPDATE_RATE = new GameConfiguration().jinit_GameConfiguration_4("Sensor Update Rate", smallIntegerSingletonFactory!.getAt(0), smallIntegerSingletonFactory!.getAt(0), smallIntegerSingletonFactory!.getAt(3)); if (JThrowable.pending !== null) return this;
        this.VIBRATION = new GameConfiguration().jinit_GameConfiguration_4("Vibration", smallIntegerSingletonFactory!.getAt(0), smallIntegerSingletonFactory!.getAt(0), smallIntegerSingletonFactory!.getAt(3)); if (JThrowable.pending !== null) return this;
        this.CHALLENGE_LEVEL = new GameConfiguration().jinit_GameConfiguration_4("Global Challenge Level", smallIntegerSingletonFactory!.getAt(3), smallIntegerSingletonFactory!.getAt(1), smallIntegerSingletonFactory!.getAt(10)); if (JThrowable.pending !== null) return this;
        this.COLLIDE_DAMAGE = new GameConfiguration().jinit_GameConfiguration_4("Collide Damage Challenge Level", smallIntegerSingletonFactory!.getAt(3), smallIntegerSingletonFactory!.getAt(1), smallIntegerSingletonFactory!.getAt(10)); if (JThrowable.pending !== null) return this;
        this.DURABILITY_CHALLENGE_LEVEL = new GameConfiguration().jinit_GameConfiguration_4("Enemy Durability Challenge Level", smallIntegerSingletonFactory!.getAt(3), smallIntegerSingletonFactory!.getAt(1), smallIntegerSingletonFactory!.getAt(10)); if (JThrowable.pending !== null) return this;
        this.SPEED_CHALLENGE_LEVEL = new GameConfiguration().jinit_GameConfiguration_4("Enemy Speed Challenge Level", smallIntegerSingletonFactory!.getAt(3), smallIntegerSingletonFactory!.getAt(1), smallIntegerSingletonFactory!.getAt(10)); if (JThrowable.pending !== null) return this;
        this.ATTACK_CHALLENGE_LEVEL = new GameConfiguration().jinit_GameConfiguration_4("Enemy Attack Challenge Level", smallIntegerSingletonFactory!.getAt(3), smallIntegerSingletonFactory!.getAt(1), smallIntegerSingletonFactory!.getAt(10)); if (JThrowable.pending !== null) return this;
        this.CONTROL_LEVEL = new GameConfiguration().jinit_GameConfiguration_4("Control Fidelity", smallIntegerSingletonFactory!.getAt(5), smallIntegerSingletonFactory!.getAt(1), smallIntegerSingletonFactory!.getAt(10)); if (JThrowable.pending !== null) return this;
        this.PLAYER_INPUT_WAIT = new GameConfiguration().jinit_GameConfiguration_4("Input Wait", smallIntegerSingletonFactory!.getAt(5), smallIntegerSingletonFactory!.getAt(1), smallIntegerSingletonFactory!.getAt(10)); if (JThrowable.pending !== null) return this;
        this.SPEED = new GameConfiguration().jinit_GameConfiguration_4("Game Speed (Device Specific)", smallIntegerSingletonFactory!.getAt(5), smallIntegerSingletonFactory!.getAt(1), smallIntegerSingletonFactory!.getAt(10)); if (JThrowable.pending !== null) return this;
        this.SOUND_VOLUME = new GameConfiguration().jinit_GameConfiguration_4("Sound Volume", smallIntegerSingletonFactory!.getAt(6), smallIntegerSingletonFactory!.getAt(0), smallIntegerSingletonFactory!.getAt(10)); if (JThrowable.pending !== null) return this;
        this.MAX_GAME_OBJECTS = new GameConfiguration().jinit_GameConfiguration_4("Max Game Objects", smallIntegerSingletonFactory!.getAt(20), smallIntegerSingletonFactory!.getAt(1), smallIntegerSingletonFactory!.getAt(50)); if (JThrowable.pending !== null) return this;
        this.MAX_LAYERS = new GameConfiguration().jinit_GameConfiguration_4("Max Layers", smallIntegerSingletonFactory!.getAt(20), smallIntegerSingletonFactory!.getAt(1), smallIntegerSingletonFactory!.getAt(50)); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    load(abeClientInformation: AbeClientInformationInterface | null): void {
        let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
        do {
            let smallIntegerSingletonFactory: SmallIntegerSingletonFactory | null = SmallIntegerSingletonFactory.getInstance(); if (JThrowable.pending !== null) break;
            let keyValuePersistance: KeyValuePersistance | null = GameConfigurationPersistanceSingleton.getInstance(); if (JThrowable.pending !== null) break;
            keyValuePersistance!.clear(); if (JThrowable.pending !== null) break;
            keyValuePersistance!.loadAll(abeClientInformation); if (JThrowable.pending !== null) break;
            let list: BasicArrayList | null = keyValuePersistance!.getIds(); if (JThrowable.pending !== null) break;
            if (list!.size() > 0) {
                let hashtable: ABHashtable | null = keyValuePersistance!.get(0); if (JThrowable.pending !== null) break;
                let anyType: Object | null = changetype<Object | null>(this.SCALE!.getName()); if (JThrowable.pending !== null) break;
                let value: string | null = changetype<string | null>(hashtable!.get(anyType)); if (JThrowable.pending !== null) break;
                this.SCALE!.setValue(smallIntegerSingletonFactory!.getAt(JInteger.valueOf1(value)!.intValue())); if (JThrowable.pending !== null) break;
            } else {
                this.logUtil!.putF("No Game Configuration To Load", this, commonStrings!.LOAD); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.LOAD, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    setGameControlFidelity(gameControlFidelity: i32): void {
        this.gameControlFidelity = gameControlFidelity;
    }
    

    getGameControlFidelity(): i32 {
        return this.gameControlFidelity;
    }
    

    toString(): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let commonStrings: CommonSeps | null = CommonSeps.getInstance(); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonStrings!.COMMA_SEP); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.SCALE!.getName()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonStrings!.EQUALS); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint((<i32>(this.SCALE!.getValue()!.intValue()))); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonStrings!.COMMA_SEP); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.ORIENTATION!.getName()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonStrings!.EQUALS); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint((<i32>(this.ORIENTATION!.getValue()!.intValue()))); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonStrings!.COMMA_SEP); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.SENSOR_UPDATE_RATE!.getName()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonStrings!.EQUALS); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint((<i32>(this.SENSOR_UPDATE_RATE!.getValue()!.intValue()))); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonStrings!.COMMA_SEP); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.VIBRATION!.getName()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonStrings!.EQUALS); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint((<i32>(this.VIBRATION!.getValue()!.intValue()))); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonStrings!.COMMA_SEP); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.CHALLENGE_LEVEL!.getName()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonStrings!.EQUALS); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint((<i32>(this.CHALLENGE_LEVEL!.getValue()!.intValue()))); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonStrings!.COMMA_SEP); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.COLLIDE_DAMAGE!.getName()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonStrings!.EQUALS); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint((<i32>(this.COLLIDE_DAMAGE!.getValue()!.intValue()))); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonStrings!.COMMA_SEP); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.DURABILITY_CHALLENGE_LEVEL!.getName()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonStrings!.EQUALS); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint((<i32>(this.DURABILITY_CHALLENGE_LEVEL!.getValue()!.intValue()))); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonStrings!.COMMA_SEP); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.SPEED_CHALLENGE_LEVEL!.getName()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonStrings!.EQUALS); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint((<i32>(this.SPEED_CHALLENGE_LEVEL!.getValue()!.intValue()))); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonStrings!.COMMA_SEP); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.ATTACK_CHALLENGE_LEVEL!.getName()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonStrings!.EQUALS); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint((<i32>(this.ATTACK_CHALLENGE_LEVEL!.getValue()!.intValue()))); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonStrings!.COMMA_SEP); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.CONTROL_LEVEL!.getName()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonStrings!.EQUALS); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint((<i32>(this.CONTROL_LEVEL!.getValue()!.intValue()))); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonStrings!.COMMA_SEP); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.SPEED!.getName()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonStrings!.EQUALS); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint((<i32>(this.SPEED!.getValue()!.intValue()))); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonStrings!.COMMA_SEP); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.MAX_GAME_OBJECTS!.getName()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonStrings!.EQUALS); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint((<i32>(this.MAX_GAME_OBJECTS!.getValue()!.intValue()))); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonStrings!.COMMA_SEP); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(this.MAX_LAYERS!.getName()); if (JThrowable.pending !== null) return null;
        stringBuffer!.append(commonStrings!.EQUALS); if (JThrowable.pending !== null) return null;
        stringBuffer!.appendint((<i32>(this.MAX_LAYERS!.getValue()!.intValue()))); if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
}

