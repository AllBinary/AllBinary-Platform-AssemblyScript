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
// package org.allbinary.input.motion.gesture.configuration

@global export class MotionGestureConfigurationFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.input.motion.gesture.configuration.MotionGestureConfigurationFactory";
    }
    @lazy static jv_config: MotionGestureConfiguration | null = null;
    @lazy static js_config: bool = false;
    static get config(): MotionGestureConfiguration | null {
        if (!MotionGestureConfigurationFactory.js_config) {
            MotionGestureConfigurationFactory.js_config = true;
            MotionGestureConfigurationFactory.jv_config = new MotionGestureConfiguration().jinit_MotionGestureConfiguration_0();
        }
        return MotionGestureConfigurationFactory.jv_config;
    }
    static set config(value: MotionGestureConfiguration | null) {
        MotionGestureConfigurationFactory.js_config = true;
        MotionGestureConfigurationFactory.jv_config = value;
    }
    

    jinit_MotionGestureConfigurationFactory_0(): MotionGestureConfigurationFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    static getInstance(): MotionGestureConfiguration | null {
        return MotionGestureConfigurationFactory.config;
    }
}

