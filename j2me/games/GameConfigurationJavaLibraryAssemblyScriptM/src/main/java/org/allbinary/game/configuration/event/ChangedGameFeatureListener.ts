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
// package org.allbinary.game.configuration.event
// import org.allbinary.game.configuration.GameConfiguration

@global export class ChangedGameFeatureListener extends BaseChangedGameFeatureListener {

    jclassName(): string {
        return "org.allbinary.game.configuration.event.ChangedGameFeatureListener";
    }
    @lazy static jv_gameFeatureListener: ChangedGameFeatureListener | null = null;
    @lazy static js_gameFeatureListener: bool = false;
    static get gameFeatureListener(): ChangedGameFeatureListener | null {
        if (!ChangedGameFeatureListener.js_gameFeatureListener) {
            ChangedGameFeatureListener.js_gameFeatureListener = true;
            ChangedGameFeatureListener.jv_gameFeatureListener = new ChangedGameFeatureListener().jinit_ChangedGameFeatureListener_0();
        }
        return ChangedGameFeatureListener.jv_gameFeatureListener;
    }
    static set gameFeatureListener(value: ChangedGameFeatureListener | null) {
        ChangedGameFeatureListener.js_gameFeatureListener = true;
        ChangedGameFeatureListener.jv_gameFeatureListener = value;
    }

    jinit_ChangedGameFeatureListener_0(): ChangedGameFeatureListener {
        super.jinit_BaseChangedGameFeatureListener_0();
        return this;
    }
    

    static getInstance(): ChangedGameFeatureListener | null {
        return ChangedGameFeatureListener.gameFeatureListener;
    }
    

    isChangedGameConfiguration(gameConfiguration: GameConfiguration | null): bool {
        return this.list!.contains(gameConfiguration);
    }
}

