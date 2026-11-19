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
// package org.allbinary.animation
// import org.allbinary.animation.resource.FeatureResourceAnimationInterfaceFactoryInterface
// import org.allbinary.game.configuration.GameConfigurationCentral
// import org.allbinary.game.resource.FeaturedResourceFactory
// import org.allbinary.graphics.PointFactory
// import org.allbinary.graphics.Rectangle
// import org.allbinary.graphics.RectangleFactory
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonSeps
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class FeaturedAnimationInterfaceFactoryInterfaceFactory extends FeaturedResourceFactory {

    jclassName(): string {
        return "org.allbinary.animation.FeaturedAnimationInterfaceFactoryInterfaceFactory";
    }
    @lazy static jv_INSTANCE: FeaturedAnimationInterfaceFactoryInterfaceFactory | null = null;
    @lazy static js_INSTANCE: bool = false;
    static get INSTANCE(): FeaturedAnimationInterfaceFactoryInterfaceFactory | null {
        if (!FeaturedAnimationInterfaceFactoryInterfaceFactory.js_INSTANCE) {
            FeaturedAnimationInterfaceFactoryInterfaceFactory.js_INSTANCE = true;
            FeaturedAnimationInterfaceFactoryInterfaceFactory.jv_INSTANCE = new FeaturedAnimationInterfaceFactoryInterfaceFactory().jinit_FeaturedAnimationInterfaceFactoryInterfaceFactory_0();
        }
        return FeaturedAnimationInterfaceFactoryInterfaceFactory.jv_INSTANCE;
    }
    static set INSTANCE(value: FeaturedAnimationInterfaceFactoryInterfaceFactory | null) {
        FeaturedAnimationInterfaceFactoryInterfaceFactory.js_INSTANCE = true;
        FeaturedAnimationInterfaceFactoryInterfaceFactory.jv_INSTANCE = value;
    }
    

    jinit_FeaturedAnimationInterfaceFactoryInterfaceFactory_0(): FeaturedAnimationInterfaceFactoryInterfaceFactory {
        super.jinit_FeaturedResourceFactory_0();
        return this;
    }
    

    static getInstance(): FeaturedAnimationInterfaceFactoryInterfaceFactory | null {
        return FeaturedAnimationInterfaceFactoryInterfaceFactory.INSTANCE;
    }
    

    getRectangle(resource: string | null): Rectangle | null {
        return this.getRectangleXY(resource, 0, 0);
    }
    

    getRectangleXY(resource: string | null, x: i32, y: i32): Rectangle | null {
        let pointFactory: PointFactory | null = PointFactory.getInstance(); if (JThrowable.pending !== null) return null;
        let list: BasicArrayList | null = this.getList(); if (JThrowable.pending !== null) return null;
        let scale: i32 = GameConfigurationCentral.getInstance()!.SCALE!.getValue()!.intValue(); if (JThrowable.pending !== null) return null;
        let size: i32 = this.getList()!.size(); if (JThrowable.pending !== null) return null;
        for (let index: i32 = 0; index < size; index++) {
            let featureInterface: FeatureResourceAnimationInterfaceFactoryInterface | null = changetype<FeatureResourceAnimationInterfaceFactoryInterface | null>(list!.objectArray![index]);
            if (featureInterface!.isFeature()) {
                let rectangle: Rectangle | null = featureInterface!.getRectangle(resource); if (JThrowable.pending !== null) return null;
                if (rectangle != RectangleFactory.SINGLETON) {
                    return new Rectangle().jinit_Rectangle_3(pointFactory!.createXY(x, y), ((rectangle!.getWidth() * scale) >> 1), ((rectangle!.getHeight() * scale) >> 1));
                } if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        { JThrowable.raise(new JException().jinit_JException_1(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("No rectangle available for current feature selection or Resource: ")!.append(resource)))); return null; }
        return null;
    }
    

    getProcedural(resource: string | null): ProceduralAnimationInterfaceFactoryInterface | null {
        return changetype<ProceduralAnimationInterfaceFactoryInterface | null>(this.getBasicAnimationInterfaceFactoryInstance(resource));
    }
    

    get(resource: string | null): AnimationInterfaceFactoryInterface | null {
        return changetype<AnimationInterfaceFactoryInterface | null>(this.getBasicAnimationInterfaceFactoryInstance(resource));
    }
    

    getBasicAnimationInterfaceFactoryInstance(resource: string | null): BasicAnimationInterfaceFactoryInterface | null {
        let list: BasicArrayList | null = this.getList(); if (JThrowable.pending !== null) return null;
        let resourceTypeAvailableList: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return null;
        let size: i32 = this.getList()!.size(); if (JThrowable.pending !== null) return null;
        let featureInterface: FeatureResourceAnimationInterfaceFactoryInterface | null = null;
        let animationInterfaceFactoryInterface: BasicAnimationInterfaceFactoryInterface | null = null;
        for (let index: i32 = 0; index < size; index++) {
            featureInterface = changetype<FeatureResourceAnimationInterfaceFactoryInterface | null>(list!.objectArray![index]);
            if (featureInterface!.isFeature()) {
                resourceTypeAvailableList!.add(featureInterface); if (JThrowable.pending !== null) return null;
                animationInterfaceFactoryInterface = featureInterface!.getBasicAnimationInterfaceFactoryInstance(resource); if (JThrowable.pending !== null) return null;
                if (animationInterfaceFactoryInterface != NullAnimationFactory.NULL_NOT_FOR_USE_ANIMATION_FACTORY) {
                    return animationInterfaceFactoryInterface;
                }
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        if (resourceTypeAvailableList!.size() > 0) {
            let NO_ANIMATION_AVAILABLE_FROM: string | null = "No animation available from: ";
            let FOR_FACTORIES: string | null = " factories: ";
            let FOR_RESOURCE: string | null = " for Resource: ";
            let HAS_KEY: string | null = " has: ";
            let RESOURCES_LABEL: string | null = " resources ";
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(NO_ANIMATION_AVAILABLE_FROM); if (JThrowable.pending !== null) return null;
            stringBuffer!.appendint(resourceTypeAvailableList!.size()); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(CommonSeps.getInstance()!.FORWARD_SLASH); if (JThrowable.pending !== null) return null;
            stringBuffer!.appendint(size); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(FOR_FACTORIES); if (JThrowable.pending !== null) return null;
            let size2: i32 = resourceTypeAvailableList!.size(); if (JThrowable.pending !== null) return null;
            for (let index: i32 = 0; index < size2; index++) {
                stringBuffer!.append(JObject.jtoString(resourceTypeAvailableList!.get(index))); if (JThrowable.pending !== null) return null;
                stringBuffer!.append(CommonSeps.getInstance()!.COMMA_SEP); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            stringBuffer!.append(FOR_RESOURCE); if (JThrowable.pending !== null) return null;
            stringBuffer!.append(resource); if (JThrowable.pending !== null) return null;
            for (let index: i32 = 0; index < size; index++) {
                stringBuffer!.append(CommonSeps.getInstance()!.NEW_LINE); if (JThrowable.pending !== null) return null;
                featureInterface = changetype<FeatureResourceAnimationInterfaceFactoryInterface | null>(list!.objectArray![index]);
                if (featureInterface!.isFeature()) {
                    stringBuffer!.append(StringUtil.getInstance()!.toString1(featureInterface)); if (JThrowable.pending !== null) return null;
                    stringBuffer!.append(HAS_KEY); if (JThrowable.pending !== null) return null;
                    stringBuffer!.appendint(featureInterface!.getHashtable()!.size()); if (JThrowable.pending !== null) return null;
                    stringBuffer!.append(RESOURCES_LABEL); if (JThrowable.pending !== null) return null;
                } if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            { JThrowable.raise(new JException().jinit_JException_1(JObject.jtoString(stringBuffer))); return null; }
        } else {
            let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
            for (let index: i32 = 0; index < size; index++) {
                featureInterface = changetype<FeatureResourceAnimationInterfaceFactoryInterface | null>(list!.objectArray![index]);
                stringBuffer!.append(JObject.jtoString(featureInterface)); if (JThrowable.pending !== null) return null;
                stringBuffer!.append(CommonSeps.getInstance()!.SPACE); if (JThrowable.pending !== null) return null;
            } if (JThrowable.pending !== null) return null;
            let result: string | null = JObject.jtoString(stringBuffer); if (JThrowable.pending !== null) return null;
            stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return null;
            { JThrowable.raise(new JException().jinit_JException_1(JObject.jtoString(stringBuffer!.append("No feature resource type available for Resource: ")!.append(resource)!.append(" Resource Factories Available: ")!.append(result)))); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

