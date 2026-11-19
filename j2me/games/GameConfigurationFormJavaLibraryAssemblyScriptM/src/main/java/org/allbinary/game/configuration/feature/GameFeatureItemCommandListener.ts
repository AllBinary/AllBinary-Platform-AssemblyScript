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
// import javax.microedition.lcdui.Command
// import javax.microedition.lcdui.LcduiItem
// import javax.microedition.lcdui.ItemCommandListener
// import org.allbinary.game.configuration.GameConfigurationGauge
// import org.allbinary.game.configuration.GameConfigurationUtil
// import org.allbinary.game.configuration.GameOptionsForm
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.midlet.MidletStrings
// import org.allbinary.string.CommonLabels
// import org.allbinary.string.CommonStrings

@global export class GameFeatureItemCommandListener extends JObject implements ItemCommandListener {

    jclassName(): string {
        return "org.allbinary.game.configuration.feature.GameFeatureItemCommandListener";
    }
    logUtil: LogUtil | null = null;
    gameOptionsForm: GameOptionsForm | null = null;

    jfields_GameFeatureItemCommandListener(): void {
    this.logUtil = LogUtil.getInstance();
    
    }
    

    jinit_GameFeatureItemCommandListener_1(gameOptionsForm: GameOptionsForm | null): GameFeatureItemCommandListener {
        super.jinit_JObject_0();
        this.jfields_GameFeatureItemCommandListener();
        this.gameOptionsForm = gameOptionsForm;
        return this;
    }
    

    commandAction(command: Command | null, item: LcduiItem | null): void {
        do {
            let itemLabel: string | null = item!.getLabel(); if (JThrowable.pending !== null) break;
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonLabels.getInstance()!.ITEM_LABEL)!.append(itemLabel)), this, MidletStrings.getInstance()!.COMMAND_ACTION); if (JThrowable.pending !== null) break;
            if ((item instanceof GameConfigurationGauge)) {
                GameConfigurationUtil.getInstance()!.change(this.gameOptionsForm, changetype<GameConfigurationGauge | null>(item)); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
            this.logUtil!.put(commonStrings!.EXCEPTION, this, MidletStrings.getInstance()!.COMMAND_ACTION, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

