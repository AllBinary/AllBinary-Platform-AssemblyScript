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
// package org.allbinary.game.init
// import org.allbinary.game.configuration.event.ChangedGameFeatureListener
// import org.allbinary.game.configuration.event.GameInitializedEvent
// import org.allbinary.game.configuration.event.GameInitializedEventHandler
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.game.configuration.feature.MainFeatureFactory
// import org.allbinary.game.resource.ResourceLoadingLevelFactory
// import org.allbinary.graphics.displayable.MyCanvas
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface

@global export class GameInitializationUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.game.init.GameInitializationUtil";
    }
    @lazy static jv_instance: GameInitializationUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GameInitializationUtil | null {
        if (!GameInitializationUtil.js_instance) {
            GameInitializationUtil.js_instance = true;
            GameInitializationUtil.jv_instance = new GameInitializationUtil().jinit_GameInitializationUtil_0();
        }
        return GameInitializationUtil.jv_instance;
    }
    static set instance(value: GameInitializationUtil | null) {
        GameInitializationUtil.js_instance = true;
        GameInitializationUtil.jv_instance = value;
    }
    EVENT: GameInitializedEvent | null = null;

    jfields_GameInitializationUtil(): void {
    this.EVENT = new GameInitializedEvent().jinit_GameInitializedEvent_1(this);
    }

    jinit_GameInitializationUtil_0(): GameInitializationUtil {
        super.jinit_JObject_0();
        this.jfields_GameInitializationUtil();
        return this;
    }
    

    initDemo(abeClientInformation: AbeClientInformationInterface | null, canvas: MyCanvas | null, gameInitializationInterfaceFactoryInterface: BasicBuildGameInitializerFactory | null): void {
        let mainFeatureFactory: MainFeatureFactory | null = MainFeatureFactory.getInstance(); if (JThrowable.pending !== null) return;
        if (ChangedGameFeatureListener.getInstance()!.isChangedFeature(mainFeatureFactory!.STATIC)) {
            let gameInitializationInterface: GameInitializationInterface | null = gameInitializationInterfaceFactoryInterface!.getInstance(); if (JThrowable.pending !== null) return;
            let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return;
            if (features!.isFeature(mainFeatureFactory!.LOAD_ALL)) {
                this.initGame(abeClientInformation, canvas, gameInitializationInterfaceFactoryInterface); if (JThrowable.pending !== null) return;
            } else if (features!.isFeature(mainFeatureFactory!.LOAD_ONDEMAND)) {
                let resourceLoadingLevelFactory: ResourceLoadingLevelFactory | null = ResourceLoadingLevelFactory.getInstance(); if (JThrowable.pending !== null) return;
                gameInitializationInterface!.init(abeClientInformation, canvas!.getCustomCommandListener(), resourceLoadingLevelFactory!.LOAD_EARLY!.getLevel()); if (JThrowable.pending !== null) return;
                this.EVENT!.setResourceLoadingLevel(resourceLoadingLevelFactory!.LOAD_EARLY); if (JThrowable.pending !== null) return;
            } else {
                { JThrowable.raise(new JException().jinit_JException_1("No Loading Feature Available")); return; }
            } if (JThrowable.pending !== null) return;
            GameInitializedEventHandler.getInstance()!.fireEvent(this.EVENT); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    initGame(abeClientInformation: AbeClientInformationInterface | null, canvas: MyCanvas | null, gameInitializationInterfaceFactoryInterface: BasicBuildGameInitializerFactory | null): void {
        if (ChangedGameFeatureListener.getInstance()!.isChangedFeature(MainFeatureFactory.getInstance()!.STATIC)) {
            let gameInitializationInterface: GameInitializationInterface | null = gameInitializationInterfaceFactoryInterface!.getInstance(); if (JThrowable.pending !== null) return;
            let resourceLoadingLevelFactory: ResourceLoadingLevelFactory | null = ResourceLoadingLevelFactory.getInstance(); if (JThrowable.pending !== null) return;
            gameInitializationInterface!.init(abeClientInformation, canvas!.getCustomCommandListener(), resourceLoadingLevelFactory!.LOAD_ALL!.getLevel()); if (JThrowable.pending !== null) return;
            this.EVENT!.setResourceLoadingLevel(resourceLoadingLevelFactory!.LOAD_ALL); if (JThrowable.pending !== null) return;
            GameInitializedEventHandler.getInstance()!.fireEvent(this.EVENT); if (JThrowable.pending !== null) return;
            ChangedGameFeatureListener.getInstance()!.remove(MainFeatureFactory.getInstance()!.STATIC); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    static getInstance(): GameInitializationUtil | null {
        return GameInitializationUtil.instance;
    }
}

