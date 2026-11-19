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

@global export class GameSpeed extends JObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.GameSpeed";
    }
    @lazy static jv_instance: GameSpeed | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GameSpeed | null {
        if (!GameSpeed.js_instance) {
            GameSpeed.js_instance = true;
            GameSpeed.jv_instance = new GameSpeed().jinit_GameSpeed_0();
        }
        return GameSpeed.jv_instance;
    }
    static set instance(value: GameSpeed | null) {
        GameSpeed.js_instance = true;
        GameSpeed.jv_instance = value;
    }

    jinit_GameSpeed_0(): GameSpeed {
        super.jinit_JObject_0();
        return this;
    }
    

    getSpeed(): i32 {
        let speedGameConfiguration: GameConfiguration | null = GameConfigurationCentral.getInstance()!.SPEED; if (JThrowable.pending !== null) return 0;
        return (speedGameConfiguration!.getMaxValue()!.intValue() - speedGameConfiguration!.getValue()!.intValue() + 1);
    }
    

    getDelay(): i32 {
        let speedGameConfiguration: GameConfiguration | null = GameConfigurationCentral.getInstance()!.SPEED; if (JThrowable.pending !== null) return 0;
        return 19 * (speedGameConfiguration!.getMaxValue()!.intValue() - speedGameConfiguration!.getValue()!.intValue());
    }
    

    static getInstance(): GameSpeed | null {
        return GameSpeed.instance;
    }
}

