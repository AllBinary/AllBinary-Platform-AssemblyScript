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
// package org.allbinary.animation.resource
// import org.allbinary.animation.BasicAnimationInterfaceFactoryInterface
// import org.allbinary.animation.NullAnimationFactory
// import org.allbinary.game.resource.ResourceLoadingLevelFactory
// import org.allbinary.graphics.Rectangle
// import org.allbinary.graphics.RectangleFactory
// import org.allbinary.image.ImageCache
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonSeps
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.ABHashtable

@global export class BaseResourceAnimationInterfaceFactoryInterfaceFactory extends JObject implements FeatureResourceAnimationInterfaceFactoryInterface {

    jclassName(): string {
        return "org.allbinary.animation.resource.BaseResourceAnimationInterfaceFactoryInterfaceFactory";
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    hashtable: ABHashtable | null = null;
    rectangleHashtable: ABHashtable | null = null;
    rectangleArrayOfArraysHashtable: ABHashtable | null = null;
    name: string | null = null;
    initialized: bool = false;

    jfields_BaseResourceAnimationInterfaceFactoryInterfaceFactory(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    
    
    
    
    this.initialized = false;
    }
    

    jinit_BaseResourceAnimationInterfaceFactoryInterfaceFactory_4(name: string | null, hashtable: ABHashtable | null, rectangleHashtable: ABHashtable | null, rectangleArrayHashtable: ABHashtable | null): BaseResourceAnimationInterfaceFactoryInterfaceFactory {
        super.jinit_JObject_0();
        this.jfields_BaseResourceAnimationInterfaceFactoryInterfaceFactory();
        this.hashtable = hashtable;
        this.rectangleHashtable = rectangleHashtable;
        this.rectangleArrayOfArraysHashtable = rectangleArrayHashtable;
        this.name = name;
        return this;
    }
    

    getName(): string | null {
        return this.name;
    }
    

    init(level: i32): void {
        let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Available List of Animations: ")!.append(JObject.jtoString(this.hashtable))), this, commonStrings!.INIT); if (JThrowable.pending !== null) return;
        this.setInitialized(true); if (JThrowable.pending !== null) return;
    }
    

    initImageCache(imageCache: ImageCache | null, level: i32): void {
    }
    

    add(resource: string | null, animationInterfaceFactoryInterface: BasicAnimationInterfaceFactoryInterface | null): void {
        if (this.hashtable!.containsKey(changetype<Object | null>(resource))) {
            { JThrowable.raise(new JException().jinit_JException_1(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Resource Already Created: ")!.append(resource)))); return; }
        } if (JThrowable.pending !== null) return;
        this.hashtable!.put(resource, animationInterfaceFactoryInterface); if (JThrowable.pending !== null) return;
    }
    

    getBasicAnimationInterfaceFactoryInstance(resource: string | null): BasicAnimationInterfaceFactoryInterface | null {
        let basicAnimationInterfaceFactoryInterfaceCanBeNull: Object | null = this.hashtable!.get(resource); if (JThrowable.pending !== null) return null;
        if (basicAnimationInterfaceFactoryInterfaceCanBeNull == null) {
            return NullAnimationFactory.NULL_NOT_FOR_USE_ANIMATION_FACTORY;
        }
        return changetype<BasicAnimationInterfaceFactoryInterface | null>(basicAnimationInterfaceFactoryInterfaceCanBeNull);
    }
    

    getRectangle(resource: string | null): Rectangle | null {
        let rectangleCanBeNull: Object | null = this.rectangleHashtable!.get(resource); if (JThrowable.pending !== null) return null;
        if (rectangleCanBeNull == null) {
            return RectangleFactory.SINGLETON;
        }
        return changetype<Rectangle | null>(rectangleCanBeNull);
    }
    

    addRectangle(resource: string | null, rectangle: Rectangle | null): void {
        this.rectangleHashtable!.put(resource, rectangle); if (JThrowable.pending !== null) return;
    }
    

    getRectangleArrayOfArrays(resource: string | null): StaticArray<StaticArray<Rectangle | null> | null> | null {
        let valueCanBeNull: Object | null = this.rectangleArrayOfArraysHashtable!.get(resource); if (JThrowable.pending !== null) return null;
        if (valueCanBeNull != null) {
            let rectangleArrayOfArrays: StaticArray<StaticArray<Rectangle | null> | null> | null = changetype<StaticArray<StaticArray<Rectangle | null> | null> | null>(valueCanBeNull);
            return rectangleArrayOfArrays;
        } else {
            return RectangleFactory.ARRAY_OF_ARRAYS;
        }
        return null;
    }
    

    addRectangleArrayOfArrays(resource: string | null, rectangleArrayOfArrays: StaticArray<StaticArray<Rectangle | null> | null> | null): void {
        this.rectangleArrayOfArraysHashtable!.put(resource, rectangleArrayOfArrays); if (JThrowable.pending !== null) return;
    }
    

    isFeature(): bool {
        return false;
    }
    

    isLoadingLevel(level: i32): bool {
        let resourceLoadingLevelFactory: ResourceLoadingLevelFactory | null = ResourceLoadingLevelFactory.getInstance(); if (JThrowable.pending !== null) return false;
        if (level == resourceLoadingLevelFactory!.LOAD_ALL!.getLevel()) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    toString(): string | null {
        return JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(JObject.jclassOf(this)!.getName())!.append(CommonSeps.getInstance()!.SEMICOLON)!.append(CommonSeps.getInstance()!.SPACE)!.append(this.name));
    }
    

    getHashtable(): ABHashtable | null {
        return this.hashtable;
    }
    

    getRectangleHashtable(): ABHashtable | null {
        return this.rectangleHashtable;
    }
    

    getRectangleArrayOfArraysHashtable(): ABHashtable | null {
        return this.rectangleArrayOfArraysHashtable;
    }
    

    setInitialized(initialized: bool): void {
        this.initialized = initialized;
    }
    

    isInitialized(): bool {
        return this.initialized;
    }
}

