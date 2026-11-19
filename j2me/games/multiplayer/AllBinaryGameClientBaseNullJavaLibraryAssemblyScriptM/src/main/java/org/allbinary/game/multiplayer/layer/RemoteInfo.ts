/*
 * 
 * To change this license header, choose License Headers in Project Properties. 
 * To change this template file, choose Tools | Templates 
 * and open the template in the editor.  
 */
// Generated Code Do Not Modify
// package org.allbinary.game.multiplayer.layer
// import org.allbinary.logic.string.StringUtil

@global export class RemoteInfo extends JObject {

    jclassName(): string {
        return "org.allbinary.game.multiplayer.layer.RemoteInfo";
    }
    static readonly NEW_PLAYER_ID: i32 = 0;
    @lazy static jv_REMOTE_INFO: RemoteInfo | null = null;
    @lazy static js_REMOTE_INFO: bool = false;
    static get REMOTE_INFO(): RemoteInfo | null {
        if (!RemoteInfo.js_REMOTE_INFO) {
            RemoteInfo.js_REMOTE_INFO = true;
            RemoteInfo.jv_REMOTE_INFO = new RemoteInfo().jinit_RemoteInfo_4(StringUtil.getInstance()!.EMPTY_STRING, -1, -1, RemoteInfo.NEW_PLAYER_ID);
        }
        return RemoteInfo.jv_REMOTE_INFO;
    }
    static set REMOTE_INFO(value: RemoteInfo | null) {
        RemoteInfo.js_REMOTE_INFO = true;
        RemoteInfo.jv_REMOTE_INFO = value;
    }
    

    jinit_RemoteInfo_4(username: string | null, actorSessionId: i32, playerInputId: i32, id: i32): RemoteInfo {
        super.jinit_JObject_0();
        return this;
    }
}

