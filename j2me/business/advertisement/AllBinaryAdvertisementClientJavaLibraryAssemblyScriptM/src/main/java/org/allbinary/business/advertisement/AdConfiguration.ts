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
// package org.allbinary.business.advertisement
// import org.allbinary.direction.Direction
// import org.allbinary.game.state.GameState

@global export class AdConfiguration extends JObject {

    jclassName(): string {
        return "org.allbinary.business.advertisement.AdConfiguration";
    }
    INNERACTIVE: string | null = null;
    LEADBOLT: string | null = null;
    ADMOB: string | null = null;

    jfields_AdConfiguration(): void {
    
    
    
    }
    

    jinit_AdConfiguration_1(advertIdArray: StaticArray<Object | null> | null): AdConfiguration {
        super.jinit_JObject_0();
        this.jfields_AdConfiguration();
        this.INNERACTIVE = changetype<string | null>(advertIdArray![0]);
        this.ADMOB = changetype<string | null>(advertIdArray![1]);
        this.LEADBOLT = changetype<string | null>(advertIdArray![2]);
        return this;
    }
    

    getValidAdSpots(): StaticArray<Direction | null> | null {
        return changetype<StaticArray<Direction | null> | null>(new StaticArray<Direction | null>(0));
    }
    

    process(gameState: GameState | null): void {
    }
    

    processDemo(state: i32): void {
    }
    

    setShowAds(): void {
    }
    

    setToggleAds(showAds: bool): void {
    }
    

    isShowAds(): bool {
        return true;
    }
}

