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
// package org.allbinary.input.motion.button
// import org.allbinary.animation.resource.BaseResourceAnimationInterfaceFactoryInterfaceFactory
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.game.resource.ResourceLoadingLevelFactory
// import org.allbinary.graphics.opengles.OpenGLFeatureFactory
// import org.allbinary.image.ImageCache
// import org.allbinary.image.ImageCacheFactory
// import org.allbinary.logic.StdUtil

@global export class TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory extends BaseResourceAnimationInterfaceFactoryInterfaceFactory {

    jclassName(): string {
        return "org.allbinary.input.motion.button.TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory";
    }
    

    static createFactory(): TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory | null {
        return new TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory().jinit_TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory_1("TouchButton Animations");
    }
    

    jinit_TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory_1(name: string | null): TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory {
        super.jinit_BaseResourceAnimationInterfaceFactoryInterfaceFactory_4(name, StdUtil.getInstance()!.createHashtable(), StdUtil.getInstance()!.createHashtable(), StdUtil.getInstance()!.createHashtable());
        return this;
    }
    

    init(level: i32): void {
        this.initImageCache(ImageCacheFactory.getInstance(), level); if (JThrowable.pending !== null) return;
    }
    

    initImageCache(imageCache: ImageCache | null, level: i32): void {
        if (this.isInitialized()) {
            return;
        } if (JThrowable.pending !== null) return;
        super.init(level); if (JThrowable.pending !== null) return;
    }
    

    isLoadingLevel(level: i32): bool {
        let resourceLoadingLevelFactory: ResourceLoadingLevelFactory | null = ResourceLoadingLevelFactory.getInstance(); if (JThrowable.pending !== null) return false;
        if (level == resourceLoadingLevelFactory!.LOAD_TOUCH!.getLevel()) {
            return true;
        } else {
            return super.isLoadingLevel(level);
        } if (JThrowable.pending !== null) return false;
        return false;
    }
    

    isFeature(): bool {
        if (!Features.getInstance()!.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL)) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
}

