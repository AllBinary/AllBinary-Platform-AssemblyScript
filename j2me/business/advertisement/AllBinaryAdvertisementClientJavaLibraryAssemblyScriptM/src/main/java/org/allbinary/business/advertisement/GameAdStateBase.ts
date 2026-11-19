/*
 * 
 * AllBinary Open License Version 1 
 * Copyright (c) 2025 AllBinary 
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
// package org.allbinary.business.advertisement
// import org.allbinary.game.GameType
// import org.allbinary.game.state.GameState
// import org.allbinary.logic.communication.log.ForcedLogUtil
// import org.allbinary.logic.util.event.AllBinaryEventObject
// import org.allbinary.logic.util.event.EventStrings

@global export class GameAdStateBase extends JObject {

    jclassName(): string {
        return "org.allbinary.business.advertisement.GameAdStateBase";
    }
    adConfigurationP: AdConfiguration | null = null;
    advertisementsP: Advertisements | null = null;
    okayToShowAdsP: bool = false;

    jfields_GameAdStateBase(): void {
    
    this.advertisementsP = new Advertisements().jinit_Advertisements_0();
    this.okayToShowAdsP = false;
    }
    

    jinit_GameAdStateBase_1(adConfiguration: AdConfiguration | null): GameAdStateBase {
        super.jinit_JObject_0();
        this.jfields_GameAdStateBase();
        this.adConfigurationP = adConfiguration;
        return this;
    }
    

    initViewArray(viewArray: StaticArray<Object | null> | null): void {
    }
    

    onStart(anyType: Object | null): void {
        this.init(); if (JThrowable.pending !== null) return;
    }
    

    init(): void {
    }
    

    isShowingAtLocation(location: i32): bool {
        return false;
    }
    

    isShowingAt(): bool {
        return false;
    }
    

    show(): void {
    }
    

    hide(): void {
    }
    

    onEvent(eventObject: AllBinaryEventObject | null): void {
        ForcedLogUtil.log(EventStrings.getInstance()!.PERFORMANCE_MESSAGE, this); if (JThrowable.pending !== null) return;
    }
    

    processAdState(gameState: GameState | null, gameType: GameType | null): void {
    }
    

    processPageAdState(): void {
    }
    

    playingAdState(): void {
    }
    

    playingAdStateWH(width: i32, height: i32): void {
    }
    

    notPlayingAdState(): void {
    }
    

    setGameIsReady(gameIsReady: bool): void {
    }
    

    isGameIsReady(): bool {
        return false;
    }
    

    getAdvertisements(): Advertisements | null {
        return this.advertisementsP;
    }
    

    getAdConfiguration(): AdConfiguration | null {
        return this.adConfigurationP;
    }
    

    isOkayToShowPageAd(): bool {
        return false;
    }
    

    setOkayToShowAds(okayToShowAds: bool): void {
        this.okayToShowAdsP = okayToShowAds;
    }
    

    isOkayToShowAds(): bool {
        return this.okayToShowAdsP;
    }
    

    isEnabled(): bool {
        return false;
    }
}

