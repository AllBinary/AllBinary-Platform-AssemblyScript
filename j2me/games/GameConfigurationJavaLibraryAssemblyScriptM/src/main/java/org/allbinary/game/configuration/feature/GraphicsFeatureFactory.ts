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
// package org.allbinary.game.configuration.feature
// import org.allbinary.logic.string.StringUtil

@global export class GraphicsFeatureFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.feature.GraphicsFeatureFactory";
    }
    @lazy static jv_instance: GraphicsFeatureFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GraphicsFeatureFactory | null {
        if (!GraphicsFeatureFactory.js_instance) {
            GraphicsFeatureFactory.js_instance = true;
            GraphicsFeatureFactory.jv_instance = new GraphicsFeatureFactory().jinit_GraphicsFeatureFactory_0();
        }
        return GraphicsFeatureFactory.jv_instance;
    }
    static set instance(value: GraphicsFeatureFactory | null) {
        GraphicsFeatureFactory.js_instance = true;
        GraphicsFeatureFactory.jv_instance = value;
    }
    NONE: GraphicsFeature | null = null;
    TRANSPARENT_IMAGE_CREATION: GraphicsFeature | null = null;
    IMAGE_GRAPHICS: GraphicsFeature | null = null;
    IMAGE_ROTATION_ON_THE_FLY: GraphicsFeature | null = null;
    IMAGE_TO_ARRAY_GRAPHICS: GraphicsFeature | null = null;
    SPRITE_QUARTER_ROTATION_GRAPHICS: GraphicsFeature | null = null;
    SPRITE_FULL_GRAPHICS: GraphicsFeature | null = null;
    VECTOR_GRAPHICS: GraphicsFeature | null = null;
    VECTOR_TO_IMAGE_GRAPHICS: GraphicsFeature | null = null;

    jfields_GraphicsFeatureFactory(): void {
    this.NONE = new GraphicsFeature().jinit_GraphicsFeature_1(StringUtil.getInstance()!.NULL_STRING);
    this.TRANSPARENT_IMAGE_CREATION = new GraphicsFeature().jinit_GraphicsFeature_1("Transparent Image Creation");
    this.IMAGE_GRAPHICS = new GraphicsFeature().jinit_GraphicsFeature_1("Image Graphics");
    this.IMAGE_ROTATION_ON_THE_FLY = new GraphicsFeature().jinit_GraphicsFeature_1("Image Rotated On The Fly");
    this.IMAGE_TO_ARRAY_GRAPHICS = new GraphicsFeature().jinit_GraphicsFeature_1("Image To Array Graphics");
    this.SPRITE_QUARTER_ROTATION_GRAPHICS = new GraphicsFeature().jinit_GraphicsFeature_1("Sprite Quarter Rotation Graphics");
    this.SPRITE_FULL_GRAPHICS = new GraphicsFeature().jinit_GraphicsFeature_1("Sprite Full Rotation Graphics");
    this.VECTOR_GRAPHICS = new GraphicsFeature().jinit_GraphicsFeature_1("BasicArrayList Graphics");
    this.VECTOR_TO_IMAGE_GRAPHICS = new GraphicsFeature().jinit_GraphicsFeature_1("BasicArrayList To Image Graphics");
    }
    

    static getInstance(): GraphicsFeatureFactory | null {
        return GraphicsFeatureFactory.instance;
    }
    

    jinit_GraphicsFeatureFactory_0(): GraphicsFeatureFactory {
        super.jinit_JObject_0();
        this.jfields_GraphicsFeatureFactory();
        return this;
    }
}

