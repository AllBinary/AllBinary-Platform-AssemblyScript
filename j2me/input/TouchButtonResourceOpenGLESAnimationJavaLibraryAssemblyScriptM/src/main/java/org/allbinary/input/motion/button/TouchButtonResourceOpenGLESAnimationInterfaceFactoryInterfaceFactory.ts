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
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.graphics.opengles.OpenGLFeatureFactory
// import org.allbinary.image.opengles.OpenGLImageCacheFactory

@global export class TouchButtonResourceOpenGLESAnimationInterfaceFactoryInterfaceFactory extends TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory {

    jclassName(): string {
        return "org.allbinary.input.motion.button.TouchButtonResourceOpenGLESAnimationInterfaceFactoryInterfaceFactory";
    }
    

    jinit_TouchButtonResourceOpenGLESAnimationInterfaceFactoryInterfaceFactory_0(): TouchButtonResourceOpenGLESAnimationInterfaceFactoryInterfaceFactory {
        super.jinit_TouchButtonResourceAnimationInterfaceFactoryInterfaceFactory_1("OpenGL TouchButton Animations");
        return this;
    }
    

    init(level: i32): void {
        super.initImageCache(OpenGLImageCacheFactory.getInstance(), level); if (JThrowable.pending !== null) return;
    }
    

    isFeature(): bool {
        if (Features.getInstance()!.isDefault(OpenGLFeatureFactory.getInstance()!.OPENGL)) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
}

