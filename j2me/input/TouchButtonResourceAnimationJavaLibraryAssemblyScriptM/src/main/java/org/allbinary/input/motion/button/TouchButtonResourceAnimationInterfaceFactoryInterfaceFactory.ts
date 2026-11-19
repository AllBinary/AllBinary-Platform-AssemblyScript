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
// import javax.microedition.lcdui.Image
// import org.allbinary.animation.AnimationBehaviorFactory
// import org.allbinary.animation.NullAnimationFactory
// import org.allbinary.animation.image.sprite.OneRowSpriteIndexedAnimationFactory
// import org.allbinary.animation.resource.BaseResourceAnimationInterfaceFactoryInterfaceFactory
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.game.resource.ResourceLoadingLevelFactory
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvas
// import org.allbinary.graphics.canvas.transition.progress.ProgressCanvasFactory
// import org.allbinary.graphics.opengles.OpenGLFeatureFactory
// import org.allbinary.image.ImageCache
// import org.allbinary.image.ImageCacheFactory
// import org.allbinary.logic.StdUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.system.os.OperatingSystemFactory
// import org.allbinary.media.image.ImageCompleteUtil

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
        let portion: i32 = 140;
        let loadingString: string | null = JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.toString())!.append(" Loading: ")); if (JThrowable.pending !== null) return;
        let index: i32 = 0;
        let progressCanvas: ProgressCanvas | null = ProgressCanvasFactory.getInstance(); if (JThrowable.pending !== null) return;
        progressCanvas!.addPortion(portion, loadingString, index++); if (JThrowable.pending !== null) return;
        let touchButtonBlankResource: TouchButtonResource | null = TouchButtonBlankResource.getInstance(); if (JThrowable.pending !== null) return;
        let touchButtonGenericActionResource: TouchButtonResource | null = TouchButtonGenericActionResource.getInstance(); if (JThrowable.pending !== null) return;
        let touchButtonStartResource: TouchButtonResource | null = TouchButtonStartResource.getInstance(); if (JThrowable.pending !== null) return;
        let touchButtonUpResource: TouchButtonResource | null = TouchButtonUpResource.getInstance(); if (JThrowable.pending !== null) return;
        let touchButtonDownResource: TouchButtonResource | null = TouchButtonDownResource.getInstance(); if (JThrowable.pending !== null) return;
        let touchButtonTurnLeftResource: TouchButtonResource | null = TouchButtonTurnLeftResource.getInstance(); if (JThrowable.pending !== null) return;
        let touchButtonTurnRightResource: TouchButtonResource | null = TouchButtonTurnRightResource.getInstance(); if (JThrowable.pending !== null) return;
        let touchButtonStrafeLeftResource: TouchButtonResource | null = TouchButtonStrafeLeftResource.getInstance(); if (JThrowable.pending !== null) return;
        let touchButtonStrafeRightResource: TouchButtonResource | null = TouchButtonStrafeRightResource.getInstance(); if (JThrowable.pending !== null) return;
        let touchButtonBlankResourceImage: Image | null = imageCache!.getWithKey(touchButtonBlankResource!.RESOURCE); if (JThrowable.pending !== null) return;
        let touchButtonGenericActionResourceImage: Image | null = imageCache!.getWithKey(touchButtonGenericActionResource!.RESOURCE); if (JThrowable.pending !== null) return;
        let touchButtonStartResourceImage: Image | null = imageCache!.getWithKey(touchButtonStartResource!.RESOURCE); if (JThrowable.pending !== null) return;
        let touchButtonUpResourceImage: Image | null = imageCache!.getWithKey(touchButtonUpResource!.RESOURCE); if (JThrowable.pending !== null) return;
        let touchButtonDownResourceImage: Image | null = imageCache!.getWithKey(touchButtonDownResource!.RESOURCE); if (JThrowable.pending !== null) return;
        let touchButtonTurnLeftResourceImage: Image | null = imageCache!.getWithKey(touchButtonTurnLeftResource!.RESOURCE); if (JThrowable.pending !== null) return;
        let touchButtonTurnRightResourceImage: Image | null = imageCache!.getWithKey(touchButtonTurnRightResource!.RESOURCE); if (JThrowable.pending !== null) return;
        let touchButtonStrafeLeftResourceImage: Image | null = imageCache!.getWithKey(touchButtonStrafeLeftResource!.RESOURCE); if (JThrowable.pending !== null) return;
        let touchButtonStrafeRightResourceImage: Image | null = imageCache!.getWithKey(touchButtonStrafeRightResource!.RESOURCE); if (JThrowable.pending !== null) return;
        let nullAnimationFactory: NullAnimationFactory | null = NullAnimationFactory.getFactoryInstance(); if (JThrowable.pending !== null) return;
        if (OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!.isOverScan()) {
            imageCache!.getWithKey(TouchButtonStartResource.getInstance()!.HINT); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
        progressCanvas!.addPortion(portion, loadingString, index++); if (JThrowable.pending !== null) return;
        let imageCompleteUtil: ImageCompleteUtil | null = ImageCompleteUtil.getInstance(); if (JThrowable.pending !== null) return;
        progressCanvas!.addPortion(portion, loadingString, index++); if (JThrowable.pending !== null) return;
        imageCompleteUtil!.waitForImage(touchButtonBlankResourceImage, touchButtonBlankResource!.RESOURCE); if (JThrowable.pending !== null) return;
        this.add(touchButtonBlankResource!.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonBlankResourceImage, AnimationBehaviorFactory.getInstance())); if (JThrowable.pending !== null) return;
        this.add(touchButtonBlankResource!.HINT, nullAnimationFactory); if (JThrowable.pending !== null) return;
        progressCanvas!.addPortion(portion, loadingString, index++); if (JThrowable.pending !== null) return;
        imageCompleteUtil!.waitForImage(touchButtonGenericActionResourceImage, touchButtonGenericActionResource!.RESOURCE); if (JThrowable.pending !== null) return;
        this.add(touchButtonGenericActionResource!.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonGenericActionResourceImage, AnimationBehaviorFactory.getInstance())); if (JThrowable.pending !== null) return;
        this.add(touchButtonGenericActionResource!.HINT, nullAnimationFactory); if (JThrowable.pending !== null) return;
        progressCanvas!.addPortion(portion, loadingString, index++); if (JThrowable.pending !== null) return;
        imageCompleteUtil!.waitForImage(touchButtonStartResourceImage, touchButtonStartResource!.RESOURCE); if (JThrowable.pending !== null) return;
        this.add(touchButtonStartResource!.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonStartResourceImage, AnimationBehaviorFactory.getInstance())); if (JThrowable.pending !== null) return;
        progressCanvas!.addPortion(portion, loadingString, index++); if (JThrowable.pending !== null) return;
        imageCompleteUtil!.waitForImage(touchButtonUpResourceImage, touchButtonUpResource!.RESOURCE); if (JThrowable.pending !== null) return;
        this.add(touchButtonUpResource!.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonUpResourceImage, AnimationBehaviorFactory.getInstance())); if (JThrowable.pending !== null) return;
        this.add(touchButtonUpResource!.HINT, nullAnimationFactory); if (JThrowable.pending !== null) return;
        progressCanvas!.addPortion(portion, loadingString, index++); if (JThrowable.pending !== null) return;
        imageCompleteUtil!.waitForImage(touchButtonDownResourceImage, touchButtonDownResource!.RESOURCE); if (JThrowable.pending !== null) return;
        this.add(touchButtonDownResource!.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonDownResourceImage, AnimationBehaviorFactory.getInstance())); if (JThrowable.pending !== null) return;
        this.add(touchButtonDownResource!.HINT, nullAnimationFactory); if (JThrowable.pending !== null) return;
        progressCanvas!.addPortion(portion, loadingString, index++); if (JThrowable.pending !== null) return;
        imageCompleteUtil!.waitForImage(touchButtonTurnLeftResourceImage, touchButtonTurnLeftResource!.RESOURCE); if (JThrowable.pending !== null) return;
        this.add(touchButtonTurnLeftResource!.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonTurnLeftResourceImage, AnimationBehaviorFactory.getInstance())); if (JThrowable.pending !== null) return;
        this.add(touchButtonTurnLeftResource!.HINT, nullAnimationFactory); if (JThrowable.pending !== null) return;
        progressCanvas!.addPortion(portion, loadingString, index++); if (JThrowable.pending !== null) return;
        imageCompleteUtil!.waitForImage(touchButtonTurnRightResourceImage, touchButtonTurnRightResource!.RESOURCE); if (JThrowable.pending !== null) return;
        this.add(touchButtonTurnRightResource!.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonTurnRightResourceImage, AnimationBehaviorFactory.getInstance())); if (JThrowable.pending !== null) return;
        this.add(touchButtonTurnRightResource!.HINT, nullAnimationFactory); if (JThrowable.pending !== null) return;
        progressCanvas!.addPortion(portion, loadingString, index++); if (JThrowable.pending !== null) return;
        imageCompleteUtil!.waitForImage(touchButtonStrafeLeftResourceImage, touchButtonStrafeLeftResource!.RESOURCE); if (JThrowable.pending !== null) return;
        this.add(touchButtonStrafeLeftResource!.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonStrafeLeftResourceImage, AnimationBehaviorFactory.getInstance())); if (JThrowable.pending !== null) return;
        this.add(touchButtonStrafeLeftResource!.HINT, nullAnimationFactory); if (JThrowable.pending !== null) return;
        progressCanvas!.addPortion(portion, loadingString, index++); if (JThrowable.pending !== null) return;
        imageCompleteUtil!.waitForImage(touchButtonStrafeRightResourceImage, touchButtonStrafeRightResource!.RESOURCE); if (JThrowable.pending !== null) return;
        this.add(touchButtonStrafeRightResource!.RESOURCE, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonStrafeRightResourceImage, AnimationBehaviorFactory.getInstance())); if (JThrowable.pending !== null) return;
        this.add(touchButtonStrafeRightResource!.HINT, nullAnimationFactory); if (JThrowable.pending !== null) return;
        if (OperatingSystemFactory.getInstance()!.getOperatingSystemInstance()!.isOverScan()) {
            let touchButtonStartHintResource: Image | null = imageCache!.getWithKey(TouchButtonStartResource.getInstance()!.HINT); if (JThrowable.pending !== null) return;
            this.add(touchButtonStartResource!.HINT, OneRowSpriteIndexedAnimationFactory.createFactory(touchButtonStartHintResource, AnimationBehaviorFactory.getInstance())); if (JThrowable.pending !== null) return;
        } else {
            this.add(touchButtonStartResource!.HINT, nullAnimationFactory); if (JThrowable.pending !== null) return;
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

