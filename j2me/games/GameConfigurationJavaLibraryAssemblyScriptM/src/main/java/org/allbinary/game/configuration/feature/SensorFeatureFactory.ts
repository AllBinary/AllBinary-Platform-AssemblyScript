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

@global export class SensorFeatureFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.feature.SensorFeatureFactory";
    }
    @lazy static jv_instance: SensorFeatureFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): SensorFeatureFactory | null {
        if (!SensorFeatureFactory.js_instance) {
            SensorFeatureFactory.js_instance = true;
            SensorFeatureFactory.jv_instance = new SensorFeatureFactory().jinit_SensorFeatureFactory_0();
        }
        return SensorFeatureFactory.jv_instance;
    }
    static set instance(value: SensorFeatureFactory | null) {
        SensorFeatureFactory.js_instance = true;
        SensorFeatureFactory.jv_instance = value;
    }
    NO_ORIENTATION: SensorFeature | null = null;
    ORIENTATION_SENSORS: SensorFeature | null = null;
    SIMULATED_ORIENTATION_SENSORS: SensorFeature | null = null;
    YAW: SensorFeature | null = null;
    YAW_MINUS_RIGHT_PLUS_LEFT: SensorFeature | null = null;
    YAW_MINUS_LEFT_PLUS_RIGHT: SensorFeature | null = null;
    PITCH: SensorFeature | null = null;
    ROLL: SensorFeature | null = null;

    jfields_SensorFeatureFactory(): void {
    this.NO_ORIENTATION = new SensorFeature().jinit_SensorFeature_1("No Orientation");
    this.ORIENTATION_SENSORS = new SensorFeature().jinit_SensorFeature_1("Orientation Sensors");
    this.SIMULATED_ORIENTATION_SENSORS = new SensorFeature().jinit_SensorFeature_1("Simulated Orientation Sensors");
    this.YAW = new SensorFeature().jinit_SensorFeature_1("Yaw");
    this.YAW_MINUS_RIGHT_PLUS_LEFT = new SensorFeature().jinit_SensorFeature_1("Yaw -Right +Left");
    this.YAW_MINUS_LEFT_PLUS_RIGHT = new SensorFeature().jinit_SensorFeature_1("Yaw -Left +Right ");
    this.PITCH = new SensorFeature().jinit_SensorFeature_1("Pitch");
    this.ROLL = new SensorFeature().jinit_SensorFeature_1("Roll");
    }
    

    static getInstance(): SensorFeatureFactory | null {
        return SensorFeatureFactory.instance;
    }
    

    jinit_SensorFeatureFactory_0(): SensorFeatureFactory {
        super.jinit_JObject_0();
        this.jfields_SensorFeatureFactory();
        return this;
    }
}

