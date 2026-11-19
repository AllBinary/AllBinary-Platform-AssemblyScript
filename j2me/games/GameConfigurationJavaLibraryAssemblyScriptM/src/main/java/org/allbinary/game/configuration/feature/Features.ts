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
// import org.allbinary.game.configuration.event.GameFeatureEvent
// import org.allbinary.game.configuration.event.GameFeatureEventHandler
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.system.os.GenericOperatingSystem
// import org.allbinary.logic.system.os.OperatingSystemFactory
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class Features extends JObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.feature.Features";
    }
    @lazy static jv_SINGLETON: Object | null = null;
    @lazy static js_SINGLETON: bool = false;
    static get SINGLETON(): Object | null {
        if (!Features.js_SINGLETON) {
            Features.js_SINGLETON = true;
            Features.jv_SINGLETON = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return Features.jv_SINGLETON;
    }
    static set SINGLETON(value: Object | null) {
        Features.js_SINGLETON = true;
        Features.jv_SINGLETON = value;
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    list: BasicArrayList | null = null;
    defaultList: BasicArrayList | null = null;

    jfields_Features(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    
    
    }
    

    static getInstance(): Features | null {
        if (Features.SINGLETON == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            Features.SINGLETON = new Features().jinit_Features_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<Features | null>(Features.SINGLETON);
    }
    

    jinit_Features_0(): Features {
        super.jinit_JObject_0();
        this.jfields_Features();
        this.list = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return this;
        this.defaultList = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return this;
        this.init(); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    addDefault(gameFeature: Feature | null): void {
        this.add(gameFeature); if (JThrowable.pending !== null) return;
        if (!this.defaultList!.contains(gameFeature)) {
            this.defaultList!.add(gameFeature); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    add(gameFeature: Feature | null): void {
        if (!this.list!.contains(gameFeature)) {
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonLabels.getInstance()!.START_LABEL)!.append(JObject.jtoString(gameFeature))), this, this.commonStrings!.ADD); if (JThrowable.pending !== null) return;
            this.list!.add(gameFeature); if (JThrowable.pending !== null) return;
            GameFeatureEventHandler.getInstance()!.fireEvent(new GameFeatureEvent().jinit_GameFeatureEvent_2(gameFeature, JObject.jtoString(gameFeature))); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    removeDefault(gameFeature: Feature | null): void {
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonLabels.getInstance()!.START_LABEL)!.append(JObject.jtoString(gameFeature))), this, "removeDefault"); if (JThrowable.pending !== null) return;
        this.remove(gameFeature); if (JThrowable.pending !== null) return;
        this.defaultList!.remove(gameFeature); if (JThrowable.pending !== null) return;
    }
    

    remove(gameFeature: Feature | null): void {
        if (this.list!.contains(gameFeature)) {
            this.logUtil!.putF(this.commonStrings!.START, this, this.commonStrings!.REMOVE); if (JThrowable.pending !== null) return;
            this.list!.remove(gameFeature); if (JThrowable.pending !== null) return;
            GameFeatureEventHandler.getInstance()!.fireEvent(new GameFeatureEvent().jinit_GameFeatureEvent_2(gameFeature, JObject.jtoString(gameFeature))); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    init(): void {
        do {
            let gameFeatureFactory: GameFeatureFactory | null = GameFeatureFactory.getInstance(); if (JThrowable.pending !== null) break;
            let inputFeatureFactory: InputFeatureFactory | null = InputFeatureFactory.getInstance(); if (JThrowable.pending !== null) break;
            let sensorFeatureFactory: SensorFeatureFactory | null = SensorFeatureFactory.getInstance(); if (JThrowable.pending !== null) break;
            let touchFeatureFactory: TouchFeatureFactory | null = TouchFeatureFactory.getInstance(); if (JThrowable.pending !== null) break;
            this.addDefault(gameFeatureFactory!.ARTIFICIAL_INTELLEGENCE_PROCESSOR); if (JThrowable.pending !== null) break;
            this.addDefault(gameFeatureFactory!.COLLIDABLE_INTERFACE_LAYER_PROCESSOR); if (JThrowable.pending !== null) break;
            this.addDefault(gameFeatureFactory!.GAME_INPUT_LAYER_PROCESSOR); if (JThrowable.pending !== null) break;
            this.addDefault(gameFeatureFactory!.TICKABLE_LAYER_PROCESSOR); if (JThrowable.pending !== null) break;
            this.addDefault(inputFeatureFactory!.MULTI_KEY_PRESS); if (JThrowable.pending !== null) break;
            this.addDefault(inputFeatureFactory!.REMOVE_DUPLICATE_KEY_PRESSES); if (JThrowable.pending !== null) break;
            this.addDefault(gameFeatureFactory!.SCREEN_SHAKE); if (JThrowable.pending !== null) break;
            this.addDefault(gameFeatureFactory!.POST_IMAGE_LOADING_MODIFICATION); if (JThrowable.pending !== null) break;
            let operatingSystemInterface: GenericOperatingSystem | null = OperatingSystemFactory.getInstance()!.getOperatingSystemInstance(); if (JThrowable.pending !== null) break;
            if (operatingSystemInterface!.isOverScan()) {
                this.addDefault(sensorFeatureFactory!.NO_ORIENTATION); if (JThrowable.pending !== null) break;
                this.addDefault(touchFeatureFactory!.HIDE_SCREEN_BUTTONS); if (JThrowable.pending !== null) break;
            } else {
                this.addDefault(sensorFeatureFactory!.ORIENTATION_SENSORS); if (JThrowable.pending !== null) break;
                this.addDefault(touchFeatureFactory!.AUTO_HIDE_SHOW_SCREEN_BUTTONS); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            this.addDefault(touchFeatureFactory!.TOUCH_ENABLED); if (JThrowable.pending !== null) break;
            this.addDefault(MainFeatureFactory.getInstance()!.FULL_SCREEN); if (JThrowable.pending !== null) break;
            this.addDefault(MainFeatureFactory.getInstance()!.LOAD_ONDEMAND); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            PreLogUtil.putOE(this.commonStrings!.EXCEPTION, this, this.commonStrings!.INIT, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    isDefault(gameFeature: Feature | null): bool {
        return this.defaultList!.contains(gameFeature);
    }
    

    isFeature(gameFeature: Feature | null): bool {
        return this.list!.contains(gameFeature);
    }
    

    toggle(gameFeature: Feature | null): void {
        if (this.isFeature(gameFeature)) {
            this.remove(gameFeature); if (JThrowable.pending !== null) return;
        } else {
            this.add(gameFeature); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

