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
// package org.allbinary.game.configuration
// import javax.microedition.lcdui.LcduiItem
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.math.SmallIntegerSingletonFactory
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.string.CommonStrings

@global export class GameConfigurationUtil extends JObject {

    jclassName(): string {
        return "org.allbinary.game.configuration.GameConfigurationUtil";
    }
    @lazy static jv_instance: GameConfigurationUtil | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): GameConfigurationUtil | null {
        if (!GameConfigurationUtil.js_instance) {
            GameConfigurationUtil.js_instance = true;
            GameConfigurationUtil.jv_instance = new GameConfigurationUtil().jinit_GameConfigurationUtil_0();
        }
        return GameConfigurationUtil.jv_instance;
    }
    static set instance(value: GameConfigurationUtil | null) {
        GameConfigurationUtil.js_instance = true;
        GameConfigurationUtil.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    commonStrings: CommonStrings | null = null;
    GAUGE_UPDATE: string | null = null;
    FROM: string | null = null;
    TO: string | null = null;
    COMPETITION_VALUE: i32 = 0;

    jfields_GameConfigurationUtil(): void {
    this.logUtil = LogUtil.getInstance();
    this.commonStrings = CommonStrings.getInstance();
    this.GAUGE_UPDATE = "Gauge Update: ";
    this.FROM = " from: ";
    this.TO = " to: ";
    this.COMPETITION_VALUE = 1;
    }

    jinit_GameConfigurationUtil_0(): GameConfigurationUtil {
        super.jinit_JObject_0();
        this.jfields_GameConfigurationUtil();
        return this;
    }
    

    static getInstance(): GameConfigurationUtil | null {
        return GameConfigurationUtil.instance;
    }
    

    change(gameOptionsForm: GameOptionsForm | null, gauge: GameConfigurationGauge | null): void {
        this.update(gauge); if (JThrowable.pending !== null) return;
        let gameConfigurationSingleton: GameConfigurationSingleton | null = GameConfigurationSingleton.getInstance(); if (JThrowable.pending !== null) return;
        let gameConfiguration: GameConfiguration | null = gameConfigurationSingleton!.getInstanceByName(gauge!.getLabel()); if (JThrowable.pending !== null) return;
        this.updateChallange(gameOptionsForm, gameConfiguration); if (JThrowable.pending !== null) return;
    }
    

    update(gauge: GameConfigurationGauge | null): void {
        let gameConfigurationSingleton: GameConfigurationSingleton | null = GameConfigurationSingleton.getInstance(); if (JThrowable.pending !== null) return;
        let gameConfiguration: GameConfiguration | null = gameConfigurationSingleton!.getInstanceByName(gauge!.getLabel()); if (JThrowable.pending !== null) return;
        let smallIntegerSingletonFactory: SmallIntegerSingletonFactory | null = SmallIntegerSingletonFactory.getInstance(); if (JThrowable.pending !== null) return;
        let value: JInteger | null = smallIntegerSingletonFactory!.getAt(gauge!.getValue() + gameConfiguration!.getMinValue()!.intValue()); if (JThrowable.pending !== null) return;
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.GAUGE_UPDATE); if (JThrowable.pending !== null) return;
        stringBuffer!.append(gameConfiguration!.getName()); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.FROM); if (JThrowable.pending !== null) return;
        stringBuffer!.appendint((<i32>(gameConfiguration!.getValue()!.intValue()))); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.TO); if (JThrowable.pending !== null) return;
        stringBuffer!.appendint((<i32>(value!.intValue()))); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(stringBuffer), this, this.commonStrings!.UPDATE); if (JThrowable.pending !== null) return;
        gameConfiguration!.setValue(value); if (JThrowable.pending !== null) return;
    }
    

    setDefault(gauge: GameConfigurationGauge | null): void {
        let gameConfigurationSingleton: GameConfigurationSingleton | null = GameConfigurationSingleton.getInstance(); if (JThrowable.pending !== null) return;
        let gameConfiguration: GameConfiguration | null = gameConfigurationSingleton!.getInstanceByName(gauge!.getLabel()); if (JThrowable.pending !== null) return;
        let stringBuffer: StringMaker | null = new StringMaker().jinit_StringMaker_0(); if (JThrowable.pending !== null) return;
        stringBuffer!.append("Gauge Default: "); if (JThrowable.pending !== null) return;
        stringBuffer!.append(gameConfiguration!.getName()); if (JThrowable.pending !== null) return;
        stringBuffer!.append(this.TO); if (JThrowable.pending !== null) return;
        stringBuffer!.appendint((<i32>(gameConfiguration!.getDefaultValue()!.intValue()))); if (JThrowable.pending !== null) return;
        this.logUtil!.putF(JObject.jtoString(stringBuffer), this, "setDefault"); if (JThrowable.pending !== null) return;
        gauge!.setValue(gameConfiguration!.getDefaultValue()!.intValue() - gameConfiguration!.getMinValue()!.intValue()); if (JThrowable.pending !== null) return;
        gameConfiguration!.setValue(gameConfiguration!.getDefaultValue()); if (JThrowable.pending !== null) return;
    }
    

    updateChallange(gameOptionsForm: GameOptionsForm | null, gameConfiguration: GameConfiguration | null): void {
        let gameConfigurationSingleton: GameConfigurationSingleton | null = GameConfigurationSingleton.getInstance(); if (JThrowable.pending !== null) return;
        let gameConfigurationCentral: GameConfigurationCentral | null = GameConfigurationCentral.getInstance(); if (JThrowable.pending !== null) return;
        if (gameConfiguration == gameConfigurationCentral!.CHALLENGE_LEVEL) {
            this.logUtil!.putF(this.commonStrings!.START, this, "updateChallange"); if (JThrowable.pending !== null) return;
            gameConfigurationCentral!.COLLIDE_DAMAGE!.setValue(gameConfiguration!.getValue()); if (JThrowable.pending !== null) return;
            gameConfigurationCentral!.ATTACK_CHALLENGE_LEVEL!.setValue(gameConfiguration!.getValue()); if (JThrowable.pending !== null) return;
            gameConfigurationCentral!.DURABILITY_CHALLENGE_LEVEL!.setValue(gameConfiguration!.getValue()); if (JThrowable.pending !== null) return;
            gameConfigurationCentral!.SPEED_CHALLENGE_LEVEL!.setValue(gameConfiguration!.getValue()); if (JThrowable.pending !== null) return;
            let size: i32 = gameOptionsForm!.size(); if (JThrowable.pending !== null) return;
            for (let index: i32 = 0; index < size; index++) {
                let item: LcduiItem | null = gameOptionsForm!.get(index); if (JThrowable.pending !== null) return;
                if ((item instanceof GameConfigurationGauge)) {
                    let gauge: GameConfigurationGauge | null = changetype<GameConfigurationGauge | null>(item);
                    let name: string | null = item!.getLabel(); if (JThrowable.pending !== null) return;
                    let nextGameConfiguration: GameConfiguration | null = gameConfigurationSingleton!.getInstanceByName(name); if (JThrowable.pending !== null) return;
                    if (nextGameConfiguration == gameConfigurationCentral!.COLLIDE_DAMAGE) {
                        gauge!.setValue(gameConfigurationCentral!.COLLIDE_DAMAGE!.getValue()!.intValue() - gameConfiguration!.getMinValue()!.intValue()); if (JThrowable.pending !== null) return;
                    } else if (nextGameConfiguration == gameConfigurationCentral!.DURABILITY_CHALLENGE_LEVEL) {
                        gauge!.setValue(gameConfigurationCentral!.DURABILITY_CHALLENGE_LEVEL!.getValue()!.intValue() - gameConfiguration!.getMinValue()!.intValue()); if (JThrowable.pending !== null) return;
                    } else if (nextGameConfiguration == gameConfigurationCentral!.ATTACK_CHALLENGE_LEVEL) {
                        gauge!.setValue(gameConfigurationCentral!.ATTACK_CHALLENGE_LEVEL!.getValue()!.intValue() - gameConfiguration!.getMinValue()!.intValue()); if (JThrowable.pending !== null) return;
                    } else if (nextGameConfiguration == gameConfigurationCentral!.SPEED_CHALLENGE_LEVEL) {
                        gauge!.setValue(gameConfigurationCentral!.SPEED_CHALLENGE_LEVEL!.getValue()!.intValue() - gameConfiguration!.getMinValue()!.intValue()); if (JThrowable.pending !== null) return;
                    } if (JThrowable.pending !== null) return;
                } if (JThrowable.pending !== null) return;
            } if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
    

    updateCompetitionValue(): void {
        this.logUtil!.putF(this.commonStrings!.START, this, "updateCompetitionValue"); if (JThrowable.pending !== null) return;
        let gameConfigurationCentral: GameConfigurationCentral | null = GameConfigurationCentral.getInstance(); if (JThrowable.pending !== null) return;
        this.COMPETITION_VALUE = gameConfigurationCentral!.COLLIDE_DAMAGE!.getValue()!.intValue() + gameConfigurationCentral!.ATTACK_CHALLENGE_LEVEL!.getValue()!.intValue() + gameConfigurationCentral!.DURABILITY_CHALLENGE_LEVEL!.getValue()!.intValue() + gameConfigurationCentral!.SPEED_CHALLENGE_LEVEL!.getValue()!.intValue(); if (JThrowable.pending !== null) return;
        this.COMPETITION_VALUE = (this.COMPETITION_VALUE >> 2);
    }
    

    getCompetitionValue(): i32 {
        return this.COMPETITION_VALUE;
    }
}

