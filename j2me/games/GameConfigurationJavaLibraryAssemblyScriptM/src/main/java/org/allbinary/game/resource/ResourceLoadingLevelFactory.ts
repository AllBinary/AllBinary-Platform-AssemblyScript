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

@global export class ResourceLoadingLevelFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.resource.ResourceLoadingLevelFactory";
    }
    @lazy static jv_instance: ResourceLoadingLevelFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ResourceLoadingLevelFactory | null {
        if (!ResourceLoadingLevelFactory.js_instance) {
            ResourceLoadingLevelFactory.js_instance = true;
            ResourceLoadingLevelFactory.jv_instance = new ResourceLoadingLevelFactory().jinit_ResourceLoadingLevelFactory_0();
        }
        return ResourceLoadingLevelFactory.jv_instance;
    }
    static set instance(value: ResourceLoadingLevelFactory | null) {
        ResourceLoadingLevelFactory.js_instance = true;
        ResourceLoadingLevelFactory.jv_instance = value;
    }
    LOAD_EARLY: ResourceLoadingLevel | null = null;
    LOAD_TOUCH: ResourceLoadingLevel | null = null;
    LOAD_GAME: ResourceLoadingLevel | null = null;
    LEVEL: ResourceLoadingLevel | null = null;
    MAX_LEVEL: ResourceLoadingLevel | null = null;
    LOAD_ALL: ResourceLoadingLevel | null = null;
    RESOURCE_LOADING_LEVEL_ARRAY: StaticArray<ResourceLoadingLevel | null> | null = null;

    jfields_ResourceLoadingLevelFactory(): void {
    this.LOAD_EARLY = new ResourceLoadingLevel().jinit_ResourceLoadingLevel_2("Load Early", JInteger.MAX_VALUE);
    this.LOAD_TOUCH = new ResourceLoadingLevel().jinit_ResourceLoadingLevel_2("Load Touch", JInteger.MAX_VALUE - 1);
    this.LOAD_GAME = new ResourceLoadingLevel().jinit_ResourceLoadingLevel_2("Load Game", JInteger.MAX_VALUE - 2);
    this.LEVEL = new ResourceLoadingLevel().jinit_ResourceLoadingLevel_2("Level", JInteger.MAX_VALUE - 99);
    this.MAX_LEVEL = new ResourceLoadingLevel().jinit_ResourceLoadingLevel_2("Max Level", JInteger.MAX_VALUE - 100);
    this.LOAD_ALL = new ResourceLoadingLevel().jinit_ResourceLoadingLevel_2("Load All", -1);
    this.RESOURCE_LOADING_LEVEL_ARRAY = StaticArray.fromArray<ResourceLoadingLevel | null>([this.LOAD_ALL, this.MAX_LEVEL, this.LEVEL, this.LOAD_GAME, this.LOAD_TOUCH, this.LOAD_EARLY]);
    }

    jinit_ResourceLoadingLevelFactory_0(): ResourceLoadingLevelFactory {
        super.jinit_JObject_0();
        this.jfields_ResourceLoadingLevelFactory();
        return this;
    }
    

    static getInstance(): ResourceLoadingLevelFactory | null {
        return ResourceLoadingLevelFactory.instance;
    }
    

    getLevelString(level: i32): string | null {
        for (let index: i32 = 0; index < this.RESOURCE_LOADING_LEVEL_ARRAY!.length; index++) {
            if (level == this.RESOURCE_LOADING_LEVEL_ARRAY![index]!.getLevel()) {
                return this.RESOURCE_LOADING_LEVEL_ARRAY![index]!.getName();
            } if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return JInteger.toString1(level);
    }
}

