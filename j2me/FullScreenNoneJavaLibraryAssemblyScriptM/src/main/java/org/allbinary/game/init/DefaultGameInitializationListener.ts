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
// package org.allbinary.game.init
// import org.allbinary.game.configuration.event.GameInitializedEvent
// import org.allbinary.game.configuration.event.GameInitializedEventHandler
// import org.allbinary.game.configuration.event.GameInitializedListenerInterface
// import org.allbinary.game.resource.FeatureResourceInitializationUtil
// import org.allbinary.graphics.threed.SWTJOGLProcessor
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventStrings
// import org.allbinary.string.CommonStrings

@global export class DefaultGameInitializationListener extends JObject implements GameInitializedListenerInterface {

    jclassName(): string {
        return "org.allbinary.game.init.DefaultGameInitializationListener";
    }
    logUtil: LogUtil | null = null;
    swtJOGLProcessor: SWTJOGLProcessor | null = null;
    firstTime: bool = false;

    jfields_DefaultGameInitializationListener(): void {
    this.logUtil = LogUtil.getInstance();
    this.swtJOGLProcessor = SWTJOGLProcessor.getInstance();
    this.firstTime = true;
    }
    

    jinit_DefaultGameInitializationListener_0(): DefaultGameInitializationListener {
        super.jinit_JObject_0();
        this.jfields_DefaultGameInitializationListener();
        let gameInitializedEventHandler: GameInitializedEventHandler | null = GameInitializedEventHandler.getInstance(); if (JThrowable.pending !== null) return this;
        gameInitializedEventHandler!.removeAllListeners(); if (JThrowable.pending !== null) return this;
        gameInitializedEventHandler!.addListenerInterface(changetype<GameInitializedListenerInterface | null>(this)); if (JThrowable.pending !== null) return this;
        return this;
    }
    

    onEvent(eventObject: AllBinaryEventObject | null): void {
        ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this); if (JThrowable.pending !== null) return;
    }
    

    onGameInitialized(gameInitializedEvent: GameInitializedEvent | null): void {
        let ON_GAME_INITIALIZED: string | null = "onGameInitialized";
        let commonStrings: CommonStrings | null = CommonStrings.getInstance(); if (JThrowable.pending !== null) return;
        do {
            this.logUtil!.putF(commonStrings!.START, this, ON_GAME_INITIALIZED); if (JThrowable.pending !== null) break;
            while (!this.swtJOGLProcessor!.isHolderCreated()) {
                this.logUtil!.putF(commonStrings!.UPDATE, this, ON_GAME_INITIALIZED); if (JThrowable.pending !== null) break;
                JThread.sleep(20); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
            FeatureResourceInitializationUtil.getInstance()!.init(gameInitializedEvent!.getLevel()); if (JThrowable.pending !== null) break;
            if (this.firstTime) {
                this.firstTime = false;
            } else {
                this.swtJOGLProcessor!.onSurfaceChanged(); if (JThrowable.pending !== null) break;
            } if (JThrowable.pending !== null) break;
        } while (false); if (JThrowable.pending != null) {
            let e: JException | null = changetype<JException | null>(JThrowable.take());
            this.logUtil!.put(commonStrings!.EXCEPTION, this, ON_GAME_INITIALIZED, e); if (JThrowable.pending !== null) return;
        } if (JThrowable.pending !== null) return;
    }
}

