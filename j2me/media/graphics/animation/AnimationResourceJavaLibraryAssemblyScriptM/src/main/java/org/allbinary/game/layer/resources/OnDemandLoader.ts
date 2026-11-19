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
// package org.allbinary.game.layer.resources
// import org.allbinary.animation.resource.BaseResourceAnimationInterfaceFactoryInterfaceFactory
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.game.configuration.feature.MainFeatureFactory
// import org.allbinary.game.layer.GameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory
// import org.allbinary.game.layer.LayerPlacementInterfaceBasicArrayListFactoryInterface
// import org.allbinary.game.resource.ResourceLoadingLevelFactory
// import org.allbinary.image.ImageCache
// import org.allbinary.logic.communication.log.PreLogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonStrings

@global export class OnDemandLoader extends JObject {

    jclassName(): string {
        return "org.allbinary.game.layer.resources.OnDemandLoader";
    }
    onDemandResourcesFactory: OnDemandResourcesFactory | null = null;
    gameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory: GameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory | null = null;
    resourceAnimationInterfaceFactoryInterfaceFactory: BaseResourceAnimationInterfaceFactoryInterfaceFactory | null = null;

    jfields_OnDemandLoader(): void {
    
    
    
    }
    

    jinit_OnDemandLoader_3(onDemandResourcesFactory: OnDemandResourcesFactory | null, gameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory: GameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory | null, resourceAnimationInterfaceFactoryInterfaceFactory: BaseResourceAnimationInterfaceFactoryInterfaceFactory | null): OnDemandLoader {
        super.jinit_JObject_0();
        this.jfields_OnDemandLoader();
        this.onDemandResourcesFactory = onDemandResourcesFactory;
        this.gameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory = gameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory;
        this.resourceAnimationInterfaceFactoryInterfaceFactory = resourceAnimationInterfaceFactoryInterfaceFactory;
        return this;
    }
    

    init(imageCache: ImageCache | null, level: i32, loadingString: string | null): void {
        let resourceLoadingLevelFactory: ResourceLoadingLevelFactory | null = ResourceLoadingLevelFactory.getInstance(); if (JThrowable.pending !== null) return;
        if (Features.getInstance()!.isFeature(MainFeatureFactory.getInstance()!.LOAD_ALL)) {
            if (this.resourceAnimationInterfaceFactoryInterfaceFactory!.isInitialized()) {
                return;
            } if (JThrowable.pending !== null) return;
            this.initAll(imageCache, loadingString); if (JThrowable.pending !== null) return;
        } else if (level != resourceLoadingLevelFactory!.LOAD_ALL!.getLevel()) {
            let layerPlacementInterfaceBasicArrayListFactoryInterface: LayerPlacementInterfaceBasicArrayListFactoryInterface | null = this.gameLayerPlacementInterfaceBasicArrayListFactoryInterfaceFactory!.getInstance1(level); if (JThrowable.pending !== null) return;
            this.initLevel(layerPlacementInterfaceBasicArrayListFactoryInterface, imageCache, level, loadingString); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    initAll(imageCache: ImageCache | null, loadingString: string | null): void {
        let index: i32 = 0;
        let portion: i32 = 120;
        let onDemandResources: OnDemandResources | null = null;
        for (let onDemandIndex: i32 = this.onDemandResourcesFactory!.size(); --onDemandIndex >= 0; ) {
            onDemandResources = this.onDemandResourcesFactory!.remove(onDemandIndex); if (JThrowable.pending !== null) return;
            if (onDemandResources != OnDemandResources.NULL_ON_DEMAND_RESOURCES) {
                index = onDemandResources!.initAt(imageCache, this.resourceAnimationInterfaceFactoryInterfaceFactory, portion, loadingString, index); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    initLevel(layerPlacementInterfaceBasicArrayListFactoryInterface: LayerPlacementInterfaceBasicArrayListFactoryInterface | null, imageCache: ImageCache | null, level: i32, loadingString: string | null): void {
        let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
        let portion: i32 = 120;
        let index: i32 = 0;
        let onDemandArray: StaticArray<i32> | null = layerPlacementInterfaceBasicArrayListFactoryInterface!.getOnDemandResources(); if (JThrowable.pending !== null) return;
        PreLogUtil.put(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(commonStrings!.START)!.appendint(onDemandArray!.length)), this, "initLevel"); if (JThrowable.pending !== null) return;
        let onDemandResources: OnDemandResources | null = null;
        for (let onDemandIndex: i32 = onDemandArray!.length; --onDemandIndex >= 0; ) {
            onDemandResources = this.onDemandResourcesFactory!.remove(onDemandArray![onDemandIndex]); if (JThrowable.pending !== null) return;
            if (onDemandResources != OnDemandResources.NULL_ON_DEMAND_RESOURCES) {
                index = onDemandResources!.initAt(imageCache, this.resourceAnimationInterfaceFactoryInterfaceFactory, portion, loadingString, index); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

