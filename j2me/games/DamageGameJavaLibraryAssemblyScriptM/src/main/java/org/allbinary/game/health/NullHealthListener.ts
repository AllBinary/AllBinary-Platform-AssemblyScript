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
// package org.allbinary.game.health

@global export class NullHealthListener extends JObject implements HealthListenerInterface {

    jclassName(): string {
        return "org.allbinary.game.health.NullHealthListener";
    }
    @lazy static jv_NULL_HEALTH_LISTENER: NullHealthListener | null = null;
    @lazy static js_NULL_HEALTH_LISTENER: bool = false;
    static get NULL_HEALTH_LISTENER(): NullHealthListener | null {
        if (!NullHealthListener.js_NULL_HEALTH_LISTENER) {
            NullHealthListener.js_NULL_HEALTH_LISTENER = true;
            NullHealthListener.jv_NULL_HEALTH_LISTENER = new NullHealthListener().jinit_NullHealthListener_0();
        }
        return NullHealthListener.jv_NULL_HEALTH_LISTENER;
    }
    static set NULL_HEALTH_LISTENER(value: NullHealthListener | null) {
        NullHealthListener.js_NULL_HEALTH_LISTENER = true;
        NullHealthListener.jv_NULL_HEALTH_LISTENER = value;
    }

    jinit_NullHealthListener_0(): NullHealthListener {
        super.jinit_JObject_0();
        return this;
    }
    

    onHealthChange(): void {
    }
}

