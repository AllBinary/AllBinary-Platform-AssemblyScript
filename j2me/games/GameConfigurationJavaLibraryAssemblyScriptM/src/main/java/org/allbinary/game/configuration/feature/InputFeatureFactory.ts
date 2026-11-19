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

@global export class InputFeatureFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.feature.InputFeatureFactory";
    }
    @lazy static jv_instance: InputFeatureFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): InputFeatureFactory | null {
        if (!InputFeatureFactory.js_instance) {
            InputFeatureFactory.js_instance = true;
            InputFeatureFactory.jv_instance = new InputFeatureFactory().jinit_InputFeatureFactory_0();
        }
        return InputFeatureFactory.jv_instance;
    }
    static set instance(value: InputFeatureFactory | null) {
        InputFeatureFactory.js_instance = true;
        InputFeatureFactory.jv_instance = value;
    }
    REMOVE_DUPLICATE_KEY_PRESSES: InputFeature | null = null;
    INPUT_MAPPING: InputFeature | null = null;
    MULTI_KEY_PRESS: InputFeature | null = null;
    SINGLE_KEY_REPEAT_PRESS: InputFeature | null = null;
    SINGLE_KEY_PRESS: InputFeature | null = null;

    jfields_InputFeatureFactory(): void {
    this.REMOVE_DUPLICATE_KEY_PRESSES = new InputFeature().jinit_InputFeature_1("Remove Duplicate Key Presses");
    this.INPUT_MAPPING = new InputFeature().jinit_InputFeature_1("Input Mapping");
    this.MULTI_KEY_PRESS = new InputFeature().jinit_InputFeature_1("Multi Key Press");
    this.SINGLE_KEY_REPEAT_PRESS = new InputFeature().jinit_InputFeature_1("Single Key Repeat Press");
    this.SINGLE_KEY_PRESS = new InputFeature().jinit_InputFeature_1("Single Key Press");
    }
    

    static getInstance(): InputFeatureFactory | null {
        return InputFeatureFactory.instance;
    }
    

    jinit_InputFeatureFactory_0(): InputFeatureFactory {
        super.jinit_JObject_0();
        this.jfields_InputFeatureFactory();
        return this;
    }
    

    isSingleKeyProcessing(): bool {
        let features: Features | null = Features.getInstance(); if (JThrowable.pending !== null) return false;
        if (features!.isFeature(this.SINGLE_KEY_REPEAT_PRESS) || features!.isFeature(this.SINGLE_KEY_PRESS)) {
            return true;
        } else {
            return false;
        } if (JThrowable.pending !== null) return false;
        return false;
    }
}

