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
// package org.allbinary.game.resource
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.game.configuration.feature.GameFeatureControlledInterface
// import org.allbinary.game.configuration.feature.GraphicsFeatureFactory
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonSeps
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class FeaturedResourceFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.resource.FeaturedResourceFactory";
    }
    logUtil: LogUtil | null = null;
    list: BasicArrayList | null = null;
    commonStrings: CommonStrings | null = null;
    ANIMATION_FEATURES: string | null = null;
    IMAGE_LABEL: string | null = null;
    IMAGE_GRAPHICS_ARRAY: string | null = null;
    IMAGE_GRAPHICS_ROTATION: string | null = null;
    SPRITE_QUARTER: string | null = null;
    SPRITE_FULL: string | null = null;
    IS_LOADING_LEVEL_LABEL: string | null = null;
    IS_FEATURE: string | null = null;
    GAME_FEATURE_CONTROLLED: string | null = null;

    jfields_FeaturedResourceFactory(): void {
    this.logUtil = LogUtil.getInstance();
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.commonStrings = CommonStrings.getInstance();
    this.ANIMATION_FEATURES = "Animation Features: Vector: ";
    this.IMAGE_LABEL = " Image: ";
    this.IMAGE_GRAPHICS_ARRAY = "Image Array: ";
    this.IMAGE_GRAPHICS_ROTATION = "Image Rotate: ";
    this.SPRITE_QUARTER = " Sprite Quarter: ";
    this.SPRITE_FULL = " Sprite Full: ";
    this.IS_LOADING_LEVEL_LABEL = " isLoadingLevel ";
    this.IS_FEATURE = " isFeature: ";
    this.GAME_FEATURE_CONTROLLED = "GameFeatureControlledInterface: ";
    }
    

    jinit_FeaturedResourceFactory_0(): FeaturedResourceFactory {
        super.jinit_JObject_0();
        this.jfields_FeaturedResourceFactory();
        return this;
    }
    

    init(level: i32): void {
        let size: i32 = this.list!.size(); if (JThrowable.pending !== null) return;
        for (let index: i32 = 0; index < size; index++) {
            let featureInterface: GameFeatureControlledInterface | null = changetype<GameFeatureControlledInterface | null>(this.list!.objectArray![index]);
            let isLoadingLevel: bool = featureInterface!.isLoadingLevel(level); if (JThrowable.pending !== null) return;
            let isFeature: bool = featureInterface!.isFeature(); if (JThrowable.pending !== null) return;
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.GAME_FEATURE_CONTROLLED)!.append(JObject.jtoString(featureInterface))!.append(this.IS_LOADING_LEVEL_LABEL)!.append(ResourceLoadingLevelFactory.getInstance()!.getLevelString(level))!.append(CommonSeps.getInstance()!.COLON_SEP)!.appendboolean(isLoadingLevel)!.append(this.IS_FEATURE)!.appendboolean(isFeature)), this, this.commonStrings!.INIT); if (JThrowable.pending !== null) return;
            if (isLoadingLevel && isFeature) {
                featureInterface!.init(level); if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return;
        let graphicsFeatureFactory: GraphicsFeatureFactory | null = GraphicsFeatureFactory.getInstance(); if (JThrowable.pending !== null) return;
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.ANIMATION_FEATURES); if (JThrowable.pending !== null) return;
        stringBuffer!.appendboolean(features!.isFeature(graphicsFeatureFactory!.VECTOR_GRAPHICS)); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.IMAGE_LABEL); if (JThrowable.pending !== null) return;
        stringBuffer!.appendboolean(features!.isFeature(graphicsFeatureFactory!.IMAGE_GRAPHICS)); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(stringBuffer), this, this.commonStrings!.INIT); if (JThrowable.pending !== null) return;
        if (features!.isFeature(graphicsFeatureFactory!.IMAGE_GRAPHICS)) {
            stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return;
            stringBuffer!.append(this.IMAGE_GRAPHICS_ARRAY); if (JThrowable.pending !== null) return;
            stringBuffer!.appendboolean(features!.isFeature(graphicsFeatureFactory!.IMAGE_TO_ARRAY_GRAPHICS)); if (JThrowable.pending !== null) return;
            stringBuffer!.append(this.IMAGE_GRAPHICS_ROTATION); if (JThrowable.pending !== null) return;
            stringBuffer!.appendboolean(features!.isFeature(graphicsFeatureFactory!.IMAGE_TO_ARRAY_GRAPHICS)); if (JThrowable.pending !== null) return;
            stringBuffer!.append(this.SPRITE_QUARTER); if (JThrowable.pending !== null) return;
            stringBuffer!.appendboolean(features!.isFeature(graphicsFeatureFactory!.SPRITE_QUARTER_ROTATION_GRAPHICS)); if (JThrowable.pending !== null) return;
            stringBuffer!.append(this.SPRITE_FULL); if (JThrowable.pending !== null) return;
            stringBuffer!.appendboolean(features!.isFeature(graphicsFeatureFactory!.SPRITE_FULL_GRAPHICS)); if (JThrowable.pending !== null) return;
            this.logUtil!.putF(JObject.jtoString(stringBuffer), this, this.commonStrings!.INIT); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    clear(): void {
        this.list!.clear(); if (JThrowable.pending !== null) return;
    }
    

    add(featureInterface: GameFeatureControlledInterface | null): void {
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonLabels.getInstance()!.START_LABEL)!.append(StringUtil.getInstance()!.toString1(featureInterface))), this, this.commonStrings!.ADD); if (JThrowable.pending !== null) return;
        this.list!.add(featureInterface); if (JThrowable.pending !== null) return;
    }
    

    getList(): BasicArrayList | null {
        return this.list;
    }
}

