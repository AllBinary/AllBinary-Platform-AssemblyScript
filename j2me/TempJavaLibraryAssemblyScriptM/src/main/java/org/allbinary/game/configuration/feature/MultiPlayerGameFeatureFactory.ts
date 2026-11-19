// Generated Code Do Not Modify
// package org.allbinary.game.configuration.feature

@global export class MultiPlayerGameFeatureFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.feature.MultiPlayerGameFeatureFactory";
    }
    @lazy static jv_instance: MultiPlayerGameFeatureFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): MultiPlayerGameFeatureFactory | null {
        if (!MultiPlayerGameFeatureFactory.js_instance) {
            MultiPlayerGameFeatureFactory.js_instance = true;
            MultiPlayerGameFeatureFactory.jv_instance = new MultiPlayerGameFeatureFactory().jinit_MultiPlayerGameFeatureFactory_0();
        }
        return MultiPlayerGameFeatureFactory.jv_instance;
    }
    static set instance(value: MultiPlayerGameFeatureFactory | null) {
        MultiPlayerGameFeatureFactory.js_instance = true;
        MultiPlayerGameFeatureFactory.jv_instance = value;
    }
    

    static getInstance(): MultiPlayerGameFeatureFactory | null {
        return MultiPlayerGameFeatureFactory.instance;
    }
    

    jinit_MultiPlayerGameFeatureFactory_0(): MultiPlayerGameFeatureFactory {
        super.jinit_JObject_0();
        return this;
    }
    

    addCommands(anyType: Object | null): void {
    }
}

