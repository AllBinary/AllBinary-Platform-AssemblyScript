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
// package org.allbinary.graphics.opengles
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.game.configuration.feature.GameFeatureChoiceGroups
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class OpenGLOptions extends JObject {

    jclassName(): string {
        return "org.allbinary.graphics.opengles.OpenGLOptions";
    }

    jinit_OpenGLOptions_0(): OpenGLOptions {
        super.jinit_JObject_0();
        return this;
    }
    

    init(): void {
        let openGLFeatureFactory: OpenGLFeatureFactory | null = OpenGLFeatureFactory.getInstance(); if (JThrowable.pending !== null) return;
        if (Features.getInstance()!.isFeature(openGLFeatureFactory!.OPENGL_OPTIONS)) {
            let openGLMultipleList: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return;
            openGLMultipleList!.add(openGLFeatureFactory!.OPENGL); if (JThrowable.pending !== null) return;
            GameFeatureChoiceGroups.getMultipleInstance()!.add("OpenGL (Complete Restart)", openGLMultipleList); if (JThrowable.pending !== null) return;
            let openGLVersionSelectorMultipleList: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return;
            openGLVersionSelectorMultipleList!.add(openGLFeatureFactory!.OPENGL_AUTO_SELECT); if (JThrowable.pending !== null) return;
            openGLVersionSelectorMultipleList!.add(openGLFeatureFactory!.OPENGL_MINIMUM); if (JThrowable.pending !== null) return;
            GameFeatureChoiceGroups.getExclusiveInstance()!.add("OpenGL Version Selector", openGLVersionSelectorMultipleList); if (JThrowable.pending !== null) return;
            let openGLImageColorMultipleList: BasicArrayList | null = new BasicArrayListD().jinit_BasicArrayListD_0(); if (JThrowable.pending !== null) return;
            openGLImageColorMultipleList!.add(openGLFeatureFactory!.IMAGE_COLOR_DEPTH_4444); if (JThrowable.pending !== null) return;
            openGLImageColorMultipleList!.add(openGLFeatureFactory!.IMAGE_COLOR_DEPTH_8888); if (JThrowable.pending !== null) return;
            GameFeatureChoiceGroups.getExclusiveInstance()!.add("OpenGL Image Color RGBA", openGLImageColorMultipleList); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

