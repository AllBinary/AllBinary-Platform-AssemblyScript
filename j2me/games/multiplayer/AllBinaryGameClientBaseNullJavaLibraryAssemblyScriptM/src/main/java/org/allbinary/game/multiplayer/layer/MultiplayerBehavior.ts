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
// package org.allbinary.game.multiplayer.layer
// import org.allbinary.logic.string.StringUtil

@global export class MultiplayerBehavior extends JObject {

    jclassName(): string {
        return "org.allbinary.game.multiplayer.layer.MultiplayerBehavior";
    }
    @lazy static jv_NULL_MULTIPLAYER_BEHAVIOR: MultiplayerBehavior | null = null;
    @lazy static js_NULL_MULTIPLAYER_BEHAVIOR: bool = false;
    static get NULL_MULTIPLAYER_BEHAVIOR(): MultiplayerBehavior | null {
        if (!MultiplayerBehavior.js_NULL_MULTIPLAYER_BEHAVIOR) {
            MultiplayerBehavior.js_NULL_MULTIPLAYER_BEHAVIOR = true;
            MultiplayerBehavior.jv_NULL_MULTIPLAYER_BEHAVIOR = new MultiplayerBehavior().jinit_MultiplayerBehavior_1(StringUtil.getInstance()!.EMPTY_STRING);
        }
        return MultiplayerBehavior.jv_NULL_MULTIPLAYER_BEHAVIOR;
    }
    static set NULL_MULTIPLAYER_BEHAVIOR(value: MultiplayerBehavior | null) {
        MultiplayerBehavior.js_NULL_MULTIPLAYER_BEHAVIOR = true;
        MultiplayerBehavior.jv_NULL_MULTIPLAYER_BEHAVIOR = value;
    }
    

    jinit_MultiplayerBehavior_1(username: string | null): MultiplayerBehavior {
        super.jinit_JObject_0();
        return this;
    }
    

    startTick(): void {
    }
    

    endTick(): void {
    }
    

    getApproximateElapsed(): i64 {
        return (<i64>0);
    }
}

