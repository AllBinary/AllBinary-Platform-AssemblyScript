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
// import javax.microedition.lcdui.CommandListener
// import org.allbinary.animation.FeaturedAnimationInterfaceFactoryInterfaceFactory
// import org.allbinary.game.configuration.GameConfigurationCentral
// import org.allbinary.game.configuration.event.ChangedGameFeatureListener
// import org.allbinary.game.configuration.feature.InputFeatureFactory
// import org.allbinary.game.configuration.feature.MainFeatureFactory
// import org.allbinary.game.input.PlatformInputMappingFactory
// import org.allbinary.game.input.event.GameKeyEventFactory
// import org.allbinary.game.resource.FeaturedResourceRelativeRelationshipFactory
// import org.allbinary.game.resource.ResourceInitialization
// import org.allbinary.game.resource.ResourceLoadingLevelFactory
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvas
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory
// import org.allbinary.image.GameFeatureImageCacheFactory
// import org.allbinary.input.motion.CompleteMotionGestureInputToGameMotionGestureInput
// import org.allbinary.input.motion.button.BasicTouchInputFactory
// import org.allbinary.input.motion.button.CancelTouchButtonInputFactory
// import org.allbinary.logic.system.security.licensing.AbeClientInformationInterface

@global export class BaseGameInitialization extends JObject implements GameInitializationInterface {

    jclassName(): string {
        return "org.allbinary.game.init.BaseGameInitialization";
    }
    @lazy static jv_NULL_BASE_GAME_INITIALIZATION: BaseGameInitialization | null = null;
    @lazy static js_NULL_BASE_GAME_INITIALIZATION: bool = false;
    static get NULL_BASE_GAME_INITIALIZATION(): BaseGameInitialization | null {
        if (!BaseGameInitialization.js_NULL_BASE_GAME_INITIALIZATION) {
            BaseGameInitialization.js_NULL_BASE_GAME_INITIALIZATION = true;
            BaseGameInitialization.jv_NULL_BASE_GAME_INITIALIZATION = new BaseGameInitialization().jinit_BaseGameInitialization_2(new StaticArray<ResourceInitialization | null>(0), 0);
        }
        return BaseGameInitialization.jv_NULL_BASE_GAME_INITIALIZATION;
    }
    static set NULL_BASE_GAME_INITIALIZATION(value: BaseGameInitialization | null) {
        BaseGameInitialization.js_NULL_BASE_GAME_INITIALIZATION = true;
        BaseGameInitialization.jv_NULL_BASE_GAME_INITIALIZATION = value;
    }
    resourceInitializationArray: StaticArray<ResourceInitialization | null> | null = null;
    portion: i32 = 0;
    initialized: bool = false;
    EARLY_RESOURCES: i32 = 0;
    GAME_RESOURCES: i32 = 0;
    EARLY_CHANGABLE_RESOURCES: i32 = 0;
    GAME_CHANGABLE_RESOURCES: i32 = 0;
    gameInitialized: bool = false;
    allLoaded: bool = false;

    jfields_BaseGameInitialization(): void {
    
    
    this.initialized = false;
    this.EARLY_RESOURCES = 0;
    this.GAME_RESOURCES = 1;
    this.EARLY_CHANGABLE_RESOURCES = 2;
    this.GAME_CHANGABLE_RESOURCES = 3;
    this.gameInitialized = false;
    this.allLoaded = false;
    }
    

    jinit_BaseGameInitialization_2(resourceInitializationArray: StaticArray<ResourceInitialization | null> | null, portion: i32): BaseGameInitialization {
        super.jinit_JObject_0();
        this.jfields_BaseGameInitialization();
        this.resourceInitializationArray = resourceInitializationArray;
        this.portion = portion;
        return this;
    }
    

    initKey(portion: i32): void {
    }
    

    initKeyMapping(abeClientInformation: AbeClientInformationInterface | null, portion: i32): void {
        if (ChangedGameFeatureListener.getInstance()!.isChangedFeature(InputFeatureFactory.getInstance()!.INPUT_MAPPING)) {
            PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.init(abeClientInformation); if (JThrowable.pending !== null) return;
            ProgressCanvasFactory.getInstance()!.addNormalPortion(50, "Game Keys"); if (JThrowable.pending !== null) return;
            ChangedGameFeatureListener.getInstance()!.remove(InputFeatureFactory.getInstance()!.INPUT_MAPPING); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    init(abeClientInformation: AbeClientInformationInterface | null, commandListener: CommandListener | null, level: i32): void {
        let resourceLoadingLevelFactory: ResourceLoadingLevelFactory | null = ResourceLoadingLevelFactory.getInstance(); if (JThrowable.pending !== null) return;
        if (!this.isInitialized() && (level == resourceLoadingLevelFactory!.LOAD_ALL!.getLevel() || level == resourceLoadingLevelFactory!.LOAD_EARLY!.getLevel())) {
            let localPortion: i32 = 40;
            if (level == resourceLoadingLevelFactory!.LOAD_EARLY!.getLevel()) {
                localPortion = 8;
            } if (JThrowable.pending !== null) return;
            this.setInitialized(true); if (JThrowable.pending !== null) return;
            this.initKey(this.getPortion()); if (JThrowable.pending !== null) return;
            this.initKeyMapping(abeClientInformation, this.getPortion()); if (JThrowable.pending !== null) return;
            GameKeyEventFactory.getInstance()!.init(); if (JThrowable.pending !== null) return;
            let progressCanvas: ProgressCanvas | null = ProgressCanvasFactory.getInstance(); if (JThrowable.pending !== null) return;
            progressCanvas!.addNormalPortion(localPortion, "Game Key Events"); if (JThrowable.pending !== null) return;
            BasicTouchInputFactory.getInstance()!.init(PlatformInputMappingFactory.getInstance()!.getPersistentInputMappingInstance()!.getInputMapping()); if (JThrowable.pending !== null) return;
            CancelTouchButtonInputFactory.getInstance(); if (JThrowable.pending !== null) return;
            progressCanvas!.addNormalPortion(localPortion, "Touch Input"); if (JThrowable.pending !== null) return;
            CompleteMotionGestureInputToGameMotionGestureInput.getInstance()!.init(); if (JThrowable.pending !== null) return;
            progressCanvas!.addNormalPortion(localPortion, "Motion Input"); if (JThrowable.pending !== null) return;
            GameFeatureImageCacheFactory.init(); if (JThrowable.pending !== null) return;
            progressCanvas!.addNormalPortion(localPortion, "Image Cache"); if (JThrowable.pending !== null) return;
            this.resourceInitializationArray![this.EARLY_RESOURCES]!.init(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    resourceInitialization(level: i32): void {
        let resourceLoadingLevelFactory: ResourceLoadingLevelFactory | null = ResourceLoadingLevelFactory.getInstance(); if (JThrowable.pending !== null) return;
        if (this.resourceAnimationChange() && level == resourceLoadingLevelFactory!.LOAD_EARLY!.getLevel()) {
            this.clearResources(); if (JThrowable.pending !== null) return;
            this.resourceInitializationArray![this.EARLY_CHANGABLE_RESOURCES]!.init(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        if (this.resourceAnimationChange() && level == resourceLoadingLevelFactory!.LOAD_ALL!.getLevel()) {
            if (this.allLoaded) {
                this.clearResources(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            if (FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance()!.getList()!.size() == 0) {
                this.resourceInitializationArray![this.EARLY_CHANGABLE_RESOURCES]!.init(); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
            this.resourceInitializationArray![this.GAME_CHANGABLE_RESOURCES]!.init(); if (JThrowable.pending !== null) return;
            this.allLoaded = true;
        } if (JThrowable.pending !== null) return;
    }
    

    resourceAnimationChange(): bool {
        let changedGameFeatureListener: ChangedGameFeatureListener | null = ChangedGameFeatureListener.getInstance(); if (JThrowable.pending !== null) return false;
        let gameConfigurationCentral: GameConfigurationCentral | null = GameConfigurationCentral.getInstance(); if (JThrowable.pending !== null) return false;
        if (changedGameFeatureListener!.isChangedGameConfiguration(gameConfigurationCentral!.SCALE)) {
            return true;
        } if (JThrowable.pending !== null) return false;
        if (ChangedGameFeatureListener.getInstance()!.isChangedFeature(MainFeatureFactory.getInstance()!.STATIC)) {
            return true;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    clearResources(): void {
        this.allLoaded = false;
        GameFeatureImageCacheFactory.releaseAll(); if (JThrowable.pending !== null) return;
        let featuredAnimationInterfaceFactoryInterfaceFactory: FeaturedAnimationInterfaceFactoryInterfaceFactory | null = FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance(); if (JThrowable.pending !== null) return;
        featuredAnimationInterfaceFactoryInterfaceFactory!.clear(); if (JThrowable.pending !== null) return;
        FeaturedResourceRelativeRelationshipFactory.getInstance()!.clear(); if (JThrowable.pending !== null) return;
    }
    

    setGameInitialized(gameInitialized: bool): void {
        this.gameInitialized = gameInitialized;
    }
    

    isGameInitialized(): bool {
        return this.gameInitialized;
    }
    

    getPortion(): i32 {
        return this.portion;
    }
    

    setInitialized(initialized: bool): void {
        this.initialized = initialized;
    }
    

    isInitialized(): bool {
        return this.initialized;
    }
}

