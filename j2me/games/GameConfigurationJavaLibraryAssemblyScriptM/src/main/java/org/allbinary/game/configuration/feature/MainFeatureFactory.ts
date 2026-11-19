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

@global export class MainFeatureFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.feature.MainFeatureFactory";
    }
    @lazy static jv_instance: MainFeatureFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): MainFeatureFactory | null {
        if (!MainFeatureFactory.js_instance) {
            MainFeatureFactory.js_instance = true;
            MainFeatureFactory.jv_instance = new MainFeatureFactory().jinit_MainFeatureFactory_0();
        }
        return MainFeatureFactory.jv_instance;
    }
    static set instance(value: MainFeatureFactory | null) {
        MainFeatureFactory.js_instance = true;
        MainFeatureFactory.jv_instance = value;
    }
    FULL_SCREEN: Feature | null = null;
    TITLE_BAR: Feature | null = null;
    STATIC: Feature | null = null;
    LOAD_ONDEMAND: Feature | null = null;
    LOAD_ALL: Feature | null = null;

    jfields_MainFeatureFactory(): void {
    this.FULL_SCREEN = new Feature().jinit_Feature_1("Full Screen");
    this.TITLE_BAR = new Feature().jinit_Feature_1("Title Bar");
    this.STATIC = new Feature().jinit_Feature_1("Static Dependent Feature");
    this.LOAD_ONDEMAND = new Feature().jinit_Feature_1("Load OnDemand");
    this.LOAD_ALL = new Feature().jinit_Feature_1("Load All");
    }

    jinit_MainFeatureFactory_0(): MainFeatureFactory {
        super.jinit_JObject_0();
        this.jfields_MainFeatureFactory();
        return this;
    }
    

    static getInstance(): MainFeatureFactory | null {
        return MainFeatureFactory.instance;
    }
}

