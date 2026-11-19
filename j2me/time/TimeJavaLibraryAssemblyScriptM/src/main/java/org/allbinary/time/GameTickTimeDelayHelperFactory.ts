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
// package org.allbinary.time

@global export class GameTickTimeDelayHelperFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.time.GameTickTimeDelayHelperFactory";
    }
    @lazy static jv_instance: GameTickTimeDelayHelper | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GameTickTimeDelayHelper | null {
        if (!GameTickTimeDelayHelperFactory.js_instance) {
            GameTickTimeDelayHelperFactory.js_instance = true;
            GameTickTimeDelayHelperFactory.jv_instance = new GameTickTimeDelayHelper().jinit_GameTickTimeDelayHelper_1(-1);
        }
        return GameTickTimeDelayHelperFactory.jv_instance;
    }
    static set instance(value: GameTickTimeDelayHelper | null) {
        GameTickTimeDelayHelperFactory.js_instance = true;
        GameTickTimeDelayHelperFactory.jv_instance = value;
    }
    

    static getInstance(): GameTickTimeDelayHelper | null {
        return GameTickTimeDelayHelperFactory.instance;
    }
    

    jinit_GameTickTimeDelayHelperFactory_0(): GameTickTimeDelayHelperFactory {
        super.jinit_JObject_0();
        return this;
    }
}

