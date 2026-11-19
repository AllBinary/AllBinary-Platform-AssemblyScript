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
// import org.allbinary.image.ImageCache
// import org.allbinary.logic.communication.log.LogUtil

@global export class OnDemandResources extends JObject {

    jclassName(): string {
        return "org.allbinary.game.layer.resources.OnDemandResources";
    }
    @lazy static jv_NULL_ON_DEMAND_RESOURCES: OnDemandResources | null = null;
    @lazy static js_NULL_ON_DEMAND_RESOURCES: bool = false;
    static get NULL_ON_DEMAND_RESOURCES(): OnDemandResources | null {
        if (!OnDemandResources.js_NULL_ON_DEMAND_RESOURCES) {
            OnDemandResources.js_NULL_ON_DEMAND_RESOURCES = true;
            OnDemandResources.jv_NULL_ON_DEMAND_RESOURCES = new OnDemandResources().jinit_OnDemandResources_0();
        }
        return OnDemandResources.jv_NULL_ON_DEMAND_RESOURCES;
    }
    static set NULL_ON_DEMAND_RESOURCES(value: OnDemandResources | null) {
        OnDemandResources.js_NULL_ON_DEMAND_RESOURCES = true;
        OnDemandResources.jv_NULL_ON_DEMAND_RESOURCES = value;
    }
    logUtil: LogUtil | null = null;

    jfields_OnDemandResources(): void {
    this.logUtil = LogUtil.getInstance();
    }
    

    jinit_OnDemandResources_0(): OnDemandResources {
        super.jinit_JObject_0();
        this.jfields_OnDemandResources();
        return this;
    }
    

    waitFor(): void {
    }
    

    init(): void {
    }
    

    initAt(imageCache: ImageCache | null, resourceAnimationInterfaceFactoryInterfaceFactory: BaseResourceAnimationInterfaceFactoryInterfaceFactory | null, portion: i32, loadingString: string | null, index: i32): i32 {
        return 0;
    }
}

