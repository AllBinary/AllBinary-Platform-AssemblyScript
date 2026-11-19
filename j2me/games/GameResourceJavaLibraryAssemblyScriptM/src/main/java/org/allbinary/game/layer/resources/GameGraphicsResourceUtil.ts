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
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.game.configuration.feature.GraphicsFeature
// import org.allbinary.game.configuration.feature.GraphicsFeatureFactory
// import org.allbinary.graphics.displayable.CanvasStrings
// import org.allbinary.graphics.opengles.OpenGLFeatureUtil
// import org.allbinary.logic.NullUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonStrings

@global export class GameGraphicsResourceUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.game.layer.resources.GameGraphicsResourceUtil";
    }
    @lazy static jv_instance: Object | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): Object | null {
        if (!GameGraphicsResourceUtil.js_instance) {
            GameGraphicsResourceUtil.js_instance = true;
            GameGraphicsResourceUtil.jv_instance = NullUtil.getInstance()!.NULL_OBJECT;
        }
        return GameGraphicsResourceUtil.jv_instance;
    }
    static set instance(value: Object | null) {
        GameGraphicsResourceUtil.js_instance = true;
        GameGraphicsResourceUtil.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    SPRITE: string | null = null;
    QUARTER: string | null = null;
    name: string | null = null;

    jfields_GameGraphicsResourceUtil(): void {
    this.logUtil = LogUtil.getInstance();
    this.SPRITE = "_sprite";
    this.QUARTER = "_quarter";
    this.name = StringUtil.getInstance()!.EMPTY_STRING;
    }
    

    static getInstance(): GameGraphicsResourceUtil | null {
        if (GameGraphicsResourceUtil.instance == changetype<Object | null>(NullUtil.getInstance()!.NULL_OBJECT)) {
            GameGraphicsResourceUtil.instance = new GameGraphicsResourceUtil().jinit_GameGraphicsResourceUtil_0(); if (JThrowable.pending !== null) return null;
        } if (JThrowable.pending !== null) return null;
        return changetype<GameGraphicsResourceUtil | null>(GameGraphicsResourceUtil.instance);
    }
    

    jinit_GameGraphicsResourceUtil_0(): GameGraphicsResourceUtil {
        super.jinit_JObject_0();
        this.jfields_GameGraphicsResourceUtil();
        do {
            this.name = this.getString(); if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return this;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, commonStrings!.CONSTRUCTOR, e); if (JThrowable.pending !== null) return this;
        } if (JThrowable.pending !== null) return this;
        return this;
    }
    

    getString(): string | null {
        let graphicsFeatureFactory: GraphicsFeatureFactory | null = GraphicsFeatureFactory.getInstance(); if (JThrowable.pending !== null) return null;
        let graphicsFeature: GraphicsFeature | null = graphicsFeatureFactory!.NONE;
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return null;
        if (features!.isFeature(graphicsFeatureFactory!.IMAGE_TO_ARRAY_GRAPHICS)) {
            graphicsFeature = graphicsFeatureFactory!.IMAGE_TO_ARRAY_GRAPHICS;
        } else if (features!.isFeature(graphicsFeatureFactory!.SPRITE_FULL_GRAPHICS)) {
            graphicsFeature = graphicsFeatureFactory!.SPRITE_FULL_GRAPHICS;
        } else if (features!.isFeature(graphicsFeatureFactory!.SPRITE_QUARTER_ROTATION_GRAPHICS)) {
            graphicsFeature = graphicsFeatureFactory!.SPRITE_QUARTER_ROTATION_GRAPHICS;
        } else if (features!.isFeature(graphicsFeatureFactory!.IMAGE_ROTATION_ON_THE_FLY)) {
            graphicsFeature = graphicsFeatureFactory!.IMAGE_ROTATION_ON_THE_FLY;
        } if (JThrowable.pending !== null) return null;
        return this.getStringForFeature(graphicsFeature);
    }
    

    getStringForFeature(graphicsFeature: GraphicsFeature | null): string | null {
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return null;
        let graphicsFeatureFactory: GraphicsFeatureFactory | null = GraphicsFeatureFactory.getInstance(); if (JThrowable.pending !== null) return null;
        stringBuffer!.delete_(0, stringBuffer!.length()); if (JThrowable.pending !== null) return null;
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return null;
        if (features!.isFeature(graphicsFeatureFactory!.VECTOR_GRAPHICS)) {
        } else if (features!.isFeature(graphicsFeatureFactory!.IMAGE_GRAPHICS)) {
            if (graphicsFeature == graphicsFeatureFactory!.IMAGE_TO_ARRAY_GRAPHICS || graphicsFeature == graphicsFeatureFactory!.IMAGE_ROTATION_ON_THE_FLY) {
            } else if (graphicsFeature == graphicsFeatureFactory!.SPRITE_FULL_GRAPHICS) {
                stringBuffer!.append(this.SPRITE); if (JThrowable.pending !== null) return null;
            } else if (graphicsFeature == graphicsFeatureFactory!.SPRITE_QUARTER_ROTATION_GRAPHICS) {
                stringBuffer!.append(this.QUARTER); if (JThrowable.pending !== null) return null;
                stringBuffer!.append(this.SPRITE); if (JThrowable.pending !== null) return null;
            } else {
                { JThrowable.raise(new JException().jinit_JException_1("None/Unknown Sub Image Resource Type Specified")); return null; }
            } if (JThrowable.pending !== null) return null;
        } else if (OpenGLFeatureUtil.getInstance()!.isAnyThreed()) {
            stringBuffer!.append(CanvasStrings.getInstance()!.OBJ_MODEL); if (JThrowable.pending !== null) return null;
        } else {
            { JThrowable.raise(new JException().jinit_JException_1("None/Unknown Main Image Resource Type Specified")); return null; }
        } if (JThrowable.pending !== null) return null;
        return JObject.jtoString(stringBuffer);
    }
    

    getName(): string | null {
        return this.name;
    }
}

