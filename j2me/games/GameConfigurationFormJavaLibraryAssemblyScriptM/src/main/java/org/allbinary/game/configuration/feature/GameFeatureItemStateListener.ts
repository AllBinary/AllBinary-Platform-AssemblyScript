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
// import javax.microedition.lcdui.ChoiceGroup
// import javax.microedition.lcdui.LcduiItem
// import javax.microedition.lcdui.ItemStateListener
// import org.allbinary.game.configuration.GameConfigurationGauge
// import org.allbinary.game.configuration.GameConfigurationUtil
// import org.allbinary.game.configuration.GameOptionsForm
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonStrings
// import org.allbinary.util.BasicArrayList
// import org.allbinary.util.BasicArrayListD

@global export class GameFeatureItemStateListener extends JObject implements ItemStateListener {

    jclassName(): string {
        return "org.allbinary.game.configuration.feature.GameFeatureItemStateListener";
    }
    @lazy static jv_toggleList: BasicArrayList | null = null;
    @lazy static js_toggleList: bool = false;
    static get toggleList(): BasicArrayList | null {
        if (!GameFeatureItemStateListener.js_toggleList) {
            GameFeatureItemStateListener.js_toggleList = true;
            GameFeatureItemStateListener.jv_toggleList = new BasicArrayListD().jinit_BasicArrayListD_0();
        }
        return GameFeatureItemStateListener.jv_toggleList;
    }
    static set toggleList(value: BasicArrayList | null) {
        GameFeatureItemStateListener.js_toggleList = true;
        GameFeatureItemStateListener.jv_toggleList = value;
    }
    logUtil: LogUtil | null = null;
    gameOptionsForm: GameOptionsForm | null = null;

    jfields_GameFeatureItemStateListener(): void {
    this.logUtil = LogUtil.getInstance();
    
    }
    

    jinit_GameFeatureItemStateListener_1(gameOptionsForm: GameOptionsForm | null): GameFeatureItemStateListener {
        super.jinit_JObject_0();
        this.jfields_GameFeatureItemStateListener();
        this.gameOptionsForm = gameOptionsForm;
        let gameFeatureFactory: GameFeatureFactory | null = GameFeatureFactory.getInstance(); if (JThrowable.pending !== null) return this;
        GameFeatureItemStateListener.add(gameFeatureFactory!.ARTIFICIAL_INTELLEGENCE_PROCESSOR); if (JThrowable.pending !== null) return this;
        GameFeatureItemStateListener.add(gameFeatureFactory!.COLLIDABLE_INTERFACE_LAYER_PROCESSOR); if (JThrowable.pending !== null) return this;
        GameFeatureItemStateListener.add(gameFeatureFactory!.DAMAGE_FLOATERS); if (JThrowable.pending !== null) return this;
        GameFeatureItemStateListener.add(gameFeatureFactory!.DROPPED_ITEMS); if (JThrowable.pending !== null) return this;
        GameFeatureItemStateListener.add(gameFeatureFactory!.GAME_INPUT_LAYER_PROCESSOR); if (JThrowable.pending !== null) return this;
        GameFeatureItemStateListener.add(gameFeatureFactory!.HEALTH_BARS); if (JThrowable.pending !== null) return this;
        GameFeatureItemStateListener.add(gameFeatureFactory!.SOUND); if (JThrowable.pending !== null) return this;
        GameFeatureItemStateListener.add(gameFeatureFactory!.TICKABLE_LAYER_PROCESSOR); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    static add(gameFeature: GameFeature | null): void {
        if (!GameFeatureItemStateListener.toggleList!.contains(gameFeature)) {
            GameFeatureItemStateListener.toggleList!.add(gameFeature); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    itemStateChanged(item: LcduiItem | null): void {
        do {
            let itemLabel: string | null = item!.getLabel(); if (JThrowable.pending !== null) break;
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonLabels.getInstance()!.ITEM_LABEL)!.append(itemLabel)), this, "itemStateChanged"); if (JThrowable.pending !== null) break;
            if ((item instanceof GameConfigurationGauge)) {
                GameConfigurationUtil.getInstance()!.change(this.gameOptionsForm, changetype<GameConfigurationGauge | null>(item)); if (JThrowable.pending !== null) break;
            } else if ((item instanceof ChoiceGroup)) {
                let gameFeatureUtil: GameFeatureUtil | null = GameFeatureUtil.getInstance(); if (JThrowable.pending !== null) break;
                if (gameFeatureUtil!.isExclusive(itemLabel)) {
                    gameFeatureUtil!.updateExclusiveForChoiceGroup(changetype<ChoiceGroup | null>(item)); if (JThrowable.pending !== null) break;
                } else {
                    gameFeatureUtil!.updateMultiple(changetype<ChoiceGroup | null>(item)); if (JThrowable.pending !== null) break;
                } if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, "itemStateChanged", e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

