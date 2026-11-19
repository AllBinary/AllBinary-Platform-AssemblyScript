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
// package org.allbinary.media.image
// import javax.microedition.lcdui.Graphics
// import javax.microedition.lcdui.Image
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.game.configuration.feature.GameFeatureFactory
// import org.allbinary.graphics.Anchor
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.string.CommonStrings

@global export class ImageCopyUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.media.image.ImageCopyUtil";
    }
    @lazy static jv_instance: ImageCopyUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): ImageCopyUtil | null {
        if (!ImageCopyUtil.js_instance) {
            ImageCopyUtil.js_instance = true;
            ImageCopyUtil.jv_instance = new ImageCopyUtil().jinit_ImageCopyUtil_0();
        }
        return ImageCopyUtil.jv_instance;
    }
    static set instance(value: ImageCopyUtil | null) {
        ImageCopyUtil.js_instance = true;
        ImageCopyUtil.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    imageCreationUtil: ImageCreationUtil | null = null;
    anchor: i32 = 0;
    gameFeatureFactory: GameFeatureFactory | null = null;
    features: Features | null = null;
    NO_COPY: string | null = null;

    jfields_ImageCopyUtil(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.imageCreationUtil = ImageCreationUtil.getInstance();
    this.anchor = Anchor.TOP_LEFT;
    this.gameFeatureFactory = GameFeatureFactory.getInstance();
    this.features = Features.getInstance();
    this.NO_COPY = "J2ME does not need to copy images after initial loading";
    }
    

    static getInstance(): ImageCopyUtil | null {
        return ImageCopyUtil.instance;
    }
    

    jinit_ImageCopyUtil_0(): ImageCopyUtil {
        super.jinit_JObject_0();
        this.jfields_ImageCopyUtil();
        return this;
    }
    

    createImageForRotation(originalImage: Image | null): Image | null {
        return this.createImage(originalImage);
    }
    

    createImage(originalImage: Image | null): Image | null {
        if (!this.features!.isFeature(this.gameFeatureFactory!.POST_IMAGE_LOADING_MODIFICATION)) {
            this.logUtil!.put(this.NO_COPY, this, this.commonStrings!.CONSTRUCTOR, new JException().jinit_JException_0()); if (JThrowable.pending !== null) return null;
            return originalImage;
        } if (JThrowable.pending !== null) return null;
        let image: Image | null = this.imageCreationUtil!.createImageWH(originalImage!.getWidth(), originalImage!.getHeight()); if (JThrowable.pending !== null) return null;
        if (image!.isMutable()) {
            image!.getGraphics()!.drawImage(originalImage, 0, 0, this.anchor); if (JThrowable.pending !== null) return null;
            return image;
        } else {
            { JThrowable.raise(new JException().jinit_JException_1("Not Mutable")); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
    

    createImageScale(originalImage: Image | null, canvasScale: f32, resize: bool): Image | null {
        if (!this.features!.isFeature(this.gameFeatureFactory!.POST_IMAGE_LOADING_MODIFICATION)) {
            this.logUtil!.put(this.NO_COPY, this, this.commonStrings!.CONSTRUCTOR, new JException().jinit_JException_0()); if (JThrowable.pending !== null) return null;
            return originalImage;
        } if (JThrowable.pending !== null) return null;
        let newWidth: i32 = JMath.toInt(((<f32>(originalImage!.getWidth())) * canvasScale)); if (JThrowable.pending !== null) return null;
        let newHeight: i32 = JMath.toInt(((<f32>(originalImage!.getHeight())) * canvasScale)); if (JThrowable.pending !== null) return null;
        if (resize) {
            if (newWidth < newHeight) {
                newWidth = newHeight;
            }
            if (newHeight < newWidth) {
                newHeight = newWidth;
            }
        }
        let image: Image | null = this.imageCreationUtil!.createImageWH(newWidth, newHeight); if (JThrowable.pending !== null) return null;
        if (image!.isMutable()) {
            let halfWidthDelta: i32 = (newWidth - originalImage!.getWidth()) / 2; if (JThrowable.pending !== null) return null;
            let halfHeightDelta: i32 = (newHeight - originalImage!.getHeight()) / 2; if (JThrowable.pending !== null) return null;
            let graphics: Graphics | null = image!.getGraphics(); if (JThrowable.pending !== null) return null;
            graphics!.drawImage(originalImage, halfWidthDelta, halfHeightDelta, this.anchor); if (JThrowable.pending !== null) return null;
            return image;
        } else {
            { JThrowable.raise(new JException().jinit_JException_1("Not Mutable")); return null; }
        } if (JThrowable.pending !== null) return null;
        return null;
    }
}

