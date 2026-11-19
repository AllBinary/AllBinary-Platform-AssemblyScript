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

@global export class GameFeatureFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.feature.GameFeatureFactory";
    }
    @lazy static jv_instance: GameFeatureFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GameFeatureFactory | null {
        if (!GameFeatureFactory.js_instance) {
            GameFeatureFactory.js_instance = true;
            GameFeatureFactory.jv_instance = new GameFeatureFactory().jinit_GameFeatureFactory_0();
        }
        return GameFeatureFactory.jv_instance;
    }
    static set instance(value: GameFeatureFactory | null) {
        GameFeatureFactory.js_instance = true;
        GameFeatureFactory.jv_instance = value;
    }
    SOUND: GameFeature | null = null;
    MUSIC: GameFeature | null = null;
    SCREEN_SHAKE: Feature | null = null;
    POST_IMAGE_LOADING_MODIFICATION: Feature | null = null;
    HEALTH_BARS: GameFeature | null = null;
    DAMAGE_FLOATERS: GameFeature | null = null;
    GAME_INPUT_LAYER_PROCESSOR: GameFeature | null = null;
    ARTIFICIAL_INTELLEGENCE_PROCESSOR: GameFeature | null = null;
    COLLIDABLE_INTERFACE_LAYER_PROCESSOR: GameFeature | null = null;
    TICKABLE_LAYER_PROCESSOR: GameFeature | null = null;
    CHEATING: GameFeature | null = null;
    DROPPED_ITEMS: GameFeature | null = null;
    DROPPED_ITEMS_FROM_DEATH: GameFeature | null = null;
    TEST_DESTROYED_LAYER_PROCESSOR: GameFeature | null = null;
    COLLISIONS_WITH_SOURCE: GameFeature | null = null;
    COLLISIONS_FORCED_TWO_DIMENSIONAL: GameFeature | null = null;

    jfields_GameFeatureFactory(): void {
    this.SOUND = new GameFeature().jinit_GameFeature_1("Sound");
    this.MUSIC = new GameFeature().jinit_GameFeature_1("Music");
    this.SCREEN_SHAKE = new Feature().jinit_Feature_1("Screen Shake");
    this.POST_IMAGE_LOADING_MODIFICATION = new Feature().jinit_Feature_1("Post Image Loading Modification (Scaling, Rotation, or Other)");
    this.HEALTH_BARS = new GameFeature().jinit_GameFeature_1("Health Bars");
    this.DAMAGE_FLOATERS = new GameFeature().jinit_GameFeature_1("Damage Floaters");
    this.GAME_INPUT_LAYER_PROCESSOR = new GameFeature().jinit_GameFeature_1("Game Input Layer Processor");
    this.ARTIFICIAL_INTELLEGENCE_PROCESSOR = new GameFeature().jinit_GameFeature_1("Artificial Intelligence Layer Processor");
    this.COLLIDABLE_INTERFACE_LAYER_PROCESSOR = new GameFeature().jinit_GameFeature_1("Collidable Interface Layer Processor");
    this.TICKABLE_LAYER_PROCESSOR = new GameFeature().jinit_GameFeature_1("Tickable Layer Processor");
    this.CHEATING = new GameFeature().jinit_GameFeature_1("Cheating");
    this.DROPPED_ITEMS = new GameFeature().jinit_GameFeature_1("Drops");
    this.DROPPED_ITEMS_FROM_DEATH = new GameFeature().jinit_GameFeature_1("Drops from Dead");
    this.TEST_DESTROYED_LAYER_PROCESSOR = new GameFeature().jinit_GameFeature_1("Destroyed Layer Processor");
    this.COLLISIONS_WITH_SOURCE = new GameFeature().jinit_GameFeature_1("Allow Collisions With Source");
    this.COLLISIONS_FORCED_TWO_DIMENSIONAL = new GameFeature().jinit_GameFeature_1("Collisions Forced Two Dimensional");
    }
    

    static getInstance(): GameFeatureFactory | null {
        return GameFeatureFactory.instance;
    }
    

    jinit_GameFeatureFactory_0(): GameFeatureFactory {
        super.jinit_JObject_0();
        this.jfields_GameFeatureFactory();
        return this;
    }
}

