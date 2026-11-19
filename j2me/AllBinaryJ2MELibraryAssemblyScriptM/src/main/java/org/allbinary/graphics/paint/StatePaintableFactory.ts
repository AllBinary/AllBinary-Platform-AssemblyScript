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
// package org.allbinary.graphics.paint

@global export class StatePaintableFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.paint.StatePaintableFactory";
    }
    @lazy static jv_instance: StatePaintable | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): StatePaintable | null {
        if (!StatePaintableFactory.js_instance) {
            StatePaintableFactory.js_instance = true;
            StatePaintableFactory.jv_instance = new StatePaintable().jinit_StatePaintable_0();
        }
        return StatePaintableFactory.jv_instance;
    }
    static set instance(value: StatePaintable | null) {
        StatePaintableFactory.js_instance = true;
        StatePaintableFactory.jv_instance = value;
    }

    jinit_StatePaintableFactory_0(): StatePaintableFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): StatePaintable | null {
        return StatePaintableFactory.instance;
    }
}

