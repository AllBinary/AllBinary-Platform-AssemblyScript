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
// import org.allbinary.animation.FeaturedAnimationInterfaceFactoryInterfaceFactory
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class FeatureResourceInitializationUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.game.resource.FeatureResourceInitializationUtil";
    }
    @lazy static jv_instance: FeatureResourceInitializationUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): FeatureResourceInitializationUtil | null {
        if (!FeatureResourceInitializationUtil.js_instance) {
            FeatureResourceInitializationUtil.js_instance = true;
            FeatureResourceInitializationUtil.jv_instance = new FeatureResourceInitializationUtil().jinit_FeatureResourceInitializationUtil_0();
        }
        return FeatureResourceInitializationUtil.jv_instance;
    }
    static set instance(value: FeatureResourceInitializationUtil | null) {
        FeatureResourceInitializationUtil.js_instance = true;
        FeatureResourceInitializationUtil.jv_instance = value;
    }
    logUtil: LogUtil | null = null;

    jfields_FeatureResourceInitializationUtil(): void {
    this.logUtil = LogUtil.getInstance();
    }

    jinit_FeatureResourceInitializationUtil_0(): FeatureResourceInitializationUtil {
        super.jinit_JObject_0();
        this.jfields_FeatureResourceInitializationUtil();
        return this;
    }
    

    static getInstance(): FeatureResourceInitializationUtil | null {
        return FeatureResourceInitializationUtil.instance;
    }
    

    init(level: i32): void {
        let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(commonStrings!.START, this, commonStrings!.INIT); if (JThrowable.pending !== null) return;
        let featuredResourceFactory: FeaturedResourceFactory | null = FeaturedAnimationInterfaceFactoryInterfaceFactory.getInstance(); if (JThrowable.pending !== null) return;
        featuredResourceFactory!.init(level); if (JThrowable.pending !== null) return;
        FeaturedResourceRelativeRelationshipFactory.getInstance()!.init(level); if (JThrowable.pending !== null) return;
    }
}

