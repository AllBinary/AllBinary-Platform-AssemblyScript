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
// package org.allbinary.game.input
// import org.allbinary.game.input.analog.AnalogLocationInputFactory
// import org.allbinary.logic.communication.log.LogUtil
// import org.allbinary.logic.string.StringMaker

@global export class LocalPlayerInputIdFactory extends JObject {

    jclassName(): string {
        return "org.allbinary.game.input.LocalPlayerInputIdFactory";
    }
    @lazy static jv_instance: LocalPlayerInputIdFactory | null = null;
    @lazy static js_instance: bool = false;
    static get instance(): LocalPlayerInputIdFactory | null {
        if (!LocalPlayerInputIdFactory.js_instance) {
            LocalPlayerInputIdFactory.js_instance = true;
            LocalPlayerInputIdFactory.jv_instance = new LocalPlayerInputIdFactory().jinit_LocalPlayerInputIdFactory_0();
        }
        return LocalPlayerInputIdFactory.jv_instance;
    }
    static set instance(value: LocalPlayerInputIdFactory | null) {
        LocalPlayerInputIdFactory.js_instance = true;
        LocalPlayerInputIdFactory.jv_instance = value;
    }
    logUtil: LogUtil | null = null;
    MAX_NUMBER_OF_PLAYERS: i32 = 0;
    MAX_FAST_DEVICEID: i32 = 0;
    deviceIdToplayerId: StaticArray<i32> | null = null;
    playerIdToDeviceId: StaticArray<i32> | null = null;
    playersInPlay: StaticArray<bool> | null = null;
    totalDevicesMapped: i32 = 0;

    jfields_LocalPlayerInputIdFactory(): void {
    this.logUtil = LogUtil.getInstance();
    this.MAX_NUMBER_OF_PLAYERS = 6;
    this.MAX_FAST_DEVICEID = 65;
    this.deviceIdToplayerId = new StaticArray<i32>(this.MAX_FAST_DEVICEID);
    this.playerIdToDeviceId = new StaticArray<i32>(this.MAX_NUMBER_OF_PLAYERS);
    this.playersInPlay = new StaticArray<bool>(this.MAX_NUMBER_OF_PLAYERS);
    this.totalDevicesMapped = 0;
    }
    

    jinit_LocalPlayerInputIdFactory_0(): LocalPlayerInputIdFactory {
        super.jinit_JObject_0();
        this.jfields_LocalPlayerInputIdFactory();
        for (let index: i32 = this.deviceIdToplayerId!.length - 1; index >= 0; index--) {
            this.deviceIdToplayerId![index] = -1;
        }
        return this;
    }
    

    static getInstance(): LocalPlayerInputIdFactory | null {
        return LocalPlayerInputIdFactory.instance;
    }
    

    getDeviceId(playerInputId: i32): i32 {
        return this.playerIdToDeviceId![playerInputId];
    }
    

    getPlayerForDevice(deviceId: i32): i32 {
        let index: i32 = 0;
        if (deviceId < this.MAX_FAST_DEVICEID) {
            let playerInputId: i32 = this.deviceIdToplayerId![deviceId];
            if (playerInputId != -1) {
                return playerInputId;
            }
        } else {
            for (index = this.totalDevicesMapped - 1; index >= 0; index--) {
                if (this.playerIdToDeviceId![index] == deviceId) {
                    return index;
                }
            }
        }
        index = this.totalDevicesMapped;
        if (deviceId < this.MAX_FAST_DEVICEID) {
            this.deviceIdToplayerId![deviceId] = index;
        } else {
            this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Added DeviceId: ")!.appendint(deviceId)!.append(" beyond fast Id list")), this, "getPlayerForDevice"); if (JThrowable.pending !== null) return 0;
        } if (JThrowable.pending !== null) return 0;
        this.playerIdToDeviceId![index] = deviceId;
        AnalogLocationInputFactory.getInstance()!.addPlayer(this.totalDevicesMapped); if (JThrowable.pending !== null) return 0;
        this.totalDevicesMapped++;
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Added DeviceId: ")!.appendint(deviceId)!.append(" at: ")!.appendint(index)!.append(" Total: ")!.appendint(this.totalDevicesMapped)), this, "getPlayerForDevice"); if (JThrowable.pending !== null) return 0;
        return index;
    }
    

    getTotalDevicesInPlay(): i32 {
        let total: i32 = 0;
        for (let index: i32 = this.totalDevicesMapped - 1; index >= 0; index--) {
            if (this.playersInPlay![index] == true) {
                total++;
            }
        }
        return total;
    }
    

    isPlayerInPlay(playerInputId: i32): bool {
        return this.playersInPlay![playerInputId];
    }
    

    setPlayerInPlay(playerInputId: i32): void {
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Setting PlayerInPlay with playerInputId: ")!.appendint(playerInputId)), this, "setPlayerInPlay"); if (JThrowable.pending !== null) return;
        this.playersInPlay![playerInputId] = true;
    }
    

    setPlayerOutOfPlay(playerInputId: i32): void {
        this.logUtil!.putF(JObject.jtoString(new StringMaker().jinit_StringMaker_0()!.append("Setting PlayerOutOfPlay with playerInputId: ")!.appendint(playerInputId)), this, "setPlayerOutOfPlay"); if (JThrowable.pending !== null) return;
        this.playersInPlay![playerInputId] = false;
    }
    

    getPlayersInPlay(): StaticArray<bool> | null {
        return this.playersInPlay;
    }
}

