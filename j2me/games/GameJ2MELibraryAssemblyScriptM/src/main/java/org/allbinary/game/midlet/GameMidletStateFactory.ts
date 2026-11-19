// Generated Code Do Not Modify
// package org.allbinary.game.midlet
// import org.allbinary.game.state.GameState
// import org.allbinary.game.state.GameStateFactory
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker
// import org.allbinary.logic.string.StringUtil
// import org.allbinary.string.CommonLabels

@global export class GameMidletStateFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.midlet.GameMidletStateFactory";
    }
    @lazy static jv_INSTANCE: GameMidletStateFactory | null = null;
    @lazy static js_INSTANCE: bool = false;
    static get INSTANCE(): GameMidletStateFactory | null {
        if (!GameMidletStateFactory.js_INSTANCE) {
            GameMidletStateFactory.js_INSTANCE = true;
            GameMidletStateFactory.jv_INSTANCE = new GameMidletStateFactory().jinit_GameMidletStateFactory_0();
        }
        return GameMidletStateFactory.jv_INSTANCE;
    }
    static set INSTANCE(value: GameMidletStateFactory | null) {
        GameMidletStateFactory.js_INSTANCE = true;
        GameMidletStateFactory.jv_INSTANCE = value;
    }
    logUtil: LogUtil | null = null;
    currentGameState: GameState | null = null;

    jfields_GameMidletStateFactory(): void {
    this.logUtil = LogUtil.getInstance();
    this.currentGameState = GameStateFactory.getInstance()!.NO_GAME_STATE;
    }
    

    jinit_GameMidletStateFactory_0(): GameMidletStateFactory {
        super.jinit_JObject_0();
        this.jfields_GameMidletStateFactory();
        return this;
    }
    

    static getInstance(): GameMidletStateFactory | null {
        return GameMidletStateFactory.INSTANCE;
    }
    

    getCurrentGameState(): GameState | null {
        return this.currentGameState;
    }
    

    setCurrentGameState(currentGameState: GameState | null): void {
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append(CommonLabels.getInstance()!.CURRENT)!.append(" GameState: ")!.append(StringUtil.getInstance()!.toString1(currentGameState))), this, "setCurrentGameState"); if (JThrowable.pending !== null) return;
        this.currentGameState = currentGameState;
    }
}

