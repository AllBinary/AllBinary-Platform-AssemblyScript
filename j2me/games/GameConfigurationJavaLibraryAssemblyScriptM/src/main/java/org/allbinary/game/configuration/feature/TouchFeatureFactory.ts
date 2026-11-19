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
// package org.allbinary.game.configuration.feature

@global export class TouchFeatureFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.feature.TouchFeatureFactory";
    }
    @lazy static jv_instance: TouchFeatureFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): TouchFeatureFactory | null {
        if (!TouchFeatureFactory.js_instance) {
            TouchFeatureFactory.js_instance = true;
            TouchFeatureFactory.jv_instance = new TouchFeatureFactory().jinit_TouchFeatureFactory_0();
        }
        return TouchFeatureFactory.jv_instance;
    }
    static set instance(value: TouchFeatureFactory | null) {
        TouchFeatureFactory.js_instance = true;
        TouchFeatureFactory.jv_instance = value;
    }
    TOUCH_ENABLED: TouchFeature | null = null;
    SHOW_SCREEN_BUTTONS: TouchFeature | null = null;
    AUTO_HIDE_SHOW_SCREEN_BUTTONS: TouchFeature | null = null;
    HIDE_SCREEN_BUTTONS: TouchFeature | null = null;

    jfields_TouchFeatureFactory(): void {
    this.TOUCH_ENABLED = new TouchFeature().jinit_TouchFeature_1("Touch Enabled");
    this.SHOW_SCREEN_BUTTONS = new TouchFeature().jinit_TouchFeature_1("Show");
    this.AUTO_HIDE_SHOW_SCREEN_BUTTONS = new TouchFeature().jinit_TouchFeature_1("Auto Hide (One Level)");
    this.HIDE_SCREEN_BUTTONS = new TouchFeature().jinit_TouchFeature_1("Hide");
    }
    

    static getInstance(): TouchFeatureFactory | null {
        return TouchFeatureFactory.instance;
    }
    

    jinit_TouchFeatureFactory_0(): TouchFeatureFactory {
        super.jinit_JObject_0();
        this.jfields_TouchFeatureFactory();
        return this;
    }
}

