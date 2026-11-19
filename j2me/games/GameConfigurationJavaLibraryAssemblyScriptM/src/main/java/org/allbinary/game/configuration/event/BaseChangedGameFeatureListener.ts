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
// import org.allbinary.game.configuration.feature.Feature
// import org.allbinary.game.configuration.feature.Features
// import org.allbinary.game.configuration.feature.GameFeatureUtil
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class BaseChangedGameFeatureListener extends JObject implements GameFeatureListenerInterface {

    jclassName(): string {
        return "org.allbinary.game.configuration.event.BaseChangedGameFeatureListener";
    }
    logUtil: LogUtil | null = null;
    gameFeatureUtil: GameFeatureUtil | null = null;
    list: BasicArrayList | null = null;
    changed: bool = false;

    jfields_BaseChangedGameFeatureListener(): void {
    this.logUtil = LogUtil.getInstance();
    this.gameFeatureUtil = GameFeatureUtil.getInstance();
    this.list = new BasicArrayListD().jinit_BasicArrayListD_0();
    this.changed = true;
    }

    jinit_BaseChangedGameFeatureListener_0(): BaseChangedGameFeatureListener {
        super.jinit_JObject_0();
        this.jfields_BaseChangedGameFeatureListener();
        return this;
    }
    

    onEvent(eventObject: AllBinaryEventObject | null): void {
        ForcedLogUtil.log(CommonStrings.getInstance()!.NOT_IMPLEMENTED, this); if (JThrowable.pending !== null) return;
    }
    

    onGameFeatureChange(gameFeatureEvent: GameFeatureEvent | null): void {
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(this.gameFeatureUtil!.GAME_FEATURE_CHANGED)!.append(gameFeatureEvent!.getWhatChanged())), this, this.gameFeatureUtil!.ON_GAME_FEATURE_CHANGE); if (JThrowable.pending !== null) return;
        this.list!.add(gameFeatureEvent!.getGameOption()); if (JThrowable.pending !== null) return;
        this.setChanged(true); if (JThrowable.pending !== null) return;
    }
    

    add(gameFeature: Feature | null): void {
        this.list!.add(gameFeature); if (JThrowable.pending !== null) return;
    }
    

    remove(gameFeature: Feature | null): void {
        this.list!.remove(gameFeature); if (JThrowable.pending !== null) return;
    }
    

    setChanged(initialized: bool): void {
        this.changed = initialized;
        if (!this.isChanged()) {
            this.list!.clear(); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    isChangedFeature(gameFeature: Feature | null): bool {
        let isChanged: bool = this.list!.contains(gameFeature); if (JThrowable.pending !== null) return false;
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return false;
        stringBuffer!.append("GameFeature: "); if (JThrowable.pending !== null) return false;
        stringBuffer!.append(StringUtil.getInstance()!.toString1(gameFeature)); if (JThrowable.pending !== null) return false;
        stringBuffer!.append(" isFeature: "); if (JThrowable.pending !== null) return false;
        stringBuffer!.appendboolean(Features.getInstance()!.isFeature(gameFeature)); if (JThrowable.pending !== null) return false;
        stringBuffer!.append(" isChanged: "); if (JThrowable.pending !== null) return false;
        stringBuffer!.appendboolean(isChanged); if (JThrowable.pending !== null) return false;
        this.logUtil!.putF(JObject.jtoString(stringBuffer), this, "isChanged"); if (JThrowable.pending !== null) return false;
        return isChanged;
    }
    

    isChanged(): bool {
        return this.changed;
    }
}

